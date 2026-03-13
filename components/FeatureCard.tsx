import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = false,
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-lg p-6 border ${
        accent
          ? "bg-brand-dark text-white border-brand-green"
          : "bg-white text-brand-slate border-gray-200"
      }`}
    >
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${
          accent ? "bg-brand-green/20" : "bg-brand-cream"
        }`}
      >
        <Icon
          size={22}
          className={accent ? "text-brand-light-green" : "text-brand-green"}
        />
      </div>
      <h3
        className={`text-base font-bold mb-2 ${
          accent ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          accent ? "text-white/70" : "text-brand-slate"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
