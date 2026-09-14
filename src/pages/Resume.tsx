import React from "react";
import "./resume.css";

const Resume: React.FC = () => (
  <div className="resume-container">
    <header className="resume-header">
      <h1>Current Resume</h1>

      <div className="contact-info">
        <a href="mailto:joepearson@pitt.edu">joepearson@pitt.edu</a>

        <span className="separator">|</span>

        <span>(267) - 333 - 3816</span>

        <span className="separator">|</span>

        <span>LinkedIn: </span>

        <a
          href="https://www.linkedin.com/in/joe-pearson-845350266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          joepearson
        </a>
      </div>
    </header>

    <section className="resume-section education-section">
      <h2>EDUCATION</h2>

      <div className="education-content">
        <div className="education-main">
          <p className="university">University of Pittsburgh</p>

          <p className="college">
            Dietrich School of Arts & Sciences - Frederick Honors College
          </p>

          <p className="degree">
            Major in Environmental Science & Music Composition
          </p>
        </div>

        <div className="education-details">
          <p className="date">August 2023-Present</p>
          <p className="gpa">GPA: 3.5/4</p>
        </div>
      </div>

      <p className="relevant-coursework">
        <strong>Relevant Coursework:</strong> Environmental Science,
        GIS GPS & Computer Methods, Entrepreneurs Toolkit, Public Speaking
      </p>
    </section>

    <section className="resume-section">
      <h2>EXPERIENCE</h2>

      <div className="experience-item">
        <h3>University of Pittsburgh Symphony Orchestra</h3>

        <p className="experience-location">Pittsburgh, PA</p>

        <p className="experience-position">
          Assistant Conductor | September 2025-Present
        </p>

        <ul>
          <li>
            Conducted over 650 years of classical music in performance and rehearsal settings.
          </li>
          <li>
            Manage sheet music, including transposition and copywork; Set the stage for rehearsals and concerts; and Perform or arrange percussion parts as needed.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Forevergreen</h3>

        <p className="experience-location">Pittsburgh, PA</p>

        <p className="experience-position">
          Co-Founder | October 2023-Present
        </p>

        <ul>
          <li>
            Raised over 20.5k in non-equity financing and worked in a team of 6
            to provide consumer access to carbon credits.
          </li>

          <li>
            Calculate, track, and offset your carbon footprint on the
            Forevergreen App, available on the IOS store.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Abbott Lab</h3>

        <p className="experience-location">Pittsburgh, PA</p>

        <p className="experience-position">
          Lake Sediment Lab Tech | May 2026-Present
        </p>

        <ul>
          <li>
            Developed a history of lake sediment deposition through C14 sampling and organic material analysis.
          </li>

          <li>
            Followed lab procedures to analyze organic material and carbonates in lake sediment samples.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Bartlett Tree Experts</h3>

        <p className="experience-location">Dublin & Emmaus, PA</p>

        <p className="experience-position">
          Arborist | May 2024-Present
        </p>

        <ul>
          <li>
            Successfully performed plant analysis and diagnostics to identify
            pests, fungus, or disease harming growth or health of plant.
          </li>

          <li>
            Learned essential skills in tree work like proper pruning, tree
            structure evaluation, climbing, tree removal, as well as storm
            damage removal.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Diamond Tropical Hardwoods</h3>

        <p className="experience-location">Telford, PA</p>

        <p className="experience-position">
          Sales & Eccomerce | Aug 2022-May 2024
        </p>

        <ul>
          <li>
            Worked with clients both in-person and via phone to sell luxury and
            sustainable products.
          </li>

          <li>
            Coordinated E-commerce and created product listings for raw and
            finished products.
          </li>

          <li>
            Worked on a team that developed and designed a website that
            generated 200k in revenue.
          </li>
        </ul>
      </div>
    </section>

    <section className="resume-section">
      <h2>LEADERSHIP AND ACTIVITIES</h2>

      <div className="experience-item">
        <h3>Open Studio</h3>

        <p className="experience-location">Pittsburgh, PA</p>

        <p className="experience-position">
          Vice President | January 2026-Present
        </p>
      </div>

      <div className="experience-item">
        <h3>Pitt Plant2Plate Urban Garden</h3>

        <p className="experience-location">Pittsburgh, PA</p>

        <p className="experience-position">
          Club Member | August 2024-Present
        </p>
      </div>

      <div className="experience-item">
        <h3>Pitt Jazz Ensemble</h3>

        <p className="experience-location">Pittsburgh, PA</p>

        <p className="experience-position">
          Bass Player | January 2024-December 2025
        </p>
      </div>
    </section>

    <section className="resume-section">
      <h2>INTERESTS AND RELEVANT SKILLS</h2>

      <div className="skills-content">
        <p>
          <strong>Language Skills:</strong> English and Elementary Spanish
        </p>

        <p>
          <strong>Technical Skills:</strong> ArcGIS, Excel, Python, JavaScript,
          HTML
        </p>

        <p>
          <strong>Interests:</strong> Music and Music Theory, Philosophy, Chess,
          Climate Change
        </p>
      </div>
    </section>

    <section className="resume-section">
      <h2>AWARDS</h2>

      <div className="skills-content">
        <p>
          <em>
            Best Original Music at the first-ever University of Pittsburgh 24hr
            Film Challenge.
          </em>
        </p>
      </div>
    </section>
  </div>
);

export default Resume;