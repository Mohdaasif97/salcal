'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Info, AlertCircle } from 'lucide-react'

export default function MiniJobRechner() {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [bruttoMonat, setBruttoMonat] = useState('')

  interface Result {
    brutto: number
    netto: number
    nettoJahr: number
  }

  const [result, setResult] = useState<Result | null>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [error, setError] = useState('')

  // Year-specific limits
  const getMinijobLimit = (year: number) => {
    const limits: { [key: number]: number } = {
      2025: 556,
      2026: 603,
    }
    return limits[year] || 603
  }

  const minijobLimit = getMinijobLimit(selectedYear)
  const availableYears = [2025, 2026]

  React.useEffect(() => {
    setError('')
  }, [selectedYear])

  const berechneNetto = () => {
    
    const brutto = parseFloat(bruttoMonat)
    if (isNaN(brutto) || brutto <= 0) {
      setError('Bitte geben Sie ein gültiges Bruttogehalt ein.')
      setResult(null)
      return
    }

    if (brutto > minijobLimit) {
      setError(`Ein Minijob darf ${minijobLimit} € pro Monat nicht überschreiten (Stand ${selectedYear}).`)
      setResult(null)
      return
    }

    setError('')

    // Minijob: Employee receives full gross as net
    // Employer pays flat-rate contributions (~30%)
    const netto = brutto

    setResult({
      brutto,
      netto,
      nettoJahr: netto * 12
    })
  }

  const faqs = [
    {
      q: 'Was ist ein Minijob?',
      a: `Ein Minijob ist eine geringfügige Beschäftigung mit einem monatlichen Verdienst bis ${minijobLimit} Euro (Stand ${selectedYear}). Der Arbeitgeber zahlt Pauschalabgaben, der Arbeitnehmer erhält das Bruttogehalt in der Regel als Netto.`
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
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Minijob Rechner 2026 | Netto berechnen
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              Berechne in Sekunden, wie viel Netto dir bei einem Minijob bleibt. Kostenlos & Aktuell.
            </p>

            <div className="flex justify-center gap-6 text-sm text-blue-100">
              <a href="#rechner" className="hover:text-white transition-colors">↓ Rechner</a>
              <a href="#erklaerung" className="hover:text-white transition-colors">↓ Erklärung</a>
              <a href="#faq" className="hover:text-white transition-colors">↓ FAQ</a>
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section id="rechner" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-6">
              {/* Year Selector */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Berechnungsjahr
                </label>
                <div className="flex gap-3">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                        selectedYear === year
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  Minijob-Grenze {selectedYear}: {minijobLimit} € pro Monat
                </p>
              </div>

              <div>
                <label htmlFor="brutto-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Brutto-Monatsgehalt (€)
                </label>
                <input
                  id="brutto-input"
                  type="number"
                  value={bruttoMonat}
                  onChange={(e) => {
                    setBruttoMonat(e.target.value)
                    setError('')
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg text-gray-900 bg-white placeholder:text-gray-400"
                  placeholder={`z.B. ${Math.floor(minijobLimit * 0.9)}`}
                />
                {error && (
                  <div className="mt-2 flex items-start gap-2 text-red-600 text-sm" role="alert">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-green-700 mt-0.5 shrink-0" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium text-gray-900 mb-1">Gut zu wissen:</p>
                    <p>
                      Bei einem Minijob zahlt der Arbeitgeber die Pauschalabgaben. 
                      <strong> Sie erhalten Ihr Bruttogehalt vollständig als Netto!</strong>
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={berechneNetto}
                aria-label="Netto berechnen"
                className="w-full bg-gradient-to-br from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Netto berechnen
              </button>
            </div>

            {result && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-8 shadow-inner">

                  <div className="mb-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">Ihr Nettogehalt</p>
                    <p className="text-4xl font-bold text-green-700">
                      {result.netto.toFixed(2).replace('.', ',')} €
                    </p>
                    <p className="text-sm text-gray-600 mt-1">pro Monat</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-green-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Bruttogehalt:</span>
                      <span className="font-semibold text-gray-900">
                        {result.brutto.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Abzüge:</span>
                      <span className="font-semibold text-green-700">
                        0,00 €
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-green-300">
                      <span className="font-medium text-gray-900">Nettogehalt pro Monat:</span>
                      <span className="text-xl font-bold text-green-700">
                        {result.netto.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>

                    <div className="flex justify-between items-center bg-white bg-opacity-60 rounded-lg p-3 mt-4">
                      <span className="font-medium text-gray-900">Nettogehalt pro Jahr:</span>
                      <span className="text-xl font-bold text-green-700">
                        {result.nettoJahr.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-green-200 text-xs text-gray-600">
                    <p>
                      💡 Der Arbeitgeber zahlt zusätzlich ca. 30% Pauschalabgaben an das Finanzamt und die Sozialversicherungen.
                      Diese Kosten trägt ausschließlich der Arbeitgeber.
                    </p>
                  </div>

                </div>
              </div>
            )}
          </section>

          {/* SEO Content Section - PRESERVED EXACTLY */}
          <section className="mt-12 space-y-6 text-gray-800" id="erklaerung">
            <h2>Der Minijob in Deutschland</h2>
            <p>
              Ein Minijob ist eine geringfügige Beschäftigung in Deutschland, bei der das monatliche Einkommen
              eine festgelegte Grenze nicht überschreitet. Seit 2024 ist diese Grenze dynamisch an den
              gesetzlichen Mindestlohn gekoppelt und liegt im Jahr 2025 bei <strong>556 Euro pro Monat</strong> und 
              im Jahr 2026 bei <strong>603 Euro pro Monat</strong>.
              Minijobs sind besonders beliebt bei Studierenden, Rentnern und Personen mit einem Nebenverdienst.
            </p>

            <h2>Funktionsweise des Minijob & Nebenjob Netto-Rechners</h2>
            <p>
              Mit unserem kostenlosen Minijob & Nebenjob Netto-Rechner kannst du schnell und einfach ermitteln,
              wie viel Nettogehalt dir tatsächlich ausgezahlt wird. Nach Eingabe des Bruttogehalts berücksichtigt
              der Rechner die aktuellen gesetzlichen Regelungen für Minijobs, Nebenjobs und Werkstudenten
              im Jahr 2025.
            </p>

            <h2>Abgaben und Sozialversicherung bei Minijobs</h2>
            <p>
              In den meisten Fällen ist ein Minijob für Arbeitnehmer nahezu steuerfrei. Die pauschalen Abgaben
              übernimmt in der Regel der Arbeitgeber. Dazu gehören Beiträge zur Rentenversicherung sowie eine
              pauschale Steuer. Arbeitnehmer können sich auf Wunsch von der Rentenversicherungspflicht befreien,
              was das monatliche Nettogehalt leicht erhöht.
            </p>

            <h2>Unterschiede zwischen Minijob, Nebenjob und Werkstudent</h2>
            <p>
              Ein Minijob unterscheidet sich deutlich von einem klassischen Nebenjob oder einer
              Werkstudententätigkeit. Während beim Minijob feste Einkommensgrenzen gelten, unterliegen Nebenjobs
              häufig der regulären Steuer- und Sozialversicherungspflicht. Werkstudenten zahlen reduzierte
              Sozialabgaben, solange sie während des Semesters nicht mehr als 20 Stunden pro Woche arbeiten.
            </p>

            <h2>Warum ein Netto-Rechner sinnvoll ist</h2>
            <p>
              Viele Arbeitnehmer unterschätzen den Unterschied zwischen Brutto- und Nettogehalt. Ein
              Netto-Rechner hilft dabei, finanzielle Überraschungen zu vermeiden und die eigenen Einnahmen
              besser zu planen. Besonders bei mehreren Beschäftigungen ist ein transparenter Überblick über
              Abgaben und Nettobeträge entscheidend.
            </p>

            <h2>Minijob Rechner 2025 – aktuelle Berechnung</h2>
            <p>
              Die gesetzlichen Regelungen für Minijobs ändern sich regelmäßig. Unser Minijob Rechner für 2025
              wird kontinuierlich an neue Grenzwerte und Vorgaben angepasst, sodass du jederzeit eine
              realistische und aktuelle Berechnung erhältst.
            </p>

            <p>
              Hinweis: Die Berechnung dient zur Orientierung und ersetzt keine steuerliche Beratung. Für
              individuelle Fragen empfehlen wir die Rücksprache mit einem Steuerberater oder der zuständigen
              Krankenkasse.
            </p>
          </section>

          {/* SEO Info Box - PRESERVED */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm text-gray-700">
            Dieser Rechner eignet sich für Minijobs, Nebenjobs, Werkstudentenjobs sowie für Studenten und Nicht-Studenten in Deutschland. Berechnen Sie schnell und einfach Ihr Nettogehalt.
          </div>

          {/* FAQ Section - PRESERVED */}
          <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Häufig gestellte Fragen
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    aria-expanded={activeFaq === index}
                    className="flex items-center justify-between w-full text-left py-2 hover:text-blue-600 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.q}</span>
                    {activeFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {activeFaq === index && (
                    <p className="mt-2 text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <Info size={20} className="text-yellow-700 mr-3 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Hinweis</h3>
                <p className="text-sm text-gray-700">
                  Dieser Rechner dient nur zur Orientierung und ersetzt keine steuerliche Beratung.
                  Die Berechnungen basieren auf vereinfachten Annahmen. Für eine verbindliche Auskunft
                  wenden Sie sich bitte an einen Steuerberater oder das zuständige Finanzamt.
                </p>
              </div>
            </div>
          </div>

          <footer className="border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <div className="space-x-4 mb-4">
              <a href="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</a>
              <span>•</span>
              <a href="/impressum" className="hover:text-gray-900 transition-colors">Impressum</a>
              <span>•</span>
              <a href="/kontakt" className="hover:text-gray-900 transition-colors">Kontakt</a>
            </div>
            <p className="text-xs text-gray-500">
              Stand: Januar {currentYear}
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
