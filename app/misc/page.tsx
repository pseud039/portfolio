import type { Metadata } from "next";
import { MiscTabs } from "@/components/MiscSections";

export const metadata: Metadata = {
  title: "Misc — Saumya Sharma",
  description: "Music, anime, and Pinterest references.",
};

export default function MiscPage() {
  return <MiscTabs />;
}