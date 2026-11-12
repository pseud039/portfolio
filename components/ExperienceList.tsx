"use client";

import { useState } from "react";
import Image from "next/image";
import { Chip } from "./Chip";
import type { ExperienceItem } from "@/data/types";

const ChevIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <div>
      {items.map((e, i) => (
        <div
          key={i}
          style={{
            borderTop: "1px solid var(--bd)",
            ...(i === items.length - 1 ? { borderBottom: "1px solid var(--bd)" } : {}),
          }}
        >
          <button
            onClick={() => toggle(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              padding: "24px 0",
              cursor: "pointer",
              width: "100%",
              background: "none",
              border: 0,
              color: "inherit",
              textAlign: "left",
              font: "inherit",
            }}
          >
            {/* Logo */}
            <span
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                border: "1px solid var(--bd)",
                background: "var(--card)",
                display: "grid",
                placeItems: "center",
                font: "400 15px var(--mono)",
                color: "var(--mut)",
                flex: "none",
              }}
            >
              {e.logoImg ? (
                <>
                  <Image
                    src={e.logoImg.dark}
                    alt={`${e.org} logo`}
                    width={26}
                    height={26}
                    className="lg-d"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src={e.logoImg.light}
                    alt=""
                    aria-hidden
                    width={26}
                    height={26}
                    className="lg-l"
                    style={{ objectFit: "contain" }}
                  />
                </>
              ) : (
                e.logo
              )}
            </span>

            {/* Org / role */}
            <span style={{ flex: 1, minWidth: 0 }}>
              <b style={{ display: "block", fontWeight: 500, fontSize: "20px" }}>{e.org}</b>
              <span style={{ color: "var(--mut)", fontSize: "18px" }}>{e.role}</span>
            </span>

            {/* Period / location */}
            <span style={{ textAlign: "right", color: "var(--mut)", fontSize: "15px" }}>
              <b style={{ display: "block", fontWeight: 400, fontSize: "18px" }}>{e.period}</b>
              {e.where}
            </span>

            {/* Chevron */}
            <span
              style={{
                width: "34px",
                height: "34px",
                border: "1px solid var(--bd)",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                flex: "none",
                transition: ".2s",
                transform: open === i ? "rotate(180deg)" : "none",
              }}
            >
              <ChevIcon />
            </span>
          </button>

          {/* Expanded body */}
          {open === i && (
            <div style={{ padding: "0 0 22px 60px", color: "var(--mut)" }}>
              <ul style={{ margin: "0 0 12px", paddingLeft: "18px" }}>
                {e.points.map((p, j) => (
                  <li key={j} style={{ margin: "4px 0" }}>{p}</li>
                ))}
              </ul>
              {e.tech.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {e.tech.map((t) => (
                    <Chip key={t.name} item={t} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
