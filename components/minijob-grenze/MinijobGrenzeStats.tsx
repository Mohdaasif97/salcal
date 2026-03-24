import { DollarSign, Clock, TrendingUp, Calendar } from 'lucide-react'

export default function MinijobGrenzeStats() {
  const stats = [
    {
      icon: <DollarSign className="text-blue-600" size={24} />,
      label: 'MINIJOB GRENZE 2026',
      value: '603 €',
      sub: 'pro Monat',
    },
    {
      icon: <Clock className="text-green-600" size={24} />,
      label: 'MINDESTLOHN 2026',
      value: '13,90 €',
      sub: 'pro Stunde',
    },
    {
      icon: <TrendingUp className="text-purple-600" size={24} />,
      label: 'ERHÖHUNG ZU 2025',
      value: '+47 €',
      sub: 'mehr pro Monat',
    },
    {
      icon: <Calendar className="text-orange-600" size={24} />,
      label: 'JAHRESGRENZE 2026',
      value: '7.236 €',
      sub: 'pro Jahr maximal',
    },
  ]

  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {stats.map((s, i) => (
        <div key={i} className="bg-white rounded-lg p-4 border border-gray-100 text-center shadow-sm">
          <div className="flex justify-center mb-2">{s.icon}</div>
          <p className="text-xs text-gray-600 font-semibold">{s.label}</p>
          <p className="text-lg sm:text-2xl font-bold text-gray-900">{s.value}</p>
          <p className="text-xs text-gray-500">{s.sub}</p>
        </div>
      ))}
    </section>
  )
}