"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hammer, PhoneCall, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#997B1A] text-slate-950 shadow-md">
            <Hammer className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white font-serif">
              Tameer<span className="text-[#D4AF37]">Now</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase">
              Renovate Smarter
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition">
            Contact
          </Link>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+923256638995"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <PhoneCall className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>+92 325 6638995</span>
          </a>
          <Link
            href="/contact"
            className="hidden sm:inline-flex rounded-full bg-[#D4AF37] px-5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-[#c5a028] shadow-md"
          >
            Book Free Visit
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/5 md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-[#D4AF37]"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-[#D4AF37]"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-[#D4AF37]"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-[#D4AF37]"
          >
            Contact Us
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+923256638995"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 py-3 text-sm text-slate-200"
            >
              <PhoneCall className="h-4 w-4 text-[#D4AF37]" />
              <span>Call +92 325 6638995</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] py-3 text-sm font-semibold text-slate-950"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
