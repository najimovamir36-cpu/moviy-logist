"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Wifi, Sprout } from "lucide-react";
import { itemVariants } from "@/components/motion/reveal";

const advantages = [
  {
    icon: GraduationCap,
    title: "Amaliy darslar",
    description:
      "Har bir dars real ish jarayonlariga asoslangan amaliy mashg'ulotlar bilan olib boriladi.",
  },
  {
    icon: Users,
    title: "Mentor yordami",
    description:
      "Tajribali mentorlar sizni butun kurs davomida qo'llab-quvvatlaydi va savollaringizga javob beradi.",
  },
  {
    icon: Wifi,
    title: "100% onlayn",
    description:
      "Istalgan joydan, istalgan qurilmadan qulay vaqtda o'rganish imkoniyati.",
  },
  {
    icon: Sprout,
    title: "Boshlovchilar uchun",
    description:
      "Hech qanday tajriba talab qilinmaydi — biz sizni 0 dan boshlab o'rgatamiz.",
  },
];

export function Advantages() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nega Moviy Logist?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Sizni muvaffaqiyatga <br className="hidden sm:block" />
            olib boradigan afzalliklar
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((a) => (
            <motion.div
              key={a.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-primary shadow-glow">
                <a.icon className="h-6 w-6 text-primary-foreground" />
              </span>
              <h3 className="relative mt-6 text-xl font-semibold text-foreground">
                {a.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
