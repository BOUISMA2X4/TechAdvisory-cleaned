'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('✅ Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
        handleClose();
      } else {
        alert('❌ Une erreur est survenue.');
      }
    } catch (err) {
      alert('❌ Erreur réseau.');
    }
  };

  return (
    <div className="w-full flex justify-center mt-16">
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110 focus:outline-none"
      >
        <span className="z-10 relative">Contactez-nous</span>
        <span
          className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          aria-hidden="true"
        ></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 relative"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                Contactez TechAdvisory
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Nom
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Votre nom complet"
                    className="w-full mt-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="adresse@email.com"
                    className="w-full mt-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Décrivez votre besoin..."
                    className="w-full mt-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Envoyer le message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
