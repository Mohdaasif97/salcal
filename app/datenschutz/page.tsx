import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Minijob Rechner',
  robots: 'noindex, follow',
}

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Zurück zum Rechner
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h2>
            <p className="text-gray-700">
              Diese Website verarbeitet keine personenbezogenen Daten. Alle Berechnungen erfolgen
              lokal im Browser. Es werden keine Eingaben gespeichert oder an Server übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Hosting</h2>
            <p className="text-gray-700">
              Diese Website wird gehostet bei Vercel Inc. Weitere Informationen finden Sie in der
              Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies</h2>
            <p className="text-gray-700">
              Diese Website verwendet keine Cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Ihre Rechte</h2>
            <p className="text-gray-700">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten. Da wir keine Daten speichern, fallen
              diese Rechte bei der Nutzung dieser Website nicht an.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
