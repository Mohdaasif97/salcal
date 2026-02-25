'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Info, AlertCircle, HelpCircle } from 'lucide-react'

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
  const minijobLimit = getMinijobLimit(selectedYear)
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

  const ResultRow = ({ label, value, rate, negative, bold, highlight, sub, tooltip }: {
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
  )

  const ToggleGroup = ({ label, value, onChange, options, hint }: {
    label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[]; hint?: string
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
  )

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
      q: 'Muss ich einen Nebenjob versteuern?',
      a: 'Ja, Nebenjobs sind grundsätzlich steuerpflichtig. Bei einem zweiten Job wird häufig Steuerklasse 6 angewendet, was zu höheren Abzügen führt. Die genaue Steuerlast hängt vom Gesamteinkommen ab.'
    },
    {
      q: 'Gilt das auch für Studenten?',
      a: 'Studenten haben Sonderregelungen: Bei Minijobs gelten die gleichen Regeln. Als Werkstudent können Sie bis 20 Stunden pro Woche arbeiten und zahlen nur reduzierte Sozialversicherungsbeiträge.'
    },
    {
      q: 'Was ist der Unterschied zwischen Minijob und Nebenjob?',
      a: `Ein Minijob ist auf ${minijobLimit} Euro begrenzt und weitgehend abgabenfrei für den Arbeitnehmer. Ein Nebenjob ist jede zusätzliche Beschäftigung neben dem Hauptjob, unabhängig vom Verdienst, und unterliegt der normalen Besteuerung.`
    },
    {
      q: 'Ist der Rechner aktuell?',
      a: `Der Rechner basiert auf den aktuellen gesetzlichen Regelungen. Sie können zwischen den Jahren 2025 und 2026 wählen. Die Minijob-Grenze für 2026 beträgt 603 Euro. Für eine verbindliche Auskunft wenden Sie sich an einen Steuerberater.`
    },
    {
      q: 'Wie viel Stunden darf ich im Minijob arbeiten?',
      a: `Es gibt keine gesetzliche Stundenbegrenzung für Minijobs. Entscheidend ist allein der Verdienst: Er darf ${minijobLimit} Euro pro Monat nicht überschreiten. Beim Mindestlohn von 13,90 €/h entspricht das ca. 43 Stunden im Monat bzw. rund 10 Stunden pro Woche.`
    },
    {
      q: 'Kann ich mehrere Minijobs gleichzeitig haben?',
      a: `Ja, grundsätzlich können Sie mehrere Minijobs ausüben. Jedoch darf das Gesamteinkommen aus allen geringfügigen Beschäftigungen zusammen die Minijob-Grenze von ${minijobLimit} Euro pro Monat nicht überschreiten. Wer bereits einen sozialversicherungspflichtigen Hauptjob hat, darf daneben genau einen Minijob haben.`
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">Minijob Rechner 2026 | Netto berechnen</h1>
            <p className="text-base sm:text-lg text-blue-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">Berechne in Sekunden, wie viel Netto dir bei einem Minijob bleibt. Kostenlos & Aktuell.</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-100">
              <a href="#rechner" className="hover:text-white transition-colors">↓ Rechner</a>
              <a href="#erklaerung" className="hover:text-white transition-colors hidden sm:inline">↓ Erklärung</a>
              <a href="#faq" className="hover:text-white transition-colors">↓ FAQ</a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
          {/* Calculator Card */}
          <section id="rechner" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-7">Rechner</h2>

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

              <ToggleGroup label="Art des Minijobs" value={jobType} onChange={setJobType}
                options={[{ value: 'gewerblich', label: 'Im Betrieb' }, { value: 'privathaushalt', label: 'Privathaushalt' }]}
                hint={jobType === 'gewerblich' ? 'Arbeitgeber zahlt ~32,47% Gesamtabgaben.' : 'Günstigere Beitragssätze: ~14,62% Gesamtabgaben.'} />

              <ToggleGroup label="Rentenversicherung" value={rentenBefreiung} onChange={setRentenBefreiung}
                options={[{ value: 'nein', label: 'Zahlt 3,6%' }, { value: 'ja', label: 'Befreit' }]}
                hint={rentenBefreiung === 'ja' ? '✓ Volles Bruttogehalt als Netto' : '✓ Sammelt Rentenpunkte'} />

              <ToggleGroup label="Krankenversicherung" value={krankenversicherung} onChange={setKrankenversicherung}
                options={[{ value: 'gesetzlich', label: 'Gesetzlich' }, { value: 'privat', label: 'Privat' }]}
                hint={krankenversicherung === 'gesetzlich'
                  ? `Arbeitgeber zahlt ${jobType === 'gewerblich' ? '13%' : '5%'} pauschale KV`
                  : 'Kein pauschaler KV-Beitrag des Arbeitgebers'} />

              <button onClick={berechneNetto}
                className="w-full bg-gradient-to-br from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.01] transition-all shadow-md hover:shadow-lg text-base sm:text-lg active:scale-95">
                Jetzt berechnen
              </button>
            </div>

            {result && (
              <div className="mt-8 pt-8 border-t border-gray-200 space-y-5 sm:space-y-6">

                {/* Employee Results */}
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-800 px-4 sm:px-5 py-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <h3 className="font-bold text-white text-sm sm:text-base">Für Sie (Arbeitnehmer)</h3>
                  </div>
                  <ResultRow label="Bruttogehalt monatlich" value={result.brutto} />
                  {result.employeeRente > 0
                    ? <ResultRow label="Rentenversicherung" value={result.employeeRente} rate="3,60%" negative tooltip="Ihr Eigenbeitrag zur gesetzlichen Rentenversicherung" />
                    : <ResultRow label="Sonstige Abzüge (RV-befreit)" value={0} rate="0,00%" />
                  }
                  <ResultRow label="Nettogehalt monatlich" value={result.netto} bold highlight />
                  <ResultRow label="Nettogehalt jährlich" value={result.nettoJahr} sub />
                </div>

                {/* Employer Results */}
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-800 px-4 sm:px-5 py-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <h3 className="font-bold text-white text-sm sm:text-base">Für Arbeitgeber</h3>
                  </div>
                  <ResultRow label="Bruttogehalt monatlich" value={result.brutto} />
                  {krankenversicherung === 'gesetzlich' && (
                    <ResultRow label="Krankenversicherung" value={result.kranken} rate={pct(result.krankenRate)} tooltip="Pauschalabgabe zur Krankenversicherung" />
                  )}
                  <ResultRow label="Rentenversicherung" value={result.rente} rate={pct(result.renteRate)} tooltip="Pauschalabgabe zur Rentenversicherung" />
                  <ResultRow label="Pauschalsteuer" value={result.steuer} rate="2,00%" tooltip="Pauschale Lohnsteuer" />
                  <ResultRow label="U1-Umlage" value={result.u1} rate="0,80%" tooltip="Lohnfortzahlung im Krankheitsfall" />
                  <ResultRow label="U2-Umlage" value={result.u2} rate="0,22%" tooltip="Mutterschaftsleistungen" />
                  <ResultRow label="U3-Umlage" value={result.u3} rate={jobType === 'privathaushalt' ? '0,00%' : '0,15%'} tooltip="Insolvenzgeldumlage" />
                  <ResultRow label="Unfallversicherung" value={result.unfall} rate={pct(result.unfallRate)} tooltip="Je nach Branche variabel" />
                  <ResultRow label="Gesamtkosten für Arbeitgeber" value={result.totalExpenses} bold highlight />
                </div>
              </div>
            )}
          </section>

          {/* Information Section */}
          <section id="erklaerung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Was ist ein Minijob?</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ein <strong>Minijob</strong> ist eine geringfügige Beschäftigung in Deutschland. Seit 1. Januar 2026 liegt die Verdienstgrenze bei <strong>{minijobLimit} Euro pro Monat</strong>. Minijobs zeichnen sich durch stark reduzierte Sozialversicherungsbeiträge aus – der Arbeitgeber zahlt <strong>Pauschalabgaben</strong> statt regulärer Sozialversicherungsbeiträge.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-5">
              <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Die wichtigsten Merkmale:</h3>
              <div className="space-y-2">
                {['Verdienstgrenze: ' + minijobLimit + ' € pro Monat', 'Geringere Steuerlast für Arbeitgeber', 'Rentenversicherungspflicht (mit Befreiungsoption)', 'Gelten als Betriebseinnahme, nicht als Nebeneinnahmen'].map(item => (
                  <div key={item} className="flex gap-2 text-xs sm:text-sm text-blue-800">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 border-r border-gray-200">Kriterium</th>
                    <th className="p-2 sm:p-3 text-center font-semibold text-gray-900 border-r border-gray-200">Minijob</th>
                    <th className="p-2 sm:p-3 text-center font-semibold text-gray-900 border-r border-gray-200">Nebenjob</th>
                    <th className="p-2 sm:p-3 text-center font-semibold text-gray-900">Werkstudent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Verdienstgrenze', minijobLimit + ' € / Monat', 'Keine Grenze', 'Keine Grenze'],
                    ['Abgabenlast (AG)', '32,47% (~)', '~21% (var.)', '2% (Pauschal)'],
                    ['Steuerpflicht', 'Pauschal (AG)', 'Steuerklasse 6', 'Nach Lohnklasse'],
                    ['Max. Wochenstunden', 'Flexibel', 'Flexibel', '20 Std. (Sem.)'],
                    ['Typisch für', 'Aushilfen, Rentner', 'Zweiter Job', 'Studierende'],
                  ].map(([label, a, b, c], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-2 sm:p-3 font-medium text-gray-800 border-b border-gray-100 border-r">{label}</td>
                      <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100 border-r">{a}</td>
                      <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100 border-r">{b}</td>
                      <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Rechte und Pflichten</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ['Urlaubsanspruch', 'Anspruch auf bezahlten Urlaub – anteilig.'],
                  ['Entgeltfortzahlung', 'Arbeitgeber zahlt Gehalt bei Krankheit bis 6 Wochen.'],
                  ['Mindestlohn', 'Gesetzlicher Mindestlohn 13,90 €/h (2026).'],
                  ['Unfallversicherung', 'Automatischer Schutz bei Arbeits- und Wegeunfällen.'],
                  ['Mutterschutz', 'Minijobberinnen sind durch Mutterschutz geschützt.'],
                  ['Arbeitsvertrag', 'Arbeitgeber muss Arbeitsbedingungen schriftlich festhalten.'],
                ].map(([title, desc], i) => (
                  <div key={i} className="flex gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-green-500 text-lg shrink-0">✓</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">{title}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-amber-900">
                <strong>Wichtig:</strong> Die Anmeldung muss <strong>vor Beginn der Beschäftigung</strong> erfolgen. Rückwirkende Anmeldungen sind nicht möglich. Wenden Sie sich an die Minijob-Zentrale: <strong>0355 / 2902-70799</strong> oder <strong>minijob-zentrale.de</strong>
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
                <p className="text-xs sm:text-sm text-gray-700">Dieser Rechner dient nur zur Orientierung und ersetzt keine steuerliche oder rechtliche Beratung. Für eine verbindliche Auskunft wenden Sie sich bitte an einen Steuerberater.</p>
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
            <p className="text-xs text-gray-500">Stand: Januar {currentYear} · Alle Angaben ohne Gewähr</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
