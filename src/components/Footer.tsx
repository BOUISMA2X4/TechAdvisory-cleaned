"use client"
import { useState, useEffect } from "react"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2023)
  const { data: session } = useSession()

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const iconVariants = {
    hover: { scale: 1.1, color: "#60A5FA" },
    tap: { scale: 0.95 },
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-gray-300 pt-16 pb-10 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-700" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">TechAdvisory</h3>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Cabinet SaaS de conseil en technologies numériques. Nous accompagnons votre croissance avec des solutions
            cloud innovantes.
          </p>
          <div className="flex space-x-5 mt-6">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="text-2xl" />
            </motion.a>
            <motion.a
              href="mailto:contact@techadvisory.com"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-lg font-semibold text-white mb-5">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-200">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-lg font-semibold text-white mb-5">Ressources</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-gray-400 hover:text-white transition-colors duration-200">
                Support
              </Link>
            </li>
            <li>
              <Link href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Confidentialité
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="mt-16 border-t border-gray-700 pt-8 text-center text-sm text-gray-500 relative z-10">
        &copy; {currentYear} TechAdvisory. Tous droits réservés.
      </div>
    </footer>
  )
}
