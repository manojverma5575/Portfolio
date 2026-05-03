'use client'

import { motion } from 'framer-motion'
import { Download, User, Briefcase, GraduationCap, Award, Code } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import resumeData from '@/data/resume.json'

function ResumeBlock({
  icon: Icon,
  title,
  children,
  index,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-6 rounded-2xl"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(232,97,44,0.12)', color: 'var(--accent)' }}
        >
          <Icon size={16} />
        </div>
        <h3 className="font-display text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
      </div>
      {children}
    </motion.div>
  )
}

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-padding"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
          <SectionHeading eyebrow="CV" title="My Resume" />

        <motion.a
  href="/manoj__Copy_.pdf"
  download="Manoj_Resume.pdf"
  


            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(232,97,44,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white flex-shrink-0 mb-4"
            style={{ background: 'var(--accent)' }}
          >
            <Download size={15} />
            Download Resume
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            <ResumeBlock icon={User} title="Profile" index={0}>
              <div className="space-y-3">
                <div>
                  <p className="text-xl font-display font-bold" style={{ color: 'var(--text-primary)' }}>
                    {resumeData.name}
                  </p>
                  <p style={{ color: 'var(--accent)' }} className="text-sm font-medium">
                    {resumeData.role}
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {resumeData.summary}
                </p>
              </div>
            </ResumeBlock>

            <ResumeBlock icon={Briefcase} title="Contact" index={1}>
              <div className="space-y-2 text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
                <p>📧 {resumeData.contact.email}</p>
                <p>📞 {resumeData.contact.phone}</p>

                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  🐙 GitHub
                </a>

                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  💼 LinkedIn
                </a>
              </div>
            </ResumeBlock>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <ResumeBlock icon={Code} title="Technical Skills" index={2}>
              <div className="space-y-4">
                {Object.entries(resumeData.skills).map(([cat, skills]) => (
                  <div key={cat}>
                    <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                      {cat}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((s) => (
                        <span key={s} className="tech-pill text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock icon={GraduationCap} title="Education" index={3}>
              <div className="space-y-4">
                {resumeData.education.map((edu) => (
                  <div key={edu.degree} className="relative pl-4" style={{ borderLeft: '2px solid var(--accent)' }}>
                    <p className="text-xs font-mono" style={{ color: 'var(--accent)' }}>{edu.period}</p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{edu.degree}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{edu.institution}</p>
                  </div>
                ))}
              </div>
            </ResumeBlock>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <ResumeBlock icon={Briefcase} title="Key Projects" index={4}>
              <div className="space-y-4">
                {resumeData.projects.filter(p => p.featured).map((p) => (
                  <div key={p.id} className="relative pl-4" style={{ borderLeft: '2px solid rgba(232,97,44,0.4)' }}>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{p.title}</p>
                    <p className="text-xs mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-full font-mono"
                          style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock icon={Award} title="Certifications" index={5}>
              <div className="space-y-2">
                {resumeData.certifications.map((cert) => (
                  <div key={cert.title} className="flex items-start gap-2">
                    <span className="text-base flex-shrink-0 mt-0.5">{cert.icon}</span>
                    <div>
                      <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{cert.title}</p>
                      <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ResumeBlock>
          </div>
        </div>
      </div>
    </section>
  )
}