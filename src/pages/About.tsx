import React from "react";
import { Layout, styles } from "../layout/layout";

const About: React.FC = () => (
  <Layout title="About Me">
    <p style={styles.paragraph}>
      Streaming sucks, find my music here and only here. Feel free to download it if you enjoy it.
    </p>
    <p style={styles.paragraph}>

    </p>
     <h2 style={styles.subHeader}>Future Performances</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>Grains and Greens with Tachyonmetry - May 14</li>
    </ul>
    <h2 style={styles.subHeader}>Past Performances</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>Godfrey Lubullwa 2025 Piano Recital</li>
      <li style={styles.listItem}>Fractal - Pitt 2025 Jazz Composers Concert</li>
    </ul>
  </Layout>
);

export default About;
