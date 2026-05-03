'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'
import resumeData from '@/data/resume.json'

export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono flex items-center gap-1.5"
          style={{ color: 'var(--text-muted)' }}
        >
          Built with <Heart size={12} fill="var(--accent)" style={{ color: 'var(--accent)' }} /> by{' '}
          <span style={{ color: 'var(--text-primary)' }}>Manoj Verma</span>
        </motion.p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: resumeData.contact.github },
            { icon: Linkedin, href: resumeData.contact.linkedin },
            { icon: Mail, href: `mailto:${resumeData.contact.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
              style={{
                background: 'var(--bg-elevated)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
              }}
            >
              <Icon size={14} />
            </motion.a>
          ))}
        </div>

        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  )
}
