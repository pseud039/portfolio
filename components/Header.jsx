"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import MoreMenu from "./MoreMenu";

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-paper/75 border-b border-rule/60">
      <div className="mx-auto max-w-[760px] px-6">
        <div className="h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            pseud0.
          </Link>
          <nav className="flex items-center gap-1 text-sm text-ink-soft">
            <Link
              href={onHome ? "#projects" : "/#projects"}
              className="px-2.5 py-1 rounded-md hover:text-ink hover:bg-accent-soft transition-colors"
            >
              projects
            </Link>
            <Link
              href={onHome ? "#experience" : "/#experience"}
              className="px-2.5 py-1 rounded-md hover:text-ink hover:bg-accent-soft transition-colors"
            >
              experience
            </Link>
            <MoreMenu activeHref={pathname} />
            <ThemeToggle className="ml-2 p-1.5 rounded-md hover:bg-accent-soft hover:text-ink transition-colors" />
          </nav>
        </div>
      </div>
    </header>
  );
}