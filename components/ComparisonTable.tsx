"use client";

import { Check, X, Minus } from "lucide-react";
import { motion } from "framer-motion";

const rows = [
  {
    feature: "Permanent installation",
    valorlox: true,
    tigerdam: false,
    aquafence: false,
    scfb: "partial",
  },
  {
    feature: "No external storage needed",
    valorlox: true,
    tigerdam: false,
    aquafence: false,
    scfb: true,
  },
  {
    feature: "Aesthetic / doubles as walkway",
    valorlox: true,
    tigerdam: false,
    aquafence: false,
    scfb: false,
  },
  {
    feature: "No heavy equipment required",
    valorlox: true,
    tigerdam: false,
    aquafence: false,
    scfb: true,
  },
  {
    feature: "Single-operator deployment",
    valorlox: true,
    tigerdam: false,
    aquafence: false,
    scfb: "partial",
  },
  {
    feature: "50-year design life",
    valorlox: true,
    tigerdam: false,
    aquafence: false,
    scfb: false,
  },
  {
    feature: "Competitive cost",
    valorlox: true,
    tigerdam: "partial",
    aquafence: false,
    scfb: false,
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <Check size={18} className="text-brand-green" />
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <X size={18} className="text-red-400" />
      </div>
    );
  return (
    <div className="flex justify-center">
      <Minus size={18} className="text-gray-400" />
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm"
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand-dark text-white">
            <th className="text-left py-4 px-5 font-semibold">Capability</th>
            <th className="py-4 px-5 font-semibold text-brand-light-green">
              Valorlox
            </th>
            <th className="py-4 px-5 font-semibold text-white/70">Tigerdam</th>
            <th className="py-4 px-5 font-semibold text-white/70">
              Aquafence
            </th>
            <th className="py-4 px-5 font-semibold text-white/70">SCFB</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-gray-100 ${
                i % 2 === 0 ? "bg-white" : "bg-brand-cream/40"
              }`}
            >
              <td className="py-3.5 px-5 text-brand-slate font-medium">
                {row.feature}
              </td>
              <td className="py-3.5 px-5 bg-brand-green/5">
                <Cell value={row.valorlox} />
              </td>
              <td className="py-3.5 px-5">
                <Cell value={row.tigerdam} />
              </td>
              <td className="py-3.5 px-5">
                <Cell value={row.aquafence} />
              </td>
              <td className="py-3.5 px-5">
                <Cell value={row.scfb} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 px-5 py-3 bg-gray-50 border-t border-gray-100">
        Analysis based on GMU capstone competitive utility assessment. ― = partial or case-dependent.
      </p>
    </motion.div>
  );
}
