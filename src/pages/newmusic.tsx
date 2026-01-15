import React from "react";
import { Layout, styles } from "../layout/layout";

// optional, but consistent with your other pages
import Reveal from "./components/Reveal";

const NewMusic: React.FC = () => (
  <Layout title="New Music">
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 16px",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Reveal>
        <p
          style={{
            ...styles.paragraph,
            textAlign: "center",
            lineHeight: 1.7,
            opacity: 0.85,
          }}
        >
          My debut album is available now.
          <br />
          <br />
          I am working on a few new projects, but nothing is ready to be
          published.
        </p>
      </Reveal>
    </div>
  </Layout>
);

export default NewMusic;
