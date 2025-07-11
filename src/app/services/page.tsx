'use client';

import { motion } from 'framer-motion';
import Separator from '@/components/ui/separator';
import { FaBrain, FaShieldAlt, FaCogs } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-900 font-sans px-6 py-12 space-y-16">
      {/* Intro société */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Notre Expertise en Conseil
        </motion.h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Chez <strong>Nouvelle Technologie Advisory</strong>, nous guidons nos clients vers une transformation digitale
          performante et durable. Notre approche personnalisée repose sur l’analyse stratégique, la technologie de pointe
          et une expertise sectorielle éprouvée.
        </p>
      </section>

      <Separator label="Nos Domaines de Conseil" />

      {/* Service 1 */}
      <section className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div>
          <FaBrain className="text-blue-600 text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Intelligence Artificielle & Data</h2>
          <p className="text-gray-600">
            Nous vous accompagnons dans la conception et le déploiement de solutions d’IA sur mesure pour améliorer vos
            performances, optimiser vos processus métier et exploiter la puissance de vos données.
          </p>
        </div>
        <motion.img
          src="/images/ai-consulting.webp"
          alt="AI Consulting"
          className="rounded-lg shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      <Separator label="Cybersécurité & Résilience" />

      {/* Service 2 */}
      <section className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <motion.img
          src="/images/cyber.webp"
          alt="Cybersecurity"
          className="rounded-lg shadow order-2 md:order-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="order-1 md:order-2">
          <FaShieldAlt className="text-blue-600 text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Cybersécurité & Gouvernance</h2>
          <p className="text-gray-600">
            Protégez vos actifs numériques avec des stratégies robustes : audit de sécurité, plan de réponse aux incidents,
            mise en conformité réglementaire (RGPD, NIS2).
          </p>
        </div>
      </section>

      <Separator label="Transformation Digitale & DevOps" />

      {/* Service 3 */}
      <section className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div>
          <FaCogs className="text-blue-600 text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">DevOps & Cloud Advisory</h2>
          <p className="text-gray-600">
            De la stratégie Cloud à l’implémentation DevOps, nous assurons la scalabilité, l’automatisation et la
            fiabilité de vos plateformes numériques.
          </p>
        </div>
        <motion.img
          src="/images/devops.png"
          alt="DevOps"
          className="rounded-lg shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      <Separator label="Prendre Contact avec un Consultant" />

      {/* Call to Action */}
      <div className="text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Discutons de votre projet
        </a>
      </div>
    </div>
  );
}
