"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="top-center"
      theme="dark"
      toastOptions={{
        style: {
          borderRadius: "16px",
          background: "hsl(0 0% 8%)",
          color: "hsl(40 30% 96%)",
          border: "1px solid hsl(40 14% 20%)",
          boxShadow: "0 8px 40px -8px rgba(0, 0, 0, 0.7)",
          fontFamily: "var(--font-inter)",
        },
      }}
      {...props}
    />
  );
}
