import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MinijobGrenzeHero from '@/components/minijob-grenze/MinijobGrenzeHero'
import MinijobGrenzeStats from '@/components/minijob-grenze/MinijobGrenzeStats'
import MinijobGrenzeContent from '@/components/minijob-grenze/MinijobGrenzeContent'
import MinijobGrenzeFaq, { faqsGrenze } from '@/components/minijob-grenze/MinijobGrenzeFaq'

const MINIJOB_LIMIT = 603
const YEAR = 2026
const CANONICAL_URL = 'https://www.minijob-netto-rechner.de/minijob-grenze-2026'

export const metadata: Metadata = {
  title: `Minijob Grenze ${YEAR} – ${MINIJOB_LIMIT} Euro Verdienstgrenze | Minijob-Netto-Rechner.de`,
  description: `Minijob Grenze ${YEAR}: ${MINIJOB_LIMIT} Euro pro Monat (7.236 €/Jahr) ab Januar ${YEAR}. Stundenzahl, Änderungen zu 2025, Sozialversicherung & Ausnahmen zur Minijob-Grenze erklärt.`,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: CANONICAL_URL },

  openGraph: {
    title: `Minijob Grenze ${YEAR} – ${MINIJOB_LIMIT} Euro Verdienstgrenze aktuell`,
    description: `Minijob-Grenze ${YEAR} beträgt ${MINIJOB_LIMIT} Euro/Monat. Alle Infos zu Stunden, Sozialversicherung, Änderungen zu 2025 & Ausblick 2027.`,
    url: CANONICAL_URL,
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'article',
  },

  twitter: {
    card: 'summary',
    title: `Minijob Grenze ${YEAR}: ${MINIJOB_LIMIT} Euro pro Monat`,
    description: `Minijob-Verdienstgrenze ${YEAR} = ${MINIJOB_LIMIT} €/Monat. Stundentabelle, Änderungen & FAQ.`,
  },
}

// JSON-LD structured data for Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: `Minijob Grenze ${YEAR} – ${MINIJOB_LIMIT} Euro Verdienstgrenze aktuell`,
      description: `Alles zur Minijob-Grenze ${YEAR}: ${MINIJOB_LIMIT} Euro pro Monat ab Januar ${YEAR}, Stundentabelle, Vergleich 2025 vs. ${YEAR} und Ausblick auf 2027.`,
      url: CANONICAL_URL,
      inLanguage: 'de-DE',
      datePublished: `${YEAR}-01-01`,
      dateModified: `${YEAR}-01-01`,
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
      mainEntity: faqsGrenze.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.minijob-netto-rechner.de' },
        {
          '@type': 'ListItem',
          position: 2,
          name: `Minijob Grenze ${YEAR}`,
          item: CANONICAL_URL,
        },
      ],
    },
    {
      '@type': 'Table',
      name: `Minijob Stundentabelle ${YEAR}`,
      description: `Maximale Arbeitsstunden im Minijob ${YEAR} nach Stundenlohn bei Grenze ${MINIJOB_LIMIT} Euro`,
      about: {
        '@type': 'Thing',
        name: `Minijob-Grenze ${YEAR}`,
      },
    },
  ],
}

export default function MinijobGrenzePage() {
  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Server-rendered hero */}
        <MinijobGrenzeHero />

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          {/* Stats bar */}
          <MinijobGrenzeStats />

          {/* Main content sections */}
          <MinijobGrenzeContent />

          {/* FAQ */}
          <MinijobGrenzeFaq />

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Diese Seite zur <strong>Minijob-Grenze {YEAR}</strong> dient ausschließlich zur{' '}
                  <strong>Information und Orientierung</strong>. Sie ersetzt <strong>KEINE</strong> steuerliche
                  oder rechtliche Beratung. Für verbindliche Auskünfte wenden Sie sich bitte an einen{' '}
                  <strong>Steuerberater</strong>, die <strong>Minijob-Zentrale</strong> (0355/2902-70799)
                  oder Ihre zuständige <strong>Krankenkasse</strong>. Alle Angaben nach bestem Wissen,
                  Stand: Januar {YEAR}.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-500 mb-8">
            <p>
              <strong>Minijob-Netto-Rechner.de</strong> – Informationen zur Minijob-Grenze {YEAR} in Deutschland
            </p>
            <p>
              Stand: {YEAR} • Alle Angaben ohne Gewähr • Quellen: Bundesregierung, Minijob-Zentrale,
              Deutsche Rentenversicherung • Aktualisiert: Januar {YEAR}
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}