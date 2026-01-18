import { Metadata } from 'next'
import MiniJobRechner from '@/components/MiniJobRechner'

export const metadata: Metadata = {
  title: 'Minijob & Nebenjob Netto-Rechner 2025 | Kostenlos & Aktuell',
  description: 'Kostenloser Minijob & Nebenjob Netto-Rechner. Berechne dein Nettogehalt bei Minijob, Nebenjob oder Werkstudentenjob in Deutschland.',
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
          "text": "Ein Minijob ist eine geringfügige Beschäftigung mit einem monatlichen Verdienst bis 556 Euro (Stand 2025). Der Arbeitgeber zahlt Pauschalabgaben, der Arbeitnehmer erhält das Bruttogehalt in der Regel als Netto."
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
          "text": "Ein Minijob ist auf 556 Euro begrenzt und weitgehend abgabenfrei für den Arbeitnehmer. Ein Nebenjob ist jede zusätzliche Beschäftigung neben dem Hauptjob, unabhängig vom Verdienst, und unterliegt der normalen Besteuerung."
        }
      }
    ]
  }

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Minijob & Nebenjob Netto-Rechner",
    "url": "https://minijob-rechner.de",
    "description": "Kostenloser Rechner zur Berechnung des Nettogehalts bei Minijob, Nebenjob und Werkstudentenjob in Deutschland.",
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
