import type { Metadata } from 'next'
import Link from 'next/link'
import { ResetConsentButton } from '@/components/CookieConsent'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.minijob-netto-rechner.de/cookie-richtlinie' },
}

const cookies = [
  { name: 'cookie_consent_v1', provider: 'minijob-netto-rechner.de', purpose: 'Speichert Ihre Cookie-Einwilligungsentscheidung', duration: '12 Monate', type: 'Notwendig' },
  { name: '_ga', provider: 'Google Analytics', purpose: 'Unterscheidet Benutzer (eindeutige ID)', duration: '2 Jahre', type: 'Analytisch' },
  { name: '_ga_R3EXTSM03B', provider: 'Google Analytics (GA4)', purpose: 'Speichert den Sitzungsstatus', duration: '2 Jahre', type: 'Analytisch' },
  { name: '_gid', provider: 'Google Analytics', purpose: 'Unterscheidet Benutzer (24h-Sitzung)', duration: '24 Stunden', type: 'Analytisch' },
]

export default function CookieRichtliniePage() {
  return (
    <>
      <style>{`
        .legal-page { max-width: 760px; margin: 0 auto; padding: 2rem 1.25rem 4rem; font-family: Arial, sans-serif; line-height: 1.7; color: #1f2937; background: #ffffff; min-height: 100vh; }
        .legal-page h1 { font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem; }
        .legal-page h2 { font-size: 1.125rem; font-weight: 700; margin: 0 0 0.75rem; border-bottom: 2px solid #e5e7eb; padding-bottom: 0.4rem; color: #111827; }
        .legal-page h3 { font-size: 1rem; font-weight: 600; margin: 1rem 0 0.5rem; color: #374151; }
        .legal-page section { margin-bottom: 2rem; }
        .legal-page p { color: #4b5563; margin: 0 0 0.75rem; }
        .legal-page a { color: #2563eb; }
        .legal-page .meta { color: #6b7280; font-size: 0.875rem; margin-bottom: 2rem; }
        .legal-page .back { color: #2563eb; font-size: 0.875rem; text-decoration: none; display: inline-block; margin-bottom: 1.5rem; }
        .cookie-table-wrap { overflow-x: auto; }
        .cookie-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        .cookie-table th { padding: 0.6rem 0.75rem; text-align: left; font-weight: 600; border-bottom: 2px solid #e5e7eb; white-space: nowrap; background: #f3f4f6; }
        .cookie-table td { padding: 0.6rem 0.75rem; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .cookie-table tr:nth-child(even) td { background: #f9fafb; }
        .badge { display: inline-block; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
        .badge-green { background: #d1fae5; color: #065f46; }
        .badge-blue { background: #dbeafe; color: #1e40af; }
        .reset-link { display: inline-block; margin-top: 0.5rem; padding: 0.5rem 1.25rem; background: #2563eb; color: #fff; border: none; border-radius: 8px; font-weight: 600; font-size: 0.875rem; text-decoration: none; cursor: pointer; }
        .reset-link:hover { background: #1d4ed8; }
        @media (prefers-color-scheme: dark) {
          .legal-page { color: #e5e7eb; background: #111827; }
          .legal-page h1 { color: #f9fafb; }
          .legal-page h2 { color: #f9fafb; border-bottom-color: #374151; }
          .legal-page h3 { color: #d1d5db; }
          .legal-page p { color: #d1d5db; }
          .legal-page a { color: #60a5fa; }
          .legal-page .meta { color: #9ca3af; }
          .cookie-table th { background: #1f2937; color: #f9fafb; border-bottom-color: #374151; }
          .cookie-table td { border-bottom-color: #374151; color: #d1d5db; }
          .cookie-table tr:nth-child(even) td { background: #111827; }
          .cookie-table tr:nth-child(odd) td { background: #1f2937; }
        }
      `}</style>
      <main className="legal-page">
        <Link href="/" className="back">← Zurück zur Startseite</Link>
        <h1>Cookie-Richtlinie</h1>
        <p className="meta">Stand: März 2026 · Gemäß DSGVO und TDDDG</p>

        <section>
          <h2>Was sind Cookies?</h2>
          <p>Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden. Sie ermöglichen es, Ihren Browser bei einem erneuten Besuch wiederzuerkennen.</p>
        </section>

        <section>
          <h2>Welche Cookies verwenden wir?</h2>
          <h3>Notwendige Cookies</h3>
          <p>Für den Betrieb der Website erforderlich. Können nicht deaktiviert werden. Speichern keine personenbezogenen Daten.</p>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
          <h3>Analytische Cookies (nur mit Einwilligung)</h3>
          <p>Mit Ihrer Einwilligung setzen wir Google Analytics 4 für anonymisierte Nutzungsstatistiken ein. Werden nur nach Zustimmung im Cookie-Banner gesetzt.</p>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>
        </section>

        <section>
          <h2>Übersicht aller Cookies</h2>
          <div className="cookie-table-wrap">
            <table className="cookie-table">
              <thead>
                <tr>{['Name', 'Anbieter', 'Zweck', 'Dauer', 'Typ'].map(h => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {cookies.map(c => (
                  <tr key={c.name}>
                    <td><code style={{ fontSize: '0.8rem' }}>{c.name}</code></td>
                    <td>{c.provider}</td>
                    <td>{c.purpose}</td>
                    <td>{c.duration}</td>
                    <td><span className={`badge ${c.type === 'Notwendig' ? 'badge-green' : 'badge-blue'}`}>{c.type}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Einwilligung verwalten</h2>
          <p>Sie können Ihre Cookie-Einwilligung jederzeit widerrufen oder ändern:</p>
          <ResetConsentButton />
          <p style={{ marginTop: '1rem' }}>Alternativ können Sie über Ihren Browser alle Cookies löschen oder blockieren.</p>
        </section>

        <section>
          <h2>Google Analytics Opt-out</h2>
          <p>Datenerfassung für alle Websites verhindern:{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out-Browser-Add-on
            </a>.
          </p>
        </section>

        <section>
          <h2>Weitere Informationen</h2>
          <p>Mehr Informationen finden Sie in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.</p>
        </section>
      </main>
    </>
  )
}