import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "saumya sharma — pseudo",
  description: "saumya sharma · full stack engineer · backend & devops · typescript / node.js",
  openGraph: {
    title: "saumya sharma — pseudo",
    description: "full stack engineer · backend & devops · typescript / node.js",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <Nav />

        <main className="relative z-10 mx-auto max-w-[680px] px-6">{children}</main>

        <Footer />
      </body>
    </html>
  );
}