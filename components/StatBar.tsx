"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "6×",
    label: "increase in US flood days since 1960",
  },
  {
    value: "<16 min",
    label: "full deployment — no crane, no crew",
  },
  {
    value: "50 yr",
    label: "design operational life",
  },
];

export default function StatBar() {
  return (
    <section className="bg-brand-cream border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-8 py-6 text-center first:pl-0 last:pr-0"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-brand-green tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-brand-slate text-sm font-medium leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
