"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Calendar, ArrowRight, Eye } from "lucide-react";
import { portfolioProjects } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import BeforeAfter from "../ui/BeforeAfter";
import ScrollReveal from "../ui/ScrollReveal";

const categories = ["All", "Weddings", "Receptions", "Betrothals", "Floral & Stage"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 overflow-hidden bg-brand-darker">
      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-navy/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Real Celebrations"
          title="Curated Portfolio &"
          highlight="Stage Transformations"
          description="Explore our signature wedding stages, reception canopies, and betrothal floral setups executed across Pala, Kottayam, and premier resorts in Kerala."
        />

        {/* Featured Interactive Before & After Transformation */}
        <div className="mb-20">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
              Interactive Transformation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Drag to Reveal the Stage Magic
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg mx-auto">
              See how our artisanal floral and illumination architecture converts empty auditoriums into fairytale realms.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfter
              beforeImage="/assets/Screenshot 2026-09-19 112110.png"
              afterImage="/assets/Screenshot 2026-09-19 110432.png"
              beforeLabel="Pre-Production / Framing"
              afterLabel="Completed Cathedral Stage"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-gold text-brand-darker shadow-gold-glow"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.08}>
              <GlassCard
                variant="elevated"
                className="h-full flex flex-col group hover:border-brand-gold/60 overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-dark/80 backdrop-blur-md border border-brand-gold/40 text-xs font-semibold text-brand-goldLight">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-goldLight transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-gold font-medium mt-1">
                      Client: {project.client}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-goldLight hover:text-white transition-colors group/link"
                    >
                      <Eye className="w-4 h-4 text-brand-gold" />
                      <span>View Full Case Study & Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
