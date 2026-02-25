'use client'

import React, { useState, memo, useMemo } from 'react'
import { ChevronDown, ChevronUp, Info, AlertCircle, HelpCircle, Share2, Copy, Check, Zap, TrendingUp, Target, Award, BookOpen } from 'lucide-react'

export default function MiniJobRechner() {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [bruttoMonat, setBruttoMonat] = useState('')
  const [jobType, setJobType] = useState<'gewerblich' | 'privathaushalt'>('gewerblich')
  const [rentenBefreiung, setRentenBefreiung] = useState<'ja' | 'nein'>('nein')
  const [krankenversicherung, setKrankenversicherung] = useState<'gesetzlich' | 'privat'>('gesetzlich')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [shareMenuOpen, setShareMenuOpen] = useState(false)

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

  // Social sharing functions
  const shareResult = (platform: 'twitter' | 'facebook' | 'linkedin' | 'whatsapp') => {
    const text = `Minijob Rechner 2026: Mein Nettolohn beträgt ${fmt(result?.netto || 0)} € monatlich! 💰 Berechne deinen Nettolohn kostenlos:`
    const url = 'https://www.minijob-netto-rechner.de'
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    }
    
    window.open(urls[platform], '_blank', 'width=600,height=400')
  }

  const copyToClipboard = () => {
    const text = `Minijob Netto-Rechner: ${fmt(result?.netto || 0)} € netto bei ${fmt(result?.brutto || 0)} € brutto (2026). Teste deinen Nettolohn: https://www.minijob-netto-rechner.de`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const ResultRow = memo(({ label, value, rate, negative, bold, highlight, sub, tooltip }: {
    label: string; value: number; rate?: string; negative?: boolean; bold?: boolean; highlight?: boolean; sub?: boolean; tooltip?: string
  }) => (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 px-4 sm:px-5 ${highlight ? 'bg-gradient-to-r from-blue-50 to-transparent border-t-2 border-blue-200' : sub ? 'bg-blue-50' : 'border-b border-gray-100 last:border-0'}`}>
      <div className="flex items-center gap-2 min-w-0 flex-wrap">
        {rate && <span className="text-xs font-mono text-gray-400 sm:w-[3.5rem] shrink-0 sm:text-right">{rate}</span>}
        <span className={`text-sm ${bold ? 'font-bold text-gray-900' : sub ? 'font-semibold text-blue-800' : 'text-gray-700'}`}>{label}</span>
        {tooltip && (
          <div className="relative group cursor-help">
            <HelpCircle size={13} className="text-blue-500 flex-shrink-0" />
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
    label: string; value: string; onChange: (v: string) => any; options: { value: string; label: string }[]; hint?: string
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-900">{label}</label>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:grid-cols-auto">
        {options.map(o => (
          <button key={o.value} onClick={() => onChange(o.value)}
            className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg font-medium text-sm transition-all w-full sm:w-auto ${value === o.value
              ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
            {o.label}
          </button>
        ))}
      </div>
      {hint && <p className="mt-1 sm:mt-1.5 text-xs text-gray-500">{hint}</p>}
    </div>
  ))

  // Enhanced FAQs with more keywords and content
  const faqs = [
    {
      q: 'Was ist ein Minijob? Aktuelle Grenze 2026',
      a: `Ein Minijob ist eine geringfügige Beschäftigung mit einem monatlichen Verdienst bis ${minijobLimit} Euro (Stand ${selectedYear}). Der Arbeitgeber zahlt Pauschalabgaben statt regulärer Sozialversicherungsbeiträge. Die Minijob-Grenze ist seit 1. Januar 2026 auf 603 € gestiegen und ist gekoppelt an den gesetzlichen Mindestlohn. Minijobs sind ideal für Schüler, Studenten, Rentner und alle, die flexibel arbeiten möchten.`
    },
    {
      q: 'Minijob Netto berechnen: Wie viel verdient man wirklich?',
      a: `Das Netto beim Minijob hängt davon ab, ob Sie in die Rentenversicherung einzahlen. Ohne Rentenversicherung: 603 € Brutto = 603 € Netto (steuer- und sozialversicherungsfrei). Mit Rentenversicherung (3,6% Beitrag): 603 € Brutto = 581,27 € Netto. Nutzen Sie unseren kostenlosen Minijob Rechner 2026 für genaue Berechnungen!`
    },
    {
      q: 'Was ist die Rentenversicherungspflicht beim Minijob?',
      a: 'Seit 2013 sind Minijobber automatisch rentenversicherungspflichtig und zahlen einen Eigenbeitrag von 3,6% ihres Bruttogehalts. Sie können sich jedoch von dieser Pflicht befreien lassen und erhalten dann das volle Bruttogehalt als Netto. Mit Rentenversicherung sammeln Sie wichtige Rentenpunkte für Ihre spätere Altersrente - eine langfristige Geldanlage!'
    },
    {
      q: 'Muss ich einen Minijob versteuern oder anmelden?',
      a: 'Nein, der Arbeitgeber trägt die pauschalierte Lohnsteuer von 2%. Als Minijobber müssen Sie in der Regel keine Steuererklärung abgeben. WICHTIG: Der Arbeitgeber MUSS den Minijob bei der Minijob-Zentrale anmelden (Meldung erforderlich), sonst drohen Bußgelder!'
    },
    {
      q: 'Minijob und BAföG - Was müssen Studenten beachten?',
      a: 'Studenten können unbegrenzte Minijobs haben, solange die 603 € Grenze pro Job nicht überschritten wird. Wichtig: Verdienste aus Minijobs werden beim BAföG angerechnet! Es gibt einen Freibetrag von 520 € pro Monat. Alles darüber reduziert die BAföG-Zahlung. Beachten Sie: Als Student können Sie auch als Werkstudent arbeiten (nur 2% KV, 11% RV).'
    },
    {
      q: 'Was ist der Unterschied zwischen Minijob und Nebenjob?',
      a: 'Minijob (bis 603 €): Pauschalbesteuerung, niedrige Abgabenlast für Arbeitgeber, weniger Sozialversicherung. Nebenjob (über 603 €): Steuerklasse 6, reguläre Sozialversicherungsbeiträge, höhere Lohnsteuer. Ein Nebenjob ist oft wirtschaftlich ungünstiger. Berechnen Sie den Unterschied mit unserem Rechner!'
    },
    {
      q: 'Minijob Arbeitgeber Kosten - Was muss der Chef zahlen?',
      a: `Bei einem Minijob von 603 € liegt die Abgabenlast für Gewerbetreibende bei ca. 32,47% (insgesamt ~798 € Kosten). Bei Privathaushalt-Jobs ist es günstiger: nur ca. 14,62% (~690 € Kosten). Der Arbeitgeber zahlt: Krankenversicherung, Rentenversicherung, Pauschalsteuer (2%), Unfallversicherung und verschiedene Umlagen (U1, U2, U3).`
    },
    {
      q: 'Gewerblich vs. Privathaushalt - Welche Minijob Art ist besser?',
      a: 'Gewerblich: In Geschäften, Cafés, Läden - höhere Arbeitgeberkosten (~32,47%). Privathaushalt: Putzen, Kinderbetreuung, Pflege - niedrigere Kosten (~14,62%). Für Arbeitnehmer: Beide Varianten sind gleich! Der Unterschied liegt bei den Arbeitgeberkosten. Privathaushalt-Jobs sind für Unternehmen deutlich günstiger.'
    },
    {
      q: 'Minijob 2026 - Was sind die neuen Regeln?',
      a: 'Die Grenze ist von 556 € (2025) auf 603 € (2026) gestiegen, gekoppelt an den Mindestlohn von 13,90 €/h. Das bedeutet: Max. ~43 Stunden pro Monat oder 10 Stunden pro Woche. Die Rentenversicherungspflicht (3,6%) bleibt. Pauschalsteuer bleibt bei 2%. Eine gute Nachricht für Minijobber: Höheres Einkommen, gleiche Steuerlast!'
    },
    {
      q: 'Kann man mehrere Minijobs gleichzeitig haben?',
      a: 'Ja! Sie können mehrere Minijobs haben, solange das GESAMTEINKOMMEN aller Minijobs die 603 € Grenze nicht überschreitet. Neben einem regulären Vollzeitjob ist genau ein Minijob erlaubt. Tipp: Nutzen Sie unseren Minijob Rechner, um verschiedene Szenarien durchzurechnen!'
    },
    {
      q: 'Minijob Versicherung - Was ist abgedeckt?',
      a: 'Alle Minijobber sind automatisch unfallversichert - Schutz bei Arbeits- und Wegeunfällen! Die Krankenversicherung wird von Arbeitgebern beigetragen (13% bei Gewerblich). Bei Rentenversicherung (3,6%) sammeln Sie Rentenpunkte. Arbeitslosenversicherung ist optional - Sie können dazuwählen.'
    },
    {
      q: 'Wie lange darf ich im Minijob arbeiten?',
      a: `Es gibt KEINE Stundenbegrenzung für Minijobs! Sie könnten theoretisch 10 Stunden pro Tag arbeiten - solange Sie die 603 € Monatsgrenze nicht überschreiten. Das ist anders als bei Werkstudenten (max. 20h/Woche). Bei 13,90 €/h Mindestlohn entspricht 603 € etwa 43 Stunden pro Monat.`
    },
    {
      q: 'Minijob Krankenversicherung - Bin ich versichert?',
      a: `Ja! Der Minijob-Arbeitgeber zahlt pauschal 13% für Krankenversicherung (bei Gewerblich, 5% bei Privathaushalt). Sie sind damit versichert, ohne selbst Beiträge zu zahlen. Ausnahme: Private Krankenversicherung (optional). Wichtig: Studenten bleiben in ihrer günstigen studentischen Versicherung!`
    },
    {
      q: 'Was passiert, wenn ich die 603 € Grenze überschreite?',
      a: `Überschreiten Sie die Minijob-Grenze dauerhaft, wird das Arbeitsverhältnis automatisch sozialversicherungspflichtig. Das bedeutet: Reguläre Beiträge zu Kranken-, Renten-, Pflege- und Arbeitslosenversicherung werden fällig. Ihr Netto sinkt deutlich! Daher: Immer die Grenze beachten!`
    },
    {
      q: 'Minijob Urlaubsanspruch - Habe ich Recht auf Urlaub?',
      a: 'Ja! Minijobber haben den gleichen gesetzlichen Urlaubsanspruch wie reguläre Angestellte - mindestens 20 Tage pro Jahr (anteilig). Der Arbeitgeber MUSS bezahlten Urlaub gewähren. Bei Krankheit: Die erste Woche wird bezahlt, danach Krankengeld. Das sind wichtige Arbeitnehmerrechte!'
    },
    {
      q: 'Minijob Rentner - Besonderheiten für Senioren?',
      a: 'Rentner können problemlos Minijobs ausüben! Die Rentenversicherung wird nicht aktiviert - Sie zahlen nur 3,6%, sammeln aber keine neuen Rentenpunkte. Wichtig: Die Hinzuverdienstgrenze bei Rente wegen voller Erwerbsminderung beachten! Lassen Sie sich vorher informieren. Ein Minijob ist ideal für flexible Rentner!'
    },
    {
      q: 'Minijob Rechner kostenlos - Wie nutze ich diesen Tool?',
      a: `Unser Minijob Rechner 2026 ist völlig kostenlos! Geben Sie ein: (1) Bruttogehalt, (2) Jobtyp (gewerblich/Privathaushalt), (3) Rentenversicherung (ja/nein). Der Rechner berechnet sofort: Nettogehalt, Jahresgehalt, alle Versicherungsbeiträge und Arbeitgeberkosten. Perfekt zur Orientierung vor Vertragsabschluss!`
    },
  ]

  // SEO Content Sections
  const SEOSections = [
    {
      id: 'minijob-rechner-erklaerung',
      title: 'Minijob Rechner 2026 - Kostenlos & Aktuell',
      subtitle: 'Berechne dein Brutto zu Netto Gehalt im Minijob',
      content: `Der Minijob Rechner ist das perfekte Werkzeug für Arbeitnehmer und Arbeitgeber. Mit wenigen Klicks sehen Sie, wie viel Netto Sie bei einem Minijob tatsächlich verdienen - oder wie viel ein Minijob den Arbeitgeber kostet. Die aktualisierte Version 2026 berücksichtigt die neue 603 € Grenze.`,
    },
    {
      id: 'minijob-grenze-2026',
      title: 'Minijob Grenze 2026 - Die wichtigsten Fakten',
      subtitle: '603 Euro Grenze erklärt',
      content: `Die Minijob-Grenze 2026 beträgt 603 Euro pro Monat (vorher 556 €). Diese Grenze ist gesetzlich gekoppelt an den Mindestlohn und steigt regelmäßig an. Mit einem Stundensatz von 13,90 € entspricht dies etwa 43 Arbeitsstunden pro Monat. Wichtig: Es gibt keine Obergrenze für Arbeitsstunden - nur für das Monatsgehalt!`,
    },
    {
      id: 'minijob-versicherung-abgaben',
      title: 'Minijob Versicherung & Abgaben - Was ist abgedeckt?',
      subtitle: 'Sozialversicherung beim Minijob',
      content: `Bei Minijobs zahlt der Arbeitgeber Pauschalabgaben statt regulärer Sozialversicherungsbeiträge. Dies umfasst: Krankenversicherung (13% gewerblich, 5% Privathaushalt), Rentenversicherung (15%), Unfallversicherung, Pauschalsteuer (2%) und verschiedene Umlagen. Der Minijobber ist damit grundversichert und braucht selbst nichts zu zahlen!`,
    },
    {
      id: 'arbeitgeber-kosten-minijob',
      title: 'Was kostet eine Minijob für Arbeitgeber?',
      subtitle: 'Gesamtbudget für 603 € Brutto',
      content: `Bei einem Minijob von 603 € fallen für Arbeitgeber folgende Kosten an: Gewerbelich (~32,47% Abgaben) = ca. 798 € Gesamtkosten pro Monat. Privathaushalt (~14,62%) = ca. 690 € pro Monat. Das bedeutet: Privathaushalt-Minijobs sind für Arbeitgeber deutlich günstiger - ein großer Vorteil! Nutzen Sie den Rechner, um unterschiedliche Szenarien zu vergleichen.`,
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section with Rich Content */}
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-semibold bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">Aktuell 2026</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 leading-tight">
            Minijob Rechner 2026
          </h1>
          
          <p className="text-base sm:text-lg text-blue-100 mb-6 max-w-2xl leading-relaxed">
            Der kostenlose und aktuellste Minijob Rechner für Deutschland. Berechne dein Netto-Gehalt, die 603€ Grenze und Arbeitgeber-Kosten in wenigen Sekunden.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
            <div className="bg-blue-500 bg-opacity-20 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-blue-400 border-opacity-30">
              <div className="text-2xl sm:text-3xl font-bold">603€</div>
              <div className="text-xs sm:text-sm text-blue-100 mt-1">Grenze 2026</div>
            </div>
            <div className="bg-blue-500 bg-opacity-20 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-blue-400 border-opacity-30">
              <div className="text-2xl sm:text-3xl font-bold">2%</div>
              <div className="text-xs sm:text-sm text-blue-100 mt-1">Pauschal-Steuer</div>
            </div>
            <div className="bg-blue-500 bg-opacity-20 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-blue-400 border-opacity-30">
              <div className="text-2xl sm:text-3xl font-bold">13€</div>
              <div className="text-xs sm:text-sm text-blue-100 mt-1">Mindestlohn/h</div>
            </div>
            <div className="bg-blue-500 bg-opacity-20 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-blue-400 border-opacity-30">
              <div className="text-2xl sm:text-3xl font-bold">100%</div>
              <div className="text-xs sm:text-sm text-blue-100 mt-1">Kostenlos</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Calculator Section */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Berechne deinen Nettolohn</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">Wähle deine Parameter und erhalte sofort dein exaktes Netto-Gehalt für 2026:</p>

          <div className="space-y-6">
            {/* Year Selector */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">Steuerjahr</label>
              <div className="flex gap-2">
                {availableYears.map(year => (
                  <button key={year} onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${selectedYear === year
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}>
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Brutto Input */}
            <div className="space-y-2">
              <label htmlFor="brutto" className="block text-sm font-semibold text-gray-900">
                Bruttogehalt pro Monat (€) - Max {minijobLimit}€
              </label>
              <input id="brutto"
                type="number"
                value={bruttoMonat}
                onChange={(e) => setBruttoMonat(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && berechneNetto()}
                placeholder="z.B. 550"
                className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-base sm:text-lg font-semibold placeholder-gray-400 transition-colors"
              />
              <p className="text-xs text-gray-500">💡 Die 603€ Grenze (2026) entspricht ca. 43 Std./Monat bei 13,90€/h Mindestlohn</p>
            </div>

            {/* Job Type */}
            <ToggleGroup
              label="Minijob-Typ"
              value={jobType}
              onChange={setJobType}
              options={[
                { value: 'gewerblich', label: '🏢 Gewerblich' },
                { value: 'privathaushalt', label: '🏠 Privathaushalt' }
              ]}
              hint="Gewerblich = Läden, Cafés, Büros | Privathaushalt = Putzfrau, Babysitter, Pflege"
            />

            {/* Pension */}
            <ToggleGroup
              label="Rentenversicherung"
              value={rentenBefreiung}
              onChange={setRentenBefreiung}
              options={[
                { value: 'nein', label: '❌ Befreit (höheres Netto)' },
                { value: 'ja', label: '✅ Versichert (Rentenpunkte)' }
              ]}
              hint="Mit Befreiung: Volles Gehalt. Mit Versicherung: 3,6% weniger, aber Rentenpunkte sammeln"
            />

            {/* Health Insurance */}
            <ToggleGroup
              label="Krankenversicherung"
              value={krankenversicherung}
              onChange={setKrankenversicherung}
              options={[
                { value: 'gesetzlich', label: '🏥 Gesetzlich' },
                { value: 'privat', label: '🔒 Privat (optional)' }
              ]}
              hint="Der Arbeitgeber trägt die Beiträge. Bei privat zahlen Sie eventuell selbst."
            />

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex gap-3">
                <AlertCircle className="text-red-500 flex-shrink-0 w-5 h-5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Calculate Button */}
            <button onClick={berechneNetto}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg">
              ⚡ Netto berechnen
            </button>
          </div>

          {/* Results Section */}
          {result && (
            <section className="mt-8 border-t-2 border-gray-200 pt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📊 Deine Berechnung</h3>

              {/* Employee Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-green-600" />
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">Für den Arbeitnehmer</h4>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <ResultRow label="Bruttogehalt (monatlich)" value={result.brutto} bold highlight />
                  {result.employeeRente > 0 && <ResultRow label="Rentenversicherung (AN-Anteil)" value={result.employeeRente} rate="3,60%" negative />}
                  <ResultRow label="Nettogehalt (monatlich)" value={result.netto} bold highlight />
                  <ResultRow label="Nettogehalt (jährlich)" value={result.nettoJahr} bold />
                </div>
              </div>

              {/* Share & Copy Section */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-lg border border-blue-200 mb-8">
                <p className="text-sm font-semibold text-gray-900 mb-3">Teile dein Ergebnis:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <button onClick={() => shareResult('twitter')} className="flex items-center gap-2 px-3 py-2 bg-blue-400 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">
                    <Share2 size={14} /> Twitter
                  </button>
                  <button onClick={() => shareResult('facebook')} className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <Share2 size={14} /> Facebook
                  </button>
                  <button onClick={() => shareResult('linkedin')} className="flex items-center gap-2 px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors">
                    <Share2 size={14} /> LinkedIn
                  </button>
                  <button onClick={() => shareResult('whatsapp')} className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors">
                    <Share2 size={14} /> WhatsApp
                  </button>
                  <button onClick={copyToClipboard} className="flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors">
                    {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Kopiert!' : 'Kopieren'}
                  </button>
                </div>
              </div>

              {/* Employer Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-orange-600" />
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">Für den Arbeitgeber (Kosten)</h4>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <ResultRow label="Bruttogehalt (Arbeitnehmer)" value={result.brutto} bold highlight />
                  <ResultRow label={`Krankenversicherung (${pct(result.krankenRate)})`} value={result.kranken} rate={pct(result.krankenRate)} tooltip="Arbeitgeberanteil KV" />
                  <ResultRow label={`Rentenversicherung (${pct(result.renteRate)})`} value={result.rente} rate={pct(result.renteRate)} tooltip="Arbeitgeberanteil RV" />
                  <ResultRow label="Pauschalsteuer" value={result.steuer} rate="2,00%" tooltip="Pauschale Lohnsteuer" />
                  <ResultRow label="U1-Umlage" value={result.u1} rate="0,80%" tooltip="Lohnfortzahlung im Krankheitsfall" />
                  <ResultRow label="U2-Umlage" value={result.u2} rate="0,22%" tooltip="Mutterschaftsleistungen" />
                  <ResultRow label="U3-Umlage" value={result.u3} rate={jobType === 'privathaushalt' ? '0,00%' : '0,15%'} tooltip="Insolvenzgeldumlage" />
                  <ResultRow label={`Unfallversicherung (${pct(result.unfallRate)})`} value={result.unfall} rate={pct(result.unfallRate)} tooltip="Je nach Branche variabel" />
                  <ResultRow label="Gesamtkosten für Arbeitgeber" value={result.totalExpenses} bold highlight />
                </div>
                <p className="text-xs text-gray-600 mt-3">Die Gesamtkosten setzen sich aus dem Bruttogehalt plus den Pauschalabgaben zusammen.</p>
              </div>
            </section>
          )}
        </section>

        {/* SEO Content Sections */}
        {SEOSections.map((section) => (
          <section key={section.id} id={section.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-6 sm:mb-8">
            <div className="flex items-start gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{section.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{section.subtitle}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{section.content}</p>
          </section>
        ))}

        {/* Information Section */}
        <section className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-6 sm:mb-8 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">💼 Minijob Merkmale & Vorteile</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Ein <strong>Minijob</strong> ist eine geringfügige Beschäftigung in Deutschland mit einer monatlichen Verdienstgrenze. Seit 1. Januar 2026 liegt diese Grenze bei <strong>603 Euro pro Monat</strong>. Minijobs sind beliebt bei Studierenden, Rentnern und all jenen, die flexibel arbeiten möchten.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
            <h3 className="font-bold text-blue-900 mb-4 text-sm sm:text-base flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Die wichtigsten Merkmale:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                '✓ Verdienstgrenze: 603 € pro Monat (2026)',
                '✓ Pauschal-Besteuerung: Nur 2% Lohnsteuer',
                '✓ Niedrige Arbeitgeberkosten (~32% gewerblich)',
                '✓ Rentenversicherung: Optional mit Opt-out',
                '✓ Unfallversicherung: Automatisch abgedeckt',
                '✓ Keine Stunden-Obergrenze (nur Gelimit)',
                '✓ Ideal für Studenten, Rentner, Nebenjob',
                '✓ Urlaub & Krankheit: Gesetzlich geschützt'
              ].map(item => (
                <div key={item} className="flex gap-2 text-xs sm:text-sm text-blue-900">
                  <span className="flex-shrink-0">{item.substring(0, 1)}</span>
                  <span>{item.substring(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border-r border-gray-200">Kriterium</th>
                  <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border-r border-gray-200">Minijob</th>
                  <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border-r border-gray-200">Nebenjob</th>
                  <th className="p-2 sm:p-3 text-center font-bold text-gray-900">Werkstudent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Verdienstgrenze', minijobLimit + ' € / Mo.', 'Unbegrenzt', 'Unbegrenzt'],
                  ['Abgabenlast (AG)', '~32,47% (gew.)', '~21% (variabel)', '2% (Pauschal)'],
                  ['Pauschal-Steuer', '2% (AG zahlt)', 'Steuerklasse 6', 'Nach Lohnklasse'],
                  ['Max. Wochenstunden', 'Unbegrenzt', 'Unbegrenzt', '20 Std. (Semester)'],
                  ['Rentenversicherung', 'Optional (3,6%)', 'Regulär (18,6%)', 'Begrenzt'],
                  ['Typisch für', 'Aushilfen, Rentner', 'Zweiter Job', 'Studierende'],
                ].map(([label, a, b, c], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 sm:p-3 font-bold text-gray-800 border-b border-gray-100 border-r">{label}</td>
                    <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100 border-r">{a}</td>
                    <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100 border-r">{b}</td>
                    <td className="p-2 sm:p-3 text-center text-gray-700 border-b border-gray-100">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-6">⚖️ Rechte & Pflichten von Minijobb</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['✅ Urlaubsanspruch', 'Anspruch auf bezahlten Urlaub – anteilig.'],
                ['✅ Entgeltfortzahlung', 'Arbeitgeber zahlt Gehalt bei Krankheit bis 6 Wochen.'],
                ['✅ Mindestlohn', 'Gesetzlicher Mindestlohn 13,90 €/h (2026).'],
                ['✅ Unfallversicherung', 'Automatischer Schutz bei Arbeits- und Wegeunfällen.'],
                ['✅ Mutterschutz', 'Minijobberinnen sind durch Mutterschutz geschützt.'],
                ['✅ Arbeitsvertrag', 'Arbeitgeber muss Arbeitsbedingungen schriftlich festhalten.'],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-3 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-100">
                  <span className="text-green-600 font-bold flex-shrink-0">{title.substring(0, 2)}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm">{title.substring(3)}</p>
                    <p className="text-xs text-gray-600 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>⚠️ Wichtig:</strong> Die Anmeldung eines Minijobs muss <strong>vor Beginn der Beschäftigung</strong> erfolgen. Rückwirkende Anmeldungen sind nicht möglich. Arbeitgeber müssen den Job bei der <strong>Minijob-Zentrale</strong> anmelden: <strong>Telefon: 0355 / 2902-70799</strong> oder <strong>minijob-zentrale.de</strong>
            </p>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">🤔 Häufig gestellte Fragen (FAQs)</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">Antworten auf die wichtigsten Fragen rund um Minijob, Nettolohn und Arbeitgeberkosten 2026:</p>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} 
                  aria-expanded={activeFaq === index}
                  className="flex items-center justify-between w-full text-left py-4 px-4 sm:px-5 hover:bg-blue-50 transition-colors group">
                  <span className="font-semibold text-gray-900 pr-4 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">{faq.q}</span>
                  {activeFaq === index ? <ChevronUp size={16} className="shrink-0 text-blue-600" /> : <ChevronDown size={16} className="shrink-0 text-gray-400" />}
                </button>
                {activeFaq === index && (
                  <div className="px-4 sm:px-5 py-4 sm:py-5 bg-blue-50 border-t border-blue-200">
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Info Box */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-yellow-700 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">📋 Rechtlicher Hinweis</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Dieser Minijob Rechner dient nur zur Orientierung und ersetzt keine steuerliche, rechtliche oder sozialversicherungsrechtliche Beratung. Die berechneten Werte können abweichen. Für eine verbindliche Auskunft wenden Sie sich bitte an einen Steuerberater oder die Minijob-Zentrale.
              </p>
            </div>
          </div>
        </div>

        {/* Footer with More Links */}
        <footer className="border-t border-gray-200 pt-8 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-sm">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Tools</h4>
              <ul className="space-y-1 text-gray-700">
                <li><a href="#minijob-rechner-erklaerung" className="hover:text-blue-600 transition-colors">Minijob Rechner</a></li>
                <li><a href="#minijob-grenze-2026" className="hover:text-blue-600 transition-colors">Grenze 2026</a></li>
                <li><a href="#minijob-versicherung-abgaben" className="hover:text-blue-600 transition-colors">Versicherung</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Information</h4>
              <ul className="space-y-1 text-gray-700">
                <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQs</a></li>
                <li><a href="/blog/minijob-guide" className="hover:text-blue-600 transition-colors">Minijob Guide</a></li>
                <li><a href="/blog/arbeitgeber" className="hover:text-blue-600 transition-colors">Für Arbeitgeber</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Rechtliches</h4>
              <ul className="space-y-1 text-gray-700">
                <li><a href="/datenschutz" className="hover:text-blue-600 transition-colors">Datenschutz</a></li>
                <li><a href="/impressum" className="hover:text-blue-600 transition-colors">Impressum</a></li>
                <li><a href="/kontakt" className="hover:text-blue-600 transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500">
            <span>Stand: Januar {currentYear}</span>
            <span>•</span>
            <span>Alle Angaben ohne Gewähr</span>
            <span>•</span>
            <span>Aktualisiert: 2026</span>
          </div>
        </footer>
      </main>
    </div>
  )
}