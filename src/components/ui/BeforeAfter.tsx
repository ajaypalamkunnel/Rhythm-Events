"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = "Bare Stage / Pre-Setup",
  afterLabel = "Signature Rhythm Setup",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-brand-gold/30 shadow-2xl group"
    >
      {/* After Image (Full background) */}
      <Image
        src={afterImage}
        alt="After Transformation"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-brand-dark/80 backdrop-blur-md border border-brand-gold/40 text-xs font-semibold text-brand-goldLight shadow-md">
        {afterLabel}
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full">
          <Image
            src={beforeImage}
            alt="Before Setup"
            fill
            className="object-cover object-left"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-md">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Bar & Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-gradient-to-b from-brand-goldLight via-brand-gold to-brand-goldDark shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shadow-gold-glow border-2 border-white cursor-ew-resize">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
