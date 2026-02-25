'use client'

import React, { useState, memo, useMemo } from 'react'
import { ChevronDown, ChevronUp, Info, AlertCircle, HelpCircle, TrendingUp, Zap, Users, Award } from 'lucide-react'

export default function MiniJobRechner() {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [bruttoMonat, setBruttoMonat] = useState('')
  const [jobType, setJobType] = useState<'gewerblich' | 'privathaushalt'>('gewerblich')
  const [rentenBefreiung, setRentenBefreiung] = useState<'ja' | 'nein'>('nein')
  const [krankenversicherung, setKrankenversicherung] = useState<'gesetzlich' | 'privat'>('gesetzlich')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [error, setError] = useState('')

  interface Result {
    brutto: number
    employeeRente: number
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

  const [result, setResult] = useState<Result | null>(null)

  const getMinijobLimit = (year: number) => ({ 2025: 556, 2026: 603 }[year] || 603)
  const minijobLimit = useMemo(() => getMinijobLimit(selectedYear), [selectedYear])
  const availableYears = [2025, 2026]

  React.useEffect(() => { setError('') }, [selectedYear])

  const getRates = () => {
    if (jobType === 'gewerblich') {
      return { krankenRate: 0.13, renteRate: 0.15, steuerRate: 0.02, u1Rate: 0.008, u2Rate: 0.0022, u3Rate: 0.0015, unfallRate: 0.013 }
    }
    return { krankenRate: 0.05, renteRate: 0.05, steuerRate: 0.02, u1Rate: 0.008, u2Rate: 0.0022, u3Rate: 0, unfallRate: 0.016 }
  }

  const berechneNetto = () => {
    const brutto = parseFloat(bruttoMonat)
    if (isNaN(brutto) || brutto <= 0) { setError('Bitte geben Sie ein gültiges Bruttogehalt ein.'); setResult(null); return }
    if (brutto > minijobLimit) { setError(`Ein Minijob darf ${minijobLimit} € pro Monat nicht überschreiten (Stand ${selectedYear}).`); setResult(null); return }
    setError('')
    const rates = getRates()
    const employeeRente = rentenBefreiung === 'nein' ? brutto * 0.036 : 0
    const netto = brutto - employeeRente
    const kranken = krankenversicherung === 'gesetzlich' ? brutto * rates.krankenRate : 0
    const rente = brutto * rates.renteRate
    const steuer = brutto * rates.steuerRate
    const u1 = brutto * rates.u1Rate
    const u2 = brutto * rates.u2Rate
    const u3 = brutto * rates.u3Rate
    const unfall = brutto * rates.unfallRate
    const totalContributions = kranken + rente + steuer + u1 + u2 + u3 + unfall
    const totalExpenses = brutto + totalContributions
    setResult({ brutto, employeeRente, netto, nettoJahr: netto * 12, kranken, rente, steuer, u1, u2, u3, unfall, totalContributions, totalExpenses, krankenRate: rates.krankenRate, renteRate: rates.renteRate, unfallRate: rates.unfallRate })
  }

  const fmt = (n: number) => n.toFixed(2).replace('.', ',')
  const pct = (n: number) => `${(n * 100).toFixed(2).replace('.', ',')}%`

  const ResultRow = memo(({ label, value, rate, negative, bold, highlight, sub, tooltip }: {
    label: string; value: number; rate?: string; negative?: boolean; bold?: boolean; highlight?: boolean; sub?: boolean; tooltip?: string
  }) => (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 px-4 sm:px-5 ${highlight ? 'bg-gray-50 border-t-2 border-gray-200' : sub ? 'bg-blue-50' : 'border-b border-gray-100 last:border-0'}`}>
      <div className="flex items-center gap-2 min-w-0 flex-wrap">
        {rate && <span className="text-xs font-mono text-gray-400 sm:w-[3.5rem] shrink-0 sm:text-right">{rate}</span>}
        <span className={`text-sm ${bold ? 'font-bold text-gray-900' : sub ? 'font-semibold text-blue-800' : 'text-gray-700'}`}>{label}</span>
        {tooltip && (
          <div className="relative group cursor-help">
            <HelpCircle size={13} className="text-red-400 flex-shrink-0" />
            <div className="absolute left-0 top-full z-20 w-56 sm:w-64 text-xs bg-gray-900 text-white rounded-lg p-2.5 hidden group-hover:block shadow-xl leading-relaxed mt-1 sm:mt-2">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      <span className={`text-sm sm:text-sm font-semibold tabular-nums flex-shrink-0 ${bold ? 'text-gray-900 text-base' : sub ? 'text-blue-800 font-bold' : negative ? 'text-red-600' : 'text-gray-800'}`}>
        {negative && value > 0 ? `- ${fmt(value)} €` : `${fmt(value)} €`}
      </span>
    </div>
  ))

  const ToggleGroup = memo(({ label, value, onChange, options, hint }: {
    label: string; value: string; onChange: (v: any) => void; options: { value: string; label: string }[]; hint?: string
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-900">{label}</label>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:grid-cols-auto">
        {options.map(o => (
          <button key={o.value} onClick={() => onChange(o.value)}
            className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg font-medium text-sm transition-all w-full sm:w-auto ${value === o.value
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
            {o.label}
          </button>
        ))}
      </div>
      {hint && <p className="mt-1 sm:mt-1.5 text-xs text-gray-500">{hint}</p>}
    </div>
  ))

  const faqs = [
    {
      q: 'Was ist ein Minijob?',
      a: `Ein Minijob ist eine geringfügige Beschäftigung mit einem monatlichen Verdienst bis ${minijobLimit} Euro (Stand ${selectedYear}). Der Arbeitgeber zahlt Pauschalabgaben, der Arbeitnehmer erhält das Bruttogehalt in der Regel als Netto.`
    },
    {
      q: 'Was ist die Rentenversicherungspflicht beim Minijob?',
      a: 'Seit 2013 sind Minijobber automatisch rentenversicherungspflichtig und zahlen einen Eigenbeitrag von 3,6% ihres Bruttogehalts. Sie können sich jedoch von dieser Pflicht befreien lassen und erhalten dann das volle Bruttogehalt als Netto. Mit Rentenversicherung sammeln Sie Rentenpunkte für Ihre spätere Altersrente.'
    },
    {
      q: 'Wie viel Stunden darf ich im Minijob arbeiten?',
      a: `Es gibt keine gesetzliche Stundenbegrenzung für Minijobs. Entscheidend ist allein der Verdienst: Er darf ${minijobLimit} Euro pro Monat nicht überschreiten. Beim Mindestlohn von 13,90 €/h entspricht das ca. 43 Stunden im Monat bzw. rund 10 Stunden pro Woche.`
    },
    {
      q: 'Kann ich mehrere Minijobs gleichzeitig haben?',
      a: `Ja, grundsätzlich können Sie mehrere Minijobs ausüben. Jedoch darf das Gesamteinkommen aus allen geringfügigen Beschäftigungen zusammen die Minijob-Grenze von ${minijobLimit} Euro pro Monat nicht überschreiten. Wer bereits einen sozialversicherungspflichtigen Hauptjob hat, darf daneben genau einen Minijob haben.`
    },
    {
      q: 'Was passiert, wenn ich die Minijob-Grenze überschreite?',
      a: 'Wird die Verdienstgrenze von ' + minijobLimit + ' Euro überschritten, wird das Arbeitsverhältnis sozialversicherungspflichtig und es fallen reguläre Beiträge zu Kranken-, Pflege-, Renten- und Arbeitslosenversicherung an.'
    },
    {
      q: 'Muss ich einen Minijob beim Finanzamt angeben?',
      a: 'Ein Minijob als einzige Beschäftigung muss in der Regel nicht in der Steuererklärung angegeben werden, da der Arbeitgeber eine Pauschalsteuer von 2 % übernimmt. Bei mehreren Einkünften empfiehlt sich Rücksprache mit einem Steuerberater.'
    },
    {
      q: 'Haben Minijobber Anspruch auf Urlaub?',
      a: 'Ja! Minijobber haben denselben gesetzlichen Urlaubsanspruch wie Vollzeitbeschäftigte – anteilig nach ihren wöchentlichen Arbeitstagen. Das sind mindestens 4 Wochen pro Kalenderjahr.'
    },
    {
      q: 'Unterschied Privathaushalt vs. Gewerblich?',
      a: 'Bei Privathaushalt-Minijobs (z.B. Kinderbetreuung, Haushaltshilfe) zahlt der Arbeitgeber niedrigere Pauschalabgaben (~14,62%) im Vergleich zu gewerblichen Minijobs (~32,47%). Für den Arbeitnehmer ist es ident.'
    },
    {
      q: 'Brauche ich einen Arbeitsvertrag?',
      a: 'Ja, grundsätzlich sollte ein schriftlicher Arbeitsvertrag vorhanden sein, der Lohn, Arbeitszeit und Aufgaben regelt. Das schützt beide Seiten rechtlich. Auch für Minijobs ist eine Anmeldung bei der Minijob-Zentrale notwendig.'
    },
    {
      q: 'Kann ich Minijob und Studium kombinieren?',
      a: 'Ja, Studenten können einen Minijob ausüben. Die 603€-Grenze ist einzuhalten. Wichtig: Die Studentenversicherung bleibt bestehen. Arbeitet der Student mehr als 20 Stunden pro Woche während der Vorlesungszeit, kann die Studenteneigenschaft wegfallen.'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">Minijob Rechner 2026</h1>
            <p className="text-base sm:text-lg text-blue-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">✅ Kostenlos • ✅ 603€ Grenze aktuell • ✅ Arbeitgeber & Arbeitnehmer • ✅ Gewerblich & Privathaushalt</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-100">
              <a href="#rechner" className="hover:text-white transition-colors">↓ Rechner</a>
              <a href="#erklaerung" className="hover:text-white transition-colors hidden sm:inline">↓ Erklärung</a>
              <a href="#vergleich" className="hover:text-white transition-colors">↓ Vergleich</a>
              <a href="#faq" className="hover:text-white transition-colors">↓ FAQ</a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
          {/* Quick Stats */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="flex justify-center mb-2"><TrendingUp className="text-blue-600" size={24} /></div>
              <p className="text-xs text-gray-600">Minijob-Grenze</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">{minijobLimit}€</p>
              <p className="text-xs text-gray-500">pro Monat</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="flex justify-center mb-2"><Zap className="text-green-600" size={24} /></div>
              <p className="text-xs text-gray-600">Mindestlohn</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">13,90€</p>
              <p className="text-xs text-gray-500">pro Stunde</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="flex justify-center mb-2"><Users className="text-purple-600" size={24} /></div>
              <p className="text-xs text-gray-600">Arbeitgeber</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">32,47%</p>
              <p className="text-xs text-gray-500">gewerblich</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="flex justify-center mb-2"><Award className="text-orange-600" size={24} /></div>
              <p className="text-xs text-gray-600">Steuern</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">2%</p>
              <p className="text-xs text-gray-500">pauschal</p>
            </div>
          </section>

          {/* Calculator Card */}
          <section id="rechner" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-7">Minijob Rechner</h2>

            <div className="space-y-5 sm:space-y-6">
              <ToggleGroup label="Berechnungsjahr" value={String(selectedYear)} onChange={(v) => setSelectedYear(Number(v))}
                options={availableYears.map(y => ({ value: String(y), label: String(y) }))}
                hint={`Minijob-Grenze ${selectedYear}: ${minijobLimit} € pro Monat`} />

              <div>
                <label htmlFor="brutto-input" className="block text-sm font-semibold text-gray-900 mb-2">Brutto-Monatsgehalt (€)</label>
                <input id="brutto-input" type="number" inputMode="decimal" value={bruttoMonat}
                  onChange={(e) => { setBruttoMonat(e.target.value); setError('') }}
                  className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg text-gray-900 bg-white placeholder:text-gray-400"
                  placeholder={`z.B. ${minijobLimit}`}
                  max={minijobLimit} />
                {error && (
                  <div className="mt-2 flex items-start gap-2 text-red-600 text-xs sm:text-sm" role="alert">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" /><span>{error}</span>
                  </div>
                )}
              </div>

              <ToggleGroup label="Art des Minijobs" value={jobType} onChange={(v) => setJobType(v as 'gewerblich' | 'privathaushalt')}
                options={[{ value: 'gewerblich', label: '🏢 Im Betrieb' }, { value: 'privathaushalt', label: '🏠 Privathaushalt' }]}
                hint={jobType === 'gewerblich' ? 'Arbeitgeber zahlt ~32,47% Gesamtabgaben.' : 'Günstigere Beitragssätze: ~14,62% Gesamtabgaben.'} />

              <ToggleGroup label="Rentenversicherung" value={rentenBefreiung} onChange={(v) => setRentenBefreiung(v as 'ja' | 'nein')}
                options={[{ value: 'nein', label: 'Zahlt 3,6%' }, { value: 'ja', label: 'Befreit' }]}
                hint={rentenBefreiung === 'ja' ? '✓ Volles Bruttogehalt als Netto' : '✓ Sammelt Rentenpunkte'} />

              <ToggleGroup label="Krankenversicherung" value={krankenversicherung} onChange={(v) => setKrankenversicherung(v as 'gesetzlich' | 'privat')}
                options={[{ value: 'gesetzlich', label: 'Gesetzlich' }, { value: 'privat', label: 'Privat' }]}
                hint="Beeinflußt Kosten für Arbeitgeber" />

              <button onClick={berechneNetto}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 rounded-lg transition-colors text-base sm:text-lg">
                ⚡ Jetzt berechnen
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-1">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Berechnungsergebnis</h3>

                {/* Employee Side */}
                <div className="bg-green-50 rounded-lg overflow-hidden">
                  <div className="px-4 sm:px-5 py-3 bg-green-100 border-b border-green-200">
                    <h4 className="font-bold text-green-900 text-sm sm:text-base">👤 Für Arbeitnehmer</h4>
                  </div>
                  <ResultRow label="Bruttogehalt" value={result.brutto} bold />
                  {result.employeeRente > 0 && <ResultRow label="Rentenversicherung" value={result.employeeRente} rate="3,60%" negative tooltip="Eigenbeitrag für die gesetzliche Rentenversicherung" />}
                  <ResultRow label="Netto pro Monat" value={result.netto} bold highlight sub tooltip="Das Gehalt, das Sie ausgezahlt bekommen" />
                  <ResultRow label="Netto pro Jahr" value={result.nettoJahr} sub tooltip="12 × Monatsnetto" />
                </div>

                {/* Employer Side */}
                <div className="bg-orange-50 rounded-lg overflow-hidden mt-4">
                  <div className="px-4 sm:px-5 py-3 bg-orange-100 border-b border-orange-200">
                    <h4 className="font-bold text-orange-900 text-sm sm:text-base">🏢 Für Arbeitgeber (monatlich)</h4>
                  </div>
                  <ResultRow label="Bruttolohn" value={result.brutto} bold />
                  <div className="border-b border-gray-100">
                    <div className="px-4 sm:px-5 py-2 bg-gray-50 text-xs font-semibold text-gray-700">Pauschalabgaben:</div>
                  </div>
                  <ResultRow label="Krankenversicherung" value={result.kranken} rate={pct(result.krankenRate)} />
                  <ResultRow label="Rentenversicherung" value={result.rente} rate={pct(result.renteRate)} />
                  <ResultRow label="Pauschalsteuer" value={result.steuer} rate="2,00%" />
                  <ResultRow label="U1-Umlage" value={result.u1} rate="0,80%" tooltip="Lohnfortzahlung im Krankheitsfall" />
                  <ResultRow label="U2-Umlage" value={result.u2} rate="0,22%" tooltip="Mutterschaftsleistungen" />
                  <ResultRow label="U3-Umlage" value={result.u3} rate={jobType === 'privathaushalt' ? '0,00%' : '0,15%'} tooltip="Insolvenzgeldumlage" />
                  <ResultRow label="Unfallversicherung" value={result.unfall} rate={pct(result.unfallRate)} tooltip="Je nach Branche variabel" />
                  <ResultRow label="GESAMTKOSTEN FÜR ARBEITGEBER" value={result.totalExpenses} bold highlight />
                </div>
              </div>
            )}
          </section>

          {/* Comparison Table */}
          <section id="vergleich" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Kosten Vergleich: Verschiedene Bruttowerte</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-900">Brutto/Monat</th>
                    <th className="p-2 sm:p-3 text-center font-semibold text-gray-900">Netto (ohne RV)</th>
                    <th className="p-2 sm:p-3 text-center font-semibold text-gray-900">AG-Kosten (gew.)</th>
                    <th className="p-2 sm:p-3 text-center font-semibold text-gray-900">AG-Kosten (privat)</th>
                  </tr>
                </thead>
                <tbody>
                  {[300, 400, 500, 556, 603].map((amount, i) => {
                    const rates = jobType === 'gewerblich' 
                      ? { krankenRate: 0.13, renteRate: 0.15, u1Rate: 0.008, u2Rate: 0.0022, u3Rate: 0.0015, unfallRate: 0.013 }
                      : { krankenRate: 0.05, renteRate: 0.05, u1Rate: 0.008, u2Rate: 0.0022, u3Rate: 0, unfallRate: 0.016 }
                    const steuerRate = 0.02
                    const nettoNoRv = amount
                    const gesCostsGew = amount + (amount * (rates.krankenRate + rates.renteRate + steuerRate + rates.u1Rate + rates.u2Rate + rates.u3Rate + rates.unfallRate))
                    const costPrivate = amount * 0.05 + amount * 0.05 + amount * steuerRate + amount * rates.u1Rate + amount * rates.u2Rate + amount * rates.unfallRate
                    const costsPrivate = amount + costPrivate
                    return (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-2 sm:p-3 font-semibold text-gray-900 border-b border-gray-100">{amount}€</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100">{fmt(nettoNoRv)}€</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100 font-semibold text-orange-600">{fmt(gesCostsGew)}€</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100 font-semibold text-blue-600">{fmt(costsPrivate)}€</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500">* Netto ohne Rentenversicherung. Mit RV-Pflicht: 3,6% Abzug vom Brutto</p>
          </section>

          {/* Info Section */}
          <section id="erklaerung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Was ist ein Minijob? & Aktuelle Grenze {selectedYear}</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ein <strong>Minijob</strong> ist eine geringfügige Beschäftigung in Deutschland. Die Verdienstgrenze beträgt aktuell <strong>{minijobLimit} Euro pro Monat</strong> (ab 1. Januar {selectedYear}). Minijobs zeichnen sich durch stark reduzierte Sozialversicherungsbeiträge aus – der Arbeitgeber zahlt <strong>Pauschalabgaben</strong> statt regulärer Sozialversicherungsbeiträge.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-5">
              <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Die wichtigsten Merkmale:</h3>
              <div className="space-y-2">
                {[
                  `Verdienstgrenze: ${minijobLimit} € pro Monat (gekoppelt an Mindestlohn)`,
                  'Es gibt KEINE Stundenbegrenzung – nur die Verdienstgrenze zählt!',
                  'Rentenversicherung: Automatisch Pflicht seit 2013 (3,6% Eigenbeitrag), aber Befreiung möglich',
                  'Pauschalabgaben für Arbeitgeber (32,47% gewerblich, 14,62% Privathaushalt)',
                  'Pauschale Lohnsteuer 2% vom Arbeitgeber bezahlt'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-xs sm:text-sm text-blue-800">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Minijob-Grenze: Historische Entwicklung</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 border">Periode</th>
                      <th className="p-2 sm:p-3 text-center font-semibold text-gray-900 border">Grenze/Monat</th>
                      <th className="p-2 sm:p-3 text-center font-semibold text-gray-900 border">Mindestlohn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['2003–2012', '400 €', 'kein Mindestlohn'],
                      ['2013–2019', '450 €', '8,84 €'],
                      ['2020', '520 €', '9,35 €'],
                      ['2021–2025', '556 €', '10,45 € – 12,41 €'],
                      ['2026', '603 €', '13,90 €'],
                    ].map(([period, grenze, lohn], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-2 sm:p-3 font-semibold text-gray-800 border">{period}</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border font-semibold">{grenze}</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border">{lohn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-amber-900">
                <strong>💡 Wichtig:</strong> Die Anmeldung muss <strong>vor Beginn der Beschäftigung</strong> erfolgen. Rückwirkende Anmeldungen sind nicht möglich. Wenden Sie sich an die <strong>Minijob-Zentrale</strong>: <strong>Tel: 0355/2902-70799</strong> oder <strong>minijob-zentrale.de</strong>
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Häufig gestellte Fragen</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">Antworten auf die wichtigsten Fragen rund um Minijob und Nettolohn.</p>
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0">
                  <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}
                    className="flex items-center justify-between w-full text-left py-3 sm:py-4 hover:text-blue-600 transition-colors">
                    <span className="font-medium text-gray-900 pr-4 text-xs sm:text-sm">{faq.q}</span>
                    {activeFaq === index ? <ChevronUp size={16} className="shrink-0" /> : <ChevronDown size={16} className="shrink-0" />}
                  </button>
                  {activeFaq === index && <p className="pb-3 text-gray-700 text-xs sm:text-sm leading-relaxed">{faq.a}</p>}
                </div>
              ))}
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-5 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={16} className="text-yellow-700 mt-0.5 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-medium text-gray-900 mb-1 text-xs sm:text-sm">Rechtlicher Hinweis</h3>
                <p className="text-xs sm:text-sm text-gray-700">Dieser Rechner dient nur zur Orientierung und ersetzt keine steuerliche oder rechtliche Beratung. Für eine verbindliche Auskunft wenden Sie sich bitte an einen Steuerberater oder die Minijob-Zentrale.</p>
              </div>
            </div>
          </div>

          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-600 mb-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
              <a href="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</a>
              <span>•</span>
              <a href="/impressum" className="hover:text-gray-900 transition-colors">Impressum</a>
              <span>•</span>
              <a href="/kontakt" className="hover:text-gray-900 transition-colors">Kontakt</a>
            </div>
            <p className="text-xs text-gray-500">Stand: {currentYear === 2026 ? 'Februar 2026' : 'aktuell'} · Alle Angaben ohne Gewähr · Minijob-Netto-Rechner.de</p>
          </footer>
        </div>
      </main>
    </div>
  )
}