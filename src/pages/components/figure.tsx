import React from "react";

interface FigureProps {
  imageSrc: string;
  altText: string;
  caption: string;
}

const Figure: React.FC<FigureProps> = ({ imageSrc, altText, caption }) => {
  return (
    <div style={styles.figureContainer}>
      <img src={imageSrc} alt={altText} style={styles.image} />
      <p style={styles.caption}>{caption}</p>
    </div>
  );
};

const styles = {
  figureContainer: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  image: {
    maxWidth: "80%",
    height: "auto",
    marginBottom: "10px",
  },
  caption: {
    fontSize: "14px",
    color: "#666",
    textAlign: "center" as const,
  },
};

export default Figure;
