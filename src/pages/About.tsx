import React from "react";
import { Layout, styles } from "../layout/layout";

const About: React.FC = () => (
  <Layout title="About Me">
    <p style={styles.paragraph}>
      I am a 20-year-old studying Music Composition & Environmental Science at the University of Pittsburgh. I study multiple instruments, with past live performances as a cellist, bass guitarist, pianist, drummer, vocalist, and percussionist. The performance of my piece “Fractal” at the 2025 Pitt Jazz Composers Concert was my World Premiere as a composer. I hate streaming, you will be able to find all of my music here on my personal website. Feel free to download it for free!
    </p>

    <h2 style={styles.subHeader}>Future Performances</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>
  Big Idea Center / Saxbys Jazz Hour - 10:30 AM every Friday
  <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
    <img
      src="/jazz%20hour%20teaser.jpeg"
      alt="Jazz Hour Teaser"
      style={{ width: "50%", height: "auto", borderRadius: "8px" }}
    />
  </div>
</li>
    </ul>

    <h2 style={styles.subHeader}>Past Performances</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>Grains and Greens with Tachyonmetry</li>

      <li style={styles.listItem}>
        Godfrey Lubullwa 2025 Piano Recital
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YgRoP9RM1Mw"
            title="Godfrey Lubullwa 2025 Piano Recital"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </li>

      <li style={styles.listItem}>
        Fractal - Pitt 2025 Jazz Composers Concert
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ckZMItkf3sk"
            title="Fractal - Pitt 2025 Jazz Composers Concert"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </li>
    </ul>
  </Layout>
);

export default About;
