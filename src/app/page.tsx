import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import CtaSection from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 font-sans antialiased relative overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <CtaSection />
    </main>
  )
}
