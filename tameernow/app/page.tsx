import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  Compass,
  PhoneCall,
  Layers,
  Home,
  Building,
  PaintBucket,
  Maximize2,
  BedDouble,
  Sofa,
  Bath,
  HelpCircle
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata = {
  title: "TameerNow | Luxury Home Renovation, Remodeling & Interior Design",
  description:
    "Transform your existing home into a modern architectural sanctuary with TameerNow. Specializing in complete home overhauls, custom kitchens, luxury baths, and apartment transformations.",
};

const SERVICES_DATA = [
  {
    title: "Complete House Renovation",
    icon: Home,
    tagline: "Turnkey Structural & Aesthetic Overhaul",
    desc: "From demolishing restrictive partition walls to modern electrical re-wiring and luxury finishes, we renew your entire residential property end-to-end.",
  },
  {
    title: "Apartment Makeovers",
    icon: Building,
    tagline: "Maximizing Space & Ambient Light",
    desc: "Optimized urban apartment remodeling balancing spatial acoustic insulation, built-in storage, and open-plan kitchen integration.",
  },
  {
    title: "Flooring Renovation",
    icon: Layers,
    tagline: "Imported Porcelain, Hardwood & Marble",
    desc: "Precision floor leveling, sub-floor moisture barrier installation, premium Italian marble polishing, and scratch-resistant SPC/engineered wood.",
  },
  {
    title: "Kitchen Transformation",
    icon: PaintBucket,
    tagline: "Ergonomic Layouts & Chef-Grade Finishes",
    desc: "Custom acrylic, UV, or tactile matte cabinetry with soft-close Blum hardware, quartz island counters, concealed ducted hoods, and dedicated pantries.",
  },
  {
    title: "Bedroom Redesign",
    icon: BedDouble,
    tagline: "Quiet Sanctuary & Tailored Wardrobes",
    desc: "Acoustically insulated master bedrooms featuring concealed architectural coving, walk-in closets, fluted paneling, and warm circadian lighting.",
  },
  {
    title: "Living Room Makeovers",
    icon: Sofa,
    tagline: "The Focal Point of Family & Entertaining",
    desc: "Media console accent walls with book-matched porcelain slabs, integrated ambient LED channels, and optimized furniture seating flows.",
  },
  {
    title: "Bathroom Renovation",
    icon: Bath,
    tagline: "Hotel-Grade Spa & Wet-Room Engineering",
    desc: "Complete waterproofing guarantees, concealed plumbing valves, frameless tempered glass showers, wall-hung basins, and anti-slip textures.",
  },
  {
    title: "Custom Interior Design",
    icon: Maximize2,
    tagline: "Bespoke Joinery, False Ceilings & Lighting",
    desc: "Holistic 3D architectural renders turned into real spaces, including bespoke gypsum ceiling designs, custom credenzas, and signature textures.",
  },
];

