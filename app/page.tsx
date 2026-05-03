'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function Home() {
  useEffect(() => {
    // Smooth reveal on load
    document.body.style.opacity = '1'
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen"
      >
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Education />
          <Certifications />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}
