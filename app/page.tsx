"use client";

import { Reveal } from "@/components/reveal";
import { Divider, SectionLabel } from "@/components/section-label";
import { ProjectCard } from "@/components/project-card";
import { ExperienceRow } from "@/components/experience-row";
import { projects, TEASER_PROJECT_COUNT } from "@/data/projects";
import { experience, TEASER_EXPERIENCE_COUNT } from "@/data/experience";
import { githubStats, wakatime, elsewhere } from "@/data/stat";
import { stack } from "@/data/stack";
import { socials } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Stack />
      <Divider />
      <Stats />
      <Divider />
      <ProjectsTeaser />
      <Divider />
      <ExperienceTeaser />
      <Divider />
      <Elsewhere />
      <Divider />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-32 pb-4">
      <p className="rise font-mono text-[11px] text-[color:var(--muted)] tracking-widest lowercase mb-5">
        saumya sharma · cse-aiml · batch '28
      </p>
      <h1 className="rise rise-d1 font-serif text-[clamp(2.6rem,8vw,4.2rem)] font-normal leading-[1.05] tracking-tight lowercase">
        pseudo
        <span className="block mt-3 font-mono text-[13px] text-[color:var(--muted)] tracking-wide">
          @pseud039 — <em className="italic" style={{ fontFamily: "var(--font-serif)", fontSize: "16px" }}>backend, mostly.</em>
        </span>
      </h1>

      <p className="rise rise-d2 font-mono text-[12px] text-[color:var(--muted)] mt-7 mb-7 tracking-wide">
        full stack · backend & devops · <span style={{ color: "var(--accent)" }}>typescript</span> / node.js · remote
      </p>

      <div className="rise rise-d3 space-y-4 text-[15.5px] leading-[1.85] text-[color:var(--ink-soft)] max-w-[560px]">
        <p>
          i build systems that are{" "}
          <em className="font-serif text-[17px]" style={{ color: "var(--ink)" }}>
            well-architected
          </em>
          , not just working. interfaces before implementation. typescript over vibes. distributed queues, typed
          apis, delivery routing logic — the kind of work where the bug isn&apos;t in your code but in the
          assumption you made three commits ago.
        </p>
        <p>
          third-year at kiet, mentor at innogeeks, runner-up at sih — which means i know exactly what it feels like
          to be second-best, and build harder for it.
        </p>
      </div>

      <div className="rise rise-d4 mt-8 inline-flex items-center gap-3 px-3.5 py-2 rounded-md border bg-[color:var(--bg-2)]">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent)", animation: "pulse-dot 2s ease-in-out infinite" }}
        />
        <span className="font-mono text-[11px] text-[color:var(--muted)]">
          <span style={{ color: "var(--accent)" }}>now playing</span> · fred again.. — jungle
        </span>
      </div>

      <div className="rise rise-d5 mt-8 flex flex-wrap gap-5">
        {[
          { l: "github ↗", h: socials.github },
          { l: "x/twitter ↗", h: socials.twitter },
          { l: "reach out →", h: "#contact" },
          { l: "résumé ↗", h: socials.resume },
        ].map((x) => (
          <a key={x.l} href={x.h} className="link-underline font-mono text-[12px] text-[color:var(--muted)]">
            {x.l}
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <Reveal>
      <section id="about">
        <SectionLabel>about</SectionLabel>
        <div className="space-y-5 text-[15.5px] leading-[1.85] text-[color:var(--ink-soft)]">
          <p>
            third-year b.tech at kiet, cse-aiml. i build full-stack systems leaning hard toward the backend —
            distributed queues, typed apis, delivery routing, billing platforms for indian businesses.
          </p>
          <p>
            at{" "}
            <a href="#" className="link-underline" style={{ color: "var(--accent)" }}>
              innogeeks
            </a>{" "}
            i mentor 20+ juniors on systems and backend development. explaining why your race condition is showing
            up in production is its own kind of clarity.
          </p>
          <p>
            when i&apos;m not pushing code: anime with too much emotional investment, fred again.. at 2am,
            occasionally musical theater{" "}
            <span className="font-serif italic text-[17px]" style={{ color: "var(--sage)" }}>
              (yes, really
            </span>{" "}
            — and no, i won&apos;t explain further).
          </p>
        </div>
      </section>
    </Reveal>
  );
}

function Stack() {
  return (
    <Reveal>
      <section id="stack">
        <SectionLabel>stack</SectionLabel>
        <div>
          {stack.map((row, i) => (
            <div
              key={row.key}
              className="flex items-baseline gap-4 py-3 border-b row-hover"
              style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined }}
            >
              <span className="font-mono text-[11px] text-[color:var(--muted)] w-[90px] shrink-0 tracking-wide">
                {row.key}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {row.items.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function Stats() {
  return (
    <Reveal>
      <section id="stats">
        <SectionLabel>signal</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-[11px] text-[color:var(--muted)] mb-4 tracking-wide">github · @pseud039</p>
            <div className="space-y-4">
              {githubStats.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-[13px] text-[color:var(--ink-soft)]">{s.label}</span>
                    <span className="font-mono text-[11.5px]" style={{ color: "var(--accent)" }}>
                      {s.value}
                    </span>
                  </div>
                  <div className="stat-bar" style={{ ["--w" as never]: `${s.bar}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[color:var(--muted)] mb-4 tracking-wide">
              wakatime · last 30 days
            </p>
            <div className="space-y-4">
              {wakatime.map((w) => (
                <div key={w.lang}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-[13px] text-[color:var(--ink-soft)]">{w.lang}</span>
                    <span className="font-mono text-[11.5px] text-[color:var(--muted)]">{w.hours}</span>
                  </div>
                  <div className="stat-bar" style={{ ["--w" as never]: `${w.pct}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

function ProjectsTeaser() {
  const teaser = projects.slice(0, TEASER_PROJECT_COUNT);
  return (
    <Reveal>
      <section id="projects">
        <div className="flex items-baseline justify-between mb-8">
          <SectionLabel>projects</SectionLabel>
          <a href="/projects" className="link-underline font-mono text-[11px] text-[color:var(--muted)]">
            view all ↗
          </a>
        </div>
        <div>
          {teaser.map((p, i) => (
            <ProjectCard key={p.name} project={p} isFirst={i === 0} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function ExperienceTeaser() {
  const teaser = experience.slice(0, TEASER_EXPERIENCE_COUNT);
  return (
    <Reveal>
      <section id="experience">
        <div className="flex items-baseline justify-between mb-8">
          <SectionLabel>experience</SectionLabel>
          <a href="/experience" className="link-underline font-mono text-[11px] text-[color:var(--muted)]">
            view all ↗
          </a>
        </div>
        <div>
          {teaser.map((e, i) => (
            <ExperienceRow key={e.role} item={e} isFirst={i === 0} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function Elsewhere() {
  return (
    <Reveal>
      <section id="elsewhere">
        <SectionLabel>elsewhere</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {elsewhere.map((g) => (
            <div key={g.label}>
              <p className="font-mono text-[11px] text-[color:var(--muted)] mb-3 tracking-wide">{g.label}</p>
              <ul>
                {g.items.map((it, i) => (
                  <li
                    key={it}
                    className="flex items-center gap-2.5 py-1.5 border-b text-[13.5px] text-[color:var(--ink-soft)]"
                    style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined }}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--accent-soft)" }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function Contact() {
  const links = [
    { l: "email", h: socials.email, url: `mailto:${socials.email}` },
    { l: "github", h: "@pseud039", url: socials.github },
    { l: "x / twitter", h: "@pseud039", url: socials.twitter },
    { l: "linkedin", h: "saumya sharma", url: socials.linkedin },
  ];
  return (
    <Reveal>
      <section id="contact">
        <SectionLabel>contact</SectionLabel>
        <p className="text-[15.5px] leading-[1.8] text-[color:var(--ink-soft)] mb-7 max-w-[560px]">
          actively looking for{" "}
          <em className="font-serif text-[17px]" style={{ color: "var(--accent)" }}>
            backend / swe / devops
          </em>{" "}
          internships. if you&apos;re building something interesting or want to talk systems architecture — reach
          out. i reply.
        </p>
        <div>
          {links.map((x, i) => (
            <a
              key={x.l}
              href={x.url}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between py-3.5 border-b row-hover"
              style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined }}
            >
              <span className="text-[14px] lowercase group-hover:text-[color:var(--accent)] transition-colors">
                {x.l}
              </span>
              <span className="flex items-center gap-4">
                <span className="font-mono text-[11.5px] text-[color:var(--muted)]">{x.h}</span>
                <span className="text-[13px] text-[color:var(--border)] group-hover:text-[color:var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </Reveal>
  );
}