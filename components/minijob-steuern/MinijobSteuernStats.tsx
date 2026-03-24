import { DollarSign, Percent, FileText, Building2 } from 'lucide-react'

export default function MinijobSteuernStats() {
  const stats = [
    {
      icon: <Percent className="text-blue-600" size={24} />,
      label: 'PAUSCHSTEUER (AG)',
      value: '2 %',
      sub: 'des Bruttolohns',
    },
    {
      icon: <DollarSign className="text-green-600" size={24} />,
      label: 'LOHNSTEUER AN',
      value: '0 €',
      sub: 'Arbeitnehmer (Regelfall)',
    },
    {
      icon: <Building2 className="text-purple-600" size={24} />,
      label: 'ABGABEN ARBEITGEBER',
      value: '~32 %',
      sub: 'Gesamt gewerblich',
    },
    {
      icon: <FileText className="text-orange-600" size={24} />,
      label: 'STEUERERKLÄRUNG',
      value: 'Nein',
      sub: 'bei Pauschalbesteuerung',
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
