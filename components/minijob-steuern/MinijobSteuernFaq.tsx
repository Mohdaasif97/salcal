export const faqsSteuern = [
  {
    q: 'Muss ich als Minijobber Steuern zahlen?',
    a: 'Nein, in der Regel zahlen Arbeitnehmer bei einem pauschal besteuerten Minijob keine eigenen Steuern. Der Arbeitgeber führt eine Pauschsteuer von 2% des Bruttolohns an die Minijob-Zentrale ab. Diese Pauschsteuer gilt als abgeltend und deckt Lohnsteuer, Solidaritätszuschlag und Kirchensteuer ab.',
  },
  {
    q: 'Muss ich den Minijob in der Steuererklärung angeben?',
    a: 'Nein — wenn Ihr Arbeitgeber die Pauschsteuer von 2% anwendet (das ist der Regelfall), müssen Sie den Minijob nicht in der Steuererklärung angeben. Nur bei individueller Besteuerung nach Ihrer Steuerklasse (ELStAM-Verfahren) müssen Sie den Verdienst in Anlage N eintragen.',
  },
  {
    q: 'Was ist die 2%-Pauschsteuer beim Minijob?',
    a: 'Die 2%-Pauschsteuer ist eine einheitliche Steuer, die der Arbeitgeber pauschal für den Minijobber an die Minijob-Zentrale abführt. Sie umfasst Lohnsteuer, Solidaritätszuschlag und Kirchensteuer in einem einzigen Satz. Sie ist geregelt in § 40a EStG und ist die gängigste Besteuerungsform bei geringfügig entlohnten Beschäftigungen.',
  },
  {
    q: 'Kann der Arbeitgeber die Pauschsteuer vom Lohn abziehen?',
    a: 'Ja, der Arbeitgeber kann die 2%-Pauschsteuer auf den Arbeitnehmer abwälzen und vom Lohn einbehalten. Das muss aber vertraglich vereinbart sein. Beispiel: Bei 300 Euro Verdienst werden 6 Euro (2%) einbehalten, der Arbeitnehmer erhält 294 Euro Netto. Auch in diesem Fall muss der Minijob nicht in der Steuererklärung angegeben werden.',
  },
  {
    q: 'Was ist der Grundfreibetrag und warum ist er wichtig für Minijobber?',
    a: 'Der Grundfreibetrag für 2026 beträgt 11.784 Euro jährlich. Liegt das Gesamteinkommen (inklusive Minijob) darunter, ist keine Einkommensteuer zu zahlen. Wer ausschließlich einen Minijob mit bis zu 603 Euro monatlich (7.236 Euro/Jahr) hat, liegt in der Regel unter dem Grundfreibetrag. Bei individueller Besteuerung könnte dann über die Steuererklärung bereits einbehaltene Lohnsteuer erstattet werden.',
  },
  {
    q: 'Was zahlt der Arbeitgeber an Steuern und Abgaben für einen Minijob?',
    a: 'Gewerbliche Arbeitgeber zahlen insgesamt rund 32,47% des Minijob-Lohns: Krankenversicherungspauschale 13%, Rentenversicherungspauschale 15%, Pauschsteuer 2%, U1-Umlage 0,80%, U2-Umlage 0,22%, U3-Umlage 0,15% sowie Unfallversicherung ca. 1,30%. Bei einem Verdienst von 603 Euro sind das rund 195 Euro Gesamtabgaben.',
  },
  {
    q: 'Wie hoch sind die Steuern bei einem Minijob im Privathaushalt?',
    a: 'Im Privathaushalt gelten günstigere Sätze: KV-Pauschale 5%, RV-Pauschale 5%, Pauschsteuer 2%, U1 0,80%, U2 0,22% — insgesamt rund 14,92%. Dazu kommt ein Steuerbonus: Privatpersonen können 20% ihrer Lohnkosten für Haushaltshilfen (max. 510 Euro/Jahr) direkt von der Steuerschuld abziehen (§ 35a EStG).',
  },
  {
    q: 'Was ändert sich steuerlich beim Minijob 2026?',
    a: 'Zum 1. Januar 2026 wurde die U1-Umlage von 1,1% auf 0,8% gesenkt — das entlastet Arbeitgeber um ca. 1,80 Euro pro Monat. Die Pauschsteuer von 2% bleibt unverändert. Neu ab Juli 2026: Wer sich einmal von der Rentenversicherungspflicht befreit hat, kann diese Befreiung einmalig rückgängig machen.',
  },
]

export default function MinijobSteuernFaq() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Minijob Steuern FAQ – Häufig gestellte Fragen
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Die wichtigsten Fragen und Antworten zu Steuern im Minijob — von der Pauschsteuer bis zur Steuererklärung.
      </p>
      <div className="space-y-1">
        {faqsSteuern.map((faq, index) => (
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
