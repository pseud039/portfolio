"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  if (dark === null) return <button aria-label="Toggle theme" className={className} />;

  return (
    <button aria-label="Toggle theme" onClick={toggle} className={className}>
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}