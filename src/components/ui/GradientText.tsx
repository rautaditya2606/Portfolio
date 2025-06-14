import { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export const GradientText = ({ children, className, ...props }: GradientTextProps) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent animate-text-shimmer',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
