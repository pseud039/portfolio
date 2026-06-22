import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "projects — saumya sharma",
  description: "projects built by saumya sharma — backend systems, full-stack apps, and tools.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-16">
      <Reveal>
        <SectionLabel>projects</SectionLabel>
      </Reveal>
      <Reveal>
        <div>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} isFirst={i === 0} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}