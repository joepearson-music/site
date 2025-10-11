import React, { useState, useEffect } from "react";
import { Layout, styles } from "../layout/layout";
import asingleMp4 from "../media/asingle.mp4";
import freewillMp4 from "../media/freewill.mp4";
import ifsilenceMp4 from "../media/ifsilence.mp4";

const NewMusic: React.FC = () => {
  const [videoError, setVideoError] = useState<{ [key: string]: boolean }>({});
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

  const renderVideo = (src: string, title: string, key: string) => (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <p style={styles.paragraph}>
        <em>{title}</em>
      </p>
      <video
        src={src}
        controls
        preload="metadata"
        playsInline
        onError={() => setVideoError({ ...videoError, [key]: true })}
        style={{
          width: "100%",
          maxWidth: 800,
          borderRadius: 8,
          outline: "none",
          backgroundColor: "#000",
        }}
      />
      {videoError[key] && (
        <p style={{ marginTop: 10, color: "#b00020" }}>
          Could not load the video. Try opening it directly:{" "}
          <a href={src} onClick={handleDownload} download>
            Download Video
          </a>
        </p>
      )}
      {downloadCount !== null && (
        <p style={{ marginTop: 15 }}>Total downloads: {downloadCount}</p>
      )}
    </div>
  );

  return (
    <Layout title="Self Titled">
      {renderVideo(freewillMp4, "My Argument for Free Will", "freewill")}
      {renderVideo(asingleMp4, "A Single Pedal of a Rose", "asingle")}
      {renderVideo(
        ifsilenceMp4,
        "if silence exists then where is it?",
        "ifsilence"
      )}
    </Layout>
  );
};

export default NewMusic;
