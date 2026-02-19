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
    <div className={`flex justify-between items-center py-2.5 px-5 ${highlight ? 'bg-gray-50 border-t-2 border-gray-200' : sub ? 'bg-blue-50' : 'border-b border-gray-100 last:border-0'}`}>
      <div className="flex items-center gap-2">
        {rate && <span className="text-xs font-mono text-gray-400 w-[3.5rem] shrink-0 text-right">{rate}</span>}
        <span className={`text-sm ${bold ? 'font-bold text-gray-900' : sub ? 'font-semibold text-blue-800' : 'text-gray-700'}`}>{label}</span>
        {tooltip && (
          <div className="relative group cursor-help">
            <HelpCircle size={13} className="text-red-400" />
            <div className="absolute left-5 top-0 z-20 w-52 text-xs bg-gray-900 text-white rounded-lg p-2.5 hidden group-hover:block shadow-xl leading-relaxed">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      <span className={`text-sm font-semibold tabular-nums ${bold ? 'text-gray-900 text-base' : sub ? 'text-blue-800 font-bold' : negative ? 'text-red-600' : 'text-gray-800'}`}>
        {negative && value > 0 ? `- ${fmt(value)} €` : `${fmt(value)} €`}
      </span>
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
    {
      q: 'Muss ein Minijob beim Finanzamt angegeben werden?',
      a: 'Ein Minijob als einzige Beschäftigung muss in der Regel nicht in der Steuererklärung angegeben werden, da der Arbeitgeber eine Pauschalsteuer von 2 % übernimmt. Haben Sie jedoch mehrere Einkünfte, sollten Sie Ihren Steuerberater fragen, ob eine Angabe erforderlich ist.'
    },
    {
      q: 'Was ist der Unterschied zwischen gewerblichem Minijob und Minijob im Privathaushalt?',
      a: 'Bei einem gewerblichen Minijob (z.B. im Einzelhandel oder Büro) zahlt der Arbeitgeber höhere Pauschabgaben: 13 % Krankenversicherung, 15 % Rentenversicherung – insgesamt ca. 32,47 %. Im Privathaushalt (z.B. Putzhilfe, Babysitter) gelten deutlich günstigere Sätze: je 5 % für KV und RV, gesamt ca. 14,62 %. Außerdem entfällt die U3-Insolvenzgeldumlage im Privathaushalt.'
    },
    {
      q: 'Was passiert, wenn ich die Minijob-Grenze überschreite?',
      a: `Wird die Verdienstgrenze von ${minijobLimit} Euro auch nur in einem Monat überschritten, handelt es sich nicht mehr um eine geringfügige Beschäftigung. Das Arbeitsverhältnis wird dann sozialversicherungspflichtig und es fallen reguläre Beiträge zu Kranken-, Pflege-, Renten- und Arbeitslosenversicherung an. Gelegentliche Überschreitungen bis zu zweimal im Jahr können als unvorhersehbar gelten – hier empfiehlt sich Rücksprache mit der Minijob-Zentrale.`
    },
    {
      q: 'Haben Minijobber Anspruch auf Urlaub?',
      a: 'Ja! Minijobber haben denselben gesetzlichen Urlaubsanspruch wie Vollzeitbeschäftigte – anteilig nach ihren wöchentlichen Arbeitstagen. Wer beispielsweise 2 Tage pro Woche arbeitet, hat Anspruch auf mindestens 2/5 des gesetzlichen Urlaubsanspruchs (24 Werktage bei 6-Tage-Woche). Urlaubsgeld muss vertraglich vereinbart sein.'
    }
  ]

  const ToggleGroup = ({ label, value, onChange, options, hint }: {
    label: string; value: string; onChange: (v: any) => void; options: { value: string; label: string }[]; hint?: string
  }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="flex gap-2.5">
        {options.map(o => (
          <button key={o.value} onClick={() => onChange(o.value)}
            className={`flex-1 py-2.5 px-3 rounded-lg font-medium text-sm transition-all border ${value === o.value ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}>
            {o.label}
          </button>
        ))}
      </div>
      {hint && <p className="mt-1.5 text-xs text-gray-500">{hint}</p>}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Minijob Rechner 2026 | Netto berechnen</h1>
            <p className="text-xl text-blue-50 mb-8">Berechne in Sekunden, wie viel Netto dir bei einem Minijob bleibt. Kostenlos & Aktuell.</p>
            <div className="flex justify-center gap-6 text-sm text-blue-100">
              <a href="#rechner" className="hover:text-white transition-colors">↓ Rechner</a>
              <a href="#erklaerung" className="hover:text-white transition-colors">↓ Erklärung</a>
              <a href="#faq" className="hover:text-white transition-colors">↓ FAQ</a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <section id="rechner" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="space-y-5">

              <ToggleGroup label="Berechnungsjahr" value={String(selectedYear)} onChange={(v) => setSelectedYear(Number(v))}
                options={availableYears.map(y => ({ value: String(y), label: String(y) }))}
                hint={`Minijob-Grenze ${selectedYear}: ${minijobLimit} € pro Monat`} />

              <div>
                <label htmlFor="brutto-input" className="block text-sm font-semibold text-gray-700 mb-2">Brutto-Monatsgehalt (€)</label>
                <input id="brutto-input" type="number" value={bruttoMonat}
                  onChange={(e) => { setBruttoMonat(e.target.value); setError('') }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-gray-900 bg-white placeholder:text-gray-400"
                  placeholder={`z.B. ${minijobLimit}`} />
                {error && (
                  <div className="mt-2 flex items-start gap-2 text-red-600 text-sm" role="alert">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" /><span>{error}</span>
                  </div>
                )}
              </div>

              <ToggleGroup label="Art des Minijobs" value={jobType} onChange={setJobType}
                options={[{ value: 'gewerblich', label: 'Im Betrieb (gewerblich)' }, { value: 'privathaushalt', label: 'Im Privathaushalt' }]}
                hint={jobType === 'gewerblich' ? 'Arbeitgeber zahlt ~32,47% Gesamtabgaben (+ Unfallversicherung).' : 'Günstigere Beitragssätze im Privathaushalt: ~14,62% Gesamtabgaben.'} />

              <ToggleGroup label="Verzicht auf Rentenversicherungspflicht" value={rentenBefreiung} onChange={setRentenBefreiung}
                options={[{ value: 'ja', label: 'Ja (befreit)' }, { value: 'nein', label: 'Nein (zahlt 3,6%)' }]}
                hint={rentenBefreiung === 'ja' ? '✓ Arbeitnehmer erhält das vollständige Bruttogehalt als Netto.' : '✓ Arbeitnehmer zahlt 3,6% in die Rentenkasse und sammelt Rentenpunkte.'} />

              <ToggleGroup label="Krankenversicherung" value={krankenversicherung} onChange={setKrankenversicherung}
                options={[{ value: 'gesetzlich', label: 'Gesetzlich' }, { value: 'privat', label: 'Privat' }]}
                hint={krankenversicherung === 'gesetzlich'
                  ? `Arbeitgeber zahlt ${jobType === 'gewerblich' ? '13%' : '5%'} pauschale Krankenversicherung.`
                  : 'Privat versichert: Kein pauschaler KV-Beitrag des Arbeitgebers.'} />

              <button onClick={berechneNetto}
                className="w-full bg-gradient-to-br from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.01] transition-all shadow-md hover:shadow-lg text-lg">
                Jetzt berechnen
              </button>
            </div>

            {result && (
              <div className="mt-8 pt-8 border-t border-gray-200 space-y-5">

                {/* Employee */}
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-800 px-5 py-3.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <h3 className="font-bold text-white">Berechnung für Arbeitnehmer</h3>
                  </div>
                  <ResultRow label="Bruttogehalt monatlich" value={result.brutto} />
                  {result.employeeRente > 0
                    ? <ResultRow label="Rentenversicherung" value={result.employeeRente} rate="3,60%" negative tooltip="Eigenbeitrag des Arbeitnehmers zur gesetzlichen Rentenversicherung" />
                    : <ResultRow label="Sonstige Abzüge (RV-befreit)" value={0} rate="0,00%" />
                  }
                  <ResultRow label="Nettogehalt monatlich" value={result.netto} bold highlight />
                  <ResultRow label="Nettogehalt jährlich" value={result.nettoJahr} sub />
                </div>

                {/* Employer */}
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-800 px-5 py-3.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <h3 className="font-bold text-white">Berechnung für Arbeitgeber</h3>
                  </div>
                  <ResultRow label="Bruttogehalt monatlich" value={result.brutto} />
                  {krankenversicherung === 'gesetzlich' && (
                    <ResultRow label="Krankenversicherung" value={result.kranken} rate={pct(result.krankenRate)} tooltip="Pauschalabgabe des Arbeitgebers zur Krankenversicherung" />
                  )}
                  <ResultRow label="Rentenversicherung" value={result.rente} rate={pct(result.renteRate)} tooltip="Pauschalabgabe des Arbeitgebers zur Rentenversicherung" />
                  <ResultRow label="Pauschalsteuer" value={result.steuer} rate="2,00%" tooltip="Pauschale Lohnsteuer übernimmt der Arbeitgeber" />
                  <ResultRow label="U1-Umlage (Lohnfortzahlung)" value={result.u1} rate="0,80%" tooltip="Umlage für Lohnfortzahlung im Krankheitsfall" />
                  <ResultRow label="U2-Umlage (Mutterschutz)" value={result.u2} rate="0,22%" tooltip="Umlage für Mutterschaftsleistungen" />
                  {jobType === 'gewerblich' && (
                    <ResultRow label="U3-Umlage (Insolvenzgeld)" value={result.u3} rate="0,15%" tooltip="Insolvenzgeldumlage – nur bei gewerblichen Minijobs" />
                  )}
                  <ResultRow label="Unfallversicherung" value={result.unfall} rate={pct(result.unfallRate)}
                    tooltip={jobType === 'gewerblich' ? 'Durchschnittswert – individuell je nach Berufsgenossenschaft' : 'Einheitsbeitrag für Privathaushalte'} />
                  <div className="flex justify-between items-center py-2.5 px-5 bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-400 w-[3.5rem] text-right">{pct(result.totalContributions / result.brutto)}</span>
                      <span className="text-sm font-medium text-gray-700">Gesamtbeiträge</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800 tabular-nums">{fmt(result.totalContributions)} €</span>
                  </div>
                  <ResultRow label="Gesamtkosten des Arbeitgebers" value={result.totalExpenses} bold highlight />
                </div>

                <p className="text-xs text-gray-500 px-1">
                  💡 Unfallversicherung bei gewerblichen Minijobs ist ein Durchschnittswert (1,3%). Tatsächliche Beiträge können je nach Berufsgenossenschaft variieren.
                </p>
              </div>
            )}
          </section>

          {/* ── HOW TO USE ── */}
          <section className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8" id="anleitung">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">So benutzen Sie den Minijob Rechner 2026</h2>
            <p className="text-gray-700 mb-6">
              Unser <strong>Minijob Rechner</strong> liefert in wenigen Sekunden eine vollständige Brutto-Netto-Berechnung –
              sowohl für Arbeitnehmer als auch für Arbeitgeber. So gehen Sie vor:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { step: '1', title: 'Berechnungsjahr wählen', desc: 'Wählen Sie 2025 oder 2026. Die Minijob-Grenze wird automatisch angepasst (556 € bzw. 603 € pro Monat).' },
                { step: '2', title: 'Bruttogehalt eingeben', desc: 'Tragen Sie das vereinbarte monatliche Bruttogehalt ein. Es darf die Minijob-Grenze des gewählten Jahres nicht überschreiten.' },
                { step: '3', title: 'Art des Minijobs auswählen', desc: 'Unterscheiden Sie zwischen einem gewerblichen Minijob (Betrieb) und einem Minijob im Privathaushalt – die Abgabensätze unterscheiden sich erheblich.' },
                { step: '4', title: 'Rentenversicherung & Krankenversicherung', desc: 'Geben Sie an, ob der Arbeitnehmer auf die Rentenversicherungspflicht verzichtet und ob er gesetzlich oder privat krankenversichert ist.' },
                { step: '5', title: 'Berechnen klicken', desc: 'Klicken Sie auf „Jetzt berechnen". Sie erhalten sofort eine detaillierte Aufstellung mit Nettogehalt, Arbeitgeberkosten und allen Einzelbeiträgen.' },
                { step: '6', title: 'Ergebnis ablesen', desc: 'Das Ergebnis zeigt Ihnen das monatliche und jährliche Netto für den Arbeitnehmer sowie alle Abgaben und Gesamtkosten für den Arbeitgeber.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">{step}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW IT CALCULATES ── */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8" id="berechnung">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wie wird der Minijob berechnet? – Die Formel erklärt</h2>
            <p className="text-gray-700 mb-6">
              Der Minijob Rechner arbeitet nach den aktuellen gesetzlichen Vorgaben der Minijob-Zentrale und des Sozialgesetzbuchs (§ 8 SGB IV).
              Hier ist die exakte Berechnungslogik, die im Hintergrund läuft:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Netto für den Arbeitnehmer</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-800 space-y-1">
                  <p>Nettogehalt = Bruttogehalt − Rentenversicherung (3,6%)*</p>
                  <p className="text-xs text-gray-500 font-sans mt-1">* Nur wenn <strong>nicht</strong> von der Rentenversicherungspflicht befreit. Bei Befreiung: Netto = Brutto.</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Minijobber zahlen <strong>keine Krankenversicherung, keine Pflegeversicherung und keine Arbeitslosenversicherung</strong>.
                  Der einzige mögliche Abzug ist der eigene Rentenversicherungsbeitrag von 3,6 % – sofern keine Befreiung beantragt wurde.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kosten für den Arbeitgeber (gewerblicher Minijob)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Abgabe</th>
                        <th className="text-right p-3">Satz</th>
                        <th className="text-right p-3 rounded-tr-lg">Beispiel bei 603 €</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Krankenversicherung (pauschal)', '13,00 %', '78,39 €'],
                        ['Rentenversicherung (pauschal)', '15,00 %', '90,45 €'],
                        ['Pauschalsteuer', '2,00 %', '12,06 €'],
                        ['U1-Umlage (Lohnfortzahlung)', '0,80 %', '4,82 €'],
                        ['U2-Umlage (Mutterschutz)', '0,22 %', '1,33 €'],
                        ['U3-Umlage (Insolvenzgeld)', '0,15 %', '0,90 €'],
                        ['Unfallversicherung (Ø)', '1,30 %', '7,84 €'],
                      ].map(([label, rate, ex], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-3 text-gray-700 border-b border-gray-100">{label}</td>
                          <td className="p-3 text-right font-mono text-gray-700 border-b border-gray-100">{rate}</td>
                          <td className="p-3 text-right font-semibold text-gray-900 border-b border-gray-100">{ex}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50 font-bold">
                        <td className="p-3 text-gray-900 rounded-bl-lg">Gesamtabgaben</td>
                        <td className="p-3 text-right text-gray-900">32,47 %</td>
                        <td className="p-3 text-right text-blue-700 rounded-br-lg">195,79 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Gesamtkosten für Arbeitgeber bei 603 € Bruttogehalt: <strong>603 + 195,79 = 798,79 €</strong> pro Monat.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kosten für den Arbeitgeber (Privathaushalt)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Abgabe</th>
                        <th className="text-right p-3">Satz</th>
                        <th className="text-right p-3 rounded-tr-lg">Beispiel bei 603 €</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Krankenversicherung (pauschal)', '5,00 %', '30,15 €'],
                        ['Rentenversicherung (pauschal)', '5,00 %', '30,15 €'],
                        ['Pauschalsteuer', '2,00 %', '12,06 €'],
                        ['U1-Umlage', '0,80 %', '4,82 €'],
                        ['U2-Umlage', '0,22 %', '1,33 €'],
                        ['Unfallversicherung (fest)', '1,60 %', '9,65 €'],
                      ].map(([label, rate, ex], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-3 text-gray-700 border-b border-gray-100">{label}</td>
                          <td className="p-3 text-right font-mono text-gray-700 border-b border-gray-100">{rate}</td>
                          <td className="p-3 text-right font-semibold text-gray-900 border-b border-gray-100">{ex}</td>
                        </tr>
                      ))}
                      <tr className="bg-green-50 font-bold">
                        <td className="p-3 text-gray-900 rounded-bl-lg">Gesamtabgaben</td>
                        <td className="p-3 text-right text-gray-900">14,62 %</td>
                        <td className="p-3 text-right text-green-700 rounded-br-lg">88,16 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Privathaushalt-Arbeitgeber zahlen mehr als <strong>50 % weniger Abgaben</strong> als gewerbliche Arbeitgeber.</p>
              </div>
            </div>
          </section>

          {/* ── MAIN SEO CONTENT ── */}
          <section className="space-y-10 text-gray-800 mb-8" id="erklaerung">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Was ist ein Minijob? – Definition & Grundlagen 2026</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ein <strong>Minijob</strong> (auch: geringfügige Beschäftigung) ist eine Beschäftigungsform in Deutschland,
                bei der das monatliche Arbeitsentgelt eine gesetzlich festgelegte Verdienstgrenze nicht überschreitet.
                Die rechtliche Grundlage bildet <strong>§ 8 Abs. 1 SGB IV</strong>. Seit dem 1. Oktober 2022 ist die
                Minijob-Grenze dynamisch an den gesetzlichen Mindestlohn gekoppelt – sie steigt also automatisch mit
                dem Mindestlohn mit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Im Jahr 2025 beträgt die Minijob-Grenze <strong>556 Euro pro Monat</strong>. Seit dem 1. Januar 2026 gilt
                ein Mindestlohn von 13,90 Euro pro Stunde, woraus eine neue Minijob-Grenze von <strong>603 Euro pro Monat</strong> resultiert.
                Ab 2027 steigt der Mindestlohn auf 14,60 Euro/h, womit die Grenze auf <strong>633 Euro</strong> ansteigt.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mt-2">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="text-left p-3 rounded-tl-lg">Jahr</th>
                      <th className="text-right p-3">Mindestlohn</th>
                      <th className="text-right p-3 rounded-tr-lg">Minijob-Grenze</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[['2022 (bis Sep.)', '10,45 €/h', '450 € / Monat'], ['2022 (ab Okt.)', '12,00 €/h', '520 € / Monat'], ['2024', '12,41 €/h', '538 € / Monat'], ['2025', '12,82 €/h', '556 € / Monat'], ['2026', '13,90 €/h', '603 € / Monat'], ['2027', '14,60 €/h', '633 € / Monat']].map(([yr, lohn, grenze], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 text-gray-700 border-b border-gray-100 font-medium">{yr}</td>
                        <td className="p-3 text-right text-gray-700 border-b border-gray-100">{lohn}</td>
                        <td className="p-3 text-right font-semibold text-blue-700 border-b border-gray-100">{grenze}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Minijob Netto berechnen – Was bleibt dem Arbeitnehmer?</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Das Besondere am Minijob: <strong>Arbeitnehmer zahlen nahezu keine Abzüge</strong>. Es gibt keine
                Krankenversicherungs-, Pflege- oder Arbeitslosenversicherungspflicht für den Arbeitnehmer.
                Der einzige potenzielle Abzug ist der Eigenbeitrag zur <strong>Rentenversicherung von 3,6 %</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Arbeitnehmer können sich auf Antrag von der Rentenversicherungspflicht <strong>befreien lassen</strong>.
                In diesem Fall erhalten sie ihr <strong>Bruttogehalt vollständig als Netto</strong> ausgezahlt.
                Wer hingegen in die Rentenkasse einzahlt, sammelt wertvolle Rentenpunkte für die spätere Altersrente –
                ein Vorteil, der langfristig bedeutend sein kann.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✓ Mit Rentenbefreiung</h4>
                  <p className="text-sm text-gray-700">Bruttogehalt = Nettogehalt. Keine Abzüge. Beispiel: <strong>603 € Brutto → 603 € Netto</strong>.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">✓ Ohne Rentenbefreiung (3,6 %)</h4>
                  <p className="text-sm text-gray-700">Kleiner Abzug, dafür Rentenpunkte. Beispiel: <strong>603 € Brutto → 581,27 € Netto</strong>.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Minijob Rechner für Arbeitgeber – Was kostet ein Minijob wirklich?</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Viele Arbeitgeber unterschätzen die tatsächlichen Kosten eines Minijobs. Neben dem ausgezahlten
                Bruttogehalt fallen <strong>Pauschalabgaben von bis zu 32,47 %</strong> (gewerblich) an. Diese werden
                direkt an die <strong>Minijob-Zentrale</strong> (Deutsche Rentenversicherung Knappschaft-Bahn-See) gemeldet
                und monatlich abgeführt.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Im <strong>Privathaushalt</strong> profitieren Arbeitgeber von stark reduzierten Sätzen: Hier betragen
                die Gesamtabgaben nur etwa 14,62 %, was den Minijob im Haushalt deutlich günstiger macht.
                Unser Minijob Rechner zeigt Ihnen auf einen Blick, welche Variante für Sie günstiger ist.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Minijob, Nebenjob oder Werkstudent – Was ist der Unterschied?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diese drei Beschäftigungsformen werden oft verwechselt, unterscheiden sich aber erheblich in Bezug
                auf Abgaben, Steuerpflicht und Sozialversicherung:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="text-left p-3 rounded-tl-lg">Merkmal</th>
                      <th className="text-center p-3">Minijob</th>
                      <th className="text-center p-3">Nebenjob</th>
                      <th className="text-center p-3 rounded-tr-lg">Werkstudent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Verdienstgrenze', '603 €/Monat', 'Keine Grenze', 'Keine Grenze'],
                      ['Krankenversicherung AN', '✗ Keine', '✓ Ja (KV)', '✗ Reduziert'],
                      ['Rentenversicherung AN', '3,6 % (opt.)','✓ Ja (RV)', '✓ Ja (RV)'],
                      ['Steuerpflicht', 'Pauschal (AG)', 'Steuerklasse 6', 'Nach Lohnklasse'],
                      ['Max. Wochenstunden', 'Flexibel', 'Flexibel', '20 Std. (Sem.)'],
                      ['Typisch für', 'Aushilfen, Rentner', 'Zweiter Job', 'Studierende'],
                    ].map(([label, a, b, c], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 font-medium text-gray-800 border-b border-gray-100">{label}</td>
                        <td className="p-3 text-center text-gray-700 border-b border-gray-100">{a}</td>
                        <td className="p-3 text-center text-gray-700 border-b border-gray-100">{b}</td>
                        <td className="p-3 text-center text-gray-700 border-b border-gray-100">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Rechte und Pflichten im Minijob</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Minijobber genießen <strong>dieselben Arbeitsrechte wie regulär Beschäftigte</strong>. Das ist vielen
                nicht bewusst. Folgende Rechte stehen Minijobbern zu:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  ['Urlaubsanspruch', 'Minijobber haben Anspruch auf bezahlten Urlaub – anteilig nach Wochenstunden.'],
                  ['Entgeltfortzahlung im Krankheitsfall', 'Bei Krankheit muss der Arbeitgeber das Gehalt für bis zu 6 Wochen fortzahlen.'],
                  ['Mindestlohn', 'Es gilt der gesetzliche Mindestlohn (2026: 13,90 €/Stunde). Kein Unterlaufen möglich.'],
                  ['Unfallversicherung', 'Automatischer Schutz über die gesetzliche Unfallversicherung bei Arbeits- und Wegeunfällen.'],
                  ['Mutterschutz & Elterngeld', 'Auch Minijobberinnen sind durch den Mutterschutz geschützt.'],
                  ['Schriftlicher Arbeitsvertrag', 'Arbeitgeber sind verpflichtet, wesentliche Arbeitsbedingungen schriftlich festzuhalten.'],
                ].map(([title, desc], i) => (
                  <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-green-500 text-lg shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Minijob anmelden – So funktioniert's</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Arbeitgeber sind verpflichtet, jeden Minijob bei der <strong>Minijob-Zentrale</strong> anzumelden.
                Das Versäumnis gilt als Ordnungswidrigkeit und kann mit bis zu <strong>5.000 Euro Bußgeld</strong> bestraft werden.
                Die Anmeldung erfolgt über das <strong>Haushaltsscheckverfahren</strong> (Privathaushalt) oder das
                reguläre Meldeverfahren (Betrieb).
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <strong>Wichtig:</strong> Die Anmeldung muss <strong>vor Beginn der Beschäftigung</strong> erfolgen.
                  Rückwirkende Anmeldungen sind nicht möglich und können rechtliche Konsequenzen haben.
                  Wenden Sie sich an die Minijob-Zentrale unter <strong>0355 / 2902-70799</strong> oder online auf <strong>minijob-zentrale.de</strong>.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Minijob Rechner 2026 – Aktuelle Berechnungsgrundlage</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Unser <strong>Minijob Rechner 2026</strong> basiert auf den zum 1. Januar 2026 geltenden gesetzlichen
                Regelungen. Alle Beitragssätze – Krankenversicherung, Rentenversicherung, Pauschalsteuer,
                Umlage 1, 2 und 3 sowie Unfallversicherung – sind auf dem aktuellen Stand.
                Der Rechner eignet sich für:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Minijob Rechner', 'Brutto Netto Rechner Minijob', 'Minijob Netto berechnen', '603 Euro Job Rechner', 'Geringfügige Beschäftigung Rechner', 'Arbeitgeberkosten Minijob', 'Minijob Rechner 2026', 'Minijob Privathaushalt Rechner', 'Werkstudent Rechner', 'Aushilfe Rechner'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs rounded-full font-medium">{tag}</span>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500 border-t border-gray-200 pt-4">
              <strong>Hinweis:</strong> Die Berechnung dient zur Orientierung und ersetzt keine steuerliche oder rechtliche Beratung. Für
              individuelle Fragen empfehlen wir die Rücksprache mit einem Steuerberater oder der zuständigen
              Krankenkasse. Alle Angaben ohne Gewähr.
            </p>
          </section>

          {/* SEO Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm text-gray-700">
            Dieser Rechner eignet sich für Minijobs, Nebenjobs, Werkstudentenjobs sowie für Studenten und Nicht-Studenten in Deutschland. Berechnen Sie schnell und einfach Ihr Nettogehalt – kostenlos, aktuell und ohne Anmeldung.
          </div>

          {/* FAQ */}
          <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Häufig gestellte Fragen zum Minijob Rechner</h2>
            <p className="text-sm text-gray-500 mb-6">Antworten auf die wichtigsten Fragen rund um Minijob, Abgaben und Nettolohn.</p>
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0">
                  <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}
                    className="flex items-center justify-between w-full text-left py-3 hover:text-blue-600 transition-colors">
                    <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                    {activeFaq === index ? <ChevronUp size={16} className="shrink-0" /> : <ChevronDown size={16} className="shrink-0" />}
                  </button>
                  {activeFaq === index && <p className="pb-3 text-gray-700 text-sm leading-relaxed">{faq.a}</p>}
                </div>
              ))}
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <Info size={20} className="text-yellow-700 mr-3 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Rechtlicher Hinweis</h3>
                <p className="text-sm text-gray-700">Dieser Rechner dient nur zur Orientierung und ersetzt keine steuerliche oder rechtliche Beratung. Die Unfallversicherung bei gewerblichen Minijobs kann je nach Branche und Berufsgenossenschaft variieren. Für eine verbindliche Auskunft wenden Sie sich bitte an einen Steuerberater oder das zuständige Finanzamt.</p>
              </div>
            </div>
          </div>

          <footer className="border-t border-gray-200 pt-6 text-center text-sm text-gray-600 mb-8">
            <div className="space-x-4 mb-4">
              <a href="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</a>
              <span>•</span>
              <a href="/impressum" className="hover:text-gray-900 transition-colors">Impressum</a>
              <span>•</span>
              <a href="/kontakt" className="hover:text-gray-900 transition-colors">Kontakt</a>
            </div>
            <p className="text-xs text-gray-500">Stand: Januar {currentYear} · Alle Angaben ohne Gewähr · Quellen: Minijob-Zentrale, SGB IV, Bundesministerium für Arbeit und Soziales</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
