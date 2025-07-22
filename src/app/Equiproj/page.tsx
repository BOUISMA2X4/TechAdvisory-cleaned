"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, ProjectorIcon, Cloud, Shield, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Dr. Sara Benslimane",
    role: "Consultante en IA & Data Science",
    degree: "PhD en Intelligence Artificielle - Polytechnique",
    description:
      "Sara est spécialisée dans la mise en œuvre de modèles prédictifs avancés, avec plus de 8 ans d’expérience dans les secteurs de la santé et de l’industrie.",
  },
  {
    name: "Yassine El Malki",
    role: "Expert DevOps & Cloud",
    degree: "Ingénieur ENSIAS – Certifié AWS",
    description:
      "Yassine accompagne les entreprises dans leur transformation Cloud avec des solutions DevOps robustes et scalables.",
  },
  {
    name: "Nour El Houda",
    role: "Spécialiste Cybersécurité",
    degree: "Master Cybersécurité – CentraleSupélec",
    description:
      "Experte en gestion des risques cyber et conformité RGPD, elle a travaillé sur plusieurs audits nationaux.",
  },
]

const projects = [
  {
    title: "Optimisation des flux logistiques par l’IA",
    description:
      "Mise en place d’un système prédictif pour un leader de l’agroalimentaire, réduisant les pertes de 32% en 6 mois.",
    image: "/images/optimisation_logistique_supplychain_ia.png",
  },
  {
    title: "Audit de sécurité pour une banque régionale",
    description:
      "Conduite d’un audit complet ISO27001 et plan de remédiation sur 12 mois avec zéro incident majeur depuis.",
    image: "/images/654ac8098482d38e23dbd440_o7vOOsNHHJV6QtzEwowNqgzkXhpA-gMcm3MpYQgVml4.png",
  },
  {
    title: "Migration vers AWS & automatisation CI/CD",
    description:
      "Déploiement d’un pipeline DevOps pour une scale-up marocaine, accélérant les releases de 3 jours à 30 min.",
    image: "/images/a1e95458-419a-4de9-85ef-b17d8340700a.png",
  },
]

export default function EquipeProjetsPage() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 overflow-hidden py-28 md:py-36 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
            Conseil en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IA</span>,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cloud</span> &{" "}
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Cybersécurité
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nous accompagnons les entreprises vers l’excellence technologique avec des solutions innovantes, durables et
            sécurisées.
          </p>
        </motion.div>
        {/* Background SVG - More subtle and integrated */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,106.7C672,85,768,107,864,133.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="currentColor"
            className="text-blue-900"
          />
        </svg>
      </section>

      <div className="px-4 md:px-10 lg:px-20 py-20 space-y-28 md:space-y-36">
        {/* Équipe Section */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tighter">
              Notre Équipe de Consultants
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Des experts passionnés, engagés à propulser la transformation numérique de nos clients avec rigueur,
              innovation et agilité.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="flex flex-col h-full bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-blue-700/50 rounded-xl">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-xl font-semibold text-white">{member.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-400">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-300">
                      <GraduationCap className="text-blue-400 mr-2 h-4 w-4 flex-shrink-0" />
                      {member.degree}
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed flex-1">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-800 max-w-7xl mx-auto"></div>

        {/* Projets Réalisés */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tighter">
              Projets d’Impact Réalisés
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Des réalisations concrètes, stratégiques et mesurables dans des secteurs critiques.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-800 hover:border-blue-700/50 rounded-xl">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={proj.image || "/placeholder.svg"}
                      alt={proj.title}
                      fill // Use fill prop instead of layout="fill"
                      style={{ objectFit: "cover" }} // Use style prop for objectFit
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <CardTitle className="text-xl font-semibold text-white flex items-center">
                      <ProjectorIcon className="mr-2 text-blue-400 h-5 w-5 flex-shrink-0" />
                      {proj.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 leading-relaxed">
                      {proj.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="max-w-5xl mx-auto text-center px-4 py-12 md:py-20 space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Notre Vision du Conseil Technologique
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Chez Nouvelle Technologie Advisory, nous croyons que le conseil ne se limite pas à donner des
            recommandations : il s’agit de co-créer des solutions robustes, mesurables et durables. Que ce soit en IA,
            en Cloud Computing ou en cybersécurité, chaque projet est une opportunité de bâtir un avenir plus
            performant.
          </motion.p>
          <div className="flex justify-center gap-x-8 gap-y-4 pt-6 flex-wrap">
            <div className="flex items-center gap-2 text-blue-400 font-medium text-base">
              <Cloud className="text-2xl" />
              <span>Cloud Moderne</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400 font-medium text-base">
              <Shield className="text-2xl" />
              <span>Cybersécurité Avancée</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400 font-medium text-base">
              <LineChart className="text-2xl" />
              <span>IA Prédictive</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400 font-medium text-base">
              <Users className="text-2xl" />
              <span>Équipe Multidisciplinaire</span>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center py-16 bg-blue-900/30 backdrop-blur-sm rounded-xl shadow-inner border border-blue-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos défis et découvrir comment nos experts peuvent vous
              aider à atteindre vos objectifs.
            </p>
            <Button
              asChild
              size="lg"
              className="px-10 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-blue-500/30"
            >
              <Link href="/contact">Discutons ensemble de votre projet</Link>
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
