import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Code from "./code";
import TikTokEmbed from "./tiktok";

const BlogPost2: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>
        Progress Update on the Carbon Calculator
      </h2>
      <p style={styles.date}>Dec 24, 8:29 PM - Blog #2</p>
      <p style={styles.paragraph}>
        Hello! This is my second blog post updating our progress on the carbon
        calculator.
      </p>
      <p style={styles.paragraph}>
        A lot has happened since my last post on Dec 5, so let's get started.
      </p>
      <p style={styles.paragraph}>
        On Dec 5, we had no lines of code written and zero idea how to get this
        built in Wix Velo, but now we are making serious progress and should
        have an MVP in the next 2 weeks.
      </p>
      <p style={styles.paragraph}>
        In the past two weeks, I have been taking Replit lessons to improve my
        coding skills. I have been able to build some cool programs in Python.
        Here is my Twitter and replied.
      </p>
      <p style={styles.paragraph}>This was a few days at our new office.</p>
      <div style={styles.twitterEmbed}>
        <TwitterTweetEmbed
          tweetId={"1739121047213945089"}
          options={{ theme: "dark" }}
        />
      </div>
      <p style={styles.paragraph}>
        So we all have been learning to code and working at the offices.
        Yesterday Joe and I had a full 12-hour coding day where we began the
        first efforts to build our site out into Velo. We learned a lot and I
        hope to outline where we are now and the product's next steps.
      </p>
      <p style={styles.paragraph}>
        Quick shoutout to the first tutorial we watched as it was really
        comprehensive and helped us with the first steps. Its by the Wix Wix
      </p>
      <p style={styles.paragraph}>
        We also followed along the Wix Velo Dev Docs
      </p>
      <p style={styles.paragraph}>
        After following this we were able to get it working to have our user's
        inputs collected on a Google sheet! We were pretty excited.
      </p>
      <div style={styles.tiktokEmbed}>
        <TikTokEmbed
          videoId="7316354306632977706"
          style={{ maxWidth: "605px", minWidth: "325px" }}
        />
      </div>
      <p style={styles.paragraph}>
        For the rest of the day, I continued to build out the code on this site.
        I will add the backend code below.
      </p>
      <Code />
      <p style={styles.paragraph}>
        The main accomplishment I had was to use these in each of the 5 pages.
      </p>
      <p style={styles.paragraph}>
        We actually ended up writing a decent bit of code.
      </p>
      <p style={styles.paragraph}>
        Here are a few other APIs I want to integrate moving forward...
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <a href="https://dev.wix.com/docs/develop-websites/articles/getting-started/code-tutorials/send-emails-using-the-send-grid-npm-package">
            Send Emails using the SendGrid NPM Package
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://dev.wix.com/docs/develop-websites/articles/getting-started/code-tutorials/using-oauth-sso-with-velo">
            Using OAuth SSO with Velo
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://www.wix.com/velo/example/chart.js-custom-element">
            Chart.js Custom Element
          </a>
        </li>
      </ul>
      <p style={styles.paragraph}>
        Additionally, we are now going to be working with S9 consulting to build
        our first version. I found them through the Wix Velo Marketplace and
        they will be very helpful to guide our coding moving forward. We are
        excited to use their knowledge to improve our platform.
      </p>
      <p style={styles.paragraph}>Thanks for checking in on my second blog!</p>
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
  tiktokEmbed: {
    marginBottom: "20px",
    maxWidth: "605px",
    margin: "0 auto",
  },
  codeBlock: {
    backgroundColor: "#f4f4f4",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    overflowX: "auto",
    marginBottom: "15px",
  },
  list: {
    marginLeft: "20px",
  },
  listItem: {
    marginBottom: "10px",
  },
};

export default BlogPost2;
