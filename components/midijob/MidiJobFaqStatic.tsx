// Pure server component — zero JavaScript, CSS-only accordion via <details>/<summary>
// All content indexed by Google immediately on page load

export const faqs = [
  {
    q: 'Was ist ein Midijob? Definition & Bedeutung 2026',
    a: 'Ein Midijob ist eine sozialversicherungspflichtige Beschäftigung im sogenannten Übergangsbereich (früher: Gleitzone) gemäß § 20 SGB IV. 2026 liegt ein Midijob vor, wenn das monatliche Bruttogehalt zwischen 603,01 Euro und 2.000 Euro liegt. Im Gegensatz zum Minijob sind Midijobber vollständig sozialversichert (KV, PV, RV, AV), zahlen aber reduzierte Arbeitnehmerbeiträge zur Sozialversicherung. Der Arbeitgeber zahlt seinen regulären Anteil – berechnet auf einer etwas reduzierten Bemessungsgrundlage.',
  },
  {
    q: 'Wie hoch ist die Midijob-Grenze 2026?',
    a: 'Die Midijob-Grenze 2026 liegt zwischen 603,01 Euro (Untergrenze) und 2.000 Euro (Obergrenze) pro Monat. Die Untergrenze ist direkt an die Minijob-Grenze und den gesetzlichen Mindestlohn (13,90 €/h) gekoppelt. Gegenüber 2025 (Untergrenze: 556,01 €) ist die Grenze um 47 Euro gestiegen. Die Obergrenze von 2.000 € gilt seit dem 1. Oktober 2022 und wurde seitdem nicht verändert.',
  },
  {
    q: 'Wie berechnet der Midijob Rechner das Netto-Gehalt?',
    a: 'Der Midijob Rechner Brutto Netto berechnet die Sozialversicherungsbeiträge nach der gesetzlichen Gleitzonenformel (§ 20 SGB IV). Dazu wird zunächst die reduzierte Bemessungsgrundlage für den Arbeitnehmeranteil ermittelt: BE_AN = 1,4316 × Bruttogehalt − 863,28 (für 2026, Faktor F = 0,6619). Auf diese Basis werden dann die halben Beitragssätze für KV, PV, RV und AV angewendet. Das Netto ergibt sich aus Brutto minus diesen reduzierten SV-Abzügen. Lohnsteuer wird separat berechnet und hängt von der Steuerklasse ab.',
  },
  {
    q: 'Was ist der Faktor F beim Midijob Rechner?',
    a: 'Der Faktor F ist eine jährlich vom Bundesministerium für Arbeit und Soziales (BMAS) festgelegte Kennzahl, die für die Berechnung der reduzierten Sozialversicherungsbeiträge im Übergangsbereich entscheidend ist. Er ergibt sich aus: 28% ÷ durchschnittlicher Gesamtsozialversicherungsbeitragssatz. Für 2026 beträgt Faktor F = 0,6619 (2025: 0,6683). Je niedriger der Faktor, desto geringer die Entlastung des Arbeitnehmers. Der Faktor F fließt direkt in die Gleitzonenformel ein.',
  },
  {
    q: 'Midijob Rechner Steuerklasse 1 vs. Steuerklasse 5 – Was ist der Unterschied?',
    a: 'Die Steuerklasse beeinflusst beim Midijob ausschließlich die Lohnsteuer, NICHT die Sozialversicherungsbeiträge. Bei Steuerklasse 1 (ledig) fällt unterhalb von ca. 1.050 € monatlich meist keine Lohnsteuer an, da das Jahreseinkommen unter dem Grundfreibetrag (12.348 € in 2026) liegt. Bei Steuerklasse 3 (verheiratete Hauptverdiener) ist die Entlastung noch größer. Bei Steuerklasse 5 hingegen werden bereits bei niedrigen Midijob-Einkommen Lohnsteuern einbehalten, die aber über die Steuererklärung zurückerstattet werden können.',
  },
  {
    q: 'Was kostet ein Midijob den Arbeitgeber?',
    a: 'Der Arbeitgeber zahlt beim Midijob seinen Sozialversicherungsanteil auf eine eigene Bemessungsgrundlage (BE_Gesamt = 1,1459 × Bruttolohn − 291,84). Bei 1.200 € Bruttolohn beispielsweise: BE_Gesamt ≈ 1.083 €. Darauf zahlt der Arbeitgeber ca. 21% SV-Beiträge ≈ 227 €. Gesamtkosten: ca. 1.427 € pro Monat. Hinzu kommen ggf. Umlagen (U1, U2) je nach Betriebsgröße und Branche. Der Arbeitgeber muss den Midijob bei der zuständigen Krankenkasse anmelden – nicht bei der Minijob-Zentrale.',
  },
  {
    q: 'Kann ich neben einem Midijob noch einen Minijob haben?',
    a: 'Ja, neben einem Midijob ist genau ein geringfügiger (steuerfreier) Minijob möglich, ohne dass dieser auf den Midijob angerechnet wird. Der Minijob bleibt sozialversicherungsfrei. Wichtig: Wenn Sie mehrere sozialversicherungspflichtige Beschäftigungen haben, werden diese zusammengerechnet. Überschreitet das Gesamteinkommen 2.000 €, gelten für alle Beschäftigungen die normalen Sozialversicherungsregeln.',
  },
  {
    q: 'Midijob Krankenversicherung: Bin ich vollständig versichert?',
    a: 'Ja, im Midijob sind Sie vollständig gesetzlich krankenversichert – das ist der entscheidende Vorteil gegenüber dem Minijob. Sie haben Anspruch auf alle Leistungen Ihrer Krankenkasse: Arztbesuche, Krankenhausaufenthalte, Krankengeld (nach 6 Wochen Lohnfortzahlung durch den Arbeitgeber), Mutterschaftsgeld und mehr. Der KV-Beitrag 2026 beträgt 14,6% + individueller Zusatzbeitrag Ihrer Kasse (Ø 2,90%), wird aber nur auf die reduzierte Bemessungsgrundlage berechnet.',
  },
  {
    q: 'Midijob Grenze 2025 vs. 2026 – Was hat sich geändert?',
    a: '2025: Midijob-Untergrenze 556,01 €/Monat, Faktor F: 0,6683. 2026: Midijob-Untergrenze 603,01 €/Monat, Faktor F: 0,6619. Die Obergrenze bleibt bei 2.000 €. Der KV-Zusatzbeitrag stieg von Ø 1,7% (2025) auf Ø 2,9% (2026). Die Pflegeversicherung beträgt 2026 3,6% (2025: 3,4%). Diese Änderungen führen dazu, dass die effektiven SV-Abzüge für Midijobber 2026 etwas höher ausfallen als im Vorjahr, obwohl die Gleitzonenentlastung weiterhin gilt.',
  },
  {
    q: 'Hat ein Midijobber Anspruch auf Urlaub und Lohnfortzahlung?',
    a: 'Ja, uneingeschränkt. Midijobber haben exakt dieselben gesetzlichen Arbeitnehmerrechte wie Vollzeitbeschäftigte: Urlaubsanspruch mindestens 20 Arbeitstage (5-Tage-Woche) pro Jahr, 6 Wochen Lohnfortzahlung im Krankheitsfall durch den Arbeitgeber, vollständiger Mutterschutz und Elternzeit, Schutz vor Kündigung, Mindestlohn (13,90 €/h), Anspruch auf Arbeitszeugnis. Außerdem entsteht durch die RV-Beiträge im Midijob voller Rentenanspruch – trotz der reduzierten Beitragshöhe.',
  },
  {
    q: 'Lohnt sich ein Midijob für Rentner?',
    a: 'Ja. Seit dem 1. Juli 2023 können Rentner (auch Altersrentner vor Erreichen der Regelaltersgrenze) unbegrenzt hinzuverdienen, ohne dass ihre Rente gekürzt wird. Ein Midijob lohnt sich für Rentner, weil: (1) voller Verdienst neben der Rente möglich, (2) reduzierte Sozialversicherungsbeiträge durch Gleitzone, (3) weitere Rentenpunkte werden gesammelt. Rentner zahlen im Midijob keine Arbeitslosenversicherung mehr. KV-Beiträge können je nach Versicherungsstatus abweichen.',
  },
  {
    q: 'Wie melde ich einen Midijob an?',
    a: 'Der Arbeitgeber meldet den Midijob bei der zuständigen Krankenkasse des Arbeitnehmers an – NICHT bei der Minijob-Zentrale (das ist ein häufiger Fehler!). Benötigt werden: Sozialversicherungsausweis des Arbeitnehmers, Steueridentifikationsnummer, Betriebsnummer des Arbeitgebers. Die Anmeldung muss vor Beginn der Beschäftigung erfolgen. Für die Lohnabrechnung empfiehlt sich eine Lohnabrechnungssoftware oder ein Steuerberater, da die Gleitzonenformel komplex ist.',
  },
]

export default function MidiJobFaqStatic() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Midijob FAQ 2026 – Häufig Gestellte Fragen
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Die wichtigsten Fragen zum Midijob Rechner, zur Midijob-Grenze, Krankenversicherung und Steuerklasse.
      </p>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <details key={index} className="group border-b border-gray-200 last:border-0">
            <summary className="flex items-center justify-between w-full text-left py-4 px-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors list-none">
              <span className="font-bold text-gray-900 pr-4 text-sm sm:text-base group-open:text-emerald-600">
                {faq.q}
              </span>
              <svg
                className="shrink-0 w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-emerald-600 transition-transform duration-200"
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
