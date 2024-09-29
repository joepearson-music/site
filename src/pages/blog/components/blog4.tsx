import React from "react";

const BlogPost4: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Welcome to the site!</h2>
      <p style={styles.date}>Jan 14, 5:33 PM - Blog #4</p>
      <div style={styles.note}>
        <strong>Note:</strong> This blog should serve as an introduction to this
        website and an update!
      </div>
      <p style={styles.paragraph}>
        Hello and welcome to my fourth blog! Thank you for your time. I hope to
        outline this new site as well as some updates since my last blog post.
      </p>
      <p style={styles.paragraph}>
        In the last post I was on Day 75 of the #Replit100DaysofCode and I am
        happy to say I finished all 100 lessons!
      </p>
      <p style={styles.paragraph}>
        It has been a really awesome experience and I really appreciate the
        Replit team for creating such a fantastic free resource. I learned so
        much about web design and programming.
      </p>
      <p style={styles.paragraph}>
        I am proud to say the of over 225k people that have started on day 1, I
        was the 934th person to complete all 100 days! I had a goal to be one of
        the first 1000 and I am super glad I was able to sneak in.
      </p>
      <p style={styles.paragraph}>
        To wrap up the 100 days of code I thought it would be a good idea to
        combine alot of the skills I had learned to create this website. I have
        built out a fully functional webpage that is coded in github and public
        on the web. I also plan to continue to build this site as I learn more
        and build more projects.
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
  date: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  note: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
};

export default BlogPost4;
