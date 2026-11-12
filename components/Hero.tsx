import Image from "next/image";
import Link from "next/link";
import { Chip } from "./Chip";
import type { SiteProfile } from "@/data/types";
import { stack } from "@/data/stack";

// Parses {{Node.js}} into Chip components, and ==text== into <mark>
function parseBio(bio: string): React.ReactNode[] {
  const allItems = stack.flatMap((g) => g.items);
  const parts = bio.split(/(\{\{.+?\}\}|==.+?==)/);
  return parts.map((part, i) => {
    const techMatch = part.match(/^\{\{(.+?)\}\}$/);
    if (techMatch) {
      const name = techMatch[1];
      const item = allItems.find((it) => it.name === name);
      if (item) return <Chip key={i} item={item} size="bio" />;
      return <span key={i}>{name}</span>;
    }
    const markMatch = part.match(/^==(.+?)==$/);
    if (markMatch) {
      return (
        <mark key={i} style={{ background: "none", color: "var(--fg)", borderBottom: "1px solid var(--mut)" }}>
          {markMatch[1]}
        </mark>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Icon paths used inline
const MailIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const FileIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8" />
  </svg>
);
const CodeIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const XIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "currentColor", stroke: "none" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.9 1.150h3.700l-8 9.200L24 22.850h-7.400l-5.800-7.600-6.600 7.600H.5l8.600-9.800L0 1.150h7.600l5.200 6.900zm-1.300 19.500h2L6.500 3.240H4.300z" />
  </svg>
);
const GhIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "currentColor", stroke: "none" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);
const LiIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const ImgIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
  </svg>
);

const ibStyle: React.CSSProperties = {
  width: "50px",
  height: "50px",
  borderRadius: "10px",
  border: "1px solid var(--bd)",
  background: "var(--card)",
  display: "grid",
  placeItems: "center",
  textDecoration: "none",
  color: "var(--fg)",
};

interface HeroProps {
  profile: SiteProfile;
}

export function Hero({ profile }: HeroProps) {
  const firstName = profile.name.split(" ")[0];
  return (
    <div style={{ width: "min(100% - 48px, 750px)", margin: "0 auto" }}>
      {/* Hero row */}
      <div style={{ display: "flex", gap: "24px", alignItems: "center", paddingTop: "44px" }}>
        {/* Avatar */}
        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "20px",
            flex: "none",
            background: "var(--soft)",
            border: "1px solid var(--bd)",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
          }}
        >
          <Image
            src={profile.photo}
            alt={profile.name}
            width={90}
            height={90}
            priority
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        {/* Name / role / status */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <div>
              <h1 className="hero-name" style={{ font: "700 36px/1.1 var(--mono)", margin: 0, letterSpacing: "-1px" }}>
                {firstName}
                <span className="sr-only"> {profile.name.slice(firstName.length)}</span>
                <span
                  style={{
                    display: "block",
                    marginTop: "4px",
                    font: "400 14px/1.5 var(--mono)",
                    letterSpacing: 0,
                    color: "var(--mut)",
                  }}
                >
                  {profile.role}
                </span>
              </h1>
            </div>
            <span
              className="hero-status"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                font: "400 12px var(--mono)",
                color: "var(--acc)",
                border: "1px solid color-mix(in srgb, var(--acc) 45%, transparent)",
                background: "color-mix(in srgb, var(--acc) 10%, transparent)",
                padding: "4px 12px",
                borderRadius: "999px",
                whiteSpace: "nowrap",
              }}
            >
              <i className="hero-status-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--acc)", display: "block" }} />
              {profile.status}
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p style={{ font: "400 17px/2.1 var(--mono)", color: "var(--mut)", margin: "42px 0 0" }}>
        {parseBio(profile.bio)}
      </p>

      {/* Action row */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", marginTop: "38px" }}>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "48px", padding: "0 20px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--card)", textDecoration: "none", font: "600 16px var(--mono)" }}
        >
          <FileIcon /> Resume
        </a>
        {/* <a
          href={`mailto:${profile.email}`}
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "48px", padding: "0 20px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--card)", textDecoration: "none", font: "600 16px var(--mono)" }}
        >
          <MailIcon /> Get in touch
        </a> */}
        {/* <Link
          href="/projects"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "48px", padding: "0 20px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--card)", textDecoration: "none", font: "600 16px var(--mono)" }}
        >
          <CodeIcon /> Projects
        </Link> */}
        <span style={{ width: "1px", height: "34px", background: "var(--bd)", margin: "0 6px" }} />
        <a href={profile.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X" style={ibStyle}><XIcon /></a>
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={ibStyle}><GhIcon /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={ibStyle}><LiIcon /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email" style={ibStyle}><MailIcon /></a>
        {/* <a href={profile.socials.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" style={ibStyle}><ImgIcon /></a> */}
      </div>
    </div>
  );
}
