import React, { useState } from "react";

interface FigureProps {
  imageSrc: string;
  altText: string;
  caption: string;
  size?: "small" | "medium" | "large" | number;
  title?: string;
}

const Figure: React.FC<FigureProps> = ({
  imageSrc,
  altText,
  caption,
  size = "medium",
  title,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getImageWidth = () => {
    if (typeof size === "number") {
      return `${size}%`;
    }
    switch (size) {
      case "small":
        return "50%";
      case "large":
        return "100%";
      case "medium":
      default:
        return "80%";
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <figure style={styles.figureContainer}>
        {title && <h3 style={styles.title}>{title}</h3>}
        <img
          src={imageSrc}
          alt={altText}
          style={{
            ...styles.image,
            maxWidth: getImageWidth(),
            cursor: "pointer",
          }}
          onClick={toggleExpand}
        />
        <figcaption style={styles.caption}>{caption}</figcaption>
      </figure>
      {isExpanded && (
        <div style={styles.modal} onClick={toggleExpand}>
          <img src={imageSrc} alt={altText} style={styles.expandedImage} />
          <button style={styles.closeButton} onClick={toggleExpand}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

const styles = {
  figureContainer: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    marginBottom: "10px",
    textAlign: "center" as const,
  },
  image: {
    height: "auto",
    marginBottom: "10px",
    transition: "transform 0.3s ease",
  },
  caption: {
    fontSize: "14px",
    color: "#666",
    textAlign: "center" as const,
  },
  modal: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  expandedImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    objectFit: "contain" as const,
  },
  closeButton: {
    position: "absolute" as const,
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Figure;
