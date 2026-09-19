import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "gold-tint";
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  variant = "default",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl backdrop-blur-md transition-all duration-300 relative overflow-hidden",
        variant === "default" && "bg-brand-dark/70 border border-white/10 shadow-xl dark:bg-brand-dark/70 light:bg-white/80 light:border-black/10",
        variant === "elevated" && "bg-brand-navy/85 border border-brand-gold/25 shadow-2xl dark:bg-brand-navy/85 light:bg-white/95 light:border-brand-gold/30",
        variant === "gold-tint" && "bg-gradient-to-br from-brand-gold/10 via-brand-navy/80 to-brand-dark/90 border border-brand-gold/30 shadow-gold-glow/20",
        hoverEffect && "hover:border-brand-gold/50 hover:shadow-gold-glow/30 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Subtle top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
