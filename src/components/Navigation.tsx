'use client'

import { m, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/providers/ThemeProvider'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Obsessions', href: '#obsession' },
  { name: 'Contact', href: '#contact' },
]

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-light-border dark:border-dark-border transition-colors duration-300">
      <nav className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          AR
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={(e) => toggleTheme(e)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative overflow-hidden"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            <m.div
              key={theme}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <SunIcon key="sun" className="w-5 h-5" />
              ) : (
                <MoonIcon key="moon" className="w-5 h-5" />
              )}
            </m.div>
          </AnimatePresence>
        </button>
      </nav>
    </header>
  )
}
