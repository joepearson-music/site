import React from "react";

const Resume: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2>Jack Pearson Resume</h2>
    <p>
      <a
        href="mailto:jackpearson@pitt.edu"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        jackpearson@pitt.edu
      </a>{" "}
      | (267) - 218 - 8860 | LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/jackbpearson/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        jackbpearson
      </a>
    </p>

    <h3>Education</h3>
    <p>
      <strong>University of Pittsburgh,</strong> Fredrick Honors College,
      College of Business Administration
    </p>
    <p>August 2021-December 2024</p>
    <p>
      Bachelors of Philosophy in Business Administration, Major in Finance,
      Minor in Spanish
    </p>
    <p>GPA 3.6/4</p>
    <p>
      <strong>Relevant Coursework:</strong> Consulting Field Project (Katz),
      Environmental Economics (CMU), Markets and Trading, Sustainability Honors
    </p>

    <h3>Experience</h3>
    <h4>Forevergreen, Pittsburgh, PA</h4>
    <p>
      <em>Co-Founder & CPO</em> | October 2023-present
    </p>
    <ul>
      <li>
        Raised over 20.5k in non-equity financing and founded a team of 6
        working to provide consumer access to carbon credits.
      </li>
      <li>
        Develop an App to calculate, track, and offset your carbon footprint,
        coded in Typescript with React Native and Expo.
      </li>
    </ul>

    <h4>BNP Paribas, New York City, NY</h4>
    <p>
      <em>Sales and Trading Intern</em> | June 2024-August 2024
    </p>
    <ul>
      <li>
        Pitched a bond trade as a High Yield Credit Analyst, building financial
        models and shadowing traders across the bank.
      </li>
      <li>
        Directly support Software and Tech Analyst in Equity research analyst
        during launch, pulling and tracking data, building valuation models from
        scratch.
      </li>
    </ul>

    <h3>Leadership and Activities</h3>
    <p>
      <strong>Pitt Men's Water Polo Club</strong>, Pittsburgh, PA
    </p>
    <p>
      <em>Vice President</em> | August 2023-December 2023
    </p>

    <h3>Certifications</h3>
    <ul>
      <li>Bloomberg Terminal</li>
      <li>Google Analytics Certification</li>
      <li>Replit 100 Days of Code (Python)</li>
    </ul>

    <h3>Skills and Interests</h3>
    <p>
      <strong>Language Skills:</strong> Fluent in English and Spanish
    </p>
    <p>
      <strong>Technical Skills:</strong> Sage50 Accounting, Excel, Python,
      JavaScript, Typescript, HTML, CSS, GitHub, Final Cut Pro, Photoshop
    </p>
    <p>
      <strong>Interests:</strong> Sustainability, guitar, running marathons,
      investing, reading, philosophy, woodworking, writing, chess
    </p>
  </div>
);

export default Resume;
