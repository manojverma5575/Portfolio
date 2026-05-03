'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import resumeData from '@/data/resume.json'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications"
          subtitle="Validated skills through structured learning and professional certification programs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(232,97,44,0.12)' }}
              className="group relative p-6 rounded-2xl overflow-hidden transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(ellipse at top right, rgba(232,97,44,0.06) 0%, transparent 60%)',
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{cert.icon}</span>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(232,97,44,0.15)', color: 'var(--accent)' }}
                  >
                    <CheckCircle size={14} />
                  </motion.div>
                </div>

                {/* Title */}
                <h3
                  className="font-semibold text-base leading-snug mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5">
                  <Shield size={12} style={{ color: 'var(--accent)' }} />
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {cert.issuer}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Total count badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono"
            style={{
              background: 'rgba(232,97,44,0.1)',
              color: 'var(--accent)',
              border: '1px solid rgba(232,97,44,0.2)',
            }}
          >
            <CheckCircle size={14} />
            {resumeData.certifications.length} Certifications Earned
          </span>
        </motion.div>
      </div>
    </section>
  )
}
