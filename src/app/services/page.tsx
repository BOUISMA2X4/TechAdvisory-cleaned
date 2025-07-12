"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Brain, ShieldCheck, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Custom Separator component for a modern look
function SectionSeparator({ label }: { label: string }) {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-gray-800" /> {/* Bordure adaptée au thème sombre */}
      <span className="mx-4 flex-shrink text-lg font-semibold text-gray-400">{label}</span> {/* Texte plus clair */}
      <div className="flex-grow border-t border-gray-800" />
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-hidden">
      {" "}
      {/* Fond sombre global */}
      {/* AnimatedGradientBackground est supprimé pour un fond uniforme */}
      {/* Content Wrapper est supprimé, le contenu est directement dans le div principal */}
      {/* Intro société */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20 md:py-28 lg:py-36">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Notre Expertise en{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Conseil Digital
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Chez <strong className="font-bold text-blue-400">Nouvelle Technologie Advisory</strong>, nous guidons nos
          clients vers une transformation digitale performante et durable. Notre approche personnalisée repose sur
          l’analyse stratégique, la technologie de pointe et une expertise sectorielle éprouvée.
        </motion.p>
      </section>
      <SectionSeparator label="Nos Domaines de Conseil" />
      {/* Service 1: Intelligence Artificielle & Data */}
      <section className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full p-6 bg-white/5 backdrop-blur-sm shadow-lg border border-gray-800 hover:border-blue-700/50 rounded-xl">
            <CardHeader className="pb-4">
              <Brain className="text-blue-400 text-5xl mb-4" /> {/* Icône adaptée */}
              <CardTitle className="text-3xl font-bold text-white">Intelligence Artificielle & Data</CardTitle>{" "}
              {/* Texte blanc */}
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              {" "}
              {/* Texte plus clair */}
              Nous vous accompagnons dans la conception et le déploiement de solutions d’IA sur mesure pour améliorer
              vos performances, optimiser vos processus métier et exploiter la puissance de vos données.
            </CardContent>
          </Card>
        </motion.div>
        <motion.img
          src="/images/ai-consulting.webp"
          alt="AI Consulting"
          className="rounded-xl shadow-xl w-full h-auto object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </section>
      <SectionSeparator label="Cybersécurité & Résilience" />
      {/* Service 2: Cybersécurité & Gouvernance */}
      <section className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 py-8">
        <motion.img
          src="/images/cyber.webp"
          alt="Cybersecurity"
          className="rounded-xl shadow-xl w-full h-auto object-cover order-2 md:order-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <Card className="h-full p-6 bg-white/5 backdrop-blur-sm shadow-lg border border-gray-800 hover:border-blue-700/50 rounded-xl">
            <CardHeader className="pb-4">
              <ShieldCheck className="text-blue-400 text-5xl mb-4" /> {/* Icône adaptée */}
              <CardTitle className="text-3xl font-bold text-white">Cybersécurité & Gouvernance</CardTitle>{" "}
              {/* Texte blanc */}
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              {" "}
              {/* Texte plus clair */}
              Protégez vos actifs numériques avec des stratégies robustes : audit de sécurité, plan de réponse aux
              incidents, mise en conformité réglementaire (RGPD, NIS2).
            </CardContent>
          </Card>
        </motion.div>
      </section>
      <SectionSeparator label="Transformation Digitale & DevOps" />
      {/* Service 3: DevOps & Cloud Advisory */}
      <section className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full p-6 bg-white/5 backdrop-blur-sm shadow-lg border border-gray-800 hover:border-blue-700/50 rounded-xl">
            <CardHeader className="pb-4">
              <Settings className="text-blue-400 text-5xl mb-4" /> {/* Icône adaptée */}
              <CardTitle className="text-3xl font-bold text-white">DevOps & Cloud Advisory</CardTitle>{" "}
              {/* Texte blanc */}
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              {" "}
              {/* Texte plus clair */}
              De la stratégie Cloud à l’implémentation DevOps, nous assurons la scalabilité, l’automatisation et la
              fiabilité de vos plateformes numériques.
            </CardContent>
          </Card>
        </motion.div>
        <motion.img
          src="/images/devops.png"
          alt="DevOps"
          className="rounded-xl shadow-xl w-full h-auto object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </section>
      <SectionSeparator label="Prendre Contact avec un Consultant" />
      {/* Call to Action */}
      <motion.div
        className="text-center mt-10 px-6 pb-12 bg-blue-900/30 backdrop-blur-sm rounded-xl shadow-inner border border-blue-800/50 max-w-4xl mx-auto py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
          Prêt à transformer votre entreprise ?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Contactez-nous dès aujourd'hui pour discuter de vos défis et découvrir comment nos experts peuvent vous aider
          à atteindre vos objectifs.
        </p>
        <Button
          asChild
          size="lg"
          className="px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-600/30"
        >
          <Link href="/contact" className="flex items-center gap-2">
            Discutons de votre projet <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
