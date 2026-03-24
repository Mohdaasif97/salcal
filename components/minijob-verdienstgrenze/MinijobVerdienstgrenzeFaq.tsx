export const faqsVerdienstgrenze = [
  {
    q: 'Was ist die Minijob Verdienstgrenze 2026?',
    a: 'Die Minijob Verdienstgrenze 2026 beträgt 603 Euro pro Monat (7.236 Euro/Jahr), gültig seit 1. Januar 2026. Sie ist dynamisch an den gesetzlichen Mindestlohn von 13,90 Euro/Stunde gekoppelt. Wer diese Grenze im Monatsdurchschnitt nicht überschreitet, ist Minijobber und zahlt keine Beiträge zur Kranken-, Pflege- und Arbeitslosenversicherung.',
  },
  {
    q: 'Wie wird die Minijob Verdienstgrenze berechnet?',
    a: 'Die Verdienstgrenze berechnet sich nach der Formel: Mindestlohn × 130 ÷ 3, aufgerundet auf volle Euro. Für 2026: 13,90 € × 130 ÷ 3 = 602,33 € → aufgerundet auf 603 Euro. Diese Formel entspricht dem Verdienst bei 10 Wochenstunden zum Mindestlohn.',
  },
  {
    q: 'Darf ich die Verdienstgrenze gelegentlich überschreiten?',
    a: 'Ja, ein gelegentliches und unvorhersehbares Überschreiten ist erlaubt – maximal 2 Monate pro rückwärtigem Zeitjahr. In diesen Ausnahme-Monaten darf der Verdienst höchstens 1.206 Euro (doppelte Grenze) betragen. Der Jahresverdienst darf 8.442 Euro nicht übersteigen. Vorhersehbare Überschreitungen (z.B. fixes Urlaubsgeld) gelten nicht als Ausnahme.',
  },
  {
    q: 'Was passiert, wenn ich die Verdienstgrenze dauerhaft überschreite?',
    a: 'Wird die Verdienstgrenze dauerhaft oder vorhersehbar überschritten, verliert die Beschäftigung den Minijob-Status. Es entsteht volle Sozialversicherungspflicht – rückwirkend ab dem Monat der Überschreitung. Arbeitgeber und Arbeitnehmer müssen dann Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung nachzahlen.',
  },
  {
    q: 'Gilt die Verdienstgrenze pro Arbeitgeber oder insgesamt?',
    a: 'Die Verdienstgrenze gilt für das Gesamteinkommen aus allen geringfügigen Beschäftigungen zusammen – nicht pro Arbeitgeber. Ausnahme: Wer einen sozialversicherungspflichtigen Hauptjob hat, darf daneben genau einen Minijob bis 603 Euro ausüben, ohne dass dieser auf den Hauptjob angerechnet wird.',
  },
  {
    q: 'Wie hoch ist die Verdienstgrenze 2027?',
    a: 'Zum 1. Januar 2027 steigt der Mindestlohn auf 14,60 Euro. Damit erhöht sich die Verdienstgrenze automatisch auf voraussichtlich 633 Euro pro Monat (7.596 Euro/Jahr). Das entspricht einer Erhöhung um 30 Euro gegenüber 2026.',
  },
  {
    q: 'Zählt Urlaubsgeld zur Verdienstgrenze?',
    a: 'Ja, Urlaubsgeld und Weihnachtsgeld, die mit Sicherheit jährlich gezahlt werden, zählen zum Jahresverdienst. Sie gelten als vorhersehbar und dürfen die Jahresgrenze von 7.236 Euro nicht überschreiten. Dagegen können unvorhersehbare Einmalzahlungen (z.B. eine nicht geplante Prämie) unter die Ausnahmeregelung fallen.',
  },
  {
    q: 'Kann ich als Rentner oder Student eine Minijob Verdienstgrenze nutzen?',
    a: 'Ja. Rentner können bis 603 Euro pro Monat im Minijob verdienen, seit 2023 ohne Hinzuverdienstgrenze auf die Altersrente. Studenten können ebenfalls bis 603 Euro/Monat verdienen, ohne den BAföG-Anspruch zu gefährden, da ein Freibetrag von 520 Euro/Monat gilt und pauschal versteuerte Minijobs oft nicht angerechnet werden.',
  },
]

export default function MinijobVerdienstgrenzeFaq() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Minijob Verdienstgrenze FAQ – Häufig gestellte Fragen
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Alle wichtigen Fragen zur Minijob Verdienstgrenze 2026 — von der Berechnung bis zur Überschreitung.
      </p>
      <div className="space-y-1">
        {faqsVerdienstgrenze.map((faq, index) => (
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
