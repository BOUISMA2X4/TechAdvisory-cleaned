'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import { FiCloud, FiShield, FiServer, FiUsers } from 'react-icons/fi';
import { MdAutoGraph } from 'react-icons/md';

const team = [
  {
    name: 'Dr. Sara Benslimane',
    role: 'Consultante en IA & Data Science',
    degree: 'PhD en Intelligence Artificielle - Polytechnique',
    description:
      'Sara est spécialisée dans la mise en œuvre de modèles prédictifs avancés, avec plus de 8 ans d’expérience dans les secteurs de la santé et de l’industrie.',
    
  },
  {
    name: 'Yassine El Malki',
    role: 'Expert DevOps & Cloud',
    degree: 'Ingénieur ENSIAS – Certifié AWS',
    description:
      'Yassine accompagne les entreprises dans leur transformation Cloud avec des solutions DevOps robustes et scalables.',
    
  },
  {
    name: 'Nour El Houda',
    role: 'Spécialiste Cybersécurité',
    degree: 'Master Cybersécurité – CentraleSupélec',
    description:
      'Experte en gestion des risques cyber et conformité RGPD, elle a travaillé sur plusieurs audits nationaux.',
   
  },
];

const projects = [
  {
    title: 'Optimisation des flux logistiques par l’IA',
    description:
      'Mise en place d’un système prédictif pour un leader de l’agroalimentaire, réduisant les pertes de 32% en 6 mois.',
    image: '/images/optimisation_logistique_supplychain_ia.png',
  },
  {
    title: 'Audit de sécurité pour une banque régionale',
    description:
      'Conduite d’un audit complet ISO27001 et plan de remédiation sur 12 mois avec zéro incident majeur depuis.',
    image: '/images/654ac8098482d38e23dbd440_o7vOOsNHHJV6QtzEwowNqgzkXhpA-gMcm3MpYQgVml4.png',
  },
  {
    title: 'Migration vers AWS & automatisation CI/CD',
    description:
      'Déploiement d’un pipeline DevOps pour une scale-up marocaine, accélérant les releases de 3 jours à 30 min.',
    image: '/images/a1e95458-419a-4de9-85ef-b17d8340700a.png',
  },
];

export default function EquipeProjetsPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-tr from-blue-50 via-white to-blue-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-24 text-center"
        >
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
            Conseil en IA, Cloud & Cybersécurité
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous accompagnons les entreprises vers l’excellence technologique avec des solutions innovantes, durables et sécurisées.
          </p>
        </motion.div>

        <svg
          className="absolute -top-20 -right-20 w-[40rem] h-[40rem] opacity-20"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="350" cy="350" r="300" fill="url(#grad)" />
          <defs>
            <radialGradient id="grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 350) rotate(90) scale(300)">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </section>

      <div className="px-6 md:px-10 lg:px-20 py-20 space-y-32">
        {/* Équipe Section */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Équipe de Consultants
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés, engagés à propulser la transformation numérique de nos clients avec rigueur, innovation et agilité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
               
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaGraduationCap className="text-blue-600 mr-2" />
                    {member.degree}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 max-w-7xl mx-auto"></div>

        {/* Projets Réalisés */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projets d’Impact Réalisés
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des réalisations concrètes, stratégiques et mesurables dans des secteurs critiques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                    <FaProjectDiagram className="mr-2 text-blue-600" />
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{proj.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="max-w-5xl mx-auto text-center px-4 py-20 space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800"
          >
            Notre Vision du Conseil Technologique
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Chez [Nom de votre cabinet], nous croyons que le conseil ne se limite pas à donner des recommandations : il s’agit de co-créer des solutions robustes, mesurables et durables. Que ce soit en IA, en Cloud Computing ou en cybersécurité, chaque projet est une opportunité de bâtir un avenir plus performant.
          </motion.p>
          <div className="flex justify-center gap-6 pt-6 flex-wrap">
            <div className="flex items-center gap-2 text-blue-700">
              <FiCloud className="text-2xl" />
              <span>Cloud Moderne</span>
            </div>
            <div className="flex items-center gap-2 text-blue-700">
              <FiShield className="text-2xl" />
              <span>Cybersécurité Avancée</span>
            </div>
            <div className="flex items-center gap-2 text-blue-700">
              <MdAutoGraph className="text-2xl" />
              <span>IA Prédictive</span>
            </div>
            <div className="flex items-center gap-2 text-blue-700">
              <FiUsers className="text-2xl" />
              <span>Équipe Multidisciplinaire</span>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-lg text-lg font-medium shadow transition"
            >
              Discutons ensemble de votre projet
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
}