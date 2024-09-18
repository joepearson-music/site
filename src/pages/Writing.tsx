import React from "react";

interface WritingItemProps {
  title: string;
  type: string;
  link: string;
}

const WritingItem: React.FC<WritingItemProps> = ({ title, type, link }) => (
  <div style={{ marginBottom: "20px" }}>
    <h3>{title}</h3>
    <p>
      <small>{type}</small>
    </p>
    <a href={link}>Read more</a>
  </div>
);

const Writing: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2>My Writing</h2>
    <WritingItem
      title="Thesis: The Impact of Sustainable Practices on Business Growth"
      type="Academic Paper"
      link="#thesis"
    />
    <WritingItem
      title="How Sustainable Business Can Build a Better Future"
      type="Essay"
      link="#sustainable-business-essay"
    />
    {/* Add more WritingItem components for other pieces */}
  </div>
);

export default Writing;
