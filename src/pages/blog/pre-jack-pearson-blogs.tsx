import React from "react";
import { Link } from "react-router-dom";

import { CSSProperties } from "react";

const Blog1: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pre jack-pearson.com Blogs</h1>
      <div style={styles.note}>
        <strong>Note:</strong> These blogs were written during my spring
        semester of my Junior year of school. They were published on a few
        differnt HTML or Javascript sites I made to track my progress as I built
        Forevergreen's first product. I like to have them as it is a reminder of
        how far I grew in my technical journey.
      </div>
      <hr style={styles.horizontalLine} /> {/* Added another horizontal line */}
      <h1 style={styles.title}>Welcome to the Carbon-Calc site!</h1>
      <h2 style={styles.sectionTitle}>Jan 14, 5:33 PM - Blog #4</h2>
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
      <footer style={styles.footer}>
        © 2024 Carbon Calc. All rights reserved.
      </footer>
      <hr style={styles.horizontalLine} /> {/* Added another horizontal line */}
      <h1 style={styles.title}>
        Continuation of Our Carbon Calculator Journey
      </h1>
      <h2 style={styles.sectionTitle}>Jan 8, 2:44 PM - Blog #3</h2>
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
        In the call, Carlos Cortez and I discussed what our vision for
        Forevergreen.earth was and what we could do with the $500 budget. We
        agreed that the Dev team would fully integrate our current version of
        the calculator into Wix Velo and add a login system for users to sign in
        and adjust their data. Carlos sent over the statement of work that day
        and we got to building.
      </p>
      <p style={styles.paragraph}>
        I also spent a lot of time building out easy-to-follow blogs and
        documentation of our current version and what we were going for. I
        published these on our test site as well as the Forevergreen site. Below
        are the links to each blog if you want to check them out.
      </p>
      <h3 style={styles.subSectionTitle}>Links to blogs and resources:</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <a href="https://www.forevergreen.earth/post/forevergreen-calculator-overview">
            Forevergreen Calculator Overview
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://jpearson906.wixsite.com/carbon-calc/post/forevergreen-excel-calculator-guide">
            Forevergreen Excel Calculator Guide
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://jpearson906.wixsite.com/carbon-calc/post/current-calculator-on-convert-calculator">
            Current Calculator on Convert Calculator
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://jpearson906.wixsite.com/carbon-calc/post/our-test-site-this-website">
            Our test site (this website)
          </a>
        </li>
      </ul>
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
      {/* Note: Twitter embed won't work directly in React. You might need to use a library or create a custom component */}
      <div style={styles.twitterEmbed}>
        <p>
          Twitter embed placeholder: Thanks to @Replit I have the skills to make
          my own link tree Day 75 of #Replit100DaysOfCode #100DaysOfCode. Join
          me on @Replit
        </p>
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
      <footer style={styles.footer}>
        © 2024 Carbon Calc. All rights reserved.
      </footer>
      <hr style={styles.horizontalLine} /> {/* Added another horizontal line */}
      <h1 style={styles.title}>Progress Update on the Carbon Calculator</h1>
      <h2 style={styles.sectionTitle}>Dec 24, 8:29 PM - Blog #2</h2>
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
      {/* Note: Twitter embed won't work directly in React. You might need to use a library or create a custom component */}
      <div style={styles.twitterEmbed}>
        <p>
          Twitter embed placeholder: Check out my blog on our test site where I
          share some updates on the Carbon Calc and our next steps!
        </p>
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
      {/* Note: TikTok embed won't work directly in React. You might need to use a library or create a custom component */}
      <div style={styles.tiktokEmbed}>
        <p>
          TikTok embed placeholder: Joe and I made some serious breakthroughs
          yesterday 💪 we suck but learn pretty quick!
        </p>
      </div>
      <p style={styles.paragraph}>
        For the rest of the day, I continued to build out the code on this site.
        I will add the backend code below.
      </p>
      <pre style={styles.codeBlock}>
        <code>
          {`import { getValuesfromGoogleSheet, addValuesToGoogleSheet } from 'backend/calc1';

$w.onReady(function () {
    $w("#insertbutton").onClick(async ()=>{
        const firstName = $w('#firstnameinput').value;
        const lastName = $w('#lastnameinput').value;
        const email = $w('#emailinput').value;
        const emissions = $w('#emissions').value;
        const values = ["17", firstName, lastName, email, emissions];
        const result = await addValuesToGoogleSheet(values);

        if(result.status == 200){
            console.log("added");
        }
    })
});`}
        </code>
      </pre>
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
      <footer style={styles.footer}>
        © 2024 Carbon Calc. All rights reserved.
      </footer>
      <hr style={styles.horizontalLine} /> {/* Added another horizontal line */}
      <h1 style={styles.title}>Journey Begins with Carbon Calculator</h1>
      <h2 style={styles.sectionTitle}>Dec 5, 1:58 PM - Blog #1 </h2>
      <p>
        Hello! Welcome to my blog! Super pumped you are reading this and
        hopefully it can help others learn from my process. My goal for this
        blog is to document my process of building my first product and a real
        piece of code. I want to learn along with the progression of this blog
        to see where I learned, failed, and improved to hopefully maximize my
        growth.
      </p>
      <p>
        This first post is exciting as I have no lines of code written! There is
        much to be done and I am very excited to learn. I have some experience
        in Java as I learned it last year through an online course and course at
        Pitt. I am confident I can build my product here and implement it into
        WIX.
      </p>
      <p>
        So where am I in the process? Well, it is currently the week before
        finals, so I will not be able to make much progress this week. That
        being said, there is much progress to update you on so far, and the next
        update should be post-finals once I start to code.
      </p>
      <p>
        Here is the current carbon calculator on our website.{" "}
        <a href="https://www.forevergreen.earth/carbon-calculator">
          Carbon Calculator
        </a>
      </p>
      <h2>Screens of the Carbon Calculator</h2>
      <h3>Screen #1 Onboarding</h3>
      <img src="/assets/screen1.png" alt="Screen #1 Onboarding" />
      <h3>Screen #2 Transportation</h3>
      <img src="/assets/screen2.png" alt="Screen #2 Transportation" />
      <h3>Screen #3 Diet</h3>
      <img src="/assets/screen3.png" alt="Screen #3 Diet" />
      <h3>Screen #4 Energy/Utilities</h3>
      <img src="/assets/screen4.png" alt="Screen #4 Energy/Utilities" />
      <h3>Screen #5 Breakdown</h3>
      <img src="/assets/screen5.png" alt="Screen #5 Breakdown" />
      <h3>Email Returned to User</h3>
      <img src="/assets/screen6.png" alt="Email Returned to User" />
      <p>
        As you can see the calculator is pretty robust and has a lot of
        questions. Although the email is very basic, it is a good start and I
        will learn how to add charts and further links to this through MailChimp
        or a different email listing service.
      </p>
      <p>
        All of this was completed over Thanksgiving Break which was only a week.
        With a better plan of action and a full month of Christmas, we should
        have a product/service to track data for users and provide them with
        connections to solutions. Once I have this MVP finalized we can pass
        this over to a better-suited development team, and I can focus on other
        areas.
      </p>
      <p>
        Thank you for reading! I think this practice will help me a lot in my
        product development and a great tool for later to catch others up to
        speed.
      </p>
      <Link to="/blogs" style={styles.backLink}>
        Back to Blog
      </Link>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "times new roman",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  },
  subSectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "15px",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.5",
  },
  list: {
    marginLeft: "20px",
  },
  listItem: {
    marginBottom: "10px",
  },
  backLink: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#000",
  },
  image: {
    maxWidth: "75%",
    height: "auto",
    marginBottom: "20px",
    justifyContent: "center",
  },
  note: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "20px",
  },
  horizontalLine: {
    border: 0,
    height: "1px",
    backgroundColor: "#ccc",
    margin: "20px 0",
  },
  footer: {
    marginTop: "30px",
    borderTop: "1px solid #ccc",
    paddingTop: "10px",
    fontSize: "14px",
    color: "#666",
  },
  twitterEmbed: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "15px",
  },
  tiktokEmbed: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "15px",
  },
  codeBlock: {
    backgroundColor: "#f4f4f4",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    overflowX: "auto",
    marginBottom: "15px",
  },
};

export default Blog1;
