export default function MiniJobTable() {
  const rows = [
    { brutto: 300 }, { brutto: 400 }, { brutto: 500 }, { brutto: 556 }, { brutto: 603 },
  ]

  const fmt = (n: number) => n.toFixed(2).replace('.', ',')

  return (
    <section id="vergleich" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Minijob Brutto Netto Tabelle 2026 – Abgaben Rechner Übersicht</h2>
      <p className="text-sm text-gray-600 mb-6">Minijob Brutto Netto & Arbeitgeber-Kosten auf einen Blick — Minijob Abgaben Rechner für alle gängigen Verdienste</p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Vergleichstabelle">
          <thead>
            <tr className="bg-blue-100 border-b-2 border-blue-300">
              <th className="p-2 sm:p-3 text-left font-bold text-gray-900">Brutto/Monat</th>
              <th className="p-2 sm:p-3 text-center font-bold text-gray-900">Netto (ohne RV)</th>
              <th className="p-2 sm:p-3 text-center font-bold text-gray-900">AG-Kosten Gewerblich</th>
              <th className="p-2 sm:p-3 text-center font-bold text-gray-900">AG-Kosten Privathaushalt</th>
              <th className="p-2 sm:p-3 text-center font-bold text-gray-900">Ersparnis Privathaushalt</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ brutto }, i) => {
              const costsGew = brutto * (1 + 0.13 + 0.15 + 0.02 + 0.008 + 0.0022 + 0.0015 + 0.013)
              const costsPri = brutto * (1 + 0.05 + 0.05 + 0.02 + 0.008 + 0.0022 + 0 + 0.016)
              const ersparnis = costsGew - costsPri
              return (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-bold text-gray-900 border">{brutto}€</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{fmt(brutto)}€</td>
                  <td className="p-2 sm:p-3 text-center font-semibold text-red-600 border">{fmt(costsGew)}€</td>
                  <td className="p-2 sm:p-3 text-center font-semibold text-green-800 border">{fmt(costsPri)}€</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-600 border">{fmt(ersparnis)}€</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-gray-600">
        <strong>Hinweis:</strong> Netto berechnet ohne Rentenversicherung. Alle Werte Stand 2026.
      </p>
    </section>
  )
}