import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #e5e7eb',
      marginTop: '3rem',
      padding: '1.5rem 1.25rem',
      background: '#f9fafb',
      fontSize: '0.8rem',
      color: '#6b7280',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', justifyContent: 'center', alignItems: 'center' }}>
        <span>© {new Date().getFullYear()} Minijob-Netto-Rechner.de</span>
        <span style={{ color: '#d1d5db' }}>|</span>
        <Link href="/impressum" style={{ color: '#6b7280', textDecoration: 'none' }}>Impressum</Link>
        <span style={{ color: '#d1d5db' }}>|</span>
        <Link href="/datenschutz" style={{ color: '#6b7280', textDecoration: 'none' }}>Datenschutz</Link>
        <span style={{ color: '#d1d5db' }}>|</span>
        <Link href="/cookie-richtlinie" style={{ color: '#6b7280', textDecoration: 'none' }}>Cookies</Link>
      </div>
      <p style={{ textAlign: 'center', marginTop: '0.75rem', marginBottom: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
        Alle Angaben ohne Gewähr. Dieser Rechner dient der unverbindlichen Orientierung.
        Im Zweifelsfall wenden Sie sich an die{' '}
        <a href="https://www.minijob-netto-rechner.de" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          Minijob-Zentrale
        </a>.
      </p>
    </footer>
  )
}
