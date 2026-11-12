import { Hero } from "@/components/Hero";
import { ExperienceList } from "@/components/ExperienceList";
import { StackChips } from "@/components/StackChips";
import { Heatmap } from "@/components/Heatmap";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCard } from "@/components/ContactCard";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { stack } from "@/data/stack";
import { projects } from "@/data/projects";
import { education, contact } from "@/data/education";

const sectionStyle: React.CSSProperties = {
  maxWidth: "850px",
  margin: "56px auto 0",
  padding: "0 24px",
};

const labStyle: React.CSSProperties = {
  font: "500 14px var(--sans)",
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "var(--mut)",
  margin: 0,
};

const subStyle: React.CSSProperties = {
  margin: "10px 0 44px",
  color: "var(--mut)",
  font: "400 16px/1.6 var(--sans)",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Hero profile={profile} />

      {/* Experience */}
      <section id="experience" style={sectionStyle}>
        <h2 style={labStyle}>Experience</h2>
        <p style={subStyle}>Where I've worked and contributed.</p>
        <ExperienceList items={experience} />
      </section>

      {/* Tech Stack */}
      <section id="stack" style={sectionStyle}>
        <h2 style={labStyle}>Tech Stack</h2>
        <p style={subStyle}>The tools behind my builds.</p>
        <StackChips groups={stack} />
        <Heatmap github={profile.github} />
      </section>

      {/* Featured Projects */}
      <section id="projects" style={sectionStyle}>
        <h2 style={labStyle}>Featured Projects</h2>
        <p style={subStyle}>Things I've built and shipped.</p>
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
      </section>

      {/* Education + Contact */}
      <ContactCard education={education} contact={contact} profile={profile} />
    </main>
  );
}
