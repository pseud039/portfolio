import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TOP_ARTISTS, SPOTIFY_TRACKS } from "@/data/media";

export const metadata: Metadata = {
  title: "Music",
  description: "What Saumya Sharma is listening to — top artists and Spotify tracks.",
};

function spotifyEmbed(url: string): string | null {
  const m = String(url).match(
    /open\.spotify\.com\/(?:embed\/)?(track|album|playlist|artist)\/([A-Za-z0-9]+)/
  );
  return m ? `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator` : null;
}

const BackIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export default function MusicPage() {
  const embeds = SPOTIFY_TRACKS.map(spotifyEmbed).filter(Boolean) as string[];

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
        music
      </h1>

      {/* Top Artists */}
      {TOP_ARTISTS.length > 0 && (
        <>
          <h2
            style={{
              font: "500 14px var(--sans)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--mut)",
              margin: "0 0 20px",
            }}
          >
            Top artists
          </h2>
          <div style={{ display: "flex", gap: "22px", flexWrap: "wrap", marginBottom: "40px" }}>
            {TOP_ARTISTS.map((a) => (
              <div key={a.name} style={{ textAlign: "center", width: "110px", fontSize: "13px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    marginBottom: "8px",
                    background: "var(--soft)",
                  }}
                />
                {a.name}
                <small style={{ color: "var(--mut)", display: "block" }}>{a.genre}</small>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Spotify */}
      <h2
        style={{
          font: "500 14px var(--sans)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--mut)",
          margin: "0 0 16px",
        }}
      >
        On repeat
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "14px",
        }}
      >
        {embeds.map((src) => (
          <iframe
            key={src}
            src={src}
            allow="encrypted-media"
            loading="lazy"
            style={{ width: "100%", height: "152px", border: 0, borderRadius: "12px" }}
          />
        ))}
      </div>
    </main>
  );
}
