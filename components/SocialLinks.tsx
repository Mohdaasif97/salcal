'use client'

/**
 * Lightweight Social Media Links Component
 * Optimized for mobile performance and Core Web Vitals
 * Only renders icons (no text) to minimize layout shift
 */

export default function SocialLinks() {
  return (
    <div className="flex gap-2 justify-center text-lg">
      <a
        href="https://www.facebook.com/profile.php?id=61588221497294"
        target="_blank"
        rel="noopener noreferrer me"
        title="Facebook"
        className="text-gray-600 hover:text-blue-600 transition-colors no-underline"
        aria-label="Facebook"
      >
        📘
      </a>
      <a
        href="https://x.com/MohdAasif763323"
        target="_blank"
        rel="noopener noreferrer me"
        title="X"
        className="text-gray-600 hover:text-blue-600 transition-colors no-underline"
        aria-label="X"
      >
        𝕏
      </a>
      <a
        href="https://www.linkedin.com/in/mohd-aasif-44121a261"
        target="_blank"
        rel="noopener noreferrer me"
        title="LinkedIn"
        className="text-gray-600 hover:text-blue-600 transition-colors no-underline"
        aria-label="LinkedIn"
      >
        🔗
      </a>
      <a
        href="https://www.youtube.com/@violent34343"
        target="_blank"
        rel="noopener noreferrer me"
        title="YouTube"
        className="text-gray-600 hover:text-blue-600 transition-colors no-underline"
        aria-label="YouTube"
      >
        ▶️
      </a>
    </div>
  )
}
