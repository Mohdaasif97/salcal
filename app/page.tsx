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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema)
        }}
      />
      <MiniJobRechner />
    </>
  )
}
