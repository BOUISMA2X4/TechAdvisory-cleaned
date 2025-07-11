'use client';

import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo + Description */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">TechAdvisory</h3>
          <p className="text-sm text-gray-400 mb-4">
            Cabinet SaaS de conseil en technologies numériques. Nous accompagnons votre croissance avec des solutions cloud innovantes.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400 transition" />
            </a>
            <a href="mailto:contact@techadvisory.com">
              <FaEnvelope className="text-xl hover:text-blue-400 transition" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Accueil</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Tarifs</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Ressources */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Ressources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="#support" className="hover:text-white transition">Support</a></li>
            <li><a href="#terms" className="hover:text-white transition">Conditions</a></li>
            <li><a href="#privacy" className="hover:text-white transition">Confidentialité</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Restez informé</h4>
          <p className="text-sm text-gray-400 mb-4">
            Recevez nos actualités et conseils tech directement par e-mail.
          </p>
          <form className="flex flex-col space-y-3">
          
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TechAdvisory. Tous droits réservés.
      </div>
    </footer>
  );
}
