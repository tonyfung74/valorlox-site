"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subhead: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroSection({
  headline,
  subhead,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <section className="bg-brand-dark text-white min-h-[82vh] flex items-center relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/prototype-photo-1.jpeg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/80 to-brand-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-brand-light-green text-sm font-semibold uppercase tracking-widest mb-5">
            Patented · George Mason University · US Patent Issued
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-balance">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            {subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-light-green text-white hover:text-brand-dark font-semibold px-7 py-3.5 rounded transition-colors text-base"
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white/80 hover:text-white font-semibold px-7 py-3.5 rounded transition-colors text-base"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
