import { ArrowRight, Info } from 'lucide-react'
import Link from 'next/link'

export default function MinijobStundenlohnContent() {
  return (
    <section className="space-y-6">

      {/* ── Wie wird berechnet ── */}
      <article id="berechnung" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Wie berechnet man die Stunden beim Minijob?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Die maximale Stundenzahl im Minijob ergibt sich einfach aus der{' '}
          <strong>603-€-Verdienstgrenze</strong> geteilt durch den Stundenlohn:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 text-center">
          <code className="text-sm sm:text-base font-mono text-blue-900">
            603 € ÷ Stundenlohn = maximale Arbeitsstunden pro Monat
          </code>
        </div>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Beispiel: Bei 15 € Stundenlohn sind das <strong>603 € ÷ 15 € = 40,20 Stunden</strong> pro Monat,
          im Schnitt also gut 9 Stunden pro Woche. Wie viele Stunden davon tatsächlich in einer bestimmten
          Woche anfallen, hängt vom vereinbarten Arbeitsplan ab — wichtig ist am Ende nur, dass der
          Monatsverdienst im Schnitt 603 € nicht übersteigt.
        </p>
      </article>

      {/* ── Mindestlohn ── */}
      <article id="mindestlohn" className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Welcher Mindestlohn gilt beim Minijob 2026?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Seit dem 1. Januar 2026 gilt in Deutschland ein gesetzlicher Mindestlohn von{' '}
          <strong>13,90 € brutto pro Stunde</strong> — er steigt zum 1. Januar 2027 weiter auf{' '}
          <strong>14,60 €</strong>. Der Mindestlohn gilt uneingeschränkt auch für Minijobs; es gibt keine
          Ausnahme für geringfügig Beschäftigte.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Die Minijob-Grenze von 603 € ist sogar direkt an den Mindestlohn gekoppelt: Sie entspricht rechnerisch
          rund 10 Wochenstunden zum Mindestlohn (10 Std. × 13,90 € × 4,33 Wochen ≈ 603 €). Steigt künftig der
          Mindestlohn weiter, steigt in der Regel auch die Minijob-Grenze mit.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-xs sm:text-sm text-amber-900">
            <strong>Warum darf ich bei einem höheren Stundenlohn weniger Stunden arbeiten?</strong> Weil die
            Verdienstgrenze von 603 € fix bleibt: Verdienst du mehr pro Stunde, erreichst du diese Grenze
            schneller — dir bleiben also rechnerisch weniger Stunden, bevor du den Minijob-Status verlässt.
            Bei 20 € Stundenlohn sind es rund 30 Stunden im Monat, bei 13,90 € (Mindestlohn) dagegen rund 43 Stunden.
          </p>
        </div>
      </article>

      {/* ── Stunden vs. Verdienst ── */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Muss ich jeden Monat genau gleich viele Stunden arbeiten?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
          Nein. Die 603-€-Grenze ist ein <strong>durchschnittlicher Monatsverdienst über das Jahr</strong>{' '}
          (bis zu 7.236 € pro Jahr), kein starrer Monatswert. In einem Monat mit mehr Bedarf kannst du also
          mehr arbeiten und mehr verdienen, solange das in anderen Monaten entsprechend ausgeglichen wird und
          der Jahresverdienst insgesamt nicht über 7.236 € liegt.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Für gelegentliche, unvorhersehbare Ausnahmen (z. B. spontane Mehrarbeit wegen Krankheitsvertretung)
          darf die Grenze in bis zu <strong>2 Monaten pro Jahr</strong> auf bis zu{' '}
          <strong>1.206 €</strong> (das Doppelte) steigen, ohne den Minijob-Status zu gefährden. Das ist aber
          die Ausnahme und keine Grundlage für dauerhaft mehr Stunden — wer regelmäßig über der Grenze
          verdient, rutscht in den Übergangsbereich ("Midijob") mit anderen Regeln.
        </p>
      </article>

      {/* ── Internal link to /minijob-stunden ── */}
      <Link
        href="/minijob-stunden"
        className="block bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 sm:p-6 hover:border-blue-400 transition-colors group"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-blue-900 text-sm sm:text-base mb-1">
              Du möchtest wissen, wie viele Stunden du grundsätzlich im Minijob arbeiten darfst?
            </h3>
            <p className="text-xs sm:text-sm text-blue-700">
              Zum Minijob-Stunden-Rechner 2026 — unabhängig vom Stundenlohn.
            </p>
          </div>
          <ArrowRight className="text-blue-500 group-hover:translate-x-1 transition-transform shrink-0" size={22} />
        </div>
      </Link>

      <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <Info size={18} className="text-gray-500 mt-0.5 shrink-0" />
        <p className="text-xs sm:text-sm text-gray-600">
          Alle Berechnungen auf dieser Seite gehen von einer Minijob-Grenze von 603 € und dem gesetzlichen
          Mindestlohn von 13,90 € (Stand 2026) aus. Tarifliche oder betriebliche Mindestlöhne können höher liegen.
        </p>
      </div>
    </section>
  )
}