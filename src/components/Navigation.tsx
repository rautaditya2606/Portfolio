'use client'

import { m, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { handleSmoothScroll } from '@/utils/smoothScroll'
import { useState } from 'react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Obsessions', href: '#obsession' },
  { name: 'Contact', href: '#contact' },
]

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-light-border dark:border-dark-border transition-colors duration-300">
      <nav className="flex items-center justify-center px-4 py-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative">
        <Link
          href="/"
          className="absolute left-4 md:left-8 lg:left-16 text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Aditya // Code
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleSmoothScroll}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent hover:scale-105 transition-all duration-300 relative group px-2 py-1 cursor-pointer"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden absolute right-4 w-12 h-12 flex flex-col justify-center items-center space-y-1.5 rounded-xl bg-white/40 dark:bg-gray-900/50 backdrop-blur-xl border border-white/40 dark:border-gray-600/40 hover:bg-white/60 dark:hover:bg-gray-900/70 transition-all duration-300 shadow-xl"
        >
          <span className={`w-7 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-black/70 backdrop-blur-md border-b border-gray-800 md:hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleMobileNavClick}
                    className="block text-sm font-medium text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
