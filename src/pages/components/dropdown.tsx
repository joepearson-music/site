import React, { useState } from "react";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownStyles = {
    container: {
      marginBottom: "20px",
      width: "100%",
    },
    button: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "#f8f9fa",
      border: "1px solid #e9ecef",
      borderRadius: "8px",
      padding: "12px 16px",
      cursor: "pointer",
      color: "#000",
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Times New Roman",
      width: "100%",
      textAlign: "left" as const,
      transition: "all 0.2s ease",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "24px", // Fixed width
      height: "24px", // Fixed height
      flexShrink: 0, // Prevents shrinking
      color: "#495057",
    },
    iconImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover" as const, // Crops image to fit container
      objectPosition: "center", // Centers the cropped area
    },
    arrow: {
      transition: "transform 0.3s ease",
      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
      marginLeft: "auto",
      color: "#495057",
      fontSize: "16px",
    },
    content: {
      maxHeight: isOpen ? "5000px" : "0",
      overflow: "hidden",
      transition: "all 0.5s ease-in-out",
      paddingLeft: "16px",
      marginTop: isOpen ? "12px" : "0",
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flex: 1,
    },
  };

  // Function to wrap icon with proper styling if it's an image
  const renderIcon = () => {
    if (!icon) return null;

    // Check if the icon is an img element
    if (React.isValidElement(icon) && icon.type === "img") {
      return (
        <span style={dropdownStyles.iconContainer}>
          {React.cloneElement(icon as React.ReactElement, {
            style: dropdownStyles.iconImage,
          })}
        </span>
      );
    }

    // Return other types of icons as is
    return <span style={dropdownStyles.iconContainer}>{icon}</span>;
  };

  return (
    <div style={dropdownStyles.container}>
      <button
        style={{
          ...dropdownStyles.button,
          background: isOpen ? "#f1f3f5" : "#f8f9fa",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={dropdownStyles.titleContainer}>
          {renderIcon()}
          {title}
        </div>
        <span style={dropdownStyles.arrow}>▶</span>
      </button>
      <div style={dropdownStyles.content}>{children}</div>
    </div>
  );
};

export default Dropdown;
