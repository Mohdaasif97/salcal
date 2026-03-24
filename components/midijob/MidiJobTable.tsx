export default function MidiJobTable() {
  const rows = [700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000]

  // 2026 Gleitzone formula (§ 20 SGB IV, Faktor F = 0.6619)
  const calc = (ae: number) => {
    const beGesamt = 1.1459205897 * ae - 291.8411794270
    const beAN = 1.4316392269 * ae - 863.2784538296
    // Standard rates: KV 14,6% + Zusatz 2,9% = 17,5%, PV 3,6%, RV 18,6%, AV 2,6% → total 42,7%
    const svGesamtRate = 0.175 + 0.036 + 0.186 + 0.026 // 0.423
    const anRate = (0.175 / 2) + (0.036 / 2) + (0.186 / 2) + (0.026 / 2) // half
    const anSV = beAN * anRate
    const agSV = beGesamt * anRate
    const netto = ae - anSV
    const vollzeitAN = ae * anRate
    const ersparnis = vollzeitAN - anSV
    return { anSV, agSV, netto, ersparnis: Math.max(0, ersparnis), gesamtAG: ae + agSV }
  }

  const fmt = (n: number) => n.toFixed(2).replace('.', ',')

  return (
    <section id="vergleich" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        Midijob Brutto Netto Tabelle 2026 – Übersicht Übergangsbereich
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Midijob Rechner Tabelle: Netto-Gehalt, Sozialabgaben &amp; Arbeitgeberkosten auf einen Blick (Steuerklasse I, ohne Kinder, Ø KV-Zusatzbeitrag 2,90%)
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Midijob Vergleichstabelle 2026">
          <thead>
            <tr className="bg-emerald-100 border-b-2 border-emerald-300">
              <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Brutto/Monat</th>
              <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">AN SV-Abzüge</th>
              <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Netto (vor Steuer)</th>
              <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">AG-Kosten gesamt</th>
              <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Ersparnis vs. Vollzeit</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((brutto, i) => {
              const r = calc(brutto)
              return (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-bold text-gray-900 border">{brutto}€</td>
                  <td className="p-2 sm:p-3 text-center text-red-600 font-semibold border">- {fmt(r.anSV)}€</td>
                  <td className="p-2 sm:p-3 text-center text-emerald-700 font-bold border">{fmt(r.netto)}€</td>
                  <td className="p-2 sm:p-3 text-center text-orange-600 font-semibold border">{fmt(r.gesamtAG)}€</td>
                  <td className="p-2 sm:p-3 text-center text-blue-600 font-bold border">+ {fmt(r.ersparnis)}€</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-gray-600">
        <strong>Hinweis:</strong> Netto vor Lohnsteuer. KV-Zusatzbeitrag Ø 2,90% (2026). Faktor F = 0,6619. Lohnsteuer abhängig von Steuerklasse, Jahreseinkommen & Freibeträgen.
      </p>
    </section>
  )
}
