"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/constants";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in oklab, var(--bg) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : undefined,
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[680px] px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-[13px] tracking-tight">
          pseudo<span style={{ color: "var(--accent)" }}>.xyz</span>
        </Link>
        <ul className="hidden sm:flex gap-6">
          {nav.map((n) => (
            <li key={n.id}>
              <Link
                href={n.href}
                className="font-mono text-[11.5px] text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors tracking-wide"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}