import { CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Link from 'next/link'

export default function MinijobSteuernContent() {
  return (
    <section className="space-y-8">

      {/* ── Section 1: Grundlagen ── */}
      <article id="steuern-grundlagen" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Steuern 2026 – Grundlagen
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Ein häufiger Irrtum: <strong>Minijobs sind nicht steuerfrei!</strong> Steuern fallen jedoch
          in der Regel <strong>nicht beim Arbeitnehmer</strong> an, sondern werden vom Arbeitgeber
          pauschal abgeführt. Als Arbeitnehmer erhalten Sie im Regelfall Ihren Bruttolohn
          ohne Abzüge — der Arbeitgeber übernimmt die Steuerlast.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Es gibt zwei Wege, einen Minijob zu besteuern: die <strong>einheitliche Pauschsteuer (2%)</strong>{' '}
          oder die <strong>individuelle Besteuerung nach Lohnsteuerklasse</strong>. Der Arbeitgeber
          entscheidet, welche Methode angewendet wird — hat dabei aber die steuerliche Situation
          des Arbeitnehmers zu beachten.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm sm:text-base">✅ Option 1: Pauschsteuer 2%</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-green-800">
              <li>• Arbeitgeber zahlt <strong>2% des Bruttolohns</strong> an Minijob-Zentrale</li>
              <li>• Deckt Lohnsteuer, Solidaritätszuschlag und Kirchensteuer ab</li>
              <li>• Arbeitnehmer zahlt <strong>keine eigenen Steuern</strong></li>
              <li>• Minijob muss <strong>nicht</strong> in Steuererklärung angegeben werden</li>
              <li>• Gilt für Minijobs mit Verdienstgrenze (bis 603 €/Monat)</li>
              <li>• Voraussetzung: Arbeitgeber führt RV-Pauschalbeiträge ab</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-3 text-sm sm:text-base">📋 Option 2: Individuelle Besteuerung</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-800">
              <li>• Besteuerung nach der <strong>persönlichen Steuerklasse</strong> (ELStAM)</li>
              <li>• Lohnsteuer hängt vom Gesamteinkommen ab</li>
              <li>• Bei Steuerklasse I–IV oft <strong>keine Lohnsteuer</strong> (bei niedrigem Verdienst)</li>
              <li>• Minijob <strong>muss</strong> in der Steuererklärung angegeben werden (Anlage N)</li>
              <li>• Kann sinnvoll sein, wenn Minijob einziges Einkommen ist (Erstattung möglich)</li>
              <li>• Lohnsteuer geht direkt ans <strong>Finanzamt</strong> (nicht Minijob-Zentrale)</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-amber-700 mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-amber-900">
              <strong>💡 Tipp:</strong> Liegt Ihr Gesamteinkommen inklusive Minijob unterhalb des
              Grundfreibetrags (2026: 11.784 €/Jahr), sollten Sie die Pauschalbesteuerung vermeiden.
              Bei individueller Besteuerung beträgt Ihr persönlicher Steuersatz 0% —
              und Sie sparen die 2% Pauschsteuer.
            </p>
          </div>
        </div>
      </article>

      {/* ── Section 2: Pauschsteuer im Detail ── */}
      <article id="pauschalsteuer" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Die 2%-Pauschsteuer im Minijob – So funktioniert es
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Die <strong>einheitliche Pauschsteuer von 2%</strong> ist die gängigste Besteuerungsform
          bei Minijobs mit Verdienstgrenze. Sie ist geregelt in § 40a EStG (Einkommensteuergesetz)
          und wird über die Minijob-Zentrale abgeführt.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">📊 Beispielrechnung: Pauschsteuer bei 603 € Brutto</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-2 sm:p-3 text-left font-bold border border-blue-500">Posten</th>
                  <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Arbeitnehmer</th>
                  <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Arbeitgeber</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bruttolohn', '603,00 €', '603,00 €'],
                  ['Pauschsteuer 2%', '0,00 € (AG trägt)', '12,06 €'],
                  ['RV-Eigenbeitrag 3,6% (ohne Befreiung)', '21,71 €', '–'],
                  ['KV-Pauschale 13%', '– (AG zahlt)', '78,39 €'],
                  ['RV-Pauschale 15%', '– (AG zahlt)', '90,45 €'],
                  ['U1-Umlage 0,80%', '–', '4,82 €'],
                  ['U2-Umlage 0,22%', '–', '1,33 €'],
                  ['U3-Umlage 0,15%', '–', '0,90 €'],
                  ['Unfallversicherung ~1,30%', '–', '~7,84 €'],
                  ['Nettolohn / Gesamtkosten AG', '581,29 € (ohne Befreiung)', '~798,79 €'],
                ].map(([posten, an, ag], i) => (
                  <tr key={i} className={i === 9 ? 'bg-blue-50 font-bold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{posten}</td>
                    <td className={`p-2 sm:p-3 text-center border ${i === 9 ? 'text-green-700 font-bold' : 'text-gray-700'}`}>{an}</td>
                    <td className={`p-2 sm:p-3 text-center border ${i === 9 ? 'text-orange-700 font-bold' : 'text-gray-700'}`}>{ag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">* Mit Befreiung von der RV: Nettolohn = 603 € (= Brutto)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-2 text-sm">✅ Wann ist die Pauschsteuer sinnvoll?</h3>
            <ul className="space-y-1 text-xs sm:text-sm text-green-800">
              <li>• Arbeitnehmer hat weiteres Einkommen (kein Risiko der Steuerpflicht)</li>
              <li>• Einfache Abwicklung: kein Eintrag in die Steuererklärung</li>
              <li>• Arbeitgeber übernimmt die Steuer (gängige Praxis)</li>
              <li>• Lohnsteuerklasse V oder VI liegt vor (sonst teurer)</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-bold text-orange-900 mb-2 text-sm">⚠️ Wann ist individuelle Steuer besser?</h3>
            <ul className="space-y-1 text-xs sm:text-sm text-orange-800">
              <li>• Minijob ist das einzige oder geringe Einkommen</li>
              <li>• Jahresverdienst liegt unter dem Grundfreibetrag</li>
              <li>• Steuerklasse I oder II: Erstattung über Steuererklärung möglich</li>
              <li>• Arbeitnehmer möchte Werbungskosten geltend machen</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">📋 Was deckt die 2%-Pauschsteuer ab?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-blue-800">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 shrink-0" />
              <span>Lohnsteuer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 shrink-0" />
              <span>Solidaritätszuschlag</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 shrink-0" />
              <span>Kirchensteuer</span>
            </div>
          </div>
          <p className="text-xs text-blue-700 mt-3">
            Die Pauschsteuer gilt als abgeltend. Arbeitnehmer müssen den Minijob-Verdienst
            damit <strong>nicht in der Steuererklärung</strong> angeben.
          </p>
        </div>
      </article>

      {/* ── Section 3: Abwälzung der Pauschsteuer ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Kann der Arbeitgeber die Pauschsteuer auf den Minijobber abwälzen?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Ja — der Arbeitgeber darf die 2%-Pauschsteuer <strong>auf den Arbeitnehmer abwälzen</strong>.
          Das bedeutet: Er zieht die 2% vom Lohn des Minijobbers ab und zahlt ihm weniger aus.
          Dies muss jedoch im Arbeitsvertrag vereinbart sein.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-sm">Beispiel: Abwälzung bei 300 € Verdienst</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="font-bold text-green-900 mb-2">AG trägt Pauschsteuer:</p>
              <p className="text-green-800">Verdienst: 300 €</p>
              <p className="text-green-800">Pauschsteuer: 6 € (zahlt AG)</p>
              <p className="font-bold text-green-900 mt-2">Netto Arbeitnehmer: 300 €</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="font-bold text-orange-900 mb-2">Abwälzung auf Arbeitnehmer:</p>
              <p className="text-orange-800">Verdienst: 300 €</p>
              <p className="text-orange-800">Pauschsteuer: 6 € (zahlt AN)</p>
              <p className="font-bold text-orange-900 mt-2">Netto Arbeitnehmer: 294 €</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-700 mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-amber-900">
              <strong>⚠️ Wichtig:</strong> Auch bei Abwälzung muss der Arbeitnehmer den Minijob{' '}
              <strong>nicht</strong> in seiner Steuererklärung angeben. Die Pauschsteuer gilt in
              jedem Fall als abgeltend. Ob die Steuer auf den Arbeitnehmer abgewälzt wird,
              ist eine Frage des Arbeitsvertrags — nicht des Steuerrechts.
            </p>
          </div>
        </div>
      </article>

      {/* ── Section 4: Steuererklärung ── */}
      <article id="steuererklarung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Muss der Minijob in die Steuererklärung?
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold text-gray-900 border">Besteuerungsform</th>
                <th className="p-3 text-center font-bold text-gray-900 border">Steuererklärung?</th>
                <th className="p-3 text-left font-bold text-gray-900 border">Hinweis</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Pauschsteuer 2% – AG trägt Steuer', '❌ Nein', 'Gilt als abgegolten – kein Eintrag nötig'],
                ['Pauschsteuer 2% – AN trägt Steuer (Abwälzung)', '❌ Nein', 'Auch bei Abwälzung gilt Abgeltungswirkung'],
                ['Individuelle Besteuerung nach Steuerklasse', '✅ Ja', 'In Anlage N angeben; Erstattung möglich'],
                ['Mehrere Minijobs ohne Hauptjob (>603 € gesamt)', '✅ Ja', 'Sozialversicherungspflicht; reguläre Steuerpflicht'],
              ].map(([form, erkl, hinweis], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{form}</td>
                  <td className="p-2 sm:p-3 text-center font-bold border">{erkl}</td>
                  <td className="p-2 sm:p-3 text-gray-700 border text-xs">{hinweis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2 text-sm">📅 Steuererklärungsfrist 2026</h3>
          <p className="text-xs sm:text-sm text-blue-800">
            Die Frist für die Steuererklärung 2025 endet am <strong>31. Juli 2026</strong>. Bei
            Steuerberatung verlängert sich die Frist bis Ende Februar 2027. Wer nur einen pauschal
            besteuerten Minijob hat, muss keine Steuererklärung abgeben.
          </p>
        </div>
      </article>

      {/* ── Section 5: Minijob im Privathaushalt ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob-Steuern im Privathaushalt 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Minijobs im Privathaushalt (Haushaltshilfe, Babysitter, Reinigungskraft etc.) werden
          steuerlich genauso behandelt wie gewerbliche Minijobs. Der Unterschied liegt bei den
          Sozialabgaben des Arbeitgebers, die im Haushalt deutlich geringer sind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-3 text-sm">🏢 Gewerblicher Arbeitgeber</h3>
            <ul className="space-y-1 text-xs sm:text-sm text-blue-800">
              <li className="flex justify-between"><span>KV-Pauschale</span><strong>13,00 %</strong></li>
              <li className="flex justify-between"><span>RV-Pauschale</span><strong>15,00 %</strong></li>
              <li className="flex justify-between"><span>Pauschsteuer</span><strong>2,00 %</strong></li>
              <li className="flex justify-between border-t border-blue-200 mt-2 pt-2"><span>Gesamt</span><strong>~32,47 %</strong></li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm">🏠 Privathaushalt</h3>
            <ul className="space-y-1 text-xs sm:text-sm text-green-800">
              <li className="flex justify-between"><span>KV-Pauschale</span><strong>5,00 %</strong></li>
              <li className="flex justify-between"><span>RV-Pauschale</span><strong>5,00 %</strong></li>
              <li className="flex justify-between"><span>Pauschsteuer</span><strong>2,00 %</strong></li>
              <li className="flex justify-between border-t border-green-200 mt-2 pt-2"><span>Gesamt</span><strong>~14,92 %</strong></li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-bold text-green-900 mb-2 text-sm">💰 Steuerbonus für Privathaushalt-Arbeitgeber</h3>
          <p className="text-xs sm:text-sm text-green-800">
            Privatpersonen, die eine Haushaltshilfe über die Minijob-Zentrale anmelden, können{' '}
            <strong>20% der Lohnkosten (max. 510 €/Jahr)</strong> direkt von ihrer Steuerschuld
            abziehen (§ 35a EStG). Das sind bis zu 510 Euro Steuerersparnis pro Jahr — zusätzlich
            zu den günstigeren Pauschalbeiträgen im Haushalt.
          </p>
        </div>
      </article>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          💡 Minijob Netto sofort berechnen
        </h2>
        <p className="text-blue-100 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Mit unserem Minijob-Rechner berechnen Sie Ihr genaues Netto und die Steuerbelastung
          sofort — kostenlos und aktuell für 2026.
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
          <Link href="/minijob-verdienstgrenze" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Verdienstgrenze 2026 – 603 Euro erklärt
          </Link>
          <Link href="/minijob-stunden" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Stunden 2026 – Stundentabelle & Berechnung
          </Link>
          <Link href="/minijob-kosten-arbeitgeber" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Kosten Arbeitgeber – alle Pauschalabgaben
          </Link>
          <Link href="/minijob-grenze-2026" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Grenze 2026 – Übersicht
          </Link>
          <Link href="/minijob-nebenjob" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob als Nebenjob – Steuerliche Besonderheiten
          </Link>
        </div>
      </div>

    </section>
  )
}
