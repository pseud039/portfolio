import Reveal from "./Reveal";
import ProjectMedia from "./ProjectMedia";
import { ExternalLinkIcon, GithubIcon, LockIcon } from "@/lib/icon";

const MAX_TAGS = 3;

function ProjectCard({ project: p, delay }) {
  const extraTags = p.tags.length - MAX_TAGS;
  // NDA work: image only (no video, no links), titled "Under NDA".
  const title = p.nda ? "Under NDA" : p.title;

  return (
    <Reveal as="article" className="project-card" delay={delay}>
      <ProjectMedia image={p.image} video={p.nda ? "" : p.video} tone={p.tone} title={title}>
        <span className={`project-media-placeholder ${p.nda ? "is-light" : ""}`}>{title}</span>
      </ProjectMedia>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-semibold tracking-tight flex items-center gap-2">
          {p.nda && <LockIcon width={15} height={15} className="text-ink-muted" />}
          {title}
        </h3>
        {p.year && (
          <p className="mt-0.5 text-[11px] font-mono text-ink-muted">
            {p.year} · <span className="text-accent">{p.status}</span>
          </p>
        )}
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft line-clamp-2" title={p.description}>
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {p.tags.slice(0, MAX_TAGS).map((t) => (
            <span key={t} className="project-pill">
              {t}
            </span>
          ))}
          {extraTags > 0 && (
            <span className="text-[11px] text-ink-muted px-1" title={p.tags.slice(MAX_TAGS).join(", ")}>
              +{extraTags}
            </span>
          )}
        </div>
        {!p.nda && (p.liveUrl || p.githubUrl) && (
          <div className="mt-auto flex gap-2 pt-5">
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                <ExternalLinkIcon /> Live
              </a>
            )}
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                <GithubIcon width={14} height={14} /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function ProjectsList({ projects }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p, i) => (
        <ProjectCard key={p.title || `nda-${i}`} project={p} delay={i * 70} />
      ))}
    </div>
  );
}