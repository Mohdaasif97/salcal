'use client'
import React, { useState, useMemo, useCallback } from 'react'
import { AlertCircle, HelpCircle } from 'lucide-react'

interface Result {
  brutto: number
  employeeRente: number
  employeeRvRate: number
  netto: number
  nettoJahr: number
  kranken: number
  rente: number
  steuer: number
  u1: number
  u2: number
  u3: number
  unfall: number
  totalContributions: number
  totalExpenses: number
  krankenRate: number
  renteRate: number
  unfallRate: number
}

const fmt = (n: number) => n.toFixed(2).replace('.', ',')
const pct = (n: number) => `${(n * 100).toFixed(2).replace('.', ',')}%`

function Tooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false)
  return (
    <span className="relative inline-flex ml-1" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <HelpCircle size={13} className="text-gray-400 cursor-help flex-shrink-0" />
      {open && (
        <span className="absolute left-5 top-0 z-30 w-56 text-xs bg-gray-900 text-white rounded-lg p-2.5 shadow-xl leading-relaxed whitespace-normal">
          {text}
        </span>
      )}
    </span>
  )
}

function Chips({ options, value, onChange }: {
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
            value === o.value
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function InlineToggle({ left, right, value, onChange }: {
  left: { value: string; label: string }
  right: { value: string; label: string }
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden flex-shrink-0">
      <button
        onClick={() => onChange(left.value)}
        className={`px-5 py-2 text-sm font-medium transition-colors border-r border-gray-300 ${
          value === left.value ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        {left.label}
      </button>
      <button
        onClick={() => onChange(right.value)}
        className={`px-5 py-2 text-sm font-medium transition-colors ${
          value === right.value ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        {right.label}
      </button>
    </div>
  )
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold text-gray-800 mb-2">{children}</p>
}

function ResultRow({ label, value, rate, negative, bold, dimmed, tooltip }: {
  label: string; value: number; rate?: string; negative?: boolean
  bold?: boolean; dimmed?: boolean; tooltip?: string
}) {
  return (
    <div className={`flex justify-between items-center py-2 ${bold ? 'border-t border-gray-200 mt-1 pt-3' : 'border-b border-gray-100 last:border-0'}`}>
      <div className="flex items-center gap-1.5 flex-1 mr-2 min-w-0">
        {rate && (
          <span className={`text-xs font-mono flex-shrink-0 ${dimmed ? 'text-gray-300' : 'text-gray-400'}`}>{rate}</span>
        )}
        <span className={`text-sm truncate ${bold ? 'font-bold text-gray-900' : dimmed ? 'text-gray-300' : 'text-gray-600'}`}>
          {label}
        </span>
        {tooltip && <Tooltip text={tooltip} />}
      </div>
      <span className={`text-sm font-semibold tabular-nums flex-shrink-0 ${
        bold ? 'text-gray-900 text-base' : negative ? 'text-red-500' : dimmed ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {negative && value > 0 ? `− ${fmt(value)} €` : `${fmt(value)} €`}
      </span>
    </div>
  )
}

function AffiliateBox({ netto }: { netto: number }) {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-4 relative">
      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide bg-blue-600 text-white px-2 py-0.5 rounded-full">
        Empfehlung
      </span>
      <p className="text-sm font-bold text-blue-800 mb-1">💡 Geld vom Finanzamt zurückbekommen?</p>
      <p className="text-sm text-blue-700 leading-relaxed mb-3">
        Dein Netto liegt bei <strong>{fmt(netto)} €</strong> — prüfe jetzt mit WISO Steuer,
        ob du eine Steuererstattung erhalten kannst. Schnell, einfach, online.
      </p>
      <a
        href="https://www.awin1.com/awclick.php?gid=378226&mid=17387&awinaffid=2961797&linkid=2538464&clickref="
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
      >
        Arbeitnehmer-Steuererklärung →
      </a>
      <p className="text-[11px] text-blue-400 mt-2.5 leading-snug">
        Werbelink (Affiliate): Wenn du über diesen Link kaufst, erhalten wir möglicherweise eine
        Provision. Für dich entstehen keine zusätzlichen Kosten.
      </p>
    </div>
  )
}

export default function MiniJobCalculator() {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [bruttoMonat, setBruttoMonat] = useState('')
  const [jobType, setJobType] = useState<'gewerblich' | 'privathaushalt'>('gewerblich')
  const [rentenBefreiung, setRentenBefreiung] = useState<'nein' | 'ja'>('nein')
  const [krankenversicherung, setKrankenversicherung] = useState<'gesetzlich' | 'privat'>('gesetzlich')

  const availableYears = [2025, 2026]
  const minijobLimit = useMemo(() => ({ 2025: 556, 2026: 603 }[selectedYear] || 603), [selectedYear])

  const getRates = useCallback(() => {
    const u1Rate = selectedYear === 2025 ? 0.011 : 0.008
    const krankenRate = krankenversicherung === 'privat' ? 0
      : jobType === 'gewerblich' ? 0.13 : 0.05
    if (jobType === 'gewerblich') {
      return { krankenRate, renteRate: 0.15, steuerRate: 0.02, u1Rate, u2Rate: 0.0022, u3Rate: 0.0015, unfallRate: 0.013, employeeRvRate: 0.036 }
    }
    return { krankenRate, renteRate: 0.05, steuerRate: 0.02, u1Rate, u2Rate: 0.0022, u3Rate: 0, unfallRate: 0.016, employeeRvRate: 0.136 }
  }, [selectedYear, jobType, krankenversicherung])

  const { result, error } = useMemo<{ result: Result | null; error: string }>(() => {
    const brutto = parseFloat(bruttoMonat)
    if (!bruttoMonat) return { result: null, error: '' }
    if (isNaN(brutto) || brutto <= 0) return { result: null, error: 'Bitte gültiges Bruttogehalt eingeben.' }
    if (brutto > minijobLimit) return { result: null, error: `Maximal ${minijobLimit} € erlaubt (${selectedYear}).` }
    const rates = getRates()
    const employeeRente = rentenBefreiung === 'nein' ? brutto * rates.employeeRvRate : 0
    const netto = brutto - employeeRente
    const kranken = brutto * rates.krankenRate
    const rente = brutto * rates.renteRate
    const steuer = brutto * rates.steuerRate
    const u1 = brutto * rates.u1Rate
    const u2 = brutto * rates.u2Rate
    const u3 = brutto * rates.u3Rate
    const unfall = brutto * rates.unfallRate
    const totalContributions = kranken + rente + steuer + u1 + u2 + u3 + unfall
    const totalExpenses = brutto + totalContributions
    return {
      error: '',
      result: {
        brutto, employeeRente, employeeRvRate: rates.employeeRvRate,
        netto, nettoJahr: netto * 12,
        kranken, rente, steuer, u1, u2, u3, unfall,
        totalContributions, totalExpenses,
        krankenRate: rates.krankenRate, renteRate: rates.renteRate, unfallRate: rates.unfallRate,
      }
    }
  }, [bruttoMonat, selectedYear, jobType, rentenBefreiung, krankenversicherung, minijobLimit, getRates])

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">

      {/* LEFT: inputs */}
      <div className="w-full lg:w-[400px] flex-shrink-0 space-y-5">

        <div>
          <FieldLabel>Berechnungsjahr</FieldLabel>
          <Chips
            options={availableYears.map(y => ({ value: String(y), label: String(y) }))}
            value={String(selectedYear)}
            onChange={v => setSelectedYear(Number(v))}
          />
          <p className="text-xs text-gray-400 mt-2">Minijob-Grenze {selectedYear}: max. {minijobLimit} €/Monat</p>
        </div>

        <div>
          <FieldLabel>Brutto-Monatsgehalt (€)</FieldLabel>
          <input
            type="number"
            inputMode="decimal"
            value={bruttoMonat}
            onChange={e => setBruttoMonat(e.target.value)}
            placeholder={`z.B. ${minijobLimit}`}
            max={minijobLimit}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white placeholder:text-gray-400"
          />
          {error && (
            <div className="flex items-center gap-1.5 text-red-500 text-sm mt-1.5">
              <AlertCircle size={14} />{error}
            </div>
          )}
        </div>

        <div>
          <FieldLabel>Art des Minijobs</FieldLabel>
          <Chips
            options={[
              { value: 'gewerblich', label: '🏢 Gewerblich (Betrieb)' },
              { value: 'privathaushalt', label: '🏠 Privathaushalt' },
            ]}
            value={jobType}
            onChange={v => setJobType(v as 'gewerblich' | 'privathaushalt')}
          />
          <p className="text-xs text-gray-400 mt-2">
            {jobType === 'gewerblich' ? 'Höhere Pauschalabgaben ~32,47%' : 'Niedrigere Abgaben ~14,62%'}
          </p>
        </div>

        <div className="space-y-2">
          <FieldLabel>Verzicht auf RV-Pflicht</FieldLabel>
          <Chips
            options={[
              { value: 'nein', label: 'Nein' },
              { value: 'ja', label: 'Ja' },
            ]}
            value={rentenBefreiung}
            onChange={v => setRentenBefreiung(v as 'nein' | 'ja')}
          />
          <p className="text-xs text-gray-400">
            {rentenBefreiung === 'ja' ? 'Volles Bruttogehalt als Netto' : 'Sammelt Rentenpunkte für die Rente'}
          </p>
        </div>

        <div className="space-y-2">
          <FieldLabel>Krankenversicherung</FieldLabel>
          <Chips
            options={[
              { value: 'gesetzlich', label: 'Gesetzlich' },
              { value: 'privat', label: 'Privat' },
            ]}
            value={krankenversicherung}
            onChange={v => setKrankenversicherung(v as 'gesetzlich' | 'privat')}
          />
          <p className="text-xs text-gray-400">
            {krankenversicherung === 'privat' ? 'Kein AG-KV-Beitrag (0%)' : 'AG zahlt pauschale KV'}
          </p>
        </div>

      </div>

      {/* RIGHT: results */}
      <div className="w-full flex-1 min-w-0">
        {!result && !error && (
          <div className="flex items-center justify-center h-48 border-2 border-dashed border-gray-200 rounded-xl">
            <p className="text-sm text-gray-400">Betrag eingeben – Ergebnis erscheint sofort</p>
          </div>
        )}

        {result && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">Netto / Monat</p>
                <p className="text-2xl font-bold text-green-800 mt-0.5">{fmt(result.netto)} €</p>
                <p className="text-xs text-green-500 mt-0.5">{fmt(result.nettoJahr)} € / Jahr</p>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Gesamtkosten AG</p>
                <p className="text-2xl font-bold text-orange-800 mt-0.5">{fmt(result.totalExpenses)} €</p>
                <p className="text-xs text-orange-500 mt-0.5">+ {fmt(result.totalContributions)} € Abgaben</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">👤 Arbeitnehmer</p>
              </div>
              <div className="px-4 py-2">
                <ResultRow label="Monatsbrutto" value={result.brutto} />
                {result.employeeRente > 0 && (
                  <ResultRow
                    label="Rentenversicherung"
                    value={result.employeeRente}
                    rate={pct(result.employeeRvRate)}
                    negative
                    tooltip={jobType === 'gewerblich'
                      ? 'Eigenbeitrag: 18,6% − 15% AG-Pauschale = 3,6%'
                      : 'Eigenbeitrag: 18,6% − 5% AG-Pauschale = 13,6%'}
                  />
                )}
                <ResultRow label="Monatsnetto" value={result.netto} bold />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                  🏢 Arbeitgeber — {jobType === 'gewerblich' ? 'Betrieb' : 'Privathaushalt'}
                </p>
              </div>
              <div className="px-4 py-2">
                <ResultRow label="Monatsbrutto" value={result.brutto} />
                {result.krankenRate > 0
                  ? <ResultRow label="Krankenversicherung" value={result.kranken} rate={pct(result.krankenRate)} tooltip="Arbeitgeber-Anteil KV" />
                  : <ResultRow label="Krankenversicherung" value={0} rate="0,00%" dimmed tooltip="Privat versichert – kein AG-KV-Beitrag" />
                }
                <ResultRow label="Rentenversicherung" value={result.rente} rate={pct(result.renteRate)} tooltip="Arbeitgeber-Anteil RV" />
                <ResultRow label="Lohnsteuer (pauschal)" value={result.steuer} rate="2,00%" />
                <ResultRow label="U1 – Lohnfortzahlung" value={result.u1} rate={selectedYear === 2025 ? '1,10%' : '0,80%'} />
                <ResultRow label="U2 – Mutterschaft" value={result.u2} rate="0,22%" />
                {jobType === 'gewerblich' && (
                  <ResultRow label="U3 – Insolvenzgeld" value={result.u3} rate="0,15%" />
                )}
                <ResultRow label="Unfallversicherung" value={result.unfall} rate={pct(result.unfallRate)} />
                <ResultRow label="Gesamtkosten / Monat" value={result.totalExpenses} bold tooltip="Brutto + alle Pauschalabgaben" />
              </div>
            </div>

            <AffiliateBox netto={result.netto} />
          </div>
        )}
      </div>
    </div>
  )
}