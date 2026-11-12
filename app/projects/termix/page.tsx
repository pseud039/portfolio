
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termix — Project",
  description:
    "Termix is a keyboard-driven terminal music player built with Go, Bubble Tea and Lip Gloss, bringing Spotify, YouTube and local audio into one unified queue.",
};

const BackIcon = () => (
  <svg
    style={{
      width: 17,
      height: 17,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const sectionStyle = {
  marginBottom: "44px",
};

const headingStyle = {
  font: "600 21px var(--mono)",
  letterSpacing: "-0.5px",
  marginBottom: "16px",
};

const paragraphStyle = {
  color: "var(--mut)",
  font: "400 15px/1.85 var(--mono)",
  marginBottom: "16px",
};

const listStyle = {
  color: "var(--mut)",
  font: "400 14px/1.9 var(--mono)",
  paddingLeft: "22px",
  marginBottom: "16px",
};

const Code = ({ children }: { children: React.ReactNode }) => (
  <code
    style={{
      color: "var(--fg)",
      background: "var(--surface, rgba(128,128,128,0.10))",
      padding: "2px 6px",
      borderRadius: "4px",
      font: "400 13px var(--mono)",
    }}
  >
    {children}
  </code>
);

const CodeBlock = ({ children }: { children: string }) => (
  <pre
    style={{
      background: "var(--surface, rgba(128,128,128,0.08))",
      border: "1px solid var(--border, rgba(128,128,128,0.2))",
      borderRadius: "8px",
      padding: "20px",
      overflowX: "auto",
      font: "400 13px/1.8 var(--mono)",
      color: "var(--mut)",
      margin: "20px 0",
    }}
  >
    <code>{children}</code>
  </pre>
);

export default function TermixPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 24px 100px",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "var(--mut)",
          textDecoration: "none",
          font: "400 14px var(--mono)",
          margin: "36px 0 32px",
        }}
      >
        <BackIcon /> back
      </Link>

      <article>
        {/* Header */}
        <header style={{ marginBottom: "48px" }}>
          <p
            style={{
              color: "var(--mut)",
              font: "400 12px var(--mono)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Project / Go / Terminal Applications
          </p>

          <h1
            style={{
              font: "700 42px/1.1 var(--mono)",
              letterSpacing: "-1.5px",
              margin: "0 0 20px",
            }}
          >
            Termix
          </h1>

          <p
            style={{
              color: "var(--mut)",
              font: "400 16px/1.8 var(--mono)",
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            A keyboard-driven terminal music player that brings Spotify,
            YouTube and local audio files into one unified listening
            experience.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "24px",
            }}
          >
            {["Go", "Bubble Tea", "Lip Gloss", "mpv", "Spotify API", "Last.fm"].map(
              (tech) => (
                <span
                  key={tech}
                  style={{
                    border: "1px solid var(--border, rgba(128,128,128,0.25))",
                    borderRadius: "4px",
                    padding: "6px 10px",
                    color: "var(--mut)",
                    font: "400 11px var(--mono)",
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <a
            href="https://github.com/pseud039/termix"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--fg)",
              font: "400 13px var(--mono)",
              textDecoration: "none",
              borderBottom: "1px solid var(--mut)",
              paddingBottom: "4px",
            }}
          >
            View source on GitHub ↗
          </a>
        </header>

        <div
          style={{
            borderTop: "1px solid var(--border, rgba(128,128,128,0.2))",
            marginBottom: "40px",
          }}
        />

        {/* Overview */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>01 / Overview</h2>

          <p style={paragraphStyle}>
            Termix is a terminal-based music player designed around a
            simple idea: music should be accessible from one place,
            without constantly switching between different applications.
          </p>

          <p style={paragraphStyle}>
            Most music applications separate their ecosystems. Spotify
            handles streaming, YouTube handles video-based music, and
            local players handle downloaded audio. Termix brings these
            sources together through a shared queue and a single
            keyboard-driven interface.
          </p>

          <p style={paragraphStyle}>
            Built in Go, the application uses Bubble Tea for its
            terminal user interface and Lip Gloss for styling. Instead
            of implementing audio decoding itself, it delegates
            playback to external services and tools.
          </p>
        </section>

        {/* Problem */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>02 / The Problem</h2>

          <p style={paragraphStyle}>
            Listening to music across different platforms creates
            unnecessary friction. A playlist might exist on Spotify,
            an interesting track might only be available on YouTube,
            and downloaded music might be scattered across local
            directories.
          </p>

          <p style={paragraphStyle}>
            Switching between these sources interrupts the listening
            experience. There is also a lack of lightweight,
            keyboard-oriented music players that combine multiple
            providers into one workflow.
          </p>

          <p style={paragraphStyle}>
            Termix addresses this by introducing a common playback
            interface and a source-independent queue. Tracks from
            different providers are represented using the same
            internal data structure.
          </p>
        </section>

        {/* How it works */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>03 / How It Works</h2>

          <p style={paragraphStyle}>
            Termix acts as an orchestration layer between the terminal
            interface, the music queue, external playback engines
            and third-party APIs.
          </p>

          <ul style={listStyle}>
            <li>
              <strong style={{ color: "var(--fg)" }}>Spotify:</strong>{" "}
              Uses spotifyd as the playback backend, with playback
              control and track discovery handled through the Spotify
              Web API.
            </li>
            <li>
              <strong style={{ color: "var(--fg)" }}>YouTube:</strong>{" "}
              Uses mpv together with yt-dlp to resolve and play
              YouTube audio.
            </li>
            <li>
              <strong style={{ color: "var(--fg)" }}>Local Audio:</strong>{" "}
              Uses mpv to play audio files stored on the local system.
            </li>
          </ul>

          <p style={paragraphStyle}>
            Whenever a track is selected, it enters the shared queue
            as a common Item. The player router checks its source and
            selects the appropriate playback backend. If playback
            needs to move from one provider to another, the previous
            backend is stopped before the new one takes over.
          </p>
        </section>

        {/* Architecture */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>04 / Architecture</h2>

          <p style={paragraphStyle}>
            The codebase follows a modular architecture, separating
            application state, configuration, queue management,
            playback and external integrations.
          </p>

          <CodeBlock>
{`termix/
├── cmd/
│   └── main.go
│
├── internal/
│   ├── app/
│   │   ├── model.go
│   │   ├── view.go
│   │   └── library.go
│   │
│   ├── config/
│   ├── queue/
│   ├── player/
│   │   ├── mpv.go
│   │   ├── spotify.go
│   │   └── router.go
│   │
│   ├── spotify/
│   ├── lastfm/
│   ├── recommend/
│   └── lyrics/
│
└── config.example.toml`}
          </CodeBlock>
          </section>
                  <footer
          style={{
            borderTop: "1px solid var(--border, rgba(128,128,128,0.2))",
            paddingTop: "28px",
            marginTop: "56px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              color: "var(--mut)",
              font: "400 12px var(--mono)",
            }}
          >
            END OF ARTICLE — TERMIX
          </span>

          <a
            href="https://github.com/pseud039/termix"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--fg)",
              font: "400 13px var(--mono)",
              textDecoration: "none",
            }}
          >
            Explore repository ↗
          </a>
        </footer>
      </article>
    </main>
  );
}