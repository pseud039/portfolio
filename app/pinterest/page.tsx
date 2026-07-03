import type { Metadata } from "next";
import { PinterestSection } from "@/components/MiscSections";

export const metadata: Metadata = {
  title: "Pinterest — Saumya Sharma",
  description: "Pinned design and typography references.",
};

export default function PinterestPage() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-12">
      <PinterestSection />
    </main>
  );
}