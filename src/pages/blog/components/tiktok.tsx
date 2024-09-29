import React, { useEffect } from "react";

interface TikTokEmbedProps {
  videoId: string;
  style?: React.CSSProperties;
}

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ videoId, style }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [videoId]);

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@forevergreenapp/video/${videoId}`}
      data-video-id={videoId}
      style={style}
    >
      <section>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.tiktok.com/@forevergreenapp?refer=embed`}
        >
          @forevergreenapp
        </a>
      </section>
    </blockquote>
  );
};

export default TikTokEmbed;
