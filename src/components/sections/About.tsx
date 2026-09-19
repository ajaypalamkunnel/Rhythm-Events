"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Target, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { siteConfig, timelineMilestones } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-brand-dark/40">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Story & Philosophy"
          title="Curating Extraordinary Celebrations in"
          highlight="Pala & Across Kerala"
          description="Born from a deep passion for theatrical elegance and floral artistry, Rhythm Weddings and Events has redefined the standard of wedding styling and event orchestration in Central Travancore."
        />

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Showcase (Overlapping Images) */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" duration={0.8}>
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl">
                <Image
                  src="/assets/Screenshot 2026-09-19 110604.png"
                  alt="Rhythm Weddings Grand Stage Setup"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                    Master Stage Craftsmanship
                  </span>
                  <p className="text-white font-serif text-lg font-bold">
                    Signature illuminated stages tailored to each venue&apos;s architecture.
                  </p>
                </div>
              </div>

              {/* Floating Overlap Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-brand-gold/50 shadow-gold-glow hidden sm:block">
                <Image
                  src="/assets/Screenshot 2026-09-19 112110.png"
                  alt="Floral and Candle Details"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>

              {/* Years of Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 px-5 py-4 rounded-2xl bg-gradient-to-br from-brand-gold via-brand-goldDark to-brand-darker text-brand-darker font-bold shadow-2xl border border-brand-goldLight">
                <div className="font-serif text-3xl sm:text-4xl leading-none text-brand-darker">
                  8+
                </div>
                <div className="text-[11px] uppercase tracking-wider text-black font-semibold mt-1">
                  Years Experience
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" duration={0.8}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-semibold text-brand-goldLight">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Crafted for Perfection</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Where Traditional Grace Meets Contemporary Luxury
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Headquartered in <strong className="text-brand-goldLight">Pala, Kottayam</strong>, Rhythm Weddings and Events was founded with a singular ambition: to replace generic banquet templates with bespoke, high-fashion event environments.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether orchestrating a sacred Christian betrothal, a majestic church wedding, a high-octane evening reception, or a private anniversary, our in-house designers, master carpenters, and artisanal florists handle every single element without third-party delays.
              </p>

              {/* Checklist points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "In-house Floral Cold Chain",
                  "3D Photorealistic Stage Renders",
                  "Custom Truss & Chandelier Rigging",
                  "Single Point Event Director",
                  "Zero Stress Coordination",
                  "Pala & Kottayam Specialists",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <ScrollReveal delay={0.1}>
            <GlassCard variant="elevated" className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Mission</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                To design and execute unforgettable, seamless wedding and event experiences that authentically capture each family&apos;s story and surpass expectations with artistic brilliance.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard variant="elevated" className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Vision</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                To be Central Kerala&apos;s undisputed leader in luxury wedding design, celebrated for introducing sustainable floral practices, cutting-edge lighting, and flawless hospitality.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <GlassCard variant="elevated" className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Promise</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Total transparency, zero hidden surcharges, punctual delivery hours before guest arrival, and unwavering dedication to making your big day effortless.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* 8-Year Evolution Timeline */}
        <div className="pt-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold block mb-2">
              Our Journey
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              8+ Years of Milestone Celebrations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {timelineMilestones.map((milestone, idx) => (
              <ScrollReveal key={milestone.year} delay={idx * 0.1}>
                <GlassCard className="p-6 h-full relative group hover:border-brand-gold/60">
                  <div className="text-xs font-mono font-bold text-brand-goldLight px-2.5 py-1 rounded-md bg-brand-gold/10 inline-block mb-3 border border-brand-gold/30">
                    {milestone.year}
                  </div>
                  <h5 className="font-serif text-base font-bold text-white mb-2 group-hover:text-brand-goldLight transition-colors">
                    {milestone.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {milestone.desc}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
