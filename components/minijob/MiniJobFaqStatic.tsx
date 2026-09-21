// Pure server component — zero JavaScript, CSS-only accordion via <details>/<summary>
// All content indexed by Google immediately on page load

export const faqs = [
  {
    q: 'Wie viel Netto bleiben von 603€ Minijob?',
    a: 'Mit Befreiung von der Rentenversicherungspflicht bleiben die vollen 603€ als Netto übrig — es gibt keine Abzüge. Ohne Befreiung wird der Rentenversicherungsbeitrag von 3,6% abgezogen, sodass 581,29€ Netto ausgezahlt werden. Welche Variante für Sie zutrifft, können Sie oben im Rechner direkt einstellen und vergleichen.',
  },
  {
    q: 'Wie viel wird für die Rentenversicherung abgezogen?',
    a: 'Der Eigenanteil zur Rentenversicherung beträgt 3,6% des Bruttogehalts. Bei der maximalen Minijob-Grenze von 603€ sind das 21,71€ pro Monat. Der Rechner zeigt diesen Betrag automatisch an, sobald Sie "ohne Befreiung" auswählen.',
  },
  {
    q: 'Kann ich mich von der Rentenversicherungspflicht befreien lassen?',
    a: 'Ja. Seit 2013 sind Minijobber zwar automatisch rentenversicherungspflichtig, können sich aber per Befreiungsantrag beim Arbeitgeber davon befreien lassen. Mit Befreiung erhalten Sie das volle Bruttogehalt als Netto, bauen im Gegenzug aber keine zusätzlichen Rentenansprüche aus diesem Job auf.',
  },
  {
    q: 'Berücksichtigt der Rechner auch die Arbeitgeberkosten?',
    a: 'Ja. Der Rechner zeigt neben dem Netto auch die Pauschalabgaben, die der Arbeitgeber zahlt: rund 32,47% bei einem gewerblichen Minijob bzw. rund 14,62% bei einem Minijob im Privathaushalt — jeweils inklusive Kranken- und Rentenversicherung, pauschaler Lohnsteuer, Umlagen und Unfallversicherung.',
  },
  {
    q: 'Was ist der Unterschied zwischen gewerblichem Minijob und Minijob im Privathaushalt?',
    a: 'Der Nettolohn für den Arbeitnehmer ist in beiden Fällen identisch. Der Unterschied liegt bei den Pauschalabgaben des Arbeitgebers: Bei einem gewerblichen Minijob (z.B. Einzelhandel, Gastronomie) fallen ca. 32,47% an, bei einem Minijob im Privathaushalt (z.B. Haushaltshilfe) nur ca. 14,62% — ein Unterschied von rund 109€ bei Maximalverdienst.',
  },
]

export default function MiniJobFaqStatic() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Häufige Fragen zum Minijob Rechner
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Die wichtigsten Fragen rund um Netto-Gehalt, Rentenversicherung und Arbeitgeberkosten beim Minijob.
      </p>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <details key={index} className="group border-b border-gray-200 last:border-0">
            <summary className="flex items-center justify-between w-full text-left py-4 px-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors list-none">
              <span className="font-bold text-gray-900 pr-4 text-sm sm:text-base group-open:text-blue-600">
                {faq.q}
              </span>
              <svg
                className="shrink-0 w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
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
