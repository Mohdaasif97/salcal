import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MinijobKostenHero from '@/components/minijob-kosten/MinijobKostenHero'
import MinijobKostenStats from '@/components/minijob-kosten/MinijobKostenStats'
import MinijobKostenContent from '@/components/minijob-kosten/MinijobKostenContent'
import MinijobKostenFaq, { faqsKosten } from '@/components/minijob-kosten/MinijobKostenFaq'

const YEAR = 2026
const CANONICAL_URL = 'https://www.minijob-netto-rechner.de/minijob-kosten-arbeitgeber'

export const metadata: Metadata = {
  title: `Was kostet ein Minijob den Arbeitgeber ${YEAR}? – Kosten 2026`,
  description: `Was kostet ein Minijobber den Arbeitgeber 2026? Bei 603 € Bruttolohn: ca. 798 € gewerblich, 691 € im Privathaushalt (14,62%). Alle Abgaben & Umlagen erklärt.`,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: CANONICAL_URL },

  openGraph: {
    title: `Minijob Kosten Arbeitgeber ${YEAR} – Pauschalabgaben & Gesamtkosten`,
    description: `Minijob Arbeitgeberkosten ${YEAR}: Gewerblich ~798€/Monat (Beispiel, 31,17% + individuelle Unfallversicherung), Privathaushalt ~691€/Monat (14,62%). Alle Abgaben, Änderungen & Steuervorteile erklärt.`,
    url: CANONICAL_URL,
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'article',
  },

  twitter: {
    card: 'summary',
    title: `Minijob Kosten Arbeitgeber ${YEAR}`,
    description: `Gesamtkosten Minijob: ~798€ gewerblich (Beispiel), ~691€ Haushalt (14,62%). Alle Pauschalabgaben & Änderungen ${YEAR}.`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: `Minijob Kosten Arbeitgeber ${YEAR} – Alle Pauschalabgaben im Überblick`,
      description: `Vollständige Übersicht der Arbeitgeberkosten beim Minijob ${YEAR}: Pauschalabgaben, Kostenvergleich gewerblich vs. Privathaushalt, Änderungen und Steuervorteile.`,
      url: CANONICAL_URL,
      inLanguage: 'de-DE',
      datePublished: `${YEAR}-01-01`,
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
      mainEntity: faqsKosten.map((faq) => ({
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
          name: `Minijob Kosten Arbeitgeber ${YEAR}`,
          item: CANONICAL_URL,
        },
      ],
    },
  ],
}

export default function MinijobKostenArbeitgeberPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        <MinijobKostenHero />

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <MinijobKostenStats />
          <MinijobKostenContent />
          <MinijobKostenFaq />

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Diese Seite zu den <strong>Minijob Kosten für Arbeitgeber {YEAR}</strong> dient ausschließlich
                  zur <strong>Information und Orientierung</strong>. Sie ersetzt <strong>KEINE</strong> steuerliche
                  oder rechtliche Beratung. Für verbindliche Auskünfte wenden Sie sich an einen{' '}
                  <strong>Steuerberater</strong>, die <strong>Minijob-Zentrale</strong> (0355/2902-70799) oder
                  Ihren <strong>Lohnbuchhaltungsdienstleister</strong>. Alle Abgabensätze nach aktuellem Stand
                  {YEAR}, Unfallversicherungsbeiträge variieren je nach Berufsgenossenschaft.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-500 mb-8">
            <p>
              <strong>Minijob-Netto-Rechner.de</strong> – Minijob Kosten für Arbeitgeber {YEAR}
            </p>
            <p>
              Stand: {YEAR} • Alle Angaben ohne Gewähr • Quellen: Minijob-Zentrale, Deutsche Rentenversicherung,
              Bundesministerium für Arbeit • Aktualisiert: 04.09.2026
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}