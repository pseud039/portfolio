"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@/lib/icon";
import { MORE_MENU } from "@/lib/data";

export default function MoreMenu({ activeHref }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const isActive = MORE_MENU.some((item) => item.href === activeHref);

  return (
    <div className="relative" ref={rootRef}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md hover:text-ink hover:bg-accent-soft transition-colors ${
          isActive ? "text-ink bg-accent-soft" : ""
        }`}
      >
        more
        <ChevronDownIcon />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl border border-rule bg-card p-2 shadow-lg grid grid-cols-2 gap-2">
          {MORE_MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="more-menu-tile"
              style={{
                background: item.image
                  ? `center/cover no-repeat url('${item.image}')`
                  : item.tone,
              }}
            >
              <span className="more-menu-overlay">
                <span className="more-menu-label">{item.label}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}