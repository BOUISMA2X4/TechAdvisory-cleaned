'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactSupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    description: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isClient, setIsClient] = useState(false);

  const categories = ['IA', 'Développement logiciel', 'Cybersécurité', 'DevOps'];

  useEffect(() => {
    setIsClient(true); // S'assure que les animations complexes ne sont lancées qu'en client
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', category: '', description: '' });
      } else throw new Error('Erreur');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-neutral-900 py-24 px-6 overflow-hidden">
        {/* Background SaaS motion */}
      {isClient && (
        <motion.div
          className="absolute inset-0 z-0 bg-[url('/bg-molecules-orange.svg')] bg-cover bg-center opacity-10"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Assistance Technique Avancée
        </motion.h1>
        <p className="text-blue-800 mb-10 text-lg">
          Décrivez votre problème avec précision. Plus vous êtes clair, plus notre équipe peut vous aider efficacement.
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-xl p-8 border border-blue-100 shadow-xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom complet"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-white text-neutral-800 placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse email professionnelle"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-white text-neutral-800 placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full bg-white text-neutral-800 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Choisissez le type de problème</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Décrivez le problème aussi précisément que possible. Par ex. : les étapes, les erreurs, les résultats attendus..."
          rows={6}
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full bg-white text-neutral-800 placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 px-6 rounded-lg shadow disabled:opacity-50"
        >
          {status === 'loading' ? 'Envoi en cours...' : 'Soumettre la demande'}
        </motion.button>

        {status === 'success' && (
          <motion.p className="text-green-600 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            ✅ Message envoyé avec succès.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p className="text-red-600 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            ❌ Une erreur est survenue. Veuillez réessayer.
          </motion.p>
        )}
      </motion.form>
    </main>
  );
}
