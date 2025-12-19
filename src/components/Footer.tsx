"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative bg-neutral-50 dark:bg-black pt-20 pb-0 overflow-hidden border-t border-neutral-200 dark:border-white/10">
            {/* Layer A: Navigation & Utility */}
            <div className="relative z-10 container px-6 mx-auto mb-8">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
                    {/* Left Column: Brand & Tagline */}
                    <div className="max-w-xs">
                        <Link href="/" className="inline-block mb-4 group">
                            <div className="relative h-8 w-auto min-w-[120px]">
                                <Image
                                    src="/logo-light.svg"
                                    alt="Fastcrew Logo"
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto block dark:hidden group-hover:opacity-80 transition-opacity"
                                />
                                <Image
                                    src="/logo-dark.svg"
                                    alt="Fastcrew Logo"
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto hidden dark:block group-hover:opacity-80 transition-opacity"
                                />
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            The modern platform for flexible work opportunities, putting power back in your hands.
                        </p>
                        <p className="text-xs text-muted-foreground/60">© 2025 fastcrew. All rights reserved.</p>
                    </div>

                    {/* Middle: Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        <div>
                            <h4 className="font-bold mb-4 text-sm">Product</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Features</Link></li>
                                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Pricing</Link></li>
                                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Testimonials</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4 text-sm">Company</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">About</Link></li>
                                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Careers</Link></li>
                                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4 text-sm">Legal</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy</Link></li>
                                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Socials */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-sm">Connect</h4>
                        <div className="flex items-center gap-4">
                            <a href="#" aria-label="Discord" className="text-muted-foreground hover:text-[#5865F2] transition-colors hover:scale-110 duration-200">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.5151.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3776-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1258.1023.2517.2039.3776.2983a.076.076 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-[#0A66C2] transition-colors hover:scale-110 duration-200">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="X" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200">
                                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/fastcrew.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-[#E1306C] transition-colors hover:scale-110 duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layer B: Mega-Typography */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full flex justify-center items-end select-none pointer-events-none overflow-hidden relative z-0 -mt-12 translate-x-[5%]"
            >
                {/* Light Mode Logo */}
                <Image
                    src="/logo-light.svg"
                    alt=""
                    width={1200}
                    height={300}
                    className="w-full h-auto max-h-[25vw] object-cover block dark:hidden"
                    aria-hidden="true"
                    priority
                />
                {/* Dark Mode Logo */}
                <Image
                    src="/logo-dark.svg"
                    alt=""
                    width={1200}
                    height={300}
                    className="w-full h-auto max-h-[25vw] object-cover hidden dark:block"
                    aria-hidden="true"
                    priority
                />
            </motion.div>
        </footer>
    )
}
