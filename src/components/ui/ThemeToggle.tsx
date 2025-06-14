import { useTheme } from '@/providers/ThemeProvider'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { m } from 'framer-motion'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-lg"
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
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </m.div>
    </button>
  )
}
