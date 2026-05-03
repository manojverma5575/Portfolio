'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import resumeData from '@/data/resume.json'

const roles = ['Java Developer', 'Backend Engineer', 'Desktop App Builder', 'Problem Solver']

function TypeWriter({ words }: { words: string[] }) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const current = words[wordIndex]
    const speed = isDeleting ? 60 : 100

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setIsDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeoutRef.current)
  }, [text, isDeleting, wordIndex, words])

  return (
    <span>
      <span style={{ color: 'var(--accent)' }}>{text}</span>
      <span className="typing-cursor" />
    </span>
  )
}

const floatingItems = [
  { label: 'Java', x: '10%', y: '25%', delay: 0 },
  { label: 'SQL', x: '85%', y: '20%', delay: 0.3 },
  { label: 'React', x: '80%', y: '70%', delay: 0.6 },
  { label: 'JDBC', x: '12%', y: '72%', delay: 0.9 },
  { label: 'OOP', x: '50%', y: '10%', delay: 1.2 },
]

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(232,97,44,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating tech pills */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.label}
          className="absolute hidden lg:flex tech-pill"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { delay: item.delay + 1, duration: 0.5 },
            scale: { delay: item.delay + 1, duration: 0.5 },
            y: {
              delay: item.delay + 1.5,
              duration: 4 + item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {item.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs font-mono tracking-[0.25em] uppercase mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          — Welcome to my portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-6xl md:text-8xl font-bold mb-4 leading-none"
          style={{ color: 'var(--text-primary)' }}
        >
          {resumeData.name.split(' ')[0]}
          <br />
          <span className="text-gradient">{resumeData.name.split(' ')[1]}</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl font-body font-light mb-8 h-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          <TypeWriter words={roles} />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          Building robust Java applications with clean architecture. Passionate about
          OOP, multithreading, and turning complex problems into elegant solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(232,97,44,0.35)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-medium text-sm text-white flex items-center gap-2 transition-all"
            style={{ background: 'var(--accent)' }}
          >
            View Projects
            <ArrowDown size={15} />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#resume"
            onClick={(e) => { e.preventDefault(); document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-8 py-3.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all border"
            style={{
              color: 'var(--text-primary)',
              borderColor: 'var(--border)',
              background: 'var(--bg-card)',
            }}
          >
            <FileText size={15} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: resumeData.contact.github, label: 'GitHub' },
            { icon: Linkedin, href: resumeData.contact.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${resumeData.contact.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: 'var(--bg-elevated)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
              aria-label={label}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 2, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  )
}
