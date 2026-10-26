import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tameer-now.vercel.app"),
  title: {
    default: "TameerNow | Luxury Home Renovation, Remodeling & Interior Design",
    template: "%s | TameerNow",
  },
  description:
    "Renovate smarter. Live beautifully. Stay where you belong. Turnkey home remodeling, kitchen design, and waterproofing across Pakistan.",
  openGraph: {
    title: "TameerNow | Home Renovation & Remodeling Specialists",
    description: "Renovate smarter. Live beautifully. Stay where you belong.",
    url: "https://tameer-now.vercel.app",
    siteName: "TameerNow",
    locale: "en_PK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#0B0D10] font-sans text-slate-100 antialiased selection:bg-[#D4AF37] selection:text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
