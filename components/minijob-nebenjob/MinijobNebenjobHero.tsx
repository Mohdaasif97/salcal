import Link from 'next/link'

export default function MinijobNebenjobHero() {
  const navLinks = [
    { href: '#nebenjob-grundlagen', label: '↓ Grundlagen' },
    { href: '#nebenjob-hauptjob', label: '↓ Neben Hauptjob' },
    { href: '#steuern-nebenjob', label: '↓ Steuern' },
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
            <span className="hidden sm:inline">✅ Geprüfte Infos</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="hidden sm:inline">✅ DSGVO-konform</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-white leading-tight mb-1">
              Minijob als Nebenjob 2026 – Regeln, Steuern & Tipps
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              <strong className="text-white">Minijob neben dem Hauptjob?</strong> Bis{' '}
              <span className="text-blue-200">603 Euro/Monat</span> ist das problemlos möglich —
              steuerfrei für Arbeitnehmer, ohne Auswirkung auf Hauptgehalt. Was Sie als
              Arbeitnehmer und Arbeitgeber 2026 wissen müssen.
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
