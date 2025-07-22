"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MountainIcon, RocketIcon, LightbulbIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { WithContext, Organization } from "schema-dts"

export default function ClientPage() {
  // JSON-LD pour le schéma d'organisation
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Votre Entreprise",
    url: "https://votreentreprise.com", // Remplacez par l'URL de votre site
    logo: "/placeholder.svg?height=60&width=60",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-123-456-789", // Remplacez par votre numéro de téléphone
      contactType: "customer service",
    },
    sameAs: [
      "https://twitter.com/votreentreprise", // Remplacez par vos réseaux sociaux
      "https://linkedin.com/company/votreentreprise",
    ],
  }

  const features = [
    {
      icon: RocketIcon,
      title: "Développement Logiciel",
      description: "Création d'applications web et mobiles sur mesure, robustes et évolutives.",
      items: ["Applications Web Modernes", "Développement Mobile (iOS/Android)", "Intégration de Systèmes"],
    },
    {
      icon: LightbulbIcon,
      title: "Conseil Stratégique",
      description: "Accompagnement expert pour optimiser votre stratégie numérique et technologique.",
      items: ["Transformation Digitale", "Audit Technologique", "Planification IT"],
    },
    {
      icon: UsersIcon,
      title: "Support et Maintenance",
      description: "Assurer la performance et la sécurité de vos systèmes avec un support continu.",
      items: ["Maintenance Préventive", "Support Technique 24/7", "Mises à Jour et Sécurité"],
    },
  ]

  return (
    <div className="relative flex flex-col min-h-[100dvh] overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="animated-background"></div>
      <div className="radial-gradient-overlay"></div> {/* New radial gradient overlay */}
      {/* JSON-LD Script */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Header */}
      <header className="px-4 lg:px-8 h-16 flex items-center relative z-20 bg-black/70 backdrop-blur-md border-b border-gray-800">
        <Link href="/" className="flex items-center justify-center text-white">
          <MountainIcon className="h-7 w-7 text-blue-500" />
          <span className="ml-3 text-xl font-bold tracking-tight">Votre Entreprise</span>
          <span className="sr-only">Votre Entreprise</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link
            href="#features"
            className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            À Propos
          </Link>
          <Link
            href="#contact"
            className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-36 lg:py-48 xl:py-60 flex items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-black opacity-70 z-0"></div>
          <div className="container px-4 md:px-6 max-w-5xl space-y-10 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl/none text-white drop-shadow-xl"
            >
              Transformez Votre Vision en Réalité
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mx-auto max-w-[900px] text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Nous sommes votre partenaire stratégique pour l'innovation et la croissance. Des solutions technologiques
              sur mesure pour propulser votre entreprise vers de nouveaux sommets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
            >
              <Link href="#contact">
                <Button className="h-14 px-12 text-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                  Commencer Maintenant
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  className="h-14 px-12 text-xl font-semibold border-2 border-blue-500 bg-transparent text-blue-300 shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:bg-blue-900 hover:text-white transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Découvrir Nos Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features/Services Section */}
        <section
          id="features"
          className="w-full py-20 md:py-32 lg:py-40 bg-gray-950/70 backdrop-blur-md border-t border-b border-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="space-y-4"
              >
                <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-white">Nos Solutions Clés</h2>
                <p className="max-w-[1000px] text-xl md:text-2xl text-gray-300">
                  Nous offrons une gamme complète de services pour répondre aux défis complexes de votre entreprise,
                  avec une approche axée sur l'innovation et l'efficacité.
                </p>
              </motion.div>
            </div>
            <div className="mx-auto grid max-w-7xl items-start gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <Card className="bg-gray-900 border border-gray-700 text-white h-full flex flex-col justify-between p-6 rounded-xl shadow-lg hover:border-blue-600 hover:shadow-blue-900/20 transition-all duration-300 ease-in-out">
                    <CardHeader className="p-0 pb-6">
                      <feature.icon className="h-12 w-12 text-blue-500 mb-6" />
                      <CardTitle className="text-3xl font-semibold mb-3">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-400 text-lg leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="text-lg text-gray-300 space-y-3">
                        {feature.items.map((item, i) => (
                          <li key={i} className="flex items-center">
                            <svg
                              className="mr-3 h-5 w-5 text-blue-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="w-full py-20 md:py-32 lg:py-40 bg-black/70 backdrop-blur-md border-b border-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_700px] lg:gap-24 xl:grid-cols-[1fr_750px]">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                <Image
                  src="/placeholder.svg?height=450&width=750"
                  width="750"
                  height="450"
                  alt="Notre Équipe"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl border border-gray-700"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-5"
                >
                  <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-white">Qui Sommes-Nous ?</h2>
                  <p className="max-w-[800px] text-xl text-gray-300 leading-relaxed">
                    Chez Votre Entreprise, nous sommes une équipe de passionnés de technologie, dédiée à l'excellence et
                    à l'innovation. Nous croyons que la technologie est un levier puissant pour la croissance et nous
                    nous engageons à fournir des solutions qui dépassent les attentes de nos clients. Notre approche est
                    collaborative, transparente et axée sur les résultats, garantissant que chaque projet est une
                    réussite partagée.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <Link href="#contact">
                    <Button className="h-14 px-10 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                      En Savoir Plus
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 lg:py-40 bg-gray-950/70 backdrop-blur-md border-t border-gray-800"
        >
          <div className="container grid items-center justify-center gap-10 px-4 text-center md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <h2 className="text-5xl font-bold tracking-tighter md:text-6xl/tight text-white">
                Prêt à Démarrer Votre Projet ?
              </h2>
              <p className="mx-auto max-w-[800px] text-xl text-gray-300">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider
                à atteindre vos objectifs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto w-full max-w-xl space-y-6 p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-700"
            >
              <form className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Entrez votre email"
                  className="flex-1 h-14 text-lg bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
                <Button
                  type="submit"
                  className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-blue-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
                >
                  Envoyer
                </Button>
              </form>
              <p className="text-sm text-gray-400">
                Nous respectons votre vie privée. Lisez nos{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Conditions Générales
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 relative z-10 bg-black/70 backdrop-blur-md">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
        </p>
        <nav className="sm:ml-auto flex gap-6 sm:gap-8">
          <Link href="/terms" className="text-sm hover:underline underline-offset-4 text-gray-400 transition-colors">
            Conditions d'Utilisation
          </Link>
          <Link href="/privacy" className="text-sm hover:underline underline-offset-4 text-gray-400 transition-colors">
            Confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  )
}
