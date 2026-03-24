import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MinijobSteuernHero from '@/components/minijob-steuern/MinijobSteuernHero'
import MinijobSteuernStats from '@/components/minijob-steuern/MinijobSteuernStats'
import MinijobSteuernContent from '@/components/minijob-steuern/MinijobSteuernContent'
import MinijobSteuernFaq, { faqsSteuern } from '@/components/minijob-steuern/MinijobSteuernFaq'

const YEAR = 2026
const CANONICAL_URL = 'https://www.minijob-netto-rechner.de/minijob-steuern'

export const metadata: Metadata = {
  title: `Minijob Steuern ${YEAR} – Pauschsteuer, Lohnsteuer & Steuererklärung | Minijob-Netto-Rechner.de`,
  description: `Minijob Steuern ${YEAR}: 2% Pauschsteuer, keine Lohnsteuer für Arbeitnehmer. Wann der Minijob in die Steuererklärung muss, was Arbeitgeber zahlen & Steuertipps.`,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: CANONICAL_URL },

  openGraph: {
    title: `Minijob Steuern ${YEAR} – Pauschsteuer & Lohnsteuer im Überblick`,
    description: `Minijob Steuern ${YEAR}: 2% Pauschsteuer, Steuererklärung, Abgaben Arbeitgeber, Steuerbonus Haushalt. Alles erklärt für Arbeitgeber und Arbeitnehmer.`,
    url: CANONICAL_URL,
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'article',
  },

  twitter: {
    card: 'summary',
    title: `Minijob Steuern ${YEAR}: 2% Pauschsteuer erklärt`,
    description: `Minijob Steuern ${YEAR}: Pauschsteuer 2%, keine Pflicht zur Steuererklärung, Arbeitgeberabgaben & FAQ.`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: `Minijob Steuern ${YEAR} – Pauschsteuer, Lohnsteuer & Steuererklärung`,
      description: `Alles zu Minijob Steuern ${YEAR}: 2%-Pauschsteuer, individuelle Besteuerung, Arbeitgeberabgaben und wann der Minijob in die Steuererklärung muss.`,
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
      mainEntity: faqsSteuern.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.minijob-netto-rechner.de' },
        { '@type': 'ListItem', position: 2, name: `Minijob Steuern ${YEAR}`, item: CANONICAL_URL },
      ],
    },
  ],
}

export default function MinijobSteuernPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        <MinijobSteuernHero />

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <MinijobSteuernStats />
          <MinijobSteuernContent />
          <MinijobSteuernFaq />

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Diese Seite zu <strong>Minijob Steuern {YEAR}</strong> dient ausschließlich zur{' '}
                  <strong>Information und Orientierung</strong>. Sie ersetzt <strong>KEINE</strong> steuerliche
                  oder rechtliche Beratung. Für verbindliche Auskünfte wenden Sie sich bitte an einen{' '}
                  <strong>Steuerberater</strong>, die <strong>Minijob-Zentrale</strong> (0355/2902-70799)
                  oder das zuständige <strong>Finanzamt</strong>. Alle Angaben nach bestem Wissen,
                  Stand: Januar {YEAR}.
                </p>
              </div>
            </div>
          </div>

          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-500 mb-8">
            <p>
              <strong>Minijob-Netto-Rechner.de</strong> – Informationen zu Minijob Steuern {YEAR} in Deutschland
            </p>
            <p>
              Stand: {YEAR} • Alle Angaben ohne Gewähr • Quellen: Bundesfinanzministerium, Minijob-Zentrale,
              ELSTER • Aktualisiert: Januar {YEAR}
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
