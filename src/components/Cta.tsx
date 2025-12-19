"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function Cta() {
  const { openModal } = useModal();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background with parallax-like feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-white to-neutral-100 dark:from-neutral-900 dark:via-black dark:to-neutral-900 z-0" />

      {/* Gradient glow moving */}
      <motion.div
        style={{ x: y }}
        className="absolute top-0 left-[-20%] w-[140%] h-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/5 to-transparent blur-3xl z-0 pointer-events-none"
      />

      <div className="container px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12"
        >
          Join fastcrew for your next big leap.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
          className="px-10 py-5 rounded-full bg-[var(--color-primary)] text-black font-bold text-xl inline-flex items-center gap-3 shadow-[0_0_40px_rgba(0,224,94,0.4)] hover:shadow-[0_0_60px_rgba(0,224,94,0.6)] transition-all"
        >
          Create Your Free Account <ArrowRight className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}
