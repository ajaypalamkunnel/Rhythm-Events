"use client";

import React, { useEffect, useState, useRef } from "react";
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  if (currentIndex === null || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) {
      // Swiped left -> Next
      onNavigate((currentIndex + 1) % items.length);
    } else if (diff < -50) {
      // Swiped right -> Prev
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }
    setTouchStartX(null);
  };

  return (
    <div
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 md:p-8 animate-fadeIn select-none"
    >
      {/* Top Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-5 sm:right-5 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-brand-gold text-white hover:text-brand-dark transition-all duration-300 shadow-xl border border-white/10"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Floating Navigation Buttons (Visible on Mobile & Desktop) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-brand-darker/80 hover:bg-brand-gold text-brand-gold hover:text-brand-dark transition-all duration-300 flex items-center justify-center border border-brand-gold/40 shadow-2xl backdrop-blur-md active:scale-95"
        aria-label="Previous media"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-brand-darker/80 hover:bg-brand-gold text-brand-gold hover:text-brand-dark transition-all duration-300 flex items-center justify-center border border-brand-gold/40 shadow-2xl backdrop-blur-md active:scale-95"
        aria-label="Next media"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Content Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center px-8 sm:px-14"
      >
        {currentItem.type === "video" ? (
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/40 bg-black max-h-[65vh] sm:max-h-[75vh]">
            <video
              key={currentItem.src}
              ref={videoRef}
              src={currentItem.src}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[65vh] sm:max-h-[75vh] object-contain mx-auto"
            />
          </div>
        ) : (
          <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/30">
            <Image
              key={currentItem.src}
              src={currentItem.src}
              alt={currentItem.title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}

        {/* Caption & Mobile Navigation Strip */}
        <div className="mt-3 sm:mt-4 text-center max-w-2xl px-2 w-full">
          <div className="flex items-center justify-between sm:justify-center gap-4">
            <button
              onClick={handlePrev}
              className="sm:hidden text-xs font-semibold text-brand-goldLight flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            <div>
              <h3 className="font-serif text-sm sm:text-lg font-bold text-brand-goldLight line-clamp-1">
                {currentItem.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 line-clamp-1">
                {currentItem.caption}
              </p>
            </div>

            <button
              onClick={handleNext}
              className="sm:hidden text-xs font-semibold text-brand-goldLight flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-[10px] sm:text-xs text-slate-400 mt-1.5 font-mono">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
