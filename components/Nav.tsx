"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { more } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
];

export function Nav({ brand }: { brand: string }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  const isMoreActive = more.some((m) => m.href === pathname);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "28px 32px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            font: "400 15px var(--mono)",
            textDecoration: "none",
            color: "var(--mut)",
          }}
        >
          {brand}
        </Link>

        {/* Pills */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            font: "500 15px var(--mono)",
            position: "relative",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                background: pathname === item.href ? "var(--soft)" : "none",
                border: 0,
                color: pathname === item.href ? "var(--fg)" : "var(--mut)",
                font: "inherit",
                padding: "8px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                lineHeight: 1.2,
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* More button */}
          <div ref={menuRef} style={{ position: "relative" }}>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-haspopup="menu"
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: isMoreActive ? "var(--soft)" : "none",
                border: 0,
                color: isMoreActive ? "var(--fg)" : "var(--mut)",
                font: "inherit",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                lineHeight: 1.2,
              }}
            >
              more
              <svg
                style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {menuOpen && (
              <div
                role="menu"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  marginTop: "10px",
                  width: "264px",
                  background: "var(--card)",
                  border: "1px solid var(--bd)",
                  borderRadius: "14px",
                  padding: "8px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                  boxShadow: "0 12px 30px #0006",
                }}
              >
                {more.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      position: "relative",
                      display: "block",
                      height: "72px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      backgroundImage: `url('${m.image}'), ${m.tone}`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      outline: pathname === m.href ? "2px solid var(--acc)" : "none",
                    }}
                    className="menu-tile"
                  >
                    <span>{m.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Theme toggle */}
        <div style={{ justifySelf: "end" }}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
