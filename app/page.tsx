import { Metadata } from 'next'
import MiniJobRechner from '@/components/MiniJobRechner'

export const metadata: Metadata = {
  title: 'Minijob Rechner 2026 | Netto berechnen - Kostenlos & Aktuell',
  description:
    'Kostenloser Minijob Rechner 2026: Berechne dein Nettogehalt bei Minijob in Deutschland. Aktuelle Grenzwerte und einfache Berechnung.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.minijob-netto-rechner.de/',
  },
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist ein Minijob?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Minijob ist eine geringfügige Beschäftigung in Deutschland mit einer gesetzlich festgelegten monatlichen Verdienstgrenze. Für Arbeitnehmer fallen in der Regel keine klassischen Sozialabgaben an."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wird ein Minijob besteuert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minijobs können pauschal durch den Arbeitgeber versteuert werden. In bestimmten Fällen erfolgt eine individuelle Besteuerung. Die genaue Regelung hängt vom Beschäftigungsverhältnis ab."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Minijob und Nebenjob?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Minijob ist eine spezielle Form der geringfügigen Beschäftigung mit gesetzlicher Verdienstgrenze. Ein Nebenjob bezeichnet allgemein jede zusätzliche Tätigkeit neben dem Hauptberuf."
        }
      },
      {
        "@type": "Question",
        "name": "Ist der Rechner kostenlos nutzbar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, der Minijob Rechner kann kostenlos und ohne Registrierung genutzt werden."
        }
      }
    ]
  }

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Minijob Rechner 2026",
    "url": "https://www.minijob-netto-rechner.de/",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <MiniJobRechner />
    </>
  )
}
