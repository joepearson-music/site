import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import PreJackPearsonBlogs from "./pre-jack-pearson-blogs";

export interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

// Define the BlogPostItem component
export const BlogPostItem: React.FC<BlogPostProps> = ({
  title,
  date,
  excerpt,
  slug,
}) => (
  <div style={{ marginBottom: "40px" }}>
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    <p style={{ marginBottom: "10px", fontStyle: "italic" }}>{date}</p>
    <p>{excerpt}</p>
    <Link to={`/blog/${slug}`} style={linkStyle}>
      Read more
    </Link>
  </div>
);

// Define the BlogList component
const BlogList: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2 style={{ marginBottom: "40px" }}>My Blog</h2>
    <BlogPostItem
      title="New Personal Website!"
      date="September 20, 2024"
      excerpt="I made a new website! This is my 5th blog post. I hope you enjoy it."
      slug="new-site"
    />
    <BlogPostItem
      title="My Coding Orgins"
      date="December 5, 2023 - January 14, 2024"
      excerpt="These are all the blogs I wrote before I made this website.)"
      slug="pre-jack-pearson-blogs"
    />
  </div>
);

// Define the main Blog component with routes
const Blog: React.FC = () => (
  <Routes>
    <Route path="/" element={<BlogList />} />
    <Route path="/pre-jack-pearson-blogs" element={<PreJackPearsonBlogs />} />
  </Routes>
);

const linkStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "blue",
  textDecoration: "underline",
};

export default Blog;
