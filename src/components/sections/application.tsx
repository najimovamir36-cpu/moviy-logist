"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site";

type Errors = { fullName?: string; telegram?: string };

export function Application() {
  const [fullName, setFullName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (fullName.trim().length < 2) next.fullName = "Ism familiyangizni kiriting";
    const handle = telegram.trim().replace(/^@+/, "");
    if (!/^[a-zA-Z0-9_]{5,32}$/.test(handle))
      next.telegram = "Telegram username'ingizni kiriting (masalan: @username)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, telegram }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? "Xatolik yuz berdi");
      }
      setSuccess(true);
      setFullName("");
      setTelegram("");
      toast.success("Murojaatingiz muvaffaqiyatli yuborildi.");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Xatolik yuz berdi. Qayta urinib ko'ring."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="boglanish" className="section">
      <div className="container">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-[#111111] via-[#161310] to-[#0b0b0b] p-1 shadow-glow">
          <div className="grid gap-10 rounded-[2.25rem] p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            {/* left copy */}
            <div className="text-white">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Kursga yozilish
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Bugun boshlang'ich qadamni tashlang
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz bilan tez
                orada bog'lanib, kurs haqida to'liq ma'lumot beradi.
              </p>

              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-white"
              >
                <Send className="h-4 w-4" />
                Yoki Telegram orqali murojaat qiling
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* form / success */}
            <div className="rounded-3xl bg-card p-6 shadow-premium sm:p-8">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center py-8 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                    <CheckCircle2 className="h-9 w-9 text-emerald-500" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Murojaatingiz muvaffaqiyatli yuborildi.
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tez orada siz bilan bog'lanamiz.
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-6"
                    onClick={() => setSuccess(false)}
                  >
                    Yangi murojaat yuborish
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Ism familiya</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Ism familiyangizni kiriting"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName)
                          setErrors((p) => ({ ...p, fullName: undefined }));
                      }}
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telegram">Telegram username</Label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base font-medium text-muted-foreground">
                        @
                      </span>
                      <Input
                        id="telegram"
                        name="telegram"
                        inputMode="text"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        placeholder="username"
                        className="pl-9"
                        value={telegram}
                        onChange={(e) => {
                          setTelegram(e.target.value);
                          if (errors.telegram)
                            setErrors((p) => ({ ...p, telegram: undefined }));
                        }}
                        aria-invalid={!!errors.telegram}
                      />
                    </div>
                    {errors.telegram ? (
                      <p className="text-sm text-destructive">
                        {errors.telegram}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        Siz bilan Telegram orqali bog'lanamiz.
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Yuborilmoqda...
                      </>
                    ) : (
                      <>
                        Yuborish
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
