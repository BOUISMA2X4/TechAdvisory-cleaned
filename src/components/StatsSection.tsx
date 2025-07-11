'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

export default function StatsSection() {
  const stats = [
    { label: 'Clients satisfaits', value: 98 },
    { label: 'Projets réalisés', value: 120 },
    { label: 'Experts certifiés', value: 15 },
    { label: 'Partenaires technologiques', value: 10 },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [counters, setCounters] = useState(stats.map(() => 0));

  const animateCounter = (finalValue: number, index: number) => {
    let start = 0;
    const duration = 1000;
    const step = Math.ceil(finalValue / (duration / 20));

    const interval = setInterval(() => {
      start += step;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(interval);
      }
      setCounters((prev) => {
        const updated = [...prev];
        updated[index] = start;
        return updated;
      });
    }, 20);
  };

  const handleMouseEnter = (index: number, value: number) => {
    setHoveredIndex(index);
    animateCounter(value, index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nos Chiffres Clés
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => handleMouseEnter(index, stat.value)}
            className="rounded-2xl p-6 bg-white/70 backdrop-blur-md shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-5xl font-extrabold text-blue-700 tracking-tight transition-all duration-300">
              {hoveredIndex === index ? counters[index] : stat.value}+
            </p>
            <p className="text-gray-600 mt-3 text-sm md:text-base font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
