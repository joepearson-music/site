/** Instrument data and twelve-tone equal-temperament pitch calculations. */
export interface InstrumentConfiguration {
  id: string;
  name: string;
  openStrings: readonly number[]; // MIDI, lowest string first
  semitones: number;
}

export const INSTRUMENTS: Record<string, InstrumentConfiguration> = {
  violin: { id: "violin", name: "Violin", openStrings: [55, 62, 69, 76], semitones: 12 },
  viola: { id: "viola", name: "Viola", openStrings: [48, 55, 62, 69], semitones: 12 },
  cello: { id: "cello", name: "Cello", openStrings: [36, 43, 50, 57], semitones: 12 },
  guitar: { id: "guitar", name: "Guitar", openStrings: [40, 45, 50, 55, 59, 64], semitones: 12 },
  bassGuitar: { id: "bass-guitar", name: "Bass guitar", openStrings: [28, 33, 38, 43], semitones: 12 },
};

const PITCH_CLASSES = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"] as const;

export function pitchClass(midi: number): string {
  return PITCH_CLASSES[((midi % 12) + 12) % 12];
}

export function pitchName(midi: number): string {
  return `${pitchClass(midi)}${Math.floor(midi / 12) - 1}`;
}

export function spokenPitchName(midi: number): string {
  return `${pitchClass(midi).replace("♯", " sharp ").trim()} ${Math.floor(midi / 12) - 1}`;
}

export function midiToFrequency(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

export interface FingerboardNote {
  id: string;
  stringIndex: number;
  semitone: number;
  midi: number;
  label: string;
  name: string;
  accessibilityLabel: string;
}

/** One array per string; positions run from the open string to its octave. */
export function getFingerboardNotes(config: InstrumentConfiguration): FingerboardNote[][] {
  return config.openStrings.map((openMidi, stringIndex) =>
    Array.from({ length: config.semitones + 1 }, (_, semitone) => {
      const midi = openMidi + semitone;
      return {
        id: `${config.id}-${stringIndex}-${semitone}`,
        stringIndex,
        semitone,
        midi,
        label: pitchClass(midi),
        name: pitchName(midi),
        accessibilityLabel: `${spokenPitchName(midi)}, ${pitchClass(openMidi)} string`,
      };
    })
  );
}
