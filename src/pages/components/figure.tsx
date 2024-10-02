import React, { useEffect, useRef, useState } from "react";

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
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const getImageWidth = () => {
    if (typeof size === "number") {
      return `${size}%`;
    }
    switch (size) {
      case "small":
        return "70%";
      case "large":
        return "100%";
      case "medium":
      default:
        return "85%";
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div ref={containerRef} style={styles.outerContainer}>
      <figure style={styles.figureContainer}>
        {title && <h3 style={styles.title}>{title}</h3>}
        <div
          style={{
            ...styles.imageWrapper,
            width: getImageWidth(),
            maxWidth: `${containerWidth}px`,
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            style={styles.image}
            onClick={toggleExpand}
          />
        </div>
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
    </div>
  );
};

const styles = {
  outerContainer: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
  },
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
  imageWrapper: {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    boxSizing: "border-box" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    cursor: "pointer",
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
