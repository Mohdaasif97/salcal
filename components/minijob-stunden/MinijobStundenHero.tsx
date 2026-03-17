import Link from 'next/link'

export default function MinijobStundenHero() {
  const navLinks = [
    { href: '#stunden-berechnung', label: '↓ Berechnung' },
    { href: '#stundentabelle', label: '↓ Tabelle' },
    { href: '#teilzeit', label: '↓ Teilzeit/Vollzeit' },
    { href: '#faq', label: '↓ FAQ' },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between mb-2">
          <Link href="/" className="text-xs text-blue-200 hover:text-white transition-colors font-medium">
            ← Startseite
          </Link>
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <span>✅ Aktuell 2026</span>
            <span className="opacity-40">•</span>
            <span>✅ Kostenlos</span>
            <span className="opacity-40">•</span>
            <span className="hidden sm:inline">✅ Mit Stundentabelle</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-white leading-tight mb-1">
              Minijob Stunden 2026 – Wie viele Stunden darf ich arbeiten?
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              <strong className="text-white">Keine gesetzliche Stundenbegrenzung</strong> beim Minijob —
              nur der Verdienst von <span className="text-blue-200">max. 603 Euro/Monat</span> zählt.
              Stundentabelle für alle Stundenlöhne, Berechnung & Tipps für 2026.
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 sm:gap-1 mt-2 sm:mt-0 sm:shrink-0 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-blue-100 hover:text-white transition-colors font-semibold whitespace-nowrap bg-blue-500 bg-opacity-30 hover:bg-opacity-50 px-2 py-1 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
