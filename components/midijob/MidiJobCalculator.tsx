'use client'
import React, { useState, useMemo, useCallback } from 'react'
import { AlertCircle, HelpCircle } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────
interface Rates { kvRate: number; zus: number; pvAN_base_rate: number; pvKind_sur: number; u1r: number; u2r: number; u3r: number }
interface ANResult { kv: number; zb: number; pv: number; rv: number; av: number; total: number }
interface AGResult { kv: number; zb: number; pv: number; rv: number; av: number; u1: number; u2: number; u3: number; total: number }
interface CalcResult { an: ANResult; ag: AGResult; inGZ: boolean }

// ── Constants ──────────────────────────────────────────────────────────────
const YP: Record<string, { lo: number; hi: number; F: number }> = {
  '2026': { lo: 603, hi: 2000, F: 0.6619 },
  '2025': { lo: 556, hi: 2000, F: 0.6683 },
  '2024': { lo: 538, hi: 2000, F: 0.6846 },
  '2023': { lo: 520, hi: 2000, F: 0.7009 },
}
const PV_AN_BASE: Record<string, number> = { u23: 1.80, '0': 1.80, '1': 1.80, '2': 1.55, '3': 1.30, '4': 1.05, '5': 0.80 }
const PV_KIND_SUR: Record<string, number> = { u23: 0, '0': 0.60, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }
const KINDER_OPTIONS = [
  { value: 'u23', label: '0 Kinder, < 23' },
  { value: '0',   label: '0 Kinder, ≥ 23' },
  { value: '1',   label: '1 Kind' },
  { value: '2',   label: '2 Kinder' },
  { value: '3',   label: '3 Kinder' },
  { value: '4',   label: '4 Kinder' },
  { value: '5',   label: '5+ Kinder' },
]

// ── Helpers ────────────────────────────────────────────────────────────────
const r2 = (v: number) => Math.round(v * 100) / 100
const fmt = (n: number) => n.toFixed(2).replace('.', ',')
const ges = (base: number, rate: number) => r2(r2(base * rate / 2 / 100) * 2)
const ant = (base: number, rate: number) => r2(base * rate / 2 / 100)

