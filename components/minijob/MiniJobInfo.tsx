import Link from 'next/link'

export default function MiniJobInfo() {
  return (
    <section id="erklaerung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8 space-y-8">

      {/* Netto calculation explained */}
      <article>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Minijob Netto berechnen: So funktioniert die Rechnung
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Beim Minijob übernimmt der Arbeitgeber alle Pauschalabgaben. Für den Arbeitnehmer gibt es
          im Wesentlichen nur eine mögliche Abzugsposition — den Rentenversicherungsbeitrag:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-2 text-sm">✅ Mit Befreiung von der Rentenversicherung</h3>
            <p className="text-xs text-green-800 leading-relaxed mb-2">
              Netto = Brutto — keine Abzüge für den Arbeitnehmer
            </p>
            <p className="text-xs text-green-700">
              Beispiel: 603€ Brutto = <strong>603€ Netto</strong>
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2 text-sm">💡 Ohne Befreiung (Rentenversicherungspflicht)</h3>
            <p className="text-xs text-blue-800 leading-relaxed mb-2">
              Netto = Brutto − 3,6% Rentenversicherungsbeitrag
            </p>
            <p className="text-xs text-blue-700">
              Beispiel: 603€ − 21,71€ RV = <strong>581,29€ Netto</strong>
            </p>
          </div>
        </div>
      </article>

      {/* Rentenversicherung */}
      <article>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Rentenversicherung im Minijob</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Seit 2013 sind Minijobber automatisch in der gesetzlichen Rentenversicherung pflichtversichert
          und zahlen einen <strong>Eigenbeitrag von 3,6%</strong> ihres Bruttogehalts — bei 603€ also
          21,71€ monatlich. Diese Beiträge zählen später für die Rente. Eine{' '}
          <strong>Befreiung</strong> ist auf Antrag möglich: Dann erhalten Sie das volle Bruttogehalt
          als Netto, bauen aber keine Rentenansprüche aus diesem Job auf. Beide Varianten können Sie
          oben im Rechner direkt vergleichen.
        </p>
      </article>

      {/* Pauschalabgaben breakdown */}
      <article>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Gewerblicher Minijob oder Privathaushalt?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6">
          Der Rechner unterscheidet zwischen beiden Varianten, weil sich die{' '}
          <strong>Pauschalabgaben</strong> für den Arbeitgeber deutlich unterscheiden. Am Nettolohn
          des Arbeitnehmers ändert das nichts — die Ersparnis liegt allein beim Arbeitgeber:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <article className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-bold text-orange-900 mb-3 text-sm sm:text-base">🏢 Gewerblicher Minijob</h3>
            <p className="text-xs text-orange-700 mb-3">z.B. Einzelhandel, Gastronomie, Büro, Produktion</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-orange-900">
              <li className="flex justify-between"><span>Krankenversicherung</span><strong>13,00%</strong></li>
              <li className="flex justify-between"><span>Rentenversicherung</span><strong>15,00%</strong></li>
              <li className="flex justify-between"><span>Pauschale Lohnsteuer</span><strong>2,00%</strong></li>
              <li className="flex justify-between"><span>U1-Umlage (Krankheit)</span><strong>0,80%</strong></li>
              <li className="flex justify-between"><span>U2-Umlage (Mutterschaft)</span><strong>0,22%</strong></li>
              <li className="flex justify-between"><span>U3-Umlage (Insolvenz)</span><strong>0,15%</strong></li>
              <li className="flex justify-between"><span>Unfallversicherung</span><strong>~1,30%</strong></li>
              <li className="flex justify-between border-t border-orange-300 pt-2 mt-1 font-bold text-base">
                <span>Gesamt</span><span>32,47%</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-orange-700">
              Gesamtaufwand bei Maximalverdienst: ca. <strong>798€</strong> für den Arbeitgeber
            </p>
          </article>
          <article className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-900 mb-3 text-sm sm:text-base">🏠 Privathaushalt-Minijob</h3>
            <p className="text-xs text-green-700 mb-3">z.B. Haushaltshilfe, Kinderbetreuung, Gartenpflege</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-green-900">
              <li className="flex justify-between"><span>Krankenversicherung</span><strong>5,00%</strong></li>
              <li className="flex justify-between"><span>Rentenversicherung</span><strong>5,00%</strong></li>
              <li className="flex justify-between"><span>Pauschale Lohnsteuer</span><strong>2,00%</strong></li>
              <li className="flex justify-between"><span>U1-Umlage (Krankheit)</span><strong>0,80%</strong></li>
              <li className="flex justify-between"><span>U2-Umlage (Mutterschaft)</span><strong>0,22%</strong></li>
              <li className="flex justify-between"><span>U3-Umlage (Insolvenz)</span><strong>0,00%</strong></li>
              <li className="flex justify-between"><span>Unfallversicherung</span><strong>~1,60%</strong></li>
              <li className="flex justify-between border-t border-green-300 pt-2 mt-1 font-bold text-base">
                <span>Gesamt</span><span>14,62%</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-green-700">
              Gesamtaufwand bei Maximalverdienst: ca. <strong>691€</strong> — 109€ günstiger!
            </p>
          </article>
        </div>
      </article>

      {/* Internal links to related pages */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
        <h2 className="font-bold text-gray-900 mb-3 text-base">🔗 Weitere hilfreiche Rechner & Infos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/minijob-grenze-2026" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Grenze 2026 – Alle Regelungen & Stundentabelle
          </Link>
          <Link href="/minijob-verdienstgrenze" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Verdienstgrenze 2026 – 603 Euro erklärt
          </Link>
          <Link href="/minijob-steuern" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Steuern 2026 – Pauschsteuer & Lohnsteuer
          </Link>
          <Link href="/minijob-stunden" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Stunden 2026 – Stundentabelle & Berechnung
          </Link>
          <Link href="/minijob-nebenjob" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Nebenjob – Neben Hauptjob, Student & Rentner
          </Link>
          <Link href="/minijob-kosten-arbeitgeber" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Minijob Kosten Arbeitgeber – Pauschalabgaben 2026
          </Link>
          <Link href="/midijob-rechner" className="flex items-center gap-2 text-sm text-blue-700 hover:underline font-medium">
            → Midijob Rechner 2026 (Gleitzone 603€–2.000€)
          </Link>
        </div>
      </div>

    </section>
  )
}
