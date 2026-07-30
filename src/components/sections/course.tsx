"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Logistika va dispatcherlikni o'rganish uchun amaliy kurs.",
  "Darslar sodda va tushunarli tarzda olib boriladi.",
  "Kurs davomida real ish jarayonlari bilan tanishasiz.",
  "3 kundan 7 kungacha birinchi daromadingizni oling.",
];

const modules = [
  "Logistika asoslari",
  "Dispatcher ish jarayoni",
  "Yuk topish va narx kelishish",
  "Hujjatlar bilan ishlash",
  "Amaliy mijozlar bilan muloqot",
  "Real keyslar tahlili",
];

export function Course() {
  return (
    <section id="kurs" className="section bg-secondary/60">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Kurs haqida
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Nazariya emas, <br />
              <span className="text-gradient-blue">amaliyot</span> asosida
            </h2>

            <div className="mt-8 space-y-4">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                  </span>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-premium sm:p-10"
          >
            <h3 className="text-lg font-semibold text-foreground">
              Kurs dasturi
            </h3>
            <div className="mt-6 grid gap-3">
              {modules.map((m, i) => (
                <div
                  key={m}
                  className="flex items-center gap-4 rounded-2xl border border-border/70 bg-secondary/50 px-5 py-4 transition-colors hover:border-primary/30 hover:bg-card"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
