import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// ─── JSON-LD schemas (defined outside metadata so we can embed them in <head>) ─

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Minijob Rechner 2026',
  description:
    'Minijob Rechner 2026: Netto kostenlos berechnen. ✓ 603 € Grenze ✓ Arbeitgeber & Arbeitnehmer ✓ Gewerblich & Privathaushalt.',
  url: 'https://minijob-netto-rechner.de',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  inLanguage: 'de-DE',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist ein Minijob?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Minijob ist eine geringfügige Beschäftigung in Deutschland mit einem monatlichen Verdienst bis 603 Euro (Stand 2026), geregelt durch § 8 SGB IV. Der Arbeitgeber zahlt Pauschalabgaben, der Arbeitnehmer erhält das Gehalt weitgehend abgabenfrei.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viel Netto bekomme ich beim Minijob 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ohne Rentenversicherungspflicht: Bruttogehalt = Nettogehalt (z.B. 603 € Brutto → 603 € Netto). Mit Rentenversicherung (3,6%): 603 € Brutto → 581,27 € Netto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet ein Minijob den Arbeitgeber?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei einem gewerblichen Minijob fallen ca. 32,47 % Pauschalabgaben an. Bei 603 € Bruttogehalt betragen die Gesamtkosten für den Arbeitgeber ca. 798,79 € pro Monat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie hoch ist die Minijob-Grenze 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Minijob-Grenze beträgt ab 1. Januar 2026 genau 603 Euro pro Monat, gekoppelt an den gesetzlichen Mindestlohn von 13,90 Euro pro Stunde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viele Stunden darf ich im Minijob arbeiten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es gibt keine gesetzliche Stundenbegrenzung. Der monatliche Verdienst darf 603 € nicht überschreiten. Bei 13,90 €/h entspricht das ca. 43 Stunden pro Monat bzw. rund 10 Stunden pro Woche.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss ich einen Minijob beim Finanzamt angeben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Minijob als einzige Beschäftigung muss in der Regel nicht in der Steuererklärung angegeben werden, da der Arbeitgeber eine Pauschalsteuer von 2 % übernimmt. Bei mehreren Einkünften empfiehlt sich Rücksprache mit einem Steuerberater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Minijob im Betrieb und im Privathaushalt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei einem gewerblichen Minijob zahlt der Arbeitgeber ca. 32,47 % Pauschalabgaben (u.a. 13 % KV, 15 % RV). Im Privathaushalt sind es nur ca. 14,62 % (je 5 % für KV und RV). Privathaushalt-Arbeitgeber zahlen über 50 % weniger Abgaben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich mehrere Minijobs gleichzeitig haben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mehrere Minijobs sind erlaubt. Das Gesamteinkommen aller geringfügigen Beschäftigungen darf jedoch 603 € pro Monat nicht überschreiten. Neben einem sozialversicherungspflichtigen Hauptjob ist genau ein Minijob erlaubt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was passiert, wenn ich die Minijob-Grenze überschreite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wird die Verdienstgrenze von 603 Euro überschritten, wird das Arbeitsverhältnis sozialversicherungspflichtig und es fallen reguläre Beiträge zu Kranken-, Pflege-, Renten- und Arbeitslosenversicherung an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Haben Minijobber Anspruch auf Urlaub?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Minijobber haben denselben gesetzlichen Urlaubsanspruch wie Vollzeitbeschäftigte – anteilig nach ihren wöchentlichen Arbeitstagen.',
      },
    },
  ],
}

// ─── METADATA (fixes: description, Open Graph, Twitter, canonical, robots) ───

export const metadata: Metadata = {
  // FIX ①: Meta description (was completely missing)
  title: 'Minijob Rechner 2026 | Brutto Netto berechnen – Kostenlos & Aktuell',
  description:
    'Minijob Rechner 2026: Jetzt kostenlos Ihr Netto berechnen. ✓ Für Arbeitnehmer & Arbeitgeber ✓ Gewerblich & Privathaushalt ✓ Aktuelle 603 € Grenze. Schnell & präzise.',

  keywords:
    'Minijob Rechner, Minijob Rechner 2026, Minijob Netto berechnen, 603 Euro Job Rechner, Brutto Netto Rechner Minijob, geringfügige Beschäftigung Rechner, Minijob Arbeitgeber Kosten, Minijob Privathaushalt, Minijob Grenze 2026, Aushilfe Rechner',

  // FIX ②: Canonical URL (prevents duplicate indexing)
  alternates: {
    canonical: 'https://salcal.vercel.app',
  },

  // FIX ③: Explicit robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // FIX ④: Open Graph (WhatsApp / LinkedIn / Facebook link previews)
  openGraph: {
    title: 'Minijob Rechner 2026 | Brutto Netto berechnen',
    description:
      'Kostenlos Minijob Netto berechnen – für Arbeitnehmer & Arbeitgeber. Aktuell mit der 603 € Grenze für 2026.',
    url: 'https://minijob-netto-rechner.de',
    siteName: 'Minijob Rechner 2026',
    locale: 'de_DE',
    type: 'website',
  },

  // FIX ⑤: Twitter / X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Minijob Rechner 2026 | Brutto Netto berechnen',
    description:
      'Kostenlos Minijob Netto berechnen – aktuell mit 603 € Grenze für 2026. Für Arbeitnehmer & Arbeitgeber.',
  },
}

// ─── ROOT LAYOUT ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // FIX ⑥: lang="de" — tells Google this is German content
    <html lang="de">
      <head>
        {/* FIX ⑦: WebApplication JSON-LD — signals to Google this is a free finance tool */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        {/* FIX ⑧: FAQPage JSON-LD — enables FAQ rich snippets directly in Google results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
