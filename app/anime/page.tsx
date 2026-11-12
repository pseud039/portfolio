import type { Metadata } from "next";
import Link from "next/link";
import { ANIME } from "@/data/media";

export const metadata: Metadata = {
  title: "Anime",
  description: "Anime Saumya Sharma has watched and enjoyed.",
};

const BackIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export default function AnimePage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          gap: "8px",
          color: "var(--mut)",
          textDecoration: "none",
          font: "400 14px var(--mono)",
          margin: "36px 0 8px",
        }}
      >
        <BackIcon /> back
      </Link>
      <h1 style={{ font: "700 40px/1.05 var(--mono)", margin: "0 0 28px", letterSpacing: "-1px" }}>
        anime
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "16px",
        }}
      >
        {ANIME.map((a) => (
          <div
            key={a.title}
            style={{
              aspectRatio: "3/4",
              borderRadius: "14px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid var(--bd)",
              background: a.tone,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={a.image}
              alt=""
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "28px 12px 12px",
                background: "linear-gradient(transparent, #000c)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {a.title}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
