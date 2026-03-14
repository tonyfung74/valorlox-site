import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Layers, Wind, ChevronRight, FileText } from "lucide-react";
import CTASection from "@/components/CTASection";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Technology | Valorlox — Pneumatic Cofferdam System",
  description:
    "How the Valorlox pneumatic cofferdam works: permanent installation, operator-controlled inflation, Hypalon airbag seal, and Brazilian Ipe wood walkway surface.",
};

const components = [
  {
    icon: Layers,
    name: "Aluminum structural base",
    detail:
      "Corrosion-resistant aluminum frame permanently installed flush with the waterfront surface. Lightweight yet rated for heavy public use.",
  },
  {
    icon: Shield,
    name: "Hypalon-coated airbags",
    detail:
      "Rated to 2,500 PSI maximum pressure. Corrosion and abrasion resistant. Airbag pressure exceeds simulated water pressure by 5× during flood conditions.",
  },
  {
    icon: Layers,
    name: "Brazilian Ipe wood deck",
    detail:
      "Durable, visually appealing hardwood surface. When deflated, the system is a walkable public surface bearing a minimum of 300 lb/ft load.",
  },
  {
    icon: Wind,
    name: "Modular airbag chambers",
    detail:
      "One chamber per 5 linear feet, each independently inflatable. Scalable to any installation length. Single pump per chamber for the operational model.",
  },
];

const steps = [
  {
    num: "01",
    title: "Flood alert issued",
    body: "The operator receives a flood warning — whether NOAA-issued or from local tide monitoring. No crew needs to be assembled. No equipment needs to be transported.",
  },
  {
    num: "02",
    title: "Air pump activation",
    body: "One operator activates the air pump system connected to the Hypalon airbag chambers. Each chamber is inflated independently, creating a progressive seal.",
  },
  {
    num: "03",
    title: "Airbags rise and seal",
    body: "The pneumatic airbags rise from the aluminum base and press against the adjacent structure — building facade, seawall, or abutment — creating a watertight seal.",
  },
  {
    num: "04",
    title: "Full deployment complete",
    body: "Operational model deploys in under 16 minutes for a 120 ft³ volume system. Prototype test units averaged approximately 42 seconds per chamber.",
  },
];

