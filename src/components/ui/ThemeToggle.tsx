import { useTheme } from '@/providers/ThemeProvider'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { m, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const { theme, toggleTheme, ripplePosition } = useTheme()
  const [rippleKey, setRippleKey] = useState(0)

  useEffect(() => {
    if (ripplePosition) {
      setRippleKey(prev => prev + 1)
    }
  }, [ripplePosition])

  return (
    <m.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm border border-light-border dark:border-dark-border shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon Animation */}
      <m.div
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-6 h-6 text-gray-800 dark:text-gray-200"
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <SunIcon key="sun" className="w-6 h-6" />
          ) : (
            <MoonIcon key="moon" className="w-6 h-6" />
          )}
        </AnimatePresence>
      </m.div>

      {/* Radial Ripple Effect */}
      <AnimatePresence>
        {ripplePosition && (
          <m.div
            key={`ripple-${rippleKey}`}
            initial={{ 
              opacity: 0.5,
              clipPath: 'circle(0% at center)'
            }}
            animate={{ 
              opacity: 0,
              clipPath: 'circle(150% at center)'
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className={`absolute inset-0 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-primary-500/30 to-primary-600/30' 
                : 'bg-gradient-to-r from-primary-400/30 to-primary-500/30'
            } rounded-full pointer-events-none`}
            style={{
              transformOrigin: 'center'
            }}
          />
        )}
      </AnimatePresence>
    </m.button>
  )
}
