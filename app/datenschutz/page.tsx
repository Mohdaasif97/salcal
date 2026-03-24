import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Minijob-Netto-Rechner.de – Informationen zur Datenverarbeitung gemäß DSGVO.',
  alternates: { canonical: 'https://www.minijob-netto-rechner.de/datenschutz' },
  robots: { index: false },
}

export default function DatenschutzPage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.25rem 4rem', fontFamily: 'Arial, sans-serif', color: '#1f2937', lineHeight: 1.7 }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/" style={{ color: '#2563eb', fontSize: '0.875rem', textDecoration: 'none' }}>
          ← Zurück zur Startseite
        </Link>
      </div>

      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Datenschutzerklärung</h1>
      <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Stand: März 2026 · Gemäß DSGVO und TDDDG
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <address style={{ fontStyle: 'normal', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem', marginTop: '0.75rem' }}>
          <strong>Aasif Mohd</strong><br />
          Berlin<br />
          10115<br />
          Deutschland<br /><br />
          E-Mail: <a href="mailto:another3975@gmail.com" style={{ color: '#2563eb' }}>another3975@gmail.com</a>
        </address>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>2. Arten der verarbeiteten Daten</h2>
        <ul style={ul}>
          <li>Zugriffsdaten / Server-Logs (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite, Browser-Typ)</li>
          <li>Nutzungsdaten (Seitenaufrufe, Verweildauer, Klickpfade) – nur bei Einwilligung</li>
          <li>Gerätedaten (Betriebssystem, Bildschirmauflösung) – nur bei Einwilligung</li>
        </ul>
        <p>Wir erheben <strong>keine</strong> personenbezogenen Daten wie Namen, E-Mail-Adressen oder Zahlungsdaten, da diese Website ausschließlich einen kostenlosen Rechner anbietet und keine Registrierung erfordert.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>3. Zweck der Datenverarbeitung</h2>
        <ul style={ul}>
          <li><strong>Technischer Betrieb:</strong> Server-Logs werden für max. 7 Tage zur Fehlerbehebung und Sicherheit gespeichert (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse).</li>
          <li><strong>Statistik & Analyse:</strong> Nutzungsstatistiken zur Verbesserung der Website – nur nach Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>4. Google Analytics (GA4)</h2>
        <p>
          Mit Ihrer Einwilligung verwenden wir Google Analytics 4, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p>
          Google Analytics verwendet Cookies, um Nutzungsdaten zu erfassen. Die dabei erhobenen Informationen werden an Server von Google übertragen. Wir haben die IP-Anonymisierung aktiviert (<code>anonymize_ip: true</code>). Wir nutzen die Funktion „Consent Mode v2", sodass Google Analytics erst nach Ihrer Einwilligung Cookies setzt.
        </p>
        <p>
          Google verarbeitet Daten ggf. in den USA. Google ist nach dem EU-US Data Privacy Framework zertifiziert (Angemessenheitsbeschluss der EU-Kommission vom 10. Juli 2023).
        </p>
        <p>
          <strong>Speicherdauer:</strong> Nutzungsdaten werden in GA4 für maximal 14 Monate gespeichert.
        </p>
        <p>
          Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Cookie-Banner erneut aufrufen (Link in der Fußzeile) oder das{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Google Analytics Opt-out-Browser-Add-on
          </a>{' '}
          installieren.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>5. Hosting</h2>
        <p>
          Diese Website wird über <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Vercel verarbeitet im Rahmen des Hostings technisch notwendige Zugriffsdaten. Zwischen uns und Vercel besteht ein Auftragsverarbeitungsvertrag (DPA). Weitere Informationen:{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Vercel Privacy Policy
          </a>.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>6. Cookies</h2>
        <p>
          Informationen zu den eingesetzten Cookies finden Sie in unserer{' '}
          <Link href="/cookie-richtlinie" style={{ color: '#2563eb' }}>Cookie-Richtlinie</Link>.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>7. Ihre Rechte</h2>
        <p>Gemäß DSGVO haben Sie folgende Rechte:</p>
        <ul style={ul}>
          <li><strong>Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre verarbeiteten Daten verlangen.</li>
          <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger Daten verlangen.</li>
          <li><strong>Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen, sofern keine Aufbewahrungspflicht besteht.</li>
          <li><strong>Einschränkung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
          <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Sie können der Verarbeitung auf Basis berechtigter Interessen widersprechen.</li>
          <li><strong>Widerruf (Art. 7 Abs. 3 DSGVO):</strong> Eine erteilte Einwilligung können Sie jederzeit widerrufen.</li>
          <li><strong>Beschwerde:</strong> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich an:{' '}
          <a href="mailto:another3975@gmail.com" style={{ color: '#2563eb' }}>
            another3975@gmail.com
          </a>
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={h2}>8. Externe Links</h2>
        <p>
          Unsere Website enthält Links zu externen Seiten. Für deren Inhalte und Datenschutzpraktiken übernehmen wir keine Verantwortung.
        </p>
      </section>

      <section>
        <h2 style={h2}>9. Aktualität dieser Erklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen unserer Dienste oder der Rechtslage anzupassen. Die jeweils aktuelle Version ist unter{' '}
          <code>minijob-netto-rechner.de/datenschutz</code> abrufbar.
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

const ul: React.CSSProperties = {
  paddingLeft: '1.25rem',
  marginBottom: '0.75rem',
}