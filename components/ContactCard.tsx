import type { EducationItem, ContactInfo, SiteProfile } from "@/data/types";

const MailIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const XIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "currentColor", stroke: "none" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.9 1.150h3.700l-8 9.200L24 22.850h-7.400l-5.800-7.600-6.600 7.600H.5l8.600-9.800L0 1.150h7.600l5.200 6.900zm-1.300 19.500h2L6.500 3.240H4.300z" />
  </svg>
);
const GhIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "currentColor", stroke: "none" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);
const LiIcon = () => (
  <svg style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
  </svg>
);

interface ContactCardProps {
  education: EducationItem[];
  contact: ContactInfo;
  profile: SiteProfile;
}

export function ContactCard({ education, contact, profile }: ContactCardProps) {
  const year = 2024;
  return (
    <>
      {/* Education */}
      <section
        id="education"
        style={{ width: "min(100% - 48px, 750px)", margin: "56px auto 0" }}
      >
        <h2
          style={{
            font: "500 14px var(--mono)",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "var(--mut)",
            margin: 0,
          }}
        >
          Education
        </h2>
        <p style={{ margin: "10px 0 44px", color: "var(--mut)", font: "400 16px/1.6 var(--mono)" }}>
          School things.
        </p>
        {education.map((e) => (
          <div key={e.school}>
            <b style={{ font: "500 18px var(--mono)" }}>
              {e.degree} · {e.school}
            </b>
            <div style={{ color: "var(--mut)", font: "400 14px var(--mono)" }}>{e.period}</div>
            <div style={{ color: "var(--mut)", font: "400 14px/1.6 var(--mono)" }}>{e.note}</div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{ width: "min(100% - 48px, 750px)", margin: "56px auto 0" }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
            border: "1px solid var(--bd)",
            borderRadius: "16px",
            background: "color-mix(in srgb, var(--card) 60%, transparent)",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <div className="cbg" />
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse 42% 62% at 50% 50%, color-mix(in srgb, var(--card) 65%, transparent), transparent)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              padding: "16px 0",
            }}
          >
            <h2
              style={{
                font: "700 30px/1.2 var(--mono)",
                letterSpacing: "-.5px",
                margin: 0,
              }}
            >
              {contact.title}
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: "448px",
                font: "400 14px/1.7 var(--mono)",
                color: "var(--mut)",
              }}
            >
              {contact.text}
            </p>
            <a
              href={`mailto:${profile.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "12px",
                background: "color-mix(in srgb, var(--fg) 80%, var(--bg))",
                color: "var(--bg)",
                padding: "10px 20px",
                font: "600 14px var(--mono)",
                textDecoration: "none",
              }}
            >
              <MailIcon />
              {contact.cta}
            </a>
            <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
              {[
                { href: profile.socials.x, label: "X", Icon: XIcon },
                { href: profile.socials.github, label: "GitHub", Icon: GhIcon },
                { href: profile.socials.linkedin, label: "LinkedIn", Icon: LiIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1px solid var(--bd)",
                    background: "color-mix(in srgb, var(--bg) 50%, transparent)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--mut)",
                    textDecoration: "none",
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <div style={{ marginTop: "8px", font: "400 12px var(--mono)", color: "var(--mut)" }}>
              {contact.notes.map((n) => (
                <p key={n} style={{ margin: "2px 0" }}>{n}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          color: "var(--mut)",
          font: "400 13px var(--mono)",
          padding: "40px 0 60px",
          width: "min(100% - 48px, 750px)",
          margin: "0 auto",
        }}
      >
        © {year} {profile.name} · built with care
      </div>
    </>
  );
}
