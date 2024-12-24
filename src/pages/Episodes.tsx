import React from "react";
import { Layout, styles } from "../layout/layout";

const Episodes: React.FC = () => (
  <Layout title="Episode 1">
    <p style={styles.paragraph}>1</p>
    <p style={styles.paragraph}>1 </p>
    <h2 style={styles.subHeader}>List</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>1</li>
      <li style={styles.listItem}>2</li>
      <li style={styles.listItem}>3 </li>
      <li style={styles.listItem}>4</li>
      <li style={styles.listItem}>5</li>
    </ul>
  </Layout>
);

export default Episodes;
