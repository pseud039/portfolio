import type { SiteProfile, MoreItem } from "./types";

// ─────────────────────────────────────────────────────────────
// Site-wide identity. Corresponds to window.DATA top-level fields.
// ─────────────────────────────────────────────────────────────
export const profile: SiteProfile = {
  brand: "pseud0.",
  name: "Saumya Sharma",
  handle: "@pseud039",
  role: "Backend-leaning Full Stack Developer",
  status: "Open to internships",
  photo: "/assets/icon.jpg",
  bio: "Third-year CSE (AI/ML) undergrad who'd rather ship a small, well-crafted backend than a big sloppy one. {{Node.js}} and {{TypeScript}} are home turf, {{Go}} is the language I'm actively getting fluent in. Currently deep in DSA prep and internship applications, with a handful of production systems already behind me.",
  email: "pseudo.0609@gmail.com",
  resume:
    "https://drive.google.com/file/d/1kDRW9nG27fPbfIeHQhI9OvJxECOJAzfk/view?usp=sharing",
  github: "pseud039",
  socials: {
    x: "https://x.com/pseud039",
    github: "https://github.com/pseud039",
    linkedin: "https://www.linkedin.com/in/saumya-p06/",
    pinterest: "https://in.pinterest.com/pseud039/",
  },
};

export const more: MoreItem[] = [
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
