"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Play, Eye } from "lucide-react";
import { galleryMedia } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import Lightbox from "../ui/Lightbox";
import ScrollReveal from "../ui/ScrollReveal";

const filterTabs = [
  { id: "all", label: "All Media" },
  { id: "photos", label: "Stage Photos" },
  { id: "videos", label: "Video Reels" },
  { id: "stages", label: "Grand Backdrops" },
  { id: "floral", label: "Floral Artistry" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeTab === "all"
      ? galleryMedia
      : galleryMedia.filter((item) => item.category === activeTab || (activeTab === "videos" && item.type === "video"));

  return (
    <section id="gallery" className="relative py-20 sm:py-28 overflow-hidden bg-brand-dark/50">
      {/* Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Visual Journal"
          title="Interactive Event &"
          highlight="Decoration Gallery"
          description="Click any stage photo or video clip to open the high-definition fullscreen viewer and experience our craftsmanship up close."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-brand-gold text-brand-darker shadow-gold-glow"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.05}>
              <div
                onClick={() => setLightboxIndex(galleryMedia.findIndex((m) => m.id === item.id))}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-brand-gold/60 shadow-xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <Image
                  src={item.poster || item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Video Play Badge or Photo Badge */}
                <div className="absolute top-3 right-3">
                  {item.type === "video" ? (
                    <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 fill-brand-dark ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                      <Eye className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold block">
                    {item.type === "video" ? "Video Reel" : "Stage Photography"}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={galleryMedia}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}
