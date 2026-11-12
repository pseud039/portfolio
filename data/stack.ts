import type { StackGroup } from "./types";

// ─────────────────────────────────────────────────────────────
// Tech stack. Corresponds to window.DATA.stack.
// icon = simple-icons slug, full URL, or local path like "/assets/icons/aws.svg"
// color = hex or "auto" (white dark / black light)
// ─────────────────────────────────────────────────────────────
export const stack: StackGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Go", icon: "go", color: "#00ADD8" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "SQL", icon: "/assets/icons/sql.svg ", color: "#9aa0a6" },
    ],
  },
  {
    group: "Frameworks & tools",
    items: [
      { name: "Node.js", icon: "nodedotjs", color: "#5FA04E" },
      { name: "Express", icon: "express", color: "auto" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextdotjs", color: "auto" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Socket.io", icon: "socketdotio", color: "auto" },
      { name: "Expo", icon: "expo", color: "auto" },
      { name: "Bubbletea", icon: "/assets/icons/bubbletea.svg", color: "#ff5fa2" },
    ],
  },
  {
    group: "Infra & data",
    items: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Redis", icon: "redis", color: "#FF4438" },
      { name: "Prisma", icon: "prisma", color: "auto" },
      { name: "BullMQ", icon: "/assets/icons/bullmq.svg", color: "#ef4444" },
      { name: "AWS", icon: "/assets/icons/aws.svg", color: "#FF9900" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "Vercel", icon: "vercel", color: "auto" },
    ],
  },
];
