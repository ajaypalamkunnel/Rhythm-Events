"use client";

import React, { useState } from "react";
import { Sparkles, Calculator, Check, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";

const eventTypes = [
  { id: "wedding", name: "Grand Wedding & Coordination", base: 150000 },
  { id: "reception", name: "Evening Reception & Lounge", base: 95000 },
  { id: "betrothal", name: "Betrothal / Manasammatham", base: 65000 },
  { id: "floral", name: "Master Floral Stage Architecture", base: 85000 },
  { id: "birthday", name: "Private Milestone / Birthday", base: 45000 },
  { id: "corporate", name: "Corporate Gala & Conference", base: 120000 },
];

const guestScales = [
  { id: "intimate", label: "Under 250 Guests", multiplier: 1.0 },
  { id: "medium", label: "250 – 600 Guests", multiplier: 1.35 },
  { id: "grand", label: "600 – 1200 Guests", multiplier: 1.75 },
  { id: "royal", label: "1200+ Guests (Mega Convention)", multiplier: 2.3 },
];

const decorTiers = [
  { id: "classic", name: "Classic Elegance", desc: "Refined drapes, fresh local blooms, warm ambient wash", cost: 25000 },
  { id: "pastel", name: "Pastel Fairy Haven", desc: "Imported florals, botanical arbors, warm fairy light tunnels", cost: 55000 },
  { id: "royal", name: "Royal Opulence", desc: "Suspended crystal chandeliers, dynamic moving heads, exotic hydrangeas", cost: 110000 },
];

const extraOptions = [
  { id: "tunnel", name: "50-ft Cascading Floral Entrance Tunnel", cost: 45000 },
  { id: "pyro", name: "Cold-Spark Pyro & Low Fog Grand Entrance", cost: 20000 },
  { id: "signage", name: "Personalized LED Neon Sign & Mirror Welcome Easels", cost: 12000 },
  { id: "concierge", name: "Dedicated On-Site Bridal Concierge & Run-of-Show Director", cost: 25000 },
];

export default function QuoteCalculator() {
  const [selectedEvent, setSelectedEvent] = useState(eventTypes[0]);
  const [selectedScale, setSelectedScale] = useState(guestScales[1]);
  const [selectedTier, setSelectedTier] = useState(decorTiers[1]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(["tunnel", "signage"]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const extrasCost = selectedExtras.reduce((sum, id) => {
    const found = extraOptions.find((e) => e.id === id);
    return sum + (found ? found.cost : 0);
  }, 0);

  const baseCalculated = (selectedEvent.base + selectedTier.cost) * selectedScale.multiplier + extrasCost;
  const minEst = Math.round((baseCalculated * 0.9) / 1000) * 1000;
  const maxEst = Math.round((baseCalculated * 1.15) / 1000) * 1000;

  const summaryText = `Event: ${selectedEvent.name} | Scale: ${selectedScale.label} | Style: ${selectedTier.name} | Estimated Range: ₹${minEst.toLocaleString("en-IN")} - ₹${maxEst.toLocaleString("en-IN")}`;

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Hello Rhythm Events, I generated an event estimation online: \n\n${summaryText}\n\nCould you please share a detailed 3D proposal and availability?`
  )}`;

  return (
    <section id="quote-calculator" className="relative py-20 sm:py-28 overflow-hidden bg-brand-dark/90">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-brand-navy/60 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Transparent Planning"
          title="Interactive Event Budget &"
          highlight="Decoration Estimator"
          description="Customize your celebration preferences in real-time to get an instant customized price projection tailored to your vision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Event Type */}
            <ScrollReveal>
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-gold font-bold block mb-3">
                  Step 1: Select Your Event Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {eventTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedEvent(type)}
                      className={`p-3.5 rounded-xl text-left transition-all border text-xs sm:text-sm font-medium ${
                        selectedEvent.id === type.id
                          ? "bg-brand-gold text-brand-darker border-brand-gold font-bold shadow-md"
                          : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Guest Scale */}
            <ScrollReveal delay={0.1}>
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-gold font-bold block mb-3">
                  Step 2: Expected Guest Headcount
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {guestScales.map((scale) => (
                    <button
                      key={scale.id}
                      onClick={() => setSelectedScale(scale)}
                      className={`p-3.5 rounded-xl text-left transition-all border text-xs sm:text-sm font-medium ${
                        selectedScale.id === scale.id
                          ? "bg-brand-gold text-brand-darker border-brand-gold font-bold shadow-md"
                          : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      {scale.label}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Decor Tier */}
            <ScrollReveal delay={0.2}>
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-gold font-bold block mb-3">
                  Step 3: Decor Ambience & Floral Tier
                </label>
                <div className="space-y-2.5">
                  {decorTiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between gap-3 ${
                        selectedTier.id === tier.id
                          ? "bg-brand-navy border-brand-gold shadow-gold-glow/30"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{tier.name}</span>
                          {selectedTier.id === tier.id && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-brand-gold text-brand-darker font-bold">
                              Selected
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{tier.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 4. Add-on Enhancements */}
            <ScrollReveal delay={0.3}>
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-gold font-bold block mb-3">
                  Step 4: Optional Production Enhancements
                </label>
                <div className="space-y-2">
                  {extraOptions.map((opt) => {
                    const isChecked = selectedExtras.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggleExtra(opt.id)}
                        className={`w-full p-3 rounded-xl text-left transition-all border flex items-center justify-between text-xs sm:text-sm ${
                          isChecked
                            ? "bg-brand-gold/15 border-brand-gold/60 text-white font-medium"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked
                                ? "bg-brand-gold border-brand-gold text-brand-dark"
                                : "border-white/30"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{opt.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Real-Time Live Estimation Summary Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <ScrollReveal direction="left">
              <GlassCard variant="gold-tint" className="p-6 sm:p-8 border-brand-gold/50 shadow-2xl">
                <div className="flex items-center gap-2 text-brand-gold mb-4">
                  <Calculator className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold">
                    Estimated Budget Range
                  </span>
                </div>

                <div className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  ₹{minEst.toLocaleString("en-IN")}{" "}
                  <span className="text-slate-400 text-lg sm:text-xl font-normal">to</span>{" "}
                  <span className="text-gold-gradient">₹{maxEst.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  *Indicative baseline tailored to Pala & Central Kerala venues. Final quotes include detailed 3D blueprint.
                </p>

                {/* Breakdown List */}
                <div className="my-6 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Scope:</span>
                    <span className="font-semibold text-white truncate max-w-[200px]">
                      {selectedEvent.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Guest Count:</span>
                    <span className="font-semibold text-white">{selectedScale.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Styling Concept:</span>
                    <span className="font-semibold text-brand-goldLight">{selectedTier.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Add-ons:</span>
                    <span className="font-semibold text-white">{selectedExtras.length} Selected</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Estimate via WhatsApp</span>
                  </a>

                  <Button
                    href={`#contact?quoteDetails=${encodeURIComponent(summaryText)}`}
                    variant="primary"
                    size="md"
                    className="w-full text-center"
                  >
                    <span>Request Official 3D Proposal</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
