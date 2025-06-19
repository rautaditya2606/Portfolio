'use client'

import { useEffect, useState } from 'react'
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true) // Start with true to prevent flash
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Transform the cursor position to be centered
  const transformedX = useTransform(cursorXSpring, (x) => x - 16) // Center horizontally
  const transformedY = useTransform(cursorYSpring, (y) => y + 47) // Center vertically

  useEffect(() => {
    // Check if device is mobile/touch device immediately
    const checkMobile = () => {
      // Check for touch capability
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      // Check for mobile user agent
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Check for small screen (mobile)
      const isSmallScreen = window.innerWidth <= 768
      
      // Check for pointer capability (touch vs mouse)
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches
      
      const shouldHideCursor = hasTouch || isMobileUA || isSmallScreen || hasCoarsePointer
      
      setIsMobile(shouldHideCursor)
    }

    // Check immediately
    checkMobile()

    // Also check on resize
    window.addEventListener('resize', checkMobile)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Only add mouse event listeners if not on mobile
    if (!isMobile) {
      document.addEventListener('mousemove', moveCursor)
      document.addEventListener('mouseenter', handleMouseEnter)
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', checkMobile)
    }
  }, [cursorX, cursorY, isMobile])

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null
  }

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
