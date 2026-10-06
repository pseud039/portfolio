import type { Metadata } from "next";
import { CONFIG, EXPERIENCE, EDUCATION, PROJECTS, TECH_STACK } from "@/lib/data";
import ProjectList from "@/components/ProjectList";
import Reveal from "@/components/Reveal";
import TypingLoop from "@/components/TypingLoop";
import LiveClock from "@/components/LiveClock";
import { EmailIcon, GithubIcon, LinkedinIcon, TwitterBirdIcon } from "@/lib/icon";
import type { CSSProperties } from "react";
import icon from "@/assets/icon.jpg";
import ContactSection from "@/components/ContactSection";
import SkillIcon from "@/components/SkillIcon";

export const metadata: Metadata = {
  title: "Saumya Sharma — Developer Portfolio",
  description: "Saumya Sharma (pseud039) — backend-leaning full-stack developer. Node.js, TypeScript, Go.",
};

function SectionHeading({ title, label }: { title: string; label: string }) {
  return (
    <div className="flex items-baseline justify-between mb-6">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <span className="text-xs font-mono text-ink-muted">{label}</span>
    </div>
  );
}

async function GitHubSection() {
  const user = CONFIG.handle;
  let contributions: Array<{ date: string; count: number }> = [];

  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`, {
      cache: "no-store",
    });
    if (response.ok) {
      const data = await response.json();
      contributions = data.contributions || [];
    }
  } catch {
    contributions = [];
  }

  const weeks = 26;
  const recent = contributions.slice(-weeks * 7);
  const byWeek: Array<Array<{ date: string; count: number }>> = [];
  for (let index = 0; index < recent.length; index += 7) byWeek.push(recent.slice(index, index + 7));
  const displayWeeks = byWeek.length
    ? byWeek
    : Array.from({ length: weeks }, () => Array.from({ length: 7 }, () => ({ date: "", count: 0 })));
  const level = (count: number) =>
    count === 0 ? "var(--gh-0)" : count < 3 ? "var(--gh-1)" : count < 6 ? "var(--gh-2)" : count < 10 ? "var(--gh-3)" : "var(--gh-4)";

  const labels = displayWeeks.reduce<{ label: string; i: number }[]>((accumulator, week, index) => {
    const month = new Date(week[0]?.date || "").toLocaleDateString("en-US", { month: "short" });
    if (index === 0 || month !== accumulator[accumulator.length - 1]?.label) accumulator.push({ label: month, i: index });
    return accumulator;
  }, []);

  return (
    <section id="github" className="rounded-2xl border border-rule bg-card/60 p-6 sm:p-8">
      <div className="flex items-baseline justify-between mb-1">
        <h2 className="text-xl font-semibold tracking-tight">GitHub.</h2>
        <a href={CONFIG.socials.github} target="_blank" rel="noopener" className="text-xs font-mono text-ink-muted hover:text-ink transition-colors">
          @pseud039 ↗
        </a>
      </div>
      <div className="mt-4 rounded-xl border border-rule bg-paper p-4">
        <div id="gh-months" className="mb-1">
          <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${displayWeeks.length}, 1fr)` }}>
            {displayWeeks.map((_, index) => {
              const found = labels.find((label) => label.i === index);
              return (
                <span key={`${index}-${found?.label || ""}`} className="text-[9px] font-mono text-ink-muted">
                  {found?.label || ""}
                </span>
              );
            })}
          </div>
        </div>
        <div id="gh-grid">
          <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${displayWeeks.length}, 1fr)` }}>
            {displayWeeks.map((week, weekIndex) => (
              <div key={`week-${weekIndex}`} className="grid gap-[3px] grid-rows-7">
                {week.map((day) => (
                  <span
                    key={day.date}
                    className="gh-cell"
                    style={{ background: level(day.count) }}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-3 text-[10px] font-mono text-ink-muted">
          <span>Less</span>
          <span className="size-[11px] rounded-[2px]" style={{ background: "var(--gh-0)" }} />
          <span className="size-[11px] rounded-[2px]" style={{ background: "var(--gh-1)" }} />
          <span className="size-[11px] rounded-[2px]" style={{ background: "var(--gh-2)" }} />
          <span className="size-[11px] rounded-[2px]" style={{ background: "var(--gh-3)" }} />
          <span className="size-[11px] rounded-[2px]" style={{ background: "var(--gh-4)" }} />
          <span>More</span>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-12 space-y-10">
      <section className="rounded-2xl border border-rule bg-card/60 p-6 sm:p-8">
        <div className="flex items-center justify-between text-xs text-ink-muted font-mono mb-6">
          <span>hi there, I'm</span>
          <LiveClock className="tabular-nums" />
        </div>
        <div className="flex items-start gap-5">
          <div className="size-16 shrink-0 rounded-full bg-gradient-to-br from-accent to-amber-700 grid place-items-center text-xl font-semibold text-white shadow-inner">
            <img src={icon.src} className="rounded-full" alt="Saumya Sharma" />
          </div>
          <div className="min-w-0">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{CONFIG.name}</h1>
            <p className="mt-1.5 text-sm text-ink-muted font-mono">
              @{CONFIG.handle} &nbsp;|&nbsp;
              <TypingLoop className="text-ink-soft" />
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" id="hero-links">
          <a href={CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-ink px-3.5 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity">
            Resume
          </a>
          <a href={`mailto:${CONFIG.email}`} className="inline-flex items-center gap-2 rounded-lg border border-rule bg-paper px-3 py-1.5 text-sm text-ink-soft hover:text-ink hover:border-accent transition-colors font-mono">
            <EmailIcon />
          </a>
          <a href={CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-rule bg-paper px-3 py-1.5 text-sm text-ink-soft hover:text-ink hover:border-accent transition-colors font-mono">
            <GithubIcon />
          </a>
          <a href={CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-rule bg-paper px-3 py-1.5 text-sm text-ink-soft hover:text-ink hover:border-accent transition-colors font-mono">
            <TwitterBirdIcon />
          </a>
          <a href={CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-rule bg-paper px-3 py-1.5 text-sm text-ink-soft hover:text-ink hover:border-accent transition-colors font-mono">
            <LinkedinIcon />
          </a>
        </div>
        <p className="mt-7 text-[15px] leading-relaxed text-ink-soft">
          Third-year CSE (AI/ML) undergrad who'd rather ship a small, well-crafted backend than a big sloppy one.
          <mark className="mark-accent">Node.js and TypeScript are home turf</mark>, Go is the language I'm actively getting fluent in.
          Currently deep in DSA prep and internship applications, with a handful of production systems already behind me.
        </p>
      </section>

      <section id="projects" className="rounded-2xl border border-rule bg-card/60 p-6 sm:p-8">
        <SectionHeading title="Projects." label="things I've built" />
        <ProjectList projects={PROJECTS} />
      </section>

      <section id="stack" className="rounded-2xl border border-rule bg-card/60 p-6 sm:p-8">
        <SectionHeading title="Tech stack." label="the tools behind my builds" />
        <div className="space-y-6">
          {[
            ["Languages", TECH_STACK.languages],
            ["Frameworks & tools", TECH_STACK.frameworks],
            ["Infra & data", TECH_STACK.infra],
          ].map(([label, items]) => (
            <div key={label as string}>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted mb-3">{label as string}</p>
              <div className="flex flex-wrap gap-2">
                {(items as Array<{ name: string; icon: string }>).map((item) => (
                  <span key={item.name} className="chip" style={{ ["--tone" as string]: "var(--accent)" } as CSSProperties}>
                      <span className="chip-glow" />
                      <span className="chip-icon">
                        <SkillIcon name={item.name} icon={item.icon} />
                      </span>
                      <span className="relative">{item.name}</span>
                    </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="rounded-2xl border border-rule bg-card/60 p-6 sm:p-8">
        <SectionHeading title="Experience." label="where I've worked" />
        <div className="space-y-5">
          {EXPERIENCE.map((item) => (
            <Reveal key={`${item.role}-${item.org}`} className="timeline-item pl-5 py-1">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <p className="font-semibold text-[14px] tracking-tight">
                  {item.role} <span className="text-ink-muted font-normal">· {item.org}</span>
                </p>
                <span className="text-[10px] font-mono text-ink-muted whitespace-nowrap">{item.period}</span>
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="education" className="rounded-2xl border border-rule bg-card/60 p-6 sm:p-8">
        <SectionHeading title="Education." label="school things" />
        <div className="space-y-5">
          {EDUCATION.map((item) => (
            <Reveal key={`${item.degree}-${item.org}`} className="timeline-item pl-5 py-1">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <p className="font-semibold text-[14px] tracking-tight">
                  {item.degree} <span className="text-ink-muted font-normal">· {item.org}</span>
                </p>
                <span className="text-[10px] font-mono text-ink-muted whitespace-nowrap">{item.period}</span>
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <GitHubSection />
      <ContactSection />

      <footer className="pt-2 pb-28 text-center text-[11px] font-mono text-ink-muted">© {new Date().getFullYear()} Saumya Sharma · built with care</footer>
    </main>
  );
}
