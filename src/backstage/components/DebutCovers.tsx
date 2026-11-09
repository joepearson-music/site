import React from "react";
import petalVideo from "../../media/asingle.mp4";
import keysVideo from "../../media/ydkmn.mp4";
import brownVideo from "../../media/iammmw.mp4";
import dayTripperVideo from "../../media/day_tripper.mp4";
import bachVideo from "../../media/bachcello.mp4";
import { CoverEssay } from "../coverEssays/types";
import { petalEssay } from "../coverEssays/petal";
import { keysEssay } from "../coverEssays/keys";
import { brownEssay } from "../coverEssays/brown";
import { beatlesEssay } from "../coverEssays/beatles";
import { bachEssay } from "../coverEssays/bach";
import "./DebutCovers.css";

const analysesBase =
  "https://github.com/joepearson-music/site/tree/album-analysis/analysis/debut-album";
const imageBase =
  "https://raw.githubusercontent.com/joepearson-music/site/album-analysis/analysis/debut-album";

const coverTracks: Array<{ essay: CoverEssay; video: string; number: number }> = [
  { essay: petalEssay, video: petalVideo, number: 4 },
  { essay: keysEssay, video: keysVideo, number: 9 },
  { essay: brownEssay, video: brownVideo, number: 10 },
  { essay: beatlesEssay, video: dayTripperVideo, number: 11 },
  { essay: bachEssay, video: bachVideo, number: 12 },
];

const countWords = (essay: CoverEssay) =>
  essay.sections
    .flatMap((section) => section.paragraphs)
    .join(" ")
    .trim()
    .split(/\s+/)
    .length;

const DebutCovers: React.FC = () => (
  <section className="debut-covers" aria-label="Debut album cover recording research">
    <p>
      Five interpretations from <em>Self Titled</em>, in their actual album order.
      Each essay researches the original work first, then places Pearson's version
      alongside it. Instrumentation is taken from Pearson's own earlier account of
      the album; video durations and file properties come from the GitHub
      FFprobe analysis. Unverified musical or visual moments have deliberately
      not been invented.
    </p>

    <nav className="debut-covers-index" aria-label="Jump to a cover">
      <ol>
        {coverTracks.map(({ essay, number }) => (
          <li key={essay.id}>
            <a href={`#backstage-${essay.id}`}>
              {String(number).padStart(2, "0")} · {essay.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>

    {coverTracks.map(({ essay, video, number }) => (
      <article key={essay.id} className="debut-cover" id={`backstage-${essay.id}`}>
        <p className="debut-cover-number">
          Track {String(number).padStart(2, "0")} · Cover
        </p>
        <h3>{essay.title}</h3>
        <p className="debut-cover-attribution">
          Original: {essay.attribution} · {essay.origin}
        </p>
        <p className="debut-cover-performance">
          {essay.performance} · {essay.duration}
        </p>
        <figure className="debut-cover-video">
          <video
            controls
            playsInline
            preload="none"
            aria-label={`Album video and audio of Pearson performing ${essay.title}`}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support this MP4 file.
          </video>
          <figcaption>
            Original album MP4, with audio and the visual representation
            accompanying the track.
          </figcaption>
        </figure>

        <details className="debut-cover-essay">
          <summary>
            Read historical and descriptive essay · {countWords(essay).toLocaleString("en-US")} words
          </summary>
          <div className="debut-cover-essay-body">
            {essay.sections.map((section, i) => (
              <section key={i} aria-label={section.heading}>
                <h4>{section.heading}</h4>
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </section>
            ))}
            <section className="debut-cover-sources" aria-label={`Sources for ${essay.title}`}>
              <h4>Research sources</h4>
              <ol>
                {essay.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noopener noreferrer" target="_blank">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </details>

        <details className="debut-cover-evidence">
          <summary>See extracted waveform and technical inspection</summary>
          <div className="debut-cover-evidence-body">
            <p>
              The following still image was generated from the MP4's audio
              amplitude. It is separate from the animated visual presented
              in the original video. A waveform cannot identify instruments,
              pitches, chords, lyrics or musical intention.
            </p>
            <a href={`${analysesBase}/${essay.id}/README.md`} target="_blank" rel="noopener noreferrer">
              Open the complete inspection packet (metadata, frames and spectrogram)
            </a>
            <a href={`${imageBase}/${essay.id}/waveform.png`} target="_blank" rel="noopener noreferrer">
              <img
                src={`${imageBase}/${essay.id}/waveform.png`}
                alt={`Computer-generated full-length amplitude waveform for ${essay.title}; changes in the height of the trace show changes in signal level over time, not individual notes.`}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </details>
      </article>
    ))}
  </section>
);

export default DebutCovers;
