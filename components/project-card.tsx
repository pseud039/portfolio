import type { Project } from "@/data/projects";

export function ProjectCard({ project, isFirst }: { project: Project; isFirst?: boolean }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener"
      className="group grid grid-cols-[1fr_auto] gap-4 items-start py-5 border-b row-hover"
      style={{ borderTop: isFirst ? "1px solid var(--border)" : undefined }}
    >
      <div>
        <h3 className="font-serif text-[22px] leading-tight tracking-tight lowercase transition-colors group-hover:text-[color:var(--accent)]">
          {project.name}
        </h3>
        <p className="text-[13.5px] text-[color:var(--muted)] leading-[1.65] mt-1.5">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
      <span className="text-[14px] text-[color:var(--border)] group-hover:text-[color:var(--accent)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>
  );
}