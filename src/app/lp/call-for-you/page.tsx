import type { Metadata } from 'next'
import Link from 'next/link'
import LpNav from '@/components/LpNav'
import CallForYouForm from '@/components/CallForYouForm'

export const metadata: Metadata = {
  title: 'We Call for You — DaFigaro',
  description: 'Need someone to call an Italian office, utility, or company? We make the call in Italian and report back in English. €49, one call.',
  robots: 'noindex',
}

export default function LpCallForYou() {
  return (
    <>
      <LpNav price="€49" priceNote="per call · fixed price" />

      {/* ── HERO + FORM ── */}
      <section className="lp-ad-hero">
        <div className="lp-ad-grid">

          {/* Left: copy */}
          <div className="lp-ad-copy">
            <div className="lp-ad-eyebrow">For foreigners in Italy</div>
            <h1>Need someone to call an Italian office for you?</h1>
            <p className="lp-ad-sub">Tell us who to call and what you need. We make the call in Italian, handle the conversation, and send you a full written summary in English.</p>

            <div className="lp-ad-proof">
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Called Enel re: disputed bill — <em>error corrected, case closed</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Queried Questura on permit status — <em>timeline confirmed in one call</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Chased missing courier delivery — <em>rerouted to correct address</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Called building administrator re: lease — <em>dispute resolved, documented</em></span>
              </div>
            </div>

            <div className="lp-ad-trust">
              <div className="lp-trust-item"><strong>€49</strong> fixed price</div>
              <div className="lp-trust-dot" />
              <div className="lp-trust-item"><strong>24–48h</strong> turnaround</div>
              <div className="lp-trust-dot" />
              <div className="lp-trust-item"><strong>Full summary</strong> in English</div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lp-ad-form-wrap" id="submit">
            <div className="lp-ad-form-header">
              <h2>Tell us who to call</h2>
              <p>Give us the number and what you need. We handle the rest.</p>
            </div>
            <CallForYouForm />
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
                <h4>Tell us who to call</h4>
                <p>The phone number, the company or office, your account reference, and what you need from the call. The more detail, the better we can prepare.</p>
              </div>
            </div>
            <div className="lp-ad-step">
              <div className="lp-ad-step-num">2</div>
              <div>
                <h4>We make the call</h4>
                <p>A bilingual team member calls in Italian. We know how to navigate Italian phone systems, hold queues, and the particular logic of Italian bureaucracy.</p>
              </div>
            </div>
            <div className="lp-ad-step">
              <div className="lp-ad-step-num">3</div>
              <div>
                <h4>You get the result</h4>
                <p>Full written summary of what was said, what was decided, and exactly what happens next. If one call doesn&apos;t resolve it, we&apos;ll follow up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="lp-ad-section lp-ad-bottom-cta">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>Still dreading that call?</h2>
          <p>Tell us who to call. €49. We handle it within 24–48 hours.</p>
          <Link href="#submit" className="btn-primary" style={{ fontSize: '1.05rem', padding: '18px 36px' }}>
            Tell Us Who to Call →
          </Link>
          <p className="lp-ad-micro">No subscription. No commitment. Pay only after we confirm we can make the call.</p>
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
