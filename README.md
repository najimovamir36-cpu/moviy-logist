# Moviy Logist

**Moviy Logist** — logistika va dispatcherlikni 0 dan o'rgatuvchi zamonaviy onlayn ta'lim markazi uchun premium landing va admin panel.

Premium, production-ready MVP built with a luxury, Apple/Stripe/Linear-inspired UI. Interfeys 100% o'zbek tilida.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** primitives
- **Framer Motion** — micro-animations & premium transitions
- **Prisma ORM** + **PostgreSQL**
- **Zod** — validation
- **Sonner** — toasts

## Xususiyatlar

- Premium landing: Navbar, Hero, Afzalliklar, Kurs haqida, Narxlar, Kursga yozilish, Footer
- Murojaat formasi → PostgreSQL ga saqlanadi (`Application` modeli)
- Admin panel: kirish, statistika, murojaatlar jadvali (ko'rish / o'chirish)
- To'liq responsive (Desktop / Tablet / Mobile), mobile-first

## Ishga tushirish

### 1. Muhit o'zgaruvchilari

`.env.example` dan nusxa oling:

```bash
cp .env.example .env
```

`DATABASE_URL` ni o'zingizning PostgreSQL bazangizga moslang va admin login/parolni o'zgartiring.

### 2. Bazani tayyorlash

```bash
npm install
npm run db:push      # yoki: npm run db:migrate
```

### 3. Development

```bash
npm run dev
```

- Landing: http://localhost:3000
- Admin: http://localhost:3000/admin/login

Standart admin kirish ma'lumotlari `.env` faylida (`ADMIN_USERNAME` / `ADMIN_PASSWORD`).

### 4. Production

```bash
npm run build
npm run start
```

## Ma'lumotlar bazasi

```
model Application {
  id        String   @id @default(cuid())
  fullName  String
  phone     String
  createdAt DateTime @default(now())
}
```

## Loyiha tuzilishi

```
src/
  app/
    page.tsx                 # Landing page
    layout.tsx               # Root layout (Inter font, Toaster)
    globals.css              # Design tokens & utilities
    admin/
      login/                 # Admin kirish
      dashboard/             # Statistika + murojaatlar jadvali
    api/
      applications/          # POST (public) + GET (admin) + DELETE
      admin/login|logout/    # Session auth
  components/
    ui/                      # shadcn primitives
    sections/                # Landing bo'limlari
    brand/ motion/           # Logo, animatsiya helperlari
  lib/                       # prisma, auth, validation, utils, site config
prisma/
  schema.prisma
```

## Environment o'zgaruvchilari

| O'zgaruvchi | Tavsif |
|---|---|
| `DATABASE_URL` | PostgreSQL ulanish satri |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | Admin panel kirish ma'lumotlari |
| `ADMIN_SESSION_SECRET` | Sessiya cookie'sini imzolash uchun maxfiy kalit |
| `NEXT_PUBLIC_TELEGRAM_URL` / `NEXT_PUBLIC_INSTAGRAM_URL` / `NEXT_PUBLIC_PHONE` | Aloqa havolalari |
