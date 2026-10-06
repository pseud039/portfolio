"use client";

import { useState } from "react";

// skillicons.dev logo with a light-theme variant; falls back to initials if
// the icon is missing or fails to load.
export default function SkillIcon({ name, icon }) {
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    const initials = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
    return <span className="text-ink-soft text-[9px] font-bold font-mono">{initials}</span>;
  }

  return (
    <>
      <img src={icon} alt="" loading="lazy" decoding="async" className="icon-dark" onError={() => setFailed(true)} />
      <img src={`${icon}&theme=light`} alt="" loading="lazy" decoding="async" className="icon-light" onError={() => setFailed(true)} />
    </>
  );
}
