import React, { CSSProperties } from "react";
import alchemist from "./images/bookclub/alchemist.jpg";
import aristotle from "./images/bookclub/aristotlre.jpg";
import benfranklin from "./images/bookclub/benfranklin.jpg";
import davidcant from "./images/bookclub/davidcant.jpg";
import howtowinfriends from "./images/bookclub/howtowinfriends.jpg";
import johnd from "./images/bookclub/johnd.jpeg";
import letmypeople from "./images/bookclub/letmypeaople.jpeg";
import loscuatro from "./images/bookclub/loscuatro.jpg";
import markets from "./images/bookclub/markets.jpg";
import naturalcapital from "./images/bookclub/naturalcapital.jpg";
import neverfinished from "./images/bookclub/neverfinished.jpg";
import platorepublic from "./images/bookclub/platorepublic.jpg";
import poorcharlie from "./images/bookclub/poorcharlie.jpg";
import psycology from "./images/bookclub/psycology.jpg";
import richest from "./images/bookclub/richest.jpg";
import samwalton from "./images/bookclub/samwalton.jpg";
import suswhateverone from "./images/bookclub/suswhateveryone.jpg";
import systems from "./images/bookclub/systems.jpg";
import thealchemy from "./images/bookclub/thealchemy.jpg";
import whatthedog from "./images/bookclub/whatthedog.jpg";

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#eee7d7",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "10px",
    color: "#333",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    width: "100%",
    margin: "0 auto",
  },
  centerCardContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "15px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "100%",
    margin: "0 auto",
    textAlign: "left",
  },
  cardHeader: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  },
  cardItem: {
    marginBottom: "5px",
    textAlign: "left",
  },
  bookCover: {
    width: "80px",
    height: "120px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  date: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  icon: {
    fontSize: "16px",
    marginRight: "5px",
  },
};

const currentlyReading = {
  title: "John D. Rockefeller",
  author: "John D. Rockefeller",
  rating: "4.4/5",
  comments:
    "Super long bio of John D. Still working through into his adult life now",
  date: "2025-03",
  cover: johnd,
  status: "Still reading book",
};

