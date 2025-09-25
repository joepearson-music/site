import React, { useState, useEffect } from "react";
import { Layout, styles } from "../layout/layout";
import asingleMp4 from "../media/asingle.mp4";

const NewMusic: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  // Load count when the page mounts
  useEffect(() => {
    fetch("/.netlify/functions/downloads")
      .then((res) => res.json())
      .then((data) => setDownloadCount(data.count))
      .catch(() => setDownloadCount(null));
  }, []);

  const handleDownload = async () => {
    try {
      const res = await fetch("/.netlify/functions/downloads", {
        method: "POST",
      });
      const data = await res.json();
      setDownloadCount(data.count);
    } catch (err) {
      console.error("Error updating count:", err);
    }
  };

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
            <a href={asingleMp4} onClick={handleDownload} download>
              Download Video
            </a>
          </p>
        )}

        {downloadCount !== null && (
          <p style={{ marginTop: 15 }}>Total downloads: {downloadCount}</p>
        )}
      </div>
    </Layout>
  );
};

export default NewMusic;
