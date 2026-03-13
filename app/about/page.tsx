import type { Metadata } from "next";
import { MapPin, Microscope, Building2, Award } from "lucide-react";
import CTASection from "@/components/CTASection";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "About | Valorlox — Climate Resilience Infrastructure",
  description:
    "Valorlox is a Virginia-based climate resilience startup commercializing patented GMU flood barrier technology. First company under Virginia's Lab-to-Launch initiative.",
};

const milestones = [
  {
    year: "2020–22",
    label: "GMU Capstone Research",
    detail:
      "Dr. George Donohue leads GMU engineering capstone team in developing and testing the Dynamic Low Visibility Pneumatic Cofferdam system. Prototype testing validates inflation speed, watertight seal, and structural performance.",
  },
  {
    year: "2023",
    label: "US Patent Issued",
    detail:
      "George Mason University receives US patent for the pneumatic cofferdam design, covering core system architecture, deployment mechanism, and material specifications.",
  },
  {
    year: "2024",
    label: "Lab-to-Launch Selection",
    detail:
      "Valorlox LLC is selected as the first company under Virginia's Lab-to-Launch commercialization initiative, receiving an exclusive license to commercialize the GMU patent.",
  },
  {
    year: "2025–26",
    label: "Prototype Development & Pilot Outreach",
    detail:
      "Active development of production-ready prototype. Engaging municipal governments, coastal infrastructure operators, and impact investors for pilot installation partnerships.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-light-green text-sm font-semibold uppercase tracking-widest">
              About Valorlox
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5 leading-tight">
              Climate resilience infrastructure, built to last 50 years
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Valorlox LLC was founded to commercialize a patented George Mason
              University technology that solves one of coastal America&apos;s most
              persistent and growing problems: the lack of permanent, always-ready
              flood protection for the places that need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                  Our Mission
                </span>
                <h2 className="text-3xl font-extrabold text-brand-dark mt-3 mb-6 tracking-tight leading-tight">
                  Protecting communities that can&apos;t afford to wait for a perfect solution
                </h2>
                <div className="space-y-4 text-brand-slate leading-relaxed">
                  <p>
                    Coastal flooding is not a future risk — it is a present
                    reality for thousands of US communities. Nuisance flood
                    days have increased sixfold in the past 50 years, and
                    existing flood barrier technology has not kept pace.
                  </p>
                  <p>
                    Our mission is to make permanent, aesthetically integrated
                    flood protection accessible to the municipalities, port
                    authorities, and infrastructure operators who are most
                    vulnerable — at a price point that works without federal
                    emergency grants.
                  </p>
                  <p>
                    We are a serious infrastructure company. Our technology is
                    patented, our data is from a university engineering lab, and
                    our standards are set by the people who will live and work
                    alongside our installations for the next 50 years.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: MapPin,
                    label: "Headquarters",
                    value: "Virginia, USA",
                  },
                  {
                    icon: Building2,
                    label: "Corporate structure",
                    value: "Virginia LLC · Delaware C Corp",
                  },
                  {
                    icon: Award,
                    label: "Lab-to-Launch",
                    value: "First company selected",
                  },
                  {
                    icon: Microscope,
                    label: "Technology origin",
                    value: "George Mason University",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-brand-cream border border-gray-200 rounded-xl p-5"
                  >
                    <item.icon size={20} className="text-brand-green mb-3" />
                    <p className="text-brand-slate text-xs font-semibold uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-brand-dark font-bold text-sm">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Origin story */}
      <SectionReveal>
        <section className="bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-14">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Origin Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                From a university lab to a commercial product
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-green/20 hidden md:block" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={i} className="md:pl-16 relative">
                    <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 bg-brand-green rounded-full items-center justify-center text-white text-xs font-bold tabular-nums">
                      {m.year.slice(-2)}
                    </div>
                    <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-1">
                      {m.year}
                    </p>
                    <h3 className="text-brand-dark font-bold text-base mb-2">
                      {m.label}
                    </h3>
                    <p className="text-brand-slate text-sm leading-relaxed max-w-2xl">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Team */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                The team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Founder */}
              <div className="bg-brand-cream rounded-2xl p-8">
                <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green font-extrabold text-2xl mb-5">
                  AF
                </div>
                <h3 className="text-brand-dark font-extrabold text-lg mb-0.5">
                  Anthony Fung
                </h3>
                <p className="text-brand-green text-sm font-semibold mb-4">
                  Founder & CEO
                </p>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Anthony founded Valorlox to bridge the gap between university
                  engineering research and the communities that need proven
                  climate resilience infrastructure. He leads commercialization
                  strategy, municipal partnerships, and investor relations for
                  Valorlox LLC.
                </p>
              </div>

              {/* Technical Lead */}
              <div className="bg-brand-cream rounded-2xl p-8">
                <div className="w-16 h-16 bg-brand-water/20 rounded-full flex items-center justify-center text-brand-water font-extrabold text-2xl mb-5">
                  GD
                </div>
                <h3 className="text-brand-dark font-extrabold text-lg mb-0.5">
                  Dr. George Donohue
                </h3>
                <p className="text-brand-water text-sm font-semibold mb-4">
                  GMU Faculty Advisor & Technical Lead
                </p>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Dr. Donohue led the original George Mason University capstone
                  project that produced the patented pneumatic cofferdam design.
                  He brings decades of engineering research experience and serves
                  as the technical authority for the Valorlox system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTASection
        headline="Join us in building climate-resilient communities"
        subhead="Whether you are a municipal engineer, infrastructure operator, or impact investor, we want to hear from you."
        ctaText="Get In Touch"
        ctaHref="/partner"
      />
    </>
  );
}
