import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Pricing } from "@/components/Pricing"
import { FAQ } from "@/components/FAQ"
import { Cta } from "@/components/Cta"
import { Footer } from "@/components/Footer"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[var(--color-primary)] selection:text-black">
      <BackgroundBeams />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Cta />
      <Footer />

    </main>
  )
}
