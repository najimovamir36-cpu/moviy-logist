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
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-primary shadow-glow">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M3 8.5L12 4l9 4.5-9 4.5-9-4.5Z"
            stroke="#0a0a0a"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3 8.5v7L12 20l9-4.5v-7"
            stroke="#0a0a0a"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeOpacity="0.7"
          />
          <path
            d="M12 13v7"
            stroke="#0a0a0a"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeOpacity="0.7"
          />
        </svg>
      </span>
      {showText && (
        <span className="text-lg font-bold tracking-tight text-foreground">
          Moviy <span className="text-primary">Logist</span>
        </span>
      )}
    </div>
  );
}
