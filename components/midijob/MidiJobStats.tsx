import { TrendingUp, Shield, Calculator, Users } from 'lucide-react'

export default function MidiJobStats({ lowerLimit = 603, upperLimit = 2000 }: { lowerLimit?: number; upperLimit?: number }) {
  const stats = [
    {
      icon: <TrendingUp className="text-emerald-600" size={24} />,
      label: 'ÜBERGANGSBEREICH 2026',
      value: `${lowerLimit}€ – ${upperLimit}€`,
      sub: 'pro Monat',
    },
    {
      icon: <Calculator className="text-blue-600" size={24} />,
      label: 'FAKTOR F 2026',
      value: '0,6619',
      sub: 'reduzierte Bemessung',
    },
    {
      icon: <Shield className="text-purple-600" size={24} />,
      label: 'VOLLVERSICHERUNG',
      value: 'KV+PV+RV+AV',
      sub: 'voller Schutz',
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      label: 'AN-ERSPARNIS BEI 1.000€',
      value: 'bis 80€',
      sub: 'gegenüber Vollzeit',
    },
  ]

  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {stats.map((s, i) => (
        <div key={i} className="bg-white rounded-lg p-4 border border-gray-100 text-center">
          <div className="flex justify-center mb-2">{s.icon}</div>
          <p className="text-xs text-gray-600 font-semibold">{s.label}</p>
          <p className="text-base sm:text-xl font-bold text-gray-900">{s.value}</p>
          <p className="text-xs text-gray-500">{s.sub}</p>
        </div>
      ))}
    </section>
  )
}
