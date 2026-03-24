export const faqsStunden = [
  {
    q: 'Wie viele Stunden darf man im Minijob 2026 arbeiten?',
    a: 'Es gibt keine gesetzliche Stundenbegrenzung im Minijob — nur der Monatsverdienst darf 603 Euro (Stand 2026) nicht übersteigen. Die maximale Stundenzahl hängt vom Stundenlohn ab: Bei Mindestlohn (13,90 €/h) sind das rund 43 Stunden pro Monat (≈ 10 Stunden pro Woche). Bei 15 €/h etwa 40 Stunden, bei 20 €/h rund 30 Stunden.',
  },
  {
    q: 'Gibt es eine 10-Stunden-Regel beim Minijob?',
    a: 'Nein, eine gesetzliche 10-Stunden-Grenze pro Woche gibt es beim Minijob nicht. Diese Zahl ergibt sich lediglich daraus, dass man bei Mindestlohn (13,90 €/h) im Monatsdurchschnitt rund 10 Stunden pro Woche arbeiten darf, ohne die Verdienstgrenze von 603 Euro zu überschreiten. Bei einem höheren Stundenlohn sind es entsprechend weniger Stunden.',
  },
  {
    q: 'Kann ich im Minijob die Stunden flexibel einteilen?',
    a: 'Ja, die Stundenverteilung ist vollständig flexibel. Es gibt keine Vorgabe für eine bestimmte Stundenzahl pro Woche. Entscheidend ist nur, dass der monatliche Gesamtverdienst 603 Euro nicht überschreitet. Sie können also in einer Woche mehr und in einer anderen weniger arbeiten — solange die Monatsgrenze eingehalten wird.',
  },
  {
    q: 'Was passiert, wenn ich zu viele Stunden arbeite und über 603 Euro verdiene?',
    a: 'Wird die Verdienstgrenze von 603 Euro regelmäßig oder vorhersehbar überschritten, verliert die Stelle den Minijob-Status. Es entsteht volle Sozialversicherungspflicht — rückwirkend ab dem Monat der Überschreitung. Arbeitgeber und Arbeitnehmer müssen dann Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung nachzahlen. Ein einmaliges, unvorhersehbares Überschreiten ist maximal 2× pro Jahr erlaubt (bis 1.206 €).',
  },
  {
    q: 'Wie berechne ich die maximalen Stunden im Minijob?',
    a: 'Die Formel lautet: Maximale Stunden pro Monat = 603 € ÷ Stundenlohn. Beispiele: Bei 13,90 €/h → 603 ÷ 13,90 = 43,4 Stunden/Monat. Bei 15 €/h → 603 ÷ 15 = 40,2 Stunden/Monat. Bei 20 €/h → 603 ÷ 20 = 30,15 Stunden/Monat. Die Wochenstunden ergeben sich daraus durch Division durch 4,33 (durchschnittliche Wochen/Monat).',
  },
  {
    q: 'Darf ich in einem Monat mehr und im nächsten weniger Stunden arbeiten?',
    a: 'Ja, das ist zulässig. Der Verdienst darf zwischen den Monaten schwanken. Entscheidend ist der Jahresdurchschnitt — der Monatsverdienst darf im Jahresschnitt 603 Euro nicht übersteigen. Maximal in 2 Monaten pro rückwärtigem Zeitjahr darf der Verdienst auf bis zu 1.206 Euro steigen (gelegentliches Überschreiten bei unvorhersehbaren Ereignissen).',
  },
  {
    q: 'Zählen Stunden aus mehreren Minijobs zusammen?',
    a: 'Die Stunden selbst werden nicht addiert, aber die Verdienste aus allen geringfügigen Beschäftigungen müssen zusammengezählt werden. Liegen die Gesamteinnahmen aller Minijobs über 603 Euro/Monat, verlieren alle den Minijob-Status (Ausnahme: ein Minijob neben einer sozialversicherungspflichtigen Hauptbeschäftigung bleibt privilegiert).',
  },
  {
    q: 'Gilt das Arbeitszeitgesetz auch für Minijobber?',
    a: 'Ja, das Arbeitszeitgesetz (ArbZG) gilt uneingeschränkt auch für Minijobber. Das bedeutet: Maximal 8 Stunden täglich (ausnahmsweise bis 10 Stunden, wenn innerhalb von 6 Monaten ein Ausgleich erfolgt), Ruhezeiten von mindestens 11 Stunden zwischen den Arbeitstagen, Sonntagsarbeitsschutz und ein Anspruch auf Pausenzeiten. Der Mindeststundenlohn von 13,90 Euro muss ebenfalls gezahlt werden.',
  },
]

export default function MinijobStundenFaq() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Minijob Stunden FAQ – Häufig gestellte Fragen
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Alle wichtigen Fragen zu Stunden im Minijob 2026 — von der Berechnung bis zur flexiblen Einteilung.
      </p>
      <div className="space-y-1">
        {faqsStunden.map((faq, index) => (
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