const perfData = [
  { metric: "Deployment time (operational model, 120 ft³)", value: "< 16 minutes" },
  { metric: "Prototype inflation speed (average)", value: "~42 seconds" },
  { metric: "Airbag pressure vs. water pressure", value: "5× safety margin" },
  { metric: "Airbag max rated pressure", value: "2,500 PSI" },
  { metric: "Walkway load capacity (passive state)", value: "≥ 300 lb/ft" },
  { metric: "Design operational life", value: "50 years" },
  { metric: "Operator requirement", value: "1 person" },
  { metric: "Heavy equipment required", value: "None" },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-light-green text-sm font-semibold uppercase tracking-widest">
              The Technology
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-6 leading-tight">
              Permanent protection. Instant deployment. Zero footprint.
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              The GMU Dynamic Low Visibility Pneumatic Cofferdam is a
              permanently installed flood barrier system. It lives beneath
              your waterfront — invisible and walkable — until the moment it&apos;s
              needed.
            </p>
          </div>
        </div>
      </section>

      {/* Deployed vs passive */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-brand-dark text-white rounded-2xl overflow-hidden mb-4 aspect-video">
                  <Image
                    src="/prototype-photo-1.jpeg"
                    alt="Valorlox pneumatic cofferdam deployed"
                    width={500}
                    height={330}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-brand-dark text-white rounded-2xl p-8">
                  <div className="text-brand-light-green text-xs font-bold uppercase tracking-widest mb-4">
                    Deployed State
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Flood barrier active</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Hypalon airbags inflate and press against the adjacent
                  structure. The watertight seal prevents storm surge and
                  nuisance flood water from reaching protected infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-brand-light-green mt-0.5 shrink-0" />
                    Airbag pressure exceeds water pressure by 5×
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-brand-light-green mt-0.5 shrink-0" />
                    Full deployment in under 16 minutes
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-brand-light-green mt-0.5 shrink-0" />
                    Available 24/7, operator-controlled
                  </li>
                </ul>
                </div>
              </div>
              <div>
                <div className="bg-brand-cream rounded-2xl overflow-hidden mb-4 aspect-video">
                  <Image
                    src="/prototype-photo-3.jpeg"
                    alt="Valorlox system in passive state as walkway"
                    width={500}
                    height={330}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-brand-cream rounded-2xl p-8">
                  <div className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">
                    Passive State
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">
                    Walkable public space
                  </h3>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">
                  When not deployed, the Ipe wood deck sits flush with the
                  surrounding walkway. Pedestrians, cyclists, and vehicles
                  move freely over it. The system is completely invisible.
                </p>
                <ul className="space-y-2 text-sm text-brand-slate">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-brand-green mt-0.5 shrink-0" />
                    Minimum 300 lb/ft load capacity
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-brand-green mt-0.5 shrink-0" />
                    No visual intrusion or storage required
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-brand-green mt-0.5 shrink-0" />
                    Brazilian Ipe wood — durable and attractive
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* System components */}
      <SectionReveal>
        <section className="bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                System Components
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                Engineering-grade materials throughout
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {components.map((c, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <c.icon size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm mb-1">
                      {c.name}
                    </h3>
                    <p className="text-brand-slate text-sm leading-relaxed">
                      {c.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Deployment sequence */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Deployment Sequence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                From alert to protected — in four steps
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="text-5xl font-extrabold text-brand-green/15 mb-3 tabular-nums">
                    {step.num}
                  </div>
                  <h3 className="text-brand-dark font-bold text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Performance data */}
      <SectionReveal>
        <section className="bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-10">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Performance Data
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                Prototype-validated specifications
              </h2>
              <p className="mt-3 text-brand-slate text-sm max-w-xl mx-auto">
                Data sourced from GMU capstone engineering report and prototype
                testing. Operational model specifications calculated for 120 ft³
                volume system.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <tbody>
                  {perfData.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-100 last:border-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-brand-cream/30"
                      }`}
                    >
                      <td className="py-3.5 px-6 text-brand-slate">
                        {row.metric}
                      </td>
                      <td className="py-3.5 px-6 text-brand-dark font-bold tabular-nums text-right">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Patent callout */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="border-l-4 border-brand-green bg-brand-cream rounded-r-xl p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={22} className="text-brand-green" />
                  <span className="text-brand-green text-sm font-bold uppercase tracking-widest">
                    US Patent Issued
                  </span>
                </div>
                <h3 className="text-brand-dark font-extrabold text-xl mb-2">
                  GMU Dynamic Low Visibility Pneumatic Cofferdam
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Patent held by George Mason University. Valorlox LLC is the
                  exclusive commercial licensee under Virginia&apos;s Lab-to-Launch
                  initiative.
                </p>
                <p className="mt-4 text-brand-slate text-sm">
                  <strong>Technical Lead:</strong> Dr. George Donohue, GMU
                  Faculty Advisor and research lead for the original capstone
                  project.
                </p>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold px-5 py-2.5 rounded transition-colors text-sm"
                >
                  <FileText size={16} />
                  View GMU Research Report
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-300 text-brand-slate hover:border-brand-slate font-semibold px-5 py-2.5 rounded transition-colors text-sm"
                >
                  See Commercialization Roadmap →
                </a>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTASection
        headline="Ready to protect your waterfront?"
        subhead="Whether you manage a municipal waterfront, coastal facility, or critical infrastructure, we want to understand your flooding challenge."
        ctaText="Talk to the Team"
        ctaHref="/partner"
      />
    </>
  );
}
