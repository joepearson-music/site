// src/pages/home.tsx
import React, { useState } from "react";
import { Layout, styles } from "../layout/layout";
import CustomSocialBar from "./components/socialbar";
import { Link } from "react-router-dom";

// ✅ scroll-fade + lazy mounting (files live in src/pages/components/)
import Reveal from "./components/Reveal";
import LazyMount from "./components/LazyMount";

/* === IMPORT ALL 14 VIDEOS (src/media) === */
import ifsilenceMp4 from "../media/ifsilence.mp4";
import protiumMp4 from "../media/protium.mp4";
import waterMp4 from "../media/water.mp4";
import asingleMp4 from "../media/asingle.mp4";
import sassafrassMp4 from "../media/sassafrass.mp4";
import fractalMp4 from "../media/fractal.mp4";
import freewillfinalMp4 from "../media/freewillfinal.mp4";
import movingforwardMp4 from "../media/movingforward.mp4";
import ydkmnMp4 from "../media/ydkmn.mp4";
import iammmwMp4 from "../media/iammmw.mp4";
import daytripperMp4 from "../media/day_tripper.mp4";
import bachcelloMp4 from "../media/bachcello.mp4";
import likemonkMp4 from "../media/likemonk.mp4";
import ttrolleyMp4 from "../media/TTrolley.mp4";

