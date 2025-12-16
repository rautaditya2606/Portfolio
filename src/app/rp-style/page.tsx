import { DM_Sans, Sora, IBM_Plex_Mono } from 'next/font/google'
import './rp-style.css'
import { CopyCurlButton } from './CopyCurlButton'

const heading = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--rp-font-display',
})

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--rp-font-body',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--rp-font-mono',
})

export default function RpStylePage() {
  const curl = `curl -X POST https://api.example.com/v1/predict \\\n  -H "Content-Type: application/json" \\\n  -d '{
    "feature_one": 42,
    "feature_two": "weekday",
    "mode": "standard",
    "explain": true
  }'`

  return (
    <main className={`rp-page ${heading.variable} ${body.variable} ${mono.variable}`} style={{ fontFamily: 'var(--rp-font-body)' }}>
      <div className="rp-shell">
        <header className="rp-header">
          <h1 className="rp-title" style={{ fontFamily: 'var(--rp-font-display)' }}>
            Prediction Console
            <span className="rp-title-marker" aria-hidden="true" />
          </h1>
          <p className="rp-subtitle">
            An editorial-tech interface for building a request on the left and reading the exact API call on the right.
            It’s calm, physical, and deliberate — like a lab notebook, not a dashboard.
            {' '}
            <a className="rp-link" href="#" onClick={(e) => e.preventDefault()}>
              Docs
            </a>
            .
          </p>
        </header>

        <section className="rp-grid" aria-label="Request builder and API call">
          {/* Left: Form panel */}
          <article className="rp-panel">
            <h2 className="rp-panel-title" style={{ fontFamily: 'var(--rp-font-display)' }}>Request</h2>
            <p className="rp-panel-kicker">Fill in the fields, then submit. Keep it crisp; the UI will do the rest.</p>

            <div className="rp-sep" role="presentation" />

            <form className="rp-form">
              <div className="rp-row">
                <div className="rp-field">
                  <label htmlFor="featureOne">Feature One</label>
                  <input className="rp-input" id="featureOne" name="featureOne" inputMode="numeric" placeholder="42" />
                  <div className="rp-help">A numeric input. Keep it sensible.</div>
                </div>

                <div className="rp-field">
                  <label htmlFor="featureTwo">Feature Two</label>
                  <select className="rp-select" id="featureTwo" name="featureTwo" defaultValue="weekday">
                    <option value="weekday">Weekday</option>
                    <option value="weekend">Weekend</option>
                    <option value="holiday">Holiday</option>
                  </select>
                  <div className="rp-help">A categorical input with clear states.</div>
                </div>
              </div>

              <div className="rp-row">
                <div className="rp-field">
                  <label htmlFor="mode">Mode</label>
                  <select className="rp-select" id="mode" name="mode" defaultValue="standard">
                    <option value="standard">Standard</option>
                    <option value="fast">Fast</option>
                    <option value="robust">Robust</option>
                  </select>
                </div>

                <div className="rp-field">
                  <label>Explain</label>
                  <div className="rp-toggle">
                    <div className="rp-switch" data-on="true" role="switch" aria-checked="true">
                      <div className="rp-knob" aria-hidden="true" />
                    </div>
                    <span className="rp-toggle-label">Include explanation</span>
                  </div>
                  <div className="rp-help">A tactile toggle (accent-on state).</div>
                </div>
              </div>

              <div className="rp-field">
                <label htmlFor="notes">Notes</label>
                <textarea className="rp-textarea" id="notes" name="notes" placeholder="Optional context to send along…" />
              </div>

              <div className="rp-actions">
                <button type="button" className="rp-button">Run Prediction</button>
                <button type="button" className="rp-ghost">Reset</button>
              </div>
            </form>
          </article>

          {/* Right: cURL/API panel */}
          <aside className="rp-panel">
            <h2 className="rp-panel-title" style={{ fontFamily: 'var(--rp-font-display)' }}>API</h2>
            <p className="rp-panel-kicker">Exact request shape — ready to paste into a terminal.</p>

            <div className="rp-sep" role="presentation" />

            <div className="rp-code-wrap">
              <CopyCurlButton text={curl} />
              <pre className="rp-code" style={{ fontFamily: 'var(--rp-font-mono)' }}>
                {curl}
              </pre>
            </div>

            <div className="rp-sep" role="presentation" />

            <p className="rp-help">
              Accent use is intentional: focus rings, the primary button, and a couple of quiet markers — nothing else.
            </p>
          </aside>
        </section>
      </div>
    </main>
  )
}
