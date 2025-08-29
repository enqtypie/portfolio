"use client";

import Link from "next/link";
import { ThemeToggleButton } from "../theme-provider";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-foreground/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight text-foreground">
          <span className="px-2 py-1 rounded-md badge-muted text-foreground">
            {/* Name/Logo */}
            NJT
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          <ThemeToggleButton />
        </nav>
        <div className="sm:hidden flex items-center gap-3">
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          </nav>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}


