"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAnnouncementStore } from "@/lib/uiStore";

const NAV_LINKS = [
  { label: "Milk & Ghee", href: "/categories/milk" },
  { label: "Sweets", href: "/categories/traditional-sweets" },
  { label: "Gift Boxes", href: "/categories/premium-gift-boxes" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const isAnnouncementVisible = useAnnouncementStore(
    (s) => s.isAnnouncementVisible
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ top: isAnnouncementVisible ? "40px" : "0px" }}
      className={cn(
        "fixed inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-ink-900/80 backdrop-blur-md shadow-[0_4px_24px_rgba(30,41,59,0.06)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-display text-2xl tracking-tight transition-colors",
            scrolled ? "text-ink-900 dark:text-white" : "text-white"
          )}
        >
          Twinkle Dairy
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:opacity-70",
                  scrolled ? "text-ink-900 dark:text-white" : "text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
              className={cn(
                "flex items-center justify-center w-11 h-11 rounded-button transition-colors",
                scrolled
                  ? "text-ink-900 dark:text-white hover:bg-green-100 dark:hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              )}
            >
              {theme === "dark" ? (
                <Sun size={20} strokeWidth={1.75} />
              ) : (
                <Moon size={20} strokeWidth={1.75} />
              )}
            </button>
          )}

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              "md:hidden w-11 h-11 flex items-center justify-center rounded-button",
              scrolled ? "text-ink-900 dark:text-white" : "text-white"
            )}
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={1.75} />
            ) : (
              <Menu size={22} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-ink-900 shadow-[0_4px_24px_rgba(30,41,59,0.06)]">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-ink-900 dark:text-white font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}