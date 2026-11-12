import type { Project } from "./types";

// ─────────────────────────────────────────────────────────────
// Projects. Corresponds to window.DATA.projects.
// Set hasCaseStudy: true only when content/projects/<slug>.mdx exists.
// ─────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "under-nda",
    title: "Under NDA",
    meta: "Production",
    image: "assets/projects-assets/under-nda.png",
    desc: "Backend engineering for a live D2C dairy delivery platform — routing with a Google Maps + Haversine fallback, Shopify GraphQL/webhook integration, Paytm payment gateway, and Mongoose schemas handling multi-size product tracking. Six months, remote, under NDA.",
    tags: ["Node.js", "Express", "MongoDB", "Shopify", "Paytm", "Google Maps"],
    links: [],
  },
  {
    slug: "termix",
    title: "Termix",
    meta: "2025 · In progress",
    image: "/assets/projects-assets/termix.png",
    desc: "A Go-based TUI music controller — mpv IPC for local playback, Spotify Connect for remote control, yt-dlp for YouTube. My accelerator project for learning Go by building something I actually use daily.",
    tags: ["Go", "Bubbletea", "mpv", "Spotify", "yt-dlp"],
    links: [{ label: "GitHub", url: "https://github.com/pseud039/termix" }],
    hasCaseStudy: true
  },
  {
    slug: "predine",
    title: "Predine",
    meta: "2025 · Live",
    image: "assets/projects-assets/predine.png",
    desc: "A restaurant pre-ordering platform running in production for a real client — order flow, menu management, and payment handling built for actual foot traffic, not a demo.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
    links: [
      { label: "Live", url: "https://preorder-brown.vercel.app/" },
      { label: "GitHub", url: "https://github.com/pseud039/predorder" },
    ],
  },
  {
    slug: "crawlkit",
    title: "CrawlKit",
    meta: "2025 · Completed",
    image: "",
    desc: "A composable web crawler with an ECS-inspired plugin architecture — swap out fetchers, parsers, and storage without touching the core loop. Currently wiring a RAG pipeline on top with pgvector and OpenAI embeddings.",
    tags: ["TypeScript", "BullMQ", "Redis", "pgvector", "OpenAI", "RAG"],
    links: [{ label: "GitHub", url: "https://github.com/pseud039/crawler" }],
  },
  
{
  slug: "trade-matching-engine",
  title: "Trade Matching Engine",
  meta: "2026 · Systems Engineering",
  image: "assets/projects-assets/trade-matching-engine.png",
  desc: "A concurrent exchange-style order matching engine built with Java and Spring Boot. Implements price-time priority, FIFO execution, partial fills, and per-symbol order books with fine-grained locking. Includes PostgreSQL-backed immutable trade auditing and optional Kafka event publishing.",
  tags: [
    "Java 17",
    "Spring Boot",
    "PostgreSQL",
    "Kafka",
    "Hibernate",
    "Concurrency",
    "JUnit"
  ],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/pseud039/Machine-Engine"
    }
  ],
},

];
