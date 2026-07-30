import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z
    .string({ required_error: "Ism kiritilishi shart" })
    .trim()
    .min(2, "Ism kamida 2 ta harfdan iborat bo'lishi kerak")
    .max(80, "Ism juda uzun"),
  telegram: z
    .string({ required_error: "Telegram username kiritilishi shart" })
    .trim()
    .transform((v) => v.replace(/^@+/, ""))
    .pipe(
      z
        .string()
        .min(5, "Telegram username kamida 5 ta belgidan iborat bo'lishi kerak")
        .max(32, "Telegram username juda uzun")
        .regex(
          /^[a-zA-Z0-9_]+$/,
          "Username faqat harflar, raqamlar va _ dan iborat bo'lishi kerak"
        )
    ),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
