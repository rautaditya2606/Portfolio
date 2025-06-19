export const smoothScrollTo = (targetId: string, offset: number = 80) => {
  const targetElement = document.getElementById(targetId)
  
  if (targetElement) {
    const targetPosition = targetElement.offsetTop - offset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1000
    let start: number | null = null

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const run = ease(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
  }
}

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  const href = e.currentTarget.getAttribute('href')
  
  if (href && href.startsWith('#')) {
    const targetId = href.substring(1)
    smoothScrollTo(targetId)
  }
} 