const Home: React.FC = () => {
  const [videoError, setVideoError] = useState<{ [key: string]: boolean }>({});

  const videoPlaceholder = (
    <div
      style={{
        width: "100%",
        maxWidth: 650,
        aspectRatio: "1 / 1",
        borderRadius: 8,
        margin: "0 auto",
        background: "#000",
        opacity: 0.08,
      }}
    />
  );

  const renderVideo = (src: string, title: string, keyName: string) => (
    <LazyMount
      key={keyName}
      placeholder={videoPlaceholder}
      rootMargin="900px 0px"
    >
      <Reveal>
        <div>
          <div style={{ textAlign: "center", margin: "20px 0 0" }}>
            <p style={styles.paragraph}>
              <em>{title}</em>
            </p>

            <video
              src={src}
              controls
              preload="metadata"
              playsInline
              onError={() =>
                setVideoError((prev) => ({ ...prev, [keyName]: true }))
              }
              style={{
                width: "100%",
                maxWidth: 650,
                aspectRatio: "1 / 1",
                borderRadius: 8,
                outline: "none",
                backgroundColor: "#000",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />

            {videoError[keyName] && (
              <p style={{ marginTop: 10, color: "#b00020" }}>
                Could not load the video. Try opening it directly:{" "}
                <a href={src}>Open video</a>
              </p>
            )}
          </div>

          <div style={{ height: 24 }} />
          <div style={{ height: 24 }} />
        </div>
      </Reveal>
    </LazyMount>
  );

  const renderSideDivider = () => (
    <Reveal>
      <div style={{ margin: "30px 0 10px", textAlign: "center" }}>
        <p
          style={{
            marginBottom: 10,
            fontSize: 12,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          A Side
        </p>

        <div
          style={{
            height: 2,
            backgroundColor: "#000",
            width: "100%",
            maxWidth: 800,
            margin: "0 auto",
          }}
        />

        <p
          style={{
            marginTop: 10,
            fontSize: 12,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          B Side
        </p>

        <div style={{ height: 24 }} />
      </div>
    </Reveal>
  );

  return (
    <Layout title="ALBUM OUT NOW - scroll down to listen">
      <Reveal>
        <p style={styles.paragraph}>
          Hello World! My name is Joe Pearson. I am a University of Pittsburgh
          Frederick Honors College student and this is my personal website. I
          publish my music solely on this domain.
        </p>
      </Reveal>

      <Reveal delayMs={40}>
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <Link to="/selftitled" style={{ textDecoration: "none" }}>
            <img
              src="/selftitled.png"
              alt="Self-titled project teaser"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              loading="lazy"
            />
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              ...styles.subHeader,
              textAlign: "center",
              fontStyle: "italic",
              opacity: 0.65,
            }}
          >
            a listening experience not found on streaming services
          </h2>
        </div>
      </Reveal>

      {renderVideo(
        ifsilenceMp4,
        "if silence exists then where is it?",
        "ifsilence"
      )}
      {renderVideo(protiumMp4, "protium", "protium")}
      {renderVideo(waterMp4, "are we all water?", "water")}
      {renderVideo(
        asingleMp4,
        "a single petal of a rose - Duke Ellington",
        "asingle"
      )}
      {renderVideo(sassafrassMp4, "Sassafrass", "sassafrass")}
      {renderVideo(fractalMp4, "Fractal", "fractal")}
      {renderVideo(
        freewillfinalMp4,
        "my argument for free will",
        "freewillfinal"
      )}

      {renderSideDivider()}

      {renderVideo(movingforwardMp4, "Moving Forward", "movingforward")}
      {renderVideo(ydkmnMp4, "you dont know my name - Alicia Keys", "ydkmn")}
      {renderVideo(
        iammmwMp4,
        "its a mans mans mans world - James Brown",
        "iammmw"
      )}
      {renderVideo(
        daytripperMp4,
        "day tripper - Lennon & McCartney",
        "daytripper"
      )}
      {renderVideo(
        bachcelloMp4,
        "Sarabande in G - Johann Sebastian Bach",
        "bachcello"
      )}
      {renderVideo(likemonkMp4, "Like Monk", "likemonk")}
      {renderVideo(ttrolleyMp4, "Tour-Trolley", "ttrolley")}

      <Reveal>
        <div
          style={{
            maxWidth: 800,
            margin: "48px auto 32px",
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          <p style={{ fontStyle: "italic", marginBottom: 20 }}>
            Mixing and Mastering — Josh Wurz
          </p>

          <p style={{ fontWeight: 600, marginBottom: 6 }}>
            Fractal — 2025 Pitt Jazz Composers Concert
          </p>
          <p style={{ margin: 0 }}>Conductor — Joe Pearson</p>
          <p style={{ margin: 0 }}>
            Trumpet — Joe Herndon, Joe Badaczewski, Alex Perez, Adam Bleil
          </p>
          <p style={{ margin: 0 }}>
            Trombone — Reggie Watkins, Emmett Goods, Jim Weltman, Taylor Fong
          </p>
          <p style={{ margin: 0 }}>
            Sax — Curtis Johnson, Yoko Suzuki, Kenny Powell, Rick Matt, Joe
            Scheller
          </p>
          <p style={{ margin: 0 }}>Drums — Dave Glover</p>
          <p style={{ margin: 0 }}>Piano — Michael Bernabe</p>
          <p style={{ margin: 0 }}>Bass — Ryan McMasters</p>

          <div style={{ height: 16 }} />

          <p style={{ fontWeight: 600, marginBottom: 6 }}>
            Sassafrass — 2025 Pitt Jazz Ensemble Fall Concert
          </p>
          <p style={{ margin: 0 }}>Conductor — Ralph Guzzi</p>
          <p style={{ margin: 0 }}>Piano — Joe Pearson</p>
          <p style={{ margin: 0 }}>
            Trumpet — Naimi Weiss, Oliver Mazie, Chaya Thomas, Reese Pulkownik
          </p>
          <p style={{ margin: 0 }}>
            Trombone — Nick McFeeters, Maxine Van Nortwick, Brendan Long, Rory
            Feathers
          </p>
          <p style={{ margin: 0 }}>
            Sax — Anna Makoul, Dorothy Vogel, Michael Levin, Carson Hertick,
            Michael Evans
          </p>
          <p style={{ margin: 0 }}>Drums — Carlos Morrison</p>
          <p style={{ margin: 0 }}>Bass — Mayren Comenencia</p>
          <p style={{ margin: 0 }}>Guitar — Steve Porreca</p>
          <p style={{ margin: 0 }}>Vibraphone — Tim Bottegal</p>

          <div style={{ height: 20 }} />

          <p style={{ fontStyle: "italic", opacity: 0.85 }}>
            * All unmentioned tracks performed by Joe Pearson
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={20}>
        <h2 style={styles.subHeader}>Site Development 🛠️</h2>
      </Reveal>

      <Reveal>
        <div style={styles.note}>
          <p style={{ margin: 0 }}>
            Note: This site is self published and constantly being updated!
          </p>
        </div>
      </Reveal>

      <Reveal>
        <CustomSocialBar />
      </Reveal>
    </Layout>
  );
};

export default Home;
