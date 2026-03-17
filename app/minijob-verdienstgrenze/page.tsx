import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MinijobVerdienstgrenzeHero from '@/components/minijob-verdienstgrenze/MinijobVerdienstgrenzeHero'
import MinijobVerdienstgrenzeStats from '@/components/minijob-verdienstgrenze/MinijobVerdienstgrenzeStats'
import MinijobVerdienstgrenzeContent from '@/components/minijob-verdienstgrenze/MinijobVerdienstgrenzeContent'
import MinijobVerdienstgrenzeFaq, { faqsVerdienstgrenze } from '@/components/minijob-verdienstgrenze/MinijobVerdienstgrenzeFaq'

const YEAR = 2026
const LIMIT = 603
const CANONICAL_URL = 'https://www.minijob-netto-rechner.de/minijob-verdienstgrenze'

export const metadata: Metadata = {
  title: `Minijob Verdienstgrenze ${YEAR} – ${LIMIT} Euro aktuell | Minijob-Netto-Rechner.de`,
  description: `Minijob Verdienstgrenze ${YEAR}: ${LIMIT} Euro pro Monat (7.236 €/Jahr) ab Januar ${YEAR}. Berechnung, Überschreitung, Sozialversicherung & FAQ zur Minijob Verdienstgrenze erklärt.`,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: CANONICAL_URL },

  openGraph: {
    title: `Minijob Verdienstgrenze ${YEAR} – ${LIMIT} Euro Monat aktuell`,
    description: `Minijob Verdienstgrenze ${YEAR}: ${LIMIT} €/Monat, 7.236 €/Jahr. Berechnung, Ausnahmen, Sozialversicherung und Tabellen für ${YEAR}.`,
    url: CANONICAL_URL,
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'article',
  },

  twitter: {
    card: 'summary',
    title: `Minijob Verdienstgrenze ${YEAR}: ${LIMIT} Euro pro Monat`,
    description: `Minijob Verdienstgrenze ${YEAR} = ${LIMIT} €/Monat. Berechnung, Ausnahmen & FAQ.`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: `Minijob Verdienstgrenze ${YEAR} – ${LIMIT} Euro pro Monat aktuell`,
      description: `Alles zur Minijob Verdienstgrenze ${YEAR}: ${LIMIT} Euro monatlich, Berechnung, Ausnahmen und Sozialversicherung im Überblick.`,
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
      mainEntity: faqsVerdienstgrenze.map((faq) => ({
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
          name: `Minijob Verdienstgrenze ${YEAR}`,
          item: CANONICAL_URL,
        },
      ],
    },
  ],
}

export default function MinijobVerdienstgrenzePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        <MinijobVerdienstgrenzeHero />

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <MinijobVerdienstgrenzeStats />
          <MinijobVerdienstgrenzeContent />
          <MinijobVerdienstgrenzeFaq />

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Diese Seite zur <strong>Minijob Verdienstgrenze {YEAR}</strong> dient ausschließlich zur{' '}
                  <strong>Information und Orientierung</strong>. Sie ersetzt <strong>KEINE</strong> steuerliche
                  oder rechtliche Beratung. Für verbindliche Auskünfte wenden Sie sich bitte an einen{' '}
                  <strong>Steuerberater</strong>, die <strong>Minijob-Zentrale</strong> (0355/2902-70799)
                  oder Ihre zuständige <strong>Krankenkasse</strong>. Alle Angaben nach bestem Wissen,
                  Stand: Januar {YEAR}.
                </p>
              </div>
            </div>
          </div>

          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-500 mb-8">
            <p>
              <strong>Minijob-Netto-Rechner.de</strong> – Informationen zur Minijob Verdienstgrenze {YEAR} in Deutschland
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
