'use client'

import { m, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Obsessions', href: '#obsession' },
  { name: 'Contact', href: '#contact' },
]

export const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-light-border dark:border-dark-border transition-colors duration-300">
      <nav className="flex items-center justify-center px-4 py-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative">
        <Link
          href="/"
          className="absolute left-4 md:left-8 lg:left-16 text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          AR
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent hover:scale-105 transition-all duration-300 relative group px-2 py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
        </div>

        <div className="absolute right-4 md:right-8 lg:right-16 w-8 h-8"></div>
      </nav>
    </header>
  )
}