const bookData = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: "4.5/5",
    comments:
      "We liked the story — it was fun to listen to and easy to imagine the world. It made for a good conversation about following your purpose.",
    date: "2025-08",
    cover: alchemist, // Add corresponding book cover image
    status: "Finished audiobook",
    type: "audiobook",
  },
  {
    title: "The Richest Man in Babylon",
    author: "George Samuel Clason",
    rating: "4.9/5",
    comments:
      "We thought the lessons on money and saving were timeless. The story format made the ideas stick — simple but effective.",
    date: "2023-08",
    cover: richest, // Add corresponding book cover image
    status: "Finished audiobook",
    type: "audiobook",
  },
  {
    title: "Aristotle's Selection",
    author: "Aristotle",
    rating: "4.6/5",
    comments:
      "We read this during our first philosophy rotation — it was dense but rewarding. The ethics and logic sections gave us a lot to unpack.",
    date: "2023-04",
    cover: aristotle, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "Benjamin Franklin: An American Life",
    author: "Walter Isaacson",
    rating: "4.8/5",
    comments:
      "We’re still listening to this one, but we’ve really enjoyed the early chapters. His ambition and resourcefulness make him a standout historical figure.",
    date: "2025-03",
    cover: benfranklin, // Add corresponding book cover image
    status: "Still listening audiobook",
    type: "audiobook",
  },
  {
    title: "David Cant",
    author: "David Cant",
    rating: "4.0/5",
    comments:
      "We found this an inspiring book on leadership and entrepreneurship, especially valuable for early-stage founders.",
    date: "2025-04-05",
    cover: davidcant,
    status: "Finished audiobook",
    type: "audiobook",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    rating: "4.6/5",
    comments:
      "We appreciated the practical advice on interpersonal communication and self-awareness. A timeless classic for personal growth.",
    date: "2025-04-01",
    cover: howtowinfriends,
    status: "Finished audiobook",
    type: "audiobook",
  },
  {
    title: "John D. Rockefeller",
    author: "Ron Chernow",
    rating: "4.4/5",
    comments:
      "We’re still working through this one, but the depth of detail on Rockefeller’s rise is already sparking great discussion.",
    date: "2025-03",
    cover: johnd,
    status: "Still reading book",
    type: "book",
  },
  {
    title: "Let My People Go Surfing",
    author: "Yvon Chouinard",
    rating: "4.8/5",
    comments:
      "We enjoyed Chouinard’s unconventional take on responsible business. His passion for nature and simplicity resonated deeply.",
    date: "2025-03",
    cover: letmypeople,
    status: "Finished book",
    type: "book",
  },
  {
    title: "Los Cuatro Acuerdos",
    author: "Don Miguel Ruiz",
    rating: "4.7/5",
    comments:
      "We read this in Spanish and appreciated the clear, profound impact its mindset shifts had on our daily thinking.",
    date: "2023-01",
    cover: loscuatro,
    status: "Finished book",
    type: "book",
  },
  {
    title: "Markets and the Environment",
    author: "Nathaniel Keohane and Sheila M. Olmstead",
    rating: "4.7/5",
    comments:
      "We read this for a CMU course and later cited it in a thesis. A foundational resource on environmental economics.",
    date: "2023-03",
    cover: markets,
    status: "Finished book",
    type: "book",
  },
  {
    title: "Natural Capitalism",
    author: "Paul Hawken, Amory Lovins, L. Hunter Lovins",
    rating: "4.6/5",
    comments:
      "We found this dense but essential. It laid the groundwork for many of our views on sustainability and resource use.",
    date: "2025-03-10",
    cover: naturalcapital,
    status: "Finished book",
    type: "book",
  },
  {
    title: "Never Finished",
    author: "David Goggins",
    rating: "4.9/5",
    comments:
      "We were motivated by Goggins’ relentless mindset. The stories of discipline and endurance were intense and energizing.",
    date: "2025-03-05",
    cover: neverfinished,
    status: "Finished audiobook",
    type: "audiobook",
  },
  {
    title: "Plato's Republic",
    author: "Plato",
    rating: "4.6/5",
    comments:
      "We explored this foundational text in philosophy and had lively debates around justice, governance, and human nature.",
    date: "2025-03-01",
    cover: platorepublic,
    status: "Finished book",
    type: "book",
  },
  {
    title: "Poor Charlie's Almanack",
    author: "Charles T. Munger",
    rating: "4.8/5",
    comments:
      "We enjoyed the blend of investing wisdom and life philosophy. Charlie’s mental models gave us a new lens for decision-making.",
    date: "2025-02-25",
    cover: poorcharlie,
    status: "Finished book",
    type: "book",
  },
  {
    title: "The Psychology of Investing",
    author: "John R. Nofsinger",
    rating: "4.3/5",
    comments:
      "We found this to be a compelling exploration of behavioral finance. It helped us identify our own biases as investors.",
    date: "2025-02-20",
    cover: psycology,
    status: "Finished book",
    type: "book",
  },
  {
    title: "Sam Walton: Made in America",
    author: "Sam Walton",
    rating: "4.6/5",
    comments:
      "We’re still reading this, but his humility and work ethic stand out. It’s a rich look into retail and entrepreneurship.",
    date: "2025-02-15",
    cover: samwalton,
    status: "Still reading book",
    type: "book",
  },
  {
    title: "Our Common Future",
    author: "World Commission on Environment and Development",
    rating: "4.2/5",
    comments:
      "We reviewed this landmark sustainability report. Its legacy shaped global environmental discourse for decades to come.",
    date: "2025-02-10",
    cover: suswhateverone,
    status: "Finished book",
    type: "book",
  },
  {
    title: "Thinking in Systems",
    author: "John Gall",
    rating: "4.4/5",
    comments:
      "We had fun with this one — humorous but revealing. Gall’s Laws were memorable and applicable to group projects and life.",
    date: "2025-02-05",
    cover: systems,
    status: "Finished book",
    type: "book",
  },
  {
    title: "The Alchemy of Finance",
    author: "George Soros",
    rating: "4.7/5",
    comments:
      "We found Soros’ reflexivity concept intriguing. It’s a complex but rewarding read for those interested in macro investing.",
    date: "2025-02-01",
    cover: thealchemy,
    status: "Finished book",
    type: "book",
  },
  {
    title: "What the Dog Saw",
    author: "Malcolm Gladwell",
    rating: "4.6/5",
    comments:
      "We enjoyed the variety in Gladwell’s essays. They sparked unexpected conversations about talent, perception, and innovation.",
    date: "2025-01-28",
    cover: whatthedog,
    status: "Finished book",
    type: "book",
  },
];

const BookClub: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Book Club</h2>
      <p>
        Welcome to the book club! Here are the books we are currently reading.
      </p>

      <h3 style={styles.sectionTitle}>Currently Reading</h3>
      <div style={styles.centerCardContainer}>
        <div style={styles.card}>
          <img
            src={currentlyReading.cover}
            alt={currentlyReading.title}
            style={styles.bookCover}
          />
          <div style={styles.cardHeader}>{currentlyReading.title} </div>
          <p style={styles.cardItem}>
            <strong>Author:</strong> {currentlyReading.author}
          </p>
          <p style={styles.cardItem}>
            <strong>Rating:</strong> {currentlyReading.rating}
          </p>
          <p style={styles.cardItem}>
            <strong>Comments:</strong> {currentlyReading.comments}
          </p>
          <p style={styles.cardItem}>
            <strong>Date:</strong>{" "}
            <span style={styles.date}>{currentlyReading.date}</span>
          </p>
        </div>
      </div>

      <h3 style={styles.sectionTitle}>Past Reads</h3>
      <div style={styles.gridContainer}>
        {bookData.map((book, index) => (
          <div key={index} style={styles.card}>
            <img src={book.cover} alt={book.title} style={styles.bookCover} />
            <div style={styles.cardHeader}>{book.title} </div>
            <p style={styles.cardItem}>
              <strong>Author:</strong> {book.author}
            </p>
            <p style={styles.cardItem}>
              <strong>Rating:</strong> {book.rating}
            </p>
            <p style={styles.cardItem}>
              <strong>Comments:</strong> {book.comments}
            </p>
            <p style={styles.cardItem}>
              <strong>Date:</strong>{" "}
              <span style={styles.date}>{book.date}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookClub;
