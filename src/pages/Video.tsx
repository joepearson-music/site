import React from "react";

export interface VideoItemProps {
  title: string;
  date: string;
  views: number;
  description: string;
  link: string;
}

// Define the VideoItem component
export const VideoItem: React.FC<VideoItemProps> = ({
  title,
  date,
  views,
  description,
  link,
}) => (
  <div style={{ marginBottom: "40px" }}>
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    <p style={{ marginBottom: "10px", fontStyle: "italic" }}>{date}</p>
    <p>{description}</p>
    <p>{views} views</p>
    <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      Watch video
    </a>
  </div>
);

// Define the VideoList component
const Video: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2 style={{ marginBottom: "40px" }}>My Videos</h2>

    <VideoItem
      title="How to Plant a Tree with Forevergreen | Big Idea Competition"
      date="Apr 11, 2024"
      views={109}
      description="A video we made for the Big Idea Competition at Universtiy of Pittsburgh, which won $2,000"
      link="https://www.youtube.com/watch?v=pNAxPushmN4"
    />
    <VideoItem
      title="How to Backflip"
      date="Nov 24, 2017"
      views={980}
      description="A video tutorial on how to do a standing backflip"
      link="https://www.youtube.com/watch?v=pNAxPushmN4"
    />

    <VideoItem
      title="Flips and Skimboarding in Rehoboth"
      date="Sep 27, 2017"
      views={897}
      description="A video of me doing some flips and tricks at the beach"
      link="https://youtu.be/NQ-TlDeCnbM?si=z-tLRQXFTo4vSd5E"
    />

    <VideoItem
      title="Maine 2017"
      date="Aug 18, 2017"
      views={431}
      description="A video of a family trip to Maine in 2017 where I learned about custom transitions in FCP"
      link="https://youtu.be/vcbH5iXk6_s?si=2ImDkJCGccBk8uaj"
    />

    <VideoItem
      title="Frontflip Progression 4 Days"
      date="Aug 8, 2016"
      views={103466}
      description='My first video to go "viral" with over 100k views. I learned about the importance of thumbnails and titles.'
      link="https://youtu.be/TNYjKe48Q0U?si=LvW9O-zU7Rkq-fyR"
    />
  </div>
);

const linkStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "blue",
  textDecoration: "underline",
};

export default Video;
