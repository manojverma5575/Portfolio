'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import resumeData from '@/data/resume.json'

const skillColors: Record<string, string> = {
  Java: '#E8612C',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  HTML: '#E34F26',
  CSS: '#1572B6',
  ReactJS: '#61DAFB',
  ExpressJS: '#68A063',
  NodeJS: '#339933',
  SQL: '#4479A1',
  'PL/SQL': '#F80000',
  MongoDB: '#47A248',
  'VS Code': '#007ACC',
  NetBeans: '#1B6AC6',
  'IntelliJ IDEA': '#FF318C',
  Eclipse: '#2C2255',
}

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  const color = skillColors[skill] || 'var(--accent)'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="relative group px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all"
      style={{
        background: `${color}15`,
        border: `1px solid ${color}30`,
        color: 'var(--text-primary)',
      }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full mr-2 align-middle"
        style={{ background: color }}
      />
      {skill}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `${color}10`, border: `1px solid ${color}50` }}
      />
    </motion.div>
  )
}

export default function About() {
  const stats = [
    { value: '10+', label: 'Projects Built' },
    { value: '5', label: 'Certifications' },
    { value: '3', label: 'Years Learning' },
    { value: '∞', label: 'Curiosity' },
  ]

  return (
    <section
      id="about"
      className="section-padding relative mb-1"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text + stats */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Crafting code with purpose "
              subtitle={resumeData.summary}
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-5 rounded-2xl"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="font-display text-4xl font-bold mb-1"
                    style={{ color: 'var(--accent)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: skills by category */}
          <div className="space-y-8">
            {Object.entries(resumeData.skills).map(([category, skills], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
              >
                <h3
                  className="text-xs font-mono tracking-[0.15em] uppercase mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <SkillBadge key={skill} skill={skill} index={ci * 4 + i} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
