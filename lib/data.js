// ─────────────────────────────────────────────────────────
// All editable content lives here. Add/remove/reorder items
// freely — every page just maps over these arrays.
// ─────────────────────────────────────────────────────────

export const CONFIG = {
  name: "Saumya Sharma",
  handle: "pseud039",
  role: "Backend-leaning full-stack developer",
  email: "pseudo.0609@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1kDRW9nG27fPbfIeHQhI9OvJxECOJAzfk/view?usp=sharing",
  socials: {
    github: "https://github.com/pseud039",
    twitter: "https://x.com/pseud039",
    linkedin: "https://www.linkedin.com/in/saumya-p06/",
    pinterest: "https://in.pinterest.com/pseud039/",
  },
  location: "Ghaziabad, India",
};

// Cycled in the hero typing loop, 69ftw-style.
export const ROLES = [
  "Node.js / TypeScript developer.",
  "backend-first, ship-focused.",
  "learning Go, one binary at a time.",
  "B.Tech CSE (AI/ML), KIET.",
  "mentor @ Innogeeks.",
];

// The "more" dropdown in the header. `image` is a thumbnail shown behind the
// label (see the reference screenshot) — drop a direct image URL in and it
// renders automatically; leave it "" and a themed gradient tile is used
// instead, so the menu never looks broken while you're filling these in.
export const MORE_MENU = [
  {
    label: "music",
    href: "/music",
    image: "https://i.pinimg.com/webp/236x/7f/53/92/7f5392606b7fd37e459faf965ba1ffbd.webp",
    tone: "linear-gradient(135deg,#2a2a2a,#4a4a4a)",
  },
  {
    label: "anime",
    href: "/anime",
    image: "https://i.pinimg.com/webp/236x/2a/7d/88/2a7d88c0f05070aaf6407c49a67d0a7c.webp",
    tone: "linear-gradient(135deg,#e4dfea,#b8a9d3)",
  },
  {
    label: "pinterest",
    href: "/pinterest",
    image: "https://i.pinimg.com/474x/71/24/ac/7124ac28a1bd52a3b887aab0a6d97f51.jpg",
    tone: "linear-gradient(135deg,#f4e9c9,#e9d38a)",
  },
];

// `image` takes a direct image URL (screenshot, og:image, whatever you've got).
// Leave it "" and a themed gradient placeholder renders instead — swap in a
// real URL any time and it takes over automatically, no other change needed.
export const PROJECTS = [
  {
    nda: true,
    // NDA projects intentionally carry no title/links — see misc note in app.js
    image: "",
    tone: "linear-gradient(135deg,#2a2a2a,#4a4a4a)",
    description:
      "Backend engineering for a live D2C dairy delivery platform — routing with a Google Maps + Haversine fallback, Shopify GraphQL/webhook integration, Paytm payment gateway, and Mongoose schemas handling multi-size product tracking. Six months, remote, under NDA.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Shopify API", "Paytm API"],
  },
  {
    nda: false,
    title: "CrawlKit",
    year: "2025",
    status: "Completed",
    image: "",
    tone: "linear-gradient(135deg,#dfead6,#a7c495)",
    description:
      "A composable web crawler with an ECS-inspired plugin architecture — swap out fetchers, parsers, and storage without touching the core loop. Currently wiring a RAG pipeline on top with pgvector and OpenAI embeddings.",
    tags: ["TypeScript", "BullMQ", "Redis", "PostgreSQL", "pgvector", "pnpm"],
    githubUrl: "https://github.com/pseud039/crawler",
    liveUrl: "",
  },
  {
    nda: false,
    title: "Predine",
    year: "2025",
    status: "Live",
    image: "/predine.png",
    tone: "linear-gradient(135deg,#f4e9c9,#e9d38a)",
    description:
      "A restaurant pre-ordering platform running in production for a real client — order flow, menu management, and payment handling built for actual foot traffic, not a demo.",
    tags: ["Node.js", "Express", "PostgreSQL", "PWA"],
    liveUrl: "https://preorder-brown.vercel.app/",
    githubUrl: "https://github.com/pseud039/predorder",
  },
  {
    nda: false,
    title: "Termix",
    year: "2025",
    status: "In progress",
    image: "",
    tone: "linear-gradient(135deg,#e4dfea,#b8a9d3)",
    description:
      "A Go-based TUI music controller — mpv IPC for local playback, Spotify Connect for remote control, yt-dlp for YouTube. My accelerator project for learning Go by building something I actually use daily.",
    tags: ["Go", "Bubbletea", "mpv", "Spotify API"],
    liveUrl: "",
    githubUrl: "https://github.com/pseud039/termix",
  },
  {
    nda: false,
    title: "SmartSplit",
    year: "2025",
    status: "Building",
    image: "",
    tone: "linear-gradient(135deg,#d9d9d9,#8a8a8a)",
    description:
      "SMS-powered group expense splitting for Android — parses payment SMS, deduplicates across group members, and settles up without anyone opening a spreadsheet.",
    tags: ["Expo", "Node.js", "PostgreSQL", "Redis"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    nda: false,
    title: "ctx.save",
    year: "2024",
    status: "Shipped",
    image: "",
    tone: "linear-gradient(135deg,#efe6d9,#c9b48a)",
    description:
      "A Chrome extension that converts PDFs, DOCX, PPTX, and XLSX into clean Markdown for LLM context — Web Workers for batch conversion, optional Gemini Vision OCR for scanned docs.",
    tags: ["Chrome Extension", "Web Workers", "Gemini Vision"],
    liveUrl: "",
    githubUrl: "https://github.com/pseud039/ctx.save",
  },
];

