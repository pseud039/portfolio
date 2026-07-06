// components/ZenitsuAffection.tsx
"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { animate, createSpring } from "animejs";
import faceNeutral from "@/assets/anime/zenitsu/face_neutral.png";
import faceStar from "@/assets/anime/zenitsu/face_star_eyes.png";
import faceHeart from "@/assets/anime/zenitsu/face_heart_eyes.png";

const STAR_AT = 3;
const LOVE_AT = 6;
const DECAY_MS = 1500;

type Particle = { id: number; x: number; kind: "star" | "heart" };

export default function ZenitsuAffection() {
  const [clicks, setClicks] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const charRef = useRef<HTMLDivElement>(null);
  const decayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const particleId = useRef(0);

  const stage: "neutral" | "star" | "heart" =
    clicks >= LOVE_AT ? "heart" : clicks >= STAR_AT ? "star" : "neutral";

  const spawnParticle = useCallback((kind: "star" | "heart") => {
    const id = particleId.current++;
    const x = (Math.random() - 0.5) * 60;
    setParticles((p) => [...p, { id, x, kind }]);
    setTimeout(() => {
      setParticles((p) => p.filter((particle) => particle.id !== id));
    }, 700);
  }, []);

  const handleClick = () => {
    const nextCount = clicks + 1;
    setClicks(nextCount);

    const nextStage: "neutral" | "star" | "heart" =
      nextCount >= LOVE_AT ? "heart" : nextCount >= STAR_AT ? "star" : "neutral";
    spawnParticle(nextStage === "heart" ? "heart" : "star");

    // per-click tactile bounce
    if (charRef.current) {
      animate(charRef.current, {
        scale: [1, 1.18, 0.95, 1],
        duration: 420,
        ease: createSpring({ stiffness: 300, damping: 10 }),
      });
    }

    if (decayTimer.current) clearTimeout(decayTimer.current);
    decayTimer.current = setTimeout(() => setClicks(0), DECAY_MS);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-14 h-14 flex items-center justify-center select-none cursor-pointer"
    >
      {/* floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute text-xl"
          style={{
            left: `calc(50% + ${p.x}px)`,
            bottom: "55%",
            animation: "floatUp 700ms ease-out forwards",
          }}
        >
          {p.kind === "heart" ? "💗" : "✨"}
        </span>
      ))}

      {/* crossfading face layers */}
      <div ref={charRef} className="relative w-32 h-32">
        <Image
          src={faceNeutral}
          alt=""
          fill
          className="object-contain transition-opacity duration-200"
          style={{ opacity: stage === "neutral" ? 1 : 0 }}
        />
        <Image
          src={faceStar}
          alt=""
          fill
          className="object-contain transition-opacity duration-200"
          style={{ opacity: stage === "star" ? 1 : 0 }}
        />
        <Image
          src={faceHeart}
          alt=""
          fill
          className="object-contain transition-opacity duration-200"
          style={{ opacity: stage === "heart" ? 1 : 0 }}
        />
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translateY(-60px) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}