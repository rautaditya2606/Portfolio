'use client'

import { GradientText } from '@/components/ui/GradientText'
import { Section } from '@/components/ui/Section'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Obsessions } from '@/components/sections/Obsessions'
import { m } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative">
      <Section fullHeight className="flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I&apos;m{' '}
              <span className="text-gray-900 dark:text-white">Aditya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              Data Science Aspirant | Applied ML & MLOps Track
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              First-year CS student passionate about Applied Machine Learning, MLOps,
              and Full-Stack Development
            </p>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex gap-4 justify-center"
            >
              <a
                href="#about"
                className="inline-block px-8 py-3 text-lg font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors duration-300"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="inline-block px-8 py-3 text-lg font-medium border-2 border-primary-600 text-primary-600 dark:text-primary-500 dark:border-primary-500 rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors duration-300"
              >
                View Skills
              </a>
            </m.div>
          </m.div>
        </div>

        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20 animate-gradient-xy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />
        </div>
      </Section>

      <About />
      <Skills />
      <Projects />
      <Obsessions />
      <Contact />
    </main>
  )
}
