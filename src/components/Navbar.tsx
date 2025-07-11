'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Equipe et projets' , href: '/Equiproj' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full backdrop-blur-md transition-shadow',
        isScrolled ? 'shadow-sm bg-white/80 border-b border-gray-200' : 'bg-white'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">
          TechAdvisory
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-blue-700'
                    : 'text-gray-700 hover:text-blue-700'
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/90 border-t border-gray-200 px-4 pb-4 space-y-3"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-blue-700 text-sm font-medium transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
