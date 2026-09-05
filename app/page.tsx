import Link from 'next/link'
import type { Metadata } from 'next'
import AdBanner from './AdBanner'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Minijob Rechner 2026 – Netto berechnen, kostenlos & aktuell',
  description:
    'Minijob Netto-Gehalt & Arbeitgeberkosten sofort berechnen. Minijob-Grenze 603 €, Mindestlohn 13,90 €, gewerblich & Privathaushalt. Kostenlos, ohne Anmeldung.',
  keywords:
    'Minijob Rechner 2026, Minijob Netto, Minijob Grenze 2026, Minijob Kosten Arbeitgeber, geringfügige Beschäftigung, Midijob Rechner',
  alternates: { canonical: 'https://www.minijob-netto-rechner.de' },
  openGraph: {
    title: 'Minijob Rechner 2026 – Netto berechnen, kostenlos & aktuell',
    description:
      'Minijob Netto-Gehalt & Arbeitgeberkosten sofort berechnen. Minijob-Grenze 603 €, Mindestlohn 13,90 €.',
    url: 'https://www.minijob-netto-rechner.de',
    siteName: 'MinijobRechner.de',
    locale: 'de_DE',
    type: 'website',
  },
}

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'MinijobRechner.de',
      url: 'https://www.minijob-netto-rechner.de',
      description: 'Kostenlose Minijob und Midijob Rechner für Deutschland 2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist die Minijob-Grenze 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Minijob-Grenze liegt 2026 bei 603 € pro Monat. Bis zu diesem Betrag zahlen Arbeitnehmer keine Sozialversicherungsbeiträge (außer einem optionalen Rentenversicherungsbeitrag) und keine Lohnsteuer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viele Stunden darf ein Minijobber 2026 arbeiten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es gibt keine gesetzliche Stundenbegrenzung. Der Verdienst darf 603 € pro Monat nicht überschreiten. Beim Mindestlohn von 13,90 € entspricht das ca. 43 Stunden pro Monat.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was kostet ein Minijob den Arbeitgeber?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Arbeitgeber zahlen auf den Minijob-Lohn pauschal ca. 28–31 %: 15 % Rentenversicherung, 13 % Krankenversicherung (gewerblich) sowie Umlagen U1/U2 und Insolvenzgeldumlage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zwischen Minijob und Midijob?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Beim Minijob (bis 603 €/Monat) zahlen Arbeitnehmer keine Sozialabgaben. Beim Midijob (603–2.000 €, Übergangsbereich/Gleitzone) fallen reduzierte, einkommensabhängig steigende Sozialabgaben an.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie hoch ist der Mindestlohn beim Minijob 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Der gesetzliche Mindestlohn beträgt 2026 13,90 € pro Stunde. Er gilt auch für Minijobber. Daraus ergibt sich bei der 603 €-Grenze eine maximale Arbeitszeit von ca. 43 Stunden pro Monat.',
          },
        },
        {
          '@type': 'Question',
          name: 'Zahlen Minijobber Steuern?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In der Regel nicht — der Arbeitgeber kann die Lohnsteuer mit 2 % pauschal übernehmen. Alternativ ist eine Versteuerung nach Lohnsteuerklasse möglich, z. B. wenn der Arbeitnehmer mehrere Minijobs hat.',
          },
        },
      ],
    },
  ],
}

