import React from "react";

type LessonTile = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const LESSONS: LessonTile[] = [
  {
    title: "Music Theory + Production",
    description:
      "Practical theory, ear training, composition, and production workflow.",
    imageSrc: "/images/lessons/theory-production.jpg",
    imageAlt: "Music theory and production",
  },
  {
    title: "Piano",
    description:
      "Technique, reading, and musicianship for beginners through advanced players.",
    imageSrc: "/images/lessons/piano.jpg",
    imageAlt: "Piano keyboard",
  },
  {
    title: "Guitar",
    description:
      "Fretboard clarity, rhythm, harmony, and improvisation.",
    imageSrc: "/images/lessons/guitar.jpg",
    imageAlt: "Guitar fretboard",
  },
  {
    title: "Cello",
    description:
      "Tone, intonation, and musical confidence for orchestra or solo playing.",
    imageSrc: "/images/lessons/cello.jpg",
    imageAlt: "Cello",
  },
];

export default function LessonsPage() {
  return (
    <main style={styles.page}>
      <div style={styles.inner}>
        <h1 style={styles.h1}>Lessons</h1>

        {/* FREE WEEKLY LECTURE */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Free weekly guitar and theory lecture</h2>

          <p style={styles.p}>
            Every week I host a free online session where we explore practical
            music theory, guitar concepts, and musicianship. Anyone can join.
          </p>

          <p style={styles.pSmall}>
            <strong>Format:</strong> Short lecture + questions
            <br />
            <strong>Where:</strong> Google Meet
            <br />
            <strong>How to join:</strong> Submit the form below and write
            “weekly lecture” in the notes.
          </p>
        </section>

        {/* LESSON TYPES */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Lesson types</h2>

          <p style={styles.pSmall}>
            Lessons are available <strong>in person or online</strong>.
          </p>

          <div style={styles.grid}>
            {LESSONS.map((lesson) => (
              <div key={lesson.title}>
                <img
                  src={lesson.imageSrc}
                  alt={lesson.imageAlt}
                  style={styles.image}
                />
                <h3 style={styles.h3}>{lesson.title}</h3>
                <p style={styles.pSmall}>{lesson.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Book a lesson</h2>

          <form
            name="lesson-booking"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            style={styles.form}
          >
            <input type="hidden" name="form-name" value="lesson-booking" />

            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div style={styles.formGrid}>
              <label style={styles.label}>
                Email
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  required
                />
              </label>

              <label style={styles.label}>
                Phone
                <input
                  style={styles.input}
                  type="tel"
                  name="phone"
                  required
                />
              </label>

              <label style={styles.labelFull}>
                Instrument
                <select style={styles.input} name="instrument">
                  <option value="">Select one</option>
                  <option value="Music Theory / Production">
                    Music Theory / Production
                  </option>
                  <option value="Piano">Piano</option>
                  <option value="Guitar">Guitar</option>
                  <option value="Cello">Cello</option>
                </select>
              </label>

              <label style={styles.labelFull}>
                Notes
                <textarea
                  style={styles.textarea}
                  name="notes"
                  rows={5}
                  placeholder="Experience level, goals, availability, etc."
                />
              </label>
            </div>

            <button type="submit" style={styles.button}>
              Send
            </button>
          </form>
        </section>

        <footer style={styles.footer}>
          © {new Date().getFullYear()} Joe Pearson
        </footer>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "#ffffff",
    fontFamily: '"Times New Roman", serif',
  },

  inner: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "30px 20px",
  },

  h1: {
    fontSize: 42,
    marginBottom: 10,
  },

  h2: {
    fontSize: 22,
    marginBottom: 10,
  },

  h3: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },

  p: {
    fontSize: 16,
    marginBottom: 12,
  },

  pSmall: {
    fontSize: 15,
    marginBottom: 12,
  },

  section: {
    marginTop: 35,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },

  image: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    border: "1px solid black",
  },

  form: {
    maxWidth: 700,
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },

  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
  },

  labelFull: {
    gridColumn: "1 / -1",
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
  },

  input: {
    padding: 10,
    fontSize: 16,
    border: "1px solid black",
    fontFamily: '"Times New Roman", serif',
  },

  textarea: {
    padding: 10,
    fontSize: 16,
    border: "1px solid black",
    fontFamily: '"Times New Roman", serif',
  },

  button: {
    marginTop: 12,
    padding: "10px 16px",
    fontSize: 16,
    border: "1px solid black",
    background: "#ffffff",
    cursor: "pointer",
    fontFamily: '"Times New Roman", serif',
  },

  footer: {
    marginTop: 50,
    fontSize: 14,
  },
};