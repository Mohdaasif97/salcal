// Pure server component — zero JavaScript, CSS-only accordion via <details>/<summary>
// All content indexed by Google immediately on page load

export const faqsGrenze = [
  {
    q: 'Was ist die Minijob-Grenze 2026?',
    a: 'Die Minijob-Grenze 2026 beträgt 603 Euro pro Monat (7.236 Euro pro Jahr) — gültig seit dem 1. Januar 2026. Diese Grenze ist direkt an den gesetzlichen Mindestlohn von 13,90 Euro pro Stunde gekoppelt. Wer im Monatsdurchschnitt nicht mehr verdient, gilt als geringfügig Beschäftigter und profitiert von Pauschalregelungen: keine Abzüge für Kranken-, Pflege- und Arbeitslosenversicherung. Gegenüber 2025 (556 Euro) ist die Grenze um 47 Euro (+8,5%) gestiegen.',
  },
  {
    q: 'Wie wird die Minijob-Grenze 2026 berechnet?',
    a: 'Die Minijob-Grenze berechnet sich aus dem gesetzlichen Mindestlohn multipliziert mit 43,33 durchschnittlichen Arbeitsstunden pro Monat. Formel: Mindestlohn × (10 Wochenstunden × 52 Wochen ÷ 12 Monate) = 13,90 € × 43,38 Stunden = 603 Euro. Steigt der Mindestlohn, steigt automatisch auch die Minijob-Grenze — das Prinzip der dynamischen Kopplung gilt seit Oktober 2022.',
  },
  {
    q: 'Wie viele Stunden darf ich im Minijob 2026 arbeiten?',
    a: 'Es gibt KEINE gesetzliche Stundenbegrenzung beim Minijob — entscheidend ist nur der monatliche Verdienst von maximal 603 Euro. Bei Mindestlohn (13,90 €/h) sind das rund 43 Stunden pro Monat. Bei höherem Lohn entsprechend weniger: Bei 15 €/h etwa 40 Stunden, bei 20 €/h rund 30 Stunden pro Monat. Die Stunden können flexibel über den Monat verteilt werden.',
  },
  {
    q: 'Darf ich die Minijob-Grenze gelegentlich überschreiten?',
    a: 'Ja, ein gelegentliches und unvorhersehbares Überschreiten ist erlaubt — jedoch maximal in 2 Kalendermonaten innerhalb eines rückwärtigen Zeitjahres. In diesen Ausnahme-Monaten darf der Verdienst höchstens das Doppelte der Grenze betragen, also maximal 1.206 Euro. Die Jahresentgeltgrenze von 8.442 Euro darf dabei nicht überschritten werden. Vorhersehbare Überschreitungen (z.B. festes Urlaubsgeld) gelten nicht als Ausnahme.',
  },
  {
    q: 'Muss ich beim Minijob Steuern zahlen?',
    a: 'Als Arbeitnehmer zahlen Sie in der Regel KEINE Lohnsteuer aus dem Minijob — der Arbeitgeber übernimmt eine pauschale Lohnsteuer von 2%. Diese pauschale Besteuerung gilt als abschließend, sodass der Minijob meist nicht in der Steuererklärung angegeben werden muss. Ausnahme: Wenn der Arbeitgeber die Lohnsteuer nicht pauschal abführt oder Sie andere steuerliche Pflichten haben, kann eine Erklärungspflicht entstehen.',
  },
  {
    q: 'Bin ich im Minijob krankenversichert?',
    a: 'Minijobber zahlen keine eigenen Krankenversicherungsbeiträge. Der Schutz besteht jedoch weiterhin: Entweder über die Familienversicherung (bei gesetzlich versicherten Ehepartnern oder Eltern), als freiwilliges Mitglied einer gesetzlichen Kasse, oder über eine private Krankenversicherung. Der Arbeitgeber zahlt zwar 13% KV-Pauschale an die Minijob-Zentrale, diese gilt aber als pauschale Abgabe — nicht als individueller Versicherungsschutz des Minijobbers.',
  },
  {
    q: 'Was ist der Unterschied zwischen Minijob und Midijob 2026?',
    a: 'Minijob (bis 603 €/Monat): Keine Sozialversicherungspflicht für den Arbeitnehmer, Arbeitgeber zahlt Pauschalabgaben (~32,47%). Midijob (603,01 € bis 2.000 €/Monat): Sozialversicherungspflicht besteht, aber mit reduzierten Beitragssätzen für den Arbeitnehmer — ein gleitender Übergang (Gleitzone). Im Midijob sind Arbeitnehmer vollständig kranken-, pflege-, renten- und arbeitslosenversichert, zahlen aber weniger als bei einer regulären Beschäftigung.',
  },
  {
    q: 'Kann ich als Rentner einen Minijob machen?',
    a: 'Ja, Rentner können einen Minijob ausüben — bis 603 Euro pro Monat ohne Einschränkungen. Seit 2023 gibt es zudem keine Hinzuverdienstgrenze mehr für Altersrentner, das heißt: Der Minijob-Verdienst hat keine negativen Auswirkungen auf die Rentenhöhe. Auch als Frührentner (Erwerbsminderungsrente) ist ein Minijob möglich, hier gelten aber Hinzuverdienstgrenzen, die individuell geprüft werden sollten.',
  },
  {
    q: 'Wie melde ich einen Minijob an?',
    a: 'Der Arbeitgeber muss den Minijob VOR Arbeitsbeginn bei der Minijob-Zentrale (Deutsche Rentenversicherung Knappschaft-Bahn-See) anmelden. Die Anmeldung ist kostenlos und erfolgt online unter minijob-zentrale.de oder per Post. Benötigt werden: Steueridentifikationsnummer des Arbeitnehmers, Sozialversicherungsausweis und Personaldaten. Eine rückwirkende Anmeldung ist nicht erlaubt. Bei Verstoß drohen Bußgelder bis zu 5.000 Euro.',
  },
  {
    q: 'Wie hoch wird die Minijob-Grenze 2027 sein?',
    a: 'Für 2027 ist der Mindestlohn bereits auf 14,60 Euro festgelegt. Damit wird die Minijob-Grenze automatisch auf voraussichtlich 633 Euro pro Monat (7.596 Euro/Jahr) steigen. Das wäre eine weitere Erhöhung um 30 Euro gegenüber 2026. Die dynamische Kopplung an den Mindestlohn sorgt dafür, dass die Grenze zuverlässig mit jeder Mindestlohnerhöhung steigt.',
  },
  {
    q: 'Hat ein Minijob Einfluss auf das BAföG?',
    a: 'Minijob-Verdienste bis 603 Euro haben in der Regel KEINEN negativen Einfluss auf das BAföG. Es gibt einen anrechnungsfreien Freibetrag von 520 Euro pro Monat für Nebeneinkünfte. Da Minijob-Verdienste steuerlich pauschal behandelt werden, werden sie bei der BAföG-Berechnung häufig gar nicht berücksichtigt. Zur Sicherheit sollte beim zuständigen Studentenwerk nachgefragt werden, da individuelle Situationen variieren können.',
  },
  {
    q: 'Bekomme ich als Minijobber Urlaubsgeld und Lohnfortzahlung im Krankheitsfall?',
    a: 'Ja! Minijobber haben dieselben gesetzlichen Rechte wie Vollzeitbeschäftigte. Urlaubsanspruch: Mindestens 20 Werktage (5-Tage-Woche) anteilig nach Arbeitstagen. Lohnfortzahlung: Bei Krankheit zahlt der Arbeitgeber bis zu 6 Wochen den vollen Lohn weiter. Mutterschutz: Vollständiger Schutz durch das Mutterschutzgesetz. Diese Rechte entstehen automatisch durch das Beschäftigungsverhältnis — unabhängig von der Stundenzahl.',
  },
]

export default function MinijobGrenzeFaq() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Minijob Grenze 2026 FAQ – Häufig gestellte Fragen
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Die wichtigsten Fragen und Antworten zur Minijob-Grenze 2026 — von der Berechnung bis zur Anmeldung.
      </p>
      <div className="space-y-1">
        {faqsGrenze.map((faq, index) => (
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