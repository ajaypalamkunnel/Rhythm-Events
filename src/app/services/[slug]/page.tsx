import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  CalendarHeart,
  HelpCircle,
  Clock,
  Layers,
  MapPin,
} from "lucide-react";
import { servicesData, siteConfig } from "@/config/site";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { getFaqSchema } from "@/lib/schema";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} in Pala, Kottayam | ${siteConfig.business_name}`,
    description: service.summary,
    openGraph: {
      title: `${service.name} | ${siteConfig.business_name}`,
      description: service.summary,
      images: [{ url: service.image }],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const faqSchema = getFaqSchema(service.faqs);

  return (
    <div className="pt-28 pb-20 bg-brand-darker min-h-screen text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-goldLight hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Header Banner */}
        <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl mb-12">
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-black/40 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/80 backdrop-blur-md border border-brand-gold/40 text-xs font-semibold text-brand-goldLight mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Pala & Kottayam Signature Service</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              {service.name}
            </h1>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <GlassCard variant="elevated" className="p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                Service Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {service.fullDescription}
              </p>
            </GlassCard>

            {/* Inclusions & Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <GlassCard variant="elevated" className="p-6">
                <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-gold" />
                  What Is Included
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard variant="elevated" className="p-6">
                <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  Key Advantages
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            {/* Workflow / Process */}
            <GlassCard variant="elevated" className="p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-gold" />
                Execution Roadmap
              </h3>
              <div className="space-y-4">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{step.title}</div>
                      <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <GlassCard variant="elevated" className="p-8">
                <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-gold" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <h4 className="font-semibold text-white text-sm">{faq.question}</h4>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}
          </div>

          {/* Sidebar Booking CTA Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <GlassCard variant="gold-tint" className="p-6 sm:p-8 border-brand-gold/40 shadow-2xl text-center">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                Book This Service
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Plan Your Big Day
              </h3>
              <p className="text-xs text-slate-300 mt-2">
                Get a customized 3D moodboard and quote for {service.name} in Pala, Kottayam, or across Kerala.
              </p>

              <div className="my-6 pt-4 border-t border-white/10 space-y-3 text-xs text-left text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>Available Across Kerala</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>Setup Finished Hours in Advance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  <span>100% Bespoke Decor Options</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  href={`/#contact?service=${encodeURIComponent(service.name)}`}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  <CalendarHeart className="w-4 h-4 mr-2" />
                  Request Free Quote
                </Button>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello Rhythm Events, I would like to inquire about ${service.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
