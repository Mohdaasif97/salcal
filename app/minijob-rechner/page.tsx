import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MiniJobHero from '@/components/minijob/MiniJobHero'
import MiniJobStats from '@/components/minijob/MiniJobStats'
import MiniJobCalculator from '@/components/minijob/MiniJobCalculator'
import MiniJobTable from '@/components/minijob/MiniJobTable'
import MiniJobInfo from '@/components/minijob/MiniJobInfo'
import MiniJobFaqStatic, { faqs } from '@/components/minijob/MiniJobFaqStatic'

const MINIJOB_LIMIT = 603
const YEAR = 2026

export const metadata: Metadata = {
  title: `Minijob Rechner ${YEAR} – Brutto Netto berechnen | Minijob-Netto-Rechner.de`,
  description: `Minijob-Rechner Brutto Netto ${YEAR}: Netto-Gehalt & Arbeitgeberkosten Minijob berechnen. Minijob-Grenze ${MINIJOB_LIMIT}€, Minijob Abgaben Rechner für gewerblich & Privathaushalt.`,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: 'https://www.minijob-netto-rechner.de/minijob-rechner' },
  openGraph: {
    title: `Minijob Rechner ${YEAR} – Kostenlos Brutto Netto berechnen`,
    description: `Minijob-Grenze ${MINIJOB_LIMIT}€: Netto-Gehalt & Arbeitgeberkosten sofort berechnen. Kostenlos, aktuell, ohne Anmeldung.`,
    url: 'https://www.minijob-netto-rechner.de/minijob-rechner',
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `Minijob Rechner ${YEAR}`,
    description: `Netto-Gehalt beim Minijob berechnen. Grenze: ${MINIJOB_LIMIT}€/Monat.`,
  },
}

// JSON-LD structured data for Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: `Minijob Rechner ${YEAR}`,
      url: 'https://www.minijob-netto-rechner.de/minijob-rechner',
      description: `Kostenloser Minijob Rechner ${YEAR} für Deutschland. Berechne Netto-Gehalt und Arbeitgeberkosten.`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      inLanguage: 'de-DE',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'HowTo',
      name: `Minijob Netto berechnen ${YEAR} – Schritt-für-Schritt`,
      description: `So berechnen Sie Netto-Gehalt und Arbeitgeberkosten beim Minijob ${YEAR}.`,
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Bruttogehalt eingeben',
          text: `Geben Sie das monatliche Bruttogehalt ein – maximal ${MINIJOB_LIMIT} € (Minijob-Grenze ${YEAR}).`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Art des Minijobs wählen',
          text: 'Wählen Sie zwischen gewerblichem Minijob (~32,47% AG-Abgaben) oder Privathaushalt (~14,62% AG-Abgaben).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Rentenversicherung auswählen',
          text: 'Entscheiden Sie ob der Arbeitnehmer 3,6% RV-Beitrag zahlt (Rentenpunkte) oder befreit ist (volles Netto).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Ergebnis ablesen',
          text: 'Der Rechner zeigt Netto-Gehalt, Jahresverdienst und alle Arbeitgeberkosten (KV, RV, Lohnsteuer, Umlagen, Unfallversicherung).',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.minijob-netto-rechner.de' },
        { '@type': 'ListItem', position: 2, name: 'Minijob Rechner', item: 'https://www.minijob-netto-rechner.de/minijob-rechner' },
      ],
    },
  ],
}

export default function MinijobRechnerPage() {
  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Server-rendered hero */}
        <MiniJobHero minijobLimit={MINIJOB_LIMIT} />

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          {/* Server-rendered stats */}
          <MiniJobStats minijobLimit={MINIJOB_LIMIT} />

          {/* H2 server-rendered so Google indexes it, calculator is client-only */}
          <section id="rechner" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              Minijob Rechner Arbeitgeber & Netto {YEAR} – Abgaben berechnen
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Minijob Brutto Netto Rechner: Netto-Gehalt &amp; Arbeitgeberkosten Minijob in Sekunden ermitteln
            </p>
            <MiniJobCalculator />
          </section>

          {/* Server-rendered comparison table */}
          <MiniJobTable />

          {/* Server-rendered explanatory content */}
          <MiniJobInfo />

          {/* Server-rendered FAQ */}
          <MiniJobFaqStatic />

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Dieser <strong>Minijob Rechner</strong> dient nur zur <strong>Orientierung</strong> und ersetzt{' '}
                  <strong>KEINE</strong> steuerliche oder rechtliche Beratung. Für eine verbindliche Auskunft
                  wenden Sie sich bitte an einen <strong>Steuerberater</strong> oder die{' '}
                  <strong>Minijob-Zentrale</strong> (0355/2902-70799).
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-500 mb-8">
            <p><strong>Minijob-Netto-Rechner.de</strong> – Kostenloser Minijob Rechner für Deutschland</p>
            <p>Stand: {YEAR} • Alle Angaben ohne Gewähr • Aktualisiert: Januar {YEAR}</p>
          </footer>
        </main>
      </div>
    </>
  )
}