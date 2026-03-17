import { DollarSign, TrendingUp, Home, Building2 } from 'lucide-react'

export default function MinijobKostenStats() {
  const stats = [
    {
      icon: <DollarSign className="text-blue-600" size={24} />,
      label: 'GESAMTKOSTEN GEWERBLICH',
      value: '~798 €',
      sub: 'bei 603 € Brutto',
    },
    {
      icon: <Home className="text-green-600" size={24} />,
      label: 'GESAMTKOSTEN HAUSHALT',
      value: '~693 €',
      sub: 'bei 603 € Brutto',
    },
    {
      icon: <Building2 className="text-orange-600" size={24} />,
      label: 'PAUSCHALABGABEN GEWERBLICH',
      value: '32,47%',
      sub: 'vom Bruttolohn',
    },
    {
      icon: <TrendingUp className="text-purple-600" size={24} />,
      label: 'PAUSCHALABGABEN HAUSHALT',
      value: '14,92%',
      sub: 'vom Bruttolohn',
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