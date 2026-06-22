import { Reveal } from "./reveal";

export function Divider() {
  return (
    <Reveal>
      <div className="h-px bg-[color:var(--border)] my-16" />
    </Reveal>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] text-[color:var(--muted)] tracking-widest lowercase mb-8">
      <span style={{ color: "var(--accent)" }}>~/</span>
      {children}
    </h2>
  );
}