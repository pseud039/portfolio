import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { ScrollTop } from "@/components/ScrollTop";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pseud039.xyz"),
  title: {
    default: "Saumya Sharma — Backend-leaning Full Stack Developer (Node.js, TypeScript, Go)",
    template: "%s | Saumya Sharma",
  },
  description:
    "Saumya Sharma (pseud039): backend-leaning full stack developer and B.Tech CSE (AI/ML) student at KIET. Node.js, TypeScript and Go projects, production client work, open to internships.",
  authors: [{ name: "Saumya Sharma" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "https://www.pseud039.xyz/" },
  openGraph: {
    type: "website",
    siteName: "Saumya Sharma",
    title: "Saumya Sharma — Backend-leaning Full Stack Developer",
    description:
      "Node.js, TypeScript and Go projects, production client work, and a few systems I'm proud of. Open to internships.",
    url: "https://www.pseud039.xyz/",
    images: [{ url: "https://www.pseud039.xyz/predine.png" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@pseud039",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saumya Sharma",
  alternateName: "pseud039",
  url: "https://www.pseud039.xyz/",
  jobTitle: "Backend-leaning Full Stack Developer",
  alumniOf: { "@type": "CollegeOrUniversity", name: "KIET Group of Institutions" },
  knowsAbout: ["Node.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Backend engineering"],
  sameAs: [
    "https://github.com/pseud039",
    "https://x.com/pseud039",
    "https://www.linkedin.com/in/saumya-p06/",
    "https://in.pinterest.com/pseud039/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Pre-paint theme script — prevents flash */}
        <Script
          id="theme-preload"
          strategy="beforeInteractive"
          async
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})();`,
          }}
        />
        {/* Google Fonts — runtime only (not fetched at build time) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        <link rel="preconnect" href="https://cdn.simpleicons.org" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.pinimg.com" />
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav brand={profile.brand} />
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
