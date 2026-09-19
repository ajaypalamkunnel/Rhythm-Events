import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5 shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark text-brand-darker font-semibold hover:shadow-gold-glow hover:-translate-y-0.5 relative overflow-hidden group",
    secondary:
      "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5",
    outline:
      "bg-transparent border border-brand-gold/60 text-brand-goldLight hover:bg-brand-gold/15 hover:border-brand-gold hover:shadow-gold-glow/40 hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-gray-300 hover:text-brand-goldLight hover:bg-white/5",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
