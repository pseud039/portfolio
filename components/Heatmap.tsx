"use client";

import { useEffect, useRef } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubAPIResponse {
  contributions: ContributionDay[];
  total: { [key: string]: number };
}

export function Heatmap({ github }: { github: string }) {
  const hmRef = useRef<HTMLDivElement>(null);
  const hlRef = useRef<HTMLDivElement>(null);
  const totalRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hm = hmRef.current;
    const hl = hlRef.current;
    const totalEl = totalRef.current;
    if (!hm || !hl || !totalEl) return;

    async function load() {
      try {
        const r = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${github}?y=last`
        );
        const j: GitHubAPIResponse = await r.json();
        const days = j.contributions;
        const pad = new Date(days[0].date + "T00:00:00").getDay();

        hm!.innerHTML =
          '<i style="visibility:hidden"></i>'.repeat(pad) +
          days
            .map(
              (d) =>
                `<i data-l="${d.level}" title="${d.count} on ${d.date}"></i>`
            )
            .join("");

        const cols = Math.ceil((pad + days.length) / 7);
        hm!.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        hl!.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

        let last = "";
        hl!.innerHTML = days
          .map((d, i) => {
            const mo = new Date(d.date + "T00:00:00").toLocaleString("en", {
              month: "short",
            });
            const col = Math.floor((pad + i) / 7) + 1;
            if (mo !== last && (pad + i) % 7 === 0) {
              last = mo;
              return `<span style="grid-column:${col}">${mo}</span>`;
            }
            return "";
          })
          .join("");

        const total =
          j.total["lastYear"] ?? Object.values(j.total)[0] ?? 0;
        totalEl!.textContent = `${total} contributions in the last year`;
      } catch {
        hm!.innerHTML = "<i></i>".repeat(7 * 40);
        hm!.style.gridTemplateColumns = "repeat(40, 1fr)";
        totalEl!.textContent = "Contribution graph unavailable offline";
      }
    }

    load();
  }, [github]);

  return (
    <div style={{ overflowX: "auto", marginTop: "34px", paddingBottom: "6px" }}>
      <div style={{ minWidth: "640px" }}>
        <div ref={hlRef} className="hl" />
        <div ref={hmRef} className="hm" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "14px",
            fontSize: "13px",
            color: "var(--mut)",
          }}
        >
          <span ref={totalRef}>Loading contributions…</span>
          <span>Less &nbsp;▫ ▪ ◼ &nbsp;More</span>
        </div>
      </div>
    </div>
  );
}
