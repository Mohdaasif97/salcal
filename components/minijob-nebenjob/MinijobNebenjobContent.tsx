import { CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Link from 'next/link'

export default function MinijobNebenjobContent() {
  return (
    <section className="space-y-8">

      {/* ── Section 1: Grundlagen ── */}
      <article id="nebenjob-grundlagen" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob als Nebenjob 2026 – Grundlagen
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Ein <strong>Minijob als Nebenjob</strong> ist eine der beliebtesten Formen des
          Zuverdienstes in Deutschland. Rund 7,5 Millionen Menschen üben einen Minijob aus —
          viele davon als Nebenbeschäftigung neben einem Hauptjob, Studium oder Rente.
          Die Grundregel: Bis zu <strong>603 Euro pro Monat</strong> (2026) können Sie steuerfrei
          hinzuverdienen, ohne dass sich das auf Ihr Hauptgehalt auswirkt.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Der Minijob als Nebenjob ist in § 8 SGB IV geregelt. Entscheidend ist die{' '}
          <strong>Entgeltgeringfügigkeit</strong>: Der Verdienst aus dem Nebenjob darf 603 Euro/Monat
          nicht überschreiten. Wie viele Stunden Sie dabei arbeiten, ist gesetzlich nicht begrenzt —
          nur der Verdienst zählt.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="font-bold text-blue-900 mb-4 text-base sm:text-lg">
            ✓ Minijob als Nebenjob 2026 – das Wichtigste:
          </h3>
          <ul className="space-y-3">
            {[
              'Verdienstgrenze: 603 Euro pro Monat (7.236 Euro/Jahr) im Nebenjob',
              'Genau ein Minijob darf neben einem sozialversicherungspflichtigen Hauptjob ausgeübt werden',
              'Keine Auswirkung auf Hauptgehalt, Sozialversicherung oder Steuerklasse',
              'Keine eigenen SV-Beiträge für Arbeitnehmer im Nebenjob',
              'Pauschsteuer von 2% zahlt der Arbeitgeber des Nebenjobs',
              'Kein Eintrag in die Steuererklärung erforderlich (bei Pauschalbesteuerung)',
              'Urlaubsanspruch, Lohnfortzahlung und Mutterschutz gelten auch im Nebenjob',
              'Pflicht zur Anmeldung bei der Minijob-Zentrale durch den Nebenjob-Arbeitgeber',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-blue-900">
                <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* ── Section 2: Minijob neben Hauptjob ── */}
      <article id="nebenjob-hauptjob" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob neben sozialversicherungspflichtigem Hauptjob
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Die häufigste Konstellation: Sie haben einen regulären Hauptjob (sozialversicherungspflichtig)
          und möchten daneben einen Minijob ausüben. Diese Kombination ist <strong>ausdrücklich erlaubt</strong>{' '}
          und steuerrechtlich günstig für Arbeitnehmer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm sm:text-base">✅ Was erlaubt ist</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-green-800">
              <li>• Genau <strong>1 Minijob</strong> neben dem Hauptjob (bis 603 €/Monat)</li>
              <li>• Minijob-Verdienst wird <strong>nicht</strong> zum Hauptgehalt addiert</li>
              <li>• <strong>Keine Auswirkung</strong> auf Steuerklasse des Hauptjobs</li>
              <li>• Minijob bleibt sozialversicherungsfrei (für Arbeitnehmer)</li>
              <li>• Volle 603 € als Netto (oder mit RV-Abzug 3,6% ohne Befreiung)</li>
              <li>• Kein Eintrag des Nebenjobs in die Steuererklärung nötig</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-3 text-sm sm:text-base">❌ Was nicht erlaubt ist</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-red-800">
              <li>• Mehr als <strong>1 Minijob</strong> neben dem Hauptjob (2. Minijob wird mit Hauptjob zusammengerechnet)</li>
              <li>• Überschreitung der 603-Euro-Grenze im Nebenjob ohne Ausnahmetatbestand</li>
              <li>• Minijob beim <strong>selben Arbeitgeber</strong> wie der Hauptjob</li>
              <li>• Nebenjob, der im Widerspruch zu Konkurrenzklausel im Hauptarbeitsvertrag steht</li>
              <li>• Nebenjob ohne Anmeldung bei der Minijob-Zentrale (Schwarzarbeit)</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2 text-sm">⚠️ Achtung: Zweiter Minijob + Hauptjob</h3>
              <p className="text-xs sm:text-sm text-amber-900">
                Ein zweiter Minijob neben einem Hauptjob wird <strong>mit dem Hauptjob
                zusammengerechnet</strong>. Das bedeutet: Der zweite Minijob wird
                sozialversicherungspflichtig — und der Arbeitgeber muss vollen SV-Beiträge abführen.
                Nur der <em>erste</em> Minijob bleibt privilegiert.
              </p>
            </div>
          </div>
        </div>

        {/* Verdiensttabelle Beispiel */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Nebenjob Beispielrechnung 2026">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2 sm:p-3 text-left font-bold border border-blue-500">Situation</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Hauptjob</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Nebenjob</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Netto Nebenjob</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 Hauptjob + 1 Minijob', '2.500 € brutto', '500 € brutto', '500 € netto*', '✅ Ideal'],
                ['1 Hauptjob + 1 Minijob', '3.000 € brutto', '603 € brutto', '581 € netto**', '✅ OK'],
                ['1 Hauptjob + 2 Minijobs', '2.500 € brutto', '300 + 300 €', 'Volle SV bei 2. Job', '⚠️ Problematisch'],
                ['Hauptjob + Nebenjob > 603 €', '2.000 € brutto', '700 € brutto', 'Volle SV-Pflicht', '❌ Kein Minijob mehr'],
              ].map(([sit, hj, nj, netto, status], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{sit}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{hj}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{nj}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-700 border">{netto}</td>
                  <td className="p-2 sm:p-3 text-center font-bold border">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">* Mit RV-Befreiung | ** Ohne RV-Befreiung (3,6% Eigenbeitrag)</p>
        </div>
      </article>

      {/* ── Section 3: Genehmigung Arbeitgeber ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Brauche ich eine Erlaubnis vom Hauptarbeitgeber?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Gesetzlich sind Nebenjobs grundsätzlich erlaubt — aber der Hauptarbeitsvertrag kann
          Einschränkungen enthalten. Hier die wichtigsten Punkte:
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle size={22} className="text-green-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-green-900 text-sm mb-1">Kein generelles Verbot möglich</h3>
              <p className="text-xs sm:text-sm text-green-800">
                Ein pauschales Verbot von Nebenjobs im Arbeitsvertrag ist rechtlich unwirksam.
                Arbeitgeber können Nebenjobs nur einschränken, wenn ein legitimes betriebliches
                Interesse besteht.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 text-sm mb-1">Informationspflicht kann bestehen</h3>
              <p className="text-xs sm:text-sm text-amber-800">
                Viele Arbeitsverträge enthalten eine <strong>Anzeigepflicht</strong> für Nebentätigkeiten.
                Verstoßen Sie dagegen, können arbeitsrechtliche Konsequenzen drohen — auch wenn der
                Nebenjob inhaltlich unbedenklich ist.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertTriangle size={22} className="text-red-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 text-sm mb-1">Konkurrenzklausel beachten</h3>
              <p className="text-xs sm:text-sm text-red-800">
                Arbeiten Sie für einen direkten Wettbewerber Ihres Hauptarbeitgebers, kann dies
                gegen eine <strong>Wettbewerbsklausel</strong> verstoßen — auch als Minijob.
                Checken Sie Ihren Hauptarbeitsvertrag vor Aufnahme eines Nebenjobs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Info size={22} className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 text-sm mb-1">Arbeitszeitgesetz gilt für alle Jobs zusammen</h3>
              <p className="text-xs sm:text-sm text-blue-800">
                Das Arbeitszeitgesetz gilt für alle Beschäftigungen <strong>insgesamt</strong>.
                Die tägliche Höchstarbeitszeit von 8–10 Stunden gilt für Haupt- und Nebenjob zusammen.
                Überschreitungen sind eine Ordnungswidrigkeit — für die der Arbeitgeber des Nebenjobs haftet.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── Section 4: Steuern beim Nebenjob ── */}
      <article id="steuern-nebenjob" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Steuern beim Minijob als Nebenjob
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Beim Minijob als Nebenjob neben einem Hauptjob gibt es eine besonders günstige
          Steuerregelung: Die <strong>2%-Pauschsteuer</strong> zahlt der Arbeitgeber des Nebenjobs —
          Sie als Arbeitnehmer haben keinerlei steuerliche Pflichten aus dem Nebenjob.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-green-700 mb-1">0 €</p>
            <p className="text-xs font-semibold text-green-900">Lohnsteuer Arbeitnehmer</p>
            <p className="text-xs text-green-700 mt-1">AG zahlt 2% pauschal</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-blue-700 mb-1">Nein</p>
            <p className="text-xs font-semibold text-blue-900">Steuererklärungspflicht</p>
            <p className="text-xs text-blue-700 mt-1">Minijob muss nicht angegeben werden</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-purple-700 mb-1">Keine</p>
            <p className="text-xs font-semibold text-purple-900">Auswirkung auf Hauptjob-Steuer</p>
            <p className="text-xs text-purple-700 mt-1">Steuerklasse bleibt unverändert</p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-sm">💼 Beispielrechnung: Hauptjob + Minijob-Nebenjob</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <p className="font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">Hauptjob (Steuerklasse I)</p>
              <div className="space-y-1 text-gray-700">
                <div className="flex justify-between"><span>Brutto</span><strong>2.500 €</strong></div>
                <div className="flex justify-between"><span>Lohnsteuer ~14%</span><span>-350 €</span></div>
                <div className="flex justify-between"><span>Soli + KiSt</span><span>~-19 €</span></div>
                <div className="flex justify-between"><span>SV-Beiträge ~20%</span><span>-500 €</span></div>
                <div className="flex justify-between font-bold text-green-700 border-t border-gray-300 pt-1 mt-1"><span>Netto Hauptjob</span><span>~1.631 €</span></div>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">Nebenjob (Minijob)</p>
              <div className="space-y-1 text-gray-700">
                <div className="flex justify-between"><span>Brutto</span><strong>500 €</strong></div>
                <div className="flex justify-between"><span>Lohnsteuer (AG zahlt 2%)</span><span>0 €</span></div>
                <div className="flex justify-between"><span>RV-Beitrag (mit Befreiung)</span><span>0 €</span></div>
                <div className="flex justify-between"><span>KV, PV, ALV</span><span>0 €</span></div>
                <div className="flex justify-between font-bold text-green-700 border-t border-gray-300 pt-1 mt-1"><span>Netto Nebenjob</span><span>500 € ✅</span></div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between font-bold text-base">
            <span>Gesamtnetto</span>
            <span className="text-green-700">~2.131 € pro Monat</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-blue-700 mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-blue-800">
              <strong>💡 Hinweis Rentenversicherung:</strong> Im Nebenjob können Sie sich von der
              Rentenversicherungspflicht befreien lassen (Antrag beim Arbeitgeber). Dann gilt:
              Brutto = Netto. Ohne Befreiung zahlen Sie 3,6% RV-Beitrag (bei 500 € → 18 € Abzug).
              Ab Juli 2026 können Sie eine frühere Befreiung einmalig rückgängig machen.
            </p>
          </div>
        </div>
      </article>

      {/* ── Section 5: Besondere Gruppen ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob als Nebenjob für besondere Gruppen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: '🎓 Studenten & BAföG',
              color: 'blue',
              items: [
                'Minijob bis 603 €/Monat grundsätzlich erlaubt',
                'BAföG-Freibetrag: 520 €/Monat',
                'Pauschal besteuerter Minijob wird oft nicht auf BAföG angerechnet',
                'Studentenstatus bleibt bei Minijob erhalten',
                'Aber: Mehr als 20h/Woche kann immatrikulationsrechtliche Folgen haben',
              ],
            },
            {
              title: '👴 Rentner',
              color: 'green',
              items: [
                'Minijob bis 603 €/Monat problemlos möglich',
                'Seit 2023: Keine Hinzuverdienstgrenze für Altersrentner',
                'Kein negativer Einfluss auf Rentenhöhe',
                'Frührentner: Hinzuverdienstgrenzen individuell prüfen',
                'Keine Rentenversicherungspflicht (Pflichtbefreiung möglich)',
              ],
            },
            {
              title: '🤱 Elternzeit / Elterngeld',
              color: 'purple',
              items: [
                'Minijob bis 603 €/Monat während Elternzeit möglich',
                'Elterngeld: Minijob-Verdienst bis 300 €/Monat anrechnungsfrei',
                'Über 300 €: Elterngeld wird entsprechend reduziert',
                'Elterngeld Plus: anderes Anrechnungsmodell – prüfen!',
                'Arbeitszeit in Elternzeit: max. 32 Stunden/Woche',
              ],
            },
            {
              title: '🏥 Krankengeld / Arbeitslosengeld',
              color: 'orange',
              items: [
                'Krankengeld: Minijob-Verdienst wird angerechnet (Einzelfall)',
                'ALG I: Minijob-Verdienst bis 165 €/Monat anrechnungsfrei',
                'Über 165 €: volle Anrechnung auf ALG I',
                'ALG II (Bürgergeld): Freibetrag 100 € + 20% bis 520 €',
                'Immer beim zuständigen Träger anfragen!',
              ],
            },
          ].map((group, i) => (
            <div
              key={i}
              className={`rounded-lg p-4 border ${
                group.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                group.color === 'green' ? 'bg-green-50 border-green-200' :
                group.color === 'purple' ? 'bg-purple-50 border-purple-200' :
                'bg-orange-50 border-orange-200'
              }`}
            >
              <h3 className={`font-bold mb-3 text-sm sm:text-base ${
                group.color === 'blue' ? 'text-blue-900' :
                group.color === 'green' ? 'text-green-900' :
                group.color === 'purple' ? 'text-purple-900' :
                'text-orange-900'
              }`}>{group.title}</h3>
              <ul className={`space-y-1.5 text-xs sm:text-sm ${
                group.color === 'blue' ? 'text-blue-800' :
                group.color === 'green' ? 'text-green-800' :
                group.color === 'purple' ? 'text-purple-800' :
                'text-orange-800'
              }`}>
                {group.items.map((item, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          💡 Nebenjob Netto sofort berechnen
        </h2>
        <p className="text-blue-100 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Mit unserem Minijob-Rechner berechnen Sie in Sekunden Ihr genaues Netto aus dem
          Nebenjob — mit der aktuellen Grenze von 603 € für 2026.
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
          <Link href="/minijob-steuern" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Steuern 2026 – Pauschsteuer erklärt
          </Link>
          <Link href="/minijob-verdienstgrenze" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Verdienstgrenze 2026 – 603 Euro im Detail
          </Link>
          <Link href="/minijob-stunden" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Stunden 2026 – Stundentabelle
          </Link>
          <Link href="/minijob-grenze-2026" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Grenze 2026 – Alle Details
          </Link>
          <Link href="/minijob-kosten-arbeitgeber" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Kosten Arbeitgeber – Pauschalabgaben 2026
          </Link>
        </div>
      </div>

    </section>
  )
}
