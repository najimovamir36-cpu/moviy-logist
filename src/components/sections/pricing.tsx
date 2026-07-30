"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Standart",
    price: "150 000",
    description: "Guruh bilan birga o'rganish",
    features: [
      "Barcha video darslar",
      "Amaliy topshiriqlar",
      "Kurs materiallari",
      "Haftada 4 marta jonli video dars",
    ],
    featured: false,
  },
  {
    name: "Pro Max",
    price: "200 000",
    description: "Individual dars va maksimal natija",
    features: [
      "Haftada 4 marta jonli video dars",
      "Individual o'qituvchi bilan ishlash",
      "Real keyslar tahlili",
      "3-7 kunda daromadga chiqish",
      "Jamoada ishlash va jonli darslar",
    ],
    featured: true,
  },
];

export function Pricing() {
  const scrollTo = () =>
    document.querySelector("#boglanish")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="narxlar" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Narxlar
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            O'zingizga mos tarifni tanlang
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Shaffof narxlar, yashirin to'lovlarsiz.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "relative flex flex-col rounded-[2rem] border p-8 sm:p-10 transition-all duration-500",
                plan.featured
                  ? "border-primary/30 bg-gradient-to-b from-[#141210] to-[#0b0b0b] text-white shadow-glow lg:scale-[1.03]"
                  : "border-border bg-card shadow-soft hover:shadow-premium hover:-translate-y-1"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Eng tavsiya etiladi
                </span>
              )}

              <div>
                <h3
                  className={cn(
                    "text-xl font-semibold",
                    plan.featured ? "text-white" : "text-foreground"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    plan.featured ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span
                  className={cn(
                    "text-4xl font-bold tracking-tight",
                    plan.featured ? "text-white" : "text-foreground"
                  )}
                >
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium",
                    plan.featured ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  so'm
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        plan.featured ? "bg-primary" : "bg-primary/10"
                      )}
                    >
                      <Check
                        className={cn(
                          "h-3 w-3",
                          plan.featured ? "text-primary-foreground" : "text-primary"
                        )}
                        strokeWidth={3}
                      />
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        plan.featured ? "text-white/90" : "text-foreground"
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollTo}
                size="lg"
                variant={plan.featured ? "default" : "secondary"}
                className="mt-10 w-full"
              >
                Tanlash
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
