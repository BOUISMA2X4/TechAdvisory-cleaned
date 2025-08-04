"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { CuboidIcon as Cube, Menu, X, Sparkles, Users, Phone, Home, Settings, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

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

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-b from-gray-950/90 to-gray-900/90 shadow-xl backdrop-blur-lg border-b border-gray-800/50"
          : "bg-gray-950/80 backdrop-blur-md",
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-700 via-purple-700 to-cyan-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            >
              <Cube className="w-5 h-5 text-white" />
            </motion.div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-gray-50 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nouvelle Techno Advisory
            </h1>
            <p className="text-xs text-gray-400 flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>Innovation & Conseil</span>
            </p>
          </div>
        </Link>
        <ul className="hidden lg:flex items-center space-x-1">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "relative flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 group",
                    isActive
                      ? "text-blue-400 bg-white/10 shadow-inner border border-blue-700/50"
                      : "text-gray-300 hover:text-blue-400 hover:bg-white/5",
                  )}
                >
                  <link.icon
                    className={clsx(
                      "w-4 h-4 transition-colors duration-200",
                      isActive ? "text-blue-400" : "text-gray-500 group-hover:text-blue-400",
                    )}
                  />
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-purple-700/20 rounded-full border border-blue-600/50"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/profile">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-105">
                  <span className="relative z-10 flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Mon Profil</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>
              <Button
                onClick={() => signOut()}
                className="group relative overflow-hidden bg-red-600 to-red-700 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Déconnexion</span>
                </span>
              </Button>
            </>
          ) : (
            <Button
              onClick={() => signIn("google")}
              className="group relative overflow-hidden bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 border border-gray-700"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.62-6.62C34.14 2.57 29.42 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C13.48 13.59 18.44 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24c0-1.59-.18-3.19-.5-4.75H24v9.5h12.94c-.65 3.95-2.85 7.22-6.59 9.36l7.98 6.19C43.51 39.62 48 32.65 48 24z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M10.53 28.38c-.78-2.35-.78-4.79 0-7.14L2.56 14.09C-.83 21.04-.83 26.96 2.56 33.91l7.97-5.53z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.96-5.77l-7.98-6.19c-2.18 1.65-4.97 2.63-7.98 2.63-5.56 0-10.52-4.09-12.47-9.91L2.56 33.91C6.51 41.62 14.62 48 24 48z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
                <span>S'inscrire avec Google</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
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
                <X className="w-5 h-5 text-gray-300" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-gray-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-4 space-y-2 md:px-6">
              {links.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                        isActive
                          ? "text-blue-400 bg-white/10 shadow-sm"
                          : "text-gray-300 hover:text-blue-400 hover:bg-white/5",
                      )}
                    >
                      <link.icon className={clsx("w-4 h-4", isActive ? "text-blue-400" : "text-gray-500")} />
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 + 0.1 }}
                className="pt-4 border-t border-gray-800 mt-4"
              >
                {session ? (
                  <>
                    <Link href="/profile">
                      <Button className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 mb-2">
                        <Users className="w-4 h-4" />
                        <span>Mon Profil</span>
                      </Button>
                    </Link>
                    <Button
                      onClick={() => signOut()}
                      className="flex items-center justify-center space-x-2 w-full bg-red-600 text-white px-4 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300"
                    >
                      <span>Déconnexion</span>
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => signIn("google")}
                    className="flex items-center justify-center space-x-2 w-full bg-gray-800 text-white px-4 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 border border-gray-700"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.62-6.62C34.14 2.57 29.42 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C13.48 13.59 18.44 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24c0-1.59-.18-3.19-.5-4.75H24v9.5h12.94c-.65 3.95-2.85 7.22-6.59 9.36l7.98 6.19C43.51 39.62 48 32.65 48 24z"
                      />
                      <path
                        fill="#FBBC04"
                        d="M10.53 28.38c-.78-2.35-.78-4.79 0-7.14L2.56 14.09C-.83 21.04-.83 26.96 2.56 33.91l7.97-5.53z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.96-5.77l-7.98-6.19c-2.18 1.65-4.97 2.63-7.98 2.63-5.56 0-10.52-4.09-12.47-9.91L2.56 33.91C6.51 41.62 14.62 48 24 48z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                    <span>S'inscrire avec Google</span>
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
