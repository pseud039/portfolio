import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ExperienceRow } from "@/components/experience-row";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "experience — saumya sharma",
  description: "work experience and history for saumya sharma — backend engineering, mentoring, hackathons.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-16">
      <Reveal>
        <SectionLabel>experience</SectionLabel>
      </Reveal>
      <Reveal>
        <div>
          {experience.map((e, i) => (
            <ExperienceRow key={e.role} item={e} isFirst={i === 0} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}