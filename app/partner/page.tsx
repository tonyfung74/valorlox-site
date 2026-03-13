import type { Metadata } from "next";
import { Building, TrendingUp, Wrench, ExternalLink } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Partner With Us | Valorlox",
  description:
    "Partner with Valorlox — municipal pilot programs, investor opportunities, and manufacturing or research partnerships for climate-resilient flood protection.",
};

const tracks = [
  {
    icon: Building,
    title: "Municipality / Pilot Partner",
    description:
      "We are seeking coastal municipalities and waterfront infrastructure operators for our first pilot installations. Pilot partners receive preferred pricing, direct technical support from the GMU engineering team, and co-authorship credit on performance case studies.",
    ideal: [
      "Coastal cities with documented nuisance flooding",
      "Port authorities, marinas, and waterfront districts",
      "Transportation hubs with flood-vulnerable critical equipment",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investor",
    description:
      "Valorlox is actively raising its seed and Series A rounds to fund production prototype development, pilot installations, and regulatory certification. We are pursuing SBIR grants alongside private impact capital.",
    ideal: [
      "Climate tech and infrastructure impact investors",
      "SBIR / STTR government funding partners",
      "Family offices and municipal bond issuers focused on resilience",
    ],
  },
  {
    icon: Wrench,
    title: "Manufacturing / Research Partner",
    description:
      "We are evaluating manufacturing partners capable of producing the aluminum base structure and Hypalon airbag system at scale, as well as research institutions interested in co-developing next-generation materials and sensor integration.",
    ideal: [
      "Marine and waterproofing material manufacturers",
      "Aluminum fabrication and structural engineering firms",
      "University labs working on coastal resilience infrastructure",
    ],
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-light-green text-sm font-semibold uppercase tracking-widest">
              Partner With Valorlox
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5 leading-tight">
              We are looking for partners who understand that climate resilience
              is not optional
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Valorlox is in active commercialization. We are seeking
              municipalities for pilot installations, investors aligned with
              infrastructure resilience, and manufacturing partners ready to
              scale a patented product.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership tracks */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Partnership Tracks
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight">
                Three ways to work with us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tracks.map((track, i) => (
                <div
                  key={i}
                  className="bg-brand-cream border border-gray-200 rounded-2xl p-7 flex flex-col"
                >
                  <div className="w-11 h-11 bg-brand-green/10 rounded-lg flex items-center justify-center mb-5">
                    <track.icon size={22} className="text-brand-green" />
                  </div>
                  <h3 className="text-brand-dark font-extrabold text-base mb-3">
                    {track.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed mb-5 flex-1">
                    {track.description}
                  </p>
                  <div>
                    <p className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                      Ideal for
                    </p>
                    <ul className="space-y-1.5">
                      {track.ideal.map((item, j) => (
                        <li key={j} className="text-xs text-brand-slate flex items-start gap-1.5">
                          <span className="text-brand-green mt-0.5">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Investor brief links */}
      <SectionReveal>
        <section className="bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-8">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Documents
              </span>
              <h2 className="text-2xl font-extrabold text-brand-dark mt-3 tracking-tight">
                Learn more before reaching out
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm"
              >
                View Full Investor Brief
                <ExternalLink size={16} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-brand-slate text-brand-slate hover:border-brand-dark hover:text-brand-dark font-semibold px-7 py-3.5 rounded transition-colors text-sm"
              >
                Download Pitch Deck
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-center text-xs text-gray-400 mt-5">
              Documents hosted on Gamma. Open in a new tab.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* Contact form */}
      <SectionReveal>
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="mb-10">
              <span className="text-brand-green text-sm font-semibold uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 tracking-tight mb-3">
                Start a conversation
              </h2>
              <p className="text-brand-slate text-base leading-relaxed">
                Tell us about your site, your flooding challenge, or your
                investment thesis. We respond to all inquiries within 2 business
                days.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
