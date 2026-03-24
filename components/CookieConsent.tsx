'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentState = {
  analytics: boolean
  given: boolean
}

const CONSENT_KEY = 'cookie_consent_v1'

export function getConsentState(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function hasAnalyticsConsent(): boolean {
  const state = getConsentState()
  return state?.given === true && state?.analytics === true
}

export function ResetConsentButton() {
  const handleReset = () => {
    localStorage.removeItem(CONSENT_KEY)
    window.location.href = '/'
  }
  return (
    <button onClick={handleReset} className="reset-link">
      🍪 Cookie-Einstellungen öffnen
    </button>
  )
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const existing = getConsentState()
    if (!existing?.given) setVisible(true)
  }, [])

  function save(analyticsAllowed: boolean) {
    const state: ConsentState = { analytics: analyticsAllowed, given: true }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state))
    if (analyticsAllowed) {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    }
    setVisible(false)
  }

  function acceptAll() { save(true) }
  function rejectAll() { save(false) }
  function saveCustom() { save(analytics) }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
      className="cookie-banner"
    >
      <div className="cookie-inner">
        <div className="cookie-header">
          <span className="cookie-icon">🍪</span>
          <h2 className="cookie-title">Datenschutz-Einstellungen</h2>
        </div>

        <p className="cookie-text">
          Wir verwenden Cookies, um diese Website zu betreiben und unsere Dienste zu verbessern.
          Notwendige Cookies sind immer aktiv. Analytische Cookies helfen uns zu verstehen, wie
          unsere Website genutzt wird.{' '}
          <Link href="/datenschutz" className="cookie-link">
            Mehr erfahren
          </Link>
        </p>

        {showDetails && (
          <div className="cookie-details">
            <div className="cookie-item">
              <div className="cookie-item-info">
                <span className="cookie-item-name">✅ Notwendige Cookies</span>
                <span className="cookie-item-desc">Grundlegende Website-Funktion. Immer aktiv.</span>
              </div>
              <div className="cookie-toggle cookie-toggle--disabled">AN</div>
            </div>
            <div className="cookie-item">
              <div className="cookie-item-info">
                <span className="cookie-item-name">📊 Google Analytics</span>
                <span className="cookie-item-desc">
                  Anonymisierte Nutzungsstatistiken (GA4). Speicherdauer: 14 Monate.
                </span>
              </div>
              <button
                onClick={() => setAnalytics(!analytics)}
                className={`cookie-toggle ${analytics ? 'cookie-toggle--on' : 'cookie-toggle--off'}`}
                aria-pressed={analytics}
              >
                {analytics ? 'AN' : 'AUS'}
              </button>
            </div>
          </div>
        )}

        <div className="cookie-actions">
          <button onClick={rejectAll} className="cookie-btn cookie-btn--secondary">
            Ablehnen
          </button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="cookie-btn cookie-btn--outline"
          >
            {showDetails ? 'Schließen' : 'Einstellungen'}
          </button>
          {showDetails ? (
            <button onClick={saveCustom} className="cookie-btn cookie-btn--primary">
              Auswahl speichern
            </button>
          ) : (
            <button onClick={acceptAll} className="cookie-btn cookie-btn--primary">
              Alle akzeptieren
            </button>
          )}
        </div>
      </div>

      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          padding: 0 1rem 1rem;
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .cookie-inner {
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
        }
        @media (prefers-color-scheme: dark) {
          .cookie-inner { background: #1f2937; border-color: #374151; }
          .cookie-text, .cookie-item-desc { color: #d1d5db; }
          .cookie-title { color: #f9fafb; }
          .cookie-item-name { color: #e5e7eb; }
        }
        .cookie-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .cookie-icon { font-size: 1.25rem; }
        .cookie-title {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          color: #111827;
        }
        .cookie-text {
          font-size: 0.875rem;
          color: #4b5563;
          margin: 0 0 1rem;
          line-height: 1.5;
        }
        .cookie-link { color: #2563eb; text-decoration: underline; }
        .cookie-details {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .cookie-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          gap: 1rem;
        }
        .cookie-item + .cookie-item { border-top: 1px solid #e5e7eb; }
        .cookie-item-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .cookie-item-name { font-size: 0.875rem; font-weight: 600; color: #111827; }
        .cookie-item-desc { font-size: 0.75rem; color: #6b7280; }
        .cookie-toggle {
          flex-shrink: 0;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          min-width: 52px;
        }
        .cookie-toggle--disabled { background: #d1fae5; color: #065f46; cursor: default; }
        .cookie-toggle--on { background: #2563eb; color: #fff; }
        .cookie-toggle--off { background: #e5e7eb; color: #374151; }
        .cookie-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .cookie-btn {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: opacity 0.15s;
        }
        .cookie-btn:hover { opacity: 0.85; }
        .cookie-btn--secondary { background: #f3f4f6; color: #374151; }
        .cookie-btn--outline { background: transparent; color: #374151; border: 1px solid #d1d5db; }
        .cookie-btn--primary { background: #2563eb; color: #fff; }
        @media (max-width: 480px) {
          .cookie-actions { justify-content: stretch; }
          .cookie-btn { flex: 1; text-align: center; }
        }
      `}</style>
    </div>
  )
}