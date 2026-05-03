'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import resumeData from '@/data/resume.json'

const categoryColors: Record<string, string> = {
  'Desktop Application': '#E8612C',
  'AI Application': '#8B5CF6',
  'Management System': '#10B981',
  'Utility': '#3B82F6',
  'Game': '#F59E0B',
}

function FeaturedCard({ project, index }: { project: typeof resumeData.projects[0]; index: number }) {
  const color = categoryColors[project.category] || 'var(--accent)'

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="relative group rounded-3xl overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)',
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${color}08 0%, transparent 60%)` }}
      />

      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
              >
                {project.category}
              </span>
              <Star size={14} style={{ color }} fill={color} />
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Featured</span>
            </div>
            <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ml-4"
            style={{ background: `${color}15`, color }}
          >
            <ExternalLink size={18} />
          </motion.div>
        </div>

        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
            Key Features
          </p>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function ProjectCard({ project, index }: { project: typeof resumeData.projects[0]; index: number }) {
  const color = categoryColors[project.category] || 'var(--accent)'

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group p-6 rounded-2xl transition-all cursor-default"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-base leading-tight" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <span
          className="text-xs px-2 py-0.5 rounded-full ml-2 flex-shrink-0"
          style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
        >
          {project.category}
        </span>
      </div>
      <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="tech-pill text-xs">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = resumeData.projects.filter((p) => p.featured)
  const other = resumeData.projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="What I've built"
          subtitle="From desktop applications to AI assistants — a collection of projects that showcase my technical range."
        />

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mb-8">
          <h3 className="text-sm font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--text-muted)' }}>
            Other Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(showAll ? other : other.slice(0, 3)).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>

        {other.length > 3 && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
              style={{
                background: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {showAll ? (
                <><ChevronUp size={15} /> Show less</>
              ) : (
                <><ChevronDown size={15} /> Show {other.length - 3} more projects</>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}