// Paste direct image URLs from your Pinterest pins here (right-click a pin →
// copy image address). Empty array falls back to themed placeholder tiles in
// the same masonry pattern as the mock you showed.
export const PINTEREST_IMAGES = [
  "https://i.pinimg.com/736x/a0/2b/74/a02b744e0958930bbfa3d37db21141b6.jpg",
  "https://i.pinimg.com/1200x/16/cf/19/16cf1958f3ca95cd713bf19541e77792.jpg",
  "https://i.pinimg.com/736x/df/ce/14/dfce143f5d79830cc45bc9b48733d698.jpg",
  "https://i.pinimg.com/1200x/98/31/ad/9831ad35a5bada132703bc0f922c8483.jpg",
  "https://i.pinimg.com/736x/f7/49/76/f74976029983c5f8de5f556b318b8210.jpg",
  "https://i.pinimg.com/webp/1200x/e2/1f/8d/e21f8d15fad55c76c6b1a7fa7ad6b5e3.webp",
  "https://i.pinimg.com/736x/0c/8b/c3/0c8bc3d2cbdffa9fe922ade1982e1722.jpg",
  "https://i.pinimg.com/webp/1200x/de/5f/c0/de5fc036c2b9e767f8a2d18a494c83ae.webp",

  // "https://i.pinimg.com/originals/xx/xx/xx/xxxxxxxx.jpg",
];

