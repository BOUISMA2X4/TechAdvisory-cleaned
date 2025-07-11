'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 font-sans antialiased">
      {/* HERO SECTION */}
   <Hero
  title="TechAdvisory - Experts en Stratégie Numérique"
  subtitle="Notre mission : booster votre performance grâce à la technologie."
  ctaText="Prenez rendez-vous"
  ctaLink="/forme" 
/>


      {/* CTA Button Contact */}
      <section className="w-full flex justify-center py-8">
        <ContactForm />
      </section>

      {/* INTRODUCTION */}
      <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-50 to-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-6 leading-tight">
            Nouvelle Technologie Advisory
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Accélérez votre croissance avec une stratégie numérique alignée sur vos objectifs business.
            Nos experts vous accompagnent de l’idée à l’implémentation.
          </p>
          <a
            href="#services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
          >
            Découvrir nos services
          </a>
        </motion.div>
      </section>

      {/* SERVICES */}
      <Services />
$
    
    </main>
  );
}
