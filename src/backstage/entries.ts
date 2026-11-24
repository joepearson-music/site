import { BackstageEntry } from "./types";

/**
 * Append new independent entries here, never replacing previous ones by default.
 * Store media in public/backstage-media/<entry-id>/ and reference it using
 * absolute paths such as /backstage-media/<entry-id>/photo.jpg.
 */
export const backstageEntries: BackstageEntry[] = [
  {
    id: "2026-11-23-violin-fingerboard",
    title: "Violin fingerboard",
    date: "2026-11-23",
    summary: [{ text: "An interactive chromatic pitch grid for violin. Select notes to play pure sine waves." }],
    blocks: [
      { type: "custom", componentId: "violin-fingerboard" },
      { type: "link", href: "/backstage/violin", label: "Open the violin grid on its own page" }
    ]
  },
  {
    "id": "2026-11-17-nature-is-music",
    "title": "Nature is Music (cicadas in the tropical night)",
    "date": "2026-11-17",
    "summary": [
      {
        "text": "An analysis of how Duke Ellington was inspired by nature. Joe Pearson · Originally written 2024; revised 2026."
      }
    ],
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A bird calls somewhere along a Florida highway. The musicians traveling past it have little time to stop, but Duke Ellington hears something he wants to keep. In his autobiography, "
          },
          {
            "text": "Music Is My Mistress",
            "italic": true
          },
          {
            "text": ", Ellington remembers writing down the phrase and later turning it into “Sunset and the Mocking Bird,” a movement of "
          },
          {
            "text": "The Queen’s Suite",
            "italic": true
          },
          {
            "text": ". Whether the bird was indeed a mockingbird was his conclusion after asking others, not an ornithological identification. What matters musically is the journey from a sound heard in passing to a melody deliberately placed within an orchestral composition. The natural world did not write the music for him. It offered an event that he could remember, interpret, and transform. [1][2]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "That distinction is central to understanding nature in Ellington's work. Natural images appear in titles, in stories Ellington told about composing, and in music that seems to invite listeners to imagine colors, landscapes, weather, or motion. These are not identical forms of evidence. A composer’s account of hearing a bird is evidence of a stated inspiration; a title such as “Mood Indigo” suggests a field of associations without establishing that a particular sunset caused the composition; and a river represented through music and dance is an artistic metaphor rather than a recording of water. "
          },
          {
            "text": "Ellington's achievement was not simply to imitate nature, but to turn natural phenomena into musical relationships—between an individual voice and an ensemble, stillness and movement, fragility and force, and the passage of time.",
            "bold": true
          },
          {
            "text": " Examining these relationships also reveals how easily an evocative title can tempt a listener to claim more than the historical evidence supports."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Nature as experience: *The Queen's Suite*",
        "level": 3
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Ellington's orchestra became nationally prominent during its Cotton Club engagement in Harlem, beginning in 1927, and his decades of composing were inseparable from the musicians whose individual sounds he knew so well. The orchestra was not a neutral machine for realizing abstract scores: the particular tone of a clarinet, trombone, or saxophone could become a compositional resource. Billy Strayhorn, his essential creative partner, contributed substantially to the orchestra's repertoire and to "
          },
          {
            "text": "The Queen's Suite",
            "italic": true
          },
          {
            "text": ". To attribute every note of the suite simply to Ellington would obscure the collaboration. [3][4]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The suite was conceived following Ellington's encounter with Queen Elizabeth II in 1958 and recorded in 1959. Ellington had a single copy prepared for the Queen; the music was not issued commercially until after his death, in 1976. The gift's apparent exclusivity is part of its history, but the suite's subject matter reaches beyond the court. Its movements include “Sunset and the Mocking Bird,” “Lightning Bugs and Frogs,” “Northern Lights,” and “The Single Petal of a Rose.” They gather small and large experiences of beauty rather than present a continuous landscape narrative. [2][4]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The story of “Sunset and the Mocking Bird” provides the clearest documented case of natural inspiration in this essay. Ellington recalls traveling between engagements in Florida, hearing a striking bird call near sunset, writing the phrase down, and eventually orchestrating it. The music's relationship to nature therefore begins with "
          },
          {
            "text": "listening",
            "italic": true
          },
          {
            "text": ": a moment of attention amid a demanding professional itinerary. Yet its eventual orchestration introduces choices that the bird did not make. A phrase must be shaped, repeated, harmonized, distributed among instruments, and situated in musical time. The Smithsonian's catalog of surviving parts identifies material for reeds, trumpets, trombones, and bass in the piece, a useful reminder that the remembered birdcall became ensemble music. Those archival descriptions do not, by themselves, establish which instrument plays which phrase in any particular recording. [1][5]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "There is a productive paradox here. A brief sound, initially beyond the composer's control, becomes the material of a carefully constructed work. Rather than treat transcription as the endpoint, Ellington treats it as a beginning. The title names both the creature and the time of day: an audible event surrounded by an imagined visual atmosphere. “Sunset” is not itself a pitch or rhythm, but it changes how we hear the musical recollection. The listener is invited to hear a melody as something located in the world."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "“The Single Petal of a Rose” approaches nature from a different direction. Unlike the full orchestral image suggested by the mockingbird movement, the recording is an intimate piano performance with bassist Jimmy Woode. The arrangement's restraint is consequential: the piano carries the foreground, while the bass gives it a second presence without filling the space with a large ensemble. The title suggests something delicate and singular, and the small instrumentation allows individual gestures to remain exposed. This is an interpretation of the music's relationship to its title, not proof that particular notes represent the shape or movement of a rose petal. [4][6]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The Smithsonian catalogs piano and bass parts for the piece within its Ellington Collection. That physical trace matters for another reason: an apparently spontaneous, intimate musical moment still belongs to the material practices of composition, rehearsal, notation, and performance. Nature here is neither raw sound nor an escape from craft. It is an idea made persuasive by craft. [6]"
          }
        ]
      },
      {
        "type": "heading",
        "text": "A river as form, movement, and time",
        "level": 3
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If "
          },
          {
            "text": "The Queen's Suite",
            "italic": true
          },
          {
            "text": " collects experiences of beauty, "
          },
          {
            "text": "The River",
            "italic": true
          },
          {
            "text": " (1970) makes a natural process the basis of an extended dramatic structure. Commissioned for American Ballet Theatre's anniversary, the work brought Ellington into collaboration with choreographer Alvin Ailey and arranger Ron Collier. Its premiere took place on June 25, 1970, at New York's State Theater, as a work still in progress. Accounts of the number of projected and performed sections vary because the work existed in sketches, orchestral arrangements, choreographed selections, and subsequent versions. It is therefore misleading to present one eight-movement list as the definitive original suite. [7][8][9]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The governing idea is more important than any single track list. A river has a source, gathers speed, encounters obstacles, changes character, and reaches a larger body of water. Such a process can be expressed in music without requiring literal water sounds. The Boston Symphony Orchestra's program notes describe Ellington sketching at the piano and working with his ensemble, while Collier prepared the orchestration for ballet. They also identify a broad orchestral palette: winds, brass, percussion, piano, harp, and strings. The river's transformations could thus be enacted through changes in musical density, register, rhythm, and instrumental color, as well as through dancers' bodies. [7]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The movement names—among them “Spring,” “Falls,” “Vortex,” and “Lake” in the ballet's archival record—already distinguish different behaviors of water. A spring suggests emergence; a fall, sudden downward energy; a vortex, circular movement; a lake, relative suspension. These are interpretive possibilities rather than substitute score analyses. What can be established is that Ellington and Ailey organized the work around a sequence of transformations, not a single atmospheric image. [8]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "There is also a philosophical dimension. In the Los Angeles Philharmonic's account, Ellington's conception follows water toward the sea and ultimately toward evaporation and return. The natural cycle becomes a metaphor for life, death, and rebirth. A river is a compelling subject for music precisely because neither can be grasped as a fixed object: both unfold through time. But the analogy has limits. The river's movement is physical; the composition's movement is created through human decisions about form and performance. Ellington's imagination connects the two without making them equivalent. [9]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The ballet's collaborative history further complicates the idea of nature speaking directly through one composer. Ailey chose what could be danced, Collier orchestrated material for the stage, and performers gave the scenes their bodily shape. The result is an artistic ecology of its own: different people and media interacting to make an image of a natural system."
          }
        ]
      },
      {
        "type": "heading",
        "text": "A flower imagined: “Fleurette Africaine”",
        "level": 3
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A third approach appears in “Fleurette Africaine,” also circulated under titles such as “African Flower” and “Le Fleurs Africaines.” Ellington recorded the piece in a piano trio with Charles Mingus and Max Roach on September 17, 1962, for the album "
          },
          {
            "text": "Money Jungle",
            "italic": true
          },
          {
            "text": ", released in 1963. The smaller ensemble produces a striking contrast with the orchestral breadth of "
          },
          {
            "text": "The River",
            "italic": true
          },
          {
            "text": ". [10][11]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "In an account of the session reproduced from Ellington's memoir, he describes asking the players to imagine a fragile flower growing deep in a forest, unseen by people. The story is evidence for a creative prompt he gave the musicians, but it should not be treated as a factual description of African geography or of a universal “African philosophical point of view.” Africa is not a single landscape or culture, and the imagined flower is Ellington's poetic construction. [12]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The resulting trio performance is especially revealing because the metaphor does not require an instrumental imitation of a flower. A flower makes no audible melody to transcribe. Instead, the image organizes an attitude toward playing: a delicate subject in an immense imagined environment. Reviews of the session emphasize the piece's subdued character, with Mingus's bass and Roach's drumming supporting Ellington's piano. In the context of "
          },
          {
            "text": "Money Jungle",
            "italic": true
          },
          {
            "text": ", where other performances are forceful and rhythmically contentious, this restraint is meaningful. The natural image helps define an expressive scale and relationship among players rather than a literal sonic picture. [11]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The contrast between the mockingbird and the flower is instructive. In one case, a real sound reportedly becomes a melodic starting point; in the other, an imagined scene becomes an instruction for musical behavior. Both involve nature, but the creative mechanisms differ. Conflating them would weaken rather than strengthen the argument."
          }
        ]
      },
      {
        "type": "heading",
        "text": "The color of sound: “Transblucency” and “Mood Indigo”",
        "level": 3
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Some Ellington compositions make their relationship to nature most apparent through language. “Transblucency,” subtitled “A Blue Fog That You Can Almost See Through,” is a particularly intriguing example. A documented recording dated July 9, 1946, features Kay Davis's wordless voice with Ellington's orchestra. Her voice functions as a timbral instrument rather than a vehicle for descriptive lyrics. The title's imagined fog is therefore not explained verbally; it becomes a suggestion through which the listener might experience blended, elusive musical color. [13][14]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The metaphor is powerful precisely because it is impossible to translate exactly. What frequency is blue? What harmony is fog? There is no objective answer. But a composer can arrange sounds so that individual sources seem to merge or emerge, just as objects can appear indistinct through mist. The title establishes a way of attending to texture. The wordless voice further blurs the familiar division between human speech and instrumental sound. These are interpretive observations about the arrangement's expressive premise, not a claim that its acoustics reproduce atmospheric fog."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "“Mood Indigo” offers a useful test of the argument's boundaries. Written and recorded in 1930, it is celebrated for the unusual placement of clarinet in a low register and trombone above it, alongside trumpet, reversing the more conventional order of a jazz front line. John Edward Hasse's Smithsonian-associated recording notes describe how this inversion produced an extraordinary blend of colors. The technique is concrete and historically documented. [15]"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "“Indigo,” of course, is a color; one can imagine an evening sky while hearing the piece. Yet the title does not establish that Ellington composed it in response to a particular dusk, and the music's history involves Barney Bigard as well as Ellington. To call the composition an imitation of sunset would overstate the evidence. It is better understood here as a demonstration of "
          },
          {
            "text": "musical color",
            "bold": true
          },
          {
            "text": ": Ellington could make instrumental combinations evoke visual and emotional associations without specifying a landscape. This is the outer edge of the paper's subject, where nature-inspired music meets the broader human tendency to describe sound through the senses of sight and touch. [15]"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Nature is not a single musical technique",
        "level": 3
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "These works reveal no universal Ellingtonian formula for representing nature. The mockingbird becomes a remembered melodic phrase and an orchestration; the rose is associated with an exposed piano-and-bass texture; the river supplies a sequence of transformations and a metaphor of return; the flower provides an imaginative premise for trio interaction; the fog suggests ambiguity of timbre; and indigo names a color whose relationship to sound is associative rather than demonstrably biographical."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "It would be tempting to conclude that Ellington's nature imagery directly caused later musicians to compose their own landscapes. Such a claim would require evidence of reception, influence, and specific musical borrowing that these examples do not provide. Ellington's collaborations with Mingus and Strayhorn already show a more interesting story than a one-way line of influence. Musicians shared ideas, challenged one another, and transformed materials together. Nor should nature be made to overshadow the Black American musical traditions, social histories, theatrical settings, and individual performers that shaped Ellington's art."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The strongest claim is consequently narrower and more revealing: "
          },
          {
            "text": "Ellington repeatedly used the natural world as a means of thinking musically.",
            "bold": true
          },
          {
            "text": " He could hear a bird as a potential melody, imagine a flower as a condition of ensemble playing, or organize a ballet around water's passage. The distinction between observation, imagination, and interpretation matters. Without it, every atmospheric title becomes proof of an environmental source; with it, the different kinds of creativity become visible."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The bird on the Florida road did not know it was being composed. Ellington's achievement lay in recognizing a possibility in that encounter, then making something that could outlast the moment. Nature was not simply a collection of picturesque subjects for him. It was a language of attention: a way to notice fleeting experiences, give them musical form, and invite others to hear relationships they might otherwise pass by."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Sources and listening references",
        "level": 3
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "1. Duke Ellington, *Music Is My Mistress* (Doubleday, 1973). Original primary source for the Florida birdcall anecdote; consult a physical or licensed digital copy for exact wording. An excerpt is reproduced and contextualized in Christopher Carroll, "
          },
          {
            "text": "“Secret Music,” *Lapham's Quarterly*",
            "href": "https://www.laphamsquarterly.org/music/secret-music"
          },
          {
            "text": "."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "2. Christopher Carroll, "
          },
          {
            "text": "“Secret Music: On Duke Ellington's *The Queen's Suite*,” *Lapham's Quarterly*",
            "href": "https://www.laphamsquarterly.org/music/secret-music"
          },
          {
            "text": ". Historical and interpretive account of the suite."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "3. "
          },
          {
            "text": "Carnegie Hall, “Duke Ellington”",
            "href": "https://www.carnegiehall.org/About/History/Carnegie-Hall-Icons/Duke-Ellington"
          },
          {
            "text": ". Career overview. The Cotton Club and collaborator history are contextual background rather than the central evidence for the essay."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "4. Jack Kenny, "
          },
          {
            "text": "“Duke Ellington – The Queen's Suite,” *Jazz Views*",
            "href": "https://jazzviews.net/duke-ellington-the-queens-suite/"
          },
          {
            "text": " (September 14, 2023). Personnel, 1959 sessions, and discussion of the piano/bass performance. See also "
          },
          {
            "text": "“The Long-Playing Duke,” *Village Voice*",
            "href": "https://www.villagevoice.com/the-long-playing-duke/"
          },
          {
            "text": " for the suite's private release history."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "5. Smithsonian National Museum of American History, [“Sunset and the mockingbird [music],” Duke Ellington Collection](https://www.americanhistory.si.edu/es/collections/archival-item/sova-nmah-ac-0301-ref45750), NMAH.AC.0301_ref45750. Catalog record for surviving parts, not an openly digitized full score."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "6. Smithsonian National Museum of American History, [“Single petal of a rose [music],” Duke Ellington Collection](https://americanhistory.si.edu/collections/archival-item/sova-nmah-ac-0301-ref45096), NMAH.AC.0301_ref45096. Catalog record for piano and bass parts."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "7. Boston Symphony Orchestra, "
          },
          {
            "text": "“Suite from The River”",
            "href": "https://www.bso.org/works/suite-from-the-river"
          },
          {
            "text": ". Commission, collaboration, scoring, and premiere context."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "8. American Ballet Theatre, "
          },
          {
            "text": "“The River,” Repertory Archive",
            "href": "https://www.abt.org/ballet/the-river/"
          },
          {
            "text": ". Official premiere date and named ballet scenes."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "9. Los Angeles Philharmonic, "
          },
          {
            "text": "“The River Suite”",
            "href": "https://www.laphil.com/works/the-river-suite"
          },
          {
            "text": ". Historical program note and discussion of Ellington's cycle-of-water metaphor."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "10. "
          },
          {
            "text": "Charles Mingus Discography, *Money Jungle* session",
            "href": "https://www.jazzdisco.org/charles-mingus/catalog/"
          },
          {
            "text": ". Personnel and recording date."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "11. Ken Dryden, "
          },
          {
            "text": "*Money Jungle* review, AllMusic",
            "href": "https://www.allmusic.com/album/money-jungle-mw0000187978"
          },
          {
            "text": ". Trio performance context and recorded release."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "12. Ellington, *Music Is My Mistress* (1973), account of the trio's “Little African Flower” prompt; a secondary reproduction appears in "
          },
          {
            "text": "“Money Jungle (1962) – A Masterpiece of Disharmony”",
            "href": "https://classicrockreview.wordpress.com/2021/12/24/duke-ellington-charlie-mingus-max-roach-money-jungle-1962-a-masterpiece-of-disharmony/"
          },
          {
            "text": ". Verify exact quotation against the book before quoting it directly."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "13. MacEwan University, Fitt Jazz Collection, "
          },
          {
            "text": "“Transblucency”",
            "href": "https://fittcollection.macewan.ca/node/55944"
          },
          {
            "text": ". Discographic record: July 9, 1946; Kay Davis among personnel."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "14. Nat Hentoff, reprinted liner notes on "
          },
          {
            "text": "“Duke Ellington and His Orchestra — At His Very Best”",
            "href": "https://daveratcliffepiano.com/DE-AtHisVeryBest-1940-46.html"
          },
          {
            "text": ". Description of the wordless voice and subtitle."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "15. John Edward Hasse, "
          },
          {
            "text": "*Beyond Category* recording notes",
            "href": "https://johnedwardhasse.com/wp-content/uploads/2024/11/John-E-Hasse-Beyond-Category-CD-set-booklet.pdf"
          },
          {
            "text": ", entry on “Mood Indigo.” Discussion of the 1930 recording and unusual instrumental voicing."
          }
        ]
      }
    ]
  },
  {
    id: "2026-11-09-self-titled-cover-essays",
    title: "Self Titled — the five covers",
    date: "2026-11-09",
    summary: [
      { text: "Five researched essays on the original compositions and artists, presented alongside the album videos and waveform analysis. Each essay has its own expandable heading." }
    ],
    blocks: [
      { type: "custom", componentId: "self-titled-covers" }
    ]
  },
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
