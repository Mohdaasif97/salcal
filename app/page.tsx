import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const MiniJobRechner = dynamic(() => import('@/components/MiniJobRechner'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-white"><div className="text-gray-600">Lädt...</div></div>,
  ssr: true,
})

export const metadata: Metadata = {
  title: 'Minijob Rechner 2026 | Kostenloser Minijob Rechner - Netto berechnen',
  description:
    'Kostenloser Minijob Rechner 2026: Berechne dein Nettogehalt beim Minijob in Deutschland. Minijob Rechner mit aktuellen 2026 Grenzwerten. Einfach & schnell Minijob berechnen.',
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