export default function HomePage() {

  const minijobTools = [
    {
      href: '/minijob-rechner',
      label: 'Minijob Rechner 2026',
      emoji: '⚡',
      badge: 'Beliebt',
      badgeColor: 'bg-blue-100 text-blue-700',
      desc: 'Netto-Gehalt & genaue Arbeitgeberkosten — gewerblich & Privathaushalt, mit/ohne Rentenversicherung.',
    },
    {
      href: '/minijob-grenze-2026',
      label: 'Minijob-Grenze 2026',
      emoji: '📋',
      badge: 'Aktuell',
      badgeColor: 'bg-green-100 text-green-700',
      desc: 'Verdienstgrenze 603 €, maximale Stundenzahl beim Mindestlohn & alle Änderungen ab Januar 2026.',
    },
    {
      href: '/minijob-kosten-arbeitgeber',
      label: 'Minijob Kosten Arbeitgeber',
      emoji: '🏢',
      badge: null,
      badgeColor: '',
      desc: 'Pauschalbeiträge, Umlagen U1/U2, Insolvenzumlage und Gesamtkosten auf einen Blick berechnen.',
    },
  ]

  const stats = [
    { value: '603 €',   label: 'Minijob-Grenze',    sub: 'ab Januar 2026' },
    { value: '13,90 €', label: 'Mindestlohn',         sub: 'pro Stunde 2026' },
    { value: '~43 h',   label: 'Max. Stunden/Monat',  sub: 'bei Mindestlohn' },
    { value: '0 €',     label: 'Kosten für Sie',      sub: 'immer kostenlos' },
  ]

  const faqs = [
    {
      q: 'Was ist die Minijob-Grenze 2026?',
      a: 'Die Minijob-Grenze liegt 2026 bei 603 € pro Monat. Bis zu diesem Betrag zahlen Arbeitnehmer keine Sozialversicherungsbeiträge (außer einem optionalen Rentenversicherungsbeitrag) und keine Lohnsteuer.',
    },
    {
      q: 'Wie viele Stunden darf ein Minijobber 2026 arbeiten?',
      a: 'Es gibt keine gesetzliche Stundenbegrenzung. Entscheidend ist der Verdienst: maximal 603 € pro Monat. Beim Mindestlohn von 13,90 € entspricht das ca. 43 Stunden pro Monat.',
    },
    {
      q: 'Was kostet ein Minijob den Arbeitgeber?',
      a: 'Arbeitgeber zahlen pauschal ca. 28–31 % auf den Bruttolohn: 15 % Rentenversicherung, 13 % Krankenversicherung (gewerblich) sowie Umlagen U1/U2 und Insolvenzgeldumlage.',
    },
    {
      q: 'Zahlen Minijobber Steuern?',
      a: 'In der Regel nicht — der Arbeitgeber kann die Lohnsteuer mit 2 % pauschal übernehmen. Alternativ ist eine Versteuerung nach Lohnsteuerklasse möglich, z. B. wenn der Arbeitnehmer mehrere Minijobs hat.',
    },
    {
      q: 'Was ist der Unterschied zwischen Minijob und Midijob?',
      a: 'Beim Minijob (bis 603 €/Monat) zahlen Arbeitnehmer keine Sozialabgaben. Beim Midijob (603,01–2.000 €, Übergangsbereich) fallen reduzierte, einkommensabhängig steigende Sozialabgaben an.',
    },
    {
      q: 'Kann ich neben einem Vollzeitjob einen Minijob haben?',
      a: 'Ja. Ein sozialversicherungspflichtiger Hauptjob und ein Minijob sind kombinierbar. Der Minijob bleibt abgabenfrei — aber nur ein Minijob darf neben dem Hauptjob ausgeübt werden.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#f8f9fc]">

        {/* ── Navbar ── */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="text-2xl">💼</span>
              <span className="font-bold text-gray-900 text-lg">
                Minijob<span className="text-blue-600">Rechner</span>.de
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <Link href="/minijob-rechner"           className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors">Minijob Rechner</Link>
              <Link href="/minijob-grenze-2026"        className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">Minijob-Grenze</Link>
              <Link href="/minijob-kosten-arbeitgeber" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">Arbeitgeberkosten</Link>
              <span className="w-px h-4 bg-gray-200 mx-1" />
              <Link href="/midijob-rechner"            className="px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">Midijob</Link>
            </div>

            <Link
              href="/minijob-rechner"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shrink-0"
            >
              Jetzt berechnen →
            </Link>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">

          {/* Ad: single instance — full-width white bar on mobile, small absolute
              corner card on desktop. Only ONE <AdBanner> here, so only one
              request fires per visitor regardless of screen size. */}
          <div className="
            max-sm:static max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-1
            max-sm:bg-white max-sm:py-3 max-sm:rounded-none max-sm:shadow-none
            sm:absolute sm:top-4 sm:right-4 sm:z-20 sm:bg-white/95 sm:rounded-lg sm:p-1 sm:shadow-lg
          ">
            <span className="block text-center text-[9px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">
              Anzeige
            </span>
            <AdBanner adKey="651fd88f51ec249f2c68668cd72931a8" width={320} height={50} />
          </div>

          <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20 text-center">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              ✅ Aktualisiert für 2026 · Minijob-Grenze 603 €
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
              Minijob Rechner 2026
              <br />
              <span className="text-yellow-300">Netto sofort berechnen</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-3">
              Wie viel bleibt netto vom Minijob? Was kostet ein Minijobber den Arbeitgeber?
              Kostenlos, ohne Anmeldung, direkt im Browser.
            </p>
            <p className="text-sm text-blue-200 mb-8">
              Mindestlohn 13,90 € · Minijob-Grenze 603 € · gewerblich & Privathaushalt · 2025 & 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/minijob-rechner" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base">
                ⚡ Minijob Netto berechnen
              </Link>
              <Link href="/minijob-kosten-arbeitgeber" className="bg-blue-800/50 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-800/70 transition-colors text-base border border-white/20">
                🏢 Arbeitgeberkosten berechnen
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-white border-b border-gray-200" aria-label="Minijob Kennzahlen 2026">
          <div className="max-w-6xl mx-auto px-4 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">{s.value}</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">{s.label}</p>
                <p className="text-xs text-gray-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ad: medium rectangle, placed right after stats so it's visible on laptop screens without scrolling */}
        <section className="bg-white border-b border-gray-200 py-5">
          <div className="max-w-6xl mx-auto px-4 flex justify-center">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">Anzeige</span>
              <AdBanner adKey="60325f09b6c48a1dd231fe9c5298233c" width={300} height={250} />
            </div>
          </div>
        </section>

        {/* ── Tools: Minijob primary (2/3) + Midijob sidebar (1/3) ── */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Minijob Rechner & Tools 2026
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-10">
            Alle kostenlosen Rechner rund um geringfügige Beschäftigung in Deutschland — aktuell für 2026.
          </p>

          <div className="flex flex-col lg:flex-row gap-6">

            {/* Primary: 3 Minijob tools */}
            <div className="flex-1 flex flex-col gap-5">
              {minijobTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{tool.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {tool.label}
                        </h3>
                        {tool.badge && (
                          <span className={`text-xs px-2 py-0.5 rounded-full font-bold shrink-0 ${tool.badgeColor}`}>
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{tool.desc}</p>
                    </div>
                    <span className="text-gray-300 group-hover:text-blue-500 transition-colors text-lg shrink-0">→</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Secondary sidebar: Midijob + info boxes */}
            <div className="lg:w-72 flex flex-col gap-5">

              {/* Midijob card — visually quieter */}
              <Link
                href="/midijob-rechner"
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">Verwandtes Tool</p>
                    <h3 className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors leading-snug">
                      Midijob Rechner 2026
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  Gleitzone 603–2.000 €: reduzierte Sozialabgaben im Übergangsbereich berechnen.
                </p>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-blue-500 transition-colors">
                  Zum Rechner →
                </span>
              </Link>

              {/* Minijob vs Midijob info */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-blue-800 mb-3">Minijob vs. Midijob</h3>
                <ul className="space-y-2.5 text-xs">
                  <li>
                    <span className="font-bold text-blue-800">Minijob</span>
                    <p className="text-blue-600 mt-0.5">bis 603 €/Monat — keine Sozialabgaben für Arbeitnehmer</p>
                  </li>
                  <li>
                    <span className="font-bold text-blue-800">Midijob</span>
                    <p className="text-blue-600 mt-0.5">603–2.000 €/Monat — reduzierte Abgaben (Gleitzone)</p>
                  </li>
                </ul>
                <Link href="/midijob-rechner" className="inline-block mt-3 text-xs font-semibold text-blue-600 hover:underline">
                  Midijob berechnen →
                </Link>
              </div>

              {/* Quick tip */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-yellow-800 mb-1">💡 Gut zu wissen</p>
                <p className="text-xs text-yellow-700 leading-relaxed">
                  Bei 13,90 €/h Mindestlohn und der Grenze von 603 € darf ein Minijobber maximal{' '}
                  <strong>ca. 43 Stunden pro Monat</strong> arbeiten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Primary CTA banner ── */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">Nr. 1 Minijob Rechner</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Minijob Netto berechnen — 2026</h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-md">
                Bruttolohn eingeben — sofort Netto-Auszahlung, Arbeitgeberkosten und Rentenversicherungs-Option sehen.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-blue-200">
                <span>✅ Grenze 603 €</span>
                <span>✅ Mindestlohn 13,90 €</span>
                <span>✅ Gewerblich & Privathaushalt</span>
                <span>✅ 2025 & 2026</span>
              </div>
            </div>
            <Link href="/minijob-rechner" className="shrink-0 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-base shadow-lg whitespace-nowrap">
              ⚡ Jetzt kostenlos berechnen
            </Link>
          </div>
        </section>

        {/* ── SEO text block ── */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Minijob 2026 — das Wichtigste auf einen Blick</h2>
            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-3">
              <p>
                Ein <strong>Minijob</strong> (geringfügige Beschäftigung) liegt vor, wenn der monatliche Verdienst
                die <strong>Minijob-Grenze von 603 € (2026)</strong> nicht übersteigt. Arbeitnehmer zahlen auf
                diesen Verdienst grundsätzlich keine Sozialversicherungsbeiträge — lediglich ein optionaler
                Eigenbeitrag zur gesetzlichen Rentenversicherung ist möglich.
              </p>
              <p>
                Der <strong>Mindestlohn 2026 beträgt 13,90 € pro Stunde</strong> und gilt auch für Minijobber.
                Daraus ergibt sich bei der 603 €-Grenze eine maximale monatliche Arbeitszeit von ca.{' '}
                <strong>43 Stunden</strong>.
              </p>
              <p>
                <strong>Arbeitgeber</strong> tragen für gewerbliche Minijobs pauschale Abgaben von ca. 28–31 %:
                15 % Rentenversicherung, 13 % Krankenversicherung sowie Umlagen U1/U2 und die Insolvenzgeldumlage.
                Im Privathaushalt gelten reduzierte Sätze (5 % RV, 5 % KV).
              </p>
              <p>
                Liegt der Verdienst zwischen 603 € und 2.000 € im Monat, greift der sogenannte{' '}
                <strong>Übergangsbereich (Gleitzone/Midijob)</strong>. Hier zahlen Arbeitnehmer reduzierte,
                einkommensabhängig ansteigende Sozialabgaben.{' '}
                <Link href="/midijob-rechner" className="text-blue-600 hover:underline font-medium">
                  Zum Midijob Rechner →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-6xl mx-auto px-4 py-12" aria-label="Häufige Fragen zum Minijob 2026">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Häufige Fragen zum Minijob 2026</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm leading-snug">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Trust row ── */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-3xl block mb-2">🎯</span>
              <h3 className="font-bold text-gray-900 mb-1">Immer aktuell</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Minijob-Grenze, Mindestlohn und Sozialversicherungssätze — jährlich aktualisiert für 2026.</p>
            </div>
            <div>
              <span className="text-3xl block mb-2">🔒</span>
              <h3 className="font-bold text-gray-900 mb-1">100 % Datenschutz</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Keine Anmeldung, keine Datenspeicherung. Alle Berechnungen laufen direkt im Browser.</p>
            </div>
            <div>
              <span className="text-3xl block mb-2">⚡</span>
              <h3 className="font-bold text-gray-900 mb-1">Sofort & kostenlos</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Brutto eingeben, Netto sehen — inklusive aller Steuern, Abgaben und Arbeitgeberkosten.</p>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <p>© 2026 <strong>Minijob-Netto-Rechner.de</strong> — Kostenlose Minijob Rechner für Deutschland</p>
              <p>Stand: 2026 · Alle Angaben ohne Gewähr</p>
            </div>
            <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400" aria-label="Footer Navigation">
              <Link href="/minijob-rechner"           className="hover:text-blue-600">Minijob Rechner 2026</Link>
              <Link href="/minijob-grenze-2026"        className="hover:text-blue-600">Minijob Grenze 2026</Link>
              <Link href="/minijob-kosten-arbeitgeber" className="hover:text-blue-600">Minijob Kosten Arbeitgeber</Link>
              <Link href="/midijob-rechner"            className="hover:text-blue-600">Midijob Rechner 2026</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}