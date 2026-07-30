import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Users, CalendarDays, Clock } from "lucide-react";
import { isAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Logo } from "@/components/brand/logo";
import { LogoutButton } from "./logout-button";
import { ApplicationsTable } from "./applications-table";

export const metadata: Metadata = {
  title: "Admin — Dashboard | Moviy Logist",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
  });

  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const total = applications.length;
  const todayCount = applications.filter(
    (a) => a.createdAt >= startOfToday
  ).length;
  const weekCount = applications.filter((a) => a.createdAt >= weekAgo).length;

  const stats = [
    { label: "Jami murojaatlar", value: total, icon: Users },
    { label: "Bugun", value: todayCount, icon: Clock },
    { label: "So'nggi 7 kun", value: weekCount, icon: CalendarDays },
  ];

  const serialized = applications.map((a) => ({
    id: a.id,
    fullName: a.fullName,
    telegram: a.telegram,
    createdAt: a.createdAt.toISOString(),
  }));

  return (
    <div className="min-h-screen bg-secondary/40">
      <header className="sticky top-0 z-40 border-b border-border glass">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:inline">
              Admin
            </span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="container py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Boshqaruv paneli
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Kursga yozilish uchun kelib tushgan murojaatlar
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {s.label}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </span>
              </div>
              <div className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <ApplicationsTable initialData={serialized} />
        </div>
      </main>
    </div>
  );
}
