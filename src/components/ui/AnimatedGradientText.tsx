'use client'

type AnimatedGradientTextProps = {
  text: string;
  className?: string;
}

export const AnimatedGradientText = ({ text, className = '' }: AnimatedGradientTextProps) => {
  const gradientStyle = {
    background: 'linear-gradient(-45deg, #3b82f6, #06b6d4, #6366f1, #8b5cf6)',
    backgroundSize: '200% 200%',
    animation: 'gradient 4s ease infinite',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  }

  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <span style={gradientStyle} className={className}>
        {text}
      </span>
    </>
  )
}
