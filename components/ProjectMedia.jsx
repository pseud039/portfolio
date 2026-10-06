"use client";

import { useEffect, useRef, useState } from "react";

// Poster image by default; the video only starts downloading on first hover
// (or tap on touch screens), so scrolling past cards never pulls video data.
export default function ProjectMedia({ image, video, tone, title, children }) {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const [src, setSrc] = useState("");
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const el = videoRef.current;
    if (!video || !el) return;
    if (!src) setSrc(video);
    else el.play().catch(() => {});
  };

  const stop = () => {
    const el = videoRef.current;
    setPlaying(false);
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  // Start playback once the lazily-set src has been attached.
  useEffect(() => {
    if (src) videoRef.current?.play().catch(() => {});
  }, [src]);

  // Never keep decoding a video that has scrolled out of view.
  useEffect(() => {
    if (!video) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) stop();
    });
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, [video]);

  return (
    <div
      ref={rootRef}
      className={`project-media ${video ? "has-video" : ""}`}
      style={{ background: tone }}
      onPointerEnter={(e) => e.pointerType === "mouse" && play()}
      onPointerLeave={(e) => e.pointerType === "mouse" && stop()}
      onClick={() => (playing ? stop() : play())}
    >
      {!image && children}
      {image && (
        <img src={image} alt={`${title} preview`} loading="lazy" decoding="async" className="project-media-img" />
      )}
      {video && (
        <>
          <video
            ref={videoRef}
            src={src || undefined}
            muted
            loop
            playsInline
            preload="none"
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className={`project-media-video ${playing ? "is-playing" : ""}`}
          />
          <span className={`project-media-hint ${playing ? "is-hidden" : ""}`}>▶ preview</span>
        </>
      )}
    </div>
  );
}
