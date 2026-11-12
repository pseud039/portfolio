import type { Metadata } from "next";
import Link from "next/link";
import { PINTEREST_IMAGES } from "@/data/media";
import { profile } from "@/data/profile";
import { PinterestImage } from "@/components/PinterestImage";

export const metadata: Metadata = {
  title: "Pinterest",
  description: "Saumya Sharma's Pinterest board — curated images and aesthetic saves.",
};

const BackIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ImgIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
  </svg>
);

export default function PinterestPage() {
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
        pinterest
      </h1>

      {/* Masonry grid */}
      <div
        style={{
          columns: "3 220px",
          columnGap: "16px",
        }}
      >
        {PINTEREST_IMAGES.map((url, i) => (
          <PinterestImage key={i} src={url} />
        ))}
      </div>

      {/* More on Pinterest CTA */}
      <p style={{ marginTop: "24px" }}>
        <a
          href={profile.socials.pinterest}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            height: "48px",
            padding: "0 20px",
            border: "1px solid var(--bd)",
            borderRadius: "10px",
            background: "var(--card)",
            textDecoration: "none",
            font: "600 16px var(--mono)",
          }}
        >
          <ImgIcon /> More on Pinterest
        </a>
      </p>
    </main>
  );
}
