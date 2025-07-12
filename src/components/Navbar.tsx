"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { Brain, Menu, X, Sparkles, MessageCircle, Users, Phone, Home, Settings } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Settings },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Équipe et projets", href: "/Equiproj", icon: Users },
    { name: "Assistant IA", href: "/chat", icon: MessageCircle },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300",
        isScrolled
          ? "shadow-lg bg-gray-900/80 border-b border-gray-800/50" // Fond plus sombre au scroll
          : "bg-gray-950/80", // Fond sombre par défaut
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            >
              <Brain className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-950" // Bordure adaptée au fond sombre
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-50 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              {/* Dégradé de texte adapté au fond sombre */}
              Nouvelle Techno Advisory
            </h1>
            <p className="text-xs text-gray-400 flex items-center space-x-1">
              {" "}
              {/* Texte plus clair */}
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>Innovation & Conseil</span>
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-1">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "relative flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 group", // Rounded-full pour cohérence
                    isActive
                      ? "text-blue-400 bg-white/10 shadow-inner border border-blue-700/50" // Style actif amélioré
                      : "text-gray-300 hover:text-blue-400 hover:bg-white/5", // Style inactif amélioré
                  )}
                >
                  <link.icon
                    className={clsx(
                      "w-4 h-4 transition-colors duration-200",
                      isActive ? "text-blue-400" : "text-gray-500 group-hover:text-blue-400",
                    )}
                  />
                  <span>{link.name}</span>
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-purple-700/20 rounded-full border border-blue-600/50" // Dégradé et bordure pour l'indicateur actif
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/chatbot"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-105" // Rounded-full et ombre cohérente
          >
            <span className="relative z-10 flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Essayer l'IA</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200" // Couleurs adaptées au thème sombre
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-gray-300" /> {/* Icône plus claire */}
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-gray-300" /> {/* Icône plus claire */}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50" // Fond et bordure adaptés
          >
            <div className="px-6 py-4 space-y-2">
              {links.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                        isActive
                          ? "text-blue-400 bg-white/10 shadow-sm" // Style actif amélioré
                          : "text-gray-300 hover:text-blue-400 hover:bg-white/5", // Style inactif amélioré
                      )}
                    >
                      <link.icon className={clsx("w-4 h-4", isActive ? "text-blue-400" : "text-gray-500")} />
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-blue-400 rounded-full" // Couleur adaptée
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-gray-800" // Bordure adaptée
              >
                <Link
                  href="/chatbot"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300" // Rounded-full et ombre cohérente
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Essayer l'Assistant IA</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
