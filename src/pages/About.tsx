import React from "react";
import { Layout, styles } from "../layout/layout";

// ✅ because files are in src/pages/components/
import Reveal from "./components/Reveal";
import LazyMount from "./components/LazyMount";

const About: React.FC = () => (
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
          I am a 20-year-old studying Music Composition & Environmental Science
          at the University of Pittsburgh. I study multiple instruments, with
          past live performances as a cellist, bass guitarist, pianist, drummer,
          vocalist, and percussionist. The performance of my piece “Fractal” at
          the 2025 Pitt Jazz Composers Concert was my World Premiere as a
          composer. I hate streaming, you will be able to find all of my music
          here on my personal website. Feel free to download it for free!
        </p>
      </Reveal>

      <Reveal delayMs={30}>
        <h2 style={styles.subHeader}>Future Performances</h2>
      </Reveal>

      <ul style={styles.list}>
        <Reveal as="li" style={styles.listItem}>
          Conducting the Pitt Symphony Orchestra - Feb 18th 2026 &amp; March 22
          2026
        </Reveal>

        <Reveal as="li" style={styles.listItem} delayMs={20}>
          Big Idea Center / Saxbys Jazz Hour - Fridays 10:30 AM to 11:30 AM
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
      </ul>

      <Reveal delayMs={30}>
        <h2 style={styles.subHeader}>Past Performances</h2>
      </Reveal>

      <ul style={styles.list}>
        <Reveal as="li" style={styles.listItem}>
          Pitt Jazz Ensemble Fall Concert - November 20 2025
        </Reveal>

        <Reveal as="li" style={styles.listItem} delayMs={10}>
          Pitt Jazz Ensemble Kickoff Concert - November 3 2025
        </Reveal>

        <Reveal as="li" style={styles.listItem} delayMs={20}>
          University of Pittsburgh Symphony Orchestra – Freedom of Thought and
          Action
        </Reveal>

        <Reveal as="li" style={styles.listItem} delayMs={30}>
          Pitt Fall 2025 Music Performance Showcase
          <div>
            <LazyMount
              placeholder={
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    marginTop: "1rem",
                    borderRadius: "8px",
                    background: "#000",
                    opacity: 0.08,
                  }}
                />
              }
            >
              <Reveal delayMs={60}>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    marginTop: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/9Xb977omThA?si=I5xvG_f5khXloFNk"
                    title="Pitt Music Performance Showcase- October 13, 2025"
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
              </Reveal>
            </LazyMount>
          </div>
        </Reveal>

        <Reveal as="li" style={styles.listItem} delayMs={40}>
          Grains and Greens with Tachyonmetry
        </Reveal>

        <Reveal as="li" style={styles.listItem} delayMs={50}>
          Godfrey Lubullwa 2025 Piano Recital
          <div>
            <LazyMount
              placeholder={
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    marginTop: "1rem",
                    borderRadius: "8px",
                    background: "#000",
                    opacity: 0.08,
                  }}
                />
              }
            >
              <Reveal delayMs={60}>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    marginTop: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/YgRoP9RM1Mw"
                    title="Godfrey Lubullwa 2025 Piano Recital"
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
              </Reveal>
            </LazyMount>
          </div>
        </Reveal>

        <Reveal as="li" style={styles.listItem} delayMs={60}>
          Fractal - Pitt 2025 Jazz Composers Concert
          <div>
            <LazyMount
              placeholder={
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    marginTop: "1rem",
                    borderRadius: "8px",
                    background: "#000",
                    opacity: 0.08,
                  }}
                />
              }
            >
              <Reveal delayMs={60}>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    marginTop: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/ckZMItkf3sk"
                    title="Fractal - Pitt 2025 Jazz Composers Concert"
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
              </Reveal>
            </LazyMount>
          </div>
        </Reveal>
      </ul>
    </div>
  </Layout>
);

export default About;
