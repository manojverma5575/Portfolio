'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, MapPin } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import resumeData from '@/data/resume.json'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const socials = [
    {
      icon: Mail,
      label: 'Email',
      value: resumeData.contact.email,
      href: `mailto:${resumeData.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: resumeData.contact.phone,
      href: `tel:${resumeData.contact.phone}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'manojverma5575',
      href: resumeData.contact.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Manoj Verma',
      href: resumeData.contact.linkedin,
    },
  ]

  const inputStyle = {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    borderRadius: '12px',
    padding: '0.875rem 1rem',
    width: '100%',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-body)',
  }

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Open to opportunities, collaborations, and interesting conversations about technology."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info + socials */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl mb-8"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} style={{ color: 'var(--accent)' }} />
                <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                  Mumbai, Maharashtra, India
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm currently looking for junior developer opportunities. Whether you have a question,
                a project idea, or just want to say hi — my inbox is always open!
              </p>
            </motion.div>

            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: 'rgba(232,97,44,0.12)', color: 'var(--accent)' }}
                  >
                    <s.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      {s.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {s.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl text-center"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}
                >
                  <CheckCircle size={28} />
                </motion.div>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm underline"
                  style={{ color: 'var(--accent)' }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl space-y-5"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <h3 className="font-display text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                  Send a Message
                </h3>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(232,97,44,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-medium text-sm text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: 'var(--accent)' }}
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
