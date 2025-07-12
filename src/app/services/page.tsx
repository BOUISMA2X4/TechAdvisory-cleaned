"use client"

import { motion } from "framer-motion"
import { Brain, ShieldCheck, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"

// Custom Separator component for a modern look
function SectionSeparator({ label }: { label: string }) {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-gray-200" />
      <span className="mx-4 flex-shrink text-lg font-semibold text-gray-600">{label}</span>
      <div className="flex-grow border-t border-gray-200" />
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedGradientBackground />

      {/* Content Wrapper */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm min-h-screen flex flex-col py-12">
        {/* Intro société */}
        <section className="max-w-4xl mx-auto text-center px-6 py-12">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Notre Expertise en <span className="text-blue-600">Conseil Digital</span>
          </motion.h1>
          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Chez <strong className="font-bold text-blue-700">Nouvelle Technologie Advisory</strong>, nous guidons nos
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
            <Card className="h-full p-6 shadow-lg border-none">
              <CardHeader className="pb-4">
                <Brain className="text-blue-600 text-5xl mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-800">Intelligence Artificielle & Data</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-lg leading-relaxed">
                Nous vous accompagnons dans la conception et le déploiement de solutions d’IA sur mesure pour améliorer
                vos performances, optimiser vos processus métier et exploiter la puissance de vos données.
              </CardContent>
            </Card>
          </motion.div>
          <motion.img
            src="/placeholder.svg?height=400&width=600"
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
            src="/placeholder.svg?height=400&width=600"
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
            <Card className="h-full p-6 shadow-lg border-none">
              <CardHeader className="pb-4">
                <ShieldCheck className="text-blue-600 text-5xl mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-800">Cybersécurité & Gouvernance</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-lg leading-relaxed">
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
            <Card className="h-full p-6 shadow-lg border-none">
              <CardHeader className="pb-4">
                <Settings className="text-blue-600 text-5xl mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-800">DevOps & Cloud Advisory</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-lg leading-relaxed">
                De la stratégie Cloud à l’implémentation DevOps, nous assurons la scalabilité, l’automatisation et la
                fiabilité de vos plateformes numériques.
              </CardContent>
            </Card>
          </motion.div>
          <motion.img
            src="/placeholder.svg?height=400&width=600"
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
          className="text-center mt-10 px-6 pb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="/contact" className="flex items-center gap-2">
              Discutons de votre projet <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
