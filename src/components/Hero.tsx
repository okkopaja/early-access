"use client";

// ... imports inside the file
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { TextReveal } from "./ui/text-reveal-card";

export function Hero() {
  const { openModal } = useModal();
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 500]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Glow Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[var(--color-primary)] blur-[120px] rounded-full opacity-20 dark:opacity-10 mix-blend-screen" />
      </motion.div>

      <div className="container relative z-10 px-6 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-tight flex flex-col items-center"
        >
          <span className="block text-foreground drop-shadow-sm mb-1">
            Skip the Wait.
          </span>
          <span className="flex flex-wrap items-center justify-center gap-2 text-3xl md:text-5xl lg:text-6xl text-[var(--color-primary)] drop-shadow-[0_0_25px_rgba(0,255,100,0.4)]">
            <span>Unlock the</span>
            <TextReveal
              text="hidden job market"
              revealText="hidden job market"
              className="w-auto h-auto min-h-0 min-w-0 inline-flex items-center"
              textClassName="text-3xl md:text-5xl lg:text-6xl font-black font-mono tracking-tighter [word-spacing:-0.3em] py-2 pl-4 pr-6"
              revealTextClassName="text-white"
              baseTextClassName="bg-[var(--color-primary)] text-transparent rounded-lg"
              revealTextStyle={{ textShadow: "none" }}
              barClassName="bg-white"
            />
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-[var(--color-primary)] drop-shadow-[0_0_25px_rgba(0,255,100,0.4)]">Today.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-lg md:text-l text-muted-foreground/90 mb-10 leading-relaxed font-inter mx-auto"
        >
          Stop competing in crowded WhatsApp groups. Access 5000+ exclusive shifts from top brands that pay instantly. No callbacks, no chasing payments—just claim your spot and get to work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={openModal}
            className="group px-8 py-4 rounded-full bg-[var(--color-primary)] text-black font-bold text-lg flex items-center gap-2 transition-all duration-200 ease-out shadow-[var(--shadow-level-3),var(--shadow-accent-glow)] hover:shadow-[var(--shadow-level-4),var(--shadow-accent-glow)] hover:scale-[1.02] hover:brightness-[1.1] active:scale-[0.97] active:shadow-l2 active:brightness-95"
          >
            Find Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={openModal}
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-foreground font-bold text-lg transition-all duration-200 ease-out shadow-l2 hover:bg-white/10 hover:shadow-l3 hover:scale-[1.01] hover:brightness-[1.05] active:scale-[0.98] active:shadow-l1 dark:border-white/20"
          >
            Hire Talent
          </button>
        </motion.div>
      </div>
    </section >
  );
}
