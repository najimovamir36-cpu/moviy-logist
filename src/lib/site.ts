export const siteConfig = {
  name: "Moviy Logist",
  description:
    "Moviy Logist — logistika va dispatcherlikni 0 dan o'rgatuvchi zamonaviy onlayn ta'lim markazi.",
  telegram:
    process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/madinausmoonova",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://instagram.com/moviylogist",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+998 90 123 45 67",
  nav: [
    { label: "Bosh sahifa", href: "#hero" },
    { label: "Kurs haqida", href: "#kurs" },
    { label: "Narxlar", href: "#narxlar" },
    { label: "Bog'lanish", href: "#boglanish" },
  ],
};
