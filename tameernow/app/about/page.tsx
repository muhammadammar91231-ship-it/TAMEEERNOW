import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About TameerNow | Our Renovation Philosophy & Vision",
  description:
    "Learn about TameerNow's mission to transform residential living spaces through architectural engineering, transparent BOQ pricing, and dedicated supervision.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0B0D10] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-20 lg:py-28 border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            About TameerNow
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-serif">
            “Renovate smarter. Live beautifully. <br />
            Stay where you belong.”
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300 leading-relaxed">
            We help homeowners transform their current residential properties into functional,
            modern spaces without the stress of moving.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="mx-auto max-w-6xl px-6 py-20 space-y-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white font-serif">
              Our Vision: Modernizing Urban Living
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Across Pakistani metropolitan centers like Karachi, older homes in mature neighborhoods
              often feature solid construction, high ceilings, and generous floor space. However,
              many have fallen behind modern standards for electrical layouts, open floor plans,
              hygienic kitchens, and waterproofing.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              TameerNow was founded to provide homeowners with an alternative to the high costs and
              disruption of moving. We combine structural engineering, modern interior design, and
              hands-on project management to deliver reliable, high-end renovations.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-xs font-bold text-slate-950 transition hover:bg-[#c5a028]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-96 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
              alt="TameerNow renovation craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pt-8 border-t border-white/10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 space-y-3">
            <ShieldCheck className="h-8 w-8 text-[#D4AF37]" />
            <h3 className="text-lg font-bold text-white">Full Transparency</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We provide itemized Bill of Quantities (BOQ) with clear material grades, labor
              costs, and project milestones.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 space-y-3">
            <HeartHandshake className="h-8 w-8 text-[#D4AF37]" />
            <h3 className="text-lg font-bold text-white">Client-Centered Design</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every detail—from electrical outlet placement to storage and lighting—is tailored to
              how your family lives.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 space-y-3">
            <CheckCircle2 className="h-8 w-8 text-[#D4AF37]" />
            <h3 className="text-lg font-bold text-white">Structural Integrity First</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We address the root causes of damp, plumbing leaks, and electrical loads before
              installing luxury surface finishes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
