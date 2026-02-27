import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum | Minijob Rechner',
  robots: 'index, follow',
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Zurück zum Rechner
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-medium">Firma:</p>
              <p>[Circoinix]</p>
            </div>

            <div>
              <p className="font-medium">Adresse:</p>
              <p>[Budapest,Kőbánya-Kispest]</p>
            </div>

            <div>
              <p className="font-medium">Kontakt:</p>
              <p>E-Mail: [arapokemon4444@gmail.com]</p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-semibold mb-2">Haftungsausschluss</h3>
              <p className="text-sm">
                Die Berechnungen auf dieser Website dienen nur zu Informationszwecken und
                stellen keine Steuer- oder Rechtsberatung dar. Alle Angaben ohne Gewähr.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}