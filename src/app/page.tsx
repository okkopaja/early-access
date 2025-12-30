"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LiveOpportunities } from "@/components/LiveOpportunities";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent dark:bg-black text-[#1A1A1A] dark:text-white overflow-x-hidden selection:bg-[#1DBF73] selection:text-white">
      <Navbar />
      <Hero />
      <LiveOpportunities />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
