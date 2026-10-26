"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldAlert } from "lucide-react";

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Full House",
    service: "Complete House Renovation",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Form validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please provide at least your full name and contact number.");
      return;
    }

    try {
      // Direct webhook / email integration fallback
      const mailtoUrl = `mailto:ammarahmer59@gmail.com?subject=${encodeURIComponent(
        `New Renovation Consultation Request: ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProperty: ${formData.propertyType}\nService: ${formData.service}\nDetails: ${formData.notes}`
      )}`;

      // Simulate network request
      await new Promise((res) => setTimeout(res, 600));
      window.location.href = mailtoUrl;
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to submit. Please contact us directly via WhatsApp.");
    }
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
          Priority Booking
        </span>
        <h3 className="mt-1 text-2xl font-bold text-white">Book Your Free Consultation</h3>
        <p className="mt-1 text-sm text-slate-400">
          Our structural and interior architects will review your project and respond within 24 hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-300">
          <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-emerald-400" />
          <h4 className="text-lg font-semibold text-white">Request Received</h4>
          <p className="mt-1 text-sm">
            Thank you! Your email client has been prepared. You may also ping us directly on WhatsApp at{" "}
            <strong>+92 325 6638995</strong> for instant dispatch.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
              <ShieldAlert className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-300">
              Your Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Tariq Mehmood"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-300">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 3XX XXXXXXX"
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-300">
                Property Category
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                <option value="Full House">Full Standalone House</option>
                <option value="Apartment / Flat">Apartment / Flat</option>
                <option value="Single Floor">Single Floor Portion</option>
                <option value="Commercial / Office">Executive Suite / Office</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-300">
                Required Renovation Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                <option value="Complete House Renovation">Complete House Renovation</option>
                <option value="Apartment Makeovers">Apartment Makeover</option>
                <option value="Kitchen Transformation">Kitchen Transformation</option>
                <option value="Bathroom Renovation">Bathroom Renovation</option>
                <option value="Flooring Renovation">Flooring & Marble/Porcelain</option>
                <option value="Living Room Makeovers">Living Room Redesign</option>
                <option value="Bedroom Redesign">Bedroom Remodeling</option>
                <option value="Custom Interior Design">Full Custom Interior Architecture</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-300">
              Project Vision & Scope
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us about the current condition, desired style, specific repairs (e.g., dampness treatment, wall knockdown), or tentative timeline..."
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] px-6 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            {status === "submitting" ? (
              <span>Confirming Details...</span>
            ) : (
              <>
                <span>Request Free Consultation</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
