import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function MiniJobInfo() {
  const features = [
    'Verdienstgrenze: 603€ pro Monat (gekoppelt an Mindestlohn von 13,90€/h)',
    'Keine Stundenbegrenzung – nur die monatliche Verdienstgrenze ist relevant',
    'Rentenversicherung: Seit 2013 automatisch Pflicht (3,6% Eigenbeitrag), Befreiung möglich',
    'Pauschalabgaben für Arbeitgeber statt normale Sozialversicherungsbeiträge',
    'Pauschale Lohnsteuer (2%) wird vom Arbeitgeber bezahlt – nicht vom Arbeitnehmer',
    'Minijobber haben volle gesetzliche Rechte: Urlaub, Lohnfortzahlung, Unfallschutz',
    'Einfache Online-Anmeldung bei der Minijob-Zentrale (minijob-netto-rechner.de)',
  ]

  return (
    <section id="erklaerung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8 space-y-8">

      {/* Definition */}
      <article>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Was ist ein Minijob? Definition & Grenze 2026</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Der Begriff <strong>Minijob</strong> wird offiziell als <strong>geringfügige Beschäftigung</strong> nach{' '}
          § 8 SGB IV bezeichnet. Ein Minijob ist eine Beschäftigung in Deutschland, bei der das monatliche
          Arbeitsentgelt die <strong>Geringfügigkeitsgrenze von 603 Euro</strong> (Stand 2026) nicht überschreitet.
          Diese Grenze ist direkt an den gesetzlichen <strong>Mindestlohn von 13,90 Euro pro Stunde</strong> gekoppelt
          und wird automatisch angepasst, wenn der Mindestlohn steigt.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Das Besondere bei Minijobs: Der Arbeitgeber zahlt keine normalen Sozialversicherungsbeiträge, sondern{' '}
          <strong>Pauschalabgaben</strong> an die Minijob-Zentrale. Der Arbeitnehmer erhält das Bruttogehalt in der
          Regel vollständig als Netto — ohne Abzüge für Kranken-, Pflege- oder Arbeitslosenversicherung.
          Lediglich der <strong>Rentenversicherungsbeitrag von 3,6%</strong> kann vom Arbeitnehmer zu zahlen sein,
          sofern keine Befreiung beantragt wurde.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          <strong>Wichtig:</strong> Es gibt KEINE gesetzliche Stundenbegrenzung beim Minijob! Entscheidend ist
          ausschließlich die monatliche Verdienstgrenze von 603 Euro. Sie könnten theoretisch 50 Stunden in einer
          Woche arbeiten, solange der Monatsverdienst die Grenze nicht überschreitet.
        </p>
      </article>

      {/* Key features */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6">
        <h3 className="font-bold text-blue-900 mb-4 text-base sm:text-lg">✓ Die wichtigsten Merkmale eines Minijobs 2026:</h3>
        <ul className="space-y-3">
          {features.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-blue-900">
              <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pauschalabgaben breakdown */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Minijob Rechner Arbeitgeber 2026: Kosten & Pauschalabgaben berechnen
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-6">
          Der größte Unterschied zwischen Minijobs und normaler Beschäftigung liegt in den{' '}
          <strong>Pauschalabgaben</strong>. Statt regulärer Sozialversicherungsbeiträge zahlt der Arbeitgeber
          pauschale Prozentsätze direkt an die Minijob-Zentrale. Die Höhe der Abgaben unterscheidet sich
          je nach Art des Minijobs erheblich:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <article className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-bold text-orange-900 mb-3 text-sm sm:text-base">🏢 Gewerblicher Minijob</h4>
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
            <h4 className="font-bold text-green-900 mb-3 text-sm sm:text-base">🏠 Privathaushalt-Minijob</h4>
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
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Der Privathaushalt-Minijob ist für Arbeitgeber deutlich günstiger, weil niedrigere KV- und
          RV-Pauschalen gelten und die U3-Umlage vollständig entfällt. Für den Arbeitnehmer macht es
          beim Nettolohn kaum einen Unterschied — die Einsparungen liegen ausschließlich auf Arbeitgeberseite.
        </p>
      </article>

      {/* Historical table */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Minijob-Grenze: Entwicklung 2003–2026</h3>
        <p className="text-sm text-gray-600 mb-4">
          Die Minijob-Grenze wird regelmäßig angepasst und orientiert sich seit 2022 direkt am gesetzlichen Mindestlohn:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Grenze Historisch">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Zeitraum</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Minijob-Grenze</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Mindestlohn</th>
                <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Anmerkung</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['2003–2012', '400€/Monat', 'Kein Mindestlohn', 'Ursprüngliche Minijob-Regelung'],
                ['2013–2019', '450€/Monat', '8,50€–9,19€/h', 'Einführung gesetzlicher Mindestlohn'],
                ['2020–2021', '450€/Monat', '9,35€–9,60€/h', 'Pandemiejahre, Grenze stabil'],
                ['2022', '520€/Monat', '10,45€/h', 'Erste Koppelung an Mindestlohn'],
                ['2023–2025', '556€/Monat', '12,00€–12,41€/h', 'Jährliche Anpassung'],
                ['2026', '603€/Monat', '13,90€/h', '✅ Aktuell – Erhöhung um 47€'],
              ].map(([period, grenze, lohn, note], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{period}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-600 border">{grenze}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{lohn}</td>
                  <td className="p-2 sm:p-3 text-gray-700 border text-xs">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* Netto calculation explained */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Minijob Netto Gehalt: So wird Brutto Netto berechnet
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Die Netto-Berechnung beim Minijob ist deutlich einfacher als bei einer regulären Beschäftigung,
          weil der Arbeitgeber alle Pauschalabgaben übernimmt. Für den Arbeitnehmer gibt es im Wesentlichen
          nur eine mögliche Abzugsposition:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-bold text-green-900 mb-2 text-sm">✅ Mit Befreiung von der Rentenversicherung</h4>
            <p className="text-xs text-green-800 leading-relaxed mb-2">
              Netto = Brutto — keine Abzüge für den Arbeitnehmer
            </p>
            <p className="text-xs text-green-700">
              Beispiel: 603€ Brutto = <strong>603€ Netto</strong>
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2 text-sm">💡 Ohne Befreiung (Rentenversicherungspflicht)</h4>
            <p className="text-xs text-blue-800 leading-relaxed mb-2">
              Netto = Brutto − 3,6% Rentenversicherungsbeitrag
            </p>
            <p className="text-xs text-blue-700">
              Beispiel: 603€ − 21,71€ RV = <strong>581,29€ Netto</strong>
            </p>
          </div>
        </div>
      </article>

      {/* Registration warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
        <h3 className="font-bold text-amber-900 mb-3 text-base sm:text-lg">⚠️ Minijob Anmeldung – Gesetzliche Pflicht!</h3>
        <p className="text-sm text-amber-900 mb-3">
          Die Anmeldung bei der <strong>Minijob-Zentrale</strong> ist gesetzlich vorgeschrieben und muss{' '}
          <strong>VOR Arbeitsbeginn</strong> durch den Arbeitgeber erfolgen. Rückwirkende Anmeldungen
          sind nicht erlaubt. Ohne Anmeldung gilt das Beschäftigungsverhältnis als nicht versichert.
        </p>
        <ul className="space-y-2 text-sm text-amber-900 mb-3">
          <li>📞 <strong>Telefon:</strong> 0355/2902-70799</li>
          <li>🌐 <strong>Website:</strong> minijob-netto-rechner.de</li>
          <li>💰 <strong>Kosten:</strong> Kostenlos</li>
          <li>⏱️ <strong>Bearbeitungsdauer:</strong> Ca. 5–10 Arbeitstage</li>
          <li>⚖️ <strong>Strafe bei Verstoß:</strong> Bußgeld bis zu 5.000€</li>
        </ul>
      </div>

      {/* Urlaubsanspruch Minijob — targets "minijob urlaubsanspruch rechner" (1,300 searches, KD 10) */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Minijob Urlaubsanspruch berechnen 2026
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Minijobber haben denselben gesetzlichen Urlaubsanspruch wie Vollzeitbeschäftigte. Der Anspruch
          richtet sich nach der Anzahl der Arbeitstage pro Woche — nicht nach der Stundenzahl. Der gesetzliche
          Mindesturlaub beträgt <strong>24 Werktage</strong> (bei 6-Tage-Woche) bzw.{' '}
          <strong>20 Arbeitstage</strong> (bei 5-Tage-Woche) pro Jahr.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Minijob Urlaubsanspruch Tabelle">
            <thead>
              <tr className="bg-blue-100 border-b-2 border-blue-300">
                <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Arbeitstage/Woche</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Urlaubsanspruch/Jahr</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Urlaubstage/Monat</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 Tag/Woche', '4 Tage', '~0,33 Tage'],
                ['2 Tage/Woche', '8 Tage', '~0,67 Tage'],
                ['3 Tage/Woche', '12 Tage', '~1,00 Tag'],
                ['4 Tage/Woche', '16 Tage', '~1,33 Tage'],
                ['5 Tage/Woche', '20 Tage', '~1,67 Tage'],
              ].map(([tage, anspruch, monat], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{tage}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-600 border">{anspruch}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border">{monat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-2 text-sm sm:text-base">📅 Urlaubsanspruch Minijob berechnen – Formel</h4>
          <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
            <strong>Formel:</strong> (Arbeitstage pro Woche ÷ 5) × 20 Urlaubstage = Jahresurlaub<br />
            <strong>Beispiel:</strong> 2 Tage/Woche → (2 ÷ 5) × 20 = <strong>8 Urlaubstage pro Jahr</strong><br />
            Der Urlaubslohn entspricht dem durchschnittlichen Verdienst der letzten 13 Wochen vor dem Urlaub.
          </p>
        </div>
      </article>

      {/* Internal links to related calculators */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
        <h3 className="font-bold text-gray-900 mb-3 text-base">🔗 Weitere hilfreiche Rechner & Infos</h3>
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