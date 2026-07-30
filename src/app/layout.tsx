import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moviy Logist — Logistika va dispatcherlik kursi",
  description:
    "Moviy Logist — logistika va dispatcherlikni 0 dan o'rgatuvchi zamonaviy onlayn ta'lim markazi. Amaliy darslar, mentor yordami, 100% onlayn.",
  keywords: [
    "logistika",
    "dispatcher",
    "dispatcherlik",
    "onlayn kurs",
    "Moviy Logist",
  ],
  openGraph: {
    title: "Moviy Logist — Logistika va dispatcherlik kursi",
    description:
      "Logistika va dispatcherlikni 0 dan sodda va amaliy tarzda o'rganing.",
    type: "website",
    locale: "uz_UZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
