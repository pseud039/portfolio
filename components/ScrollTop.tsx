"use client";

import { useEffect, useState } from "react";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        border: "1px solid var(--bd)",
        background: "var(--card)",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        color: "var(--fg)",
        zIndex: 10,
      }}
    >
      <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}
