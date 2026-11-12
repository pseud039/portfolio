// ─────────────────────────────────────────────────────────────
// Shared types for all data files.
// ─────────────────────────────────────────────────────────────

export interface StackItem {
  name: string;
  /** simple-icons slug, full URL, local path like "assets/icons/aws.svg", or "" for initials */
  icon: string;
  /** hex string like "#3178C6" or "auto" (white in dark / black in light) */
  color: string;
}

export interface StackGroup {
  group: string;
  items: StackItem[];
}

export interface ExperienceItem {
  /** single letter fallback */
  logo: string;
  logoImg?: { dark: string; light: string; link?: string };
  org: string;
  role: string;
  period: string;
  where: string;
  points: string[];
  tech: StackItem[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  /** e.g. "2025 · Live" */
  meta: string;
  image: string;
  desc: string;
  tags: string[];
  links: ProjectLink[];
  /** if true, project has a case-study MDX file at content/projects/<slug>.mdx */
  hasCaseStudy?: boolean;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  note: string;
}

export interface ContactInfo {
  title: string;
  text: string;
  cta: string;
  notes: string[];
}

export interface MoreItem {
  label: string;
  href: string;
  image: string;
  tone: string;
}

export interface SiteProfile {
  brand: string;
  name: string;
  handle: string;
  role: string;
  status: string;
  photo: string;
  bio: string;
  email: string;
  resume: string;
  github: string;
  socials: {
    x: string;
    github: string;
    linkedin: string;
    pinterest: string;
  };
}
