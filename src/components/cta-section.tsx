"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Lightbulb, MessageCircle, Brain } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Prêt à innover ?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformons ensemble votre vision en réalité
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Rejoignez les entreprises qui font confiance à notre expertise pour accélérer leur croissance digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Démarrer un projet</span>
            </Link>
            <Link
              href="/chatbot"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Brain className="w-5 h-5" />
              <span>Tester l'IA</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
