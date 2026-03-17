import { Clock, Calculator, DollarSign, Calendar } from 'lucide-react'

export default function MinijobStundenStats() {
  const stats = [
    {
      icon: <Clock className="text-blue-600" size={24} />,
      label: 'MAX. STUNDEN (MINDESTLOHN)',
      value: '~43 Std.',
      sub: 'pro Monat bei 13,90 €/h',
    },
    {
      icon: <Calculator className="text-green-600" size={24} />,
      label: 'MAX. STUNDEN/WOCHE',
      value: '~10 Std.',
      sub: 'Durchschnitt (Mindestlohn)',
    },
    {
      icon: <DollarSign className="text-purple-600" size={24} />,
      label: 'VERDIENSTGRENZE 2026',
      value: '603 €',
      sub: 'pro Monat',
    },
    {
      icon: <Calendar className="text-orange-600" size={24} />,
      label: 'GESETZL. STUNDENLIMIT',
      value: 'Keines',
      sub: 'Nur Verdienst entscheidet',
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
