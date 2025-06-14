'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}
