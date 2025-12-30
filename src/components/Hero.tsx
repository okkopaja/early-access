"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock, CheckCircle2, Building2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const jobs = [
  {
    id: 1,
    title: "Commi II Chef",
    restaurant: "Spice Kraft",
    location: "Park Street",
    rate: "₹800/shift",
    time: "Posted 20m ago",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 2,
    title: "Service Steward",
    restaurant: "Mocambo",
    location: "Park Street",
    rate: "₹650/shift",
    time: "Posted 45m ago",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    title: "Kitchen Helper",
    restaurant: "Arsalan",
    location: "Park Circus",
    rate: "₹500/shift",
    time: "Posted 1h ago",
    color: "bg-green-100 text-green-700",
  },
];

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 lg:pt-32 overflow-hidden bg-transparent">
      {/* Section Background with Smooth Fade-out */}
      <div className="absolute inset-x-0 top-0 bottom-80 bg-white dark:bg-black -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-white via-white/90 to-transparent dark:from-black dark:via-black/90 dark:to-transparent -z-10 backdrop-blur-[2px]" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight text-[#1A1A1A] dark:text-white leading-[1.2] mb-6"
            >
              Work Shifts You Love. <br />
              <span className="text-[#1A1A1A] dark:text-white">Get Paid </span>
              <span className="text-[#1DBF73]">Today.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-[#666666] dark:text-gray-400 mb-8 leading-relaxed max-w-lg"
            >
              Find verified jobs at top restaurants in Kolkata. No agencies. No delays. Just real work and real money.
            </motion.p>

            {/* Mobile Job Ticker - now positioned between text and buttons on mobile */}
            <MobileJobTicker />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#1DBF73] text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-[#16A557] shadow-[0_4px_12px_rgba(29,191,115,0.2)] hover:shadow-[0_8px_16px_rgba(29,191,115,0.3)] transition-all duration-200"
              >
                Find Work Now
              </button>
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg border-2 border-[#404145] dark:border-gray-500 text-[#404145] dark:text-gray-200 font-semibold text-base hover:bg-[#F8F8F8] dark:hover:bg-white/10 transition-colors"
              >
                Post a Job
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-2 text-[#999999] text-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-[#1DBF73]" />
              <p>1,200+ jobs posted this week. 5,400+ workers earning daily.</p>
            </motion.div>
          </div>

          {/* Right Column: Interactive Job Ticker */}
          <JobTicker />
        </div>
      </div>
    </section>
  );
}

function JobTicker() {
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveJobIndex((prev) => (prev + 1) % jobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[450px] w-full hidden lg:flex items-center justify-center bg-[#F8F8F8] dark:bg-white/5 rounded-2xl border border-[#E8E8E8] dark:border-white/10 box-border p-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-10" />

      <div className="relative w-full max-w-sm h-64">
        <AnimatePresence mode="popLayout">
          {jobs.map((job, index) => {
            // Calculate relative index for stacking effect
            const relativeIndex = (index - activeJobIndex + jobs.length) % jobs.length;

            // Only show top 3 cards
            if (relativeIndex > 2) return null;

            return (
              <motion.div
                key={job.id}
                layoutId={`card-${job.id}`}
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{
                  opacity: relativeIndex === 0 ? 1 : 1 - relativeIndex * 0.3,
                  scale: 1 - relativeIndex * 0.05,
                  y: relativeIndex * 20,
                  zIndex: jobs.length - relativeIndex
                }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full"
              >
                <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-[#E8E8E8] dark:border-white/10 border-l-4 border-l-[#1DBF73]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A1A1A] dark:text-white">{job.title}</h3>
                        <p className="text-sm text-[#666666] dark:text-gray-400">{job.restaurant}</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-[#F0F7F4] text-[#1DBF73] text-xs font-bold rounded">
                      {job.rate}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-[#666666] dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      4 hrs
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#999999]">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#1DBF73] animate-pulse" />
                      Live Now
                    </span>
                    <span>{job.time}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MobileJobTicker() {
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveJobIndex((prev) => (prev + 1) % jobs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:hidden w-full mt-4 mb-10 relative h-40 flex justify-center lg:justify-start overflow-visible">
      <div className="relative w-full max-w-[320px] h-full">
        <AnimatePresence mode="popLayout">
          {jobs.map((job, index) => {
            const relativeIndex = (index - activeJobIndex + jobs.length) % jobs.length;

            if (relativeIndex > 2) return null;

            return (
              <motion.div
                key={job.id}
                layoutId={`mobile-card-${job.id}`}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{
                  opacity: relativeIndex === 0 ? 1 : 1 - relativeIndex * 0.3,
                  scale: 1 - relativeIndex * 0.05,
                  y: relativeIndex * 10,
                  zIndex: jobs.length - relativeIndex
                }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-x-0 top-0"
              >
                <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-xl shadow-lg border border-[#E8E8E8] dark:border-white/10 border-l-4 border-l-[#1DBF73]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-[#1A1A1A] dark:text-white leading-tight">{job.title}</h3>
                        <p className="text-xs text-[#666666] dark:text-gray-400">{job.restaurant}</p>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 bg-[#F0F7F4] text-[#1DBF73] text-[10px] font-bold rounded">
                      {job.rate}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#666666] dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      4 hrs
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#999999]">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1DBF73] animate-pulse" />
                      Live Now
                    </span>
                    <span>{job.time}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
