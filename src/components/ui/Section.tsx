'use client'

import { m, Variants, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/cn'

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  fullHeight?: boolean
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const Section = ({ children, className, fullHeight = false, ...props }: SectionProps) => {
  return (
    <m.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      className={cn(
        'w-full px-4 py-16 md:px-8 lg:px-16',
        fullHeight && 'min-h-screen',
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </m.section>
  )
}
