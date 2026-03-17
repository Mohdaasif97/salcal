import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const GA_ID = 'G-R3EXTSM03B'

export const metadata: Metadata = {
  title: {
    default: 'Minijob Rechner 2026 – Brutto Netto & Arbeitgeberkosten',
    template: '%s | Minijob-Netto-Rechner.de',
  },
  description:
    'Kostenloser Minijob Rechner 2026 für Deutschland. Berechne Netto-Gehalt und Arbeitgeberkosten mit Minijob-Grenze 603€. Für gewerblich & Privathaushalt.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}