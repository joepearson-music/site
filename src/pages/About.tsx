import React from "react";
import { Layout, styles } from "../layout/layout";

const About: React.FC = () => (
  <Layout title="About Me">
    <p style={styles.paragraph}>
      I am a 20-year-old studying Music Composition & Environmental Science at the University of Pittsburgh. I study multiple instruments, with past live performances as a cellist, bass guitarist, pianist, drummer, vocalist, and percussionist. The performance of my piece “Fractal” at the 2025 Pitt Jazz Composers Concert was my World Premiere as a composer. I hate streaming, you will be able to find all of my music here on my personal website. Feel free to download it for free!
    </p>
    <p style={styles.paragraph}>

    </p>
     <h2 style={styles.subHeader}>Future Performances</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>Big Idea Center / Saxbys Jazz Hour - 10:30 AM every Friday</li>
    </ul>
    <h2 style={styles.subHeader}>Past Performances</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>Grains and Greens with Tachyonmetry</li>
      <li style={styles.listItem}>Godfrey Lubullwa 2025 Piano Recital</li>
      <li style={styles.listItem}>Fractal - Pitt 2025 Jazz Composers Concert</li>
    </ul>
  </Layout>
);

export default About;
