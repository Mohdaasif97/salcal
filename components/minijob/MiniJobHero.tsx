export default function MiniJobHero({ minijobLimit = 603 }: { minijobLimit?: number }) {
  const navLinks = [
    { href: "#rechner", label: "↓ Zum Rechner" },
    { href: "#erklaerung", label: "↓ Was ist Minijob?" },
    { href: "#vergleich", label: "↓ Kostenvergleich" },
    { href: "#faq", label: "↓ FAQ" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between mb-2">
          <a href="/" className="text-xs text-blue-200 hover:text-white transition-colors font-medium">
            ← Startseite
          </a>
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <span>✅ Kostenlos</span><span className="opacity-40">•</span>
            <span>✅ Aktuell 2026</span><span className="opacity-40">•</span>
            <span className="hidden sm:inline">✅ Keine Anmeldung</span><span className="hidden sm:inline opacity-40">•</span>
            <span className="hidden sm:inline">✅ DSGVO-konform</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-white leading-tight mb-1">
              Minijob Rechner 2026 – Brutto-Netto berechnen
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Kostenloser <strong className="text-white">Minijob-Rechner 2026</strong> für Deutschland. Berechne dein{' '}
              <strong className="text-white">Nettogehalt</strong> und die <strong className="text-white">Arbeitgeberkosten</strong> mit der aktuellen{' '}
              <span className="text-blue-200">Minijob-Grenze von {minijobLimit} €</span>.{' '}
              Für gewerbliche Minijobs & Privathaushalt – Brutto-Netto-Vergleich und alle Pauschalabgaben automatisch berechnet.
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 sm:gap-1 mt-2 sm:mt-0 sm:shrink-0 flex-wrap">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs text-blue-100 hover:text-white transition-colors font-semibold whitespace-nowrap bg-blue-500 bg-opacity-30 hover:bg-opacity-50 px-2 py-1 rounded">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}