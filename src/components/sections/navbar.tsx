"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "glass border border-border/60 shadow-premium"
            : "border border-transparent"
        )}
      >
        <button
          onClick={() => scrollTo("#hero")}
          className="pl-2"
          aria-label="Bosh sahifa"
        >
          <Logo />
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => scrollTo("#boglanish")}>
            Kursga yozilish
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menyu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl glass border border-border/60 p-3 shadow-premium md:hidden"
          >
            <div className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="mt-2"
                onClick={() => scrollTo("#boglanish")}
              >
                Kursga yozilish
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
