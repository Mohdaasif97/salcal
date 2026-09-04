// Pure server component — zero JavaScript, CSS-only accordion via <details>/<summary>
// All content indexed by Google immediately on page load

export const faqsKosten = [
  {
    q: 'Was kostet ein Minijob den Arbeitgeber 2026?',
    a: 'Bei einem gewerblichen Minijob mit 603 Euro Bruttolohn betragen die Gesamtkosten für den Arbeitgeber im Beispiel rund 798 Euro pro Monat. Das setzt sich zusammen aus dem Bruttolohn (603 €) plus Pauschalabgaben von 31,17% an die Minijob-Zentrale (≈ 187,96 €) sowie einer individuellen Unfallversicherung Ihrer Berufsgenossenschaft (Beispiel: 1,30% ≈ 7,84 €). Im Privathaushalt sind es rund 691 Euro, da die Pauschalabgaben dort einheitlich 14,62% betragen (inkl. 1,60% Unfallversicherung). Der Unterschied von rund 107 Euro pro Monat (ca. 1.290 Euro/Jahr) entsteht vor allem durch die niedrigeren KV- und RV-Pauschalen im Haushalt.',
  },
  {
    q: 'Welche Pauschalabgaben zahlt der Arbeitgeber beim Minijob?',
    a: 'Gewerbliche Arbeitgeber zahlen: Krankenversicherung 13%, Rentenversicherung 15%, pauschale Lohnsteuer 2%, U1-Umlage 0,80%, U2-Umlage 0,22%, U3-Umlage 0,15% — zusammen fest 31,17%, zuzüglich der individuellen Unfallversicherung Ihrer Berufsgenossenschaft (Beispielwert: 1,30%, ergibt ~32,47% insgesamt). Privathaushalt-Arbeitgeber zahlen: KV 5%, RV 5%, Lohnsteuer 2%, U1 0,80%, U2 0,22%, U3 0%, UV 1,60% — insgesamt 14,62%. Alle Abgaben werden gebündelt an die Minijob-Zentrale abgeführt.',
  },
  {
    q: 'Was hat sich bei den Arbeitgeberabgaben 2026 geändert?',
    a: 'Zum 1. Januar 2026 wurde die U1-Umlage (Entgeltfortzahlung bei Krankheit) von 1,1% auf 0,8% gesenkt. Das entlastet Arbeitgeber um ca. 1,80 Euro pro Monat bei Maximalverdienst (603 €). Außerdem entfällt ab Januar 2026 die Rechtskreistrennung (Ost/West) bei Beitragsnachweisen — betroffene Arbeitgeber müssen einen neuen einheitlichen Dauer-Beitragsnachweis einreichen. Die Minijob-Grenze stieg von 556 € auf 603 €.',
  },
  {
    q: 'Kann ich den Minijob als Arbeitgeber von der Steuer absetzen?',
    a: 'Ja, aber nur für Privathaushalt-Arbeitgeber: Gemäß § 35a EStG können 20% der Gesamtkosten (Bruttolohn + Pauschalabgaben) direkt von der Einkommensteuer abgezogen werden — maximal 510 Euro pro Jahr. Dieser Steuerabzug gilt bei legaler Beschäftigung über das Haushaltsscheckverfahren. Voraussetzung: Die Zahlung muss unbar (Überweisung) erfolgen. Barzahlungen werden steuerlich nicht anerkannt. Gewerbliche Arbeitgeber können die Personalkosten als Betriebsausgaben absetzen.',
  },
  {
    q: 'Muss ich als Arbeitgeber einen Arbeitsvertrag ausstellen?',
    a: 'Einen schriftlichen Arbeitsvertrag schreibt das Gesetz nicht zwingend vor, jedoch ist er dringend empfohlen. Gemäß dem Nachweisgesetz (NachweisG) muss der Arbeitgeber dem Minijobber spätestens am ersten Arbeitstag eine schriftliche Niederschrift der wesentlichen Vertragsbedingungen aushändigen. Dazu gehören: Beginn des Arbeitsverhältnisses, vereinbarter Lohn, Arbeitszeit und Urlaubsanspruch. Bei Verstößen drohen Bußgelder bis zu 2.000 Euro.',
  },
  {
    q: 'Wann müssen die Pauschalabgaben gezahlt werden?',
    a: 'Die monatlichen Pauschalabgaben müssen bis zum drittletzten Bankarbeitstag des laufenden Monats an die Minijob-Zentrale abgeführt werden. Für die Abrechnung im Haushaltsscheckverfahren (Privathaushalt) gelten halbjährliche Fälligkeiten: zum 15. Januar (für das zweite Halbjahr des Vorjahres) und zum 15. Juli (für das erste Halbjahr des laufenden Jahres). Bei Verzögerungen werden Säumniszuschläge erhoben.',
  },
  {
    q: 'Was passiert, wenn der Minijobber krank wird?',
    a: 'Der Arbeitgeber ist zur Lohnfortzahlung im Krankheitsfall verpflichtet — für bis zu 6 Wochen in voller Höhe. Dafür hat der Arbeitgeber Anspruch auf Erstattung durch die Minijob-Zentrale aus der U1-Umlage. Gewerbliche Arbeitgeber mit weniger als 30 Mitarbeitern können bis zu 80% des weitergezahlten Lohns erstattet bekommen. Der Antrag auf Erstattung muss bei der Minijob-Zentrale gestellt werden — dies geschieht über das Online-Portal.',
  },
  {
    q: 'Muss ich Urlaubsgeld für Minijobber zahlen?',
    a: 'Minijobber haben denselben gesetzlichen Urlaubsanspruch wie Vollzeitbeschäftigte. Bei einer 5-Tage-Woche sind das 20 Werktage pro Jahr — anteilig nach tatsächlichen Arbeitstagen. Während des Urlaubs muss der Arbeitgeber das normale Arbeitsentgelt weiterzahlen (Urlaubsentgelt). Ein zusätzliches Urlaubsgeld über den Urlaubsentgeltanspruch hinaus ist gesetzlich nicht vorgeschrieben, kann aber vertraglich vereinbart werden.',
  },
  {
    q: 'Kann ich mehrere Minijobber gleichzeitig beschäftigen?',
    a: 'Ja, die Anzahl der Minijobber ist grundsätzlich nicht begrenzt. Allerdings müssen alle separat bei der Minijob-Zentrale angemeldet werden, und für jeden fallen die jeweiligen Pauschalabgaben an. Wichtig: Bei der Prüfung, ob jemand als Minijobber gilt, werden nur die Einkünfte aus diesem einen Arbeitsverhältnis bei Ihnen berücksichtigt — nicht was der Arbeitnehmer bei anderen Arbeitgebern verdient (mit Ausnahme bei mehreren Minijobs ohne Hauptjob).',
  },
  {
    q: 'Was ist der Unterschied zwischen Haushaltsscheck und normalem Meldeverfahren?',
    a: 'Das Haushaltsscheckverfahren ist ein vereinfachtes Meldeverfahren speziell für Privathaushalt-Arbeitgeber. Anstatt monatlicher Beitragsnachweise und Meldungen erfolgt die Abrechnung halbjährlich über einen einfachen "Haushaltsscheck". Die Minijob-Zentrale berechnet die Abgaben selbst und bucht sie automatisch ab. Das normale Meldeverfahren (für gewerbliche Arbeitgeber) ist aufwendiger: monatliche Beitragsnachweise, Jahresmeldungen und eigenständige Berechnung aller Abgaben.',
  },
  {
    q: 'Sind Minijob-Kosten für gewerbliche Arbeitgeber steuerlich absetzbar?',
    a: 'Ja, gewerbliche Arbeitgeber können alle Personalkosten für Minijobber als Betriebsausgaben steuerlich geltend machen — also Bruttolohn plus alle Pauschalabgaben. Diese mindern den steuerpflichtigen Gewinn. Der steuerliche Effekt hängt vom persönlichen oder körperschaftlichen Steuersatz ab. Bei einem Steuersatz von 30% würden echte Kosten von 798 € durch den Steuereffekt auf effektiv ca. 559 € netto sinken.',
  },
  {
    q: 'Was passiert, wenn ich die Minijob-Grenze als Arbeitgeber versehentlich überschreite?',
    a: 'Wenn der Verdienst die Grenze von 603 Euro überschreitet (mehr als 2 Monate im Jahr), wird das Arbeitsverhältnis automatisch sozialversicherungspflichtig. Als Arbeitgeber müssen Sie dann rückwirkend die regulären Sozialversicherungsbeiträge nachzahlen — inkl. Arbeitgeber- und Arbeitnehmeranteil. Den Arbeitnehmeranteil können Sie zwar prinzipiell einbehalten, aber nur für die letzten 3 Monate. Wichtig: Sofort die Krankenkasse des Arbeitnehmers kontaktieren und die Beschäftigung neu melden.',
  },
]

export default function MinijobKostenFaq() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Minijob Kosten Arbeitgeber – Häufig gestellte Fragen 2026
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Die wichtigsten Fragen zu Pauschalabgaben, Pflichten und Kosten für Arbeitgeber beim Minijob 2026.
      </p>
      <div className="space-y-1">
        {faqsKosten.map((faq, index) => (
          <details key={index} className="group border-b border-gray-200 last:border-0">
            <summary className="flex items-center justify-between w-full text-left py-4 px-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors list-none">
              <span className="font-bold text-gray-900 pr-4 text-sm sm:text-base group-open:text-blue-600">
                {faq.q}
              </span>
              <svg
                className="shrink-0 w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 px-4 text-gray-700 text-sm sm:text-base leading-relaxed bg-gray-50 rounded-lg mb-1">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}