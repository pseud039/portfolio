"use client";

import Link from "next/link";
import type { Project } from "@/data/types";

const ExtIcon = () => (
  <svg style={{ width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, meta, image, desc, tags, links, slug, hasCaseStudy } = project;
  const initials = title.slice(0, 2);

  return (
    <article
      style={{
        background: "var(--card)",
        border: "1px solid var(--bd)",
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image / placeholder */}
      <div
        style={{
          aspectRatio: "16/9",
          background: "linear-gradient(135deg, var(--soft), var(--card))",
          display: "grid",
          placeItems: "center",
          font: "700 22px var(--mono)",
          color: "var(--mut)",
          overflow: "hidden",
          borderBottom: "1px solid var(--bd)",
        }}
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          initials
        )}
      </div>

      {/* Body */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
        }}
      >
        <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 500 }}>{title}</h3>
        <small style={{ color: "var(--mut)", font: "400 12px var(--mono)" }}>{meta}</small>
        <p style={{ margin: 0, color: "var(--mut)", fontSize: "14px", flex: 1 }}>{desc}</p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "12px",
                border: "1px solid var(--bd)",
                background: "var(--soft)",
                padding: "3px 10px",
                borderRadius: "999px",
                color: "var(--mut)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(links.length > 0 || hasCaseStudy) && (
          <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
            
            {links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  font: "700 12px var(--mono)",
                  border: "1px solid var(--bd)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  textDecoration: "none",
                  display: "inline-flex",
                  gap: "6px",
                  alignItems: "center",
                }}
              >
                {l.label} <ExtIcon />
              </a>
            ))}
            {hasCaseStudy && (
              <Link
                href={`/projects/${slug}`}
                style={{
                  font: "700 12px var(--mono)",
                  border: "1px solid var(--bd)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  textDecoration: "none",
                  display: "inline-flex",
                  gap: "6px",
                  alignItems: "center",
                }}
              >
                Article <ExtIcon />
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
