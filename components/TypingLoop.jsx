"use client";

import { useEffect, useState } from "react";
import { ROLES } from "@/lib/data";

export default function TypingLoop({ className = "" }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const full = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        if (charIndex > full.length) {
          deleting = true;
          setText(full);
          timeoutId = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        if (charIndex < 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
          charIndex = 0;
        }
      }
      setText(full.slice(0, charIndex));
      timeoutId = setTimeout(tick, deleting ? 28 : 46);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <span className={className}>
      {text}
      <span className="type-cursor" />
    </span>
  );
}