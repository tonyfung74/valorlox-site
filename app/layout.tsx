import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valorlox.com"),
  title: "Valorlox | Intelligent Flood Protection Systems",
  description:
    "Valorlox deploys patented pneumatic cofferdam technology that protects communities from flooding in under 16 minutes — and disappears as functional public space when the threat passes.",
  openGraph: {
    type: "website",
    title: "Valorlox | Intelligent Flood Protection Systems",
    description:
      "Patented pneumatic cofferdam technology that protects communities from flooding in under 16 minutes — and disappears as functional public space when the threat passes.",
    images: ["/prototype-photo-1.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valorlox | Intelligent Flood Protection Systems",
    description:
      "Patented pneumatic cofferdam. Deploys in under 16 minutes. No heavy equipment required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-brand-slate">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
