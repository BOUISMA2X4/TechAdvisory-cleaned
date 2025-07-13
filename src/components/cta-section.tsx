"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Lightbulb, MessageCircle, Brain } from "lucide-react"

export default function CtaSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden
                        bg-gradient-to-br from-blue-700 via-purple-700 to-cyan-700
                        dark:from-blue-950 dark:via-purple-950 dark:to-cyan-950"
    >
      {/* Molecular Background Blobs */}
      <div className="blob-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      {/* Subtle geometric pattern (still useful for texture) */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]
                        dark:bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(0,0,0,0.1)_1px,transparent_1px)]"
        />
        {/* Radial gradient for depth - adjusted for dark mode */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                        dark:from-black/40 dark:to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm font-medium text-white mb-6 border border-white/20 shadow-lg
                          dark:bg-white/5 dark:border-white/10 dark:text-white"
          >
            <Lightbulb className="w-4 h-4 text-white/80 dark:text-white" />
            <span>Prêt à innover ?</span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-md
                          dark:text-white"
          >
            Transformons ensemble votre vision en réalité
          </h2>

          {/* Paragraph */}
          <p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-sm
                        dark:text-white/80"
          >
            Rejoignez les entreprises qui font confiance à notre expertise pour accélérer leur croissance digitale.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-semibold text-lg
                         bg-white text-blue-700 shadow-lg
                         hover:bg-gray-100 hover:shadow-xl
                         transition-all duration-300 ease-in-out transform hover:-translate-y-1
                         dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 dark:text-white" />
              <span>Démarrer un projet</span>
            </Link>
            <Link
              href="/chatbot"
              className="group inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-semibold text-lg
                         border-2 border-white text-white shadow-lg
                         hover:bg-white hover:text-blue-700 hover:shadow-xl
                         transition-all duration-300 ease-in-out transform hover:-translate-y-1
                         dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-blue-700"
            >
              <Brain className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 dark:text-white" />
              <span>Tester l'IA</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
