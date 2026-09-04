// Pure server component — zero JavaScript, CSS-only accordion via <details>/<summary>
// All content indexed by Google immediately on page load

export const faqsStundenlohn = [
  {
    q: 'Wie hoch ist der Mindestlohn beim Minijob 2026?',
    a: 'Der gesetzliche Mindestlohn liegt seit dem 1. Januar 2026 bei 13,90 € brutto pro Stunde und steigt zum 1. Januar 2027 weiter auf 14,60 €. Er gilt uneingeschränkt auch für Minijobs — es gibt keine Ausnahme für geringfügig Beschäftigte.',
  },
  {
    q: 'Wie viele Stunden darf man bei 603 € im Minijob arbeiten?',
    a: 'Das hängt vom Stundenlohn ab: 603 € geteilt durch den Stundenlohn ergibt die maximale Stundenzahl pro Monat. Beim Mindestlohn von 13,90 € sind das rund 43,38 Stunden pro Monat bzw. etwa 10,01 Stunden pro Woche im Schnitt.',
  },
  {
    q: 'Wie viele Stunden sind bei 14 € Stundenlohn möglich?',
    a: 'Bei 14 € Stundenlohn sind es 603 € ÷ 14 € = 43,07 Stunden pro Monat, im Durchschnitt rund 9,94 Stunden pro Woche.',
  },
  {
    q: 'Wie viele Stunden sind bei 15 € Stundenlohn möglich?',
    a: 'Bei 15 € Stundenlohn sind es 603 € ÷ 15 € = 40,20 Stunden pro Monat, im Durchschnitt rund 9,28 Stunden pro Woche.',
  },
  {
    q: 'Was passiert, wenn ich mehr als 603 € verdiene?',
    a: 'Gelegentliches, unvorhersehbares Überschreiten der Grenze ist begrenzt möglich: in bis zu 2 Kalendermonaten pro Jahr darf der Verdienst auf bis zu 1.206 € (das Doppelte) steigen, ohne dass der Minijob-Status verloren geht. Wer dagegen regelmäßig über 603 € verdient, rutscht aus dem Minijob in den Übergangsbereich ("Midijob", bis 2.000 € brutto) — dort gelten dann anteilige Sozialversicherungsbeiträge.',
  },
  {
    q: 'Gilt der Mindestlohn auch für Minijobs?',
    a: 'Ja. Seit Einführung des gesetzlichen Mindestlohns 2015 gilt er ausnahmslos auch für Minijobber:innen. 2026 beträgt er 13,90 € pro Stunde. Manche Branchen haben zusätzlich höhere tarifliche Mindestlöhne, die dann statt des gesetzlichen Mindestlohns gelten.',
  },
  {
    q: 'Kann ich im Minijob unterschiedlich viele Stunden pro Monat arbeiten?',
    a: 'Ja. Die 603-€-Grenze wird im Schnitt über das Jahr betrachtet (bis zu 7.236 € pro Jahr), nicht als starrer Monatswert. Du kannst also in einem Monat mehr und in einem anderen weniger arbeiten, solange sich das im Jahresschnitt ausgleicht.',
  },
]

export default function MinijobStundenlohnFaq() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Minijob Stundenlohn – Häufig gestellte Fragen 2026
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Die wichtigsten Fragen zu Stundenlohn, Mindestlohn und maximaler Stundenzahl im Minijob 2026.
      </p>
      <div className="space-y-1">
        {faqsStundenlohn.map((faq, index) => (
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