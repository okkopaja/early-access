"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "When do I actually get paid?",
        answer: "Same day. Work your shift from 11 AM to 3 PM, and money hits your account by 11 PM that night. No delays, no waiting till Friday. Instant payouts via UPI, bank transfer, or wallet.",
    },
    {
        question: "Are these jobs actually real, or will nobody hire me?",
        answer: "100% real. Every restaurant and cafe on Fastcrew is verified. We show you their ratings (average 4.2/5). You can see exactly how many workers they've hired before you apply. Verified members get hired 3x faster.",
    },
    {
        question: "What if the restaurant doesn't show up or cancels?",
        answer: "We have your back. If a restaurant cancels within 2 hours, you get ₹200 cancellation fee. If they don't show up, you earn full shift payment + extra ₹500 compensation. This is guaranteed.",
    },
    {
        question: "Do I need 'verification' to work, or can I start immediately?",
        answer: "You can start immediately for FREE. Verification (₹99, one-time) unlocks premium shifts at top restaurants and guarantees faster hiring. Not required, but highly recommended.",
    },
    {
        question: "Is this safe? Will I get cheated?",
        answer: "Yes, it's safe. All workers have ₹5,000 accident insurance. You can rate restaurants, and bad ones get removed. We have a 24/7 support team to handle disputes. Zero hidden charges.",
    },
    {
        question: "Can I choose my hours, or do I have to work fixed shifts?",
        answer: "100% your choice. You see jobs, you decide. Work 2 shifts a day or 1 shift a month. No commitment. No penalties. Zero contracts.",
    },
    {
        question: "I'm not experienced. Can I still get hired?",
        answer: "Yes! We have jobs for beginners (Dishwasher, Helper, Delivery). Experienced workers earn more, but everyone starts somewhere. Average beginner makes ₹600-800 per 4-hour shift.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 relative bg-transparent overflow-hidden">
            {/* Dark Mode Top Transition */}
            <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-transparent to-black dark:block hidden -z-10" />
            <div className="absolute inset-x-0 bottom-0 top-80 bg-transparent dark:bg-black/95 dark:block hidden -z-20" />
            <div className="container px-6 mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white"
                    >
                        We Answer Your Questions
                    </motion.h2>
                </div>

                <div className="space-y-0 border-t border-neutral-200 dark:border-neutral-800">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-neutral-200 dark:border-neutral-800 bg-transparent"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between py-6 text-left group"
                            >
                                <span className="text-lg font-semibold text-[#1A1A1A] dark:text-gray-200 group-hover:text-[#1DBF73] transition-colors pr-8">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 text-[#404145] dark:text-gray-400 group-hover:text-[#1DBF73] transition-colors">
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5" />
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
                                        <div className="pb-6 text-[#666666] dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                            {faq.answer}
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
