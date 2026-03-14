import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/valorlox-logo.png"
              alt="Valorlox"
              width={60}
              height={60}
              className="h-16 w-auto mb-3"
            />
            <p className="text-sm leading-relaxed">
              Intelligent flood protection systems. Patented technology,
              permanently installed, invisible until needed.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Attribution */}
          <div>
            <p className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Origins
            </p>
            <p className="text-sm leading-relaxed">
              Technology developed at George Mason University. First company
              under Virginia&apos;s Lab-to-Launch commercialization initiative.
            </p>
            <p className="text-sm mt-3">US Patent Issued</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-center">
          © 2026 Valorlox LLC — Virginia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
