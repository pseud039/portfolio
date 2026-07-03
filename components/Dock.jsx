import Link from "next/link";
import { CONFIG } from "@/lib/data";
import { HomeIcon, TwitterBirdIcon, GithubIcon, LinkedinIcon, EmailIcon } from "./icons";

export default function Dock() {
  return (
    <nav
      aria-label="Quick actions"
      className="dock fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-xl p-1.5 shadow-lg"
    >
      <Link href="/" aria-label="Home" className="inline-flex items-center rounded-lg px-3 py-1.5">
        <HomeIcon />
      </Link>
      <a href={CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="inline-flex items-center rounded-lg px-3 py-1.5">
        <TwitterBirdIcon />
      </a>
      <a href={CONFIG.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center rounded-lg px-3 py-1.5">
        <GithubIcon />
      </a>
      <a href={CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center rounded-lg px-3 py-1.5">
        <LinkedinIcon />
      </a>
      <a href={`mailto:${CONFIG.email}`} aria-label="Email" className="inline-flex items-center rounded-lg px-3 py-1.5">
        <EmailIcon />
      </a>
    </nav>
  );
}