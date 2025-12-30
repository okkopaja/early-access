"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Instagram, Twitter, MessageSquare } from "lucide-react"
import { useModal } from "@/context/ModalContext"

export function Footer() {
    return (
        <footer className="relative bg-[#404145] text-white pt-24 pb-8 overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <h3 className="text-2xl font-bold tracking-tight">Fastcrew</h3>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            Find shifts. Earn daily. Build your future.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon href="#" icon={MessageSquare} label="Discord" />
                            <SocialIcon href="#" icon={Linkedin} label="LinkedIn" />
                            <SocialIcon href="#" icon={Twitter} label="Twitter" />
                            <SocialIcon href="https://www.instagram.com/fastcrew.in/" icon={Instagram} label="Instagram" />
                        </div>
                    </div>

                    {/* Column 2: For Workers */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-sm">For Workers</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><FooterLink href="#">Browse Jobs</FooterLink></li>
                            <li><FooterLink href="#how-it-works">How It Works</FooterLink></li>
                            <li><FooterLink href="#faq">Earnings FAQ</FooterLink></li>
                            <li><FooterLink href="#">Blog</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 3: For Partners */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-sm">For Partners</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><FooterLink href="#">Post a Job</FooterLink></li>
                            <li><FooterLink href="#">Partner FAQ</FooterLink></li>
                            <li><FooterLink href="#">Pricing</FooterLink></li>
                            <li><FooterLink href="#">Support</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-sm">Company</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><FooterLink href="#">About</FooterLink></li>
                            <li><FooterLink href="#">Contact</FooterLink></li>
                            <li><FooterLink href="#">Terms & Conditions</FooterLink></li>
                            <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                            <li><FooterLink href="#">Security</FooterLink></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
                    <p>© 2025 Fastcrew. All rights reserved.</p>
                </div>
            </div>

            {/* Mega Typography Background */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-10">
                <h1 className="text-[18vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap translate-y-[20%]">
                    FASTCREW
                </h1>
            </div>
        </footer>
    )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    const { openModal } = useModal();
    const allowedLinks = ["Browse Jobs", "How It Works", "Earnings FAQ"];

    const handleClick = (e: React.MouseEvent) => {
        if (typeof children === 'string' && !allowedLinks.includes(children)) {
            e.preventDefault();
            openModal();
        }
    };

    return (
        <Link href={href} className="hover:text-white transition-colors duration-200" onClick={handleClick}>
            {children}
        </Link>
    )
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DBF73] hover:text-white transition-all duration-200"
        >
            <Icon className="w-4 h-4" />
        </a>
    )
}
