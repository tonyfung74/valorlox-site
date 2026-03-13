"use client";

import { motion } from "framer-motion";
import { Award, Building2, Microscope } from "lucide-react";

const pillars = [
  {
    icon: Microscope,
    title: "George Mason University",
    body: "The cofferdam originated as a patented GMU capstone engineering project under Dr. George Donohue — rigorous academic research translated into a commercial product.",
  },
  {
    icon: Award,
    title: "US Patent Issued",
    body: "The pneumatic cofferdam design is protected by a US patent, establishing Valorlox as the exclusive commercialization partner for this technology.",
  },
  {
    icon: Building2,
    title: "Virginia Lab-to-Launch",
    body: "Valorlox is the first company selected under Virginia's Lab-to-Launch initiative, a state program bridging university innovation and commercial markets.",
  },
];

export default function OriginStory() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-brand-light-green text-sm font-semibold uppercase tracking-widest">
            Credibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Built on rigorous science
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            This is not a startup idea. It is a decade of university-grade
            engineering, independently validated, patented, and now ready for
            commercialization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-7"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-green/20 flex items-center justify-center mb-5">
                <pillar.icon size={22} className="text-brand-light-green" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                {pillar.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
