import { BackstageEntry } from "./types";

/**
 * Append new independent entries here, never replacing previous ones by default.
 * Store media in public/backstage-media/<entry-id>/ and reference it using
 * absolute paths such as /backstage-media/<entry-id>/photo.jpg.
 */
export const backstageEntries: BackstageEntry[] = [
  {
    id: "2026-11-09-sarabande-in-ab-minor",
    title: "Sarabande in A-flat minor",
    date: "2026-11-09",
    summary: [
      { text: "A short sarabande for nylon-string guitar, written for a Music Theory 3 assignment and recorded on an Almanza guitar." }
    ],
    blocks: [
      {
        type: "audio",
        src: "/backstage-media/2026-11-09-sarabande-in-ab-minor/sarabande-in-ab-minor.mp3",
        title: "Sarabande in A-flat minor — recording (0:47)",
        caption: "Performed on an Almanza nylon-string guitar.",
        credit: "Joe Pearson"
      },
      {
        type: "score",
        src: "/backstage-media/2026-11-09-sarabande-in-ab-minor/sarabande-in-ab-minor.pdf",
        title: "Sarabande in A-flat minor — score",
        description: "Two-page score from the Theory 3 assignment, with a two-part setting followed by a four-part setting."
      },
      {
        type: "details",
        label: "About the piece · influences, score description and album plans",
        blocks: [
          {
            type: "paragraph",
            content: [
              { text: "This sarabande began as a Music Theory 3 assignment rather than as a planned album track. It was played on an Almanza nylon-string guitar, and its starting points were two different approaches to the sarabande: the opening of Beethoven's Egmont Overture and the Sarabande from Bach's First Cello Suite. The connection is in the character of a measured, weighty dance rather than a claim that this piece reproduces either source." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { text: "The music is written in A-flat minor, a key with seven flats. That choice also makes the piece a possible fit for Ab, Earth Theory. It has not yet been assigned a place on that album: it could become a standalone addition, or it might be attached to another composition instead." }
            ]
          },
          {
            type: "heading",
            text: "Reading the score",
            level: 3
          },
          {
            type: "paragraph",
            content: [
              { text: "The PDF contains 24 measures divided into two twelve-measure versions. Page one is marked “2-part”; page two is marked “4-part.” Both are notated in 3/2, with the key signature of A-flat minor. The first page uses a reduced texture written on a grand staff, presenting a largely sustained upper and lower line. Longer note values and occasional shorter figures give the score a deliberate, spacious appearance. The second page revisits the same broad harmonic outline but fills it out into four voices, with additional movement and internal parts." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { text: "The score makes the theory assignment visible rather than hiding it. Beneath the staves are figured-bass numbers and Roman-numeral harmonic labels, including tonic, predominant, secondary-dominant and dominant harmonies. The annotations trace the harmonic motion across the piece; they are part of the submitted score, not performance instructions." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { text: "The closing progression is especially clear on both pages: the harmonic labels move through IV and ii° to V7 and finally I. Although the piece is titled in A-flat minor, the last chord is labelled with an uppercase I, and a natural sign indicates a raised third. In other words, the written music ends on a major tonic — the conventional minor-to-major closing gesture sometimes called a Picardy third." }
            ]
          },
          {
            type: "heading",
            text: "Listening and context",
            level: 3
          },
          {
            type: "paragraph",
            content: [
              { text: "The accompanying recording runs approximately 47 seconds. A single plucked, resonant nylon-string instrument carries the music, with distinct attacks followed by decay instead of the continuous sustain of a bowed instrument. The pace is unhurried, leaving the harmony and the space between notes exposed. Its sparse opening and fuller chordal gestures suit the sarabande's serious, restrained character." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { text: "For now, this entry preserves the piece as an experiment: a classroom exercise with a recorded life of its own, and a possible future connection to Ab, Earth Theory. That relationship remains undecided." }
            ]
          }
        ]
      }
    ]
  }
];
