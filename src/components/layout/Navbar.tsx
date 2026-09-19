"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, CalendarHeart, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import ThemeToggle from "./ThemeToggle";
import Button from "../ui/Button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Video Reel", href: "#video-reel" },
  { name: "Gallery", href: "#gallery" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/85 backdrop-blur-xl border-b border-brand-gold/20 py-3 shadow-xl"
          : "bg-gradient-to-b from-brand-darker/90 via-brand-darker/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-gold/60 group-hover:border-brand-gold transition-colors duration-300 shadow-md">
            <Image
              src="/assets/Rhythm_logo_png.png"
              alt="Rhythm Weddings and Events"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-goldLight transition-colors block leading-tight">
              RHYTHM
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold block font-medium">
              Weddings & Events
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? "text-brand-goldLight font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Area */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>Pala: {siteConfig.contact.phone.split(",")[0]}</span>
          </a>
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            className="shadow-gold-glow/40"
          >
            <CalendarHeart className="w-3.5 h-3.5 mr-1" />
            Book Event
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-brand-darker/95 backdrop-blur-2xl border-b border-brand-gold/30 px-6 py-6 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-base font-medium text-slate-200 hover:text-brand-goldLight hover:bg-white/5 transition-all border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-sm font-semibold text-white border border-white/15"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              Call {siteConfig.contact.phone.split(",")[0]}
            </a>
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Request Free Proposal
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
