import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Renovation Services | TameerNow",
  description:
    "Explore our 8 core turnkey renovation services: complete house remodels, apartments, kitchens, spa bathrooms, porcelain flooring, and custom interiors.",
};

const DETAILED_SERVICES = [
  {
    id: "complete-house-renovation",
    title: "Complete House Renovation",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    desc: "A total overhaul for aging standalone homes. We optimize layout flow, reinforce load-bearing openings, replace aged utility piping and wiring, and deliver a modern finish across the entire property.",
    bullets: [
      "Removal of non-structural walls for open-plan layouts",
      "Complete electrical re-wiring and load balancing",
      "Termite proofing and structural damp barrier injections",
      "Exterior facade treatments and modern window replacements",
    ],
  },
  {
    id: "apartment-makeovers",
    title: "Apartment Makeovers",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop",
    desc: "Turnkey urban apartment renovations focused on maximizing light, spatial efficiency, and acoustic separation while coordinating with building management rules.",
    bullets: [
      "Custom space-saving joinery and built-in storage",
      "Acoustic subfloor underlayment to reduce noise transmission",
      "Compact open-plan kitchen integration",
      "Concealed air-conditioning and ducting solutions",
    ],
  },
  {
    id: "kitchen-transformation",
    title: "Kitchen Transformation",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",
    desc: "Ergonomic, modern kitchens built for durability. Featuring moisture-resistant cabinetry, scratch-resistant quartz counters, and smart storage systems.",
    bullets: [
      "High-pressure laminate (HPL) & UV matte acrylic cabinets",
      "Soft-close Blum hinges and full-extension drawer runners",
      "Dedicated pantry pull-outs and corner carousel units",
      "Heavy-duty ducted exhaust systems designed for high-heat cooking",
    ],
  },
  {
    id: "bathroom-renovation",
    title: "Bathroom Renovation",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop",
    desc: "Transform outdated, leaking bathrooms into clean, modern spa wet-rooms with durable waterproofing and contemporary fixtures.",
    bullets: [
      "Elastomeric chemical waterproofing with 24-hr ponding test",
      "Grohe/Kohler concealed cisterns and wall-hung bowls",
      "Frameless 10mm tempered glass shower screens",
      "Large-format porcelain wall and anti-slip floor tiles",
    ],
  },
  {
    id: "flooring-renovation",
    title: "Flooring Renovation",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000&auto=format&fit=crop",
    desc: "Upgrade worn flooring with laser-leveled porcelain slabs, imported Italian marble, or waterproof SPC engineered planks.",
    bullets: [
      "Precision sub-base leveling and moisture testing",
      "60x120cm and 80x160cm glazed vitrified porcelain tiles",
      "Diamond pad marble polishing and protective sealing",
      "Seamless brass or aluminum transition profiles",
    ],
  },
  {
    id: "living-room-makeovers",
    title: "Living Room Makeovers",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    desc: "Elevate your family gatherings and entertaining spaces with bespoke media accent walls, fluted wall treatments, and balanced lighting zones.",
    bullets: [
      "Book-matched porcelain and wood veneer media feature walls",
      "Architectural gypsum false ceilings with concealed warm LEDs",
      "Concealed cable raceways for clean TV installations",
      "Optimized furniture layouts and traffic flows",
    ],
  },
  {
    id: "bedroom-redesign",
    title: "Bedroom Redesign",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop",
    desc: "Create a quiet, restful master retreat with custom floor-to-ceiling wardrobes, acoustic wall paneling, and warm circadian lighting.",
    bullets: [
      "Tinted glass and aluminum profile walk-in wardrobes",
      "Acoustic upholstered and fluted wood headboard walls",
      "Custom bedside reading lights and convenient power switches",
      "Blackout curtain coving integration",
    ],
  },
  {
    id: "custom-interior-design",
    title: "Custom Interior Design & Joinery",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    desc: "Full interior design service that takes your ideas from 3D models to completed rooms with matching furniture, finishes, and lighting.",
    bullets: [
      "Photo-realistic 3D visualizations before procurement begins",
      "Custom dining tables, credenzas, and consoles",
      "Comprehensive color palettes and tactile material boards",
      "Turnkey site execution and placement",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0D10] text-slate-100 min-h-screen">
      <section className="relative px-6 py-20 lg:py-28 border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Full Scope of Expertise
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-serif">
            Architectural Renovation Services
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            From single-room remodels to complete home transformations, our turnkey approach
            delivers quality craftsmanship and transparent pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 space-y-24">
        {DETAILED_SERVICES.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={srv.id}
              id={srv.id}
              className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${
                isEven ? "" : "lg:grid-flow-dense"
              }`}
            >
              <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  Service 0{idx + 1}
                </span>
                <h2 className="text-3xl font-bold text-white font-serif">{srv.title}</h2>
                <p className="text-sm leading-relaxed text-slate-300">{srv.desc}</p>
                <div className="space-y-2.5">
                  {srv.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#D4AF37] hover:text-slate-950"
                  >
                    <span>Request Estimate for {srv.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div
                className={`relative h-80 sm:h-96 rounded-3xl border border-white/10 overflow-hidden shadow-2xl ${
                  isEven ? "" : "lg:col-start-1"
                }`}
              >
                <Image src={srv.img} alt={srv.title} fill className="object-cover" />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
