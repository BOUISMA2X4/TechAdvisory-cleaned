"use client"
import { Button } from "@/components/ui/button"
import { MenuIcon, ArrowRightIcon, MountainIcon } from "lucide-react"
import Link from "next/link"
import type { WithContext, Organization } from "schema-dts"

export default function Header() {
  // JSON-LD pour le schéma d'organisation (peut être déplacé vers layout.tsx si global)
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Votre Entreprise Digitale",
    url: "https://votreentreprise.com",
    logo: "/placeholder.svg?height=60&width=60",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-123-456-789",
      contactType: "customer service",
    },
    sameAs: ["https://twitter.com/votreentreprise", "https://linkedin.com/company/votreentreprise"],
  }

  return (
    <header className="px-4 lg:px-8 h-16 flex items-center relative z-20 bg-[#1a1a1a]/80 backdrop-blur-sm border-b border-gray-800">
      {/* JSON-LD Script for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/" className="flex items-center justify-center text-white">
        <MountainIcon className="h-7 w-7 text-blue-500" />
        <span className="ml-3 text-xl font-bold tracking-tight">Votre Entreprise</span>
        <span className="sr-only">Votre Entreprise Digitale</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6 sm:gap-8 items-center">
        <Link
          href="/#features"
          className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          Services
        </Link>
        <Link
          href="/#about"
          className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          À Propos
        </Link>
        <Link
          href="/#contact"
          className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>
        <Button className="h-9 px-4 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 ml-4">
          Get In Touch <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </nav>
      <Button variant="ghost" size="icon" className="ml-auto md:hidden text-white">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
    </header>
  )
}
