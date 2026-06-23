export const projects = [
  {
    name: "crawlkit",
    desc: "an ecs-inspired modular web crawler built as a pnpm monorepo. five composable component interfaces — fetcher, parser, strategy, politeness, revisit. pgvector + hnsw indexing for semantic mode.",
    tags: ["typescript", "node.js", "postgresql", "redis", "bullmq", "pnpm"],
    href: "https://github.com/pseud039/crawler",
  },
  {
    name: "predine",
    desc: "food pre-order & pickup platform. real users, live at predine.in. built end-to-end — menu management, order flows, kitchen-side views.",
    tags: ["next.js", "postgresql", "prisma", "typescript"],
    href: "https://preorder-brown.vercel.app",
  },
  {
    name: "termix",
    desc: "a terminal-native music controller supporting spotify, youtube, and local files. tui-first, keyboard-driven, no electron in sight.",
    tags: ["typescript", "node.js", "tui"],
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
