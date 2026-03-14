import type { Metadata } from "next";
import Image from "next/image";
import { Timer, Building, Plane, Zap, Eye, Anchor } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatBar from "@/components/StatBar";
import FeatureCard from "@/components/FeatureCard";
import ComparisonTable from "@/components/ComparisonTable";
import OriginStory from "@/components/OriginStory";
import CTASection from "@/components/CTASection";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Valorlox | Intelligent Flood Protection Systems",
  description:
    "Valorlox deploys patented pneumatic cofferdam technology that protects communities from flooding in under 16 minutes — and disappears as functional public space when the threat passes.",
};

const differentiators = [
  {
    icon: Timer,
    title: "Deployed in under 16 minutes",
    description:
      "One operator. One air pump. No crane. No crew. The system is ready to deploy 24/7, triggered by a single decision — before a storm surge arrives.",
  },
  {
    icon: Eye,
    title: "Invisible until it's needed",
    description:
      "When the threat passes, the cofferdam becomes a walkable public surface bearing up to 300 lb/ft. No storage. No visual blight. No barrier looming over your waterfront.",
  },
  {
    icon: Anchor,
    title: "Permanently installed",
    description:
      "Unlike temporary barriers that must be trucked in, set up, and broken down after every flood event, the Valorlox system is in the ground — always.",
  },
];

const useCases = [
  {
    icon: Building,
    title: "Municipal waterfronts",
    description:
      "Protect downtown flood zones, marina districts, and boardwalks that cannot afford visual blight or permanent hardscape closures.",
  },
  {
    icon: Plane,
    title: "Transportation hubs",
    description:
      "Airport ILS equipment, rail underpasses, and coastal bridges require rapid response protection that doesn't interfere with daily operations.",
  },
  {
    icon: Zap,
    title: "Critical infrastructure",
    description:
      "Utility substations and DoD coastal facilities need permanent, always-ready flood protection that meets stringent performance requirements.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Flooding is getting worse. Your waterfront deserves protection that's always ready — and invisible until it's needed."
        subhead="The Valorlox pneumatic cofferdam deploys in under 16 minutes without heavy equipment, then becomes walkable public space the moment the threat passes."
        ctaText="Learn How It Works"
        ctaHref="/technology"
        secondaryCtaText="Partner With Us"
        secondaryCtaHref="/partner"
      />

      <StatBar />

      {/* Problem section */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                  The Problem
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 mb-6 tracking-tight leading-tight">
                  Nuisance flooding has increased 6× in 50 years. The infrastructure to fight it hasn&apos;t kept up.
                </h2>
                <div className="space-y-5 text-brand-slate text-base leading-relaxed">
                  <p>
                    In the 1950s, US coastal communities experienced roughly 2
                    nuisance flood days per year. By 2010, that number had
                    climbed to 12 — and it continues to rise with sea levels.
                  </p>
                  <p>
                    Each flood event triggers property damage, road closures,
                    infrastructure deterioration, and losses to local
                    businesses and tourism. The cumulative economic toll across
                    the US coastline reaches billions annually.
                  </p>
                  <p>
                    Existing flood barrier solutions require large storage
                    facilities, heavy equipment for deployment, and significant
                    visual intrusion into public spaces — costs that many
                    municipalities simply cannot absorb.
                  </p>
                </div>
              </div>
              <div className="bg-brand-cream rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/prototype-photo-2.jpeg"
                  alt="Valorlox prototype deployed at waterfront"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Solution overview */}
      <SectionReveal>
        <section className="bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                The Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                Protection that disappears when you don&apos;t need it
              </h2>
              <p className="mt-4 text-brand-slate text-lg max-w-2xl mx-auto leading-relaxed">
                The GMU Dynamic Low Visibility Pneumatic Cofferdam is
                permanently embedded in waterfront infrastructure. When
                flooding threatens, a single operator inflates the system —
                creating a watertight seal in under 16 minutes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiators.map((d, i) => (
                <FeatureCard
                  key={i}
                  icon={d.icon}
                  title={d.title}
                  description={d.description}
                />
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Competitive comparison */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-10">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Competitive Position
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                Ranked #1 across key performance categories
              </h2>
              <p className="mt-4 text-brand-slate text-base max-w-xl mx-auto">
                Independent GMU utility analysis comparing Valorlox against
                leading temporary flood barrier solutions.
              </p>
            </div>
            <ComparisonTable />
          </div>
        </section>
      </SectionReveal>

      {/* Use case teaser */}
      <SectionReveal>
        <section className="bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Applications
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                Built for the places that can&apos;t afford to flood
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((u, i) => (
                <FeatureCard
                  key={i}
                  icon={u.icon}
                  title={u.title}
                  description={u.description}
                  accent
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/use-cases"
                className="inline-flex items-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold px-7 py-3 rounded transition-colors text-sm"
              >
                View all use cases →
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

      <OriginStory />

      <CTASection
        headline="Partner with Valorlox"
        subhead="We are actively seeking municipal pilot partners, infrastructure operators, and investors who understand that climate resilience is not optional."
        ctaText="Start a Conversation"
        ctaHref="/partner"
        secondaryCtaText="Learn the Technology"
        secondaryCtaHref="/technology"
      />
    </>
  );
}
