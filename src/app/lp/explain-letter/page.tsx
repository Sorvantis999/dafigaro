import type { Metadata } from 'next'
import Link from 'next/link'
import LpNav from '@/components/LpNav'
import ExplainLetterForm from '@/components/ExplainLetterForm'

export const metadata: Metadata = {
  title: 'Explain This Letter — DaFigaro',
  description: 'Got a confusing letter from an Italian authority? Upload it. We explain what it means and what to do — in English. €29, 24–48h response.',
  robots: 'noindex',
}

export default function LpExplainLetter() {
  return (
    <>
      <LpNav price="€29" priceNote="per letter · fixed price" />

      {/* ── HERO + FORM ── */}
      <section className="lp-ad-hero">
        <div className="lp-ad-grid">

          {/* Left: copy */}
          <div className="lp-ad-copy">
            <div className="lp-ad-eyebrow">For foreigners in Italy</div>
            <h1>Got a letter from Italy you don&apos;t understand?</h1>
            <p className="lp-ad-sub">Upload it. A real person reads it, explains exactly what it means, and tells you what to do next — in plain English.</p>

            <div className="lp-ad-proof">
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Agenzia delle Entrate notice — <em>explained in 4 hours</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Utility threatening letter — <em>routine request, no action needed</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Comune residency notice — <em>steps to comply, clearly laid out</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Landlord deposit dispute — <em>legal options explained, response drafted</em></span>
              </div>
            </div>

            <div className="lp-ad-trust">
              <div className="lp-trust-item"><strong>€29</strong> fixed price</div>
              <div className="lp-trust-dot" />
              <div className="lp-trust-item"><strong>24–48h</strong> response</div>
              <div className="lp-trust-dot" />
              <div className="lp-trust-item"><strong>Real person</strong>, not a bot</div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lp-ad-form-wrap" id="submit">
            <div className="lp-ad-form-header">
              <h2>Upload your letter</h2>
              <p>PDF, photo, or scan. We handle the rest.</p>
            </div>
            <ExplainLetterForm />
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-ad-section lp-ad-section-alt">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">How it works</h2>
          <div className="lp-ad-steps">
            <div className="lp-ad-step">
              <div className="lp-ad-step-num">1</div>
              <div>
                <h4>Upload the letter</h4>
                <p>Photo, scan, or PDF. Add any context that helps — who sent it, when, what you think it might be about.</p>
              </div>
            </div>
            <div className="lp-ad-step">
              <div className="lp-ad-step-num">2</div>
              <div>
                <h4>We review it</h4>
                <p>A bilingual team member reads it, identifies the issuing authority, and assesses urgency. Not a translation tool — a real analysis.</p>
              </div>
            </div>
            <div className="lp-ad-step">
              <div className="lp-ad-step-num">3</div>
              <div>
                <h4>You get a clear answer</h4>
                <p>Within 24–48 hours: what the letter says, whether it's urgent, and exactly what you need to do. In plain English.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="lp-ad-section lp-ad-bottom-cta">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>Still looking at that letter?</h2>
          <p>Upload it now. €29. Response within 24–48 hours.</p>
          <Link href="#submit" className="btn-primary" style={{ fontSize: '1.05rem', padding: '18px 36px' }}>
            Upload Your Letter →
          </Link>
          <p className="lp-ad-micro">No subscription. No commitment. Pay only after we confirm we can help.</p>
        </div>
      </section>

      <footer className="lp-ad-footer">
        <Link href="/">DaFigaro</Link>
        <span>·</span>
        <Link href="/contact">Contact</Link>
        <span>·</span>
        <span>© {new Date().getFullYear()} DaFigaro</span>
      </footer>
    </>
  )
}
