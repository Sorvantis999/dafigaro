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
            <h1>He spent 40 minutes on hold with Enel. Got transferred twice. Then the line went dead.</h1>
            <p className="lp-ad-sub">He submitted a DaFigaro call request that afternoon. By evening he had a written summary of what was agreed and what happens next. €49.</p>

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

      {/* ── AGITATION ── */}
      <section className="lp-ad-section">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">Here&apos;s why calling Italian offices is not like calling anywhere else.</h2>
          <div className="lp-body-copy">
            <p>Italian phone systems have unique friction: automated menus that assume Italian fluency, staff who will simply stop responding if they sense a language barrier, hold logic that disconnects after a set time, and offices that won&apos;t repeat themselves. Getting transferred often means starting over — new queue, new hold, new person who has no record of the previous conversation.</p>
            <p>Beyond the language, there&apos;s a navigational knowledge gap. Knowing which department handles which problem, which reference number to lead with, which phrase unlocks cooperation — this comes from experience. Our team has it. You don&apos;t have to acquire it.</p>
            <p>You pay €49. We make the call. You get the result in writing. That&apos;s the trade.</p>
          </div>
        </div>
      </section>

      {/* ── WHO WE CALL ── */}
      <section className="lp-ad-section lp-ad-section-alt">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">We&apos;ve called all of these.</h2>
          <div className="lp-deliverables-grid">
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">⚡</div>
              <h4>Utilities</h4>
              <p>Enel, Eni, Edison, A2A, local water and gas companies. Disputed bills, meter readings, contract issues, activation delays.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">🏛️</div>
              <h4>Government offices</h4>
              <p>Questura, Comune, Agenzia delle Entrate, INPS, ASL. Permit status, registration, appointments, document status.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">🏦</div>
              <h4>Banks and institutions</h4>
              <p>Account issues, blocked transactions, document requests, appointment booking, complaint escalation.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">📦</div>
              <h4>Couriers and logistics</h4>
              <p>DHL, BRT, GLS, SDA, Poste Italiane. Missing parcels, failed deliveries, re-routing, customs holds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAMPLES ── */}
      <section className="lp-ad-section">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">Calls we&apos;ve handled.</h2>
          <div className="lp-examples-grid">
            <div className="lp-example">
              <div className="lp-example-icon">💡</div>
              <p>Called Enel about a disputed electricity bill. Billing error confirmed. Credit applied to next invoice.</p>
              <div className="lp-example-result">Error corrected. Case closed. Summary sent.</div>
            </div>
            <div className="lp-example">
              <div className="lp-example-icon">🪪</div>
              <p>Queried the Questura about a pending permit renewal. Status confirmed. No further action required.</p>
              <div className="lp-example-result">Timeline confirmed. Anxiety resolved.</div>
            </div>
            <div className="lp-example">
              <div className="lp-example-icon">📦</div>
              <p>Chased a missing courier delivery that had been bouncing between depots for 10 days.</p>
              <div className="lp-example-result">Located. Re-routed to correct address. Delivered next day.</div>
            </div>
            <div className="lp-example">
              <div className="lp-example-icon">🏠</div>
              <p>Called a building administrator about a disputed lease clause before the client signed.</p>
              <div className="lp-example-result">Clause clarified. Client negotiated from a position of knowledge.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS ── */}
      <section className="lp-ad-section lp-ad-section-alt">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">Before you submit.</h2>
          <div className="lp-faq">
            <div className="lp-faq-item">
              <h4>What if the call doesn&apos;t resolve it?</h4>
              <p>We tell you exactly what was said, what was refused, and what the next step is. Sometimes one call closes it. Sometimes it takes escalation or a follow-up — we&apos;ll tell you the path. You won&apos;t be left with nothing.</p>
            </div>
            <div className="lp-faq-item">
              <h4>What if the office won&apos;t cooperate or I need to be on the call?</h4>
              <p>We&apos;ll tell you before we start if authorization is needed. Some institutions require the account holder to verify identity. We&apos;ll brief you exactly on what to say so you can do that part in 60 seconds and hand it back.</p>
            </div>
            <div className="lp-faq-item">
              <h4>Is €49 the real price or does it go up?</h4>
              <p>€49 covers one call, one issue. If you need a follow-up call on the same issue, we charge the same rate. No surprises. You confirm before anything starts.</p>
            </div>
            <div className="lp-faq-item">
              <h4>What do I get at the end?</h4>
              <p>A written summary in English of what was discussed, what was agreed or refused, what reference numbers or case IDs came up, and exactly what happens next — including any action required from you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="lp-ad-section lp-ad-bottom-cta">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>That call isn&apos;t going to make itself.</h2>
          <p>Tell us who to call and what you need. We handle it within 24–48 hours. €49.</p>
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
