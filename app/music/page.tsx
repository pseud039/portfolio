import type { Metadata } from "next";
import { MusicSection } from "@/components/MiscSections";

export const metadata: Metadata = {
  title: "Music — Saumya Sharma",
  description: "Music picks and repeat artists.",
};

export default function MusicPage() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-12">
      <MusicSection />
    </main>
  );
}