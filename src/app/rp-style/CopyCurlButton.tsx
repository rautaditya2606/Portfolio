'use client'

import { useEffect, useMemo, useState } from 'react'

export function CopyCurlButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const label = useMemo(() => (copied ? 'Copied' : 'Copy'), [copied])

  useEffect(() => {
    if (!copied) return
    const t = window.setTimeout(() => setCopied(false), 1100)
    return () => window.clearTimeout(t)
  }, [copied])

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      // If clipboard fails, keep UX quiet (no loud error states)
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      className="rp-copy"
      data-copied={copied ? 'true' : 'false'}
      onClick={onCopy}
      aria-label="Copy cURL command"
    >
      {label}
    </button>
  )
}
