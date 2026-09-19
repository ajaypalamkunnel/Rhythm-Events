"use client";

import React from "react";
import {
  Award,
  Sparkles,
  Flower2,
  Clock,
  ShieldCheck,
  Layers,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { whyChooseUsData } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap = {
  Award,
  Sparkles,
  Flower2,
  Clock,
  ShieldCheck,
  Layers,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 overflow-hidden bg-brand-dark/60">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Rhythm Difference"
          title="Why Discerning Couples Choose"
          highlight="Rhythm Events"
          description="We combine meticulous engineering, artistic floral storytelling, and round-the-clock event dedication to deliver perfection with zero compromises."
        />

        {/* 6 Key Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {whyChooseUsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;

            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <GlassCard
                  variant="elevated"
                  className="p-8 h-full flex flex-col justify-between group hover:border-brand-gold/60"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 shadow-md mb-6">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-goldLight transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-brand-gold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Unmatched Quality Standard</span>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Comparison Table / Strip */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <GlassCard variant="elevated" className="p-6 sm:p-10 border-brand-gold/40">
              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Transparent Comparison
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  How We Elevate Above Standard Vendors
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    aspect: "Stage Concept & Design",
                    rhythm: "Bespoke 3D scale renders tailored to venue architecture",
                    others: "Generic catalog templates or downloaded photos",
                  },
                  {
                    aspect: "Floral Freshness",
                    rhythm: "Direct cold-chain exotic sourcing; setup completed hours prior",
                    others: "Stored in open heat; prone to mid-event wilting",
                  },
                  {
                    aspect: "Coordination & Management",
                    rhythm: "Dedicated on-ground Event Director managing all vendor cues",
                    others: "Fragmented responsibility left to stressful family members",
                  },
                  {
                    aspect: "Pricing & Transparency",
                    rhythm: "Clear itemized quote with zero surprise on-site surcharges",
                    others: "Hidden transportation, labor, and overtime add-ons",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 rounded-xl bg-white/5 border border-white/5 items-center"
                  >
                    <div className="md:col-span-4 font-semibold text-sm text-white">
                      {row.aspect}
                    </div>
                    <div className="md:col-span-4 flex items-start gap-2 text-xs text-brand-goldLight font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.rhythm}</span>
                    </div>
                    <div className="md:col-span-4 flex items-start gap-2 text-xs text-slate-400">
                      <XCircle className="w-4 h-4 text-rose-400/80 shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
