import React from "react";
import { Layout, styles } from "../layout/layout";

const About: React.FC = () => (
  <Layout title="About Big Heads Book Club">
    <p style={styles.paragraph}>
      Big Heads Book Club is a small group formed to explore books related to
      philosophy, business, personal development, science, and other
      intellectually engaging topics. The goal is to read critically, exchange
      ideas, and deepen our understanding of complex concepts across a range of
      disciplines.
    </p>
    <p style={styles.paragraph}>
      Discussions are structured around selected readings and focus on both the
      theoretical insights and real-world applications of each book.
    </p>
    <h2 style={styles.subHeader}>Topics We Cover</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>Philosophy</li>
      <li style={styles.listItem}>Business and Entrepreneurship</li>
      <li style={styles.listItem}>Personal Development and Growth</li>
      <li style={styles.listItem}>Science and Technology</li>
      <li style={styles.listItem}>Psychology and Human Behavior</li>
    </ul>
  </Layout>
);

export default About;
