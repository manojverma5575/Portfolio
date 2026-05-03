'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <p
          className="text-xs font-mono tracking-[0.2em] uppercase mb-4"
          style={{ color: 'var(--accent)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-display text-4xl md:text-5xl font-bold leading-tight accent-line"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--text-secondary)', ...(centered ? { marginLeft: 'auto', marginRight: 'auto' } : {}) }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