// ── Sub-components ─────────────────────────────────────────────────────────
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
          type="button"
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
        type="button"
        onClick={() => onChange(left.value)}
        className={`px-5 py-2 text-sm font-medium transition-colors border-r border-gray-300 ${
          value === left.value ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        {left.label}
      </button>
      <button
        type="button"
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

function ResultRow({ label, value, negative, bold, dimmed, tooltip }: {
  label: string; value: number; negative?: boolean
  bold?: boolean; dimmed?: boolean; tooltip?: string
}) {
  return (
    <div className={`flex justify-between items-center py-2 ${bold ? 'border-t border-gray-200 mt-1 pt-3' : 'border-b border-gray-100 last:border-0'}`}>
      <div className="flex items-center gap-1.5 flex-1 mr-2 min-w-0">
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

// ── Calculation ────────────────────────────────────────────────────────────
function calculate(
  B: number,
  year: string,
  sachsen: boolean,
  ermaessigt: boolean,
  zusatz: number,
  kinder: string,
  umlagen: boolean,
  u1r: number,
  u2r: number,
  u3active: boolean,
): CalcResult {
  const p = YP[year]
  const inGZ = B > p.lo && B <= p.hi

  const Ga = inGZ ? 1.145937223 * B - 291.8744452 : B
  const Gn = inGZ ? 1.431639227 * B - 863.2784538 : B

  const kvRate = ermaessigt ? 14.0 : 14.6
  const kvA  = ant(Gn, kvRate);   const kvAG  = r2(ges(Ga, kvRate) - kvA)
  const zbA  = ant(Gn, zusatz);   const zbAG  = r2(ges(Ga, zusatz) - zbA)

  const pvAN_base_rate = PV_AN_BASE[kinder] + (sachsen ? 0.50 : 0)
  const pvKind_sur     = PV_KIND_SUR[kinder]
  const pvAN_Gn        = r2(Gn * pvAN_base_rate / 100)
  const pvAN_sur       = r2(Ga * pvKind_sur / 100)
  const pvA            = r2(pvAN_Gn + pvAN_sur)
  const pvTotal        = ges(Ga, 3.60)
  const pvAG           = r2(pvTotal - pvAN_Gn)

  const rvA  = ant(Gn, 18.6);  const rvAG  = r2(ges(Ga, 18.6) - rvA)
  const avA  = ant(Gn, 2.6);   const avAG  = r2(ges(Ga, 2.6)  - avA)

  const u3r = umlagen && u3active ? 0.15 : 0
  const u1  = umlagen ? r2(Ga * u1r / 100) : 0
  const u2  = umlagen ? r2(Ga * u2r / 100) : 0
  const u3  = r2(Ga * u3r / 100)

  return {
    inGZ,
    an: { kv: kvA, zb: zbA, pv: pvA, rv: rvA, av: avA, total: r2(kvA + zbA + pvA + rvA + avA) },
    ag: { kv: kvAG, zb: zbAG, pv: pvAG, rv: rvAG, av: avAG, u1, u2, u3, total: r2(kvAG + zbAG + pvAG + rvAG + avAG + u1 + u2 + u3) },
  }
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function MidijobCalculator() {
  const [year,       setYear]       = useState('2026')
  const [bruttoRaw,  setBruttoRaw]  = useState('')
  const [weitereJobs,setWeitereJobs]= useState<'ja'|'nein'>('nein')
  const [weitereRaw, setWeitereRaw] = useState('')
  const [sachsen,    setSachsen]    = useState<'ja'|'nein'>('nein')
  const [ermaessigt, setErmaessigt] = useState<'ja'|'nein'>('nein')
  const [zusatzRaw,  setZusatzRaw]  = useState('2.9')
  const [kinder,     setKinder]     = useState('0')
  const [umlagen,    setUmlagen]    = useState<'ja'|'nein'>('nein')
  const [u1Raw,      setU1Raw]      = useState('1.10')
  const [u2Raw,      setU2Raw]      = useState('0.24')
  const [u3active,   setU3active]   = useState<'ja'|'nein'>('ja')

  const p = YP[year]

  const { result, error } = useMemo(() => {
    const brutto  = parseFloat(bruttoRaw)
    const weitere = weitereJobs === 'ja' ? (parseFloat(weitereRaw) || 0) : 0
    const B       = r2(brutto + weitere)

    if (!bruttoRaw) return { result: null, error: '' }
    if (isNaN(brutto) || brutto <= 0) return { result: null, error: 'Bitte gültiges Bruttogehalt eingeben.' }
    if (B <= p.lo) return { result: null, error: `Unterhalb der Gleitzone (min. ${p.lo + 0.01} €).` }
    if (B > p.hi)  return { result: null, error: `Oberhalb der Gleitzone (max. ${p.hi} €).` }

    const zusatz = parseFloat(zusatzRaw) || 0
    const u1r    = parseFloat(u1Raw) || 0
    const u2r    = parseFloat(u2Raw) || 0

    return {
      error: '',
      result: calculate(B, year, sachsen === 'ja', ermaessigt === 'ja', zusatz, kinder, umlagen === 'ja', u1r, u2r, u3active === 'ja'),
    }
  }, [bruttoRaw, weitereRaw, weitereJobs, year, sachsen, ermaessigt, zusatzRaw, kinder, umlagen, u1Raw, u2Raw, u3active, p])

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">

      {/* ── LEFT: Inputs ── */}
      <div className="w-full lg:w-[400px] flex-shrink-0 space-y-5">

        {/* Jahr */}
        <div>
          <FieldLabel>Berechnungsjahr</FieldLabel>
          <Chips
            options={['2026','2025','2024','2023'].map(y => ({ value: y, label: y }))}
            value={year}
            onChange={setYear}
          />
          <p className="text-xs text-gray-400 mt-2">Gleitzone {year}: {p.lo + 0.01} – {p.hi} €/Monat</p>
        </div>

        {/* Brutto */}
        <div>
          <FieldLabel>Monatsbrutto (Hauptjob)</FieldLabel>
          <input
            type="number"
            inputMode="decimal"
            value={bruttoRaw}
            onChange={e => setBruttoRaw(e.target.value)}
            placeholder={`z.B. 1200`}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white placeholder:text-gray-400"
          />
          {error && (
            <div className="flex items-center gap-1.5 text-red-500 text-sm mt-1.5">
              <AlertCircle size={14} />{error}
            </div>
          )}
        </div>

        {/* Weitere Jobs */}
        <div>
          <FieldLabel>Weitere Jobs</FieldLabel>
          <InlineToggle
            left={{ value: 'ja', label: 'Ja' }}
            right={{ value: 'nein', label: 'Nein' }}
            value={weitereJobs}
            onChange={v => setWeitereJobs(v as 'ja'|'nein')}
          />
          <p className="text-xs text-gray-400 mt-2">Weitere versicherungspflichtige Beschäftigungen</p>
        </div>

        {weitereJobs === 'ja' && (
          <div>
            <FieldLabel>Brutto weitere Jobs</FieldLabel>
            <input
              type="number"
              inputMode="decimal"
              value={weitereRaw}
              onChange={e => setWeitereRaw(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white placeholder:text-gray-400"
            />
          </div>
        )}

        {/* Sachsen */}
        <div>
          <FieldLabel>Beschäftigungsort in Sachsen</FieldLabel>
          <InlineToggle
            left={{ value: 'ja', label: 'Ja' }}
            right={{ value: 'nein', label: 'Nein' }}
            value={sachsen}
            onChange={v => setSachsen(v as 'ja'|'nein')}
          />
          <p className="text-xs text-gray-400 mt-2">
            {sachsen === 'ja' ? 'PV AN +0,5%, AG −0,5% (Buß- und Bettag)' : 'Bundesweiter Pflegeversicherungssatz'}
          </p>
        </div>

        {/* Ermäßigter KV */}
        <div>
          <FieldLabel>Ermäßigter KV-Satz</FieldLabel>
          <InlineToggle
            left={{ value: 'ja', label: 'Ja' }}
            right={{ value: 'nein', label: 'Nein' }}
            value={ermaessigt}
            onChange={v => setErmaessigt(v as 'ja'|'nein')}
          />
          <p className="text-xs text-gray-400 mt-2">
            {ermaessigt === 'ja' ? 'Ermäßigter Satz 14,0% (z.B. Studenten)' : 'Normalsatz 14,6%'}
          </p>
        </div>

        {/* Zusatzbeitrag */}
        <div>
          <FieldLabel>Zusatzbeitrag KV (%)</FieldLabel>
          <input
            type="number"
            inputMode="decimal"
            value={zusatzRaw}
            onChange={e => setZusatzRaw(e.target.value)}
            step="0.05"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white"
          />
          <p className="text-xs text-gray-400 mt-2">Kassenindividuell — Ø 2026 ca. 2,90%</p>
        </div>

        {/* Kinder */}
        <div>
          <FieldLabel>Kinder</FieldLabel>
          <Chips
            options={KINDER_OPTIONS}
            value={kinder}
            onChange={setKinder}
          />
          <p className="text-xs text-gray-400 mt-2">Beeinflusst den PV-Beitragssatz</p>
        </div>

        {/* Umlagen */}
        <div>
          <FieldLabel>Umlagen berechnen</FieldLabel>
          <InlineToggle
            left={{ value: 'ja', label: 'Ja' }}
            right={{ value: 'nein', label: 'Nein' }}
            value={umlagen}
            onChange={v => setUmlagen(v as 'ja'|'nein')}
          />
          <p className="text-xs text-gray-400 mt-2">U1, U2, U3 — nur Arbeitgeber</p>
        </div>

        {umlagen === 'ja' && (
          <div className="space-y-3">
            <div className="flex gap-4 flex-wrap">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1.5">U1 in %</p>
                <input
                  type="number"
                  inputMode="decimal"
                  value={u1Raw}
                  onChange={e => setU1Raw(e.target.value)}
                  step="0.05"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 bg-white"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1.5">U2 in %</p>
                <input
                  type="number"
                  inputMode="decimal"
                  value={u2Raw}
                  onChange={e => setU2Raw(e.target.value)}
                  step="0.01"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 bg-white"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1.5">U3</p>
                <InlineToggle
                  left={{ value: 'ja', label: 'Ja' }}
                  right={{ value: 'nein', label: 'Nein' }}
                  value={u3active}
                  onChange={v => setU3active(v as 'ja'|'nein')}
                />
              </div>
            </div>
            <p className="text-xs text-gray-400">U3 Insolvenzgeldumlage: 0,15% (fester Satz 2026)</p>
          </div>
        )}

      </div>

      {/* ── RIGHT: Results ── */}
      <div className="w-full flex-1 min-w-0">

        {!result && !error && (
          <div className="flex items-center justify-center h-48 border-2 border-dashed border-gray-200 rounded-xl">
            <p className="text-sm text-gray-400">Betrag eingeben – Ergebnis erscheint sofort</p>
          </div>
        )}

        {result && (
          <div className="space-y-4">

            {/* Summary cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">AN Beiträge / Monat</p>
                <p className="text-2xl font-bold text-green-800 mt-0.5">{fmt(result.an.total)} €</p>
                <p className="text-xs text-green-500 mt-0.5">{fmt(result.an.total * 12)} € / Jahr</p>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide">AG Beiträge / Monat</p>
                <p className="text-2xl font-bold text-orange-800 mt-0.5">{fmt(result.ag.total)} €</p>
                <p className="text-xs text-orange-500 mt-0.5">{result.inGZ ? 'Gleitzone aktiv' : 'Außerhalb Gleitzone'}</p>
              </div>
            </div>

            {/* AN block */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">👤 Arbeitnehmer — Monatsbeiträge</p>
              </div>
              <div className="px-4 py-2">
                <ResultRow label="Krankenversicherung"   value={result.an.kv} tooltip={`KV-Satz ${ermaessigt === 'ja' ? '14,0' : '14,6'}% — AN-Anteil auf Gleitzonenbasis`} />
                <ResultRow label="Zusatzbeitrag KV"      value={result.an.zb} tooltip="Kassenindividueller Zusatzbeitrag — AN-Anteil" />
                <ResultRow label="Pflegeversicherung"    value={result.an.pv} tooltip={sachsen === 'ja' ? 'Sachsen: erhöhter AN-Anteil' : 'AN-Anteil PV inkl. ggf. Kinderlosenzuschlag'} />
                <ResultRow label="Rentenversicherung"    value={result.an.rv} tooltip="RV 18,6% — AN-Anteil auf Gleitzonenbasis" />
                <ResultRow label="Arbeitslosenversicherung" value={result.an.av} tooltip="AV 2,6% — AN-Anteil auf Gleitzonenbasis" />
                <ResultRow label="Gesamtbeitrag AN"      value={result.an.total} bold />
              </div>
            </div>

            {/* AG block */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">🏢 Arbeitgeber — Monatsbeiträge</p>
              </div>
              <div className="px-4 py-2">
                <ResultRow label="Krankenversicherung"      value={result.ag.kv} />
                <ResultRow label="Zusatzbeitrag KV"         value={result.ag.zb} />
                <ResultRow label="Pflegeversicherung"       value={result.ag.pv} tooltip={sachsen === 'ja' ? 'Sachsen: reduzierter AG-Anteil' : 'AG-Anteil PV'} />
                <ResultRow label="Rentenversicherung"       value={result.ag.rv} />
                <ResultRow label="Arbeitslosenversicherung" value={result.ag.av} />
                {umlagen === 'ja' && <>
                  <ResultRow label="Umlage U1 – Lohnfortzahlung" value={result.ag.u1} />
                  <ResultRow label="Umlage U2 – Mutterschutz"    value={result.ag.u2} />
                  <ResultRow label="Umlage U3 – Insolvenzgeld"   value={result.ag.u3} />
                </>}
                <ResultRow label="Gesamtbeitrag AG" value={result.ag.total} bold />
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}