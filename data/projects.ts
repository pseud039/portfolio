export const projects = [
  {
    name: "crawlkit",
    desc: "an ecs-inspired modular web crawler built as a pnpm monorepo. five composable component interfaces — fetcher, parser, strategy, politeness, revisit. pgvector + hnsw indexing for semantic mode.",
    tags: ["typescript", "node.js", "postgresql", "redis", "bullmq", "pnpm"],
    href: "https://github.com/pseud039",
  },
  {
    name: "predine",
    desc: "food pre-order & pickup platform. real users, live at predine.in. built end-to-end — menu management, order flows, kitchen-side views.",
    tags: ["next.js", "postgresql", "prisma", "typescript"],
    href: "https://predine.in",
  },
  {
    name: "termix",
    desc: "a terminal-native music controller supporting spotify, youtube, and local files. tui-first, keyboard-driven, no electron in sight.",
    tags: ["typescript", "node.js", "tui"],
    href: "https://github.com/pseud039",
  },
  {
    name: "orveta",
    desc: "erp & billing platform landing page for indian businesses. astro v6, tailwind v4, lenis scroll, motion — scroll-jacked sections, tabbed integrations, enterprise feel.",
    tags: ["astro", "tailwind v4", "motion", "lenis"],
    href: "https://github.com/pseud039",
  },
];
export type Project = {
  name: string;
  desc: string;
  tags: string[];
  href: string;
};

export const TEASER_PROJECT_COUNT = 3;
