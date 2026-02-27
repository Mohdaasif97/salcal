export default function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61588221497294',
      icon: '📘',
    },
    {
      name: 'Twitter / X',
      url: 'https://x.com/MohdAasif763323',
      icon: '𝕏',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohd-aasif-44121a261',
      icon: '🔗',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@violent34343',
      icon: '▶️',
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-3">Minijob Rechner</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kostenloser Rechner für Minijob Netto-Berechnung in Deutschland – aktuell mit der 603 € Grenze.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Startseite
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-3">Folge uns</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
                  title={`Besuche uns auf ${link.name}`}
                  aria-label={link.name}
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-3">Wichtig</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Die Berechnungen dienen der Orientierung. Tatsächliche Werte können je nach individuellen Umständen abweichen. Keine Garantie auf Richtigkeit.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Minijob Rechner. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-slate-600">
              Made with ❤️ für Deutschland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
