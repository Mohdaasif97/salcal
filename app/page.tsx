import { Metadata } from 'next'
import MiniJobRechner from '@/components/MiniJobRechner'

export const metadata: Metadata = {
  title: 'Minijob Rechner 2026 | Netto berechnen - Kostenlos & Aktuell',
  description: 'Kostenloser Minijob Rechner 2026: Berechne dein Nettogehalt bei Minijob (bis 603€). Auch für Nebenjob, Werkstudenten & Studenten. Aktuelle Grenzwerte 2025 & 2026.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://minijob-rechner.de',
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
          "text": "Ein Minijob ist eine geringfügige Beschäftigung mit einem monatlichen Verdienst bis 603 Euro (Stand 2026). Der Arbeitgeber zahlt Pauschalabgaben, der Arbeitnehmer erhält das Bruttogehalt in der Regel als Netto."
        }
      },
      {
        "@type": "Question",
        "name": "Muss ich einen Nebenjob versteuern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Nebenjobs sind grundsätzlich steuerpflichtig. Bei einem zweiten Job wird häufig Steuerklasse 6 angewendet, was zu höheren Abzügen führt. Die genaue Steuerlast hängt vom Gesamteinkommen ab."
        }
      },
      {
        "@type": "Question",
        "name": "Gilt das auch für Studenten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Studenten haben Sonderregelungen: Bei Minijobs gelten die gleichen Regeln. Als Werkstudent können Sie bis 20 Stunden pro Woche arbeiten und zahlen nur reduzierte Sozialversicherungsbeiträge."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Minijob und Nebenjob?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Minijob ist auf 603 Euro (2026) begrenzt und weitgehend abgabenfrei für den Arbeitnehmer. Ein Nebenjob ist jede zusätzliche Beschäftigung neben dem Hauptjob, unabhängig vom Verdienst, und unterliegt der normalen Besteuerung."
        }
      }
    ]
  }

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Minijob Rechner 2026",
    "url": "https://minijob-rechner.de",
    "description": "Kostenloser Rechner zur Berechnung des Nettogehalts bei Minijob in Deutschland. Aktuelle Grenzwerte: 556€ (2025) und 603€ (2026).",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
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
