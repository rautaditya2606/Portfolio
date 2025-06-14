'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: (e?: React.MouseEvent) => void
  ripplePosition: { x: number; y: number } | null
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    // Remove any existing class first
    document.documentElement.classList.remove('dark')
    
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme
    
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = (e?: React.MouseEvent) => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    
    // Update state
    setTheme(newTheme)
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme)
    
    // Update DOM
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Handle ripple animation
    if (e) {
      setRipplePosition({ x: e.clientX, y: e.clientY })
      setTimeout(() => setRipplePosition(null), 1000)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, ripplePosition }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
