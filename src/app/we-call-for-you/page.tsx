import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CallForYouForm from '@/components/CallForYouForm'

export const metadata: Metadata = {
  title: 'We Call for You — DaFigaro',
  description: 'Need to call an Italian office, utility, or company but can\'t navigate the language or phone system? We make the call and report back.',
}

export default function WeCallForYou() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="container-narrow">
          <div className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>We Call for You</div>
          <h1>
            He spent 40 minutes on hold with Enel.<br /><em>Got transferred twice. Then the line went dead.</em>
          </h1>
          <p className="lp-hero-sub">
            He submitted a DaFigaro call request that afternoon. By evening he had a written summary of what was agreed and what happens next. €49.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#submit" className="btn-primary">
              Start Your Call Request →
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              How it works
            </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.82rem', color: 'var(--gray-light)' }}>
            €49 per call · Summary in English · Response in 24–48h
          </p>
        </div>
      </section>

      {/* ── REASSURANCE ── */}
      <section className="lp-section white">
        <div className="container-narrow">
          <div className="eyebrow">Why This Is Hard</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            It's not just a language barrier. Italian phone systems are built to exhaust you.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray)', lineHeight: '1.8', marginBottom: '24px' }}>
            Navigate the automated menu in Italian. Wait on hold for 40 minutes. Get transferred twice. Reach someone who speaks no English and reads you a script in rapid-fire bureaucratic Italian. Get disconnected. Start over.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--gray)', lineHeight: '1.8' }}>
            We've done this hundreds of times. We know which offices have direct lines, when to call, how to phrase requests, and how to get a usable answer instead of a runaround. We do it in Italian, get the information you actually need, and send you a clean summary.
          </p>
        </div>
      </section>



      {/* ── HOW IT WORKS ── */}
      <section className="lp-section white" id="how-it-works">
        <div className="container-narrow">
          <div className="eyebrow">The Process</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '36px' }}>What happens after you submit</h2>

          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num">1</div>
              <div>
                <h4>Tell us who to call and why</h4>
                <p>Give us the phone number and explain what you're trying to accomplish. The more context the better — your account number, any reference codes, what's already happened, what you want as the outcome.</p>
              </div>
            </div>

            <div className="lp-step">
              <div className="lp-step-num">2</div>
              <div>
                <h4>We prepare and make the call</h4>
                <p>We review your request, prepare what we need to say, and call the number during appropriate business hours. We navigate holds, transfers, and bureaucratic friction so you don't have to.</p>
              </div>
            </div>

            <div className="lp-step">
              <div className="lp-step-num">3</div>
              <div>
                <h4>You get a full summary</h4>
                <p>We send you a clear written report: what was said, what was agreed, any next steps on your side, and any reference numbers or information you'll need. If the call didn't resolve it, we'll tell you why and what to do next.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE CALL ── */}
      <section className="lp-section">
        <div className="container-narrow">
          <div className="eyebrow">Who We Call</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '36px' }}>If it has an Italian phone number, we can call it</h2>

          <div className="examples-grid">
            <div className="example-card">
              <div className="ex-icon">⚡</div>
              <p>Italian utility companies — Enel, Eni, Hera — for billing disputes, service issues, or account questions.</p>
              <div className="ex-result">✓ Resolved billing error. Credit applied.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🏛️</div>
              <p>Government offices — Questura, Comune, Agenzia delle Entrate — for appointments, status checks, and requirements.</p>
              <div className="ex-result">✓ Appointment secured. Requirements confirmed.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🏦</div>
              <p>Italian banks to resolve account issues, blocked cards, or documentation requests.</p>
              <div className="ex-result">✓ Account unblocked. Documents identified.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">📦</div>
              <p>Italian courier companies — Poste Italiane, DHL IT, BRT — to locate packages, schedule redelivery, or resolve customs holds.</p>
              <div className="ex-result">✓ Package located. Redelivery scheduled.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🏠</div>
              <p>Property management offices and landlord representatives for maintenance issues, contract questions, or disputes.</p>
              <div className="ex-result">✓ Maintenance ticket opened. Timeline confirmed.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🏥</div>
              <p>Medical offices, hospitals, and ASL for appointments, test results, or insurance questions.</p>
              <div className="ex-result">✓ Appointment booked. Insurance status confirmed.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBMIT FORM ── */}
      <section className="lp-section white" id="submit">
        <div className="container-narrow">
          <div className="eyebrow">Submit Your Request</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '8px' }}>Tell us who to call</h2>
          <p style={{ color: 'var(--gray)', marginBottom: '36px', fontSize: '1rem', lineHeight: '1.65' }}>
            Give us the number and what you need. We&apos;ll handle the rest.
          </p>
          <CallForYouForm />
        </div>
      </section>

      {/* ── UPSELL ── */}
      <section className="lp-section">
        <div className="container-narrow">
          <div className="upsell-block">
            <h3>Expecting to need regular help?</h3>
            <p>DaFigaro membership includes monthly call credits plus unlimited letter explanations and priority response. If Italy keeps throwing things at you, membership pays for itself fast.</p>
            <Link href="/#membership" className="btn-primary">
              Learn About Membership →
            </Link>
          </div>

          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--gray)' }}>Also available:</span>
            <Link href="/explain-this-letter" className="btn-ghost">📄 Explain a Letter — €29</Link>
            <Link href="/codice-fiscale-help" className="btn-ghost">🪪 Codice Fiscale Help — from €149</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
