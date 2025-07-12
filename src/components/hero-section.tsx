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
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, 50])

  useEffect(() => {
    const numParticles = 15
    const newParticlePositions = Array.from({ length: numParticles }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 3,
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-500/20 rounded-full pointer-events-none z-50 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Floating Elements */}
        {particlePositions.map(
          (
            particle,
            i, // <-- Utilisation des positions stockées
          ) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
              }}
            />
          ),
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700">
              <Sparkles className="w-4 h-4" />
              <span>Nouvelle génération de conseil tech</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </motion.div>
          {/* Main Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Nouvelle Techno
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Advisory</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Transformez votre vision en réalité digitale avec notre expertise en{" "}
            <span className="text-blue-600 font-semibold">IA</span>,{" "}
            <span className="text-purple-600 font-semibold">innovation</span> et{" "}
            <span className="text-cyan-600 font-semibold">stratégie tech</span>
          </motion.p>
          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/forme"
              className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Prenez rendez-vous</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/chatbot"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>Essayer l'Assistant IA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span>Découvrir nos services</span>
            </Link>
          </motion.div>
          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projets réalisés", icon: Rocket },
              { number: "98%", label: "Satisfaction client", icon: Star },
              { number: "50+", label: "Experts certifiés", icon: Award },
              { number: "24/7", label: "Support dédié", icon: Shield },
            ].map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
