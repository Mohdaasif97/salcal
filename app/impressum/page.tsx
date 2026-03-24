import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Minijob-Netto-Rechner.de – Pflichtangaben gemäß § 5 TMG / § 18 MStV.',
  alternates: { canonical: 'https://www.minijob-netto-rechner.de/impressum' },
  robots: { index: false },
}

export default function ImpressumPage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.25rem 4rem', fontFamily: 'Arial, sans-serif', color: '#1f2937', lineHeight: 1.7 }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/" style={{ color: '#2563eb', fontSize: '0.875rem', textDecoration: 'none' }}>
          ← Zurück zur Startseite
        </Link>
      </div>

      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Impressum</h1>
      <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Pflichtangaben gemäß § 5 TMG (Telemediengesetz) und § 18 MStV
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>Angaben gemäß § 5 TMG</h2>
        <address style={{ fontStyle: 'normal', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: '1.25rem' }}>
          <strong>Aasif Mohd</strong><br />
          Berlin<br />
          10115<br />
          Deutschland
        </address>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>Kontakt</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            <tr>
              <td style={td}><strong>E-Mail:</strong></td>
              <td style={td}>
                <a href="mailto:another3975@gmail.com" style={{ color: '#2563eb' }}>
                  another3975@gmail.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>Umsatzsteuer-ID</h2>
        <p>
          Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG liegt nicht vor.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</h2>
        <address style={{ fontStyle: 'normal' }}>
          Aasif Mohd<br />
          Berlin, 10115, Deutschland
        </address>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>Haftungsausschluss</h2>
        <h3 style={h3}>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Alle Berechnungen auf dieser Website dienen ausschließlich der unverbindlichen Orientierung. Für die Richtigkeit der Ergebnisse wird keine Gewähr übernommen. Im Zweifelsfall wenden Sie sich an einen Steuerberater oder die Minijob-Zentrale.
        </p>
        <h3 style={h3}>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
        <h3 style={h3}>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
        </p>
      </section>
    </main>
  )
}

const h2: React.CSSProperties = {
  fontSize: '1.125rem',
  fontWeight: 700,
  marginBottom: '0.75rem',
  marginTop: 0,
  color: '#111827',
  borderBottom: '2px solid #e5e7eb',
  paddingBottom: '0.4rem',
}

const h3: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: '0.5rem',
  marginTop: '1rem',
  color: '#374151',
}

const td: React.CSSProperties = {
  padding: '0.4rem 1rem 0.4rem 0',
  verticalAlign: 'top',
}