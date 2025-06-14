'use client'

type AnimatedGradientTextProps = {
  text: string;
  className?: string;
}

export const AnimatedGradientText = ({ text, className = '' }: AnimatedGradientTextProps) => {

  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .gradient-text {
          background-image: linear-gradient(
            -45deg,
            #4f46e5,
            #06b6d4,
            #3b82f6,
            #ec4899,
            #8b5cf6,
            #06b6d4,
            #14b8a6,
            #4f46e5
          );
          background-size: 400% 400%;
          animation: gradient 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
      <span className={`gradient-text ${className}`}>
        {text}
      </span>
    </>
  )
}
