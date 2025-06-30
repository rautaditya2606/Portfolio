export const trackLinkClick = async (linkUrl: string, linkText?: string) => {
  try {
    const response = await fetch('/api/visiterlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        linkClicked: linkUrl,
        referrer: document.referrer || window.location.href,
      }),
    })
    
    if (!response.ok) {
      console.error('Failed to log link click')
    }
  } catch (error) {
    console.error('Error tracking link click:', error)
  }
}

export const createTrackedLink = (href: string, children: React.ReactNode, className?: string) => {
  const handleClick = () => {
    trackLinkClick(href, typeof children === 'string' ? children : undefined)
  }

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
} 