import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import Footer from '../components/Footer'

const GA_ID = 'G-EHTS48E8ZV'

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
        {/*
          GDPR-compliant GA4 setup:
          - Consent is initialized as 'denied' BEFORE GA loads
          - Returning users who already accepted have consent restored immediately from localStorage
          - CookieConsent component calls gtag('consent','update') for new users if they accept
          - GA4 respects the consent mode and will not set cookies until granted
        */}
        <Script id="gtag-consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            try {
              var saved = JSON.parse(localStorage.getItem('cookie_consent_v1') || 'null');
              if (saved && saved.given && saved.analytics) {
                gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied' });
              } else {
                gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied' });
              }
            } catch(e) {
              gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied' });
            }
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}
        </Script>
      </head>
      <body>
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
