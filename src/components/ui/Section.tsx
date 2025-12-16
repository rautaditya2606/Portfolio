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
        'w-full px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20',
        fullHeight && 'h-[100dvh] flex flex-col',
        className
      )}
      style={fullHeight ? { marginTop: 'calc(-1 * var(--navbar-height, 64px))', paddingTop: 'var(--navbar-height, 64px)' } : undefined}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl", fullHeight && "flex-grow flex flex-col justify-center")}>
        {children}
      </div>
    </m.section>
  )
}
