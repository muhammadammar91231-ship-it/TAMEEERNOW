import React from "react";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact TameerNow | Book Free Renovation Consultation",
  description:
    "Get in touch with TameerNow via WhatsApp, phone, or email to schedule an on-site property evaluation.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0B0D10] text-slate-100 min-h-screen py-16 lg:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Get In Touch
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-white font-serif sm:text-5xl">
            Let’s Discuss Your Renovation
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Book an on-site visit or send us your questions. We will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-6">
              <h2 className="text-lg font-bold text-white">Direct Contacts</h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#D4AF37] border border-white/10 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone Call</div>
                    <a href="tel:+923256638995" className="font-semibold text-white hover:text-[#D4AF37]">
                      +92 325 6638995
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct WhatsApp</div>
                    <a
                      href="https://wa.me/923256638995"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-400 hover:underline"
                    >
                      +92 325 6638995
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#D4AF37] border border-white/10 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Project Desk Email</div>
                    <a
                      href="mailto:ammarahmer59@gmail.com"
                      className="font-semibold text-white hover:text-[#D4AF37]"
                    >
                      ammarahmer59@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#D4AF37] border border-white/10 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Primary Service Coverage</div>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Karachi, Pakistan (DHA, Clifton, PECHS, Gulshan-e-Iqbal, Malir Cantt & nearby areas).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-5 text-xs text-slate-300 space-y-2">
              <span className="font-semibold text-white block">What happens next?</span>
              <p>1. We review your details and confirm an on-site visit.</p>
              <p>2. Our engineers inspect the site and take measurements.</p>
              <p>3. You receive an itemized Bill of Quantities (BOQ) with a projected schedule.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
