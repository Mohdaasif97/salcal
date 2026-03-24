import { CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Link from 'next/link'

export default function MinijobKostenContent() {
  return (
    <section className="space-y-8">

      {/* ── Section 1: Überblick ── */}
      <article id="kosten-uebersicht" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Was kostet ein Minijob den Arbeitgeber 2026?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Bei einem Minijob zahlt der Arbeitgeber <strong>keine regulären Sozialversicherungsbeiträge</strong>,
          sondern <strong>Pauschalabgaben</strong> direkt an die Minijob-Zentrale. Die Gesamtkosten setzen sich
          aus dem vereinbarten Bruttolohn plus diesen Pauschalabgaben zusammen. Je nach Art des Minijobs —
          gewerblich oder Privathaushalt — fallen die Abgaben sehr unterschiedlich aus.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Bei einem <strong>gewerblichen Minijob</strong> mit 603 Euro Bruttolohn belaufen sich die
          Gesamtkosten auf rund <strong>798 Euro pro Monat</strong> (32,47% Aufschlag). Im{' '}
          <strong>Privathaushalt</strong> sind es nur rund <strong>693 Euro</strong> (14,92% Aufschlag) —
          eine Ersparnis von gut <strong>105 Euro pro Monat</strong> bzw. <strong>1.260 Euro pro Jahr</strong>.
        </p>

        {/* Schnellübersicht Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h3 className="font-bold text-orange-900 mb-3 text-base">🏢 Gewerblicher Minijob</h3>
            <p className="text-xs text-orange-700 mb-4">z.B. Einzelhandel, Büro, Gastronomie, Produktion</p>
            <ul className="space-y-2 text-xs sm:text-sm text-orange-900">
              <li className="flex justify-between border-b border-orange-200 pb-1.5">
                <span>Krankenversicherung (KV)</span><strong>13,00%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1.5">
                <span>Rentenversicherung (RV)</span><strong>15,00%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1.5">
                <span>Pauschale Lohnsteuer</span><strong>2,00%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1.5">
                <span>U1-Umlage (Krankheit)</span><strong>0,80%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1.5">
                <span>U2-Umlage (Mutterschaft)</span><strong>0,22%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1.5">
                <span>U3-Umlage (Insolvenz)</span><strong>0,15%</strong>
              </li>
              <li className="flex justify-between border-b border-orange-200 pb-1.5">
                <span>Unfallversicherung (UV)</span><strong>~1,30%</strong>
              </li>
              <li className="flex justify-between pt-2 font-bold text-sm sm:text-base">
                <span>Gesamt Aufschlag</span><span className="text-orange-700">~32,47%</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-orange-200 space-y-1 text-xs text-orange-800">
              <div className="flex justify-between"><span>Bruttolohn</span><strong>603,00 €</strong></div>
              <div className="flex justify-between"><span>Pauschalabgaben</span><strong>195,71 €</strong></div>
              <div className="flex justify-between text-sm font-extrabold text-orange-900">
                <span>Gesamtkosten AG</span><span>~798,71 €</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-3 text-base">🏠 Privathaushalt-Minijob</h3>
            <p className="text-xs text-green-700 mb-4">z.B. Haushaltshilfe, Kinderbetreuung, Gartenarbeit</p>
            <ul className="space-y-2 text-xs sm:text-sm text-green-900">
              <li className="flex justify-between border-b border-green-200 pb-1.5">
                <span>Krankenversicherung (KV)</span><strong>5,00%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1.5">
                <span>Rentenversicherung (RV)</span><strong>5,00%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1.5">
                <span>Pauschale Lohnsteuer</span><strong>2,00%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1.5">
                <span>U1-Umlage (Krankheit)</span><strong>0,80%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1.5">
                <span>U2-Umlage (Mutterschaft)</span><strong>0,22%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1.5">
                <span>U3-Umlage (Insolvenz)</span><strong>0,00%</strong>
              </li>
              <li className="flex justify-between border-b border-green-200 pb-1.5">
                <span>Unfallversicherung (UV)</span><strong>~1,90%</strong>
              </li>
              <li className="flex justify-between pt-2 font-bold text-sm sm:text-base">
                <span>Gesamt Aufschlag</span><span className="text-green-700">~14,92%</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-green-200 space-y-1 text-xs text-green-800">
              <div className="flex justify-between"><span>Bruttolohn</span><strong>603,00 €</strong></div>
              <div className="flex justify-between"><span>Pauschalabgaben</span><strong>90,00 €</strong></div>
              <div className="flex justify-between text-sm font-extrabold text-green-900">
                <span>Gesamtkosten AG</span><span>~693,00 €</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6">
          <h3 className="font-bold text-blue-900 mb-4 text-base sm:text-lg">
            ✓ Das Wichtigste für Arbeitgeber 2026 im Überblick:
          </h3>
          <ul className="space-y-3">
            {[
              'Alle Pauschalabgaben werden direkt an die Minijob-Zentrale abgeführt — kein Krankenkassenverfahren',
              'Umlage U1 wurde zum 01.01.2026 von 1,1% auf 0,8% gesenkt — entlastet Arbeitgeber um ~1,80€/Monat',
              'Ab Januar 2026 entfällt die Rechtskreistrennung (Ost/West) bei Beitragsnachweisen',
              'Privathaushalt-Arbeitgeber können 20% der Kosten von der Einkommensteuer absetzen (max. 510€/Jahr)',
              'Anmeldung muss VOR Arbeitsbeginn erfolgen — rückwirkend nicht möglich, Bußgeld bis 5.000€',
              'Arbeitgeber haften für korrekte Anmeldung und Abführung aller Beiträge',
              'Der Dauer-Beitragsnachweis muss bei Gehaltsänderungen neu eingereicht werden',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-blue-900">
                <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* ── Section 2: Detaillierte Kostenberechnung ── */}
      <article id="berechnung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Arbeitgeberkosten berechnen: Beispiele 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Die Gesamtkosten für den Arbeitgeber hängen vom vereinbarten Bruttolohn ab. Je höher der
          Bruttolohn, desto höher die absoluten Pauschalabgaben. Hier sind konkrete Beispielrechnungen
          für verschiedene Verdiensthöhen:
        </p>

        {/* Kostentabelle gewerblich */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
          🏢 Gesamtkosten gewerblicher Minijob 2026
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Arbeitgeberkosten gewerblich 2026">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="p-2 sm:p-3 text-left font-bold border border-orange-400">Bruttolohn</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-orange-400">KV 13%</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-orange-400">RV 15%</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-orange-400">Steuern+Umlagen</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-orange-400">Gesamt AG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['200 €', '26,00 €', '30,00 €', '8,94 €', '~264,94 €'],
                ['300 €', '39,00 €', '45,00 €', '13,41 €', '~397,41 €'],
                ['400 €', '52,00 €', '60,00 €', '17,88 €', '~529,88 €'],
                ['500 €', '65,00 €', '75,00 €', '22,35 €', '~662,35 €'],
                ['556 €', '72,28 €', '83,40 €', '24,83 €', '~736,51 €'],
                ['603 €', '78,39 €', '90,45 €', '26,87 €', '~798,71 €'],
              ].map(([brutto, kv, rv, rest, gesamt], i) => (
                <tr key={i} className={i === 5 ? 'bg-orange-50 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{brutto}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{kv}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{rv}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{rest}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-orange-700 border">{gesamt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Kostentabelle Privathaushalt */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
          🏠 Gesamtkosten Privathaushalt-Minijob 2026
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Arbeitgeberkosten Privathaushalt 2026">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-2 sm:p-3 text-left font-bold border border-green-500">Bruttolohn</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-green-500">KV 5%</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-green-500">RV 5%</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-green-500">Steuern+Umlagen</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-green-500">Gesamt AG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['200 €', '10,00 €', '10,00 €', '9,84 €', '~229,84 €'],
                ['300 €', '15,00 €', '15,00 €', '14,76 €', '~344,76 €'],
                ['400 €', '20,00 €', '20,00 €', '19,68 €', '~459,68 €'],
                ['500 €', '25,00 €', '25,00 €', '24,60 €', '~574,60 €'],
                ['556 €', '27,80 €', '27,80 €', '27,34 €', '~638,94 €'],
                ['603 €', '30,15 €', '30,15 €', '29,64 €', '~692,94 €'],
              ].map(([brutto, kv, rv, rest, gesamt], i) => (
                <tr key={i} className={i === 5 ? 'bg-green-50 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{brutto}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{kv}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{rv}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{rest}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-green-700 border">{gesamt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
            <strong>📌 Formel Gesamtkosten:</strong> Bruttolohn × (1 + Pauschalabgaben in %) = Gesamtkosten<br />
            <strong>Gewerblich:</strong> 603 € × 1,3247 = <strong>~798,71 €/Monat</strong><br />
            <strong>Privathaushalt:</strong> 603 € × 1,1492 = <strong>~692,94 €/Monat</strong>
          </p>
        </div>
      </article>

      {/* ── Section 3: Gewerblich vs. Haushalt Vergleich ── */}
      <article id="gewerblich-haushalt" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Gewerblicher Minijob vs. Privathaushalt: Kostenvergleich 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Der größte Kostentreiber beim gewerblichen Minijob sind die hohen Pauschalabgaben für
          Kranken- und Rentenversicherung. Im Privathaushalt gelten deutlich niedrigere Sätze — ein
          Vorteil, den der Gesetzgeber bewusst eingeräumt hat, um legale Beschäftigung im Haushalt zu fördern.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Gewerblich vs Haushalt Vergleich">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold text-gray-900 border">Abgabenart</th>
                <th className="p-3 text-center font-bold text-orange-700 border bg-orange-50">Gewerblich</th>
                <th className="p-3 text-center font-bold text-green-700 border bg-green-50">Privathaushalt</th>
                <th className="p-3 text-center font-bold text-gray-700 border">Differenz</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Krankenversicherung (KV)', '13,00%', '5,00%', '-8,00%'],
                ['Rentenversicherung (RV)', '15,00%', '5,00%', '-10,00%'],
                ['Pauschale Lohnsteuer', '2,00%', '2,00%', '±0%'],
                ['U1-Umlage (Krankheit)', '0,80%', '0,80%', '±0%'],
                ['U2-Umlage (Mutterschaft)', '0,22%', '0,22%', '±0%'],
                ['U3-Umlage (Insolvenz)', '0,15%', '0,00%', '-0,15%'],
                ['Unfallversicherung (UV)', '~1,30%', '~1,90%', '+0,60%'],
                ['Gesamt', '~32,47%', '~14,92%', '-17,55%'],
              ].map(([art, gew, hh, diff], i) => (
                <tr
                  key={i}
                  className={
                    art === 'Gesamt'
                      ? 'bg-gray-100 font-bold text-sm'
                      : i % 2 === 0
                      ? 'bg-white'
                      : 'bg-gray-50'
                  }
                >
                  <td className="p-2 sm:p-3 font-medium text-gray-900 border">{art}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-orange-700 border bg-orange-50/50">{gew}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-green-700 border bg-green-50/50">{hh}</td>
                  <td className={`p-2 sm:p-3 text-center font-bold border ${diff.startsWith('-') ? 'text-green-600' : diff === '±0%' ? 'text-gray-500' : 'text-red-500'}`}>{diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-bold text-orange-900 mb-2 text-sm">🏢 Wann ist gewerblicher Minijob teurer?</h3>
            <p className="text-xs sm:text-sm text-orange-800 leading-relaxed">
              Bei <strong>603 € Brutto</strong> zahlt der gewerbliche Arbeitgeber rund{' '}
              <strong>195,71 € Pauschalabgaben</strong> — über 105 € mehr als im Privathaushalt.
              Aufs Jahr gerechnet sind das <strong>1.260 € Mehrkosten</strong> pro Minijobber.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-2 text-sm">🏠 Steuervorteil Privathaushalt</h3>
            <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
              Private Haushalte können zusätzlich <strong>20% der Gesamtkosten</strong> direkt von der
              Einkommensteuer abziehen — maximal <strong>510 Euro pro Jahr</strong>. Das reduziert die
              Nettokosten noch weiter.
            </p>
          </div>
        </div>
      </article>

      {/* ── Section 4: Einzelne Abgaben erklärt ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Pauschalabgaben Minijob erklärt: Was steckt dahinter?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Jede Pauschalabgabe hat einen eigenen Zweck und einen gesetzlich festgelegten Satz. Hier ist
          eine detaillierte Erklärung aller Abgabearten, die Arbeitgeber 2026 entrichten müssen:
        </p>

        <div className="space-y-4">
          {[
            {
              title: '🏥 Krankenversicherung (KV) – 13% / 5%',
              color: 'blue',
              content: 'Der Arbeitgeber zahlt einen pauschalen KV-Beitrag an die Knappschaft. Dieser ersetzt die sonst üblichen Arbeitgeber- und Arbeitnehmeranteile. Der Minijobber selbst ist dadurch jedoch NICHT krankenversichert — er muss über die Familienversicherung, eine eigene GKV-Mitgliedschaft oder eine PKV abgesichert sein. Im Privathaushalt gilt ein günstigerer Satz von nur 5%, da der Gesetzgeber haushaltsnahe Beschäftigung steuerlich begünstigt.',
            },
            {
              title: '🏦 Rentenversicherung (RV) – 15% / 5%',
              color: 'green',
              content: 'Der Arbeitgeber-Pauschalbeitrag zur Rentenversicherung beträgt 15% (gewerblich) bzw. 5% (Privathaushalt). Zusätzlich zahlt der Minijobber selbst 3,6% als Eigenbeitrag, sofern er sich nicht von der Rentenversicherungspflicht befreien lässt. Neu ab Juli 2026: Eine einmal ausgesprochene Befreiung kann künftig einmalig rückgängig gemacht werden.',
            },
            {
              title: '💰 Pauschale Lohnsteuer – 2%',
              color: 'purple',
              content: 'Der Arbeitgeber übernimmt eine einheitliche Pauschallohnsteuer von 2% — diese deckt Lohnsteuer, Solidaritätszuschlag und Kirchensteuer ab. Dadurch ist der Minijob für den Arbeitnehmer komplett steuerfrei. Alternative: Der Arbeitgeber kann den Minijob auch individuell nach den ELStAM-Daten versteuern — dann entfällt die 2%-Pauschale, aber der Aufwand steigt.',
            },
            {
              title: '🤒 U1-Umlage – 0,80% (NEU 2026)',
              color: 'orange',
              content: 'Die U1-Umlage finanziert die Erstattung der Lohnfortzahlung im Krankheitsfall. Zum 1. Januar 2026 wurde der Satz von 1,1% auf 0,8% gesenkt — eine Entlastung von rund 1,80 Euro pro Monat bei Maximallohn. Dies gilt für alle Arbeitgeber, die weniger als 30 Mitarbeiter beschäftigen (bei größeren Betrieben gelten andere Regelungen).',
            },
            {
              title: '🤰 U2-Umlage – 0,22%',
              color: 'pink',
              content: 'Die U2-Umlage finanziert die Erstattung des Mutterschutzlohns und der Mutterschaftsgeldzuschüsse. Der Satz wurde bereits zum 1. Januar 2025 von 0,24% auf 0,22% gesenkt und bleibt 2026 stabil. Diese Umlage gilt auch für männliche Minijobber — sie wird unabhängig vom Geschlecht erhoben.',
            },
            {
              title: '⚠️ U3-Umlage (Insolvenzgeld) – 0,15% / 0%',
              color: 'red',
              content: 'Die U3-Umlage sichert das Insolvenzgeld für Arbeitnehmer, wenn der Arbeitgeber zahlungsunfähig wird. Gewerbliche Arbeitgeber zahlen 0,15%. Privathaushalt-Arbeitgeber sind davon befreit (0%) — da private Haushalte kein Insolvenzverfahren durchlaufen können.',
            },
            {
              title: '🦺 Unfallversicherung (UV) – ~1,30% / ~1,90%',
              color: 'yellow',
              content: 'Die Beiträge zur gesetzlichen Unfallversicherung werden direkt an die zuständige Berufsgenossenschaft abgeführt. Der Satz variiert je nach Branche und Risikoklasse — typisch sind ~1,30% für gewerbliche Minijobs. Privathaushalt-Arbeitgeber zahlen etwas mehr (~1,90%), da diese über die Unfallversicherung Bund und Bahn versichert werden.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`border rounded-lg p-4 ${
                item.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                item.color === 'green' ? 'bg-green-50 border-green-200' :
                item.color === 'purple' ? 'bg-purple-50 border-purple-200' :
                item.color === 'orange' ? 'bg-orange-50 border-orange-200' :
                item.color === 'pink' ? 'bg-pink-50 border-pink-200' :
                item.color === 'red' ? 'bg-red-50 border-red-200' :
                'bg-yellow-50 border-yellow-200'
              }`}
            >
              <h3 className={`font-bold mb-2 text-sm sm:text-base ${
                item.color === 'blue' ? 'text-blue-900' :
                item.color === 'green' ? 'text-green-900' :
                item.color === 'purple' ? 'text-purple-900' :
                item.color === 'orange' ? 'text-orange-900' :
                item.color === 'pink' ? 'text-pink-900' :
                item.color === 'red' ? 'text-red-900' :
                'text-yellow-900'
              }`}>{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </article>

      {/* ── Section 5: Anmeldung & Pflichten ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob anmelden: Pflichten des Arbeitgebers 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Als Arbeitgeber tragen Sie die volle Verantwortung für die korrekte Anmeldung und Abrechnung
          eines Minijobs. Fehler können zu Nachzahlungen, Bußgeldern und im schlimmsten Fall zu
          Strafverfolgung wegen Schwarzarbeit führen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-3 text-sm sm:text-base">📋 Anmeldepflichten</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-800">
              <li className="flex gap-2"><span className="shrink-0">✅</span><span>Anmeldung bei der <strong>Minijob-Zentrale</strong> VOR Arbeitsbeginn</span></li>
              <li className="flex gap-2"><span className="shrink-0">✅</span><span>Privathaushalt: Anmeldung über das <strong>Haushaltsscheckverfahren</strong></span></li>
              <li className="flex gap-2"><span className="shrink-0">✅</span><span>Steueridentifikationsnummer des Arbeitnehmers erforderlich</span></li>
              <li className="flex gap-2"><span className="shrink-0">✅</span><span>Bearbeitungsdauer: ca. <strong>5–10 Arbeitstage</strong></span></li>
              <li className="flex gap-2"><span className="shrink-0">✅</span><span>Anmeldung ist <strong>kostenlos</strong></span></li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-bold text-amber-900 mb-3 text-sm sm:text-base">⚠️ Laufende Pflichten</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-800">
              <li className="flex gap-2"><span className="shrink-0">📅</span><span>Monatliche Abführung der Pauschalabgaben bis zum <strong>drittletzten Bankarbeitstag</strong></span></li>
              <li className="flex gap-2"><span className="shrink-0">📝</span><span>Dauer-Beitragsnachweis bei Gehaltsänderungen aktualisieren</span></li>
              <li className="flex gap-2"><span className="shrink-0">📄</span><span>Schriftlicher Arbeitsvertrag gemäß <strong>Nachweisgesetz</strong> empfohlen</span></li>
              <li className="flex gap-2"><span className="shrink-0">📊</span><span>Lohnunterlagen <strong>5 Jahre</strong> aufbewahren</span></li>
              <li className="flex gap-2"><span className="shrink-0">🔔</span><span>Abmeldung bei Ende des Arbeitsverhältnisses</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-red-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-red-900 mb-2 text-sm">❌ Folgen bei Verstößen</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-red-800">
                <div><strong>Bußgeld:</strong> Bis zu 5.000 € bei nicht rechtzeitiger Anmeldung</div>
                <div><strong>Nachzahlungen:</strong> Rückwirkend bis zu 4 Jahre alle Beiträge + Zinsen</div>
                <div><strong>Strafrecht:</strong> Bei vorsätzlicher Schwarzarbeit Freiheitsstrafe möglich</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ── Section 6: Steuervorteil Privathaushalt ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Steuervorteil: Minijob im Privathaushalt von der Steuer absetzen
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Private Haushalte profitieren gleich doppelt: Erstens durch die niedrigeren Pauschalabgaben
          (14,92% statt 32,47%), und zweitens durch den <strong>direkten Steuerabzug von 20%</strong> der
          Gesamtkosten — also nicht nur des Bruttolohns, sondern aller gezahlten Abgaben.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <h3 className="font-bold text-green-900 mb-4 text-sm sm:text-base">
            💡 Beispielrechnung: Steuerersparnis bei 603 € Minijob im Haushalt
          </h3>
          <div className="space-y-2 text-xs sm:text-sm text-green-800">
            <div className="flex justify-between border-b border-green-200 pb-1.5">
              <span>Bruttolohn pro Monat</span><strong>603,00 €</strong>
            </div>
            <div className="flex justify-between border-b border-green-200 pb-1.5">
              <span>Pauschalabgaben (14,92%)</span><strong>+ 89,97 €</strong>
            </div>
            <div className="flex justify-between border-b border-green-200 pb-1.5 font-semibold">
              <span>Gesamtkosten pro Monat</span><strong>~692,97 €</strong>
            </div>
            <div className="flex justify-between border-b border-green-200 pb-1.5 font-semibold">
              <span>Gesamtkosten pro Jahr</span><strong>~8.315,64 €</strong>
            </div>
            <div className="flex justify-between border-b border-green-200 pb-1.5">
              <span>Steuerabzug 20% (max. 510 €/Jahr)</span><strong className="text-green-700">- 510,00 €</strong>
            </div>
            <div className="flex justify-between pt-1 font-bold text-sm sm:text-base text-green-900">
              <span>Tatsächliche Nettokosten/Jahr</span><strong>~7.805,64 €</strong>
            </div>
          </div>
          <p className="text-xs text-green-700 mt-3">
            * Steuerabzug direkt von der Einkommensteuer (§ 35a EStG), nicht nur als Werbungskosten.
            Voraussetzung: legale Beschäftigung über Haushaltsscheckverfahren.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2 text-sm">📋 Weitere absetzbare Leistungen im Privathaushalt (§ 35a EStG)</h3>
          <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
            Neben Minijobs können auch <strong>sozialversicherungspflichtige Haushaltskräfte</strong> (20%,
            max. 4.000 €/Jahr) und <strong>Handwerkerleistungen</strong> (20%, max. 1.200 €/Jahr) steuerlich
            abgesetzt werden. Die drei Kategorien haben jeweils eigene Höchstgrenzen und können
            kombiniert werden.
          </p>
        </div>
      </article>

      {/* ── Section 7: Änderungen 2026 ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Änderungen für Arbeitgeber 2026 im Überblick
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Änderungen Arbeitgeber 2026">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold border">Änderung</th>
                <th className="p-3 text-center font-bold border">2025</th>
                <th className="p-3 text-center font-bold text-blue-700 border bg-blue-50">2026</th>
                <th className="p-3 text-left font-bold border">Auswirkung</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Minijob-Grenze', '556 €', '603 €', 'Höhere Lohnkosten möglich, mehr Flexibilität'],
                ['U1-Umlage', '1,10%', '0,80%', 'Entlastung ~1,80 €/Monat bei Maximalverdienst'],
                ['U2-Umlage', '0,22%', '0,22%', 'Unverändert'],
                ['Rechtskreistrennung', 'Ost/West', 'Entfällt', 'Neuer einheitlicher Dauer-Beitragsnachweis nötig'],
                ['RV-Befreiung rückgängig', 'Nicht möglich', 'Ab Juli 2026', 'Arbeitnehmer kann Befreiung einmalig widerrufen'],
                ['Mindestlohn', '12,82 €/h', '13,90 €/h', 'Stundenanzahl bei Mindestlohn bleibt ~43h/Monat'],
              ].map(([change, v2025, v2026, impact], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{change}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-500 border">{v2025}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-700 border bg-blue-50/50">{v2026}</td>
                  <td className="p-2 sm:p-3 text-gray-700 border text-xs">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-900 mb-1 text-sm">⚠️ Handlungsbedarf: Neuer Dauer-Beitragsnachweis</h3>
              <p className="text-xs sm:text-sm text-amber-900">
                Ab dem Beitragsmonat <strong>Januar 2026 entfällt die Rechtskreistrennung</strong> (Ost/West).
                Wer bisher einen Dauer-Beitragsnachweis mit Rechtskreis „Ost" oder zwei separate Nachweise
                eingereicht hat, muss <strong>einen neuen, einheitlichen Dauer-Beitragsnachweis</strong>{' '}
                einreichen. Dies betrifft vor allem ostdeutsche Arbeitgeber.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white text-center">
        <p className="text-xl sm:text-2xl font-bold mb-2">
          💡 Minijob Kosten Arbeitgeber Rechner 2026
        </p>
        <p className="text-blue-100 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Mit unserem kostenlosen Minijob-Rechner sehen Sie sofort die genauen Gesamtkosten
          für jeden Bruttolohn — gewerblich und Privathaushalt im Vergleich.
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
        <h3 className="font-bold text-gray-900 mb-3 text-base">🔗 Weiterführende Seiten & Rechner</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/minijob-rechner" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Rechner 2026 – Netto sofort berechnen
          </Link>
          <Link href="/minijob-grenze-2026" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Grenze 2026 – 603 Euro Verdienstgrenze
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
          <Link href="/midijob-rechner" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Midijob Rechner 2026 (Gleitzone 603€–2.000€)
          </Link>
        </div>
      </div>

    </section>
  )
}