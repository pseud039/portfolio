import type { ExperienceItem } from "./types";

// ─────────────────────────────────────────────────────────────
// Work experience. Corresponds to window.DATA.experience.
// ─────────────────────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    logo: "E",
    logoImg: {
      dark: "/assets/experience-assets/elanine-white.png",
      light: "/assets/experience-assets/elanine-dark.svg",
      link: "https://www.elanine.com",
    },
    org: "Elanine",
    role: "Backend Engineering Intern",
    period: "Oct 2025 — May 2026",
    where: "Remote",
    points: [
      "Built and maintained backend systems for Doodly, a D2C dairy delivery platform.",
      "Routing, Shopify integration, Paytm payments, and MongoDB/Mongoose schema work.",
    ],
    tech: [
      { name: "Node.js", icon: "nodedotjs", color: "#5FA04E" },
      { name: "Express", icon: "express", color: "auto" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    ],
  },
  {
    logo: "I",
    org: "Innogeeks",
    role: "Mentor",
    period: "2025",
    where: "KIET Group of Institutions",
    points: [
      "Mentoring 20+ junior developers at KIET's college tech society.",
      "Code reviews, project guidance, and onboarding new members into real-world workflows.",
    ],
    tech: [],
  },
  {
    logo: "F",
    org: "Freelance",
    role: "Freelance Developer",
    period: "Ongoing",
    where: "Private",
    points: [
      "Cafe/Restaurant PoS landing pages.",
      "A GST verification tool and financial document generators for billingsoftwareindia.in.",
    ],
    tech: [],
  },
];
