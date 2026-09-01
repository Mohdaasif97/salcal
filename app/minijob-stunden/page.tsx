import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MinijobStundenHero from '@/components/minijob-stunden/MinijobStundenHero'
import MinijobStundenStats from '@/components/minijob-stunden/MinijobStundenStats'
import MinijobStundenContent from '@/components/minijob-stunden/MinijobStundenContent'
import MinijobStundenFaq, { faqsStunden } from '@/components/minijob-stunden/MinijobStundenFaq'
import AdBanner from '@/components/minijob-stunden/AdBanner'

const YEAR = 2026
const CANONICAL_URL = 'https://www.minijob-netto-rechner.de/minijob-stunden'

export const metadata: Metadata = {
  title: `Minijob Stunden ${YEAR} – Wie viele Stunden darf ich arbeiten? | Minijob-Netto-Rechner.de`,
  description: `Minijob Stunden ${YEAR}: Keine gesetzliche Stundenbegrenzung – nur 603 €/Monat zählt. Stundentabelle für alle Löhne, Berechnung & FAQ zu Minijob Stunden ${YEAR}.`,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: CANONICAL_URL },

  openGraph: {
    title: `Minijob Stunden ${YEAR} – Stundentabelle & Berechnung`,
    description: `Wie viele Stunden darf man im Minijob ${YEAR} arbeiten? Stundentabelle für alle Löhne, Formel & alle Regeln zur flexiblen Stundenverteilung.`,
    url: CANONICAL_URL,
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'article',
  },

  twitter: {
    card: 'summary',
    title: `Minijob Stunden ${YEAR}: Stundentabelle & Berechnung`,
    description: `Minijob Stunden ${YEAR}: Keine Stundengrenze – nur 603 €/Monat. Stundentabelle & Rechner.`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: `Minijob Stunden ${YEAR} – Wie viele Stunden darf ich arbeiten?`,
      description: `Alles zu Minijob Stunden ${YEAR}: keine gesetzliche Begrenzung, Stundentabelle für alle Löhne, Formel & FAQ.`,
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
      mainEntity: faqsStunden.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'Table',
      name: `Minijob Stundentabelle ${YEAR}`,
      description: `Maximale Arbeitsstunden im Minijob ${YEAR} nach Stundenlohn bei Verdienstgrenze 603 Euro`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.minijob-netto-rechner.de' },
        { '@type': 'ListItem', position: 2, name: `Minijob Stunden ${YEAR}`, item: CANONICAL_URL },
      ],
    },
  ],
}

export default function MinijobStundenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        <MinijobStundenHero />

        {/* ── Ads: both visible immediately, right below the hero ── */}
        <div className="max-w-6xl mx-auto px-4 pt-4 sm:pt-6 flex flex-col items-center gap-4">
          <AdBanner adKey="651fd88f51ec249f2c68668cd72931a8" width={320} height={50} />
          <AdBanner adKey="60325f09b6c48a1dd231fe9c5298233c" width={300} height={250} />
        </div>

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <MinijobStundenStats />
          <MinijobStundenContent />
          <MinijobStundenFaq />

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Diese Seite zu <strong>Minijob Stunden {YEAR}</strong> dient ausschließlich zur{' '}
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
              <strong>Minijob-Netto-Rechner.de</strong> – Informationen zu Minijob Stunden {YEAR} in Deutschland
            </p>
            <p>
              Stand: {YEAR} • Alle Angaben ohne Gewähr • Quellen: Bundesregierung, Minijob-Zentrale,
              Arbeitszeitgesetz • Aktualisiert: Januar {YEAR}
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}