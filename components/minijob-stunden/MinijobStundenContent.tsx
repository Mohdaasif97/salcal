import { CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Link from 'next/link'

export default function MinijobStundenContent() {
  return (
    <section className="space-y-8">

      {/* ── Section 1: Grundlagen Stunden ── */}
      <article id="stunden-berechnung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Wie viele Stunden darf man im Minijob arbeiten? 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Das ist einer der häufigsten Irrtümer: <strong>Es gibt keine gesetzliche Stundenbegrenzung
          beim Minijob!</strong> Es gibt keine 10-Stunden-Regel oder eine ähnliche feste Stundengrenze.
          Entscheidend ist ausschließlich, dass der <strong>monatliche Verdienst die Grenze von
          603 Euro</strong> (Stand 2026) nicht übersteigt.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Wie viele Stunden Sie arbeiten dürfen, hängt allein von Ihrem <strong>Stundenlohn</strong> ab.
          Formel: <em>Maximale Stunden = 603 € ÷ Stundenlohn</em>. Die Stunden können flexibel
          über den Monat verteilt werden — keine wöchentliche Grenze gilt.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="font-bold text-blue-900 mb-4 text-base sm:text-lg">
            ✓ Das Wichtigste zu Minijob Stunden 2026:
          </h3>
          <ul className="space-y-3">
            {[
              'Keine gesetzliche Stundenbegrenzung – der Monatsverdienst entscheidet',
              'Formel: Maximale Stunden = 603 € ÷ Stundenlohn',
              'Bei Mindestlohn (13,90 €/h): max. ~43 Stunden pro Monat (≈ 10 Std./Woche)',
              'Stunden können flexibel über Wochen und Monate verteilt werden',
              'Kein festes Verhältnis zwischen Wochen- und Monatsstunden vorgeschrieben',
              'Überstunden möglich – solange der Monatsverdienst 603 € nicht übersteigt',
              'Bei höherem Stundenlohn: entsprechend weniger erlaubte Stunden',
              'Mehrere Jobs: Gesamtstunden/Verdienst aus allen Minijobs wird zusammengezählt',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-blue-900">
                <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
          <h3 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">📐 Formel zur Stundenberechnung</h3>
          <div className="font-mono text-sm bg-white border border-gray-300 rounded p-3 mb-3">
            <p className="text-blue-700 font-bold">Maximale Stunden/Monat = 603 € ÷ Stundenlohn</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="bg-blue-50 rounded p-3 text-center border border-blue-200">
              <p className="text-blue-600 font-semibold">Bei 13,90 €/h</p>
              <p className="text-xl font-bold text-blue-900">43,4 Std.</p>
              <p className="text-blue-600 text-xs">~10,0 Std./Woche</p>
            </div>
            <div className="bg-green-50 rounded p-3 text-center border border-green-200">
              <p className="text-green-600 font-semibold">Bei 15,00 €/h</p>
              <p className="text-xl font-bold text-green-900">40,2 Std.</p>
              <p className="text-green-600 text-xs">~9,3 Std./Woche</p>
            </div>
            <div className="bg-purple-50 rounded p-3 text-center border border-purple-200">
              <p className="text-purple-600 font-semibold">Bei 20,00 €/h</p>
              <p className="text-xl font-bold text-purple-900">30,2 Std.</p>
              <p className="text-purple-600 text-xs">~7,0 Std./Woche</p>
            </div>
          </div>
        </div>
      </article>

      {/* ── Section 2: Stundentabelle ── */}
      <article id="stundentabelle" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Stundentabelle 2026 – alle Stundenlöhne
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Die folgende Tabelle zeigt, wie viele Stunden pro Monat und Woche bei verschiedenen
          Stundenlöhnen erlaubt sind — bei der aktuellen Verdienstgrenze von 603 Euro.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Stundentabelle 2026">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2 sm:p-3 text-left font-bold border border-blue-500">Stundenlohn</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Max. Stunden/Monat</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Max. Stunden/Woche</th>
                <th className="p-2 sm:p-3 text-center font-bold border border-blue-500">Max. Stunden/Jahr</th>
                <th className="p-2 sm:p-3 text-left font-bold border border-blue-500">Monatsverdienst</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['13,90 € (Mindestlohn)', '43,38 Std.', '~10,0 Std.', '520,6 Std.', '603,00 €'],
                ['14,00 €', '43,07 Std.', '~9,9 Std.', '516,9 Std.', '603,00 €'],
                ['14,50 €', '41,59 Std.', '~9,6 Std.', '499,1 Std.', '603,00 €'],
                ['15,00 €', '40,20 Std.', '~9,3 Std.', '482,4 Std.', '603,00 €'],
                ['16,00 €', '37,69 Std.', '~8,7 Std.', '452,3 Std.', '603,00 €'],
                ['17,00 €', '35,47 Std.', '~8,2 Std.', '425,6 Std.', '603,00 €'],
                ['18,00 €', '33,50 Std.', '~7,7 Std.', '402,0 Std.', '603,00 €'],
                ['19,00 €', '31,74 Std.', '~7,3 Std.', '380,8 Std.', '603,00 €'],
                ['20,00 €', '30,15 Std.', '~7,0 Std.', '361,8 Std.', '603,00 €'],
                ['22,00 €', '27,41 Std.', '~6,3 Std.', '328,9 Std.', '603,00 €'],
                ['25,00 €', '24,12 Std.', '~5,6 Std.', '289,4 Std.', '603,00 €'],
                ['30,00 €', '20,10 Std.', '~4,6 Std.', '241,2 Std.', '603,00 €'],
                ['35,00 €', '17,23 Std.', '~4,0 Std.', '206,7 Std.', '603,00 €'],
                ['40,00 €', '15,08 Std.', '~3,5 Std.', '180,9 Std.', '603,00 €'],
                ['50,00 €', '12,06 Std.', '~2,8 Std.', '144,7 Std.', '603,00 €'],
              ].map(([lohn, monat, woche, jahr, verdienst], i) => (
                <tr
                  key={i}
                  className={
                    i === 0
                      ? 'bg-blue-50 font-semibold'
                      : i % 2 === 0
                      ? 'bg-white'
                      : 'bg-gray-50'
                  }
                >
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{lohn}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-600 border">{monat}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{woche}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{jahr}</td>
                  <td className="p-2 sm:p-3 font-bold text-green-600 border">{verdienst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
            <strong>📌 Hinweis zur Tabelle:</strong> Alle Werte sind Maximalwerte bei exakter Ausnutzung
            der Verdienstgrenze von 603 Euro. In der Praxis empfiehlt sich ein kleiner Puffer
            (z.B. 590–600 €), um unbeabsichtigte Überschreitungen durch Rundungen zu vermeiden.
            Wochenstunden wurden bei 4,33 Wochen/Monat berechnet.
          </p>
        </div>
      </article>

      {/* ── Section 3: Flexible Stundenverteilung ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Flexible Stundenverteilung im Minijob
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Die Stunden müssen <strong>nicht gleichmäßig</strong> über die Woche oder den Monat
          verteilt werden. Es gibt volle Flexibilität — Hauptsache, der Monatsverdienst bleibt
          unter 603 Euro. Bei schwankendem Verdienst (z.B. Saisonarbeit) kann sogar der
          Jahresdurchschnitt entscheiden.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm">✅ Flexibilität bei Minijob-Stunden</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-green-800">
              <li>• Stunden frei über die Woche verteilbar</li>
              <li>• Keine Mindest-Stundenzahl pro Woche vorgeschrieben</li>
              <li>• Mehr Stunden in manchen Wochen, weniger in anderen</li>
              <li>• Auch unregelmäßige Beschäftigung möglich (z.B. nur samstags)</li>
              <li>• Monatlicher Verdienst ist die einzige Grenze</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-3 text-sm">📋 Schwankender Verdienst erlaubt</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-800">
              <li>• Monat 1: 400 € (weniger Stunden)</li>
              <li>• Monat 2: 603 € (volle Auslastung)</li>
              <li>• Monat 3: 200 € (wenig Einsätze)</li>
              <li>• Jahresdurchschnitt entscheidend: ≤ 603 €/Monat</li>
              <li>• Max. 2× im Jahr bis 1.206 € erlaubt</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2 text-sm">⚠️ Achtung: Arbeitszeitgesetz gilt auch für Minijobber!</h3>
              <p className="text-xs sm:text-sm text-amber-900">
                Auch wenn es keine Minijob-Stundenbegrenzung gibt, gelten das{' '}
                <strong>Arbeitszeitgesetz (ArbZG)</strong> und das{' '}
                <strong>Mindestlohngesetz (MiLoG)</strong> für Minijobber. Konkret:
                max. 8 Stunden täglich (Ausnahme: bis 10 Stunden bei Ausgleich), Ruhezeiten und
                Mindeststundenlohn von 13,90 € müssen eingehalten werden.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── Section 4: Minijob Stunden & Teilzeit/Vollzeit ── */}
      <article id="teilzeit" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Stunden: Teilzeit vs. Vollzeit
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Beim Mindestlohn entsprechen die maximal erlaubten Minijob-Stunden einer{' '}
          <strong>Teilzeitstelle von rund 10 Stunden pro Woche</strong>. Im Vergleich zu
          anderen Arbeitsmodellen:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Vergleich Minijob vs Teilzeit vs Vollzeit Stunden">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold text-gray-900 border">Beschäftigungsform</th>
                <th className="p-3 text-center font-bold text-gray-900 border">Std./Woche</th>
                <th className="p-3 text-center font-bold text-gray-900 border">Std./Monat</th>
                <th className="p-3 text-center font-bold text-gray-900 border">Verdienst (Mindestlohn)</th>
                <th className="p-3 text-center font-bold text-gray-900 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Minijob (Mindestlohn)', '~10 Std.', '~43 Std.', '603 €', 'Minijob ✅'],
                ['Minijob (15 €/h)', '~9,3 Std.', '~40 Std.', '603 €', 'Minijob ✅'],
                ['Minijob (20 €/h)', '~7 Std.', '~30 Std.', '603 €', 'Minijob ✅'],
                ['Midijob (Mindestlohn)', '~11–16 Std.', '~50–70 Std.', '604–2.000 €', 'Midijob ⚠️'],
                ['Teilzeit', '20 Std.', '87 Std.', '1.209 €', 'SV-pflichtig'],
                ['Vollzeit', '40 Std.', '173 Std.', '2.409 €', 'SV-pflichtig'],
              ].map(([form, woche, monat, verdienst, status], i) => (
                <tr
                  key={i}
                  className={
                    i < 3 ? 'bg-blue-50' : i === 3 ? 'bg-yellow-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }
                >
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{form}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{woche}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{monat}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-green-700 border">{verdienst}</td>
                  <td className="p-2 sm:p-3 text-center font-bold border">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-blue-700 mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-blue-800">
              <strong>💡 Tipp:</strong> Wer knapp über der Minijob-Grenze verdient (603–2.000 €),
              fällt in die <strong>Midijob-Zone (Gleitzone)</strong>. Hier gelten reduzierte
              Sozialversicherungsbeiträge — ein guter Kompromiss zwischen Minijob und
              regulärer Beschäftigung.{' '}
              <Link href="/midijob-rechner" className="underline font-semibold">
                Midijob-Rechner →
              </Link>
            </p>
          </div>
        </div>
      </article>

      {/* ── Section 5: Stunden bei mehreren Jobs ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Stunden bei mehreren Minijobs: Was gilt?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Wer mehrere geringfügige Jobs ausübt, muss die <strong>Verdienste aller Minijobs
          zusammenzählen</strong>. Die Stunden selbst werden nicht zusammengezählt —
          aber der Gesamtverdienst darf 603 Euro/Monat nicht überschreiten.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-sm">Beispiel: 2 Minijobs gleichzeitig</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-white rounded-lg p-3 border border-gray-300 text-center">
              <p className="font-bold text-gray-900 mb-2">Job A</p>
              <p>15 €/h × 20 Std. = <strong className="text-blue-600">300 €</strong></p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-300 text-center">
              <p className="font-bold text-gray-900 mb-2">Job B</p>
              <p>15 €/h × 20 Std. = <strong className="text-blue-600">300 €</strong></p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-300 text-center">
              <p className="font-bold text-green-900 mb-2">Gesamt ✅</p>
              <p>40 Std. = <strong className="text-green-700">600 €</strong></p>
              <p className="text-green-600 text-xs">Unter 603 € → Minijob OK</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900 mb-2 text-sm">❌ Vorsicht: Gesamtverdienst zu hoch</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm mb-3">
            <div className="bg-white rounded-lg p-3 border border-red-200 text-center">
              <p className="font-bold text-gray-900">Job A: 15 €/h × 25 Std.</p>
              <p className="text-red-600 font-bold">= 375 €</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-red-200 text-center">
              <p className="font-bold text-gray-900">Job B: 15 €/h × 25 Std.</p>
              <p className="text-red-600 font-bold">= 375 €</p>
            </div>
            <div className="bg-red-100 rounded-lg p-3 border border-red-300 text-center">
              <p className="font-bold text-red-900">Gesamt ❌</p>
              <p className="text-red-700 font-bold">750 € {'>'} 603 €</p>
              <p className="text-red-600 text-xs">SV-Pflicht für beide Jobs!</p>
            </div>
          </div>
        </div>
      </article>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          💡 Stunden & Netto sofort berechnen
        </h2>
        <p className="text-blue-100 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Mit unserem Minijob-Rechner geben Sie einfach Stundenlohn und Stunden ein —
          und erhalten sofort Ihren Nettolohn und die Arbeitgeberkosten für 2026.
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
          <Link href="/minijob-steuern" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Steuern 2026 – Pauschsteuer & Lohnsteuer
          </Link>
          <Link href="/minijob-nebenjob" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Nebenjob – Neben Hauptjob, Student & Rentner
          </Link>
          <Link href="/minijob-grenze-2026" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Grenze 2026 – Alle Details
          </Link>
          <Link href="/midijob-rechner" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Midijob Rechner 2026 (Gleitzone 603–2.000 €)
          </Link>
        </div>
      </div>

    </section>
  )
}
