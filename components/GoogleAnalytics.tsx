'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const GA_ID = 'G-R3EXTSM03B'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_ID, { page_path: pathname })
    }
  }, [pathname])

  return null
}