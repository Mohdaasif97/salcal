import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function MidiJobInfo() {
  const features = [
    'Übergangsbereich: 603,01 € – 2.000 € pro Monat (ab 1. Januar 2026)',
    'Vollständige Sozialversicherungspflicht: KV, PV, RV und AV',
    'Reduzierte Arbeitnehmer-Beiträge durch Gleitzonenformel (Faktor F = 0,6619)',
    'Arbeitgeber zahlt mehr als die Hälfte der Sozialversicherungsbeiträge',
    'Volle Rentenansprüche trotz reduzierter Rentenbeiträge',
    'Anmeldung beim regulären Sozialversicherungsträger (NICHT Minijob-Zentrale)',
    'Alle Arbeitnehmerrechte: Urlaub, Lohnfortzahlung, Mutterschutz, Mindestlohn',
  ]

  return (
    <section id="erklaerung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8 space-y-8">

      {/* Definition */}
      <article>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Was ist ein Midijob? Definition & Grenze 2026
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Ein <strong>Midijob</strong> – offiziell <strong>Beschäftigung im Übergangsbereich</strong> nach § 20 SGB IV –
          ist ein sozialversicherungspflichtiges Arbeitsverhältnis, bei dem das monatliche Bruttogehalt zwischen{' '}
          <strong>603,01 Euro und 2.000 Euro</strong> liegt (Stand 2026). Der Übergangsbereich wird umgangssprachlich
          auch als <strong>Gleitzone</strong> bezeichnet, obwohl der gesetzliche Begriff seit 2019 „Übergangsbereich" lautet.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Das Besondere: Im Gegensatz zur normalen Beschäftigung zahlt der{' '}
          <strong>Arbeitnehmer reduzierte Sozialversicherungsbeiträge</strong>, während der Arbeitgeber
          weiterhin seinen vollen Anteil berechnet auf einer reduzierten Bemessungsgrundlage zahlt.
          Die Untergrenze von 603,01 € ist direkt an die <strong>Minijob-Grenze von 603 €</strong> und den
          Mindestlohn von 13,90 €/h gekoppelt.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          <strong>Wichtig:</strong> Im Midijob besteht im Gegensatz zum Minijob{' '}
          <strong>vollständiger Versicherungsschutz</strong> – Krankenkasse, Pflegeversicherung,
          Rentenversicherung und Arbeitslosenversicherung sind alle aktiv.
        </p>
      </article>

      {/* Key features */}
      <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-4 sm:p-6">
        <h3 className="font-bold text-emerald-900 mb-4 text-base sm:text-lg">✓ Die wichtigsten Merkmale des Midijobs 2026:</h3>
        <ul className="space-y-3">
          {features.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-emerald-900">
              <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Gleitzone formula */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Midijob Rechner: So funktioniert die Gleitzonenformel 2026
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Die Berechnung der Sozialversicherungsbeiträge im Übergangsbereich erfolgt über den jährlich vom
          Bundesministerium für Arbeit und Soziales (BMAS) festgelegten <strong>Faktor F</strong>.
          Für 2026 beträgt Faktor F = <strong>0,6619</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-3 text-sm">📐 Formel Gesamtbeitrag (BE_Gesamt)</h4>
            <p className="text-xs text-blue-800 font-mono leading-relaxed">
              BE = 1,1459 × AE − 291,84
            </p>
            <p className="text-xs text-blue-700 mt-2">
              Auf dieser Grundlage berechnet sich der Gesamtbeitrag beider Seiten.
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-bold text-purple-900 mb-3 text-sm">📐 Formel Arbeitnehmeranteil (BE_AN)</h4>
            <p className="text-xs text-purple-800 font-mono leading-relaxed">
              BE = 1,4316 × AE − 863,28
            </p>
            <p className="text-xs text-purple-700 mt-2">
              Niedrigere Basis → AN zahlt deutlich weniger als die Hälfte.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Je niedriger das Gehalt im Übergangsbereich, desto <strong>stärker der Entlastungseffekt</strong> für den Arbeitnehmer.
          Bei 603,01 € zahlt der AN den geringsten prozentualen SV-Anteil; mit steigendem Einkommen nähert sich
          der Anteil dem normalen 50/50-Split bei 2.000 € an.
        </p>
      </article>

      {/* Minijob vs Midijob vs Vollzeit */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Midijob vs. Minijob vs. Vollzeit – Vergleich 2026
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Vergleich Beschäftigungsformen">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Merkmal</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Minijob</th>
                <th className="p-2 sm:p-3 text-center font-bold text-emerald-800 border bg-emerald-50">Midijob</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Vollzeit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Verdienstgrenze', 'bis 603 €', '603,01 – 2.000 €', 'ab 2.000,01 €'],
                ['KV-Beitrag AN', 'Keine', 'Reduziert', 'Voller Anteil (~8,75%)'],
                ['RV-Beitrag AN', 'Optional 3,6%', 'Reduziert', 'Voller Anteil (9,3%)'],
                ['Krankenversicherung', 'Fam.-Versicherung', 'Vollversichert ✅', 'Vollversichert ✅'],
                ['Rentenanspruch', 'Eingeschränkt', 'Voll ✅', 'Voll ✅'],
                ['Arbeitslosengeld', 'Kein Anspruch', 'Anspruch ✅', 'Anspruch ✅'],
                ['Anmeldung', 'Minijob-Zentrale', 'Krankenkasse', 'Krankenkasse'],
                ['Lohnsteuer', 'Pauschal 2% (AG)', 'Je Steuerklasse', 'Je Steuerklasse'],
              ].map(([merkmal, mini, midi, voll], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{merkmal}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border text-xs">{mini}</td>
                  <td className="p-2 sm:p-3 text-center font-semibold text-emerald-700 border bg-emerald-50 text-xs">{midi}</td>
                  <td className="p-2 sm:p-3 text-center text-gray-700 border text-xs">{voll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* Midijob Grenze Entwicklung */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Midijob-Grenze: Entwicklung 2003–2026
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Die Midijob-Grenze (Übergangsbereich) wurde mehrfach angepasst:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse" aria-label="Midijob Grenze Historisch">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Zeitraum</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Untergrenze</th>
                <th className="p-2 sm:p-3 text-center font-bold text-gray-900 border">Obergrenze</th>
                <th className="p-2 sm:p-3 text-left font-bold text-gray-900 border">Anmerkung</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['2003–2012', '400,01€', '800€', 'Einführung der Gleitzone'],
                ['2013–Sept. 2022', '450,01€', '1.300€', 'Erhöhung nach Minijob-Grenze'],
                ['Okt.–Dez. 2022', '520,01€', '1.600€', 'Übergangsregelung'],
                ['2023–2025', '520,01€ / 556,01€', '2.000€', 'Neue Obergrenze 2.000€'],
                ['2026', '603,01€', '2.000€', '✅ Aktuell – Erhöhung um 47€'],
              ].map(([period, unter, ober, note], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 sm:p-3 font-semibold text-gray-900 border">{period}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-emerald-600 border">{unter}</td>
                  <td className="p-2 sm:p-3 text-center font-bold text-blue-600 border">{ober}</td>
                  <td className="p-2 sm:p-3 text-gray-700 border text-xs">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* Midijob Krankenversicherung */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Midijob Krankenversicherung 2026
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Im Midijob sind Arbeitnehmer <strong>vollständig gesetzlich krankenversichert</strong> – ein großer
          Vorteil gegenüber dem Minijob. Der KV-Beitragssatz 2026 setzt sich zusammen aus:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-600 mb-1">Allgemeiner Beitragssatz</p>
            <p className="text-2xl font-bold text-gray-900">14,60%</p>
            <p className="text-xs text-gray-500">AN + AG je 7,30%</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-600 mb-1">Ø KV-Zusatzbeitrag 2026</p>
            <p className="text-2xl font-bold text-emerald-600">2,90%</p>
            <p className="text-xs text-gray-500">Variiert je Krankenkasse</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-600 mb-1">Effektiver Gesamtsatz</p>
            <p className="text-2xl font-bold text-blue-600">17,50%</p>
            <p className="text-xs text-gray-500">auf Bemessungsgrundlage</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mt-4 leading-relaxed">
          Im Midijob wird der KV-Beitrag auf die <strong>reduzierte Bemessungsgrundlage (BE_AN)</strong> berechnet –
          der Arbeitnehmer zahlt also effektiv weniger als 8,75% des Bruttogehalts. Den Zusatzbeitrag Ihrer
          Krankenkasse finden Sie auf der Rückseite Ihrer Versichertenkarte oder auf der Website Ihrer Kasse.
        </p>
      </article>

      {/* Steuerklasse info */}
      <article>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Midijob Rechner Steuerklasse – Was Sie wissen müssen
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Die <strong>Steuerklasse</strong> beeinflusst beim Midijob ausschließlich die <strong>Lohnsteuer</strong>,
          nicht die Sozialversicherungsbeiträge. Bei niedrigen Midijob-Einkommen fällt oft gar keine Lohnsteuer an:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { sk: 'Steuerklasse I', desc: 'Ledig/getrennt – ab ca. 1.050 € fällt Lohnsteuer an', color: 'bg-gray-50 border-gray-200' },
            { sk: 'Steuerklasse II', desc: 'Alleinerziehend – höherer Freibetrag, weniger Steuer', color: 'bg-blue-50 border-blue-200' },
            { sk: 'Steuerklasse III', desc: 'Verheiratet (höheres Einkommen) – meist KEINE Lohnsteuer bei Midijob', color: 'bg-green-50 border-green-200' },
            { sk: 'Steuerklasse V', desc: 'Verheiratet (niedrigeres Einkommen) – höhere Steuerabzüge ab ~700 €', color: 'bg-red-50 border-red-200' },
          ].map(({ sk, desc, color }, i) => (
            <div key={i} className={`border rounded-lg p-3 ${color}`}>
              <p className="font-bold text-gray-900 text-sm">{sk}</p>
              <p className="text-xs text-gray-700 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Internal links */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
        <h3 className="font-bold text-gray-900 mb-3 text-base">🔗 Weitere hilfreiche Rechner & Infos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/minijob-rechner" className="flex items-center gap-2 text-sm text-emerald-700 hover:underline font-medium">
            → Minijob Rechner 2026 (bis 603 €)
          </Link>
          <Link href="/minijob-grenze-2026" className="flex items-center gap-2 text-sm text-emerald-700 hover:underline font-medium">
            → Minijob Grenze 2026 – 603 Euro Verdienstgrenze
          </Link>
          <Link href="/minijob-verdienstgrenze" className="flex items-center gap-2 text-sm text-emerald-700 hover:underline font-medium">
            → Minijob Verdienstgrenze 2026 – 603 Euro erklärt
          </Link>
          <Link href="/minijob-steuern" className="flex items-center gap-2 text-sm text-emerald-700 hover:underline font-medium">
            → Minijob Steuern 2026 – Pauschsteuer & Lohnsteuer
          </Link>
          <Link href="/minijob-stunden" className="flex items-center gap-2 text-sm text-emerald-700 hover:underline font-medium">
            → Minijob Stunden 2026 – Stundentabelle & Berechnung
          </Link>
          <Link href="/minijob-nebenjob" className="flex items-center gap-2 text-sm text-emerald-700 hover:underline font-medium">
            → Minijob Nebenjob – Neben Hauptjob, Student & Rentner
          </Link>
          <Link href="/minijob-kosten-arbeitgeber" className="flex items-center gap-2 text-sm text-emerald-700 hover:underline font-medium">
            → Minijob Kosten Arbeitgeber – Pauschalabgaben 2026
          </Link>
        </div>
      </div>

    </section>
  )
}