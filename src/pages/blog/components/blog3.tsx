import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const BlogPost3: React.FC = () => {
  return (
    <div style={styles.container}>
      <hr style={styles.horizontalLine} />
      <h2 style={styles.sectionTitle}>
        Continuation of Our Carbon Calculator Journey
      </h2>
      <p style={styles.date}>Jan 8, 2:44 PM - Blog #3</p>
      <p style={styles.paragraph}>
        Welcome back to Blog #3! Lots of stuff has happened in the past few
        weeks so let's get right into it.
      </p>
      <p style={styles.paragraph}>
        When I wrote my last entry it was Christmas Eve and Joe and I just
        finished a 12-hour coding day where we started to build our first basic
        program in Wix Velo code. After that, I began to reach out to developers
        for help as I realized there was too much to learn and we needed some
        guidance and help to build our first version of the calculator. Below is
        a picture of the message I sent out to our developers.
      </p>
      <p style={styles.paragraph}>
        After I sent this I got a response very quickly from the S9 Consulting
        Developers and we hopped on a call on Dec 26th. I was impressed with
        their response time and commitment to work over the holidays. It became
        apparent very quickly that they would be the first developers we hired
        to help with our MVP.
      </p>
      <p style={styles.paragraph}>
        In the call, S9 and I discussed what our vision for Forevergreen.earth
        was and what we could do with the $500 budget. We agreed that the Dev
        team would fully integrate our current version of the calculator into
        Wix Velo and add a login system for users to sign in and adjust their
        data. They sent over the statement of work that day and we got to
        building.
      </p>
      <p style={styles.paragraph}>
        I also spent a lot of time building out easy-to-follow blogs and
        documentation of our current version and what we were going for. I
        published these on our test site as well as the Forevergreen site. Below
        are the links to each blog if you want to check them out.
      </p>
      <p style={styles.paragraph}>
        We look to sustainable business strategy to guide our decision-making.
        Operating an ethical business requires minimizing impacts on the planet,
        future generations, and society. Many investors now will use ESG metrics
        to evaluate companies as these considerations are valuable to understand
        a company's longevity. In this paper, I will review three different
        examples that have inspired me through their ethical and sustainable
        business practices. We explore environmental impact and ethical sourcing
        at Diamond Tropical Hardwoods, social impact and diversity initiatives
        at BNP Paribas, and corporate social responsibility at Dicks Sporting
        Goods and how their strategy does a fantastic job at creating shared
        value and impacting their communities while producing profits.
      </p>
      <p style={styles.paragraph}>
        I am interested to see if these proved to be helpful for the team.
      </p>
      <p style={styles.paragraph}>
        Since I handed off the actual development to the infinitely more skilled
        Wix Velo Devs, I have recently had some more time to continue on my
        Replit 100 Days of Code. I have been learning a ton about Python and
        even some HTML (which is how I made this blog). If you follow me on
        Twitter you will see I post the code for every lesson along with some
        other cool stuff every once in a while.
      </p>
      <p style={styles.paragraph}>
        After following this we were able to get it working to have our user's
        inputs collected on a Google sheet! We were pretty excited.
      </p>

      <div style={styles.twitterEmbed}>
        <TwitterTweetEmbed
          tweetId={"1744228822436679908"}
          options={{ theme: "dark" }}
        />
      </div>

      <p style={styles.paragraph}>
        Here you can see my most recent lesson Day 75 where I coded a simple
        linktree for myself. I have learned a TON about coding just from these
        lessons and I am excited to finish these lessons so I can learn more.
      </p>
      <p style={styles.paragraph}>
        Looking forward, we will have a fully functional calculator coded on Wix
        Velo by S9 Consulting by/on Jan 15th. After that, my current plan is to
        spend 2 weeks studying that code and improving little things here and
        there so that on Feb 1 we can have a product that provides a cool
        service for our users and can collect revenues.
      </p>
      <p style={styles.paragraph}>
        Thank you for following along with my blog!
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
};

export default BlogPost3;
