"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { more } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  // { label: "Experience", href: "/#experience" },
];

// "/projects/termix" should still highlight "Projects"
const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

export function Nav({ brand }: { brand: string }) {
  const pathname = usePathname();

  // Separate state for desktop dropdown and mobile menu.
  // (Before, both shared one state + one ref, so the ref pointed at the hidden
  // mobile menu on desktop, and clicking "more" closed then instantly re-opened it.)
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close everything on route change
  useEffect(() => {
    setMoreOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Outside click + Escape
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (moreRef.current && !moreRef.current.contains(t)) setMoreOpen(false);
      if (headerRef.current && !headerRef.current.contains(t)) setMobileOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Border + stronger blur once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMoreActive = more.some((m) => isActive(pathname, m.href));

  return (
    <header ref={headerRef} className="site-header" data-scrolled={scrolled}>
      <div className="nav-inner">
        {/* Brand */}
        <Link href="/" className="nav-brand">
          {brand}
        </Link>

        {/* Desktop pills */}
        <nav className="desktop-nav" aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-pill"
                data-active={active}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <div ref={moreRef} className="more-wrap">
            <button
              type="button"
              className="nav-pill"
              data-active={isMoreActive}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              aria-controls="more-menu"
              onClick={() => setMoreOpen((o) => !o)}
            >
              more
              <svg className="chev" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Always mounted so it can animate in AND out */}
            <div id="more-menu" role="menu" className="more-menu" data-open={moreOpen} inert={!moreOpen}>
              {more.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  role="menuitem"
                  className="menu-tile"
                  data-active={isActive(pathname, m.href)}
                  style={{ backgroundImage: `url('${m.image}'), ${m.tone}` }}
                >
                  <span>{m.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Desktop theme toggle */}
        <div className="desktop-theme">
          <ThemeToggle />
        </div>

        {/* Mobile actions */}
        <div className="mobile-actions">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            data-open={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="mobile-menu-button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu (height-animated via grid rows 0fr -> 1fr) */}
      <div id="mobile-menu" className="mobile-menu-wrap" data-open={mobileOpen} inert={!mobileOpen}>
        <div className="mobile-menu">
          <div className="mobile-menu-card">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-link" data-active={isActive(pathname, item.href)}>
                {item.label}
              </Link>
            ))}
            <div className="mobile-menu-label">More</div>
            <div className="mobile-more-grid">
              {more.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="menu-tile"
                  data-active={isActive(pathname, m.href)}
                  style={{ backgroundImage: `url('${m.image}'), ${m.tone}` }}
                >
                  <span>{m.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}