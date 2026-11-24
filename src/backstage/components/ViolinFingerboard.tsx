import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getFingerboardNotes, INSTRUMENTS, InstrumentConfiguration, midiToFrequency } from "./fingerboardModel";
import "./ViolinFingerboard.css";

const GRID_HEIGHT = 854;
const NOTE_Y = (semitone: number) => 43 + semitone * 64;
const NOTE_DURATION = 0.78;
type Voice = { oscillator: OscillatorNode; gain: GainNode };

/** Configuration-driven pitch grid; violin is the only exposed interface for now. */
const Fingerboard: React.FC<{ instrument?: InstrumentConfiguration }> = ({ instrument = INSTRUMENTS.violin }) => {
  const config = instrument;
  const gridWidth = Math.max(440, 104 + (config.openStrings.length - 1) * 112);
  const stringX = (index: number) => 52 + index * ((gridWidth - 104) / (config.openStrings.length - 1));
  const strings = useMemo(() => getFingerboardNotes(config), [config]);
  const contextRef = useRef<AudioContext | null>(null);
  const voicesRef = useRef<Set<Voice>>(new Set());
  const countsRef = useRef<Map<string, number>>(new Map());
  const mountedRef = useRef(true);
  const [sounding, setSounding] = useState<ReadonlySet<string>>(() => new Set());
  const [audioError, setAudioError] = useState("");

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      voicesRef.current.forEach(({ oscillator, gain }) => {
        oscillator.onended = null;
        try { oscillator.stop(); } catch { /* Already stopped. */ }
        oscillator.disconnect();
        gain.disconnect();
      });
      voicesRef.current.clear();
      countsRef.current.clear();
      const context = contextRef.current;
      contextRef.current = null;
      if (context && context.state !== "closed") void context.close().catch(() => {});
    };
  }, []);

  const playNote = useCallback((midi: number, id: string) => {
    const AudioContextType = window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextType) {
      setAudioError("This browser does not support Web Audio.");
      return;
    }

    try {
      const context = contextRef.current ?? new AudioContextType();
      contextRef.current = context;
      if (context.state === "suspended") {
        void context.resume().catch(() => {
          if (mountedRef.current) setAudioError("Audio was blocked. Tap a note again to try.");
        });
      }

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const voice: Voice = { oscillator, gain };
      const now = context.currentTime;
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(midiToFrequency(midi), now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.012);
      gain.gain.setValueAtTime(0.12, now + 0.66);
      gain.gain.linearRampToValueAtTime(0, now + NOTE_DURATION);
      oscillator.connect(gain);
      gain.connect(context.destination);

      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
        voicesRef.current.delete(voice);
        const remaining = (countsRef.current.get(id) ?? 1) - 1;
        if (remaining > 0) countsRef.current.set(id, remaining);
        else countsRef.current.delete(id);
        if (remaining <= 0 && mountedRef.current) {
          setSounding(previous => {
            if (!previous.has(id)) return previous;
            const next = new Set(previous);
            next.delete(id);
            return next;
          });
        }
      };
      voicesRef.current.add(voice);
      countsRef.current.set(id, (countsRef.current.get(id) ?? 0) + 1);
      setSounding(previous => new Set(previous).add(id));
      if (audioError) setAudioError("");
      oscillator.start(now);
      oscillator.stop(now + NOTE_DURATION);
    } catch {
      if (mountedRef.current) setAudioError("Audio could not start. Tap a note to try again.");
    }
  }, [audioError]);

  return (
    <section className="fingerboard" aria-label={`Playable ${config.name.toLowerCase()} chromatic fingerboard`}>
      <p className="fingerboard-help">Select a note to hear its pitch. Notes can overlap.</p>
      <div className="fingerboard-matrix" style={{ maxWidth: gridWidth, aspectRatio: `${gridWidth} / ${GRID_HEIGHT}` }} role="group" aria-label={`${config.name} strings, open strings to one octave`}>
        <svg className="fingerboard-lines" viewBox={`0 0 ${gridWidth} ${GRID_HEIGHT}`} aria-hidden="true" focusable="false">
          {Array.from({ length: config.semitones + 1 }, (_, row) => (
            <line key={`row-${row}`} x1={stringX(0)} y1={NOTE_Y(row)} x2={stringX(config.openStrings.length - 1)} y2={NOTE_Y(row)} />
          ))}
          {config.openStrings.map((_, stringIndex) => (
            <line key={`string-${stringIndex}`} x1={stringX(stringIndex)} y1={NOTE_Y(0)} x2={stringX(stringIndex)} y2={NOTE_Y(config.semitones)} />
          ))}
        </svg>
        {strings.flat().map(note => (
          <button
            key={note.id}
            type="button"
            className={`fingerboard-note${sounding.has(note.id) ? " fingerboard-note--active" : ""}`}
            style={{
              left: `${(stringX(note.stringIndex) / gridWidth) * 100}%`,
              top: `${(NOTE_Y(note.semitone) / GRID_HEIGHT) * 100}%`,
            }}
            onClick={() => playNote(note.midi, note.id)}
            aria-label={note.accessibilityLabel}
            aria-pressed={sounding.has(note.id)}
            title={`${note.name} · MIDI ${note.midi}`}
          >
            {note.label}
          </button>
        ))}
      </div>
      {audioError && <p className="fingerboard-error" role="status">{audioError}</p>}
      <p className="fingerboard-caption">12 equal semitones · A4 = 440 Hz · Sine wave</p>
    </section>
  );
};

export default Fingerboard;
