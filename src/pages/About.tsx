import React from "react";
import { Layout, styles } from "../layout/layout";

const About: React.FC = () => (
  <Layout title="About Me">
    <p style={styles.paragraph}>
      Hi! My name is Jack Pearson and I am in my last semester at the University
      of Pittsburgh. I enjoy finance, business, software development, writing,
      sustainability and learning. I love making websites so I figured I would
      make a personal one to host projects and have a central location to show
      my progress.
    </p>
    <p style={styles.paragraph}>
      I am building a startup www.forevergreen.earth to fight climate change.
    </p>
    <h2 style={styles.subHeader}>My Interests</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>Finance</li>
      <li style={styles.listItem}>Business</li>
      <li style={styles.listItem}>Software Development</li>
      <li style={styles.listItem}>Writing</li>
      <li style={styles.listItem}>Sustainability</li>
    </ul>
  </Layout>
);

export default About;
