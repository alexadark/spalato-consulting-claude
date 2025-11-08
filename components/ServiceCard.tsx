'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  const CardContent = (
    <motion.div
      className="relative p-8 bg-white brutalist-border hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Icon */}
      <div className="mb-6 text-adriatic-blue group-hover:text-warm-coral transition-colors">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold text-adriatic-blue mb-4 group-hover:text-warm-coral transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-dark-gray leading-relaxed flex-grow">
        {description}
      </p>

      {/* Decorative element */}
      <div className="mt-6 w-12 h-1 bg-olive-green group-hover:bg-warm-coral transition-colors"></div>
    </motion.div>
  );

  if (link) {
    return (
      <Link href={link} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