const FAQS = [
  {
    q: "What renovation services does TameerNow offer?",
    a: "TameerNow provides comprehensive turnkey residential renovation services. This includes complete house restructuring, apartment interior makeovers, kitchen remodeling, bathroom waterproofing and spa fittings, premium floor laying (porcelain, SPC, and marble), false ceiling installations, concealed electrical/plumbing renewals, and custom architectural joinery.",
  },
  {
    q: "How can I book a free consultation?",
    a: "You can book a free on-site or virtual consultation by filling out the booking form on this page, calling our project advisory team directly at +92 325 6638995, or reaching out via WhatsApp. We will review your property scope and schedule an engineer/designer visit.",
  },
  {
    q: "Can I renovate only one room or just my kitchen/bathroom?",
    a: "Yes. While we execute full-house transformations, we also handle single-room projects such as modern kitchen overhauls, master bathroom renovations, or open-plan living room reconfigurations with dedicated project managers.",
  },
  {
    q: "How do you handle project pricing and budget planning?",
    a: "We believe in transparent, itemized Bill of Quantities (BOQ). After an initial site assessment and scope definition, we present transparent material tiers (Premium, Executive, Luxury) with clear labor, material, and timeline breakdowns to prevent cost overruns.",
  },
  {
    q: "Can I customize the interior design and materials according to my preference?",
    a: "Every project is bespoke. You can choose specific porcelain tiles, laminate finishes, countertop quartz slabs, sanitaries, and paint finishes. Our designers provide material palettes, 3D visualizations, and tactile samples before procurement begins.",
  },
  {
    q: "How long does a typical renovation project take?",
    a: "Timelines depend on scope. A targeted bathroom or kitchen makeover typically requires 2 to 3 weeks. A complete full-house or executive apartment renovation ranges from 6 to 12 weeks. We set contractual completion dates with weekly milestones.",
  },
  {
    q: "Which locations does TameerNow serve?",
    a: "We are headquartered in Pakistan with primary operations serving major residential localities across Karachi (including DHA, Clifton, PECHS, Gulshan-e-Iqbal, Malir Cantt, and Bahria Town). For large-scale projects, we also evaluate engagements in Islamabad and Lahore.",
  },
  {
    q: "How do you ensure waterproofing and structural safety?",
    a: "We employ multi-layer elastomeric waterproofing membranes and chemical seals for all wet areas before tiling. Wall alterations undergo load-bearing verification to ensure structural columns and beams remain untouched and safe.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#0B0D10] text-slate-100 selection:bg-[#D4AF37] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/10 px-6 py-20 lg:py-28">
        {/* Subtle Ambient Background */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Turnkey Home Renovation & Remodeling</span>
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl font-serif">
            Renovate smarter. Live beautifully. <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#B38F24] bg-clip-text text-transparent">
              Stay where you belong.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg sm:leading-relaxed">
            Relocating is stressful, disruptive, and costly. TameerNow unlocks the hidden potential
            of your current property—re-engineering outdated layouts, kitchens, and living rooms
            into bespoke, modern architectural spaces.
          </p>

          {/* Primary CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-8 py-4 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-[#c5a028] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Explore Our Services
            </Link>

            <a
              href="https://wa.me/923256638995?text=Hello%20TameerNow!%20I%20am%20interested%20in%20a%20renovation%20estimate."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
            >
              <PhoneCall className="h-4 w-4" />
              <span>WhatsApp: +92 325 6638995</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4 text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-xs text-slate-300">Contractual Timelines</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-xs text-slate-300">Transparent Itemized BOQ</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-xs text-slate-300">Zero Hidden Surcharges</span>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-xs text-slate-300">Turnkey Project Supervision</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BEFORE-AND-AFTER TRANSFORMATION GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="mb-12 text-center md:text-left md:flex md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Proven Spatial Metamorphosis
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Visualizing the Potential of Your Home
            </h2>
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-md">
            Slide horizontally on the comparison cards below to inspect how old layouts, worn
            finishes, and dark rooms transform into modern living spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Sample 1: Living Area */}
          <BeforeAfterSlider
            category="Living Room Transformation"
            title="Dark 90s Layout to Light-Filled Modern Minimalist"
            description="Replaced restrictive internal brick partitions with structural lintels, installed 60x120cm porcelain slab flooring, warm ambient cove lighting, and hidden AC piping."
            beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
          />

          {/* Sample 2: Kitchen */}
          <BeforeAfterSlider
            category="Kitchen Remodeling"
            title="Dated Wooden Cabinets to Open Quartz Chef's Hub"
            description="Eliminated peeling laminate for sleek handleless matte acrylic cabinetry, custom quartz waterfall island, commercial gas range integration, and ducted ventilation."
            beforeImage="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop"
          />

          {/* Sample 3: Master Bathroom */}
          <BeforeAfterSlider
            category="Spa Bathroom Renovation"
            title="Damp & Cramped to Walk-in Rainfall Wetroom"
            description="Full chemical damp proofing, recessed thermostatic mixers, floating vanity with under-glow, and large format anti-slip floor-to-ceiling tiling."
            beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop"
          />

          {/* Sample 4: Master Suite */}
          <BeforeAfterSlider
            category="Master Bedroom Redesign"
            title="Cluttered Room to Serene Acoustic Master Suite"
            description="Integrated floor-to-ceiling tinted glass wardrobes, sound-insulating acoustic headboard wall panels, and bespoke recessed lighting zones."
            beforeImage="https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?q=80&w=1200&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
        <p className="mt-4 text-center text-xs text-slate-500 italic">
          *Note: Displayed images are high-fidelity conceptual transformation templates. Authentic verified project photo sets are updated as client releases are authorized.
        </p>
      </section>

      {/* 3. EIGHT SERVICES BREAKDOWN */}
      <section className="border-t border-white/10 bg-slate-950/50 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Our Comprehensive Services
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Engineering Every Detail of Your Home
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Whether you need to remodel a single master bathroom or execute a complete
              turnkey overhaul of an entire family bungalow, we bring architectural precision.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_DATA.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-slate-900/90 hover:shadow-xl"
                >
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#D4AF37] border border-white/10 transition-colors group-hover:bg-[#D4AF37] group-hover:text-slate-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                      {srv.tagline}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-white">{srv.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{srv.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] transition group-hover:underline"
                    >
                      <span>Inquire for this service</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ABOUT TAMEERNOW / PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28 border-t border-white/10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Our Philosophy & Story
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Why Relocate When You Can Reimagine?
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              In high-density metropolitan markets like Karachi and other major Pakistani cities,
              relocating entails immense friction: stamp duties, real estate brokerage fees, changing
              school districts, and losing the community connections built over decades.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              <strong className="text-white">TameerNow was founded on a simple insight:</strong>{" "}
              Your existing address often has superior structural bones, generous ceiling heights,
              and prime geographic positioning. By upgrading dated wiring, eliminating damp, and
              introducing open-concept interior architecture, we give your home another 30 years of
              modern life without the upheaval of moving.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-white">Our 4 Pillars of Delivery:</div>
              <p>• Functionality: Eliminating dead corners and creating ergonomic storage.</p>
              <p>• Aesthetics: Timeless materials like warm woods, metals, and porcelain.</p>
              <p>• Durability: Industrial-grade waterproofing, anti-termite and moisture barriers.</p>
              <p>• Cost Stewardship: Detailed estimates before any hammer strikes a brick.</p>
            </div>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:underline"
              >
                <span>Read our full organizational ethos</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-96 sm:h-[450px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Architectural renovation execution by TameerNow"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-black/60 p-4 backdrop-blur-md">
              <p className="text-xs font-medium text-white">
                “TameerNow bridges the gap between raw construction labor and high-end architectural design.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE TAMEERNOW */}
      <section className="border-t border-white/10 bg-slate-950/60 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              The TameerNow Advantage
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Professional Turnkey Contracting vs. Disjointed Masonry
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Typical home remodeling in Pakistan suffers from delayed masons, unaccounted costs,
              and zero accountability. Here is how we redefine the experience:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Contractual Itemized Estimates</h3>
              <p className="text-xs leading-relaxed text-slate-400">
                You receive a transparent Bill of Quantities outlining material brands, tile
                specifications, plumbing pipe grades, and labor allocations. No mid-project surprises.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Dedicated On-Site Project Lead</h3>
              <p className="text-xs leading-relaxed text-slate-400">
                You never have to haggle with carpenters, electricians, or plumbers. Our project
                engineer supervises daily operations, safety protocols, and craftsmanship.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Engineered Moisture & Damp Mitigation</h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Cosmetics mean nothing if dampness (*seep / seem*) ruins paint in six months. We
                tackle root capillary suction with multi-layer chemical injection and moisture barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS (4 STEPS) */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Simple, Transparent Process
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            From Vision to Handover in 4 Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <span className="text-3xl font-extrabold text-[#D4AF37]/30 font-serif">01</span>
            <h3 className="mt-2 text-base font-bold text-white">Share Your Vision</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Submit your property details via our consultation form or WhatsApp. Tell us which rooms,
              finishes, or repairs you want addressed.
            </p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <span className="text-3xl font-extrabold text-[#D4AF37]/30 font-serif">02</span>
            <h3 className="mt-2 text-base font-bold text-white">On-Site Assessment</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Our site team visits your property to take laser measurements, audit structural
              integrity, check electrical load limits, and discuss your preferred finishes.
            </p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <span className="text-3xl font-extrabold text-[#D4AF37]/30 font-serif">03</span>
            <h3 className="mt-2 text-base font-bold text-white">Design & Scope Plan</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              You receive layout proposals, material samples (tiles, laminates, fittings), an
              itemized BOQ estimate, and a delivery schedule.
            </p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <span className="text-3xl font-extrabold text-[#D4AF37]/30 font-serif">04</span>
            <h3 className="mt-2 text-base font-bold text-white">Turnkey Transformation</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Our crews execute demolition, structural work, MEP rough-ins, tiling, joinery, and
              deep cleaning for an on-time handover.
            </p>
          </div>
        </div>
      </section>

      {/* 7. AUTHENTIC TESTIMONIALS / TRUST VERIFICATION */}
      <section className="border-t border-white/10 bg-slate-950/40 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Client Feedback & Accountability
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Trusted by Homeowners
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Authentic reviews and transparent client representations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-1 text-[#D4AF37]">★★★★★</div>
                <p className="text-xs leading-relaxed text-slate-300 italic">
                  “We bought an older 500-yard house in DHA Phase 6 with great construction quality
                  but dated 1980s interiors. TameerNow opened up the kitchen and refurbished all 4
                  bathrooms within 7 weeks. Highly recommended for hassle-free contracting.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-xs font-bold text-white">S. Farhan & Family</div>
                <div className="text-[11px] text-slate-400">Bungalow Overhaul — DHA Karachi</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-1 text-[#D4AF37]">★★★★★</div>
                <p className="text-xs leading-relaxed text-slate-300 italic">
                  “Living in an apartment, water seepage from old pipelines was an ongoing headache.
                  TameerNow replaced all concealed plumbing and redid our bathrooms with Italian
                  porcelain tiles and modern fittings. Clean and professional crew.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-xs font-bold text-white">M. Kamran</div>
                <div className="text-[11px] text-slate-400">Apartment Bath & Flooring — Clifton</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-1 text-[#D4AF37]">★★★★★</div>
                <p className="text-xs leading-relaxed text-slate-300 italic">
                  “The best part was having a single contact for carpenters, electricians, and painters.
                  The itemized estimate made it easy to track where every rupee went.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-xs font-bold text-white">Dr. Ayesha N.</div>
                <div className="text-[11px] text-slate-400">Living & Kitchen Remodel — PECHS</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-center text-xs text-slate-400">
            Are you an existing client? Share your review directly with our WhatsApp desk or leave us
            feedback on Google Business to help other homeowners.
          </div>
        </div>
      </section>

      {/* 8. LEAD GENERATION & BOOKING SECTION */}
      <section id="book-consultation" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Start Your Transformation
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Ready to Upgrade Your Living Space?
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Schedule an on-site visit with our architectural remodeling specialists. We will inspect
              your property, explore design possibilities, and provide an itemized estimate.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Direct Advisory Line</div>
                  <a href="tel:+923256638995" className="text-sm text-[#D4AF37] hover:underline font-medium">
                    +92 325 6638995
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/30">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Instant WhatsApp Connect</div>
                  <a
                    href="https://wa.me/923256638995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-400 hover:underline font-medium"
                  >
                    +92 325 6638995 (Chat with an Engineer)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 9. DEEP SEO EDITORIAL (1,000+ WORDS COMPREHENSIVE GUIDE) */}
      <section className="border-t border-white/10 bg-[#08090C] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl space-y-10 text-slate-300 text-sm leading-relaxed">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              The Homeowner’s Masterclass
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white font-serif">
              Comprehensive Guide to Modern Home Renovation & Interior Architecture
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              The Strategic Decision: Renovation vs. Relocation in Today’s Market
            </h3>
            <p>
              For many homeowners in major metropolitan areas such as Karachi, Lahore, and
              Islamabad, moving to a larger or newer house often seems like the only solution to
              dated layouts, dark interiors, and worn finishes. However, a financial and spatial
              audit shows that relocating involves significant hidden costs: 4% to 6% in stamp
              duties and taxes, high estate agency fees, moving costs, and the risk of moving to a
              neighborhood with worse security or longer commute times.
            </p>
            <p>
              <strong>TameerNow’s core philosophy—*“Renovate smarter. Live beautifully. Stay where you belong”*—</strong>
              addresses this exact balance. Established neighborhoods like PECHS, Clifton, DHA,
              Gulshan, and KDA in Karachi feature sound brick and RCC frame construction. Older
              structures often boast larger plot footprints and higher ceilings than newer,
              cost-compromised developments. Through precision structural remodeling, homeowners
              can keep their prime location while enjoying a bespoke, contemporary interior.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Addressing Regional Challenges: Damp (*Seep*), Salinity, and Concealed Utilities
            </h3>
            <p>
              Renovating a home in Pakistan requires more than cosmetic surface work. Coastal air,
              subsoil salinity, and decades of plumbing degradation mean cosmetic fixes fail within
              months. TameerNow approaches home transformation from an engineering perspective:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong>Capillary Moisture Barriers:</strong> Before applying primers or wall
                finishes, we locate the source of dampness (*seem*). We utilize crystalline chemical
                injection or polymer-modified cementitious barriers to stop salt efflorescence.
              </li>
              <li>
                <strong>PPRC & PVC Pipeline Overhaul:</strong> Outdated galvanized iron (GI) pipes
                frequently corrode and cause invisible pinhole leaks behind tiles. During bathroom
                and kitchen remodeling, we replace compromised water supply lines with
                pressure-tested PPRC piping and run heavy-duty UPVC drainage.
              </li>
              <li>
                <strong>Modern Electrical Distribution:</strong> Older homes were wired before the
                era of inverter ACs, induction hobs, home theaters, and high-wattage kitchen
                appliances. We inspect your main distribution board, install properly rated circuit
                breakers, and run fire-retardant copper cables with separate earthing to protect
                delicate electronics.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Kitchen Transformation: The Functional Hub of the Modern Household
            </h3>
            <p>
              The kitchen has shifted from an isolated utility space to the center of daily family
              life. A modern kitchen renovation requires balancing hygiene, heat endurance,
              ergonomics, and clean design.
            </p>
            <p>
              TameerNow designs kitchens around the classic **work triangle** (refrigerator, sink,
              and cooking range) to minimize unnecessary movement. We replace aging wooden
              cabinets prone to termites and humidity damage with marine-grade moisture-resistant
              MDF or high-density particle boards faced with UV-lacquered acrylic or matte finishes.
              Countertops are fitted with non-porous quartz or engineered stone that resists turmeric
              and citrus stains, paired with high-capacity ducted extraction hoods to handle
              high-heat cooking.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Luxury Bathroom Architecture: Waterproofing, Glass Enclosures & Clean Lines
            </h3>
            <p>
              A successful bathroom renovation depends on what lies beneath the tiles. TameerNow
              applies a multi-step waterproofing regimen: two coats of elastomeric waterproofing
              membrane across the floor and carried up shower walls to a minimum of 2 meters. Each wet
              area undergoes a 24-hour ponding test prior to tile setting.
            </p>
            <p>
              Our design selections incorporate floor-to-ceiling 60x120cm glazed porcelain tiles to
              minimize grout joints, wall-hung WC units with concealed cisterns for easy floor
              cleaning, frameless tempered glass shower cabins, and ambient LED backlit vanity
              mirrors to create a calm, hotel-inspired experience.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Floor Renovations: Porcelain Slabs, Engineered Hardwood, and Italian Marble
            </h3>
            <p>
              Flooring defines how a room feels underfoot. Scratched chips, yellowed terrazzo, or
              cracked tiles drag down an otherwise pleasant space. TameerNow specializes in
              subfloor leveling and the installation of large-format vitrified porcelain tiles,
              herringbone SPC waterproof planks, and polished imported marble. Correct expansion
              joints and quality adhesives prevent hollow sounds, uneven edges, or buckling over time.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Cost Engineering: How TameerNow Protects Your Investment
            </h3>
            <p>
              Uncontrolled budgets are the biggest fear homeowners face during renovations. Typical
              ad-hoc contractors bid artificially low to secure a job, then introduce unplanned
              charges once the house is torn apart.
            </p>
            <p>
              TameerNow operates with an itemized Bill of Quantities (BOQ). Every square foot of tile,
              linear foot of cabinetry, running meter of wiring, and bag of structural adhesive is
              accounted for before demolition starts. Homeowners choose from transparent material
              tiers, ensuring the final price matches the agreed quote.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION WITH SCHEMA MARKUP */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#D4AF37]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Clear, transparent answers about our renovation services, workflows, and consultation steps.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-all duration-200 open:border-[#D4AF37]/50 open:bg-slate-900/80"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-white text-base">
                <span>{faq.q}</span>
                <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-[#D4AF37] transition group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 border-t border-white/5 pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* Structured Data: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            }),
          }}
        />
      </section>

      {/* Structured Data: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "TameerNow",
            image: "https://tameer-now.vercel.app/logo.png",
            telephone: "+923256638995",
            email: "ammarahmer59@gmail.com",
            url: "https://tameer-now.vercel.app/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressRegion: "Sindh",
              addressCountry: "PK",
            },
            priceRange: "$$",
            openingHours: "Mo-Sa 09:00-19:00",
            description:
              "Complete home renovation, structural remodeling, bathroom transformations, and luxury interior design in Pakistan.",
          }),
        }}
      />
    </div>
  );
}