export const TECH_STACK = {
  languages: [
    { name: "TypeScript", slug: "typescript", color: "#3178C6" },
    { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
    { name: "Go", slug: "go", color: "#00ADD8" },
    { name: "Python", slug: "python", color: "#3776AB" },
    { name: "SQL", slug: "postgresql", color: "#8B7355" },
  ],
  frameworks: [
    { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
    { name: "Express", slug: "express", color: "#000000" },
    { name: "Next.js", slug: "nextdotjs", color: "#000000" },
    { name: "Expo", slug: "expo", color: "#000020" },
    { name: "Bubbletea", slug: "go", color: "#FF5F87" },
  ],
  infra: [
    { name: "PostgreSQL", slug: "postgresql", color: "#336791" },
    { name: "MongoDB", slug: "mongodb", color: "#47A248" },
    { name: "Redis", slug: "redis", color: "#DC382D" },
    { name: "BullMQ", slug: "redis", color: "#DC382D" },
    { name: "Docker", slug: "docker", color: "#2496ED" },
    { name: "Mongoose", slug: "mongoose", color: "#F04D35" },
    { name: "Git", slug: "git", color: "#F05032" },
    { name: "Vercel", slug: "vercel", color: "#000000" },
  ],
};

export const EXPERIENCE = [
  {
    role: "Backend Engineering Intern",
    org: "Elanine",
    period: " Oct 2025 — May 2026, Remote",
    description:
      "Built and maintained backend systems for Doodly, a D2C dairy delivery platform — routing, Shopify integration, Paytm payments, and MongoDB/Mongoose schema work.",
  },
  {
    role: "Mentor",
    org: "Innogeeks",
    period: "2025",
    description:
      "Mentoring 20+ junior developers at KIET's college tech society — code reviews, project guidance, and onboarding new members into real-world workflows.",
  },
  {
    role: "Freelance Developer",
    org: "Private",
    period: "Ongoing",
    description:
      "Frontend and tooling work — Cafe/Restaurant PoS landing pages, a GST verification tool, and financial document generators for billingsoftwareindia.in.",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech, Computer Science (AI/ML)",
    org: "KIET Group of Institutions",
    period: "2024 — 2028",
    description: "CGPA 7.8. SIH National Runner-Up. India AI Impact Summit delegate.",
  },
];

// Real artists — track titles aren't stored anywhere reliable to pull from,
// so this renders as a "top artists" widget rather than fabricated songs.
// This is only used as a FALLBACK while SPOTIFY_TRACKS below is empty.
export const TOP_ARTISTS = [
  { name: "fred again..", genre: "electronic", image: "https://i.pinimg.com/736x/93/d3/3b/93d33b221e817388a04e6e1834d23cd7.jpg" },
  { name: "linkin park", genre: "rock", image: "https://i.pinimg.com/736x/e8/47/18/e84718993d6b5d1bcd3212fdb8cd8a24.jpg" },
  { name: "Arijit Singh", genre: "playback", image: "https://i.pinimg.com/webp/736x/40/f3/22/40f3228c12333d610f7b384b316d2fd5.webp" },
  { name: "Aditya Rikhari", genre: "indie", image: "https://i.pinimg.com/736x/5a/bc/dc/5abcdcf00101cbc6a78a55361618f713.jpg" },
  { name: "Sunidhi Chauhan", genre: "playback", image: "https://i.pinimg.com/474x/44/f7/c5/44f7c5d1d5f2fc6739b71abf956ca9e3.jpg" },
];

// Paste Spotify track *share* links here (open a track → Share → Copy Song
// Link) — e.g. "https://open.spotify.com/track/6HrDbZhQVIz8SoJudj9xjr".
// They're converted to embeds automatically, same "drop a URL, it just
// works" pattern as PINTEREST_IMAGES above. While this stays empty, the
// Music page falls back to the TOP_ARTISTS widget instead.
export const SPOTIFY_TRACKS = [
  "https://open.spotify.com/track/5EiVeDviICNBtdhZwGxp0Z?si=019ad5f5b86a4186",
  "https://open.spotify.com/track/6IqVq76K6UuJdYwZFgXosQ?si=5197151780014790",
  "https://open.spotify.com/track/5QOBT97OmYCZo1W5u7tRrB?si=84eb23c691b24504",
  "https://open.spotify.com/track/5VmmaElvu2KTB0mpUSGlMy?si=1c0251d90e3a4c8f",
  "https://open.spotify.com/track/3xXBsjrbG1xQIm1xv1cKOt?si=d5b25e108def4379"
  // "https://open.spotify.com/track/6HrDbZhQVIz8SoJudj9xjr",
];

export const ANIME = [
  { title: "Haikyuu!!", image: "https://i.pinimg.com/474x/2e/9f/0b/2e9f0b19652425e0646c3c4a97b1d123.jpg", tone: "linear-gradient(135deg,#f0d9d3,#d98878)" },
  { title: "Demon Slayer", image: "https://i.pinimg.com/474x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg", tone: "linear-gradient(135deg,#efe6d9,#c9b48a)" },
  { title: "Samurai Champloo", image: "https://i.pinimg.com/474x/7b/5f/74/7b5f741806d2fc5475a987f0646cd974.jpg", tone: "linear-gradient(135deg,#d9d9d9,#8a8a8a)" },
  { title: "Frieren", image: "https://i.pinimg.com/webp/474x/09/14/72/091472f1ecb725e6ac371faea4ffbebe.webp", tone: "linear-gradient(135deg,#e4dfea,#b8a9d3)" },
  { title: "Summertime Rendering", image: "https://i.pinimg.com/474x/9d/ac/a9/9daca9601f0dd9f38412aab0be3cde75.jpg", tone: "linear-gradient(135deg,#dfead6,#a7c495)" },
];

// Converts a Spotify share/open URL (track/album/playlist/artist) into its
// embeddable iframe src. Accepts links already in embed form too.
export function toSpotifyEmbedUrl(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.pathname.startsWith("/embed/")) return url;
    const parts = u.pathname.split("/").filter(Boolean); // [type, id]
    if (parts.length < 2) return null;
    const [type, id] = parts;
    return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;
  } catch {
    return null;
  }
}