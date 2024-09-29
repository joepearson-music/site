import React from "react";

const BlogPost1: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Welcome to the site!</h2>
      <p style={styles.date}>Dec 5, 1:58 PM - Blog #1 </p>
      <div style={styles.note}>
        <strong>Note:</strong> This blog should serve as an introduction to this
        website and an update!
      </div>
      <p style={styles.paragraph}>
        Hello! Welcome to my blog! Super pumped you are reading this and
        hopefully it can help others learn from my process. My goal for this
        blog is to document my process of building my first product and a real
        piece of code. I want to learn along with the progression of this blog
        to see where I learned, failed, and improved to hopefully maximize my
        growth.
      </p>
      <p style={styles.paragraph}>
        This first post is exciting as I have no lines of code written! There is
        much to be done and I am very excited to learn. I have some experience
        in Java as I learned it last year through an online course and course at
        Pitt. I am confident I can build my product here and implement it into
        WIX.
      </p>
      <p style={styles.paragraph}>
        So where am I in the process? Well, it is currently the week before
        finals, so I will not be able to make much progress this week. That
        being said, there is much progress to update you on so far, and the next
        update should be post-finals once I start to code.
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <p style={styles.paragraph}>
            Here is the current carbon calculator on our website.
          </p>
        </li>
        <li style={styles.listItem}>
          <a href="https://www.forevergreen.earth/carbon-calculator">
            Carbon Calculator
          </a>
        </li>
      </ul>
      <p style={styles.paragraph}>
        As you can see the calculator is pretty robust and has a lot of
        questions. Although the email is very basic, it is a good start and I
        will learn how to add charts and further links to this through MailChimp
        or a different email listing service.
      </p>
      <p style={styles.paragraph}>
        All of this was completed over Thanksgiving Break which was only a week.
        With a better plan of action and a full month of Christmas, we should
        have a product/service to track data for users and provide them with
        connections to solutions. Once I have this MVP finalized we can pass
        this over to a better-suited development team, and I can focus on other
        areas.
      </p>
      <p style={styles.paragraph}>
        Thank you for reading! I think this practice will help me a lot in my
        product development and a great tool for later to catch others up to
        speed.
      </p>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold" as "bold",
    marginBottom: "10px",
  },
  note: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "20px",
  },
  date: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  horizontalLine: {
    border: 0,
    height: "1px",
    backgroundColor: "#ccc",
    margin: "20px 0",
  },
  twitterEmbed: {
    marginBottom: "20px",
    maxWidth: "550px", // Adjust as needed
    margin: "0 auto",
  },
  list: {
    marginLeft: "20px",
  },
  listItem: {
    marginBottom: "10px",
  },
};

export default BlogPost1;
