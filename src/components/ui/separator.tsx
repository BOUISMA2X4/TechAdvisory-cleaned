'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SeparatorProps {
  label?: string;
  className?: string;
}

export default function Separator({ label, className }: SeparatorProps) {
  return (
    <div className={clsx("flex items-center justify-center my-10", className)}>
      <div className="w-full h-px bg-gray-300" />
      {label && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="px-4 text-sm font-medium text-gray-500 uppercase tracking-wider"
        >
          {label}
        </motion.span>
      )}
      <div className="w-full h-px bg-gray-300" />
    </div>
  );
}
