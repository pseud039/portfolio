// components/ContactSection.tsx
"use client";

import Image from "next/image";
import frame1 from "@/assets/frame-1.webp";
import { CONFIG } from "@/lib/data";
import { EmailIcon, GithubIcon, LinkedinIcon, TwitterBirdIcon } from "@/lib/icon";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-2xl border border-rule bg-card/60 p-6 sm:p-8 text-center"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image src={frame1} alt="" fill className="object-cover" style={{ opacity: 0.18 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/60" />
      </div>

      <div className="relative flex flex-col items-center gap-5 py-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let's work together.</h2>
        <p className="max-w-md text-sm text-ink-soft leading-relaxed">
          I'm always interested in new opportunities and exciting projects. Whether you have a
          project in mind or just want to chat about tech, I'd love to hear from you.
        </p>
        <a 
          href={`mailto:${CONFIG.email}`}
          className="inline-flex items-center gap-2 rounded-xl bg-ink-soft text-bg-paper px-5 py-2.5 text-sm font-semibold hover:opacity-90  transition-opacity"
        >
          <EmailIcon />
          Get in touch
        </a>
        <div className="flex items-center gap-2 mt-1">
          <a href={CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="grid place-items-center size-9 rounded-lg border border-rule bg-paper/50 text-ink-soft hover:text-ink hover:border-accent transition-colors">
            <TwitterBirdIcon />
          </a>
          <a href={CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="grid place-items-center size-9 rounded-lg border border-rule bg-paper/50 text-ink-soft hover:text-ink hover:border-accent transition-colors">
            <GithubIcon />
          </a>
          <a href={CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="grid place-items-center size-9 rounded-lg border border-rule bg-paper/50 text-ink-soft hover:text-ink hover:border-accent transition-colors">
            <LinkedinIcon />
          </a>
        </div>
        <div className="mt-2 text-xs text-ink-muted space-y-0.5">
          <p>Currently available for freelance work and full-time opportunities</p>
          <p>Response time: Usually within 24 hours</p>
        </div>
      </div>
    </section>
  );
}