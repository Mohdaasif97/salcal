'use client'

/**
 * Optimized Social Media Links Component
 * Responsive design without layout shift on either mobile or desktop
 * 
 * Desktop: Full text visible with proper spacing
 * Mobile: Icons only with minimal spacing
 * Key: Use CSS-in-JS to prevent Tailwind reflow issues
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
    <>
      <style>{`
        .social-links-container {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: nowrap;
        }
        
        .social-link {
          color: rgb(75, 85, 99);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
        }
        
        .social-link:hover {
          color: rgb(37, 99, 235);
        }
        
        .social-link-icon {
          display: inline-block;
          font-size: 1.125rem;
        }
        
        .social-link-text {
          display: none;
        }
        
        @media (min-width: 768px) {
          .social-links-container {
            gap: 0.75rem;
          }
          
          .social-link {
            font-size: 0.9375rem;
          }
          
          .social-link-text {
            display: inline;
          }
        }
      `}</style>
      
      <div className="social-links-container">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer me"
            title={`Besuche uns auf ${link.name}`}
            className="social-link"
            aria-label={link.name}
          >
            <span className="social-link-icon">{link.icon}</span>
            <span className="social-link-text">{link.name}</span>
          </a>
        ))}
      </div>
    </>
  )
}
