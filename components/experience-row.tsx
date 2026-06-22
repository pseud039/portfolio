import type { ExperienceItem } from "@/data/experience";

export function ExperienceRow({ item, isFirst }: { item: ExperienceItem; isFirst?: boolean }) {
  return (
    <div className="py-5 border-b row-hover" style={{ borderTop: isFirst ? "1px solid var(--border)" : undefined }}>
      <div className="flex justify-between items-baseline gap-4 mb-1">
        <span className="text-[14.5px] font-medium text-[color:var(--ink)] tracking-tight lowercase">{item.role}</span>
        <span className="font-mono text-[11px] text-[color:var(--muted)] whitespace-nowrap">{item.date}</span>
      </div>
      <p className="font-mono text-[11.5px] mb-2" style={{ color: "var(--accent)" }}>
        {item.company}
      </p>
      <p className="text-[13.5px] text-[color:var(--muted)] leading-[1.65]">{item.desc}</p>
    </div>
  );
}