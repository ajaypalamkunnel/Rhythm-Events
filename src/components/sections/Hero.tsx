"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Play, Star, MapPin, ChevronDown, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import Counter from "../ui/Counter";
import Lightbox from "../ui/Lightbox";
import { galleryMedia } from "@/config/site";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[92svh] sm:min-h-[100svh] flex items-center justify-center pt-24 pb-10 sm:pt-32 sm:pb-16 overflow-hidden">
      {/* Background Image - Sharp, Clear & Perfectly Framed for Mobile and Desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/Hero section.png"
          alt="Rhythm Weddings Grand Stage Decoration in Pala Kottayam"
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center filter brightness-[0.78] contrast-[1.08] scale-100 transition-transform duration-1000"
          sizes="100vw"
        />
        {/* Balanced Luxury Vignette - Keeps stage decor clearly visible while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/45 to-brand-darker/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-darker/30 to-brand-darker/80 pointer-events-none" />
      </div>

      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-gold/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-goldLight/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Pill with 35+ Years Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-pill mb-4 sm:mb-6 border border-brand-gold/50 shadow-gold-glow/40">
          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-goldLight" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-brand-goldLight">
            35+ Years of Wedding Mastery in Pala & Kottayam
          </span>
        </div>

        {/* Headline - Refined & Proportional on Desktop & Mobile */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-md">
          Creating Moments,{" "}
          <span className="text-gold-gradient block sm:inline mt-0.5 sm:mt-0">
            Crafting Memories
          </span>
        </h1>

        {/* Subtitle - Crisp, Punchy & Short */}
        <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-200/95 max-w-2xl leading-relaxed font-normal drop-shadow">
          Bespoke wedding planning, signature stage architecture, and master floral styling crafted across Pala, Kottayam & Kerala.
        </p>

        {/* Location & Rating Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-5 text-xs text-slate-200">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-dark/70 backdrop-blur-md border border-white/15">
            <MapPin className="w-3 h-3 text-brand-gold" />
            <span>Pala • Kottayam • Kerala</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-brand-dark/70 backdrop-blur-md border border-white/15">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <span className="text-white ml-1 font-semibold">4.9/5</span>
            <span className="text-slate-300 hidden sm:inline">(250+ Reviews)</span>
          </div>
        </div>

        {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-7 w-full sm:w-auto">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="w-full sm:w-auto shadow-gold-glow font-semibold text-sm px-7 py-3"
          >
            <Calendar className="w-4 h-4 mr-2" />
            {siteConfig.primary_cta}
          </Button>

          <Button
            href="#portfolio"
            variant="secondary"
            size="md"
            className="w-full sm:w-auto text-sm px-6 py-3"
          >
            {siteConfig.secondary_cta}
          </Button>

          <button
            onClick={() => setVideoOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-dark/80 hover:bg-brand-gold/20 border border-brand-gold/40 text-brand-goldLight text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-md"
          >
            <div className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shadow">
              <Play className="w-3 h-3 fill-brand-dark ml-0.5" />
            </div>
            <span>Watch Live Stage Reel</span>
          </button>
        </div>

        {/* Quick Stats Card - Compact & Mobile-Optimized */}
        <div className="mt-8 sm:mt-10 w-full max-w-3xl">
          <GlassCard variant="elevated" className="py-4 px-3 sm:py-5 sm:px-6 border-brand-gold/30">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center pt-2 sm:pt-0">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient leading-none">
                    <Counter end={stat.numeric} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-6 sm:mt-8 inline-flex flex-col items-center text-slate-300 hover:text-brand-gold transition-colors group"
          aria-label="Scroll to About Section"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium mb-0.5 text-slate-400 group-hover:text-brand-gold">
            Explore Details
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-brand-gold" />
        </a>
      </div>

      {/* Video Reel Lightbox Modal */}
      {videoOpen && (
        <Lightbox
          items={galleryMedia.filter((m) => m.type === "video")}
          currentIndex={0}
          onClose={() => setVideoOpen(false)}
          onNavigate={() => {}}
        />
      )}
    </section>
  );
}
