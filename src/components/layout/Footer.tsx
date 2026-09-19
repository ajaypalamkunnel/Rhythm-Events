import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig, servicesData } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-darker border-t border-brand-gold/20 pt-16 pb-12 overflow-hidden text-slate-300">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-navy/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/60 shadow-lg">
                <Image
                  src="/assets/Rhythm_logo_png.png"
                  alt="Rhythm Weddings and Events"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {siteConfig.business_name}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Pala & Kottayam&apos;s premier wedding and event planning, master floral styling, and luxury stage decoration studio. We turn your dream celebrations into timeless milestones.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social_links.instagram && (
                <a
                  href={siteConfig.social_links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 border border-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social_links.facebook && (
                <a
                  href={siteConfig.social_links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 border border-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social_links.youtube && (
                <a
                  href={siteConfig.social_links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 border border-white/10"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-brand-goldLight transition-colors">
                  About Our Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-goldLight transition-colors">
                  Services & Decor
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-goldLight transition-colors">
                  Wedding Portfolio
                </a>
              </li>
              <li>
                <a href="#video-reel" className="hover:text-brand-goldLight transition-colors">
                  Video Reels
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-goldLight transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-goldLight transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#quote-calculator" className="hover:text-brand-goldLight transition-colors">
                  Event Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-brand-goldLight transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{srv.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Reach Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  {siteConfig.location.address}, {siteConfig.location.city},{" "}
                  {siteConfig.location.state_country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-brand-goldLight transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-goldLight transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{siteConfig.contact.business_hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.business_name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
            <span>for magical celebrations across Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
