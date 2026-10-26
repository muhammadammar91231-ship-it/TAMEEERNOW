import React from "react";
import Link from "next/link";
import { Hammer, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#07090C] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4AF37] text-slate-950">
                <Hammer className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-serif">
                Tameer<span className="text-[#D4AF37]">Now</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              “Renovate smarter. Live beautifully. Stay where you belong.” Professional turnkey
              renovation, structural remodeling, and bespoke interior architecture tailored for
              modern homes and executive apartments.
            </p>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                <a href="tel:+923256638995" className="hover:text-white transition">
                  +92 325 6638995
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#D4AF37]" />
                <a href="mailto:ammarahmer59@gmail.com" className="hover:text-white transition">
                  ammarahmer59@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>Primary Hub: Karachi, Pakistan (Serving Prime Residential Localities)</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#D4AF37] transition">About TameerNow</Link></li>
              <li><Link href="/services" className="hover:text-[#D4AF37] transition">All Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition">Book Free Consultation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition">Complete House Overhaul</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Apartment Makeovers</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Kitchen Redesign</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Bathroom Remodeling</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Porcelain & Wood Flooring</Link></li>
            </ul>
          </div>

          {/* Verification & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Transparency</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              All portfolio photos presented with conceptual tags are demonstrative design templates
              prior to verified client project photography uploads.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              © {new Date().getFullYear()} TameerNow. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
