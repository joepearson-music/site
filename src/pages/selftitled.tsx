// src/pages/selftitled.tsx
import React, { useMemo, useState } from "react";
import { Layout, styles } from "../layout/layout";

const SelfTitled: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [selected, setSelected] = useState(0);

  const formName = "self-titled-interest";

  // Replace/extend these with real CD photos when you have them
  const images = useMemo(
    () => [
      { src: "/selftitled.png", alt: "Self Titled cover" },
      { src: "/selftitled.png", alt: "Self Titled packaging" },
      { src: "/selftitled.png", alt: "Self Titled disc" },
      { src: "/selftitled.png", alt: "Self Titled booklet" },
    ],
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const prevImage = () =>
    setSelected((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setSelected((prev) => (prev + 1) % images.length);

  return (
    <Layout title="Self Titled">
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "0 16px" }}>
        {/* Top header */}

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
                onClick={nextImage}
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

            <p style={ui.caption}>Prototype artwork shown. Click the image to advance.</p>
          </div>

          {/* RIGHT: combined single container (no Availability box, no Philosophy card) */}
          <div style={ui.infoCol}>
            <div style={ui.card}>
              <div style={ui.kicker}>Own the album...</div>
              <h2 style={ui.productTitle}>Limited Edition Compact Disc</h2>

              <p style={ui.productSub}>
                The album is available as a limited edition CD. Only 10 copies
                were created. This project is designed to oppose streaming culture.

                If you want to own the album physically, submit your email. I will
                follow up directly with next steps and details.
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

                {/* honeypot */}
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
                    Submitted. I will reach out.
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

                <div style={{ height: 6 }} />
              </form>
            </div>
          </div>
        </div>

        {/* Future blog area placeholder */}
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
          Over time, this page will accumulate behind the scenes content, composer notes, and insights into the production of each track on the album.
        </p>

        <div style={{ height: 16 }} />

        <div style={ui.placeholder}>
          <p style={{ ...styles.paragraph, margin: 0, opacity: 0.75 }}>
            Coming soon.
          </p>
        </div>

        <div style={{ height: 22 }} />
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
    maxWidth: 520, // a bit bigger since we removed thumbs
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
    cursor: "pointer",
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
};

// Desktop 2-column layout
const desktopMediaQuery = (() => {
  if (typeof document === "undefined") return null;
  const id = "selftitled-desktop-grid";
  if (document.getElementById(id)) return null;

  const style = document.createElement("style");
  style.id = id;
  style.innerHTML = `
    @media (min-width: 900px) {
      .selftitled-product-row {
        grid-template-columns: 0.95fr 1.35fr !important;
        align-items: start !important;
      }
    }
  `;
  document.head.appendChild(style);
  return null;
})();

export default SelfTitled;
