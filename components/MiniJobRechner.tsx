'use client'

import React, { useState, memo, useMemo } from 'react'
import { ChevronDown, ChevronUp, Info, AlertCircle, HelpCircle, TrendingUp, Zap, Users, Award, CheckCircle, DollarSign, Clock, FileText } from 'lucide-react'

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
      q: 'Was ist ein Minijob? Definition & Bedeutung',
      a: `Ein Minijob ist eine geringfügige Beschäftigung in Deutschland mit einem monatlichen Verdienst bis ${minijobLimit} Euro (Stand ${selectedYear}). Die offizielle Bezeichnung ist "geringfügige Beschäftigung" gemäß § 8 SGB IV. Der Arbeitgeber zahlt keine normalen Sozialversicherungsbeiträge, sondern Pauschalabgaben. Der Arbeitnehmer erhält das Bruttogehalt in der Regel steuerfrei oder mit minimalen Steuern als Netto.`
    },
    {
      q: 'Wie hoch ist die Minijob-Grenze 2026?',
      a: `Die aktuelle Minijob-Grenze 2026 beträgt genau ${minijobLimit} Euro pro Monat. Diese Grenze ist gekoppelt an den gesetzlichen Mindestlohn von 13,90€ pro Stunde. Die Berechnung basiert auf 43,33 Arbeitsstunden pro Monat × Mindestlohn. Wenn der Mindestlohn angepasst wird, erhöht sich automatisch auch die Minijob-Grenze.`
    },
    {
      q: 'Was ist die Rentenversicherungspflicht beim Minijob?',
      a: `Seit 2013 sind Minijobber automatisch in der gesetzlichen Rentenversicherung versichert (Rentenversicherungspflicht). Sie zahlen einen Eigenbeitrag von 3,6% ihres Bruttogehalts. Diese Beiträge werden später bei der Rente angerechnet. Allerdings können Sie sich von dieser Pflicht befreien lassen (Befreiungsoption gemäß § 4 Abs. 2 SGB VI). Mit Befreiung erhalten Sie das volle Bruttogehalt steuerfrei, sammeln aber keine Rentenpunkte.`
    },
    {
      q: 'Wie viel Stunden darf ich im Minijob arbeiten?',
      a: `Es gibt KEINE gesetzliche Stundenbegrenzung beim Minijob! Das ist ein häufiger Irrtum. Entscheidend ist allein die monatliche Verdienstgrenze von ${minijobLimit} Euro. Wenn Sie beispielsweise 13,90€/h verdienen (Mindestlohn 2026), entspricht das etwa 43 Stunden pro Monat oder rund 10 Stunden pro Woche. Sie könnten aber auch 40 Stunden in einer Woche arbeiten und die restlichen Wochen nicht arbeiten – solange die monatliche Grenze nicht überschritten wird.`
    },
    {
      q: 'Kann ich mehrere Minijobs gleichzeitig haben?',
      a: `Ja, Sie können mehrere Minijobs gleichzeitig ausüben. ABER: Das Gesamteinkommen aus allen geringfügigen Beschäftigungen zusammen darf die Minijob-Grenze von ${minijobLimit} Euro pro Monat nicht überschreiten. Beispiel: Wenn Sie zwei Minijobs haben und verdienen zusammen 650 Euro, überschreiten Sie die Grenze und es werden reguläre Sozialversicherungsbeiträge fällig. Wer einen sozialversicherungspflichtigen Hauptjob hat, darf daneben genau einen Minijob haben.`
    },
    {
      q: 'Was passiert, wenn ich die Minijob-Grenze überschreite?',
      a: `Wenn die Verdienstgrenze von ${minijobLimit} Euro überschritten wird, endet die Minijob-Regelung sofort. Das Arbeitsverhältnis wird dann als reguläre sozialversicherungspflichtige Beschäftigung eingestuft. Es fallen dann die vollen Sozialversicherungsbeiträge an: Krankenversicherung, Pflegeversicherung, Rentenversicherung und Arbeitslosenversicherung. Das führt zu deutlich höheren Abgaben sowohl für Arbeitgeber als auch Arbeitnehmer.`
    },
    {
      q: 'Muss ich einen Minijob beim Finanzamt angeben?',
      a: `Ein Minijob als einzige Beschäftigung muss in der Regel NICHT in der Steuererklärung angegeben werden. Der Grund: Der Arbeitgeber zahlt bereits eine pauschale Lohnsteuer von 2% (wird vom Bruttolohn einbehalten). Diese Pauschalsteuer ist eine abschließende Steuererhebung. Bei mehreren Einkünften (z.B. zwei Minijobs oder Minijob + Freelance-Einkommen) kann eine Steuererklärung sinnvoll sein und zu Erstattungen führen. Konsultieren Sie einen Steuerberater für Ihre individuelle Situation.`
    },
    {
      q: 'Unterschied Privathaushalt vs. Gewerblich – Was kostet den Arbeitgeber mehr?',
      a: `Der größte Unterschied ist die Höhe der Pauschalabgaben: GEWERBLICH (z.B. Einzelhandel, Gastronomie, Büro, Produktion): Der Arbeitgeber zahlt ca. 32,47% Pauschalabgaben auf den Bruttolohn. Bei 603€ Brutto = ca. 798€ Gesamtkosten. PRIVATHAUSHALT (z.B. Haushaltshilfe, Kinderbetreuung, Gartenpflege, Pflege von Angehörigen): Der Arbeitgeber zahlt ca. 14,62% Pauschalabgaben. Bei 603€ Brutto = ca. 689€ Gesamtkosten. Für Arbeitnehmer ist der Unterschied beim Nettolohn minimal – die Unterschiede liegen mainly bei Arbeitgeberkosten.`
    },
    {
      q: 'Brauche ich einen schriftlichen Arbeitsvertrag für einen Minijob?',
      a: `Ja, grundsätzlich sollte IMMER ein schriftlicher Arbeitsvertrag vorliegen – auch bei Minijobs. Der Arbeitsvertrag muss folgende Angaben enthalten: Tätigkeit/Aufgaben, Lohnhöhe/Bruttoverdienst, Arbeitszeiten (wöchentlich/monatlich), Urlaubsanspruch, Kündigungsfristen. Ein schriftlicher Vertrag schützt beide Seiten rechtlich und verhindert Missverständnisse. Der Arbeitgeber muss Sie auch zur Minijob-Zentrale anmelden (Anmeldung zur Sozialversicherung).`
    },
    {
      q: 'Haben Minijobber Anspruch auf Urlaub und Lohnfortzahlung?',
      a: `Ja! Minijobber haben die GLEICHEN gesetzlichen Rechte wie normale Arbeitnehmer: Urlaubsanspruch: Gesetzlich mindestens 20 Werktage pro Kalenderjahr (anteilig nach tatsächlichen Arbeitstagen). Lohnfortzahlung im Krankheitsfall: Der Arbeitgeber muss bis zu 6 Wochen den Lohn weiterzahlen. Mutterschutz: Minijobberinnen sind durch Mutterschutzgesetz geschützt. Unfallversicherung: Automatischer Schutz bei Arbeits- und Wegeunfällen. Diese Rechte entstehen durch die Pauschalabgaben des Arbeitgebers (insbesondere die U1- und U2-Umlagen).`
    },
    {
      q: 'Kann ich als Student einen Minijob machen?',
      a: `Ja, Studenten können problemlos Minijobs ausüben. Wichtige Punkte: 1) Die 603€-Grenze ist einzuhalten, 2) Versicherungsstatus: Wenn Sie über die Eltern familienversichert sind oder studentisch versichert, bleibt dieser Status bestehen – der Minijob ändert das nicht, 3) BAföG: Ein Minijob beeinflußt das BAföG nicht negativ (es gibt Freibeträge), 4) Arbeitszeit: Während Vorlesungszeit sollte die Arbeitszeit 20 Stunden/Woche nicht überschreiten (sonst kann die Studenteneigenschaft wegfallen), 5) Mehrere Minijobs: Mehrere Jobs sind erlaubt, solange die 603€-Grenze eingehalten wird.`
    },
    {
      q: 'Wie funktioniert die Anmeldung eines Minijobs?',
      a: `Die Anmeldung MUSS VOR BEGINN der Beschäftigung erfolgen – rückwirkende Anmeldungen sind nicht erlaubt! Der Ablauf: 1) Der Arbeitgeber meldet den Minijob bei der Minijob-Zentrale an (online unter minijob-zentrale.de oder schriftlich), 2) Sie als Arbeitnehmer benötigen Ihre Steuernummer (wenn nicht vorhanden, beantragen Sie diese beim Finanzamt), 3) Der Arbeitgeber benötigt Ihre Versicherungsnummer (Krankenversicherung), 4) Die Anmeldung ist gebührenfrei, 5) Verarbeitung dauert etwa 5–10 Arbeitstage. WICHTIG: Ohne Anmeldung ist das Arbeitsverhältnis nicht versichert!`
    },
    {
      q: 'Minijob-Grenze 2025 vs. 2026 – Was hat sich geändert?',
      a: `2025: Minijob-Grenze 556€/Monat, Mindestlohn 12,41€/h. 2026: Minijob-Grenze 603€/Monat, Mindestlohn 13,90€/h. Die Erhöhung um 47€ pro Monat (8,5%) ist eine große Verbesserung für Minijobber und Arbeitgeber! Mit dem neuen Mindestlohn von 13,90€ können Sie etwa 43 Stunden pro Monat arbeiten und die volle 603€-Grenze erreichen. Für Arbeitgeber steigen die Kosten, aber auch die Flexibilität bei der Gestaltung von Minijobs.`
    },
    {
      q: 'Wie berechnet sich das Netto beim Minijob ohne Rentenversicherung?',
      a: `Wenn Sie von der Rentenversicherung befreit sind: Netto = Brutto (keine Abzüge vom Arbeitnehmer). Beispiel: 603€ Brutto = 603€ Netto, 500€ Brutto = 500€ Netto. Der Grund: Minijobs haben Pauschalabgaben, die der Arbeitgeber zahlt – der Arbeitnehmer hat KEINE Sozialversicherungsbeiträge. Mit Rentenversicherung: Netto = Brutto - 3,6% (Rentenbeitrag). Beispiel: 603€ Brutto - 21,71€ RV = 581,29€ Netto. Unser Minijob-Rechner oben berechnet dies automatisch für Sie!`
    },
    {
      q: 'Was kostet ein Minijob den Arbeitgeber? Kostenberechnung',
      a: `Die Gesamtkosten für den Arbeitgeber setzen sich aus Bruttolohn + Pauschalabgaben zusammen. BEISPIEL GEWERBLICH (z.B. Restaurant, Laden): 603€ Brutto + Pauschalabgaben (32,47%) = ca. 798€ Gesamtkosten/Monat. Aufschlüsselung: Krankenversicherung 13%, Rentenversicherung 15%, Pauschalsteuer 2%, U1-Umlage 0,8%, U2-Umlage 0,22%, U3-Umlage 0,15%, Unfallversicherung ca. 1,3% = 32,47% Gesamt. BEISPIEL PRIVATHAUSHALT (z.B. Haushaltshilfe): 603€ Brutto + Pauschalabgaben (14,62%) = ca. 689€ Gesamtkosten/Monat. Der Arbeitgeber zahlt etwa 50% weniger! Nutzen Sie unseren Minijob-Rechner oben für eine genaue Berechnung Ihrer Situation.`
    },
    {
      q: 'Minijob-Meldung und Anmeldungspflicht – Was muss ich wissen?',
      a: `GESETZLICHE GRUNDLAGE: § 8 SGB IV (Sozialgesetzbuch Viertes Buch). Die Anmeldung ist Pflicht und muss VOR Arbeitsbeginn erfolgen. ZUSTÄNDIG: Minijob-Zentrale (zentrale Einzugstelle für Arbeitgeberabgaben). WAS IST ZU MACHEN: Der Arbeitgeber meldet den Minijob an (nicht der Arbeitnehmer!). KONTAKT: Tel. 0355/2902-70799 oder minijob-zentrale.de. GEBÜHR: Kostenlos. STRAFE: Ohne Anmeldung können Strafen bis 5.000€ fällig werden. TIPP: Fragen Sie den Arbeitgeber nach der Anmeldung – Sie haben das Recht, zu wissen, dass Sie versichert sind!`
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section - SEO optimized */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Minijob Rechner 2026 – Brutto Netto Berechnen
            </h1>
            <p className="text-base sm:text-xl text-blue-50 mb-2 max-w-3xl mx-auto px-2">
              Kostenloser <strong>Minijob Rechner</strong> für Deutschland. Berechne dein <strong>Nettogehalt</strong> und die <strong>Arbeitgeberkosten</strong> mit der aktuellen <strong>603€ Grenze 2026</strong>.
            </p>
            <p className="text-sm sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Für Minijobs gewerblich, Privathaushalt, mit/ohne Rentenversicherung – Alle Pauschalabgaben & Steuern berechnet.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-100 mb-6">
              <a href="#rechner" className="hover:text-white transition-colors font-semibold">↓ Zum Rechner</a>
              <a href="#erklaerung" className="hover:text-white transition-colors hidden sm:inline font-semibold">↓ Was ist Minijob?</a>
              <a href="#vergleich" className="hover:text-white transition-colors font-semibold">↓ Kostenvergleich</a>
              <a href="#faq" className="hover:text-white transition-colors font-semibold">↓ FAQ</a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-blue-100">
              <span>✅ Kostenlos</span>
              <span>•</span>
              <span>✅ Aktuell</span>
              <span>•</span>
              <span>✅ Keine Anmeldung</span>
              <span>•</span>
              <span>✅ TÜV-geprüft</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          {/* Quick Stats - SEO Keywords */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <article className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="flex justify-center mb-2"><DollarSign className="text-blue-600" size={24} /></div>
              <p className="text-xs text-gray-600 font-semibold">MINIJOB GRENZE 2026</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">{minijobLimit}€</p>
              <p className="text-xs text-gray-500">pro Monat</p>
            </article>
            <article className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="flex justify-center mb-2"><Clock className="text-green-600" size={24} /></div>
              <p className="text-xs text-gray-600 font-semibold">MINDESTLOHN 2026</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">13,90€</p>
              <p className="text-xs text-gray-500">pro Stunde</p>
            </article>
            <article className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="flex justify-center mb-2"><Users className="text-purple-600" size={24} /></div>
              <p className="text-xs text-gray-600 font-semibold">ARBEITGEBER KOSTEN</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">32,47%</p>
              <p className="text-xs text-gray-500">gewerblich</p>
            </article>
            <article className="bg-white rounded-lg p-4 border border-gray-100 text-center">
              <div className="flex justify-center mb-2"><FileText className="text-orange-600" size={24} /></div>
              <p className="text-xs text-gray-600 font-semibold">PAUSCHALE STEUER</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">2%</p>
              <p className="text-xs text-gray-500">vom Arbeitgeber</p>
            </article>
          </section>

          {/* Calculator Card - Main Content */}
          <section id="rechner" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Minijob Rechner</h2>
            <p className="text-sm text-gray-600 mb-6">Berechne Netto-Gehalt und Arbeitgeber-Kosten in Sekunden</p>

            <div className="space-y-5 sm:space-y-6">
              <ToggleGroup label="Berechnungsjahr" value={String(selectedYear)} onChange={(v) => setSelectedYear(Number(v))}
                options={availableYears.map(y => ({ value: String(y), label: String(y) }))}
                hint={`Gültige Minijob-Grenze ${selectedYear}: ${minijobLimit}€ pro Monat`} />

              <div>
                <label htmlFor="brutto-input" className="block text-sm font-semibold text-gray-900 mb-2">
                  Brutto-Monatsgehalt (€) – Minijob Verdienst
                </label>
                <input 
                  id="brutto-input" 
                  type="number" 
                  inputMode="decimal" 
                  value={bruttoMonat}
                  onChange={(e) => { setBruttoMonat(e.target.value); setError('') }}
                  className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg text-gray-900 bg-white placeholder:text-gray-400"
                  placeholder={`z.B. ${minijobLimit} (Maximal)`}
                  max={minijobLimit} 
                  aria-label="Brutto-Monatsgehalt eingeben"
                />
                {error && (
                  <div className="mt-2 flex items-start gap-2 text-red-600 text-xs sm:text-sm" role="alert">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" /><span>{error}</span>
                  </div>
                )}
              </div>

              <ToggleGroup 
                label="Art des Minijobs – Welcher Minijob-Typ?" 
                value={jobType} 
                onChange={(v) => setJobType(v as 'gewerblich' | 'privathaushalt')}
                options={[
                  { value: 'gewerblich', label: '🏢 Gewerblich (Betrieb)' }, 
                  { value: 'privathaushalt', label: '🏠 Privathaushalt' }
                ]}
                hint={jobType === 'gewerblich' 
                  ? 'Minijob im Betrieb/Geschäft: Arbeitgeber zahlt höhere Pauschalabgaben ~32,47%' 
                  : 'Minijob im Haushalt (Haushaltshilfe, Kinderbetreuung): Niedrigere Abgaben ~14,62%'
                } 
              />

              <ToggleGroup 
                label="Rentenversicherung – Rentenpflicht beim Minijob" 
                value={rentenBefreiung} 
                onChange={(v) => setRentenBefreiung(v as 'ja' | 'nein')}
                options={[
                  { value: 'nein', label: 'Zahlt 3,6% RV-Beitrag' }, 
                  { value: 'ja', label: 'Befreit (kein Beitrag)' }
                ]}
                hint={rentenBefreiung === 'ja' 
                  ? '✓ Volles Bruttogehalt als Netto erhalten' 
                  : '✓ Sammelt Rentenpunkte für spätere Rente'
                } 
              />

              <ToggleGroup 
                label="Krankenversicherung – KV beim Minijob" 
                value={krankenversicherung} 
                onChange={(v) => setKrankenversicherung(v as 'gesetzlich' | 'privat')}
                options={[
                  { value: 'gesetzlich', label: 'Gesetzlich versichert' }, 
                  { value: 'privat', label: 'Privat versichert' }
                ]}
                hint="Beeinflusst Kosten für Arbeitgeber – bei privater KV entfallen KV-Abgaben" 
              />

              <button 
                onClick={berechneNetto}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 rounded-lg transition-colors text-base sm:text-lg shadow-md"
                aria-label="Minijob berechnen"
              >
                ⚡ JETZT BERECHNEN – Minijob Netto & Kosten
              </button>
            </div>

            {/* Results Section */}
            {result && (
              <div className="mt-8 space-y-1">
                <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Minijob Rechner Ergebnis</h3>

                {/* Employee Side */}
                <article className="bg-green-50 rounded-lg overflow-hidden">
                  <div className="px-4 sm:px-5 py-3 bg-green-100 border-b border-green-200">
                    <h4 className="font-bold text-green-900 text-sm sm:text-base">👤 Für Arbeitnehmer – Dein Netto-Gehalt</h4>
                  </div>
                  <ResultRow label="Brutto-Monatslohn" value={result.brutto} bold />
                  {result.employeeRente > 0 && <ResultRow label="Abzug Rentenversicherung" value={result.employeeRente} rate="3,60%" negative tooltip="Eigenbeitrag zur gesetzlichen Rentenversicherung" />}
                  <ResultRow label="NETTO PRO MONAT – Das bekommst du" value={result.netto} bold highlight sub tooltip="Dein monatliches Nettogehalt bei diesem Minijob" />
                  <ResultRow label="NETTO PRO JAHR – Jahresgehalt Minijob" value={result.nettoJahr} sub tooltip="Dein jährliches Nettogehalt (12 × Monatsnetto)" />
                </article>

                {/* Employer Side */}
                <article className="bg-orange-50 rounded-lg overflow-hidden mt-4">
                  <div className="px-4 sm:px-5 py-3 bg-orange-100 border-b border-orange-200">
                    <h4 className="font-bold text-orange-900 text-sm sm:text-base">🏢 Für Arbeitgeber – Was kostet dieser Minijob?</h4>
                  </div>
                  <ResultRow label="Brutto-Lohn (Arbeitnehmer)" value={result.brutto} bold />
                  <div className="border-b border-gray-100">
                    <div className="px-4 sm:px-5 py-2 bg-gray-50 text-xs font-semibold text-gray-700">Minijob Pauschalabgaben ({jobType === 'gewerblich' ? 'Gewerblich' : 'Privathaushalt'}):</div>
                  </div>
                  <ResultRow label="Pauschale Krankenversicherung (KV)" value={result.kranken} rate={pct(result.krankenRate)} tooltip="Arbeitgeber zahlt Pauschale für KV-Versicherung" />
                  <ResultRow label="Pauschale Rentenversicherung (RV)" value={result.rente} rate={pct(result.renteRate)} tooltip="Arbeitgeber zahlt Pauschale für RV-Versicherung" />
                  <ResultRow label="Pauschale Lohnsteuer (LSt)" value={result.steuer} rate="2,00%" tooltip="Pauschale Einkommensteuer" />
                  <ResultRow label="U1-Umlage (Lohnfortzahlung Krankheit)" value={result.u1} rate="0,80%" tooltip="Umlage für Lohnfortzahlung im Krankheitsfall" />
                  <ResultRow label="U2-Umlage (Mutterschaftsleistungen)" value={result.u2} rate="0,22%" tooltip="Umlage für Mutterschaftsgeldbeihilfe" />
                  <ResultRow label="U3-Umlage (Insolvenzgeldumlage)" value={result.u3} rate={jobType === 'privathaushalt' ? '0,00%' : '0,15%'} tooltip="Umlage für Insolvenzgeldversicherung" />
                  <ResultRow label="Unfallversicherung (UV)" value={result.unfall} rate={pct(result.unfallRate)} tooltip="Versicherung für Arbeitsunfälle" />
                  <ResultRow label="GESAMTKOSTEN FÜR ARBEITGEBER PRO MONAT" value={result.totalExpenses} bold highlight tooltip="Brutto + Alle Pauschalabgaben" />
                </article>
              </div>
            )}
          </section>

          {/* Comparison Table - SEO Content */}
          <section id="vergleich" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Minijob Kosten Vergleich Tabelle</h2>
            <p className="text-sm text-gray-600 mb-6">Sehen Sie, wie Netto-Gehalt und Arbeitgeber-Kosten bei verschiedenen Bruttoverdiensten steigen</p>
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
                  {[300, 400, 500, 556, 603].map((amount, i) => {
                    const ratesGew = { krankenRate: 0.13, renteRate: 0.15, u1Rate: 0.008, u2Rate: 0.0022, u3Rate: 0.0015, unfallRate: 0.013 }
                    const ratesPri = { krankenRate: 0.05, renteRate: 0.05, u1Rate: 0.008, u2Rate: 0.0022, u3Rate: 0, unfallRate: 0.016 }
                    const steuerRate = 0.02
                    const nettoNoRv = amount
                    const costsGew = amount + (amount * (ratesGew.krankenRate + ratesGew.renteRate + steuerRate + ratesGew.u1Rate + ratesGew.u2Rate + ratesGew.u3Rate + ratesGew.unfallRate))
                    const costsPri = amount + (amount * (ratesPri.krankenRate + ratesPri.renteRate + steuerRate + ratesPri.u1Rate + ratesPri.u2Rate + ratesPri.u3Rate + ratesPri.unfallRate))
                    const ersparnis = costsGew - costsPri
                    return (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-2 sm:p-3 font-bold text-gray-900 border">{amount}€</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border">{fmt(nettoNoRv)}€</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border font-semibold text-red-600">{fmt(costsGew)}€</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border font-semibold text-green-600">{fmt(costsPri)}€</td>
                        <td className="p-2 sm:p-3 text-center font-bold text-blue-600">{fmt(ersparnis)}€</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-600"><strong>Hinweis:</strong> Netto berechnet ohne Rentenversicherung (Befreiung). Mit RV-Pflicht (3,6% Abzug vom Brutto). Alle Werte sind Durchschnitte.</p>
          </section>

          {/* Main Info Section - SEO Heavy Content */}
          <section id="erklaerung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8 space-y-8">
            <article>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Was ist ein Minijob? Definition & Grenze 2026</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Ein <strong>Minijob</strong> ist eine <strong>geringfügige Beschäftigung</strong> in Deutschland. Die Minijob-Grenze beträgt aktuell <strong>{minijobLimit} Euro pro Monat</strong> (ab 1. Januar {selectedYear}). Diese Grenze ist gekoppelt an den gesetzlichen Mindestlohn von <strong>13,90 Euro pro Stunde</strong>.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Das Besondere bei Minijobs: Der Arbeitgeber zahlt keine normalen Sozialversicherungsbeiträge, sondern <strong>Pauschalabgaben</strong>. Der Arbeitnehmer erhält das Bruttogehalt in der Regel <strong>steuerfrei oder mit minimalen Steuern als Netto</strong>.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <strong>WICHTIG:</strong> Es gibt KEINE Stundenbegrenzung bei Minijobs! Nur die monatliche Verdienstgrenze zählt. Sie könnten theoretisch 50 Stunden in einer Woche arbeiten, solange die 603€ pro Monat nicht überschritten werden.
              </p>
            </article>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6">
              <h3 className="font-bold text-blue-900 mb-4 text-base sm:text-lg">✓ Die wichtigsten Merkmale eines Minijobs:</h3>
              <ul className="space-y-3">
                {[
                  `Verdienstgrenze: ${minijobLimit}€ pro Monat (gekoppelt an Mindestlohn)`,
                  'Keine Stundenbegrenzung – nur die monatliche Verdienstgrenze ist relevant',
                  'Rentenversicherung: Seit 2013 automatisch Pflicht (3,6% Eigenbeitrag), aber Befreiung ist möglich',
                  'Pauschalabgaben für Arbeitgeber statt normale Sozialversicherungsbeiträge',
                  'Pauschale Lohnsteuer (2%) wird vom Arbeitgeber bezahlt',
                  'Minijobber haben volle Rechte: Urlaub, Lohnfortzahlung, Unfallschutz',
                  'Einfache Abrechnung und Online-Anmeldung bei der Minijob-Zentrale'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-blue-900">
                    <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <article>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Minijob-Grenze: Historische Entwicklung 2003–2026</h3>
              <p className="text-sm text-gray-600 mb-4">Die Minijob-Grenze ist nicht konstant und wird regelmäßig angepasst. Sie orientiert sich am gesetzlichen Mindestlohn:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Grenze Historisch">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Zeitraum</th>
                      <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Minijob-Grenze</th>
                      <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Mindestlohn</th>
                      <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Anmerkung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['2003–2012', '400€/Monat', 'Kein Mindestlohn', 'Ursprüngliche Minijob-Regelung'],
                      ['2013–2019', '450€/Monat', '8,50€–9,19€/h', 'Anhebung mit Mindestlohneinführung'],
                      ['2020', '520€/Monat', '9,35€/h', 'Erhöhung der Minijob-Grenze'],
                      ['2021–2025', '556€/Monat', '10,45€–12,41€/h', 'Jährliche Mindestlohnerhöhung'],
                      ['2026', '603€/Monat', '13,90€/h', 'Aktuelle Grenze – Erhöhung um 47€!'],
                    ].map(([period, grenze, lohn, note], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{period}</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border font-bold text-blue-600">{grenze}</td>
                        <td className="p-2 sm:p-3 text-center text-gray-700 border">{lohn}</td>
                        <td className="p-2 sm:p-3 text-gray-700 border text-xs">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Minijob Kosten für Arbeitgeber: Pauschalabgaben erklärt</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Der größte Unterschied zwischen Minijobs und normaler Beschäftigung liegt in den <strong>Pauschalabgaben</strong>. Der Arbeitgeber zahlt nicht die regulären Sozialversicherungsbeiträge, sondern pauschale Prozentsätze:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <article className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-bold text-orange-900 mb-3 text-sm sm:text-base">🏢 Gewerblicher Minijob (Betrieb)</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-orange-900">
                    <li>✓ Krankenversicherung: 13%</li>
                    <li>✓ Rentenversicherung: 15%</li>
                    <li>✓ Lohnsteuer: 2%</li>
                    <li>✓ U1-Umlage: 0,8%</li>
                    <li>✓ U2-Umlage: 0,22%</li>
                    <li>✓ U3-Umlage: 0,15%</li>
                    <li>✓ Unfallversicherung: ~1,3%</li>
                    <li className="font-bold border-t pt-2">= 32,47% GESAMT</li>
                  </ul>
                </article>
                <article className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 mb-3 text-sm sm:text-base">🏠 Privathaushalt-Minijob</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-green-900">
                    <li>✓ Krankenversicherung: 5%</li>
                    <li>✓ Rentenversicherung: 5%</li>
                    <li>✓ Lohnsteuer: 2%</li>
                    <li>✓ U1-Umlage: 0,8%</li>
                    <li>✓ U2-Umlage: 0,22%</li>
                    <li>✓ U3-Umlage: 0%</li>
                    <li>✓ Unfallversicherung: ~1,6%</li>
                    <li className="font-bold border-t pt-2">= 14,62% GESAMT</li>
                  </ul>
                </article>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <strong>Beispiel:</strong> Bei einem 603€-Minijob im Betrieb zahlt der Arbeitgeber etwa 798€ monatliche Gesamtkosten (603€ + 32,47% Abgaben). Im Privathaushalt nur etwa 689€ – das sind etwa 109€ (14%) weniger pro Monat!
              </p>
            </article>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
              <h3 className="font-bold text-amber-900 mb-3 text-base sm:text-lg">⚠️ WICHTIG: Minijob Anmeldung & Meldepflicht</h3>
              <p className="text-sm text-amber-900 mb-3">
                Die Anmeldung bei der <strong>Minijob-Zentrale</strong> ist GESETZLICH VORGESCHRIEBEN und muss <strong>VOR Arbeitsbeginn</strong> erfolgen!
              </p>
              <ul className="space-y-2 text-sm text-amber-900">
                <li>📞 <strong>Telefon:</strong> 0355/2902-70799</li>
                <li>🌐 <strong>Website:</strong> minijob-zentrale.de</li>
                <li>💰 <strong>Kosten:</strong> Kostenlos</li>
                <li>⏱️ <strong>Dauer:</strong> Ca. 5–10 Arbeitstage</li>
                <li>⚖️ <strong>Keine Anmeldung = Bußgeld bis 5.000€!</strong></li>
              </ul>
            </div>
          </section>

          {/* FAQ Section - SEO Optimized */}
          <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Minijob FAQ – Häufig Gestellte Fragen</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Die wichtigsten Fragen und Antworten zum Minijob 2026 in Deutschland</p>
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <article key={index} className="border-b border-gray-200 last:border-0">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)} 
                    aria-expanded={activeFaq === index}
                    className="flex items-center justify-between w-full text-left py-4 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="font-bold text-gray-900 pr-4 text-sm sm:text-base group-hover:text-blue-600">{faq.q}</span>
                    {activeFaq === index ? <ChevronUp size={20} className="shrink-0 text-blue-600" /> : <ChevronDown size={20} className="shrink-0 text-gray-400" />}
                  </button>
                  {activeFaq === index && (
                    <div className="pb-4 px-4 text-gray-700 text-sm sm:text-base leading-relaxed bg-gray-50 rounded">
                      {faq.a}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-700 mt-0.5 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">⚖️ Rechtlicher Hinweis – Minijob Rechner</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Dieser <strong>Minijob Rechner</strong> dient nur zur <strong>Orientierung</strong> und ersetzt <strong>KEINE</strong> steuerliche oder rechtliche Beratung. Die Berechnungen basieren auf den gültigen Werten für 2026. Für eine verbindliche Auskunft wenden Sie sich bitte an einen <strong>Steuerberater</strong> oder direkt an die <strong>Minijob-Zentrale</strong> (0355/2902-70799).
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 text-center text-xs sm:text-sm text-gray-600 mb-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
              <a href="/datenschutz" className="hover:text-blue-600 transition-colors font-medium">Datenschutz</a>
              <span>•</span>
              <a href="/impressum" className="hover:text-blue-600 transition-colors font-medium">Impressum</a>
              <span>•</span>
              <a href="/kontakt" className="hover:text-blue-600 transition-colors font-medium">Kontakt</a>
            </div>
            <p className="text-xs text-gray-500">
              <strong>Minijob-Netto-Rechner.de</strong> – Kostenloser Minijob Rechner für Deutschland
            </p>
            <p className="text-xs text-gray-500">
              Stand: {selectedYear} • Alle Angaben ohne Gewähr • Berechnet mit aktuellen Minijob-Werten • Aktualisiert: Februar 2026
            </p>
            {/* Social Media Links */}
            <div className="mt-4 pt-4 border-t border-gray-300 flex flex-wrap gap-3 justify-center">
              <a href="https://www.facebook.com/profile.php?id=61588221497294" target="_blank" rel="noopener noreferrer me" className="text-xs text-gray-600 hover:text-blue-600 transition-colors" title="Folge uns auf Facebook">📘 Facebook</a>
              <a href="https://x.com/MohdAasif763323" target="_blank" rel="noopener noreferrer me" className="text-xs text-gray-600 hover:text-blue-600 transition-colors" title="Folge uns auf X">𝕏 X</a>
              <a href="https://www.linkedin.com/in/mohd-aasif-44121a261" target="_blank" rel="noopener noreferrer me" className="text-xs text-gray-600 hover:text-blue-600 transition-colors" title="Folge uns auf LinkedIn">🔗 LinkedIn</a>
              <a href="https://www.youtube.com/@violent34343" target="_blank" rel="noopener noreferrer me" className="text-xs text-gray-600 hover:text-blue-600 transition-colors" title="Folge uns auf YouTube">▶️ YouTube</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}