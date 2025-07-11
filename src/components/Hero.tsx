'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title = "Cabinet de Conseil en Technologies",
  subtitle = "Nous accompagnons les entreprises dans leur transformation digitale avec expertise, agilité et innovation.",
  ctaText = "Découvrir nos services",
  ctaLink = "#",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white py-32 px-6 md:px-12">
      {/* Effet de fond fluide */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20 blur-2xl z-0"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, #ffffff44, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={ctaLink || '#'}
            className="inline-block bg-white/90 text-blue-800 font-medium px-6 py-3 rounded-xl shadow hover:bg-white transition duration-300"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
