"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Brain, Shield, Play, Star, Award, Rocket } from "lucide-react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particlePositions, setParticlePositions] = useState<
    { left: string; top: string; delay: number; duration: number }[]
  >([])

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -60]) // Slightly more parallax
  const y2 = useTransform(scrollY, [0, 300], [0, 60]) // Slightly more parallax

  useEffect(() => {
    const numParticles = 25 // Increased particles for more subtle density
    const newParticlePositions = Array.from({ length: numParticles }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 4, // Longer delay range for varied animation
      duration: Math.random() * 7 + 5, // Longer duration for slower, smoother movement
    }))
    setParticlePositions(newParticlePositions)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly increased stagger
        delayChildren: 0.4, // Increased delay for a more deliberate entrance
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 }, // Increased y for more noticeable slide-up
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // Smoother, slower transition
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white">
      {/* Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 bg-blue-500/15 rounded-full pointer-events-none z-50 mix-blend-screen blur-md" // Larger, more subtle, blurred
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 35 }} // Adjusted spring for very smooth follow
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Refined colors and lower opacity, larger blur */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-800/5 to-purple-800/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1], // Subtle scale change
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30, // Slower rotation
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-r from-cyan-800/5 to-pink-800/5 rounded-full blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05], // Subtle scale change
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35, // Slower rotation
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Grid Pattern - More subtle, larger cells */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,30,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,30,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Floating Elements (Particles) - More subtle, larger, slower */}
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 bg-blue-400/10 rounded-full" // Larger, lower opacity
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -50, 0], // Slightly larger float
              opacity: [0.05, 0.6, 0.05], // More subtle fade
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 text-center">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-12">
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center space-x-3 bg-blue-900/15 border border-blue-700/20 rounded-full px-6 py-2.5 text-base font-medium text-blue-200 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>Nouvelle génération de conseil tech</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tighter"
          >
            <span className="bg-gradient-to-r from-gray-50 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nouvelle Techno
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Advisory</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
          >
            Transformez votre vision en réalité digitale avec notre expertise en{" "}
            <span className="text-blue-400 font-semibold">IA</span>,{" "}
            <span className="text-purple-400 font-semibold">innovation</span> et{" "}
            <span className="text-cyan-400 font-semibold">stratégie tech</span>
          </motion.p>

          {/* CTA Buttons - Refined gradients and hover effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center pt-8"
          >
            <Link
              href="/forme"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-800 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-700/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Prenez rendez-vous</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/chat"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>Essayer l'Assistant IA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            {/* Nouveau bouton pour la page SEO & Contenu - conservé et stylisé */}
            <Link
              href="/seo"
              className="group relative overflow-hidden bg-gradient-to-r from-pink-700 to-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-pink-700/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 focus-visible:ring-offset-2"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Page SEO & Contenu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/services"
              className="group flex items-center space-x-3 text-gray-300 hover:text-blue-400 font-medium text-lg transition-colors duration-200 px-8 py-3 rounded-full border border-gray-700 hover:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-200 shadow-inner">
                <Play className="w-7 h-7 ml-1 text-gray-400 group-hover:text-blue-400" />
              </div>
              <span>Découvrir nos services</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-24 max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-gray-800 shadow-2xl"
          >
            {[
              { number: "500+", label: "Projets réalisés", icon: Rocket },
              { number: "98%", label: "Satisfaction client", icon: Star },
              { number: "50+", label: "Experts certifiés", icon: Award },
              { number: "24/7", label: "Support dédié", icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -10 }} // More pronounced hover
                transition={{ type: "spring", stiffness: 250, damping: 25 }} // Smoother spring
                className="text-center group cursor-pointer p-6 rounded-xl bg-gray-900/70 hover:bg-gray-800/90 transition-all duration-200 border border-transparent hover:border-blue-700 shadow-md" // Added shadow to card
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-800/50 to-purple-800/50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-shadow">
                  <stat.icon className="w-10 h-10 text-blue-400" /> {/* Larger icons */}
                </div>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div> {/* Larger number */}
                <div className="text-lg text-gray-400">{stat.label}</div> {/* Larger label */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }} // Increased delay
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }} // Larger bounce
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }} // Slower bounce
          className="w-8 h-14 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-2 h-5 bg-gray-400 rounded-full mt-3" /> {/* Larger dot */}
        </motion.div>
      </motion.div>
    </section>
  )
}
