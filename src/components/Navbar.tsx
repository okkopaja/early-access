"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/ModalContext";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-[#E8E8E8] dark:border-white/10 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          : "bg-white dark:bg-black border-transparent py-4",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1 group"
        >
          {/* Logo */}
          <div className="relative h-8 w-auto min-w-[140px]">
            <Image
              src="/logo-light.svg"
              alt="Fastcrew Logo"
              width={160}
              height={32}
              className="h-11 w-auto block dark:hidden group-hover:opacity-80 transition-opacity"
              priority
            />
            <Image
              src="/logo-dark.svg"
              alt="Fastcrew Logo"
              width={120}
              height={32}
              className="h-11 w-auto hidden dark:block group-hover:opacity-80 transition-opacity"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.name === "For Partners") {
                  e.preventDefault();
                  openModal();
                }
              }}
              className="text-sm font-regular text-[#666666] dark:text-gray-300 hover:text-[#1DBF73] transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#1DBF73] transition-all duration-200 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={openModal}
            className="px-5 py-2 rounded-md border border-[#404145] dark:border-gray-500 text-[#404145] dark:text-gray-200 text-sm font-semibold hover:bg-[#F8F8F8] dark:hover:bg-white/10 transition-colors"
          >
            Login
          </button>

          <button
            onClick={openModal}
            className="px-6 py-2 rounded-md bg-[#1DBF73] text-white text-sm font-semibold shadow-[0_2px_8px_rgba(29,191,115,0.15)] hover:bg-[#16A557] hover:shadow-[0_4px_12px_rgba(29,191,115,0.25)] transition-all duration-200"
          >
            Start Hiring/Working
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#404145] dark:text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-black border-b border-[#E8E8E8] dark:border-white/10 px-6 py-4 shadow-lg"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-[#404145] dark:text-gray-200 py-2 border-b border-gray-100 dark:border-white/5"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.name === "For Partners") {
                    e.preventDefault();
                    openModal();
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => { openModal(); setMobileMenuOpen(false); }}
                className="w-full px-5 py-2.5 rounded-md border border-[#404145] dark:border-gray-500 text-[#404145] dark:text-gray-200 text-sm font-semibold text-center"
              >
                Login
              </button>
              <button
                onClick={() => { openModal(); setMobileMenuOpen(false); }}
                className="w-full px-5 py-2.5 rounded-md bg-[#1DBF73] text-white text-sm font-semibold text-center"
              >
                Start Hiring/Working
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
