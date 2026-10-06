import Reveal from "./Reveal";
import ProjectMedia from "./ProjectMedia";
import { ArrowIcon } from "@/lib/icon";

function NdaCard({ project, delay }) {
  return (
    <Reveal as="article" className="nda-card" delay={delay}>
      <div className="nda-lock">
        <span>Under NDA</span>
      </div>
      <div className="nda-desc">{project.description}</div>
      {project.tags && (
        <div className="absolute left-6 right-6 bottom-3 flex flex-wrap gap-1.5 opacity-90">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10.5px] font-mono px-1.5 py-0.5 rounded bg-paper/90 text-ink-soft border border-rule"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Reveal>
  );
}

function ProjectCard({ project: p, delay }) {
  return (
    <Reveal as="article" className="project-card overflow-hidden" delay={delay}>
      {(p.image || p.video) && <ProjectMedia image={p.image} video={p.video} tone={p.tone} title={p.title} />}
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="font-semibold text-[15px] tracking-tight flex items-center gap-2">
            {p.title}
            <span className="text-[10px] font-mono text-ink-muted border border-rule rounded px-1.5 py-0.5">
              {p.year}
            </span>
            <span className="text-[10px] font-mono text-accent border border-rule rounded px-1.5 py-0.5">
              {p.status}
            </span>
          </h3>
          <div className="flex gap-1.5 shrink-0">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono px-2 py-1 rounded-md border border-rule hover:border-accent hover:text-ink text-ink-soft transition-colors inline-flex items-center gap-1"
              >
                live <ArrowIcon />
              </a>
            )}
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono px-2 py-1 rounded-md border border-rule hover:border-accent hover:text-ink text-ink-soft transition-colors inline-flex items-center gap-1"
              >
                github <ArrowIcon />
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-[10.5px] font-mono px-1.5 py-0.5 rounded bg-paper text-ink-soft border border-rule"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function ProjectsList({ projects }) {
  return (
    <div className="grid gap-4">
      {projects.map((p, i) =>
        p.nda ? (
          <NdaCard key={i} project={p} delay={i * 70} />
        ) : (
          <ProjectCard key={p.title} project={p} delay={i * 70} />
        )
      )}
    </div>
  );
}