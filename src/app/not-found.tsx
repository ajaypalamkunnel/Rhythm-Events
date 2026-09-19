import React from "react";
import Link from "next/link";
import { Sparkles, Home, Phone } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 bg-brand-darker text-center">
      <div className="max-w-md w-full">
        <GlassCard variant="gold-tint" className="p-8 sm:p-10 border-brand-gold/40 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold mx-auto mb-6">
            <Sparkles className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            404 Error
          </span>
          <h1 className="font-serif text-3xl font-bold text-white mt-1">
            Page Not Found
          </h1>

          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            The celebration or service page you are looking for might have been moved or doesn&apos;t exist.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Button href="/" variant="primary" size="md" className="w-full">
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </Button>
            <Button href="/#contact" variant="secondary" size="md" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Contact Our Team
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
