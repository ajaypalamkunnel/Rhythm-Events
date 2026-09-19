"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Rhythm Weddings & Events team, I would like to inquire about wedding/event planning and stage decoration services."
  );
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-brand-dark/90 hover:bg-brand-gold text-brand-gold hover:text-brand-dark border border-brand-gold/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct Call Button (Mobile) */}
      <a
        href={`tel:${siteConfig.contact.phone.split(",")[0]}`}
        className="sm:hidden p-3 rounded-full bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-dark border border-brand-gold/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110"
        aria-label="Call Rhythm Weddings"
        title="Call Rhythm Weddings"
      >
        <Phone className="w-5 h-5 text-brand-gold" />
      </a>

      {/* WhatsApp Floating Trigger */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-400/40 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline">
          Chat with Us
        </span>
      </a>
    </div>
  );
}
