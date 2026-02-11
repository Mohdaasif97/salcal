'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Info, AlertCircle } from 'lucide-react'

export default function MiniJobRechner() {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [bruttoMonat, setBruttoMonat] = useState('')
  const [jobTyp, setJobTyp] = useState('minijob')
  const [status, setStatus] = useState('student')
  const [hauptjob, setHauptjob] = useState('nein')

  interface Result {
    brutto: number
    netto: number
    nettoJahr: number
    steuer: number
    sozialversicherung: number
    pauschalabgaben: number
  }

  const [result, setResult] = useState<Result | null>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [error, setError] = useState('')

  // Year-specific limits
  const getMinijobLimit = (year: number) => {
    const limits: { [key: number]: number } = {
      2025: 556,
      2026: 603, // Update this when official 2026 limit is announced
    }
    return limits[year] || 556
  }

  const minijobLimit = getMinijobLimit(selectedYear)
  const availableYears = [2025, 2026]

  React.useEffect(() => {
    setError('')
  }, [jobTyp, status, hauptjob, selectedYear])

  const berechneNetto = () => {
    
    const brutto = parseFloat(bruttoMonat)
    if (isNaN(brutto) || brutto <= 0) {
      setError('Bitte geben Sie ein gültiges Bruttogehalt ein.')
      setResult(null)
      return
    }

    if (jobTyp === 'minijob' && brutto > minijobLimit) {
      setError(`Ein Minijob darf ${minijobLimit} € pro Monat nicht überschreiten (Stand ${selectedYear}).`)
      setResult(null)
      return
    }

    setError('')
    let netto = brutto
    let steuer = 0
    let sozialversicherung = 0
    let pauschalabgaben = 0


    if (jobTyp === 'minijob') {
      netto = brutto
    } else {
      if (hauptjob === 'ja') {
        if (status === 'werkstudent' && brutto <= minijobLimit) {
          sozialversicherung = 0
          steuer = brutto * 0.14
        } else {
          sozialversicherung = brutto * 0.20
          steuer = brutto * 0.20
        }
        netto = brutto - sozialversicherung - steuer
      } else {
        if (status === 'werkstudent' && brutto <= minijobLimit) {
          sozialversicherung = brutto * 0.095
          steuer = Math.max(0, (brutto - 1200) * 0.14)
        } else if (status === 'student' && brutto <= minijobLimit) {
          sozialversicherung = 0
          steuer = 0
        } else {
          sozialversicherung = brutto * 0.20
          steuer = Math.max(0, (brutto - 1200) * 0.14)
        }
        netto = brutto - sozialversicherung - steuer
      }
    }

    setResult({
      brutto,
      netto: Math.max(0, netto),
      nettoJahr: Math.max(0, netto * 12),
      steuer,
      sozialversicherung,
      pauschalabgaben
    })
  }

  const faqs = [
    {
      q: 'Was ist ein Minijob?',
      a: 'Ein Minijob ist eine geringfügige Beschäftigung mit einem monatlichen Verdienst bis 556 Euro (Stand 2025). Der Arbeitgeber zahlt Pauschalabgaben, der Arbeitnehmer erhält das Bruttogehalt in der Regel als Netto.'
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
      a: 'Ein Minijob ist auf 556 Euro begrenzt und weitgehend abgabenfrei für den Arbeitnehmer. Ein Nebenjob ist jede zusätzliche Beschäftigung neben dem Hauptjob, unabhängig vom Verdienst, und unterliegt der normalen Besteuerung.'
    },
    {
      q: 'Ist der Rechner aktuell?',
      a: 'Der Rechner basiert auf den aktuellen gesetzlichen Regelungen. Sie können zwischen den Jahren 2025 und 2026 wählen. Steuerliche Sonderfälle werden vereinfacht dargestellt. Für eine verbindliche Auskunft wenden Sie sich an einen Steuerberater.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Minijob & Nebenjob Netto-Rechner {selectedYear}
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              Berechne in Sekunden, wie viel Netto dir bei Minijob oder Nebenjob bleibt.
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
                  placeholder="z.B. 520"
                />
                {error && (
                  <div className="mt-2 flex items-start gap-2 text-red-600 text-sm" role="alert">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Job-Typ
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="minijob"
                      checked={jobTyp === 'minijob'}
                      onChange={(e) => setJobTyp(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Minijob</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="nebenjob"
                      checked={jobTyp === 'nebenjob'}
                      onChange={(e) => setJobTyp(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Nebenjob</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Status
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="student"
                      checked={status === 'student'}
                      onChange={(e) => setStatus(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Student</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="nicht-student"
                      checked={status === 'nicht-student'}
                      onChange={(e) => setStatus(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Nicht-Student</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="werkstudent"
                      checked={status === 'werkstudent'}
                      onChange={(e) => setStatus(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Werkstudent</span>
                  </label>
                </div>
              </div>

              {jobTyp === 'nebenjob' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Hauptjob vorhanden?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="ja"
                        checked={hauptjob === 'ja'}
                        onChange={(e) => setHauptjob(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Ja</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="nein"
                        checked={hauptjob === 'nein'}
                        onChange={(e) => setHauptjob(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Nein</span>
                    </label>
                  </div>
                </div>
              )}

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600">
                Vereinfachte Berechnung auf Basis typischer Annahmen (keine Steuerberatung).
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
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8 shadow-inner">

                  <div className="mb-4 inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                    <Info size={14} />
                    <span>Vereinfachte Berechnung</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Netto pro Monat:</span>
                      <span className="text-2xl font-bold text-blue-700">
                        {result.netto.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Netto pro Jahr:</span>
                      <span className="text-xl font-semibold text-blue-600">
                        {result.nettoJahr.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bruttogehalt:</span>
                      <span className="text-gray-900">
                        {result.brutto.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>

                    {result.steuer > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Einkommensteuer:</span>
                        <span className="text-red-600">
                          -{result.steuer.toFixed(2).replace('.', ',')} €
                        </span>
                      </div>
                    )}

                    {result.sozialversicherung > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sozialversicherung:</span>
                        <span className="text-red-600">
                          -{result.sozialversicherung.toFixed(2).replace('.', ',')} €
                        </span>
                      </div>
                    )}

                    {result.pauschalabgaben > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pauschalabgaben:</span>
                        <span className="text-red-600">
                          -{result.pauschalabgaben.toFixed(2).replace('.', ',')} €
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between pt-2 border-t border-blue-200 font-medium">
                      <span className="text-gray-900">Netto verbleibend:</span>
                      <span className="text-blue-700">
                        {result.netto.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                  </div>



                </div>
              </div>
            )}
          </section>

          <section className="mt-12 space-y-6 text-gray-800" id="erklaerung">
            <h2>Der Minijob in Deutschland</h2>
            <p>
              Ein Minijob ist eine geringfügige Beschäftigung in Deutschland, bei der das monatliche Einkommen
              eine festgelegte Grenze nicht überschreitet. Seit 2024 ist diese Grenze dynamisch an den
              gesetzlichen Mindestlohn gekoppelt und liegt im Jahr 2025 bei <strong>556 Euro pro Monat</strong>.
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



          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm text-gray-700">
            Dieser Rechner eignet sich für Minijobs, Nebenjobs, Werkstudentenjobs sowie für Studenten und Nicht-Studenten in Deutschland. Berechnen Sie schnell und einfach Ihr Nettogehalt.
          </div>

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
