import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MinijobNebenjobHero from '@/components/minijob-nebenjob/MinijobNebenjobHero'
import MinijobNebenjobStats from '@/components/minijob-nebenjob/MinijobNebenjobStats'
import MinijobNebenjobContent from '@/components/minijob-nebenjob/MinijobNebenjobContent'
import MinijobNebenjobFaq, { faqsNebenjob } from '@/components/minijob-nebenjob/MinijobNebenjobFaq'

const YEAR = 2026
const CANONICAL_URL = 'https://www.minijob-netto-rechner.de/minijob-nebenjob'

export const metadata: Metadata = {
  title: `Minijob Nebenjob ${YEAR} – Regeln, Steuern & Tipps | Minijob-Netto-Rechner.de`,
  description: `Minijob als Nebenjob ${YEAR}: 603 €/Monat steuerfrei neben Hauptjob. Erlaubnis, Steuern, Auswirkungen auf BAföG & Rente. Alles für Arbeitnehmer erklärt.`,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: CANONICAL_URL },

  openGraph: {
    title: `Minijob Nebenjob ${YEAR} – Regeln, Steuern & Tipps`,
    description: `Minijob als Nebenjob ${YEAR}: Wann erlaubt? Steuern? Auswirkung auf Hauptjob, BAföG, Elterngeld & ALG I. Alles erklärt für ${YEAR}.`,
    url: CANONICAL_URL,
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'article',
  },

  twitter: {
    card: 'summary',
    title: `Minijob Nebenjob ${YEAR}: Regeln & Steuern`,
    description: `Minijob als Nebenjob ${YEAR}: 603 €/Monat, steuerfrei, kein Einfluss auf Hauptjob. FAQ & Tipps.`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: `Minijob Nebenjob ${YEAR} – Regeln, Steuern & Tipps`,
      description: `Alles zum Minijob als Nebenjob ${YEAR}: Erlaubnis, Verdienstgrenze, Steuern, Auswirkungen auf Hauptjob, BAföG, Elterngeld und ALG I.`,
      url: CANONICAL_URL,
      inLanguage: 'de-DE',
      datePublished: `${YEAR}-01-01`,
      dateModified: `${YEAR}-01-15`,
      author: {
        '@type': 'Organization',
        name: 'Minijob-Netto-Rechner.de',
        url: 'https://www.minijob-netto-rechner.de',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Minijob-Netto-Rechner.de',
        url: 'https://www.minijob-netto-rechner.de',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqsNebenjob.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.minijob-netto-rechner.de' },
        { '@type': 'ListItem', position: 2, name: `Minijob Nebenjob ${YEAR}`, item: CANONICAL_URL },
      ],
    },
  ],
}

export default function MinijobNebenjobPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        <MinijobNebenjobHero />

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <MinijobNebenjobStats />
          <MinijobNebenjobContent />
          <MinijobNebenjobFaq />

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Diese Seite zum <strong>Minijob Nebenjob {YEAR}</strong> dient ausschließlich zur{' '}
                  <strong>Information und Orientierung</strong>. Sie ersetzt <strong>KEINE</strong> steuerliche,
                  arbeitsrechtliche oder sozialrechtliche Beratung. Für verbindliche Auskünfte wenden Sie sich
                  bitte an einen <strong>Steuerberater</strong>, die{' '}
                  <strong>Minijob-Zentrale</strong> (0355/2902-70799), die{' '}
                  <strong>Bundesagentur für Arbeit</strong> oder Ihren{' '}
                  <strong>Arbeitgeber</strong>. Alle Angaben nach bestem Wissen, Stand: Januar {YEAR}.
                </p>
              </div>
            </div>
          </div>

          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-500 mb-8">
            <p>
              <strong>Minijob-Netto-Rechner.de</strong> – Informationen zum Minijob als Nebenjob {YEAR}
            </p>
            <p>
              Stand: {YEAR} • Alle Angaben ohne Gewähr • Quellen: Bundesregierung, Minijob-Zentrale,
              SGB IV, EStG • Aktualisiert: Januar {YEAR}
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
