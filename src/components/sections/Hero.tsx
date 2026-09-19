"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Play, Star, MapPin, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import Counter from "../ui/Counter";
import Lightbox from "../ui/Lightbox";
import { galleryMedia } from "@/config/site";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Parallax / Blur Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Hero section.png"
          alt="Luxury Wedding Stage Decoration Pala"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse-slow filter brightness-[0.45] contrast-[1.1]"
          sizes="100vw"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-brand-darker/80" />
        <div className="absolute inset-0 bg-dark-radial opacity-75" />
      </div>

      {/* Floating Gold Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-goldLight/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill mb-6 border border-brand-gold/40 shadow-gold-glow/30 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-brand-goldLight" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-goldLight">
            Pala & Kottayam&apos;s Premier Wedding & Event Stylists
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] max-w-5xl">
          Creating Moments,{" "}
          <span className="text-gold-gradient block mt-1">
            Crafting Memories
          </span>
        </h1>

        {/* Subtitle & Value Statement */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
          Welcome to <strong className="text-white font-semibold">Rhythm Weddings and Events</strong>. We transform your most cherished milestones into breathtaking realities with master floral artistry, bespoke stage architecture, and seamless end-to-end event planning across Kerala.
        </p>

        {/* Location & Rating Badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span>Pala • Kottayam • Central Kerala</span>
          </div>
          <div className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-white ml-1 font-semibold">4.9/5</span>
            <span className="text-slate-400">(250+ Weddings)</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-gold-glow text-base font-semibold"
          >
            <Calendar className="w-5 h-5 mr-2" />
            {siteConfig.primary_cta}
          </Button>

          <Button
            href="#portfolio"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-base"
          >
            {siteConfig.secondary_cta}
          </Button>

          <button
            onClick={() => setVideoOpen(true)}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-gold/15 hover:bg-brand-gold/25 border border-brand-gold/40 text-brand-goldLight text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            <div className="w-7 h-7 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shadow-md">
              <Play className="w-3.5 h-3.5 fill-brand-dark ml-0.5" />
            </div>
            <span>Watch Highlight Reel</span>
          </button>
        </div>

        {/* Floating Quick Stats Card */}
        <div className="mt-14 w-full max-w-4xl">
          <GlassCard variant="elevated" className="py-6 px-4 sm:px-8 border-brand-gold/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center px-2 pt-2 md:pt-0">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient">
                    <Counter end={stat.numeric} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium text-center">
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
          className="mt-8 inline-flex flex-col items-center text-slate-400 hover:text-brand-gold transition-colors group"
          aria-label="Scroll to About Section"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium mb-1">
            Discover More
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-brand-gold" />
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
