import type { Metadata } from "next"
import ClientPage from "@/components/ClientPage"

// Metadata pour le SEO [^2]
export const metadata: Metadata = {
  title: "Votre Entreprise - Solutions Innovantes pour l'Avenir",
  description:
    "Découvrez nos solutions de pointe pour transformer votre entreprise. Expertise en technologie, innovation et croissance durable.",
  openGraph: {
    title: "Votre Entreprise - Solutions Innovantes pour l'Avenir",
    description:
      "Découvrez nos solutions de pointe pour transformer votre entreprise. Expertise en technologie, innovation et croissance durable.",
    url: "https://votreentreprise.com", // Remplacez par l'URL de votre site
    siteName: "Votre Entreprise",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Image pour Open Graph
        width: 1200,
        height: 630,
        alt: "Solutions Innovantes pour l'Avenir",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Votre Entreprise - Solutions Innovantes pour l'Avenir",
    description:
      "Découvrez nos solutions de pointe pour transformer votre entreprise. Expertise en technologie, innovation et croissance durable.",
    images: ["/placeholder.svg?height=675&width=1200"], // Image pour Twitter Card
  },
}

export default function HomePage() {
  return <ClientPage />
}
