'use client'

/**
 * Responsive Social Media Links Component
 * Desktop: Shows icons + text (better UX, better SEO signal)
 * Mobile: Shows icons only (better performance)
 */

export default function SocialLinks() {
  const links = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61588221497294',
      icon: '📘',
    },
    {
      name: 'X',
      url: 'https://x.com/MohdAasif763323',
      icon: '𝕏',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohd-aasif-44121a261',
      icon: '🔗',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@violent34343',
      icon: '▶️',
    },
  ]

  return (
    <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer me"
          title={`Besuche uns auf ${link.name}`}
          className="text-gray-600 hover:text-blue-600 transition-colors no-underline text-sm md:text-base"
          aria-label={link.name}
        >
          <span className="inline-block">{link.icon}</span>
          <span className="hidden md:inline ml-1">{link.name}</span>
        </a>
      ))}
    </div>
  )
}
