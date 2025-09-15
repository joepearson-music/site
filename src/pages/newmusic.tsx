// src/pages/newmusic.tsx
import React, { useState } from "react";
import { Layout, styles } from "../layout/layout";
import asingleMp4 from "../media/asingle.mp4"; // ← this path is from src/pages to src/media

const NewMusic: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <Layout title="Self Titled">
      <p style={styles.paragraph}>
        <em>A Single Pedal of a Rose</em>.
      </p>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <video
          src={asingleMp4}
          controls
          preload="metadata"
          playsInline
          onError={() => setVideoError(true)}
          style={{
            width: "100%",
            maxWidth: 800,
            borderRadius: 8,
            outline: "none",
            backgroundColor: "#000",
          }}
        />
        {videoError && (
          <p style={{ marginTop: 10, color: "#b00020" }}>
            Could not load the video. Try opening it directly:{" "}
            <a href={asingleMp4}>{asingleMp4}</a>
          </p>
        )}
      </div>
    </Layout>
  );
};

export default NewMusic;
