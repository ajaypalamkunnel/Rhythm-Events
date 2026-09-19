import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Sparkles,
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  CheckCircle2,
  CalendarHeart,
  Eye,
} from "lucide-react";
import { portfolioProjects, siteConfig } from "@/config/site";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import BeforeAfter from "@/components/ui/BeforeAfter";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - ${project.location} | ${siteConfig.business_name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteConfig.business_name}`,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-brand-darker min-h-screen text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-goldLight hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Portfolio Celebrations</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="relative w-full h-[320px] sm:h-[480px] rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl mb-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-black/40 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <span className="px-3.5 py-1 rounded-full bg-brand-gold text-brand-darker text-xs font-bold shadow-md inline-block mb-3">
              {project.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-brand-gold" />
                {project.client}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-gold" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-gold" />
                {project.date}
              </span>
            </div>
          </div>
        </div>

        {/* Case Study Breakdown (Challenge / Solution / Result) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <GlassCard variant="elevated" className="p-6">
            <h3 className="font-serif text-lg font-bold text-white mb-2 text-rose-300">
              The Challenge
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {project.challenge}
            </p>
          </GlassCard>

          <GlassCard variant="elevated" className="p-6">
            <h3 className="font-serif text-lg font-bold text-white mb-2 text-brand-goldLight">
              The Rhythm Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {project.solution}
            </p>
          </GlassCard>

          <GlassCard variant="elevated" className="p-6">
            <h3 className="font-serif text-lg font-bold text-white mb-2 text-emerald-300">
              The Grand Result
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {project.result}
            </p>
          </GlassCard>
        </div>

        {/* Interactive Before & After if available */}
        {project.beforeImage && project.afterImage && (
          <div className="mb-14">
            <h3 className="font-serif text-2xl font-bold text-white mb-4 text-center">
              Venue Metamorphosis
            </h3>
            <BeforeAfter
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel="Pre-Production"
              afterLabel="Completed Stage"
            />
          </div>
        )}

        {/* Project Gallery Images */}
        <div className="mb-14">
          <h3 className="font-serif text-2xl font-bold text-white mb-6">
            Event Photo Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative h-60 rounded-2xl overflow-hidden border border-white/10 shadow-lg group"
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Action Banner */}
        <GlassCard variant="gold-tint" className="p-8 sm:p-10 text-center border-brand-gold/40">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Inspired by this Setup for Your Event?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
            We can adapt this design theme to your venue dimensions and color preferences.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={`/#contact?theme=${encodeURIComponent(project.title)}`}
              variant="primary"
              size="md"
            >
              <CalendarHeart className="w-4 h-4 mr-2" />
              Inquire About this Theme
            </Button>
            <Button href="/#portfolio" variant="secondary" size="md">
              <Eye className="w-4 h-4 mr-2" />
              View More Projects
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
