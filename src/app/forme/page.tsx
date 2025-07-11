'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function RendezVousPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    position: '',
    statut: '',
    projectType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          company: '',
          position: '',
          statut: '',
          projectType: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
      } else throw new Error('Erreur');
    } catch {
      setStatus('error');
    }
  };

  // Reset status message after 5 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-10 text-gray-200 font-sans">
        <motion.h1
          className="text-4xl font-extrabold text-center text-white mb-8 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Demande de Rendez-vous
        </motion.h1>

        <p className="text-center text-gray-400 mb-12 max-w-lg mx-auto">
          Remplissez ce formulaire pour organiser un échange avec nos experts. Nous traitons votre demande avec soin.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            placeholder="Nom complet *"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Adresse email professionnelle *"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="text"
            name="company"
            placeholder="Nom de l'entreprise (optionnel)"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="text"
            name="position"
            placeholder="Poste occupé (optionnel)"
            value={formData.position}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Nouveau champ Statut */}
          <select
            name="statut"
            value={formData.statut}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" disabled>Statut *</option>
            <option value="Ingénieur">Ingénieur</option>
            <option value="Étudiant">Étudiant</option>
            <option value="Autre">Autre</option>
          </select>

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" disabled>Type de projet *</option>
            <option value="IA">Intelligence Artificielle</option>
            <option value="Développement">Développement Logiciel</option>
            <option value="Cybersécurité">Cybersécurité</option>
            <option value="DevOps">DevOps & Cloud</option>
            <option value="Autre">Autre</option>
          </select>

          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <textarea
            name="message"
            placeholder="Dites-nous plus sur votre besoin..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 placeholder-gray-500 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={status === 'loading'}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-lg py-4 shadow-md transition"
          >
            {status === 'loading' ? 'Envoi en cours...' : 'Prendre rendez-vous'}
          </motion.button>

          {status === 'success' && (
            <motion.p
              className="text-green-400 text-center mt-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Votre demande a été envoyée avec succès.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              className="text-red-500 text-center mt-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❌ Une erreur est survenue. Veuillez réessayer.
            </motion.p>
          )}
        </form>
      </div>
    </main>
  );
}
