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
            <h1>She got a letter from the Agenzia delle Entrate. She didn&apos;t open it for a week.</h1>
            <p className="lp-ad-sub">Then she uploaded it to DaFigaro. Six hours later she knew exactly what it was, what it wasn&apos;t, and the one thing she needed to do. €29.</p>

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

      {/* ── AGITATION ── */}
      <section className="lp-ad-section">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">The part nobody tells you about Italian official mail.</h2>
          <div className="lp-body-copy">
            <p>Most Italian official letters carry a deadline. It&apos;s often buried in the middle, written in legalese, and calibrated to assume the reader knows exactly which regulation it refers to. You don&apos;t.</p>
            <p>That deadline might be 30 days. After which the fine doubles. Or the appeal right expires. Or a default judgment is entered. The letter sitting on your table right now could be routine — or it could have a clock running that you can&apos;t see.</p>
            <p>That&apos;s not a scare tactic. That&apos;s how Italian bureaucracy works. The people who designed this system grew up inside it. You didn&apos;t. That gap is exactly what DaFigaro exists to close.</p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="lp-ad-section lp-ad-section-alt">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">What you actually receive.</h2>
          <p className="lp-section-sub">Not a translation. A complete analysis, in plain English, that tells you everything you need to act.</p>
          <div className="lp-deliverables-grid">
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">🏛️</div>
              <h4>Who sent it and why</h4>
              <p>We identify the issuing authority — tax office, comune, court, utility, landlord — and what mandate they&apos;re operating under. Context you can&apos;t find on Google.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">⏱️</div>
              <h4>Whether it&apos;s urgent</h4>
              <p>We flag any deadlines, response windows, or escalation clauses. If there&apos;s a clock running, you&apos;ll know exactly how much time you have.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">📋</div>
              <h4>What it requires of you</h4>
              <p>Pay a fine, submit a document, register with an office, do nothing — we tell you exactly what action (if any) is required and in what order.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">🔍</div>
              <h4>What your options are</h4>
              <p>Where you have choices — whether to pay, appeal, contest, or respond — we lay them out plainly so you can decide with full information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAMPLES ── */}
      <section className="lp-ad-section">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">Letters like yours, handled before.</h2>
          <div className="lp-examples-grid">
            <div className="lp-example">
              <div className="lp-example-icon">🏛️</div>
              <p>Agenzia delle Entrate notice about an overdue filing. Client had no idea the obligation existed.</p>
              <div className="lp-example-result">Explained. Deadline identified. Accountant referral provided.</div>
            </div>
            <div className="lp-example">
              <div className="lp-example-icon">💧</div>
              <p>Threatening-looking notice from a water utility. Turned out to be a routine meter-reading request.</p>
              <div className="lp-example-result">Explained. No action required. Client relieved.</div>
            </div>
            <div className="lp-example">
              <div className="lp-example-icon">🏠</div>
              <p>Landlord claiming apartment damage and withholding the security deposit.</p>
              <div className="lp-example-result">Explained. Legal options outlined. Response letter drafted.</div>
            </div>
            <div className="lp-example">
              <div className="lp-example-icon">📮</div>
              <p>ZTL fine from Florence. Client had no idea their rental car had entered a restricted zone.</p>
              <div className="lp-example-result">Explained. Payment options outlined. Appeal assessed.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS ── */}
      <section className="lp-ad-section lp-ad-section-alt">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">The questions most people ask before submitting.</h2>
          <div className="lp-faq">
            <div className="lp-faq-item">
              <h4>Is €29 really worth it for one letter?</h4>
              <p>Consider the alternative: a translator charges €60–120 and gives you a translation, not an analysis. A lawyer charges €200–400 for a consultation. Missing a 30-day deadline on a tax notice costs far more. €29 for clarity and a clear action plan is the cheapest decision you&apos;ll make today.</p>
            </div>
            <div className="lp-faq-item">
              <h4>What if my letter is too complicated?</h4>
              <p>We&apos;ll tell you upfront. If your situation is beyond a letter explanation and requires legal advice, we&apos;ll say so and point you to the right kind of professional. You won&apos;t pay for something we can&apos;t deliver.</p>
            </div>
            <div className="lp-faq-item">
              <h4>How do I know you actually understand Italian bureaucracy?</h4>
              <p>Our team works inside this system daily — letters, calls, filings, offices. We&apos;ve handled correspondence from the Agenzia delle Entrate, INPS, Comuni, courts, utilities, and landlords across Italy. If it came from an Italian institution, we&apos;ve almost certainly seen something like it before.</p>
            </div>
            <div className="lp-faq-item">
              <h4>What if the photo or scan isn&apos;t great quality?</h4>
              <p>We work with what we get. Most phone photos of letters are perfectly usable. If something is genuinely unreadable, we&apos;ll ask you to resend one section rather than make you start over.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="lp-ad-section lp-ad-bottom-cta">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>That letter isn&apos;t going away.</h2>
          <p>Upload it now. €29. You&apos;ll know exactly what it means and what to do within 24–48 hours.</p>
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
