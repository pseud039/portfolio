export const experience = [
  {
    role: "backend engineering intern",
    date: "2024 – present",
    company: "elanine · remote",
    desc: "delivery management backend — google maps routing with haversine fallback, route snapshot caching, paytm & shopify integrations. systems that handle real routing logic under nda.",
  },
  {
    role: "freelance developer",
    date: "2024 – present",
    company: "hitech billsoft · remote",
    desc: "landing pages for billing software verticals — restaurant pos, supermarket pos, cafe pos. gst tooling, paytm-style api scaffold, client-side pdf generation.",
  },
  {
    role: "tech mentor",
    date: "2024 – present",
    company: "innogeeks · kiet group",
    desc: "mentoring 20+ students on backend systems, typescript, and api design. workshops, code reviews, and the occasional 'why is your prisma schema doing that' debug.",
  },
  {
    role: "runner-up",
    date: "2024",
    company: "smart india hackathon · sih",
    desc: "national-level. built under 36-hour pressure. came second. still thinking about it.",
  },
];export type ExperienceItem = {
  role: string;
  date: string;
  company: string;
  desc: string;
};
export const TEASER_EXPERIENCE_COUNT = 3;