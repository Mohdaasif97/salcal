'use client'

import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'

const MINIJOB_GRENZE = 603
const WEEKS_PER_MONTH = 52 / 12 // 4,3333 – Durchschnitt, da ein Monat nicht exakt 4 Wochen hat

const REFERENZWERTE = [13.9, 14, 15, 16, 18, 20, 22, 25]

function formatDE(n: number, digits = 2) {
  return n.toLocaleString('de-DE', { minimumFractionDigits: digits, maximumFractionDigits: digits })
}

export default function MinijobStundenlohnCalculator() {
  const [input, setInput] = useState('14,00')

  const stundenlohn = useMemo(() => {
    const parsed = parseFloat(input.replace(',', '.'))
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
  }, [input])

  const monatsstunden = stundenlohn > 0 ? MINIJOB_GRENZE / stundenlohn : 0
  const wochenstunden = stundenlohn > 0 ? monatsstunden / WEEKS_PER_MONTH : 0

  return (
    <section id="rechner" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="text-blue-600" size={24} />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Minijob-Stundenlohn-Rechner 2026</h2>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Gib deinen Stundenlohn ein — wir berechnen sofort, wie viele Stunden du im Minijob arbeiten
        kannst, ohne die Verdienstgrenze von 603 € im Monat zu überschreiten.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <label htmlFor="stundenlohn-input" className="block text-sm font-semibold text-blue-900 mb-2">
          Dein Stundenlohn
        </label>
        <div className="relative max-w-xs">
          <input
            id="stundenlohn-input"
            type="text"
            inputMode="decimal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full text-xl font-bold text-blue-900 border-2 border-blue-300 rounded-lg py-2.5 pl-4 pr-10 focus:outline-none focus:border-blue-500 bg-white"
            aria-label="Stundenlohn in Euro"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 font-semibold">€</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-white rounded-lg border border-blue-200 p-4 text-center">
            <div className="text-xs text-gray-500 mb-1">Maximal pro Monat</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700">
              {stundenlohn > 0 ? formatDE(monatsstunden) : '–'}
            </div>
            <div className="text-xs text-gray-500 mt-1">Stunden</div>
          </div>
          <div className="bg-white rounded-lg border border-blue-200 p-4 text-center">
            <div className="text-xs text-gray-500 mb-1">Durchschnittlich pro Woche</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700">
              {stundenlohn > 0 ? formatDE(wochenstunden) : '–'}
            </div>
            <div className="text-xs text-gray-500 mt-1">Stunden</div>
          </div>
        </div>
        <p className="text-xs text-blue-700 mt-3 text-center">
          Bei {stundenlohn > 0 ? formatDE(stundenlohn) : '0,00'} € Stundenlohn und 603 € Minijob-Grenze pro Monat
        </p>
      </div>

      {/* Quick-reference table */}
      <h3 id="stundentabelle" className="font-bold text-gray-900 mb-3 text-base scroll-mt-4">
        603 € Minijob-Grenze: maximale Stunden nach Stundenlohn
      </h3>
      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-xs sm:text-sm border-collapse min-w-[420px]">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="text-left py-2 px-3 font-semibold border-b border-gray-200">Stundenlohn</th>
              <th className="text-right py-2 px-3 font-semibold border-b border-gray-200">Std. / Monat</th>
              <th className="text-right py-2 px-3 font-semibold border-b border-gray-200">Std. / Woche*</th>
            </tr>
          </thead>
          <tbody>
            {REFERENZWERTE.map((rate) => {
              const monthly = MINIJOB_GRENZE / rate
              const weekly = monthly / WEEKS_PER_MONTH
              const isMinWage = rate === 13.9
              return (
                <tr key={rate} className={`border-b border-gray-100 ${isMinWage ? 'bg-yellow-50' : ''}`}>
                  <td className="py-2 px-3 font-semibold text-gray-900">
                    {formatDE(rate)} €{isMinWage && <span className="text-yellow-700 text-[10px] ml-1">(Mindestlohn)</span>}
                  </td>
                  <td className="py-2 px-3 text-right text-gray-700">{formatDE(monthly)}</td>
                  <td className="py-2 px-3 text-right text-gray-700">{formatDE(weekly)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-gray-500 mt-2">
        * Durchschnittlich gerechnet (52 Wochen ÷ 12 Monate = 4,33 Wochen/Monat). Die tatsächliche
        Stundenzahl kann von Monat zu Monat variieren.
      </p>
    </section>
  )
}
