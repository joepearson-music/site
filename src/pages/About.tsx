import React from "react";
import {
  Layout,
  Link,
  List,
  ListItem,
  Paragraph,
  SubTitle,
} from "../layout/layout";

const About: React.FC = () => (
  <Layout title="About Me">
    <Paragraph>
      Hi! My name is Jack Pearson and I am in my last semester at the University
      of Pittsburgh. I enjoy finance, business, software development, writing,
      sustainability and learning. I love making websites so I figured I would
      make a personal one to host projects and have a central location to show
      my progress.
    </Paragraph>

    <Paragraph>
      I am building a startup{" "}
      <Link href="https://www.forevergreen.earth">www.forevergreen.earth</Link>{" "}
      to fight climate change.
    </Paragraph>

    <SubTitle>My Interests</SubTitle>
    <List>
      <ListItem>Finance</ListItem>
      <ListItem>Business</ListItem>
      <ListItem>Software Development</ListItem>
      <ListItem>Writing</ListItem>
      <ListItem>Sustainability</ListItem>
    </List>
  </Layout>
);

export default About;
