export const faqsNebenjob = [
  {
    q: 'Darf ich neben meinem Hauptjob einen Minijob machen?',
    a: 'Ja, neben einem sozialversicherungspflichtigen Hauptjob darf genau ein Minijob ausgeübt werden — bis 603 Euro pro Monat (Stand 2026). Dieser Nebenjob hat keine Auswirkung auf das Hauptgehalt, die Steuerklasse oder die Sozialversicherungsbeiträge des Hauptjobs. Arbeitnehmer zahlen im Nebenjob keine eigenen Steuern oder SV-Beiträge.',
  },
  {
    q: 'Brauche ich die Erlaubnis meines Hauptarbeitgebers für einen Minijob?',
    a: 'Ein pauschales Verbot von Nebenjobs im Arbeitsvertrag ist rechtlich unwirksam. Jedoch kann der Hauptvertrag eine Anzeigepflicht enthalten — das heißt, Sie müssen Ihren Arbeitgeber informieren. Außerdem darf der Nebenjob keine Konkurrenzklausel verletzen und die Gesamtarbeitszeit (Haupt- + Nebenjob) darf das Arbeitszeitgesetz nicht überschreiten.',
  },
  {
    q: 'Wie viele Minijobs darf ich neben meinem Hauptjob haben?',
    a: 'Genau einen Minijob dürfen Sie neben einem Hauptjob steuerlich und sozialversicherungsrechtlich privilegiert ausüben. Ein zweiter Minijob neben dem Hauptjob wird mit dem Hauptjob zusammengerechnet und ist dann voll sozialversicherungspflichtig — auch wenn der Verdienst unter 603 Euro liegt.',
  },
  {
    q: 'Muss ich den Minijob-Nebenjob in der Steuererklärung angeben?',
    a: 'Nein — wenn Ihr Arbeitgeber des Nebenjobs die 2%-Pauschsteuer anwendet (Regelfall), müssen Sie den Minijob nicht in der Steuererklärung angeben. Die Pauschsteuer gilt als abgeltend und deckt Lohnsteuer, Solidaritätszuschlag und Kirchensteuer ab. Der Nebenjob hat damit keinen Einfluss auf Ihre persönliche Einkommensteuer.',
  },
  {
    q: 'Verändert ein Minijob-Nebenjob meine Steuerklasse?',
    a: 'Nein. Ein pauschal besteuerter Minijob-Nebenjob hat keinerlei Auswirkung auf Ihre Steuerklasse im Hauptjob. Die Steuerklasse des Hauptjobs bleibt unverändert. Erst bei individueller Besteuerung (nach Lohnsteuerklasse) könnten Wechselwirkungen entstehen — aber das ist beim Minijob nicht der Regelfall.',
  },
  {
    q: 'Kann ich als Student einen Minijob als Nebenjob machen?',
    a: 'Ja. Als Student können Sie einen Minijob bis 603 Euro/Monat ausüben. Der pauschal besteuerte Minijob wird in der Regel nicht auf das BAföG angerechnet (Freibetrag 520 Euro/Monat). Achten Sie jedoch darauf, dass die wöchentliche Gesamtarbeitszeit immatrikulationsrechtlich und nach Arbeitszeitgesetz eingehalten wird.',
  },
  {
    q: 'Beeinflusst ein Minijob-Nebenjob das Elterngeld?',
    a: 'Ja. Während der Elternzeit ist ein Minijob bis 603 Euro/Monat erlaubt (max. 32 Stunden/Woche). Das Elterngeld wird jedoch durch den Minijob-Verdienst beeinflusst: Bis 300 Euro Monatsverdienst bleibt das Elterngeld voll erhalten. Über 300 Euro wird das Elterngeld entsprechend gekürzt. Bei Elterngeld Plus gelten andere Regeln.',
  },
  {
    q: 'Hat ein Minijob-Nebenjob Auswirkungen auf das Arbeitslosengeld I?',
    a: 'Ja. Wer ALG I bezieht und einen Minijob ausübt, darf bis zu 165 Euro pro Monat anrechnungsfrei hinzuverdienen. Verdienst darüber wird vollständig auf das ALG I angerechnet. Außerdem darf die Arbeitszeit im Minijob maximal 15 Stunden pro Woche betragen — sonst gilt man als nicht mehr vollarbeitslos und verliert den ALG-I-Anspruch.',
  },
]

export default function MinijobNebenjobFaq() {
  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Minijob Nebenjob FAQ – Häufig gestellte Fragen
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Alle wichtigen Fragen zum Minijob als Nebenjob — von der Erlaubnis bis zu Steuern und Sondergruppen.
      </p>
      <div className="space-y-1">
        {faqsNebenjob.map((faq, index) => (
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
