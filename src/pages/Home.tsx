// src/pages/Home.tsx

import React, { useState } from "react";
import { Layout, styles } from "../layout/layout";
import CustomSocialBar from "./components/socialbar";

import Reveal from "./components/Reveal";
import LazyMount from "./components/LazyMount";

/* === PREVIOUS ALBUM VIDEOS === */
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
  const [albumOpen, setAlbumOpen] = useState(false);

  const sectionStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
  };

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

  const renderAudio = (src: string, title: string) => (
    <Reveal>
      <div
        style={{
          ...sectionStyle,
          marginTop: 32,
          marginBottom: 32,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 20,
            marginTop: 0,
            marginBottom: 14,
          }}
        >
          {title}
        </p>

        <audio
          controls
          preload="metadata"
          style={{
            width: "100%",
            display: "block",
          }}
        >
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </Reveal>
  );

  const renderYouTubeVideo = (
    embedUrl: string,
    iframeTitle: string,
    displayTitle?: string,
    subtitle?: string
  ) => (
    <Reveal>
      <div
        style={{
          ...sectionStyle,
          marginBottom: 60,
          textAlign: "center",
        }}
      >
        {(displayTitle || subtitle) && (
          <div
            style={{
              marginBottom: 16,
            }}
          >
            {displayTitle && (
              <p
                style={{
                  fontSize: 20,
                  marginTop: 0,
                  marginBottom: subtitle ? 6 : 0,
                }}
              >
                {displayTitle}
              </p>
            )}

            {subtitle && (
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontStyle: "italic",
                  opacity: 0.65,
                  lineHeight: 1.5,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
          }}
        >
          <iframe
            src={embedUrl}
            title={iframeTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              border: 0,
              borderRadius: 8,
            }}
          />
        </div>
      </div>
    </Reveal>
  );

  const renderVideo = (src: string, title: string, keyName: string) => (
    <LazyMount
      key={keyName}
      placeholder={videoPlaceholder}
      rootMargin="900px 0px"
    >
      <Reveal>
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginBottom: 14,
              textAlign: "center",
            }}
          >
            {title}
          </p>

          <video
            src={src}
            controls
            preload="metadata"
            playsInline
            onError={() =>
              setVideoError((prev) => ({
                ...prev,
                [keyName]: true,
              }))
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
            <p
              style={{
                marginTop: 10,
                color: "#b00020",
                textAlign: "center",
              }}
            >
              Could not load the video. <a href={src}>Open video</a>
            </p>
          )}

          <div style={{ height: 48 }} />
        </div>
      </Reveal>
    </LazyMount>
  );

  const renderSideDivider = () => (
    <Reveal>
      <div
        style={{
          ...sectionStyle,
          marginTop: 30,
          marginBottom: 10,
          textAlign: "center",
        }}
      >
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
    <Layout>
      <main
        style={{
          width: "calc(100vw - 32px)",
          minWidth: "calc(100vw - 32px)",
          maxWidth: 900,
          marginLeft: "50%",
          transform: "translateX(-50%)",
          boxSizing: "border-box",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        {/* ========================= */}
        {/* LUST FOR LIFE */}
        {/* ========================= */}

        {renderYouTubeVideo(
          "https://www.youtube.com/embed/Y-aliyiA35g",
          "Lust for Life",
          "Lust for Life",
          "Open Studio — Tahj Jones & Joe Pearson · Awarded Best Original Music at the first-ever University of Pittsburgh 24hr Film Challenge"
        )}

        {/* ========================= */}
        {/* CONDUCTING */}
        {/* ========================= */}

        {renderYouTubeVideo(
          "https://www.youtube.com/embed/DEywH2kTPhk",
          "Beethoven conducting performance"
        )}

        {renderYouTubeVideo(
          "https://www.youtube.com/embed/nAkN1-S5lvY",
          "Holst conducting performance"
        )}

        {/* ========================= */}
        {/* RAP TRACKS */}
        {/* ========================= */}

        {renderAudio(
          "/dontjudgeasong.mp3",
          "don't judge a song"
        )}

        {renderAudio(
          "/byitstitle.mp3",
          "by its title"
        )}

        <Reveal>
          <div
            style={{
              ...sectionStyle,
              marginTop: 40,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontStyle: "italic",
                opacity: 0.65,
                fontSize: 14,
              }}
            >
              this is just a couple of throwaway raps. Next album Spring 2027.
            </p>
          </div>
        </Reveal>

        {/* ========================= */}
        {/* PREVIOUS ALBUM TOGGLE */}
        {/* ========================= */}

        <Reveal>
          <div
            style={{
              ...sectionStyle,
              marginTop: 20,
              marginBottom: 50,
            }}
          >
            <button
              onClick={() => setAlbumOpen((prev) => !prev)}
              aria-expanded={albumOpen}
              style={{
                width: "100%",
                border: "none",
                borderTop: "1px solid #000",
                borderBottom: "1px solid #000",
                background: "transparent",
                padding: "22px 4px",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: 20,
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <span>Self Titled — debut album</span>

              <span
                style={{
                  fontSize: 24,
                  lineHeight: 1,
                }}
              >
                {albumOpen ? "−" : "+"}
              </span>
            </button>
          </div>
        </Reveal>

        {/* ========================= */}
        {/* PREVIOUS ALBUM */}
        {/* ========================= */}

        {albumOpen && (
          <div
            style={{
              ...sectionStyle,
            }}
          >
            <Reveal>
              <div
                style={{
                  width: "100%",
                  marginTop: 20,
                  marginBottom: 50,
                  textAlign: "center",
                }}
              >
                <img
                  src="/selftitled.png"
                  alt="Self Titled album artwork"
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    height: "auto",
                    borderRadius: 8,
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
            </Reveal>

            <Reveal>
              <div
                style={{
                  width: "100%",
                  minHeight: "60vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
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

            {renderVideo(
              protiumMp4,
              "protium",
              "protium"
            )}

            {renderVideo(
              waterMp4,
              "are we all water?",
              "water"
            )}

            {renderVideo(
              asingleMp4,
              "a single petal of a rose - Duke Ellington",
              "asingle"
            )}

            {renderVideo(
              sassafrassMp4,
              "Sassafrass",
              "sassafrass"
            )}

            {renderVideo(
              fractalMp4,
              "Fractal",
              "fractal"
            )}

            {renderVideo(
              freewillfinalMp4,
              "my argument for free will",
              "freewillfinal"
            )}

            {renderSideDivider()}

            {renderVideo(
              movingforwardMp4,
              "Moving Forward",
              "movingforward"
            )}

            {renderVideo(
              ydkmnMp4,
              "you dont know my name - Alicia Keys",
              "ydkmn"
            )}

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

            {renderVideo(
              likemonkMp4,
              "Like Monk",
              "likemonk"
            )}

            {renderVideo(
              ttrolleyMp4,
              "Tour-Trolley",
              "ttrolley"
            )}

            <Reveal>
              <div
                style={{
                  ...sectionStyle,
                  marginTop: 48,
                  marginBottom: 70,
                  fontSize: 14,
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontStyle: "italic",
                    marginBottom: 20,
                  }}
                >
                  Mixing and Mastering — Josh Wurz
                </p>

                <p
                  style={{
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  Fractal — 2025 Pitt Jazz Composers Concert
                </p>

                <p style={{ margin: 0 }}>
                  Conductor — Joe Pearson
                </p>

                <p style={{ margin: 0 }}>
                  Trumpet — Joe Herndon, Joe Badaczewski, Alex Perez, Adam
                  Bleil
                </p>

                <p style={{ margin: 0 }}>
                  Trombone — Reggie Watkins, Emmett Goods, Jim Weltman,
                  Taylor Fong
                </p>

                <p style={{ margin: 0 }}>
                  Sax — Curtis Johnson, Yoko Suzuki, Kenny Powell, Rick Matt,
                  Joe Scheller
                </p>

                <p style={{ margin: 0 }}>
                  Drums — Dave Glover
                </p>

                <p style={{ margin: 0 }}>
                  Piano — Michael Bernabe
                </p>

                <p style={{ margin: 0 }}>
                  Bass — Ryan McMasters
                </p>

                <div style={{ height: 16 }} />

                <p
                  style={{
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  Sassafrass — 2025 Pitt Jazz Ensemble Fall Concert
                </p>

                <p style={{ margin: 0 }}>
                  Conductor — Ralph Guzzi
                </p>

                <p style={{ margin: 0 }}>
                  Piano — Joe Pearson
                </p>

                <p style={{ margin: 0 }}>
                  Trumpet — Naimi Weiss, Oliver Mazie, Chaya Thomas, Reese
                  Pulkownik
                </p>

                <p style={{ margin: 0 }}>
                  Trombone — Nick McFeeters, Maxine Van Nortwick, Brendan
                  Long, Rory Feathers
                </p>

                <p style={{ margin: 0 }}>
                  Sax — Anna Makoul, Dorothy Vogel, Michael Levin, Carson
                  Hertick, Michael Evans
                </p>

                <p style={{ margin: 0 }}>
                  Drums — Carlos Morrison
                </p>

                <p style={{ margin: 0 }}>
                  Bass — Mayren Comenencia
                </p>

                <p style={{ margin: 0 }}>
                  Guitar — Steve Porreca
                </p>

                <p style={{ margin: 0 }}>
                  Vibraphone — Tim Bottegal
                </p>

                <div style={{ height: 20 }} />

                <p
                  style={{
                    fontStyle: "italic",
                    opacity: 0.85,
                  }}
                >
                  * All unmentioned tracks performed by Joe Pearson
                </p>
              </div>
            </Reveal>
          </div>
        )}

        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}

        <Reveal delayMs={20}>
          <div
            style={{
              ...sectionStyle,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                ...styles.subHeader,
                textAlign: "center",
              }}
            >
              Site Development 🛠️
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div
            style={{
              ...sectionStyle,
              textAlign: "center",
            }}
          >
            <div style={styles.note}>
              <p
                style={{
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Note: This site is self published and constantly being updated!
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            style={{
              ...sectionStyle,
              textAlign: "center",
            }}
          >
            <CustomSocialBar />
          </div>
        </Reveal>
      </main>
    </Layout>
  );
};

export default Home;