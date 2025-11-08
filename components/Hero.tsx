'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  alignment?: 'left' | 'center';
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  alignment = 'center',
}: HeroProps) {
  const textAlignment = alignment === 'center' ? 'text-center' : 'text-left';
  const containerAlignment = alignment === 'center' ? 'items-center' : 'items-start';

  return (
    <section className={`relative bg-soft-gray py-24 sm:py-32 lg:py-40 overflow-hidden`}>
      {/* Geometric background elements - brutalist style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 border-4 border-olive-green opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-warm-coral opacity-20"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className={`mx-auto max-w-4xl flex flex-col ${containerAlignment}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h1
            className={`font-serif font-bold tracking-tight text-adriatic-blue text-5xl sm:text-6xl lg:text-7xl ${textAlignment}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              className={`mt-6 text-lg sm:text-xl leading-8 text-dark-gray ${textAlignment} max-w-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              {subtitle}
            </motion.p>
          )}

          {ctaText && ctaLink && (
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              <Link
                href={ctaLink}
                className="high-contrast-btn px-8 py-4 text-lg inline-block brutalist-shadow"
              >
                {ctaText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
