'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import resumeData from '@/data/resume.json'

const iconMap: Record<string, React.ElementType> = {
  graduation: GraduationCap,
  hsc: BookOpen,
  ssc: Award,
}

const colorMap: Record<string, string> = {
  graduation: '#E8612C',
  hsc: '#8B5CF6',
  ssc: '#10B981',
}

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Academic Journey"
          title="Education"
          subtitle="A foundation built through dedicated study and continuous learning."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'var(--border)' }}
          />

          <div className="space-y-12">
            {resumeData.education.map((edu, index) => {
              const Icon = iconMap[edu.type] || GraduationCap
              const color = colorMap[edu.type] || 'var(--accent)'
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      className="inline-block p-6 rounded-2xl w-full md:w-auto"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow)',
                      }}
                    >
                      <div
                        className="text-xs font-mono tracking-wider uppercase mb-2"
                        style={{ color }}
                      >
                        {edu.period}
                      </div>
                      <h3
                        className="font-display text-xl font-bold mb-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {edu.institution}
                      </p>
                    </motion.div>
                  </div>

                  {/* Icon node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      background: `${color}15`,
                      border: `2px solid ${color}`,
                      color,
                    }}
                  >
                    <Icon size={18} />
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
