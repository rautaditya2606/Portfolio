'use client'

import { m } from 'framer-motion'
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
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          <m.div
            initial={false}
            animate={{
              scale: [0.8, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </m.div>
        </button>
      </nav>
    </header>
  )
}
