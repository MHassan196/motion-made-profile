import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            MH
          </span>
          <div>
            <p className="font-display font-semibold text-foreground">{profile.name}</p>
            <p className="text-xs text-muted-foreground">{profile.role}</p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <SocialLinks />
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Designed & built with React, Tailwind and Framer Motion.
      </div>
    </footer>
  );
}
