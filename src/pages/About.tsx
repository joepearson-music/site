import React from "react";
import { Layout, styles } from "../layout/layout";

const About: React.FC = () => (
  <Layout title="About Me">
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
      <p
        style={{
          ...styles.paragraph,
          lineHeight: "1.6",
          textAlign: "justify",
        }}
      >
        I am a 20-year-old studying Music Composition & Environmental Science at the University of Pittsburgh. I study multiple instruments, with past live performances as a cellist, bass guitarist, pianist, drummer, vocalist, and percussionist. The performance of my piece “Fractal” at the 2025 Pitt Jazz Composers Concert was my World Premiere as a composer. I hate streaming, you will be able to find all of my music here on my personal website. Feel free to download it for free!
      </p>

      <h2 style={styles.subHeader}>Future Performances</h2>
      <ul style={styles.list}>
        

        <li style={styles.listItem}>
          Big Idea Center / Saxbys Jazz Hour - SPRING SCHEDULE UNCONFIRMED
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
            />
          </div>
        </li>
      </ul>

      <h2 style={styles.subHeader}>Past Performances</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
            Pitt Jazz Ensemble Fall Concert - November 20 2025
        </li>

        <li style={styles.listItem}>
            Pitt Jazz Ensemble Kickoff Concert - November 3 2025
        </li>
        <li style={styles.listItem}>University of Pittsburgh Symphony Orchestra – Freedom of Thought and Action
          
        </li>
        <li style={styles.listItem}>
          Pitt Fall 2025 Music Performance Showcase
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </li>
        <li style={styles.listItem}>Grains and Greens with Tachyonmetry</li>

        <li style={styles.listItem}>
          Godfrey Lubullwa 2025 Piano Recital
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </li>

        <li style={styles.listItem}>
          Fractal - Pitt 2025 Jazz Composers Concert
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </li>
      </ul>
    </div>
  </Layout>
);

export default About;
