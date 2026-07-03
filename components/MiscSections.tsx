"use client";

import { useEffect, useState } from "react";
import { ANIME, CONFIG, PINTEREST_IMAGES, SPOTIFY_TRACKS, TOP_ARTISTS, toSpotifyEmbedUrl } from "@/lib/data";

function buildShuffledArtists() {
  return [...TOP_ARTISTS].sort(() => Math.random() - 0.5);
}

function panelClassName(className = "") {
  return "tab-panel rounded-2xl border border-rule bg-card/60 p-6 sm:p-8" + (className ? " " + className : "");
}

export function MusicSection({ id = "tab-music", className = "" }) {
  const [artists, setArtists] = useState(buildShuffledArtists);
  const palette = ["#e8b339", "#1db954", "#c9776b", "#8aa6c9", "#b8a9d3"];
  const tracks = SPOTIFY_TRACKS.map((url) => ({
    url,
    embed: toSpotifyEmbedUrl(url),
  })).filter((track): track is { url: string; embed: string } => Boolean(track.embed));

  return (
    <section id={id} className={panelClassName(className)}>
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="text-xl font-semibold tracking-tight">Music.</h2>
        {/* <button id="shuffle-artists" onClick={() => setArtists(buildShuffledArtists())} className="text-xs font-mono text-ink-muted hover:text-ink transition-colors">
          shuffle ↻
        </button> */}
      </div>
      <p className="text-sm text-ink-soft mb-5">Mostly indie, rock and whatever fred again.. drops next. On repeat Spotify feed here</p>
      {tracks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div key={track.url} className="w-full">
              <iframe
                data-testid="embed-iframe"
                src={track.embed}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px" }}
                title="Spotify embed"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="spotify-card p-2" id="artist-list">
          {artists.map((artist, index) => (
            <div key={artist.name} className="spotify-track flex items-center gap-3 px-3 py-2">
              <div className="spotify-art" style={{ background: artist.image ? "center/cover no-repeat url('" + artist.image + "')" : palette[index % palette.length] }} />
              <div className="min-w-0 flex-1">
                <p className="text-sm truncate">{artist.name}</p>
                <p className="text-xs text-neutral-400 font-mono">{artist.genre}</p>
              </div>
              <div className="flex items-end gap-[2px] h-4">
                <span className="spotify-bar" style={{ animationDelay: "0ms" }} />
                <span className="spotify-bar" style={{ animationDelay: "150ms" }} />
                <span className="spotify-bar" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export function AnimeSection({ id = "tab-anime", className = "" }) {
  return (
    <section id={id} className={panelClassName(className)}>
      <h2 className="text-xl font-semibold tracking-tight mb-2">Anime.</h2>
      <p className="text-sm text-ink-soft mb-5">Shows I keep coming back to, ranked by how often I rewatch them.</p>
      <div id="anime-grid" className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ANIME.map((anime) => (
          <div key={anime.title} className="rounded-xl border border-rule overflow-hidden">
            <div style={{ background: anime.image ? "center/cover no-repeat url('" + anime.image + "')" : anime.tone, height: 120 }} />
            <p className="px-3 py-2 text-sm font-medium">{anime.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PinterestSection({ id = "tab-pinterest", className = "" }) {
  const palette = ["#f4e9c9,#e9d38a", "#dfead6,#a7c495", "#e4dfea,#b8a9d3", "#f0d9d3,#d98878", "#d9d9d9,#8a8a8a", "#efe6d9,#c9b48a"];
  const heights = [190, 240, 290, 340, 230, 280];

  const tiles = PINTEREST_IMAGES.length
    ? PINTEREST_IMAGES.map((url) => (
        <div key={url} className="mb-3 break-inside-avoid rounded-xl border border-rule overflow-hidden">
          <img src={url} loading="lazy" className="w-full block" alt="" />
        </div>
      ))
    : Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="mb-3 break-inside-avoid rounded-xl border border-rule overflow-hidden"
          style={{ background: "linear-gradient(135deg, " + palette[index % palette.length] + ")", height: heights[index % heights.length] }}
        />
      ));

  return (
    <section id={id} className={panelClassName(className)}>
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="text-xl font-semibold tracking-tight">Pinterest.</h2>
        <a href={CONFIG.socials.pinterest} target="_blank" rel="noopener" className="text-xs font-mono text-ink-muted hover:text-ink transition-colors">
          @pseud039 ↗
        </a>
      </div>
      <p className="text-sm text-ink-soft mb-5">A slice of the design and typography references I keep pinned. Follow me on <a href={CONFIG.socials.pinterest} target="_blank" rel="noopener" className="underline decoration-accent decoration-2 underline-offset-2 hover:text-ink">Pinterest</a>.</p>
      <div id="pinterest-masonry" className="columns-2 sm:columns-3 gap-3 [column-fill:_balance]">
        {tiles}
      </div>
    </section>
  );
}

export function MiscTabs() {
  const [active, setActive] = useState("music");

  useEffect(() => {
    const syncFromHash = () => {
      const next = window.location.hash.replace("#", "") || "music";
      setActive(["music", "anime", "pinterest"].includes(next) ? next : "music");
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activate = (next: string) => {
    setActive(next);
    window.history.replaceState(null, "", "#" + next);
  };

  return (
    <main className="mx-auto max-w-[760px] px-6 py-12 space-y-8">
      <header>
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">misc</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Off the clock.</h1>
        <p className="mt-2 text-sm text-ink-soft">Music, anime, and the visual stuff I keep pinned.</p>
      </header>

      <div className="flex gap-1 border border-rule rounded-xl p-1 w-fit bg-card/60">
        {[
          ["music", "Music"],
          ["anime", "Anime"],
          ["pinterest", "Pinterest"],
        ].map(([key, label]) => (
          <button
            key={key}
            data-tab={key}
            onClick={() => activate(key)}
            className={"tab-btn px-4 py-1.5 rounded-lg text-sm font-medium transition-colors " + (active === key ? "bg-accent text-accent-ink" : "text-ink-soft")}
          >
            {label}
          </button>
        ))}
      </div>

      <MusicSection className={active === "music" ? "" : "hidden"} />
      <AnimeSection className={active === "anime" ? "" : "hidden"} />
      <PinterestSection className={active === "pinterest" ? "" : "hidden"} />
    </main>
  );
}