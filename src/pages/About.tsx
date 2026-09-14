import React from "react";
import { Layout, styles } from "../layout/layout";

// ✅ because files are in src/pages/components/
import Reveal from "./components/Reveal";
import LazyMount from "./components/LazyMount";

const About: React.FC = () => {
  const renderYouTube = (
    videoId: string,
    title: string,
    delayMs: number = 0
  ) => (
    <Reveal delayMs={delayMs}>
      <LazyMount
        placeholder={
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              marginBottom: "2rem",
              borderRadius: "8px",
              background: "#000",
              opacity: 0.08,
            }}
          />
        }
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            marginBottom: "2rem",
            borderRadius: "8px",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </LazyMount>
    </Reveal>
  );

  return (
    <Layout title="About Me">
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
        <Reveal>
          <p
            style={{
              ...styles.paragraph,
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            Hello World! My name is Joe Pearson. I am a University of Pittsburgh
            Frederick Honors College student and this is my personal website. I
            publish my music solely on this domain. I am a 21-year-old conductor/composer and 
            multi-instrumentalist, with past live performances as a cellist,
            guitarist, bass guitarist, pianist, drummer, vocalist, and percussionist. The
            performance of my piece “Fractal” at the 2025 Pitt Jazz Composers
            Concert was my World Premiere as a composer.
          </p>
        </Reveal>

        <Reveal delayMs={30}>
          <h2 style={styles.subHeader}>Past Performances</h2>
        </Reveal>

        {/* New performance videos */}
        {renderYouTube("3H0TG2uoYTg", "Past Performance", 20)}

        {renderYouTube("wq8McOJZ4_Y", "Past Performance", 30)}

        {/* Existing performance videos */}
        {renderYouTube(
          "9Xb977omThA",
          "Pitt Fall 2025 Music Performance Showcase",
          40
        )}

        {renderYouTube(
          "YgRoP9RM1Mw",
          "Godfrey Lubullwa 2025 Piano Recital",
          50
        )}

        {renderYouTube(
          "ckZMItkf3sk",
          "Fractal - Pitt 2025 Jazz Composers Concert",
          60
        )}

        {/* Text-only performances */}
        <ul style={styles.list}>
          <Reveal as="li" style={styles.listItem}>
            Borelli Edwards Galleries — Solo Guitar
          </Reveal>

          <Reveal as="li" style={styles.listItem} delayMs={10}>
            Beethoven Egmont Overture — Pitt Symphony Orchestra — Conducted by
            Joe Pearson
          </Reveal>

          <Reveal as="li" style={styles.listItem} delayMs={20}>
            Holst St. Paul&apos;s Suite — Pitt Symphony Orchestra — Conducted by
            Joe Pearson
          </Reveal>

          <Reveal as="li" style={styles.listItem} delayMs={30}>
            Big Idea Center / Saxbys Jazz Hour
            <div>
              <LazyMount
                placeholder={
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      aspectRatio: "16 / 10",
                      borderRadius: "8px",
                      margin: "1rem auto 0",
                      background: "#000",
                      opacity: 0.08,
                    }}
                  />
                }
              >
                <Reveal delayMs={50}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <img
                      src="/jazz%20hour%20teaser.jpeg"
                      alt="Jazz Hour Teaser"
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              </LazyMount>
            </div>
          </Reveal>

          <Reveal as="li" style={styles.listItem} delayMs={40}>
            Pitt Jazz Ensemble Fall Concert
          </Reveal>

          <Reveal as="li" style={styles.listItem} delayMs={50}>
            Pitt Jazz Ensemble Kickoff Concert
          </Reveal>

          <Reveal as="li" style={styles.listItem} delayMs={60}>
            University of Pittsburgh Symphony Orchestra — Freedom of Thought and
            Action
          </Reveal>

          <Reveal as="li" style={styles.listItem} delayMs={70}>
            Grains and Greens with Tachyonmetry
          </Reveal>
        </ul>
      </div>
    </Layout>
  );
};

export default About;