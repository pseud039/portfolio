export const experience = [
  {
    role: "backend engineering intern",
    date: "Oct 2025 – May 2026",
    company: "elanine · remote",
    desc: "delivery management backend — google maps routing with structured fallback, route snapshot caching, paytm & shopify integrations. built systems that handle real routing logic under nda constraints.",
  },
  {
    role: "freelance developer",
    date: "2025 – present",
    company: "nexus · remote",
    desc: "built and shipped landing pages for billing software verticals — restaurant pos, gst verification tooling, paytm-style api scaffold, and many other.",
  },
  {
    role: "tech mentor",
    date: "2025 – present",
    company: "innogeeks · kiet group",
    desc: "mentoring 20+ students on backend systems, typescript, and api design. workshops, code reviews, and the occasional 'why is your prisma schema doing that' debug.",
  },
  {
    role: "runner-up",
    date: "2025",
    company: "smart india hackathon · sih",
    desc: "national-level. built under immense pressure. college runner up. still thinking about it.",
  },
];export type ExperienceItem = {
  role: string;
  date: string;
  company: string;
  desc: string;
};
export const TEASER_EXPERIENCE_COUNT = 3;