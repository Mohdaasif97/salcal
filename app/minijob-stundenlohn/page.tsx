import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MinijobStundenlohnHero from '@/components/minijob-stundenlohn/MinijobStundenlohnHero'
import MinijobStundenlohnCalculator from '@/components/minijob-stundenlohn/MinijobStundenlohnCalculator'
import MinijobStundenlohnContent from '@/components/minijob-stundenlohn/MinijobStundenlohnContent'
import MinijobStundenlohnFaq, { faqsStundenlohn } from '@/components/minijob-stundenlohn/MinijobStundenlohnFaq'

const YEAR = 2026
const CANONICAL_URL = 'https://www.minijob-netto-rechner.de/minijob-stundenlohn'

export const metadata: Metadata = {
  title: `Minijob Stundenlohn ${YEAR} – Stunden berechnen | Minijob-Netto-Rechner.de`,
  description: `Wie viele Stunden darfst du im Minijob ${YEAR} arbeiten? Stundenlohn eingeben, maximale Stunden bei 603 € sofort berechnen – inkl. Mindestlohn-Tabelle.`,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: CANONICAL_URL },

  openGraph: {
    title: `Minijob Stundenlohn ${YEAR} – Wie viele Stunden bei welchem Lohn?`,
    description: `Minijob-Stundenlohn-Rechner ${YEAR}: Stundenlohn eingeben, maximale Monats- und Wochenstunden bei 603 € Verdienstgrenze berechnen. Inkl. Mindestlohn 13,90 €.`,
    url: CANONICAL_URL,
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'article',
  },

  twitter: {
    card: 'summary',
    title: `Minijob Stundenlohn ${YEAR}`,
    description: `Stundenlohn eingeben, maximale Minijob-Stunden bei 603 € sofort berechnen. Mindestlohn ${YEAR}: 13,90 €.`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: `Minijob Stundenlohn ${YEAR} – Wie viele Stunden bei welchem Lohn?`,
      description: `Rechner und Übersicht: Wie viele Stunden sind im Minijob ${YEAR} je nach Stundenlohn möglich, ohne die 603-€-Grenze zu überschreiten? Inkl. Mindestlohn und Stundentabelle.`,
      url: CANONICAL_URL,
      inLanguage: 'de-DE',
      datePublished: `${YEAR}-09-04`,
      dateModified: '2026-09-04',
      image: {
        '@type': 'ImageObject',
        url: 'https://www.minijob-netto-rechner.de/og-image.png',
      },
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
      mainEntity: faqsStundenlohn.map((faq) => ({
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
          name: `Minijob Stundenlohn ${YEAR}`,
          item: CANONICAL_URL,
        },
      ],
    },
  ],
}

export default function MinijobStundenlohnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        <MinijobStundenlohnHero />

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <MinijobStundenlohnCalculator />
          <MinijobStundenlohnContent />
          <MinijobStundenlohnFaq />

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Diese Seite zum <strong>Minijob Stundenlohn {YEAR}</strong> dient ausschließlich zur{' '}
                  <strong>Information und Orientierung</strong> und ersetzt <strong>KEINE</strong> rechtliche
                  Beratung. Für verbindliche Auskünfte wenden Sie sich an die <strong>Minijob-Zentrale</strong>{' '}
                  (0355/2902-70799) oder einen <strong>Steuerberater</strong>. Alle Angaben nach aktuellem Stand{' '}
                  {YEAR}; tarifliche oder betriebliche Mindestlöhne können vom gesetzlichen Mindestlohn abweichen.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-500 mb-8">
            <p>
              <strong>Minijob-Netto-Rechner.de</strong> – Minijob Stundenlohn {YEAR}
            </p>
            <p>
              Stand: {YEAR} • Alle Angaben ohne Gewähr • Quellen: Minijob-Zentrale, Mindestlohnkommission,
              Bundesministerium für Arbeit • Aktualisiert: 04.09.2026
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
