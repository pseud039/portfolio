import type { Metadata } from "next";
import { AnimeSection } from "@/components/MiscSections";

export const metadata: Metadata = {
  title: "Anime — Saumya Sharma",
  description: "Anime I keep coming back to.",
};

export default function AnimePage() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-12">
      <AnimeSection />
    </main>
  );
}