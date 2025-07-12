import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import CtaSection from "@/components/cta-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <main className="font-sans antialiased relative overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
      <ServicesSection />
      <CtaSection />
    </main>
  )
}
