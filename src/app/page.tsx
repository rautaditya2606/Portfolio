'use client'

import { AnimatedGradientText } from '@/components/ui/AnimatedGradientText'
import { Section } from '@/components/ui/Section'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import EnhancedProjects from '@/components/sections/EnhancedProjects'
import { Contact } from '@/components/sections/Contact'
import { Obsessions } from '@/components/sections/Obsessions'
import { AnimatedGreeting } from '@/components/ui/AnimatedGreeting'
import { m } from 'framer-motion'
import { handleSmoothScroll } from '@/utils/smoothScroll'
import { useEffect } from 'react'

export default function Home() { 
  useEffect(() => {
    // Log visitor when they visit the portfolio
    const logVisitor = async () => {
      try {
        const response = await fetch('/api/visiterlog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            linkClicked: window.location.href,
            referrer: document.referrer || 'Direct Visit',
            pageTitle: document.title,
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenResolution: `${screen.width}x${screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          }),
        })
        
        if (response.ok) {
          console.log('Visitor logged successfully')
        }
      } catch (error) {
        console.error('Failed to log visitor:', error)
      }
    }

    logVisitor()
  }, [])

  return (
    <main className="relative">
      <Section fullHeight className="flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Main Title with Dynamic Gradient */}
            <div>
              <m.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative flex flex-col items-center">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
                    <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] flex justify-center sm:justify-end">
                      <AnimatedGreeting className="text-center sm:text-right" />
                      <span className="ml-2">,</span>
                    </div>
                    <div className="sm:ml-3 flex items-center justify-center whitespace-nowrap">
                      <span>I&apos;m</span>
                      <AnimatedGradientText text="Aditya" className="ml-2" />
                    </div>
                  </div>
                </h1>
              </m.div>
            </div>

            {/* Role/Track with Animated Border */}
            <m.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="px-6 py-3 rounded-full border-2 border-primary-500/30 bg-primary-500/5 backdrop-blur-sm">
                <p className="text-lg md:text-xl lg:text-2xl text-primary-600 dark:text-primary-400 font-semibold">
                  Data Science Explorer | ML & MLOps Enthusiast
                </p>
              </div>
            </m.div>

            {/* Description with Fade Up Animation */}
            <m.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I&apos;m Aditya, a Computer Science student who&apos;s equally obsessed with{' '}
              <span className="text-primary-600 dark:text-primary-400">fast machines</span> and{' '}
              <span className="text-primary-600 dark:text-primary-400">big ideas</span>. I love exploring{' '}
              <span className="text-primary-600 dark:text-primary-400">military aviation</span>,{' '}
              <span className="text-primary-600 dark:text-primary-400">Italian bikes</span>, and the{' '}
              <span className="text-primary-600 dark:text-primary-400">engineering</span> behind them. Whether it&apos;s building something in code or diving deep into how things work, I&apos;m driven by curiosity and a need to create with purpose.
            </m.p>

            {/* CTA Buttons with Hover Effects */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <a
                href="#about"
                onClick={handleSmoothScroll}
                className="group relative px-8 py-3 w-48 text-lg font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
              >
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #3b82f6)',
                    animation: 'spin-slow 3s linear infinite',
                  }}
                ></div>
                <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-full"></div>
                <span className="relative z-10 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text">About Me</span>
              </a>
              <a
                href="#skills"
                onClick={handleSmoothScroll}
                className="group relative px-8 py-3 w-48 text-lg font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
              >
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #3b82f6)',
                    animation: 'spin-slow 3s linear infinite',
                  }}
                ></div>
                <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-full"></div>
                <span className="relative z-10 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text">View Skills</span>
              </a>
            </m.div>
          </m.div>
        </div>

        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-primary-700/5 to-primary-900/10 animate-gradient-xy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-700/10 via-transparent to-transparent" />
        </div>
      </Section>

      <About />
      <Skills />
      <EnhancedProjects />
      <Obsessions />
      <Contact />
    </main>
  )
}
