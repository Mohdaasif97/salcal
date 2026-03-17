// Pure server component — zero JavaScript, CSS-only accordion via <details>/<summary>
// All content indexed by Google immediately on page load

export const faqs = [
  {
    q: 'Was ist ein Minijob? Definition & Bedeutung',
    a: 'Ein Minijob ist eine geringfügige Beschäftigung in Deutschland mit einem monatlichen Verdienst bis 603 Euro (Stand 2026). Die offizielle Bezeichnung ist "geringfügige Beschäftigung" gemäß § 8 SGB IV. Der Arbeitgeber zahlt keine normalen Sozialversicherungsbeiträge, sondern Pauschalabgaben an die Minijob-Zentrale. Der Arbeitnehmer erhält das Bruttogehalt in der Regel vollständig steuerfrei als Netto — ohne Abzüge für Kranken-, Pflege- oder Arbeitslosenversicherung. Lediglich ein optionaler Rentenversicherungsbeitrag von 3,6% kann anfallen.',
  },
  {
    q: 'Wie hoch ist die Minijob-Grenze 2026?',
    a: 'Die Minijob-Grenze 2026 beträgt genau 603 Euro pro Monat (ab 1. Januar 2026). Diese Grenze ist direkt an den gesetzlichen Mindestlohn von 13,90€ pro Stunde gekoppelt. Das ergibt sich aus 43,33 durchschnittlichen Arbeitsstunden pro Monat multipliziert mit dem Mindestlohn. Gegenüber 2025 (556€) ist die Grenze um 47€ (+8,5%) gestiegen. Wenn der Mindestlohn zukünftig weiter angehoben wird, steigt die Minijob-Grenze automatisch mit.',
  },
  {
    q: 'Was ist die Rentenversicherungspflicht beim Minijob?',
    a: 'Seit dem 1. Januar 2013 sind Minijobber automatisch in der gesetzlichen Rentenversicherung pflichtversichert. Sie zahlen einen Eigenbeitrag von 3,6% ihres Bruttogehalts (Beispiel: bei 603€ = 21,71€ monatlich). Diese Beiträge werden später bei der Rentenberechnung berücksichtigt. Allerdings können Sie sich von dieser Pflicht befreien lassen (Befreiungsantrag gemäß § 6 Abs. 1b SGB VI). Mit Befreiung erhalten Sie das volle Bruttogehalt als Netto, verzichten aber auf den Aufbau von Rentenansprüchen aus diesem Job.',
  },
  {
    q: 'Wie viel Stunden darf ich im Minijob arbeiten?',
    a: 'Es gibt KEINE gesetzliche Stundenbegrenzung beim Minijob — das ist ein häufiger Irrtum! Entscheidend ist ausschließlich die monatliche Verdienstgrenze von 603 Euro. Wenn Sie den gesetzlichen Mindestlohn von 13,90€/h verdienen, entspricht das etwa 43 Stunden pro Monat oder rund 10 Stunden pro Woche. Sie könnten aber auch 40 Stunden in einer Woche arbeiten und die restlichen Wochen des Monats gar nicht — solange die 603€ nicht überschritten werden. Wichtig ist nur das Ergebnis am Monatsende.',
  },
  {
    q: 'Kann ich mehrere Minijobs gleichzeitig haben?',
    a: 'Ja, Sie können mehrere Minijobs gleichzeitig ausüben. Aber es gilt: Das Gesamteinkommen aus allen geringfügigen Beschäftigungen zusammen darf die Verdienstgrenze von 603 Euro monatlich nicht überschreiten. Wenn Sie also zwei Minijobs haben und zusammen 650€ verdienen, überschreiten Sie die Grenze — dann werden reguläre Sozialversicherungsbeiträge fällig. Eine Besonderheit: Wer einen regulären sozialversicherungspflichtigen Hauptjob hat, darf daneben genau einen Minijob ausüben, ohne dass dieser auf das Hauptgehalt angerechnet wird.',
  },
  {
    q: 'Was passiert, wenn ich die Minijob-Grenze überschreite?',
    a: 'Wenn die Verdienstgrenze von 603 Euro überschritten wird, endet die Minijob-Regelung automatisch. Das Arbeitsverhältnis wird dann als reguläre sozialversicherungspflichtige Beschäftigung eingestuft. Es fallen sofort die vollen Sozialversicherungsbeiträge an: Krankenversicherung (~14,6%), Pflegeversicherung (~3,6%), Rentenversicherung (~18,6%) und Arbeitslosenversicherung (2,6%). Das führt zu deutlich höheren Abzügen für Arbeitnehmer und höheren Kosten für Arbeitgeber. Die Minijob-Zentrale ist zu informieren und der Arbeitgeber muss neu bei der Krankenkasse anmelden.',
  },
  {
    q: 'Muss ich einen Minijob beim Finanzamt angeben?',
    a: 'Ein Minijob als einzige Beschäftigung muss in der Regel NICHT in der Steuererklärung angegeben werden. Der Grund: Der Arbeitgeber zahlt bereits eine pauschale Lohnsteuer von 2% (die Pauschalsteuer ist eine abschließende Besteuerung). Wenn Sie jedoch mehrere Einkünfte haben — z.B. zwei Minijobs, einen Minijob neben einem Hauptjob, oder zusätzliche Freelance-Einkünfte — kann eine Steuererklärung sinnvoll oder sogar Pflicht sein. Im Zweifelsfall empfiehlt sich eine Beratung beim Steuerberater oder Lohnsteuerhilfeverein.',
  },
  {
    q: 'Was kostet ein Minijob den Arbeitgeber? Gesamtkosten 2026',
    a: 'Die Gesamtkosten für den Arbeitgeber setzen sich aus Bruttolohn und Pauschalabgaben zusammen. Gewerblicher Minijob (z.B. Laden, Restaurant): Bei 603€ Brutto zahlt der Arbeitgeber 32,47% Pauschalabgaben = 195,71€, also insgesamt ca. 798€ Gesamtkosten pro Monat. Privathaushalt-Minijob (z.B. Haushaltshilfe): Bei 603€ Brutto fallen nur 14,62% Abgaben = 88,16€ an, also ca. 691€ Gesamtkosten. Der Privathaushalt spart dem Arbeitgeber monatlich etwa 107€ gegenüber dem gewerblichen Minijob.',
  },
  {
    q: 'Haben Minijobber Anspruch auf Urlaub und Lohnfortzahlung?',
    a: 'Ja! Minijobber haben exakt dieselben gesetzlichen Rechte wie Vollzeit-Arbeitnehmer. Urlaubsanspruch: Mindestens 20 Werktage (bei 5-Tage-Woche) pro Kalenderjahr, anteilig nach tatsächlichen Arbeitstagen. Lohnfortzahlung bei Krankheit: Der Arbeitgeber muss bis zu 6 Wochen den vollen Lohn weiterzahlen. Mutterschutz: Minijobberinnen sind vollständig durch das Mutterschutzgesetz geschützt. Unfallversicherung: Automatischer Schutz bei Arbeits- und Wegeunfällen ist inbegriffen. All diese Rechte entstehen durch die Pauschalabgaben, die der Arbeitgeber zahlt.',
  },
  {
    q: 'Wie funktioniert die Anmeldung eines Minijobs bei der Minijob-Zentrale?',
    a: 'Die Anmeldung muss VOR Beginn der Beschäftigung erfolgen — rückwirkende Anmeldungen sind nicht erlaubt! Zuständig ist die Minijob-Zentrale (Betriebsnummer: 72040000). Der Ablauf: (1) Arbeitgeber meldet den Minijob online unter minijob-zentrale.de oder per Post an. (2) Arbeitnehmer benötigt Steueridentifikationsnummer und Sozialversicherungsausweis. (3) Die Anmeldung ist kostenlos. (4) Bearbeitung dauert ca. 5–10 Arbeitstage. Ohne Anmeldung ist das Arbeitsverhältnis nicht versichert und es drohen Bußgelder bis 5.000€.',
  },
  {
    q: 'Minijob-Grenze 2025 vs. 2026 – Was hat sich geändert?',
    a: '2025: Minijob-Grenze 556€/Monat, Mindestlohn 12,41€/h. 2026: Minijob-Grenze 603€/Monat, Mindestlohn 13,90€/h. Die Erhöhung beträgt 47€ pro Monat (+8,5%), was aufs Jahr hochgerechnet 564€ mehr bedeutet. Mit dem neuen Mindestlohn von 13,90€ können Minijobber etwa 43 Stunden pro Monat arbeiten und die volle Minijob-Grenze von 603€ ausschöpfen. Für Arbeitgeber steigen die Pauschalabgaben leicht an, aber auch die Flexibilität bei der Stundenplanung verbessert sich.',
  },
  {
    q: 'Kann ich als Student einen Minijob machen?',
    a: 'Ja, Studenten können problemlos Minijobs ausüben. Wichtige Punkte: (1) Die monatliche Verdienstgrenze von 603€ muss eingehalten werden. (2) Familienversicherung: Wenn Sie über die Eltern in der gesetzlichen Krankenversicherung versichert sind, bleibt dieser Status durch einen Minijob unberührt. (3) BAföG: Ein Minijob beeinflusst das BAföG nicht negativ — es gibt Freibeträge, und Minijobverdienste werden nicht angerechnet. (4) Arbeitszeit: Während der Vorlesungszeit sollte die Arbeitszeit 20 Stunden pro Woche nicht überschreiten, damit die Studenteneigenschaft erhalten bleibt. (5) Mehrere Minijobs sind erlaubt, solange die Gesamtgrenze von 603€ eingehalten wird.',
  },
]

export default function MiniJobFaqStatic() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Minijob FAQ 2026 – Häufig Gestellte Fragen
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Die wichtigsten Fragen und Antworten zum Minijob 2026 in Deutschland — von der Grenze bis zur Anmeldung.
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