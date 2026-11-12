"use client";

import { useState } from "react";
import type { StackItem } from "@/data/types";

interface ChipProps {
  item: StackItem;
  size?: "default" | "bio";
}

function getIconSrc(icon: string, color: string): string | null {
  if (!icon) return null;
  // local path (starts with / or assets/)
  if (icon.startsWith("/") || icon.startsWith("assets/")) return icon;
  // full URL
  if (icon.startsWith("http")) return icon;
  // simple-icons CDN slug
  const hex = color === "auto" ? "ffffff" : color.replace("#", "");
  return `https://cdn.simpleicons.org/${icon}/${hex}`;
}

export function Chip({ item, size = "default" }: ChipProps) {
  const [fallback, setFallback] = useState(false);
  const { name, icon, color } = item;
  const c = color === "auto" ? "var(--fg)" : color;
  const initials = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
  const src = getIconSrc(icon, color);
  const isBio = size === "bio";
  const cls = isBio ? "chip bio-chip" : "chip";

  return (
    <span className={cls} style={{ "--c": c } as React.CSSProperties}>
      {src && !fallback ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setFallback(true)}
        />
      ) : (
        <em>{initials}</em>
      )}
      {name}
    </span>
  );
}
