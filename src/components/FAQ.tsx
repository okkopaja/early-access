"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    // PARTNER / BUSINESS QUESTIONS (The "Peace of Mind" Angle)
    {
        question: "What if the worker I hire doesn't show up?",
        answer:
            "We have a 98% show-up rate because our 'Reliability Score' system penalizes no-shows heavily. If it happens, our backup algorithm instantly alerts nearby top-rated talent to fill the gap within minutes.",
    },
    {
        question: "Are these workers actually verified, or just random sign-ups?",
        answer:
            "They aren't random. Every pro on Fastcrew passes a 3-step check: Identity Verification (Aadhaar/PAN), a Video Interview for soft skills, and Past Employer Reference checks. You get professionals, not just people looking for cash.",
    },
    {
        question: "Why pay a fee when I can find staff on WhatsApp groups for free?",
        answer:
            "WhatsApp is chaotic and unverified. Fastcrew gives you structure: instant replacements, legal invoices for tax, insurance coverage for accidents, and a guaranteed pool of vetted staff so you never scramble on a Friday night again.",
    },

    // WORKER / TALENT QUESTIONS (The "Earning & Dignity" Angle)
    {
        question: "When do I actually get paid?",
        answer:
            "Immediately. On the 'Professional' plan, you get paid via UPI the moment your shift ends. On the free plan, payouts are weekly. No more chasing owners or waiting for 'next month's salary.'",
    },
    {
        question: "Does this count as 'real experience' for my resume?",
        answer:
            "Yes. Every shift adds a verified review to your Fastcrew 'Smart Resume'. You can download this PDF to show future employers that you have worked at top venues and have a proven track record.",
    },
    {
        question: "What if I get injured while working a shift?",
        answer:
            "We've got your back. Every active shift booked on Fastcrew comes with ₹1 Lakh on-shift accident insurance coverage at no extra cost to you. Your safety is our priority.",
    },
    {
        question: "Is this full-time work or just one-off gigs?",
        answer:
            "It's whatever you need. Pick up single shifts on your days off to earn extra cash, or stack shifts back-to-back to work full-time hours. You are your own boss—work when you want, where you want.",
    },
];


export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-primary font-medium tracking-wide uppercase">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                        Still have questions about Fastcrew?
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-muted/20 bg-card/50 hover:bg-card/80 transition-all duration-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg md:text-xl font-medium font-raleway text-foreground group-hover:text-primary transition-colors">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 ml-4">
                                    {openIndex === index ? (
                                        <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)]">
                                            <X className="h-5 w-5" />
                                        </div>
                                    ) : (
                                        <div className="h-8 w-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-black shadow-lg shadow-[var(--shadow-accent-glow)] group-hover:scale-110 transition-transform">
                                            <Plus className="h-5 w-5" />
                                        </div>
                                    )}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0">
                                            <p className="text-muted-foreground leading-relaxed font-raleway text-green-100">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
