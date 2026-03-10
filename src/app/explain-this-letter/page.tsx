import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Explain This Letter — DaFigaro',
  description: 'Got a confusing letter from an Italian authority, landlord, or utility? Upload it. We explain what it means and what you need to do — in English.',
}

export default function ExplainThisLetter() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="container-narrow">
          <div className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Explain This Letter</div>
          <h1>
            Got a letter from Italy<br />you <em>don't understand?</em>
          </h1>
          <p className="lp-hero-sub">
            Official mail from Italian authorities, utilities, landlords, and agencies is dense, bureaucratic, and often alarming if you don't know what you're looking at. We do.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#submit" className="btn-primary">
              Upload Your Letter →
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              How it works
            </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.82rem', color: 'var(--gray-light)' }}>
            €29 per letter · Response in 24–48h · Handled by real people
          </p>
        </div>
      </section>

      {/* ── REASSURANCE ── */}
      <section className="lp-section white">
        <div className="container-narrow">
          <div className="eyebrow">You're Not Alone</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Italian official mail is designed for Italians who grew up with this system.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray)', lineHeight: '1.8', marginBottom: '24px' }}>
            Even Italian citizens find it confusing. For foreigners, it's a wall of unfamiliar terminology, unexplained acronyms, and implied knowledge you have no way of having. That letter from the Agenzia delle Entrate, the Comuni, INPS, or your landlord could be routine — or it could require immediate action. The problem is you can't tell which.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--gray)', lineHeight: '1.8' }}>
            We handle this every day. We know what these letters mean, which ones require action, which ones are routine, and exactly what you should do next.
          </p>
        </div>
      </section>

      {/* ── OFFER ── */}
      <section className="lp-section" id="submit">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="eyebrow">The Offer</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Exactly what you get for €29</h2>
          </div>

          <div className="lp-offer-box">
            <div className="offer-icon" style={{ fontSize: '2.4rem' }}>📄</div>
            <h2>Explain This Letter</h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>Upload your letter. We review it and send you a clear explanation in English.</p>

            <ul className="lp-includes">
              <li>Full translation and plain-English explanation of the letter</li>
              <li>Urgency assessment — what happens if you don't respond and when</li>
              <li>Recommended next steps, clearly stated</li>
              <li>Any forms, deadlines, or contact details you need to know</li>
              <li>An English summary you can share with your employer, landlord, or family</li>
            </ul>

            <div className="offer-price">€29</div>
            <div className="offer-price-note" style={{ marginBottom: '24px' }}>Per letter · One-time payment · No subscription</div>

            <Link href="mailto:hello@dafigaro.com?subject=Letter%20Explanation%20Request" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem' }}>
              Upload Your Letter → Start Here
            </Link>
            <p style={{ marginTop: '14px', fontSize: '0.8rem', color: 'var(--gray-light)' }}>
              Email your letter to hello@dafigaro.com or use the form above. We respond within 24–48 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-section white" id="how-it-works">
        <div className="container-narrow">
          <div className="eyebrow">The Process</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '36px' }}>Three steps. Less than a minute to start.</h2>

          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num">1</div>
              <div>
                <h4>Upload or send your letter</h4>
                <p>Take a photo, scan it, or forward a PDF. Include any context you think is useful — who sent it, when it arrived, whether you've received anything similar before.</p>
              </div>
            </div>

            <div className="lp-step">
              <div className="lp-step-num">2</div>
              <div>
                <h4>We review it</h4>
                <p>A real person on our team reads the letter carefully, researches the relevant authority or regulation if needed, and drafts a clear explanation. This is not a translation tool. We explain what it means for you.</p>
              </div>
            </div>

            <div className="lp-step">
              <div className="lp-step-num">3</div>
              <div>
                <h4>You get a clear answer</h4>
                <p>Within 24–48 hours, you receive a complete written explanation in English: what the letter says, what it requires, whether it's urgent, and exactly what you should do next.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAMPLES ── */}
      <section className="lp-section">
        <div className="container-narrow">
          <div className="eyebrow">What We've Handled</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '36px' }}>Letters like yours, handled before</h2>

          <div className="examples-grid">
            <div className="example-card">
              <div className="ex-icon">🏛️</div>
              <p>A letter from Agenzia delle Entrate about an overdue tax filing. The client had no idea the obligation existed.</p>
              <div className="ex-result">✓ Explained. Deadline identified. Accountant referral provided.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">💧</div>
              <p>A threatening-looking notice from a local water utility. It turned out to be a routine meter-reading request.</p>
              <div className="ex-result">✓ Explained. No action required. Client relieved.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🏠</div>
              <p>A letter from a landlord claiming damage to an apartment and withholding the security deposit.</p>
              <div className="ex-result">✓ Explained. Legal options outlined. Response letter drafted.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">📮</div>
              <p>A notice from the comune regarding residency registration — required for many services but easily missed.</p>
              <div className="ex-result">✓ Explained. Steps to comply provided in sequence.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🏥</div>
              <p>A letter from INPS about healthcare eligibility while transitioning between employment situations.</p>
              <div className="ex-result">✓ Explained. Gap in coverage identified. Resolution path provided.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">📋</div>
              <p>A fine from the ZTL zone in Florence — the client had no idea their rental car had entered a restricted area.</p>
              <div className="ex-result">✓ Explained. Payment options outlined. Appeal process assessed.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBMIT FORM PLACEHOLDER ── */}
      <section className="lp-section white" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <div className="eyebrow">Ready to Submit</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Send us your letter</h2>
          <p style={{ color: 'var(--gray)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.75' }}>
            Email us at <a href="mailto:hello@dafigaro.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>hello@dafigaro.com</a> with your letter attached. Include your name and any context that would help us understand the situation. We'll send you a payment link and get started right away.
          </p>
          <Link href="mailto:hello@dafigaro.com?subject=Letter%20Explanation%20Request" className="btn-primary">
            Send Your Letter → €29
          </Link>
          <p style={{ marginTop: '14px', fontSize: '0.8rem', color: 'var(--gray-light)' }}>
            Response within 24–48 business hours. Secure payment via Stripe.
          </p>
        </div>
      </section>

      {/* ── UPSELL ── */}
      <section className="lp-section">
        <div className="container-narrow">
          <div className="upsell-block">
            <h3>Getting more than one letter?</h3>
            <p>DaFigaro membership includes unlimited letter explanations plus call credits and priority support — ideal if you're actively navigating a move, a visa process, or just living in Italy.</p>
            <Link href="/#membership" className="btn-primary">
              Learn About Membership →
            </Link>
          </div>

          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--gray)' }}>Also available:</span>
            <Link href="/we-call-for-you" className="btn-ghost">📞 We Call for You — €49</Link>
            <Link href="/codice-fiscale-help" className="btn-ghost">🪪 Codice Fiscale Help — from €149</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
