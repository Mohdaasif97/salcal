import { CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Link from 'next/link'

export default function MinijobVerdienstgrenzeContent() {
  return (
    <section className="space-y-8">

      {/* ── Section 1: Was ist die Verdienstgrenze ── */}
      <article id="verdienstgrenze-2026" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Verdienstgrenze 2026: 603 Euro im Monat
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Die <strong>Minijob Verdienstgrenze 2026</strong> — offiziell <em>Entgeltgeringfügigkeitsgrenze</em> oder{' '}
          <em>Geringfügigkeitsgrenze</em> — beträgt seit dem <strong>1. Januar 2026 genau 603 Euro
          pro Monat</strong>. Das entspricht einem Jahresverdienst von <strong>7.236 Euro</strong>.
          Wer diese Grenze im Monatsdurchschnitt nicht überschreitet, gilt als Minijobber gemäß § 8 Abs. 1
          Nr. 1 SGB IV und ist von Kranken-, Pflege- und Arbeitslosenversicherungsbeiträgen befreit.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Gegenüber 2025 (556 Euro) stieg die Verdienstgrenze um <strong>47 Euro (+8,5%)</strong>. Grund:
          Die Grenze ist seit Oktober 2022 <strong>dynamisch an den Mindestlohn gekoppelt</strong>. Da der
          Mindestlohn zum 1. Januar 2026 von 12,82 Euro auf <strong>13,90 Euro</strong> stieg,
          passte sich die Verdienstgrenze automatisch an.
        </p>

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

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6">
          <h3 className="font-bold text-blue-900 mb-4 text-base sm:text-lg">
            ✓ Minijob Verdienstgrenze 2026 – das Wichtigste im Überblick:
          </h3>
          <ul className="space-y-3">
            {[
              'Verdienstgrenze: 603 Euro monatlich / 7.236 Euro jährlich (gültig ab 01.01.2026)',
              'Berechnung: Mindestlohn × 130 ÷ 3 = 13,90 € × 43,33 ≈ 603 Euro',
              'Keine gesetzliche Stundenbegrenzung – nur der Monatsverdienst zählt',
              'Gelegentliches Überschreiten erlaubt: max. 2× pro Jahr bis 1.206 Euro',
              'Arbeitnehmer zahlen keine KV-, PV- oder ALV-Beiträge',
              'Rentenversicherungspflicht gilt; Befreiung auf Antrag möglich (3,6% Eigenbeitrag)',
              'Midijob-Grenze beginnt ab 603,01 Euro bis maximal 2.000 Euro',
              'Ab 2027: Mindestlohn 14,60 € → Verdienstgrenze voraussichtlich 633 Euro',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-blue-900">
                <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* ── Section 2: Berechnung der Verdienstgrenze ── */}
      <article id="berechnung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Wie wird die Minijob Verdienstgrenze berechnet?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Die Verdienstgrenze wird nach einer gesetzlich festgelegten Formel berechnet:{' '}
          <strong>Mindestlohn × 130 ÷ 3</strong>, aufgerundet auf volle Euro. Diese Formel entspricht
          dem Verdienst bei <strong>10 Wochenstunden zum Mindestlohn</strong> im Monatsdurchschnitt.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mb-6 font-mono text-sm">
          <p className="font-bold text-gray-900 mb-2">📐 Formel zur Berechnung der Verdienstgrenze:</p>
          <p className="text-blue-700">Mindestlohn × 130 ÷ 3 = Verdienstgrenze</p>
          <p className="text-gray-600 mt-2">13,90 € × 130 ÷ 3 = 602,33 € → aufgerundet: <strong className="text-blue-900">603 €</strong></p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Verdienstgrenze Entwicklung 2022-2027">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2 sm:p-3 text-left font-bold border border-blue-500">Jahr</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Mindestlohn</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Verdienstgrenze</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Jahresgrenze</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Änderung</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['2022 (ab Okt.)', '12,00 €', '520 €', '6.240 €', 'Erste dynamische Kopplung'],
                ['2023', '12,00 €', '520 €', '6.240 €', '±0 €'],
                ['2024', '12,41 €', '538 €', '6.456 €', '+18 €'],
                ['2025', '12,82 €', '556 €', '6.672 €', '+18 €'],
                ['2026 ✅', '13,90 €', '603 €', '7.236 €', '+47 €'],
                ['2027 (geplant)', '14,60 €', '633 €', '7.596 €', '+30 €'],
              ].map(([year, milo, grenze, jahres, change], i) => (
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
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{milo}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-600 border">{grenze}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{jahres}</td>
                  <td className={`p-2 sm:p-3 text-center font-bold border ${change.startsWith('+') ? 'text-green-600' : 'text-gray-500'}`}>{change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
            <strong>📌 Wichtig:</strong> Die Kopplung an den Mindestlohn sorgt dafür, dass Minijobber trotz
            Lohnerhöhungen <strong>dieselbe Anzahl an Stunden</strong> arbeiten können. Bei 10 Wochenstunden
            zum Mindestlohn bleibt der Minijob-Status erhalten, unabhängig davon, wie hoch der Mindestlohn steigt.
          </p>
        </div>
      </article>

      {/* ── Section 3: Überschreitung der Verdienstgrenze ── */}
      <article id="ueberschreitung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Verdienstgrenze überschreiten: Was ist erlaubt?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Ein <strong>gelegentliches und unvorhersehbares Überschreiten</strong> der Verdienstgrenze ist
          ausnahmsweise erlaubt — zum Beispiel bei Krankheitsvertretungen oder saisonalen Mehrarbeit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm sm:text-base">✅ Erlaubt</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-green-800">
              <li>• Maximal <strong>2 Monate</strong> Überschreitung pro rückwärtigem Zeitjahr</li>
              <li>• In diesen Monaten höchstens <strong>1.206 € (2× Grenze)</strong></li>
              <li>• Überschreitung muss <strong>unvorhersehbar</strong> sein</li>
              <li>• Jahresverdienst darf <strong>8.442 €</strong> nicht übersteigen</li>
              <li>• Beispiele: Krankheitsvertretung, einmalige Extraschicht</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-3 text-sm sm:text-base">❌ Nicht erlaubt</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-red-800">
              <li>• Mehr als <strong>2 Monate</strong> Überschreitung im Zeitjahr</li>
              <li>• <strong>Vorhersehbare</strong> Überschreitungen (z.B. festes Urlaubsgeld)</li>
              <li>• Jahresverdienst über <strong>8.442 €</strong></li>
              <li>• Folge: <strong>Volle Sozialversicherungspflicht</strong></li>
              <li>• Rückwirkende Nachzahlung aller Beiträge</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2 text-sm">⚠️ Sonderfall: Schwankender Verdienst</h3>
              <p className="text-xs sm:text-sm text-amber-900">
                Minijobber mit unregelmäßigen Einkünften dürfen die Monatsgrenze öfter überschreiten —
                solange der <strong>Jahresverdienst 7.236 Euro (12 × 603 €)</strong> nicht übersteigt.
                In Monaten mit Überschreitung darf der Verdienst maximal <strong>1.206 Euro</strong> betragen.
                Entscheidend ist der <em>Jahresdurchschnittsverdienst</em>.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── Section 4: Verdienstgrenze & Sozialversicherung ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Verdienstgrenze & Sozialversicherung 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Solange der Verdienst die Grenze von 603 Euro nicht überschreitet, profitieren Minijobber
          von besonderen Regelungen — keine eigenen Sozialversicherungsbeiträge, voller Nettolohn.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Sozialversicherung 2026">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold text-gray-900 border">Versicherungsart</th>
                <th className="p-3 text-center font-bold text-gray-900 border">Arbeitnehmer</th>
                <th className="p-3 text-center font-bold text-gray-900 border">Arbeitgeber (gewerblich)</th>
                <th className="p-3 text-center font-bold text-gray-900 border">Arbeitgeber (Haushalt)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Krankenversicherung', '0 %', '13,00 %', '5,00 %'],
                ['Rentenversicherung', '3,6 % (befreibar)', '15,00 %', '5,00 %'],
                ['Pflegeversicherung', '0 %', '0 %', '0 %'],
                ['Arbeitslosenversicherung', '0 %', '0 %', '0 %'],
                ['Pauschale Lohnsteuer', '0 % (AG zahlt)', '2,00 %', '2,00 %'],
                ['U1-Umlage (Krankheit)', '–', '0,80 %', '0,80 %'],
                ['U2-Umlage (Mutterschaft)', '–', '0,22 %', '0,22 %'],
                ['Unfallversicherung', '–', '~1,30 %', '~1,90 %'],
                ['Gesamt Arbeitgeber', '–', '~32,47 %', '~14,92 %'],
              ].map(([art, an, agG, agH], i) => (
                <tr key={i} className={i === 8 ? 'bg-blue-50 font-bold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{art}</td>
                  <td className="p-2 sm:p-3 text-center border">{an}</td>
                  <td className={`p-2 sm:p-3 text-center font-bold border ${i === 8 ? 'text-blue-700' : 'text-gray-700'}`}>{agG}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{agH}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-blue-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-blue-900 mb-1 text-sm">💡 Neu ab 1. Juli 2026: RV-Befreiung rückgängig machbar</h3>
              <p className="text-xs sm:text-sm text-blue-800">
                Wer sich von der Rentenversicherungspflicht befreit hat, kann diese Befreiung ab Juli 2026
                <strong> einmalig rückgängig machen</strong>. Damit können Minijobber nachträglich
                Rentenansprüche aufbauen. Der Antrag muss beim Arbeitgeber gestellt werden.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── Section 5: Mehrere Minijobs ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Mehrere Minijobs: Wie gilt die Verdienstgrenze?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Bei mehreren geringfügigen Beschäftigungen werden die <strong>Verdienste zusammengerechnet</strong>.
          Übersteigt die Summe 603 Euro, verlieren alle Minijobs ihren geringfügigen Status.
          Ausnahme: Ein Minijob neben einer sozialversicherungspflichtigen Hauptbeschäftigung bleibt privilegiert.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse">
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
                ['1 Minijob + SV-pflichtiger Hauptjob', '✅ Ja', 'Minijob-Verdienst ≤ 603 € – unbegrenzt kombinierbar'],
                ['2 Minijobs (kein Hauptjob)', '⚠️ Bedingt', 'Gesamtverdienst beider Jobs ≤ 603 €/Monat'],
                ['2 Minijobs + Hauptjob', '⚠️ Bedingt', 'Nur 1 Minijob bleibt frei; 2. wird mit Hauptjob zusammengerechnet'],
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

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          💡 Minijob Netto sofort berechnen
        </h2>
        <p className="text-blue-100 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Mit unserem kostenlosen Minijob-Rechner berechnen Sie in Sekunden Ihr genaues Netto-Gehalt
          und die Arbeitgeberkosten — mit der aktuellen Verdienstgrenze von 603 €.
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
        <h3 className="font-bold text-gray-900 mb-3 text-base">🔗 Weiterführende Infos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/minijob-rechner" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Rechner 2026 – Netto sofort berechnen
          </Link>
          <Link href="/minijob-grenze-2026" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Grenze 2026 – Alle Details
          </Link>
          <Link href="/minijob-steuern" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Steuern 2026 – Was Arbeitgeber zahlen
          </Link>
          <Link href="/minijob-stunden" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Stunden – Wie viele Stunden sind erlaubt?
          </Link>
          <Link href="/minijob-nebenjob" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Nebenjob – Neben Hauptjob, Student & Rentner
          </Link>
          <Link href="/minijob-kosten-arbeitgeber" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Kosten Arbeitgeber – Pauschalabgaben 2026
          </Link>
        </div>
      </div>

    </section>
  )
}
