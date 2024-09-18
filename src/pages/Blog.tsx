import React from "react";

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, excerpt }) => (
  <div
    style={{
      marginBottom: "20px",
      borderBottom: "1px solid #ccc",
      paddingBottom: "20px",
    }}
  >
    <h3>{title}</h3>
    <p>
      <small>{date}</small>
    </p>
    <p>{excerpt}</p>
    <a href="blogposts">Read more</a>
  </div>
);

const Blogs: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2>My Blog</h2>
    <BlogPost
      title="New Personal Website!"
      date="September 20, 2024"
      excerpt="I made a new website! This is my 5th blog post. I hope you enjoy it."
    />
    <BlogPost
      title="Welcome to the Carbon-Calc site!"
      date="January 14, 2024"
      excerpt="Hello and welcome to my fourth blog! Thank you for your time. I hope to outline this new site as well as some updates since my last blog post."
    />
    <BlogPost
      title="Continuation of Our Carbon Calculator Journey"
      date="January 8, 2024"
      excerpt="From my first 'Hello World' to building complex web applications..."
    />
    <BlogPost
      title="Progress Update on the Carbon Calculator"
      date="December 24, 2023"
      excerpt="Hello! This is my second blog post updating our progress on the carbon calculator."
    />
    <BlogPost
      title="Journey Begins with Carbon Calculator"
      date="December 5, 2023"
      excerpt="This blog post is an introduction to my journey in developing a carbon calculator and learning to code."
    />
  </div>
);

export default Blogs;
