"use client"

import { motion } from "framer-motion"
import { Brain, Rocket, BarChart3, Shield, Globe, Users, CheckCircle, Target } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-6">
            <Target className="w-4 h-4" />
            <span>Nos expertises</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions sur mesure pour votre{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transformation digitale
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De l'intelligence artificielle à la stratégie d'innovation, nous vous accompagnons à chaque étape de votre
            évolution technologique.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Intelligence Artificielle",
              description: "Intégration d'IA générative et d'automatisation intelligente",
              color: "from-blue-500 to-cyan-500",
              features: ["ChatBots IA", "Analyse prédictive", "Automatisation"],
            },
            {
              icon: Rocket,
              title: "Innovation Stratégique",
              description: "Accompagnement dans votre transformation numérique",
              color: "from-purple-500 to-pink-500",
              features: ["Roadmap tech", "R&D", "Prototypage"],
            },
            {
              icon: BarChart3,
              title: "Optimisation Performance",
              description: "Amélioration continue de vos processus digitaux",
              color: "from-green-500 to-emerald-500",
              features: ["Analytics", "KPI", "Monitoring"],
            },
            {
              icon: Shield,
              title: "Sécurité & Conformité",
              description: "Protection de vos données et conformité réglementaire",
              color: "from-red-500 to-orange-500",
              features: ["RGPD", "Cybersécurité", "Audit"],
            },
            {
              icon: Globe,
              title: "Solutions Cloud",
              description: "Migration et optimisation de votre infrastructure cloud",
              color: "from-indigo-500 to-blue-500",
              features: ["AWS", "Azure", "DevOps"],
            },
            {
              icon: Users,
              title: "Formation & Support",
              description: "Montée en compétences de vos équipes",
              color: "from-teal-500 to-cyan-500",
              features: ["Workshops", "Coaching", "Documentation"],
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
