"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, ArrowRight, User, MousePointer2, BadgeCheck } from "lucide-react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { useModal } from "@/context/ModalContext"

const features = [
    {
        title: "Build your Smart Resume once.",
        description: "Forget applying to 50 places. Create one verified profile, upload your experience, and instantly qualify for thousands of shifts at top venues.",
        header: <SmartResumeAnimation />,
        className: "md:col-span-1",
    },
    {
        title: "Get shortlisted faster.",
        description: "Skip the gatekeepers. Your Smart Resume goes directly to the manager's phone. Get interview requests in minutes, not weeks.",
        header: <InterviewRequestAnimation />,
        className: "md:col-span-1",
    },
    {
        title: "Get paid immediately.",
        description: "Clock out and watch the money hit your bank account.",
        header: <InstantPayAnimation />,
        className: "md:col-span-1",
    },
]

function SmartResumeAnimation() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.5 })

    return (
        <div ref={containerRef} className="flex flex-1 w-full h-full min-h-[15rem] rounded-xl overflow-hidden relative border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-[var(--color-primary)]/[0.03] p-4 items-center justify-center">
            <div className="relative w-48 h-64 bg-white dark:bg-black border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden flex flex-col items-center pt-6 space-y-3">
                {/* Profile Pic Pop */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden"
                >
                    <User className="w-8 h-8 text-neutral-400" />
                </motion.div>

                {/* Skeleton Lines */}
                <div className="w-full px-6 space-y-2">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: "80%" } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded mx-auto"
                    />
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: "60%" } : {}}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded mx-auto"
                    />
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: "70%" } : {}}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded mx-auto"
                    />
                </div>

                {/* Verified Stamp */}
                <motion.div
                    initial={{ scale: 2, opacity: 0, y: -20 }}
                    animate={isInView ? { scale: 1, opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4, type: "spring", bounce: 0.5 }}
                    className="absolute bottom-6 bg-black/80 backdrop-blur-sm border border-[var(--color-primary)] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                >
                    <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider">Verified</span>
                </motion.div>

                {/* Glow effect moving across */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-primary)]/10 blur-3xl rounded-full pointer-events-none"
                />
            </div>
        </div>
    )
}

function InterviewRequestAnimation() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { amount: 0.5 })
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setIsClicked(true), 2500) // Click happens after cursor move
            return () => clearTimeout(timer)
        } else {
            setIsClicked(false)
        }
    }, [isInView])

    return (
        <div ref={containerRef} className="flex flex-1 w-full h-full min-h-[15rem] rounded-xl overflow-hidden relative border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-[var(--color-primary)]/[0.03] items-center justify-center p-4">
            {/* Notification Card */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-full max-w-[240px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg p-3 shadow-xl z-10"
            >
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/20 flex-shrink-0 flex items-center justify-center">
                        <BadgeCheck className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="h-2 w-16 bg-neutral-200 dark:bg-neutral-800 rounded" />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "100%" } : {}}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="h-2 bg-neutral-100 dark:bg-neutral-800 rounded overflow-hidden"
                        >
                            <div className="w-full h-full bg-neutral-300 dark:bg-neutral-700" />
                        </motion.div>
                    </div>
                </div>

                {/* Action Button */}
                <motion.div className="mt-4 flex justify-end">
                    <motion.button
                        animate={isClicked ? {
                            backgroundColor: "var(--color-primary)",
                            color: "#000",
                            scale: 0.95
                        } : {
                            backgroundColor: "rgba(255,255,255,0.05)",
                            color: "inherit"
                        }}
                        className="text-[10px] px-3 py-1.5 rounded-md border border-neutral-200 dark:border-white/10 font-medium transition-colors"
                    >
                        {isClicked ? "Booked" : "Book Now"}
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Cursor Animation */}
            <motion.div
                initial={{ x: 100, y: 100, opacity: 0 }}
                animate={isInView ? {
                    x: [80, 40, 40, 150], // Enter -> Hover Button -> Click -> Leave
                    y: [80, -10, -10, 50],
                    opacity: [0, 1, 1, 0]
                } : {}}
                transition={{
                    duration: 4,
                    times: [0, 0.4, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                }}
                className="absolute z-20 pointer-events-none"
            >
                <MousePointer2 className="w-5 h-5 fill-black dark:fill-white text-white dark:text-black drop-shadow-md" />
                <motion.div
                    animate={isClicked ? { scale: [1, 0.8, 1] } : {}}
                    className="absolute -top-1 -left-1 w-7 h-7 bg-white/30 rounded-full"
                />
            </motion.div>
        </div>
    )
}

function InstantPayAnimation() {
    const [count, setCount] = useState(0)
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { amount: 0.5 })

    useEffect(() => {
        if (isInView) {
            let start = 0
            const end = 1200
            const duration = 2000 // 2s
            const incrementTime = duration / (end / 10) // Update every X ms

            const timer = setInterval(() => {
                start += 15
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(start)
                }
            }, 20)

            return () => clearInterval(timer)
        } else {
            setCount(0)
        }
    }, [isInView])

    return (
        <div ref={containerRef} className="flex flex-1 w-full h-full min-h-[15rem] rounded-xl overflow-hidden relative border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-[var(--color-primary)]/[0.03] items-center justify-center">
            {/* Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: -50, opacity: [0, 1, 0] }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "linear"
                        }}
                        className="absolute w-2 h-2 rounded-full bg-[var(--color-primary)]/40 blur-[1px]"
                        style={{ left: `${20 + Math.random() * 60}%` }}
                    />
                ))}
            </div>

            {/* Counter Text */}
            <div className="relative z-10 text-center space-y-1">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-widest"
                >
                    Payment Sent
                </motion.div>
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-white dark:to-neutral-500 font-mono tracking-tighter">
                    ₹{count}
                </div>
                <div className="flex justify-center mt-2">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView && count === 1200 ? { width: "100%" } : {}}
                        className="h-1 bg-[var(--color-primary)] rounded-full shadow-[0_0_10px_var(--color-primary)]"
                        style={{ maxWidth: '80px' }}
                    />
                </div>
            </div>
        </div>
    )
}

export function Features() {
    const { openModal } = useModal()

    return (
        <section className="py-24 relative z-10">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="flex flex-col mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="text-[var(--color-primary)] font-medium tracking-wide uppercase text-lg drop-shadow-[0_0_8px_rgba(72,255,167,0.5)]">
                            How It Works
                        </span>
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl"
                        >
                            How you get paid in 3 steps
                        </motion.h2>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            onClick={() => openModal()}
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-primary)] text-black font-semibold text-sm hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(72,255,167,0.3)] hover:shadow-[0_0_30px_rgba(72,255,167,0.5)]"
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>

                <BentoGrid className="max-w-7xl mx-auto md:grid-cols-3">
                    {features.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={item.className}

                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}
