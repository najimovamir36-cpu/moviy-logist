import { Send, Instagram, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Moviy Logist — logistika va dispatcherlikni 0 dan o'rgatuvchi
              zamonaviy onlayn ta'lim markazi.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Ijtimoiy tarmoqlar
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Bog'lanish</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} Moviy Logist. Barcha huquqlar himoyalangan.
          </p>
          <a
            href="/admin/login"
            className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
}
