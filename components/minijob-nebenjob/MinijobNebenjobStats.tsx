import { DollarSign, Briefcase, Shield, FileText } from 'lucide-react'

export default function MinijobNebenjobStats() {
  const stats = [
    {
      icon: <DollarSign className="text-blue-600" size={24} />,
      label: 'VERDIENSTGRENZE 2026',
      value: '603 €',
      sub: 'pro Monat Nebenjob',
    },
    {
      icon: <Briefcase className="text-green-600" size={24} />,
      label: 'ERLAUBTE NEBENJOBS',
      value: '1',
      sub: 'frei neben Hauptjob',
    },
    {
      icon: <Shield className="text-purple-600" size={24} />,
      label: 'AUSWIRKUNG AUF HAUPTJOB',
      value: 'Keine',
      sub: 'bei 1 Minijob-Nebenjob',
    },
    {
      icon: <FileText className="text-orange-600" size={24} />,
      label: 'LOHNSTEUER NEBENJOB',
      value: '2 %',
      sub: 'Pauschsteuer (Arbeitgeber)',
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
