"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const phone = "923256638995";
  const defaultMessage = encodeURIComponent(
    "Hello TameerNow team! I would like to book a free consultation for my home renovation."
  );

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <span className="pointer-events-none mr-3 hidden rounded-lg bg-black/90 px-3 py-1.5 text-xs font-medium text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:block md:inline-block border border-white/10">
        Chat on WhatsApp
      </span>
      <a
        href={`https://wa.me/${phone}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with TameerNow renovation specialists"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </aside>
  );
};
