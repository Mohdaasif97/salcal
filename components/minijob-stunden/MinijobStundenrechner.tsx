'use client'

import { useMemo, useState } from 'react'
import { Calculator, AlertTriangle, CheckCircle2 } from 'lucide-react'

const VERDIENSTGRENZE = 603
const WOCHEN_PRO_MONAT = 4.33

function formatEuro(value: number) {
  return value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'
}

function formatStd(value: number) {
  return value.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' Std.'
}

export default function MinijobStundenRechner() {
  const [stundenlohn, setStundenlohn] = useState('13,90')
  const [wochenstunden, setWochenstunden] = useState('10')

  const parsed = useMemo(() => {
    const lohn = parseFloat(stundenlohn.replace(',', '.'))
    const std = parseFloat(wochenstunden.replace(',', '.'))
    return {
      lohn: Number.isFinite(lohn) && lohn > 0 ? lohn : 0,
      std: Number.isFinite(std) && std > 0 ? std : 0,
    }
  }, [stundenlohn, wochenstunden])

  const result = useMemo(() => {
    const { lohn, std } = parsed
    if (!lohn) return null

    const maxStundenMonat = VERDIENSTGRENZE / lohn
    const maxStundenWoche = maxStundenMonat / WOCHEN_PRO_MONAT
    const gewuenschterVerdienst = lohn * std * WOCHEN_PRO_MONAT
    const ueberschreitung = gewuenschterVerdienst > VERDIENSTGRENZE

    return {
      maxStundenMonat,
      maxStundenWoche,
      gewuenschterVerdienst,
      ueberschreitung,
    }
  }, [parsed])

  return (
    <section
      id="rechner"
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8 scroll-mt-4"
      aria-label="Minijob Stundenrechner 2026"
    >
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="text-blue-600" size={22} />
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Minijob-Stundenrechner 2026</h2>
      </div>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
        Tragen Sie Ihren Stundenlohn und Ihre gewünschten Wochenstunden ein — der Rechner zeigt
        sofort, wie viele Stunden bei der Verdienstgrenze von {VERDIENSTGRENZE} € maximal möglich sind.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="text-sm font-semibold text-gray-900 mb-1.5 block">Stundenlohn</span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={stundenlohn}
              onChange={(e) => setStundenlohn(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-8 text-base font-semibold text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
              aria-label="Stundenlohn in Euro"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-900 mb-1.5 block">Gewünschte Stunden / Woche</span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={wochenstunden}
              onChange={(e) => setWochenstunden(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-16 text-base font-semibold text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
              aria-label="Gewünschte Stunden pro Woche"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Std.</span>
          </div>
        </label>
      </div>

      {result ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-xs text-blue-600 font-semibold mb-1">MAX. STUNDEN / MONAT</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">{formatStd(result.maxStundenMonat)}</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-xs text-blue-600 font-semibold mb-1">MAX. STUNDEN / WOCHE</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">{formatStd(result.maxStundenWoche)}</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-xs text-green-600 font-semibold mb-1">VERDIENST BEI {wochenstunden || '0'} STD./WOCHE</p>
              <p className="text-xl sm:text-2xl font-bold text-green-900">{formatEuro(result.gewuenschterVerdienst)}</p>
            </div>
          </div>

          {parsed.std > 0 && (
            result.ueberschreitung ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">
                  <strong>Damit liegen Sie über der {VERDIENSTGRENZE}-€-Grenze.</strong> Bei {stundenlohn} €/h
                  sind maximal {formatStd(result.maxStundenWoche)}/Woche erlaubt, um im Minijob zu bleiben —
                  sonst wird die Beschäftigung sozialversicherungspflichtig.
                </p>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">
                  <strong>Das passt in den Minijob.</strong> Sie bleiben mit {formatEuro(result.gewuenschterVerdienst)} pro
                  Monat unter der {VERDIENSTGRENZE}-€-Grenze.
                </p>
              </div>
            )
          )}

          <p className="text-xs text-gray-400">
            Berechnung mit {WOCHEN_PRO_MONAT.toString().replace('.', ',')} Wochen/Monat. Alle Werte sind
            Maximalwerte bei exakter Ausnutzung der Verdienstgrenze — in der Praxis empfiehlt sich ein
            kleiner Puffer, um Rundungen abzufangen.
          </p>
        </div>
      ) : (
        <p className="text-sm text-gray-500">Bitte geben Sie einen Stundenlohn größer als 0 € ein.</p>
      )}
    </section>
  )
}