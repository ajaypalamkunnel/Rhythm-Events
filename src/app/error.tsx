"use client";

import React, { useEffect } from "react";
import { Sparkles, RefreshCcw } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 bg-brand-darker text-center">
      <div className="max-w-md w-full">
        <GlassCard variant="gold-tint" className="p-8 sm:p-10 border-brand-gold/40 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-300 mx-auto mb-6">
            <Sparkles className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase tracking-widest text-rose-300 font-bold">
            Something went wrong
          </span>
          <h1 className="font-serif text-2xl font-bold text-white mt-1">
            Unexpected Event Glitch
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
            We encountered an unexpected error while loading this page. Please try refreshing.
          </p>

          <div className="mt-6">
            <button
              onClick={() => reset()}
              className="w-full py-3 px-4 rounded-xl btn-gold text-brand-dark font-bold text-xs flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
