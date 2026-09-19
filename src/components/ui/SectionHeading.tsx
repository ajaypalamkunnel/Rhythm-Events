import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-2 mb-3.5", align === "center" && "justify-center")}>
          <span className="w-6 h-[1px] bg-brand-gold/60" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-goldLight">
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-brand-gold/60" />
        </div>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-gold-gradient block sm:inline mt-1 sm:mt-0">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
