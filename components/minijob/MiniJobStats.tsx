import { DollarSign, Clock, Users, FileText } from 'lucide-react'

export default function MiniJobStats({ minijobLimit = 603 }: { minijobLimit?: number }) {
  const stats = [
    { icon: <DollarSign className="text-blue-600" size={24} />, label: 'MINIJOB GRENZE 2026', value: `${minijobLimit}€`, sub: 'pro Monat' },
    { icon: <Clock className="text-green-600" size={24} />, label: 'MINDESTLOHN 2026', value: '13,90€', sub: 'pro Stunde' },
    { icon: <Users className="text-purple-600" size={24} />, label: 'ARBEITGEBER KOSTEN', value: '32,47%', sub: 'gewerblich' },
    { icon: <FileText className="text-orange-600" size={24} />, label: 'PAUSCHALE STEUER', value: '2%', sub: 'vom Arbeitgeber' },
  ]
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {stats.map((s, i) => (
        <div key={i} className="bg-white rounded-lg p-4 border border-gray-100 text-center">
          <div className="flex justify-center mb-2">{s.icon}</div>
          <p className="text-xs text-gray-600 font-semibold">{s.label}</p>
          <p className="text-lg sm:text-2xl font-bold text-gray-900">{s.value}</p>
          <p className="text-xs text-gray-500">{s.sub}</p>
        </div>
      ))}
    </section>
  )
}