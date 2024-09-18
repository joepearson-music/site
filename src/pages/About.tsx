import React from "react";

const About: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2>About Me</h2>
    <p>
      Hi! My name is Jack Pearson and I am in my last semester at the University
      of Pittsburgh. I enjoy finance, business, software development, writing,
      sustainability and learning. I love making websites so I figured I would
      make a personal one to host projects and have a central location to show
      my progress.
    </p>
    <p>
      I am building a startup www.forevergreen.earth to fight climate change.
    </p>
    <h3>My Interests</h3>
    <ul>
      <li>Finance</li>
      <li>Business</li>
      <li>Software Development</li>
      <li>Writing</li>
      <li>Sustainability</li>
    </ul>
  </div>
);

export default About;
