"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { siteConfig, servicesData } from "@/config/site";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    // Check if business is currently open (IST: 9:00 AM - 6:00 PM Mon-Sat)
    const now = new Date();
    // UTC to IST offset (+5.5 hours)
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const istTime = new Date(utcTime + 3600000 * 5.5);
    const day = istTime.getDay(); // 0 is Sun, 6 is Sat
    const hour = istTime.getHours();

    if (day !== 0 && hour >= 9 && hour < 18) {
      setIsOpenNow(true);
    } else {
      setIsOpenNow(false);
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      eventDate: "",
      guestCount: "",
      estimatedBudget: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit message. Please try again.");
      }

      setSubmitSuccess(true);
      reset();

      // Launch celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C9A24D", "#E8C97A", "#FFFFFF"],
        });
      } catch (e) {
        // Ignore confetti if not supported
      }
    } catch (err: any) {
      setServerError(err.message || "An unexpected error occurred. Please contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden bg-brand-darker">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-navy/60 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s Craft Your"
          highlight="Unforgettable Celebration"
          description="Have a date in mind or want to explore customized 3D stage concepts? Send us your details or reach out directly to our Pala studio."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right">
              <GlassCard variant="elevated" className="p-6 sm:p-8 space-y-6 border-brand-gold/30">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Pala Studio Office
                  </h3>
                  {/* Real-time Business Hours Indicator */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      isOpenNow
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                      }`}
                    />
                    <span>{isOpenNow ? "Open Now" : "Currently Closed"}</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Location & Address</div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {siteConfig.location.address}, {siteConfig.location.city},{" "}
                        {siteConfig.location.state_country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone Inquiries</div>
                      <div className="flex flex-col text-xs text-slate-300 mt-0.5">
                        <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-gold">
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email Consultation</div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-xs text-slate-300 hover:text-brand-gold mt-0.5 block"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Business Hours</div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {siteConfig.contact.business_hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Quick Action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Direct: {siteConfig.contact.whatsapp}</span>
                  </a>
                </div>
              </GlassCard>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-brand-gold/30 shadow-xl h-48 sm:h-60 relative">
                <iframe
                  title="Rhythm Weddings and Events Pala Map"
                  src={siteConfig.location.google_maps_embed_url}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <GlassCard variant="elevated" className="p-6 sm:p-10 border-brand-gold/40 shadow-2xl">
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                    Direct Inquiry Form
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                    Request a Customized Proposal
                  </h3>
                </div>

                {submitSuccess ? (
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-white">
                      Inquiry Received!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Rhythm Weddings and Events. Our senior event director in Pala will review your requirements and reach out to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Anti-spam honeypot */}
                    <input
                      type="text"
                      {...register("honeypot")}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {serverError && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rohith Thomas"
                          {...register("name")}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-sm text-white placeholder:text-slate-500 transition-colors"
                        />
                        {errors.name && (
                          <p className="text-[11px] text-rose-400 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 95398 XXXXX"
                          {...register("phone")}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-sm text-white placeholder:text-slate-500 transition-colors"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-rose-400 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="rohith@example.com"
                          {...register("email")}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-sm text-white placeholder:text-slate-500 transition-colors"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Service Choice */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Service Interested In *
                        </label>
                        <select
                          {...register("service")}
                          className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-sm text-white transition-colors"
                        >
                          <option value="">Select Service...</option>
                          {servicesData.map((srv) => (
                            <option key={srv.id} value={srv.name}>
                              {srv.name}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-[11px] text-rose-400 mt-1">{errors.service.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Event Date */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Tentative Event Date
                        </label>
                        <input
                          type="date"
                          {...register("eventDate")}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold text-sm text-white transition-colors"
                        />
                      </div>

                      {/* Guest Count */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Guest Count
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 500 Guests"
                          {...register("guestCount")}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold text-sm text-white placeholder:text-slate-500 transition-colors"
                        />
                      </div>

                      {/* Estimated Budget */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Estimated Budget
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. ₹2.5 Lakhs"
                          {...register("estimatedBudget")}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold text-sm text-white placeholder:text-slate-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Tell Us About Your Vision & Venue *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please share details about your venue location (e.g. Pala, Kottayam), theme preferences, or specific floral decor requirements..."
                        {...register("message")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-sm text-white placeholder:text-slate-500 transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl btn-gold text-brand-darker font-bold text-sm tracking-wide shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Proposal Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
