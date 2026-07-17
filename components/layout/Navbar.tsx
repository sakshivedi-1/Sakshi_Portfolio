"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

type NavLink = { id: string; label: string };

// module-level constant → stable reference for the IntersectionObserver hook
const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const reduceMotion = useReducedMotion();

  return (
    <header
      className="sticky top-0 z-50 border-b border-divider backdrop-blur-md"
      style={{ backgroundColor: "rgba(5, 15, 26, 0.85)" }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border-[1.5px] border-brass font-display text-sm font-semibold text-brass"
          >
            SV
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold text-textprimary">
              Sakshi Vedi
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wide text-textmuted">
              AI · Generative AI
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-accent"
                    : "text-textmuted hover:text-textprimary"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute inset-x-3 -bottom-px h-0.5 bg-accent"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-3 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-sky"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-textprimary transition-colors hover:bg-panel md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="overflow-hidden border-t border-divider bg-ink md:hidden"
          >
            <div className="flex flex-col px-4 py-2">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "border-l-2 py-3 pl-3 text-sm font-medium transition-colors",
                      isActive
                        ? "border-accent text-accent"
                        : "border-transparent text-textmuted hover:text-textprimary"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="my-3 rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-ink transition-colors hover:bg-sky"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
