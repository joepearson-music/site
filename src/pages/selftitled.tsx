// src/pages/selftitled.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Layout, styles } from "../layout/layout";

// URL-encode helper for Netlify form POSTs (stable)
const encode = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

const SelfTitled: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [selected, setSelected] = useState(0);

  // ✅ lightbox state
  const [isOpen, setIsOpen] = useState(false);

  const formName = "self-titled-interest";

  const PUBLIC = process.env.PUBLIC_URL || "";

  const images = useMemo(
    () => [
      { src: `${PUBLIC}/selftitled.png`, alt: "Self Titled cover" },
      { src: `${PUBLIC}/tracklist.jpg`, alt: "Self Titled tracklist" },
      { src: `${PUBLIC}/10copies.jpg`, alt: "Self Titled disc" },
      { src: `${PUBLIC}/boxview.jpg`, alt: "Self Titled in box" },
      { src: `${PUBLIC}/backside.jpg`, alt: "Self Titled NO AI" },
    ],
    [PUBLIC]
  );

  // Close lightbox on Escape and lock scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, selected, images.length]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, string> = {
      "form-name": formName,
      email: String(formData.get("email") ?? ""),
      source: String(formData.get("source") ?? "selftitled-page"),
      "bot-field": String(formData.get("bot-field") ?? ""),
    };

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (res.ok || (res.status >= 300 && res.status < 400)) {
        setStatus("sent");
        form.reset();
        return;
      }

      throw new Error(`Submission failed (${res.status})`);
    } catch (err) {
      console.error("Netlify form submit error:", err);
      setStatus("error");
    }
  };

  const prevImage = () =>
    setSelected((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setSelected((prev) => (prev + 1) % images.length);

  const closeLightbox = () => setIsOpen(false);

  return (
    <Layout title="Self Titled">
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "0 16px" }}>
        {/* Amazon-style product layout */}
        <div style={ui.productRow} className="selftitled-product-row">
          {/* LEFT: carousel (one image at a time) */}
          <div style={ui.galleryCol}>
            <div style={ui.mainImgFrame}>
              <img
                src={images[selected]?.src}
                alt={images[selected]?.alt}
                style={ui.mainImg}
                loading="lazy"
                // ✅ click to expand, not next
                onClick={() => setIsOpen(true)}
                role="button"
                aria-label="Open image"
              />

              <div style={ui.navRow}>
                <button
                  type="button"
                  onClick={prevImage}
                  style={ui.navBtn}
                  aria-label="Previous image"
                >
                  Prev
                </button>

                <div style={ui.dots}>
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelected(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                      style={{
                        ...ui.dot,
                        opacity: idx === selected ? 0.85 : 0.25,
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextImage}
                  style={ui.navBtn}
                  aria-label="Next image"
                >
                  Next
                </button>
              </div>
            </div>

            <p style={ui.caption}>
              Click the image to expand
            </p>
          </div>

          {/* RIGHT: combined single container */}
          <div style={ui.infoCol}>
            <div style={ui.card}>
              <div style={ui.kicker}>Own the album</div>
              <h2 style={ui.productTitle}>Limited Edition Compact Disc</h2>

              <p style={ui.productSub}>
                The album is available as a limited edition CD. Only 10 copies
                were created. This project is designed to oppose streaming
                culture.
                <br />
                <br />
                If you want to own the album physically, submit your email. I
                will follow up directly with next steps and details.
              </p>

              <div style={{ height: 14 }} />

              <form
                name={formName}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display: "grid", gap: 12 }}
              >
                <input type="hidden" name="form-name" value={formName} />
                <input type="hidden" name="source" value="selftitled-page" />

                <p style={{ display: "none" }}>
                  <label>
                    Do not fill this out: <input name="bot-field" />
                  </label>
                </p>

                <label
                  style={{ ...styles.paragraph, display: "block", margin: 0 }}
                >
                  Email:
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                    style={ui.input}
                  />
                </label>

                <button
                  type="submit"
                  style={{
                    ...styles.button,
                    width: "100%",
                    marginTop: 2,
                    opacity: status === "sending" ? 0.7 : 1,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Submitting..." : "I'm interested!"}
                </button>

                {status === "sent" && (
                  <p
                    style={{
                      ...styles.paragraph,
                      margin: "6px 0 0",
                      opacity: 0.8,
                    }}
                  >
                    Submitted. Thank you.
                  </p>
                )}
                {status === "error" && (
                  <p
                    style={{
                      ...styles.paragraph,
                      margin: "6px 0 0",
                      color: "#b00020",
                    }}
                  >
                    Something failed. Refresh and try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Future blog area */}
        <div style={{ height: 26 }} />

        <h2 style={{ ...styles.subHeader, textAlign: "center" }}>
          Additional Content
        </h2>
        <p
          style={{
            ...styles.paragraph,
            textAlign: "center",
            opacity: 0.75,
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          Over time, this page will accumulate behind the scenes content,
          composer notes, and insights into the production of each track on the
          album.
        </p>

        <div style={{ height: 16 }} />

        {/* Blog toggles */}
        <div style={ui.blogWrap}>
          <details style={ui.blogItem}>
            <summary style={ui.blogSummary}>Why did I make this album?</summary>
            <div style={ui.blogBody}>
              <p style={ui.blogP}>
                This album is my "Incomplete Theory of Everything". My goal was
                to use music to give my perspective on physics, chemistry, and
                ecology. Composition is my way of wrapping my head around the
                universe i find myself in. Gratitude is also an important part
                of this project; I am thankful for my faculties, and the
                properties of the world that give me the chance to create art.
              </p>
              <p style={ui.blogP}>
                The A-section of the album takes the listener through a
                progression. A progression from nothing to conciousness. From
                silence to free will. Each piece builds on the last, describing
                or representing something fundamental to the way things work.
              </p>
            </div>
          </details>

          <details style={ui.blogItem}>
            <summary style={ui.blogSummary}>Protium</summary>
            <div style={ui.blogBody}>
              <p style={ui.blogP}>
                This of all the pieces was the most complex, personal, and
                challenging work. I met with a physics professor to discuss the
                fundamental particles. Wave particle duality is a key concept in
                quantum mechanics, and i think we can learn a lot from seeing
                the universe as a set of frequencies. This piece is built
                around an E drone, tuned to a note that closely resembles the
                frequency of electromagnetic energy that we call the cosmic
                background radiation. The synthesizer sounds represent different
                simple ions and elements. In each bar, the ratio made by the
                kick, snare, and hihat is the ratio of the 3 quarks that make up
                protium.
              </p>
              <p style={ui.blogP}>
                This piece is meant to be eerie, unsettling, and a little
                uncomfortable. Entropy tells us that we should be used to chaos,
                yet music is all about order. The tension between these two
                ideas is what drives this piece.
              </p>
            </div>
          </details>

          <details style={ui.blogItem}>
            <summary style={ui.blogSummary}>Tour-Trolley</summary>
            <div style={ui.blogBody}>
              <p style={ui.blogP}>
                If i could place this album into a genre, it would be
                "americana". Tour trolley's are a classic american leisure.
                This simple blues tune is meant to emulate the lightheartedness
                of exploring a new city by means of trolley.
              </p>
              <p style={ui.blogP}>
                The outro of this album features two seperate recordings of my
                piece "Tour-Trolley". The first performance is a polished studio
                recording. The piano is actually a midi keyboard with a tape
                echo effect. The second recording was made on a baby grand piano
                many months after the first recording. The dichotomy between
                these two performances is what gives the outro its character.
                The studio version is precise, clean, and edited. The live
                version was created in one take... unedited.
              </p>
            </div>
          </details>
        </div>

        <div style={{ height: 22 }} />

        {/* ✅ LIGHTBOX */}
        {isOpen && (
          <div
            style={ui.lightboxOverlay}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded image"
            onClick={closeLightbox}
          >
            <div
              style={ui.lightboxCard}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                style={ui.lightboxClose}
                aria-label="Close"
              >
                Close
              </button>

              <img
                src={images[selected]?.src}
                alt={images[selected]?.alt}
                style={ui.lightboxImg}
                loading="eager"
              />

              <div style={ui.lightboxControls}>
                <button
                  type="button"
                  onClick={prevImage}
                  style={ui.lightboxBtn}
                >
                  Prev
                </button>

                <div style={ui.lightboxMeta}>
                  {selected + 1} / {images.length}
                </div>

                <button
                  type="button"
                  onClick={nextImage}
                  style={ui.lightboxBtn}
                >
                  Next
                </button>
              </div>

              <p style={ui.lightboxCaption}>{images[selected]?.alt}</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const ui: Record<string, React.CSSProperties> = {
  // mobile: stack, desktop: 2 columns via media query below
  productRow: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 26,
  },

  // gallery side (carousel)
  galleryCol: {
    display: "grid",
    gap: 10,
    justifyItems: "start",
  },
  mainImgFrame: {
    width: "100%",
    maxWidth: 520,
    borderRadius: 14,
    border: "1px solid rgba(0,0,0,0.12)",
    overflow: "hidden",
    background: "rgba(0,0,0,0.03)",
  },
  mainImg: {
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "contain",
    display: "block",
    background: "#fff",
    cursor: "zoom-in",
  },
  navRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: "10px 10px 12px",
    background: "#fff",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  navBtn: {
    border: "1px solid rgba(0,0,0,0.18)",
    background: "#fff",
    borderRadius: 10,
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: 13,
    whiteSpace: "nowrap",
  },
  dots: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    flex: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    border: "none",
    background: "#000",
    cursor: "pointer",
  },
  caption: {
    fontSize: 12,
    opacity: 0.65,
    margin: 0,
    textAlign: "center",
    width: "100%",
    maxWidth: 520,
  },

  // info side
  infoCol: {
    display: "grid",
    gap: 12,
    alignItems: "start",
  },
  kicker: {
    fontSize: 12,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    opacity: 0.65,
    marginBottom: 2,
  },
  productTitle: {
    margin: "2px 0 0",
    fontSize: 26,
    fontWeight: 800,
  },
  productSub: {
    margin: "10px 0 0",
    fontSize: 14,
    lineHeight: 1.7,
    opacity: 0.85,
  },

  card: {
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: 16,
    padding: 16,
    background: "#fff",
  },

  input: {
    width: "100%",
    marginTop: "0.5rem",
    padding: "0.8rem",
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.18)",
    boxSizing: "border-box",
    outline: "none",
    fontSize: 14,
  },

  placeholder: {
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 14,
    padding: 18,
    textAlign: "center",
    background: "rgba(0,0,0,0.02)",
  },

  // blog toggle styles
  blogWrap: {
    maxWidth: 820,
    margin: "0 auto",
    display: "grid",
    gap: 10,
  },
  blogItem: {
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: 14,
    background: "#fff",
    overflow: "hidden",
  },
  blogSummary: {
    listStyle: "none",
    cursor: "pointer",
    padding: "14px 14px",
    fontWeight: 800,
    fontSize: 15,
    userSelect: "none",
    outline: "none",
  },
  blogBody: {
    padding: "0 14px 14px",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  blogP: {
    ...styles.paragraph,
    margin: "10px 0 0",
    opacity: 0.85,
  },

  // ✅ lightbox styles
  lightboxOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.72)",
    display: "grid",
    placeItems: "center",
    padding: 18,
    zIndex: 9999,
  },
  lightboxCard: {
    width: "min(1100px, 95vw)",
    maxHeight: "90vh",
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.18)",
    display: "grid",
  },
  lightboxClose: {
    justifySelf: "end",
    border: "none",
    background: "transparent",
    padding: "12px 12px 0",
    cursor: "pointer",
    fontSize: 14,
    opacity: 0.75,
  },
  lightboxImg: {
    width: "100%",
    maxHeight: "72vh",
    objectFit: "contain",
    background: "#fff",
    display: "block",
  },
  lightboxControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: "10px 12px",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  lightboxBtn: {
    border: "1px solid rgba(0,0,0,0.18)",
    background: "#fff",
    borderRadius: 10,
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: 13,
    whiteSpace: "nowrap",
  },
  lightboxMeta: {
    fontSize: 13,
    opacity: 0.7,
  },
  lightboxCaption: {
    margin: 0,
    padding: "0 12px 12px",
    fontSize: 12,
    opacity: 0.7,
  },
};

// Desktop 2-column layout injected once
(() => {
  if (typeof document === "undefined") return;
  const id = "selftitled-desktop-grid";
  if (document.getElementById(id)) return;

  const style = document.createElement("style");
  style.id = id;
  style.innerHTML = `
    @media (min-width: 900px) {
      .selftitled-product-row {
        grid-template-columns: 0.95fr 1.35fr !important;
        align-items: start !important;
      }
    }
    .selftitled-product-row details > summary::-webkit-details-marker {
      display: none;
    }
  `;
  document.head.appendChild(style);
})();

export default SelfTitled;
