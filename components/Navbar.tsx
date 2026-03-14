"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/technology", label: "Technology" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/valorlox-logo.png"
            alt="Valorlox"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/partner"
            className="bg-brand-green hover:bg-brand-light-green text-white hover:text-brand-dark px-5 py-2 rounded text-sm font-semibold transition-colors"
          >
            Partner With Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-white text-sm font-medium border-b border-white/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/partner"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-brand-green hover:bg-brand-light-green text-white hover:text-brand-dark px-5 py-2 rounded text-sm font-semibold transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}
