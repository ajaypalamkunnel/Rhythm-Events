"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  CalendarHeart,
  HelpCircle,
  Clock,
  Layers,
} from "lucide-react";
import { servicesData, siteConfig } from "@/config/site";
import { ServiceItem } from "@/types";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden bg-brand-darker">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-brand-navy/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Bespoke Wedding & Event"
          highlight="Decoration Services"
          description="From monumental cathedral stages to cozy betrothals and turnkey corporate galas, explore our full spectrum of signature services tailored to your aesthetic."
        />

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.05}>
              <GlassCard
                variant="elevated"
                className="h-full flex flex-col group hover:border-brand-gold/60"
              >
                {/* Card Image */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/30" />

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-gold text-brand-darker text-xs font-bold shadow-md">
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-goldLight transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Mini feature list */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-brand-goldLight hover:text-white flex items-center gap-1 transition-colors group/btn"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <Link
                      href={`/services/${service.slug}`}
                      className="text-[11px] uppercase tracking-wider text-slate-400 hover:text-brand-gold transition-colors underline underline-offset-4"
                    >
                      Dedicated Page
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <GlassCard variant="gold-tint" className="max-w-4xl mx-auto p-8 sm:p-10 text-center border-brand-gold/40">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Need a Custom Thematic Setup for Your Event?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Tell us your theme, venue dimensions, and guest headcount. We will generate a customized 3D moodboard and quote in 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button href="#contact" variant="primary" size="md">
                <CalendarHeart className="w-4 h-4 mr-1.5" />
                Get Custom Quote
              </Button>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-sm font-semibold transition-all"
              >
                Instant WhatsApp Inquiry
              </a>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-brand-navy rounded-3xl border border-brand-gold/40 shadow-2xl p-6 sm:p-8 text-left">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-brand-gold text-white hover:text-brand-dark transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10">
              <Image
                src={selectedService.image}
                alt={selectedService.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Service Specification
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-goldLight mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Features and Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h5 className="font-serif text-sm font-bold text-white mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-brand-gold" />
                    Key Inclusions
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedService.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h5 className="font-serif text-sm font-bold text-white mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-gold" />
                    Why Choose This
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-goldLight mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  Execution Workflow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.processSteps.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-black/20 border border-white/5">
                      <div className="text-xs font-bold text-brand-gold">
                        Step {idx + 1}: {step.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {selectedService.faqs.length > 0 && (
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-goldLight mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-gold" />
                    Frequently Asked Questions
                  </h4>
                  <div className="space-y-2">
                    {selectedService.faqs.map((faq, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-xs font-semibold text-white">{faq.question}</div>
                        <div className="text-xs text-slate-400 mt-1">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <Link
                  href={`/services/${selectedService.slug}`}
                  className="text-xs font-semibold text-brand-goldLight hover:underline"
                >
                  View Full SEO Service Page →
                </Link>

                <Button
                  href={`#contact?service=${encodeURIComponent(selectedService.name)}`}
                  variant="primary"
                  size="md"
                  onClick={() => setSelectedService(null)}
                >
                  <CalendarHeart className="w-4 h-4 mr-2" />
                  Book / Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
