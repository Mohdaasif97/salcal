import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import MidiJobHero from '@/components/midijob/MidiJobHero'
import MidiJobStats from '@/components/midijob/MidiJobStats'
import MidiJobCalculator from '@/components/midijob/MidiJobCalculator'
import MidiJobTable from '@/components/midijob/MidiJobTable'
import MidiJobInfo from '@/components/midijob/MidiJobInfo'
import MidiJobFaqStatic, { faqs } from '@/components/midijob/MidiJobFaqStatic'

const MIDIJOB_LOWER = 603
const MIDIJOB_UPPER = 2000
const YEAR = 2026

export const metadata: Metadata = {
  title: `Midijob Rechner ${YEAR} – Brutto Netto berechnen | Minijob-Netto-Rechner.de`,
  description: `Midijob Rechner ${YEAR}: Netto-Gehalt & Sozialabgaben im Übergangsbereich berechnen. Midijob-Grenze ${MIDIJOB_LOWER},01€–${MIDIJOB_UPPER}€, Faktor F ${YEAR}. Kostenlos & aktuell.`,
  // ── NEW: robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: { canonical: 'https://www.minijob-netto-rechner.de/midijob-rechner' },
  openGraph: {
    title: `Midijob Rechner ${YEAR} – Kostenlos Brutto Netto berechnen`,
    description: `Midijob-Grenze ${MIDIJOB_LOWER},01€–${MIDIJOB_UPPER}€: Netto-Gehalt & Arbeitgeberkosten sofort berechnen. Alle Steuerklassen, Faktor F ${YEAR}. Kostenlos, ohne Anmeldung.`,
    url: 'https://www.minijob-netto-rechner.de/midijob-rechner',
    siteName: 'Minijob-Netto-Rechner.de',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `Midijob Rechner ${YEAR}`,
    description: `Netto-Gehalt im Midijob berechnen. Übergangsbereich: ${MIDIJOB_LOWER},01€–${MIDIJOB_UPPER}€/Monat.`,
  },
}

// JSON-LD structured data for Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: `Midijob Rechner ${YEAR}`,
      url: 'https://www.minijob-netto-rechner.de/midijob-rechner',
      description: `Kostenloser Midijob Rechner ${YEAR} für Deutschland. Berechne Netto-Gehalt und Sozialversicherungsbeiträge im Übergangsbereich ${MIDIJOB_LOWER},01€–${MIDIJOB_UPPER}€.`,
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
    // ── NEW: HowTo schema ──
    {
      '@type': 'HowTo',
      name: `Midijob Netto berechnen ${YEAR} – Schritt-für-Schritt`,
      description: `So berechnen Sie Ihr Nettogehalt im Midijob ${YEAR} mit der Gleitzonenformel (§ 20 SGB IV, Faktor F = 0,6619).`,
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Bruttogehalt prüfen',
          text: `Stellen Sie sicher, dass Ihr monatliches Bruttogehalt zwischen ${MIDIJOB_LOWER},01 € und ${MIDIJOB_UPPER} € liegt – nur dann gilt die Midijob-Regelung.`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Bemessungsgrundlage Arbeitnehmer berechnen',
          text: `BE_AN = 1,4316 × Bruttogehalt − 863,28 (Faktor F = 0,6619 für ${YEAR}). Dies ergibt die reduzierte Basis für Ihre SV-Beiträge.`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'SV-Beiträge des Arbeitnehmers berechnen',
          text: 'Multiplizieren Sie BE_AN mit dem halben Gesamtbeitragssatz: KV 8,75% + PV 1,8% + RV 9,3% + AV 1,3% = 21,15%.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Nettolohn ermitteln',
          text: 'Netto (vor Lohnsteuer) = Bruttogehalt − AN-SV-Beiträge. Die Lohnsteuer wird zusätzlich je nach Steuerklasse abgezogen.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Ersparnis gegenüber Vollzeit berechnen',
          text: 'Ersparnis = (Bruttogehalt × 21,15%) − AN-SV-Beiträge. Je niedriger das Gehalt im Übergangsbereich, desto höher die prozentuale Entlastung.',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.minijob-netto-rechner.de' },
        { '@type': 'ListItem', position: 2, name: 'Midijob Rechner', item: 'https://www.minijob-netto-rechner.de/midijob-rechner' },
      ],
    },
  ],
}

export default function MidijobRechnerPage() {
  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Server-rendered hero */}
        <MidiJobHero lowerLimit={MIDIJOB_LOWER} upperLimit={MIDIJOB_UPPER} />
        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          {/* Server-rendered stats */}
          <MidiJobStats lowerLimit={MIDIJOB_LOWER} upperLimit={MIDIJOB_UPPER} />
          {/* Client component — interactive calculator */}
          <section id="rechner" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              Midijob Rechner Brutto Netto {YEAR} – Sozialabgaben berechnen
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Midijob Brutto Netto Rechner: Netto-Gehalt &amp; Arbeitgeberkosten im Übergangsbereich sofort ermitteln
            </p>
            <MidiJobCalculator />
          </section>
          {/* Server-rendered comparison table */}
          <MidiJobTable />
          {/* Server-rendered explanatory content */}
          <MidiJobInfo />
          {/* Server-rendered FAQ */}
          <MidiJobFaqStatic />
          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Dieser <strong>Midijob Rechner</strong> dient nur zur <strong>Orientierung</strong> und ersetzt{' '}
                  <strong>KEINE</strong> steuerliche oder rechtliche Beratung. Die Lohnsteuerberechnung ist vereinfacht
                  dargestellt – für eine verbindliche Auskunft wenden Sie sich bitte an einen{' '}
                  <strong>Steuerberater</strong> oder Ihre <strong>Krankenkasse</strong>.
                </p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-500 mb-8">
            <p><strong>Minijob-Netto-Rechner.de</strong> – Kostenloser Midijob Rechner für Deutschland</p>
            <p>Stand: {YEAR} • Faktor F: 0,6619 • Alle Angaben ohne Gewähr • Aktualisiert: Januar {YEAR}</p>
          </footer>
        </main>
      </div>
    </>
  )
}