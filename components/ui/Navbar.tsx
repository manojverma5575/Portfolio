'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const navBg = useTransform(scrollY, [0, 80], ['rgba(0,0,0,0)', 'rgba(12,12,14,0.85)'])

  useEffect(() => {
    const unsub = scrollY.on('change', v => setScrolled(v > 50))
    return () => unsub()
  }, [scrollY])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        style={{ backgroundColor: scrolled ? undefined : 'transparent' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-custom' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-xl font-bold text-primary hover:text-accent transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            MV<span style={{ color: 'var(--accent)' }}>.</span>
          </motion.a>

          {/* Desktop Links */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-body hover-underline transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </motion.ul>

          {/* Right Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </motion.div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className={`fixed top-16 left-0 right-0 z-40 md:hidden glass shadow-custom-lg ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left py-2 text-sm font-medium hover-underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </motion.div>
    </>
  )
}
