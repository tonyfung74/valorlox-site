"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline: string;
  subhead?: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CTASection({
  headline,
  subhead,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: CTASectionProps) {
  return (
    <section className="bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {headline}
          </h2>
          {subhead && (
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {subhead}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-light-green text-white hover:text-brand-dark font-semibold px-8 py-3.5 rounded transition-colors"
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white/80 hover:text-white font-semibold px-8 py-3.5 rounded transition-colors"
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
