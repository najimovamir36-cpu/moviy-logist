"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Eye, Trash2, Loader2, Inbox, Send, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { formatDate } from "@/lib/utils";

type Application = {
  id: string;
  fullName: string;
  telegram: string;
  createdAt: string;
};

export function ApplicationsTable({
  initialData,
}: {
  initialData: Application[];
}) {
  const [rows, setRows] = useState<Application[]>(initialData);
  const [viewing, setViewing] = useState<Application | null>(null);
  const [deleting, setDeleting] = useState<Application | null>(null);
  const [busy, setBusy] = useState(false);

  const confirmDelete = async () => {
    if (!deleting) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/applications/${deleting.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("O'chirib bo'lmadi");
      setRows((prev) => prev.filter((r) => r.id !== deleting.id));
      toast.success("Murojaat o'chirildi");
      setDeleting(null);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Xatolik yuz berdi");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="flex items-center justify-between border-b border-border px-6 py-5">
        <h2 className="font-semibold text-foreground">Murojaatlar</h2>
        <span className="text-sm text-muted-foreground">{rows.length} ta</span>
      </div>

      {rows.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
            <Inbox className="h-6 w-6 text-muted-foreground" />
          </span>
          <p className="mt-4 text-sm font-medium text-foreground">
            Hozircha murojaatlar yo'q
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Yangi murojaatlar shu yerda ko'rinadi.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-6 py-4 font-semibold">Ism familiya</th>
                <th className="px-6 py-4 font-semibold">Telegram</th>
                <th className="px-6 py-4 font-semibold">Sana</th>
                <th className="px-6 py-4 text-right font-semibold">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className="transition-colors hover:bg-secondary/50"
                >
                  <td className="px-6 py-4">
                    <span className="font-medium text-foreground">
                      {row.fullName}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={`https://t.me/${row.telegram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      @{row.telegram}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {formatDate(row.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setViewing(row)}
                      >
                        <Eye className="h-4 w-4" />
                        Ko'rish
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDeleting(row)}
                        className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                        O'chirish
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View dialog */}
      <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Murojaat ma'lumotlari</DialogTitle>
            <DialogDescription>
              Kursga yozilish uchun yuborilgan murojaat
            </DialogDescription>
          </DialogHeader>
          {viewing && (
            <div className="mt-2 space-y-3">
              <DetailRow icon={User} label="Ism" value={viewing.fullName} />
              <DetailRow
                icon={Send}
                label="Telegram"
                value={`@${viewing.telegram}`}
              />
              <DetailRow
                icon={Calendar}
                label="Sana"
                value={formatDate(viewing.createdAt)}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete confirm dialog */}
      <Dialog open={!!deleting} onOpenChange={(o) => !o && setDeleting(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Murojaatni o'chirish</DialogTitle>
            <DialogDescription>
              {deleting?.fullName} ning murojaatini o'chirmoqchimisiz? Bu amalni
              qaytarib bo'lmaydi.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-end gap-3">
            <Button variant="outline" onClick={() => setDeleting(null)}>
              Bekor qilish
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              disabled={busy}
            >
              {busy ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  O'chirilmoqda...
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4" />
                  O'chirish
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 px-5 py-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
