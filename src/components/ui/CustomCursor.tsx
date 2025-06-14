'use client'

import { useEffect, useState } from 'react'
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Transform the cursor position to be centered
  const transformedX = useTransform(cursorXSpring, (x) => x - 16) // Center horizontally
  const transformedY = useTransform(cursorYSpring, (y) => y + 47) // Center vertically

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <m.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.2 }}
      style={{
        x: transformedX,
        y: transformedY,
      }}
    >
      <div className="w-8 h-8 bg-white rounded-full" />
    </m.div>
  )
}
