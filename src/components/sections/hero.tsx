"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-36"
    >
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute top-24 -left-32 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-soft">
              <Sparkles className="h-4 w-4" />
              Zamonaviy onlayn ta'lim markazi
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl"
          >
            Logistikani{" "}
            <span className="text-gradient-gold">0 dan</span> o'rganing.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Moviy Logist orqali logistika va dispatcherlikni sodda va amaliy
            tarzda o'rganing.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" onClick={() => scrollTo("#boglanish")}>
              Kursga yozilish
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-4 w-4 text-primary" />
                Telegram
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex items-center gap-10 sm:gap-14"
          >
            {[
              { value: "2000+", label: "O'quvchilar" },
              { value: "100%", label: "Amaliy" },
              { value: "24/7", label: "Mentor" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-gradient-gold">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
