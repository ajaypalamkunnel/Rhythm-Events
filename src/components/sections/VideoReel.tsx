"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Maximize2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

const videoReels = [
  {
    id: "reel-1",
    title: "Cinematic Stage & Lighting Reveal",
    subtitle: "Grand Cathedral Wedding in Pala",
    src: "/assets/Video-2128.mp4",
    poster: "/assets/Screenshot 2026-09-19 110604.png",
    duration: "1:00",
  },
  {
    id: "reel-2",
    title: "Betrothal & Reception Walkthrough",
    subtitle: "Pastel Elegance & Ambient Truss Architecture",
    src: "/assets/Video-52228.mp4",
    poster: "/assets/Screenshot 2026-09-19 110656.png",
    duration: "1:15",
  },
  {
    id: "reel-3",
    title: "Couple Grand Celebration & Floral Wonders",
    subtitle: "Floral Tunnel Entrance & Pyrotechnic Reveal",
    src: "/assets/Video-74065.mp4",
    poster: "/assets/Screenshot 2026-09-19 110432.png",
    duration: "1:30",
  },
];

export default function VideoReel() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeReel = videoReels[activeReelIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleSelectReel = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <section id="video-reel" className="relative py-20 sm:py-28 overflow-hidden bg-brand-dark/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Cinematic Experience"
          title="Watch Our Live Event"
          highlight="Showcase Reels"
          description="Experience the atmosphere, illumination, and emotional grandeur of real weddings orchestrated by Rhythm Weddings and Events."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Main Cinematic Video Player */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand-gold/40 shadow-2xl bg-black group aspect-video sm:aspect-[16/9] flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={activeReel.src}
                  poster={activeReel.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-dark/80 backdrop-blur-md border border-brand-gold/40 text-xs font-semibold text-brand-goldLight flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-brand-gold" />
                    Live Footage
                  </span>
                </div>

                {/* Bottom Controls Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-xl font-bold text-white leading-tight drop-shadow-md">
                      {activeReel.title}
                    </h3>
                    <p className="text-xs text-brand-goldLight mt-0.5 drop-shadow-md">
                      {activeReel.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="p-2.5 rounded-full bg-brand-dark/80 hover:bg-brand-gold text-brand-gold hover:text-brand-dark transition-all border border-brand-gold/40 shadow-md"
                      aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-full bg-brand-dark/80 hover:bg-brand-gold text-brand-gold hover:text-brand-dark transition-all border border-brand-gold/40 shadow-md"
                      aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Fullscreen Button */}
                    <button
                      onClick={handleFullscreen}
                      className="p-2.5 rounded-full bg-brand-dark/80 hover:bg-brand-gold text-brand-gold hover:text-brand-dark transition-all border border-brand-gold/40 shadow-md hidden sm:block"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Playlist / Selector Cards */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              Event Reel Playlist
            </h3>

            {videoReels.map((reel, idx) => (
              <button
                key={reel.id}
                onClick={() => handleSelectReel(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${
                  activeReelIndex === idx
                    ? "bg-brand-navy border-brand-gold shadow-gold-glow/40 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-gold/40"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                  <Play className={`w-5 h-5 ${activeReelIndex === idx ? "fill-brand-gold" : ""}`} />
                </div>

                <div className="overflow-hidden flex-grow">
                  <div className="text-xs font-semibold text-brand-goldLight uppercase tracking-wider">
                    Reel {idx + 1}
                  </div>
                  <div className="font-serif text-sm font-bold text-white truncate">
                    {reel.title}
                  </div>
                  <div className="text-xs text-slate-400 truncate mt-0.5">
                    {reel.subtitle}
                  </div>
                </div>
              </button>
            ))}

            <div className="pt-2">
              <GlassCard className="p-4 text-center">
                <p className="text-xs text-slate-300">
                  Want to see more full-length event walkthroughs?
                </p>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-brand-gold hover:underline mt-1 inline-block"
                >
                  Request our full wedding video portfolio →
                </a>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
