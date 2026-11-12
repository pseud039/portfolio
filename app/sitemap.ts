import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE = "https://www.pseud039.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({
      url: `${BASE}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...projectRoutes,
    { url: `${BASE}/music`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/anime`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/pinterest`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
