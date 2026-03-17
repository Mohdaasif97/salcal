import { CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Link from 'next/link'

export default function MinijobGrenzeContent() {
  return (
    <section className="space-y-8">

      {/* ── Section 1: Was ist die Minijob-Grenze 2026 ── */}
      <article id="grenze-2026" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Grenze 2026: 603 Euro pro Monat
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Die <strong>Minijob-Grenze 2026</strong> — offiziell <em>Geringfügigkeitsgrenze</em> oder{' '}
          <em>Entgeltgeringfügigkeitsgrenze</em> — beträgt seit dem <strong>1. Januar 2026 genau 603 Euro
          pro Monat</strong>. Das entspricht einer Jahresgrenze von <strong>7.236 Euro</strong>. Wer im
          Monatsdurchschnitt nicht mehr als diesen Betrag verdient, gilt als Minijobber gemäß § 8 Abs. 1
          Nr. 1 SGB IV und profitiert von den besonderen Pauschalregelungen für geringfügig Beschäftigte.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Gegenüber dem Vorjahr ist die Grenze um <strong>47 Euro gestiegen</strong> (2025: 556 Euro).
          Der Grund: Seit Oktober 2022 ist die Minijob-Grenze <strong>dynamisch an den gesetzlichen
          Mindestlohn gekoppelt</strong>. Der Mindestlohn stieg zum 1. Januar 2026 von 12,82 Euro auf{' '}
          <strong>13,90 Euro pro Stunde</strong> — entsprechend passte sich die Verdienstgrenze automatisch an.
        </p>

        {/* Key numbers highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Monatsgrenze', value: '603,00 €', color: 'blue', note: 'ab 01.01.2026' },
            { label: 'Jahresgrenze', value: '7.236,00 €', color: 'green', note: '12 × 603 €' },
            { label: 'Ausnahmegrenze', value: '1.206,00 €', color: 'orange', note: 'max. 2× im Jahr' },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-lg p-4 text-center border ${
                item.color === 'blue'
                  ? 'bg-blue-50 border-blue-200'
                  : item.color === 'green'
                  ? 'bg-green-50 border-green-200'
                  : 'bg-orange-50 border-orange-200'
              }`}
            >
              <p className={`text-xs font-semibold mb-1 ${
                item.color === 'blue' ? 'text-blue-700' : item.color === 'green' ? 'text-green-700' : 'text-orange-700'
              }`}>{item.label}</p>
              <p className={`text-xl sm:text-2xl font-extrabold ${
                item.color === 'blue' ? 'text-blue-900' : item.color === 'green' ? 'text-green-900' : 'text-orange-900'
              }`}>{item.value}</p>
              <p className={`text-xs mt-1 ${
                item.color === 'blue' ? 'text-blue-600' : item.color === 'green' ? 'text-green-600' : 'text-orange-600'
              }`}>{item.note}</p>
            </div>
          ))}
        </div>

        {/* Wichtige Merkmale */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6">
          <h3 className="font-bold text-blue-900 mb-4 text-base sm:text-lg">
            ✓ Das gilt für die Minijob-Grenze 2026 im Überblick:
          </h3>
          <ul className="space-y-3">
            {[
              'Verdienstgrenze: 603 Euro monatlich / 7.236 Euro jährlich (ab 01.01.2026)',
              'Direkt gekoppelt an den Mindestlohn von 13,90 Euro pro Stunde',
              'Keine gesetzliche Stundenbegrenzung – nur der monatliche Verdienst zählt',
              'Gelegentliches Überschreiten erlaubt: max. 2× pro Jahr bis 1.206 Euro (= doppelte Grenze)',
              'Arbeitnehmer zahlen keine Kranken-, Pflege- oder Arbeitslosenversicherung',
              'Rentenversicherungspflicht gilt, Befreiung auf Antrag möglich (3,6% Eigenbeitrag)',
              'Arbeitgeber zahlt Pauschalabgaben: ~32,47% (gewerblich) oder ~14,62% (Privathaushalt)',
              'Ab 2027: Mindestlohn steigt auf 14,60 € → Minijob-Grenze voraussichtlich 633 Euro',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-blue-900">
                <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* ── Section 2: Stunden berechnen ── */}
      <article id="berechnung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Wie viele Stunden darf ich im Minijob arbeiten? 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Es gibt <strong>keine gesetzliche Stundenbegrenzung</strong> beim Minijob — ein häufiger Irrtum!
          Entscheidend ist ausschließlich, dass der <strong>monatliche Verdienst die Grenze von 603 Euro</strong>{' '}
          nicht überschreitet. Wie viele Stunden das erlaubt, hängt allein vom vereinbarten Stundenlohn ab.
        </p>

        {/* Stundentabelle */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Stunden Tabelle 2026">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2 sm:p-3 text-left font-bold border border-blue-500">Stundenlohn</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Max. Stunden/Monat</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Max. Stunden/Woche</th>
                <th className="p-2 sm:p-3 text-left font-bold border border-blue-500">Monatsverdienst</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['13,90 € (Mindestlohn)', '43,38 Std.', '~10,0 Std.', '603,00 €'],
                ['14,00 €', '43,07 Std.', '~9,9 Std.', '603,00 €'],
                ['15,00 €', '40,20 Std.', '~9,3 Std.', '603,00 €'],
                ['16,00 €', '37,69 Std.', '~8,7 Std.', '603,00 €'],
                ['18,00 €', '33,50 Std.', '~7,7 Std.', '603,00 €'],
                ['20,00 €', '30,15 Std.', '~7,0 Std.', '603,00 €'],
                ['25,00 €', '24,12 Std.', '~5,6 Std.', '603,00 €'],
              ].map(([lohn, monat, woche, verdienst], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{lohn}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-600 border">{monat}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{woche}</td>
                  <td className="p-2 sm:p-3 font-bold text-green-600 border">{verdienst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
            <strong>📌 Formel zur Berechnung:</strong> Maximale Stunden = 603 € ÷ Stundenlohn<br />
            <strong>Beispiel:</strong> Bei 15 € Stundenlohn → 603 ÷ 15 = <strong>40,2 Stunden pro Monat</strong> erlaubt.<br />
            Die Stunden können flexibel über den Monat verteilt werden — keine wöchentliche Stundengrenze gilt.
          </p>
        </div>
      </article>

      {/* ── Section 3: Überschreitung der Grenze ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob-Grenze überschreiten: Was ist erlaubt?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Das <strong>gelegentliche und unvorhersehbare Überschreiten</strong> der Minijob-Grenze ist
          ausnahmsweise erlaubt — z.B. bei Krankheitsvertretungen oder saisonalen Spitzen. Folgende
          Regeln gelten dabei:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm sm:text-base">✅ Erlaubt: Gelegentliches Überschreiten</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-green-800">
              <li>• Maximal <strong>2 Monate</strong> pro rückwärtigem Zeitjahr</li>
              <li>• Höchstbetrag in diesen Monaten: <strong>1.206 € (= 2 × 603 €)</strong></li>
              <li>• Das Überschreiten muss <strong>unvorhersehbar</strong> sein</li>
              <li>• Jahresverdienst darf <strong>8.442 €</strong> nicht übersteigen</li>
              <li>• Beispiel: Krankheitsvertretung, einmalige Extraschicht</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-3 text-sm sm:text-base">❌ Nicht erlaubt: Regelmäßiges Überschreiten</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-red-800">
              <li>• Mehr als <strong>2 Monate</strong> Überschreitung im Zeitjahr</li>
              <li>• <strong>Vorhersehbare</strong> Überschreitungen (z.B. festes Urlaubsgeld)</li>
              <li>• Jahresverdienst über <strong>8.442 €</strong></li>
              <li>• Folge: <strong>Volle Sozialversicherungspflicht</strong> ab erstem Überschreitungsmonat</li>
              <li>• Rückwirkende Nachzahlung aller Beiträge möglich</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2 text-sm">⚠️ Achtung: Einmalige Zahlungen zählen mit!</h3>
              <p className="text-xs sm:text-sm text-amber-900">
                Urlaubs- und Weihnachtsgeld sowie andere einmalige Zahlungen, die <strong>mit Sicherheit</strong>{' '}
                jährlich geleistet werden, werden zum Jahresverdienst hinzugezählt. Diese gelten als{' '}
                <strong>vorhersehbar</strong> und dürfen die Jahresgrenze von 7.236 Euro nicht überschreiten.
                Nicht vorhersehbare Sonderzahlungen (z.B. einmalige Prämie) sind in bestimmten Grenzen erlaubt.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── Section 4: Minijob Grenze historisch + Ausblick ── */}
      <article id="aenderungen" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Minijob-Grenze: Entwicklung 2003–2027
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Die Minijob-Grenze wurde mehrfach angehoben — seit 2022 ist sie dynamisch an den Mindestlohn gekoppelt
          und steigt automatisch mit jedem Mindestlohnerhöhung.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Grenze Entwicklung 2003-2027">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Jahr / Zeitraum</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Minijob-Grenze</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Mindestlohn</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Änderung</th>
                <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Hinweis</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['2003–2012', '400 €', 'Kein Mindestlohn', '–', 'Ursprüngliche Minijob-Regelung'],
                ['2013–2014', '450 €', 'Kein einheitlicher MiLo', '+50 €', 'Erste Anhebung'],
                ['2015–2021', '450 €', '8,50 € → 9,60 €', '±0 €', 'Einführung ges. Mindestlohn'],
                ['2022', '520 €', '10,45 €', '+70 €', 'Erste Kopplung an Mindestlohn'],
                ['2023', '520 €', '12,00 €', '±0 €', 'Grenze stabil trotz MiLo-Erhöhung'],
                ['2024', '538 €', '12,41 €', '+18 €', 'Dynamische Anpassung'],
                ['2025', '556 €', '12,82 €', '+18 €', 'Jährliche Anpassung'],
                ['2026 ✅', '603 €', '13,90 €', '+47 €', 'Aktuelle Grenze – starke Erhöhung'],
                ['2027 (geplant)', '633 €', '14,60 €', '+30 €', 'Bereits beschlossen'],
              ].map(([year, grenze, lohn, change, note], i) => (
                <tr
                  key={i}
                  className={
                    year.includes('✅')
                      ? 'bg-blue-50 font-semibold'
                      : year.includes('geplant')
                      ? 'bg-yellow-50'
                      : i % 2 === 0
                      ? 'bg-white'
                      : 'bg-gray-50'
                  }
                >
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{year}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-600 border">{grenze}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{lohn}</td>
                  <td className={`p-2 sm:p-3 text-center font-bold border ${change.startsWith('+') ? 'text-green-600' : 'text-gray-500'}`}>{change}</td>
                  <td className="p-2 sm:p-3 text-gray-600 border text-xs">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
            📅 Ausblick: Minijob-Grenze 2027
          </h3>
          <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
            Zum <strong>1. Januar 2027</strong> steigt der Mindestlohn planmäßig auf <strong>14,60 Euro</strong>.
            Damit wird die Minijob-Grenze voraussichtlich auf <strong>633 Euro pro Monat</strong> steigen
            (7.596 Euro/Jahr). Dies wurde von der Bundesregierung bereits offiziell beschlossen.
          </p>
        </div>
      </article>

      {/* ── Section 5: Minijob 2025 vs 2026 ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Grenze 2025 vs. 2026: Was hat sich geändert?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Die Erhöhung von <strong>556 Euro (2025) auf 603 Euro (2026)</strong> ist mit +47 Euro (+8,5%) eine der
          stärksten Anhebungen der letzten Jahre. Hier ein direkter Vergleich aller relevanten Werte:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob 2025 vs 2026">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold text-gray-900 border">Kennzahl</th>
                <th className="p-3 text-center font-bold text-gray-500 border">2025</th>
                <th className="p-3 text-center font-bold text-blue-700 border bg-blue-50">2026</th>
                <th className="p-3 text-center font-bold text-green-700 border">Änderung</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Monatsgrenze', '556 €', '603 €', '+47 € (+8,5%)'],
                ['Jahresgrenze', '6.672 €', '7.236 €', '+564 €'],
                ['Gesetzl. Mindestlohn', '12,82 €/h', '13,90 €/h', '+1,08 €/h'],
                ['Max. Stunden/Monat (MiLo)', '43,37 Std.', '43,38 Std.', 'praktisch gleich'],
                ['Ausnahmegrenze (2× Monat)', '1.112 €', '1.206 €', '+94 €'],
                ['Max. Jahresverdienst (Ausnahme)', '7.784 €', '8.442 €', '+658 €'],
                ['Midijob Untergrenze', '556,01 €', '603,01 €', '+47 €'],
              ].map(([kz, v2025, v2026, change], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{kz}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-500 border">{v2025}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-700 border bg-blue-50">{v2026}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-green-600 border">{change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-900 mb-1 text-sm">⚠️ Wichtig für frühere Midijobber!</h3>
              <p className="text-xs sm:text-sm text-amber-900">
                Wer 2025 zwischen 556 € und 603 € verdient hat (Midijob-Zone), wird ab 2026 automatisch
                zum <strong>Minijobber</strong> — sofern der Verdienst gleich bleibt. Wer weiterhin
                sozialversicherungspflichtig beschäftigt bleiben möchte, muss die Arbeitszeit und den
                Verdienst entsprechend anpassen (über 603,01 €).
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── Section 6: Sozialversicherung & Steuern ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Sozialversicherung & Steuern 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Der größte Vorteil des Minijobs für Arbeitnehmer: <strong>keine Abzüge für Kranken-,
          Pflege- und Arbeitslosenversicherung</strong>. Stattdessen zahlt der Arbeitgeber Pauschalabgaben.
          Hier ist die vollständige Übersicht:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Arbeitnehmer */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm sm:text-base">👤 Arbeitnehmer – Abzüge</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-green-800">
              <li className="flex justify-between border-b border-green-200 pb-1">
                <span>Krankenversicherung</span><strong className="text-green-900">0%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1">
                <span>Pflegeversicherung</span><strong className="text-green-900">0%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1">
                <span>Arbeitslosenversicherung</span><strong className="text-green-900">0%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1">
                <span>Rentenversicherung (mit Befreiung)</span><strong className="text-green-900">0%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1">
                <span>Rentenversicherung (ohne Befreiung)</span><strong className="text-orange-600">3,6%</strong>
              </li>
              <li className="flex justify-between pt-1">
                <span>Lohnsteuer (pauschal, zahlt AG)</span><strong className="text-green-900">0%</strong>
              </li>
            </ul>
            <p className="text-xs text-green-700 mt-3">
              ✅ Bei Befreiung: 603 € Brutto = 603 € Netto<br />
              📌 Ohne Befreiung: 603 € − 21,71 € = 581,29 € Netto
            </p>
          </div>

          {/* Arbeitgeber gewerblich */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-bold text-orange-900 mb-3 text-sm sm:text-base">🏢 Arbeitgeber – Pauschalabgaben</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-orange-900">
              <li className="flex justify-between border-b border-orange-200 pb-1">
                <span>Krankenversicherung (KV)</span><strong>13,00%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1">
                <span>Rentenversicherung (RV)</span><strong>15,00%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1">
                <span>Pauschale Lohnsteuer</span><strong>2,00%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1">
                <span>U1-Umlage (Krankheit)</span><strong>0,80%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1">
                <span>U2-Umlage (Mutterschaft)</span><strong>0,22%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1">
                <span>U3-Umlage (Insolvenz)</span><strong>0,15%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1">
                <span>Unfallversicherung</span><strong>~1,30%</strong>
              </li>
              <li className="flex justify-between pt-2 font-bold text-base">
                <span>Gesamt (gewerblich)</span><span>~32,47%</span>
              </li>
            </ul>
            <p className="text-xs text-orange-700 mt-2">
              = ca. 195,71 € Abgaben bei 603 € Brutto → Gesamtkosten ~798,71 €
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2 text-sm">💡 Rentenversicherung: Befreiung oder nicht?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-blue-800">
            <div>
              <p className="font-semibold mb-1">✅ Mit Befreiung (Antrag beim Arbeitgeber):</p>
              <p>Kein RV-Beitrag → volles Netto. Nachteil: Kein Aufbau von Rentenansprüchen aus diesem Job.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">📌 Ohne Befreiung (Standard seit 2013):</p>
              <p>3,6% RV-Beitrag → leicht reduziertes Netto, aber Aufbau von Rentenpunkten für die Altersvorsorge.</p>
            </div>
          </div>
          <p className="text-xs text-blue-700 mt-2 font-semibold">
            Neu ab 01.07.2026: Wer die Befreiung beantragt hat, kann diese künftig einmalig rückgängig machen!
          </p>
        </div>
      </article>

      {/* ── Section 7: Mehrere Minijobs ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Mehrere Minijobs gleichzeitig: Was gilt 2026?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Grundsätzlich dürfen mehrere Minijobs ausgeübt werden — entscheidend ist dabei das{' '}
          <strong>Gesamteinkommen aus allen geringfügigen Beschäftigungen zusammen</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm">✅ Erlaubt: Minijob + Hauptjob</h3>
            <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
              Wer einen <strong>sozialversicherungspflichtigen Hauptjob</strong> hat, darf daneben genau{' '}
              <strong>einen Minijob</strong> ausüben — dieser wird nicht auf das Hauptgehalt angerechnet.
              Der Minijob bleibt für Arbeitgeber und Arbeitnehmer sozialversicherungsfrei.
            </p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-bold text-orange-900 mb-3 text-sm">⚠️ Achtung: Mehrere Minijobs</h3>
            <p className="text-xs sm:text-sm text-orange-800 leading-relaxed">
              Werden <strong>mehrere Minijobs ohne Hauptjob</strong> ausgeübt, wird das Gesamteinkommen
              zusammengezählt. Übersteigt es 603 €/Monat, verliert das gesamte Beschäftigungsverhältnis
              den Minijob-Status — volle SV-Pflicht gilt rückwirkend.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Kombinationen 2026">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold border">Konstellation</th>
                <th className="p-3 text-center font-bold border">Zulässig?</th>
                <th className="p-3 text-left font-bold border">Bedingung</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 Minijob (kein Hauptjob)', '✅ Ja', 'Verdienst ≤ 603 €/Monat'],
                ['1 Minijob + sozialversicherungspfl. Hauptjob', '✅ Ja', 'Minijob-Verdienst ≤ 603 €, unbegrenzt kombinierbar'],
                ['2 Minijobs (kein Hauptjob)', '⚠️ Bedingt', 'Gesamtverdienst beider Jobs ≤ 603 €/Monat'],
                ['2 Minijobs + Hauptjob', '⚠️ Bedingt', 'Nur 1 Minijob bleibt frei; 2. Minijob wird mit Hauptjob zusammengerechnet'],
                ['Minijob als Rentner', '✅ Ja', 'Verdienst ≤ 603 €, keine Auswirkung auf Rente'],
                ['Minijob als Student', '✅ Ja', 'Verdienst ≤ 603 €, kein Einfluss auf BAföG'],
              ].map(([konst, ja, bed], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 text-gray-900 border font-medium">{konst}</td>
                  <td className="p-2 sm:p-3 text-center font-bold border">{ja}</td>
                  <td className="p-2 sm:p-3 text-gray-700 border text-xs">{bed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* ── Section 8: Minijob Rechner CTA ── */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          💡 Minijob Netto sofort berechnen
        </h2>
        <p className="text-blue-100 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Mit unserem kostenlosen Minijob-Rechner berechnen Sie in Sekunden Ihr genaues Netto-Gehalt
          und die Arbeitgeberkosten — mit der aktuellen Grenze von 603 €.
        </p>
        <Link
          href="/minijob-rechner"
          className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
        >
          ⚡ Zum Minijob Rechner 2026 →
        </Link>
      </div>

      {/* ── Internal Links ── */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
        <h3 className="font-bold text-gray-900 mb-3 text-base">🔗 Weiterführende Rechner & Infos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/minijob-rechner" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Rechner 2026 – Netto sofort berechnen
          </Link>
          <Link href="/minijob-verdienstgrenze" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Verdienstgrenze 2026 – 603 Euro erklärt
          </Link>
          <Link href="/minijob-steuern" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Steuern 2026 – Pauschsteuer & Lohnsteuer
          </Link>
          <Link href="/minijob-stunden" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Stunden 2026 – Stundentabelle
          </Link>
          <Link href="/minijob-nebenjob" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Nebenjob – Neben Hauptjob, Student & Rentner
          </Link>
          <Link href="/minijob-kosten-arbeitgeber" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Kosten Arbeitgeber – Alle Pauschalabgaben 2026
          </Link>
          <Link href="/midijob-rechner" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Midijob Rechner 2026 (Gleitzone 603€–2.000€)
          </Link>
        </div>
      </div>

    </section>
  )
}