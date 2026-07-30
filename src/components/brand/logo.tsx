import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10 shadow-glow">
        <Image
          src="/logo.webp"
          alt="Moviy Logist logotipi"
          fill
          sizes="36px"
          className="object-cover"
          priority
        />
      </span>
      {showText && (
        <span className="text-lg font-bold tracking-tight text-foreground">
          Moviy <span className="text-primary">Logist</span>
        </span>
      )}
    </div>
  );
}
