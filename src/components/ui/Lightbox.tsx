"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { GalleryMediaItem } from "@/types";

interface LightboxProps {
  items: GalleryMediaItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-brand-gold text-white hover:text-brand-dark transition-all duration-300"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-brand-gold text-white hover:text-brand-dark transition-all duration-300 hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-brand-gold text-white hover:text-brand-dark transition-all duration-300 hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        {currentItem.type === "video" ? (
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/30 bg-black max-h-[75vh]">
            <video
              src={currentItem.src}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[75vh] object-contain mx-auto"
            />
          </div>
        ) : (
          <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/30">
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}

        {/* Caption & Counter */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-goldLight">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">{currentItem.caption}</p>
          <div className="text-xs text-slate-400 mt-2 font-mono">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
