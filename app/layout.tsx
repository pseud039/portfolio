import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Dock from "@/components/Dock";
import LenisProvider from "@/components/LenisProvider";
import ThemeScript from "@/components/ThemeScript";
import {GridBackgroundDemo} from "@/components/background";
import ZenitsuMood from "@/components/Anime";
import router from "next/navigation"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saumya Sharma",
  description: "Backend-leaning full-stack developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <ThemeScript />
        <LenisProvider />
        <div className="ambient-blob">
          <span style={{ background: "#e8b339", top: "-10%", left: "-10%" }} />
          <span style={{ background: "#c9776b", bottom: "-15%", right: "-10%" }} />
        </div>
        <Header />
        
        <div className="flex-1">{children}</div>
        
        {/* <Dock /> */}
      </body>
    </html>
  );
}
