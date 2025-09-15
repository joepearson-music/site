// src/pages/Home.tsx
import React from "react";
import { Layout, styles } from "../layout/layout";
import CustomSocialBar from "./components/socialbar";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Layout title="NEW MUSIC...">
      <p style={styles.paragraph}>
        Hello World; My name is Joe Pearson, I am a University of Pittsburgh Frederick Honors
        College student and this is my personal website. I plan to publish my music solely on
        this domain.
      </p>

      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <Link to="/newmusic" style={{ textDecoration: "none" }}>
          <img
            src="/selftitledteaser.png"
            alt="Self-titled project teaser"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "8px",
              cursor: "pointer", // makes it feel clickable
            }}
            loading="lazy"
          />
          <p style={{ marginTop: "8px", color: "#000" }}>
            My upcoming self-titled project, coming soon.
          </p>
        </Link>
      </div>

      <h2 style={styles.subHeader}>Site Development 🛠️</h2>
      <div style={styles.note}>
        <p style={{ margin: 0 }}>
          Note: This site is still in development and constantly being updated!
        </p>
      </div>

      <CustomSocialBar />
    </Layout>
  );
};

export default Home;
