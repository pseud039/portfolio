import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects by Saumya Sharma — backend, fullstack, Go, Node.js, TypeScript.",
};

const BackIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export default function ProjectsPage() {
  return (
    <main style={{ maxWidth: "850px", margin: "0 auto", padding: "0 24px 80px" }}>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          gap: "8px",
          color: "var(--mut)",
          textDecoration: "none",
          font: "400 14px var(--mono)",
          margin: "36px 0 8px",
        }}
      >
        <BackIcon /> back
      </Link>
      <h1 style={{ font: "700 40px/1.05 var(--mono)", margin: "0 0 8px", letterSpacing: "-1px" }}>
        Projects
      </h1>
      <p style={{ color: "var(--mut)", marginBottom: "40px" }}>Things I've built and shipped.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
