import type { Metadata } from "next";
import Image from "next/image";
import { Building, Zap, Waves, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Use Cases | Valorlox Flood Protection",
  description:
    "How the Valorlox pneumatic cofferdam protects municipal waterfronts, airports, utilities, DoD facilities, and coastal communities from flooding.",
};

const cases = [
  {
    icon: Building,
    category: "Municipal Waterfronts",
    title: "Boardwalks, marinas, and downtown flood zones",
    problem:
      "Coastal municipalities lose millions annually to nuisance flooding — not from catastrophic storms, but from routine tidal flooding that closes roads, damages storefronts, and deters tourism. Traditional barriers require storage, equipment, and visual disruption that downtowns cannot tolerate.",
    solution:
      "The Valorlox system installs flush with existing waterfront infrastructure. Visitors walk over it daily without noticing it. When tide gauges indicate a flooding event, one city employee deploys the system from a control panel before the water arrives.",
    highlights: [
      "No visual impact on waterfront aesthetics",
      "One operator — no emergency crew required",
      "Compatible with existing boardwalk and dock surfaces",
      "Scalable to any linear footage",
    ],
    image: "/prototype-photo-2.jpeg",
    imageAlt: "Valorlox cofferdam deployed at waterfront",
  },
  {
    icon: Building,
    category: "Residential Protection",
    title: "Beachfront homes, apartments, and residential communities",
    problem:
      "Homeowners and residents in coastal areas face recurring flooding threats that damage property, disrupt lives, and increase insurance costs. Traditional solutions like permanent seawalls alter neighborhood character and are prohibitively expensive for individual properties or small residential blocks.",
    solution:
      "The Valorlox system can be installed around individual homes, apartment complexes, or residential blocks to provide rapid, invisible flood protection. When deployed, it safeguards family homes and possessions. When not in use, it functions as a seamless part of the landscape.",
    highlights: [
      "Protects homes without altering property aesthetics",
      "Rapid deployment protects families before storm surge arrival",
      "Modular design suits individual homes or multi-unit buildings",
      "Reduces flood insurance premiums through proven protection",
    ],
    image: "/prototype-photo-1.jpeg",
    imageAlt: "Valorlox barrier protecting residential area",
  },
  {
    icon: Zap,
    category: "Utility & DoD Facilities",
    title: "Power substations, data centers, and coastal military installations",
    problem:
      "A single flooded electrical substation can knock out power to thousands of residents. Coastal DoD installations face similar exposure — critical infrastructure that cannot tolerate even brief inundation. Traditional flood barriers require significant setup time that may not be available when rapid surge events occur.",
    solution:
      "The Valorlox system&apos;s 24/7 availability and sub-16-minute deployment window means critical infrastructure can be protected even against fast-moving coastal storms. Because it requires no external storage or equipment, it is compatible with secure-perimeter installations.",
    highlights: [
      "Sub-16-minute deployment — faster than most storm surge windows",
      "No external storage or equipment — compatible with secured perimeters",
      "50-year design life aligns with infrastructure investment cycles",
      "Suitable for FEMA Hazard Mitigation Grant Program funding",
    ],
    image: "/prototype-photo-4.jpeg",
    imageAlt: "Valorlox protecting critical infrastructure",
  },
  {
    icon: Waves,
    category: "Coastal Communities",
    title: "Nuisance flooding, king tides, and high-water events",
    problem:
      "Residents and business owners in low-lying coastal communities experience chronic, predictable flooding that isn't dramatic enough to justify expensive one-time infrastructure investments — but is frequent enough to cause ongoing economic harm.",
    solution:
      "The Valorlox system&apos;s modular design allows municipalities to protect high-value commercial or residential blocks at a fraction of the cost of seawalls or levees. Because the system integrates into existing walkways, it does not require new right-of-way or disrupt community use of the waterfront.",
    highlights: [
      "Estimated cost: ~$3,800–$5,700 per 10 linear feet (pre-production estimate)",
      "Significantly lower lifecycle cost than temporary barrier alternatives",
      "Walkable surface — no loss of public access when not deployed",
      "Eligible for CDBG-DR, HMGP, and resilience bond financing",
    ],
    image: "/prototype-photo-3.jpeg",
    imageAlt: "Valorlox protecting coastal community infrastructure",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-light-green text-sm font-semibold uppercase tracking-widest">
              Applications
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5 leading-tight">
              Built for the places that can&apos;t afford to flood
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From municipal waterfronts to FAA-critical airport equipment, the
              Valorlox system is designed for the infrastructure operators who
              need protection that is always ready — not assembled after the
              storm warning.
            </p>
          </div>
        </div>
      </section>

      {cases.map((c, i) => (
        <SectionReveal key={i}>
          <section className={i % 2 === 0 ? "bg-white" : "bg-brand-cream"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-brand-green/10 rounded-lg flex items-center justify-center">
                      <c.icon size={18} className="text-brand-green" />
                    </div>
                    <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                      {c.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-5 leading-tight tracking-tight">
                    {c.title}
                  </h2>
                  <div className="space-y-4 text-brand-slate text-base leading-relaxed mb-6">
                    <div>
                      <p className="font-semibold text-brand-dark text-sm uppercase tracking-wider mb-2">
                        The Problem
                      </p>
                      <p>{c.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm uppercase tracking-wider mb-2">
                        How Valorlox Solves It
                      </p>
                      <p>{c.solution}</p>
                    </div>
                  </div>
                  <div className="bg-brand-dark rounded-2xl p-8 text-white">
                    <p className="text-brand-light-green text-xs font-bold uppercase tracking-widest mb-5">
                      Key Points
                    </p>
                    <ul className="space-y-4">
                      {c.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                          <ChevronRight
                            size={16}
                            className="text-brand-light-green mt-0.5 shrink-0"
                          />
                          <span className="text-white/80">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionReveal>
      ))}

      <CTASection
        headline="Have a specific flooding challenge?"
        subhead="Tell us about your site — we'll help you understand how the Valorlox system can protect it."
        ctaText="Start a Conversation"
        ctaHref="/partner"
        secondaryCtaText="Explore the Technology"
        secondaryCtaHref="/technology"
      />
    </>
  );
}
