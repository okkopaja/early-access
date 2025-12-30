"use client";

import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, Banknote } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const steps = [
    {
        number: 1,
        title: "Create Your Profile",
        description: "Upload a photo, add your skills, and you're ready. No complex forms—just the essentials.",
        icon: UserPlus,
        color: "bg-[#1DBF73]",
    },
    {
        number: 2,
        title: "Get Verified",
        description: "Pass a quick background check to access premium shifts at top restaurants.",
        icon: ShieldCheck,
        color: "bg-[#1DBF73]",
    },
    {
        number: 3,
        title: "Start Earning",
        description: "Apply to jobs, get matched instantly. Work your shift. Money hits your account by 11 PM.",
        icon: Banknote,
        color: "bg-[#1DBF73]",
    },
];

export function Features() {
    const { openModal } = useModal();

    return (
        <section id="how-it-works" className="py-24 bg-transparent dark:bg-black/20">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#1DBF73] font-semibold text-xs tracking-[1px] mb-2 uppercase brightness-55 dark:brightness-100">
                        The Process
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4"
                    >
                        Get a Job in 3 Steps
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#666666] dark:text-gray-400 max-w-lg mx-auto leading-relaxed"
                    >
                        Fast, simple, and designed for hospitality workers in India.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            whileHover={{ y: -8, transition: { duration: 0.1 } }}
                            className="bg-white/90 dark:bg-[#1A1A1A] backdrop-blur-sm p-8 rounded-xl border border-white/50 border-b-neutral-200/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-[#1DBF73] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-[rgba(29,191,115,0.3)] group-hover:scale-110 transition-transform duration-300">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-white mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-[#666666] dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    {step.description}
                                </p>

                                <div className="w-16 h-16 rounded-full bg-[#F0F7F4] dark:bg-white/5 flex items-center justify-center">
                                    <step.icon className="w-8 h-8 text-[#1DBF73]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
