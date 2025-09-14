import React from "react";
import { Layout, styles } from "..//layout/layout";
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const linkStyle = {
    color: "#0066cc",
    textDecoration: "none",
    display: "block",
    marginBottom: "4px",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const headerStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  return (
    <Layout title="NEW MUSIC...">
      <p style={styles.paragraph}>
        Hello World; My name is Joe Pearson, I am a University of Pittsburgh Frederick Honors College student and this is my personal website. I plan to publish my music solely on this domain.
      </p>
      <div style={{ margin: "20px 0", textAlign: "center" }}>
  <img
    src="/selftitledteaser.png"
    alt="Self-titled project teaser"
    style={{ width: "100%", maxWidth: "600px", height: "auto", borderRadius: "8px" }}
    loading="lazy"
  />
  <p style={{ marginTop: "8px" }}>
    My upcoming self-titled project — coming soon.
  </p>
</div>
      <h2 style={styles.subHeader}>Site Development 🛠️</h2>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          border: "1px solid #ddd",
          borderRadius: "4px",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: 0 }}>
        Note: This site is still in development and constantly
        being updated!
        </p>

      </div>

      <CustomSocialBar />
    </Layout>
  );
};

export default HomePage;
