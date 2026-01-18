import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kontakt | Minijob Rechner',
  robots: 'noindex, follow',
}

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Zurück zum Rechner
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kontakt</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="space-y-4 text-gray-700">
            <p>
              Bei Fragen oder Anregungen zum Minijob-Rechner können Sie uns gerne kontaktieren:
            </p>

            <div className="pt-4">
              <p className="font-medium">E-Mail:</p>
              <p>[arapokemon4444@gmail.com]</p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Bitte beachten Sie: Wir bieten keine individuelle Steuerberatung an.
                Für verbindliche Auskünfte wenden Sie sich bitte an einen Steuerberater
                oder das zuständige Finanzamt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
