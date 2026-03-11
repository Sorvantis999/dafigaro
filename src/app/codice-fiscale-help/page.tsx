import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CodiceFiscaleForm from '@/components/CodiceFiscaleForm'

export const metadata: Metadata = {
  title: 'Codice Fiscale Help — DaFigaro',
  description: 'Need a codice fiscale or blocked trying to get one? We help foreigners in Italy understand the process and coordinate the request.',
}

export default function CodiceFiscaleHelp() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="container-narrow">
          <div className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Codice Fiscale Help</div>
          <h1>
            Everything in Italy starts with a codice fiscale.<br /><em>Without one, you&apos;re stuck at zero.</em>
          </h1>
          <p className="lp-hero-sub">
            Can&apos;t open a bank account? Can&apos;t sign the lease. Can&apos;t register for anything. Tell us your situation — we find the right path and coordinate everything until it&apos;s done.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#submit" className="btn-primary">
              Start Your Request →
            </Link>
            <Link href="#what-it-is" className="btn-secondary">
              What is a codice fiscale?
            </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.82rem', color: 'var(--gray-light)' }}>
            From €149 · Price depends on situation · No hidden fees
          </p>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="lp-section white" id="what-it-is">
        <div className="container-narrow">
          <div className="eyebrow">What You Need to Know</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Without a codice fiscale, you're blocked at nearly every turn.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray)', lineHeight: '1.8', marginBottom: '24px' }}>
            The codice fiscale (Italy's tax code/fiscal code) is required for opening a bank account, signing a lease, enrolling in school, accessing the national health service, registering a SIM card, buying a property, and most interactions with any Italian institution. It's the key that unlocks the rest of the Italian system.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--gray)', lineHeight: '1.8', marginBottom: '24px' }}>
            Getting one should be straightforward. For foreigners, it often isn't. The process varies depending on whether you're physically in Italy, which country you're from, whether you have a visa, and which office handles your specific situation. Requirements that should be consistent aren't. Offices that should accept your documents sometimes don't.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--gray)', lineHeight: '1.8' }}>
            We've helped hundreds of foreigners get their codice fiscale — students, remote workers, retirees, visa applicants, and people who showed up at the wrong office three times and still got the runaround. We know the paths that actually work.
          </p>
        </div>
      </section>



      {/* ── HOW IT WORKS ── */}
      <section className="lp-section white" id="how-it-works">
        <div className="container-narrow">
          <div className="eyebrow">The Process</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '36px' }}>What happens after you reach out</h2>

          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num">1</div>
              <div>
                <h4>Tell us your situation</h4>
                <p>Are you a student arriving for the first time? A remote worker who already moved? Applying from outside Italy? Each situation has a different path. Tell us where you are and what you're dealing with.</p>
              </div>
            </div>

            <div className="lp-step">
              <div className="lp-step-num">2</div>
              <div>
                <h4>We assess and confirm the price</h4>
                <p>Based on your situation, we tell you exactly what's needed, which path applies to you, and what the total cost will be. No surprises later.</p>
              </div>
            </div>

            <div className="lp-step">
              <div className="lp-step-num">3</div>
              <div>
                <h4>We coordinate the process</h4>
                <p>We guide you through what you need to do, make calls to relevant offices if needed, and follow up until the codice fiscale is issued and in your hands.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '36px', background: 'var(--orange-light)', border: '1px solid rgba(216,122,74,0.2)', borderRadius: 'var(--radius)', padding: '20px 24px' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--black)', lineHeight: '1.7', margin: 0 }}>
              <strong>Note on third parties:</strong> In some cases — particularly for applicants outside Italy or situations involving complex residency status — a licensed professional (patronato, commercialista, or consular contact) may be required. We will tell you this clearly if it applies to your situation, explain why, and connect you to the right resource. We don't take on scope we can't deliver.
            </p>
          </div>
        </div>
      </section>

      {/* ── SITUATIONS ── */}
      <section className="lp-section">
        <div className="container-narrow">
          <div className="eyebrow">Common Situations We Handle</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '36px' }}>Your situation, specifically</h2>

          <div className="examples-grid">
            <div className="example-card">
              <div className="ex-icon">🎓</div>
              <p>American students arriving in Italy for a semester or year program who need a codice fiscale before they can do anything else.</p>
              <div className="ex-result">✓ Most common situation. Process well-mapped.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">💻</div>
              <p>Remote workers who have relocated or are planning to relocate and need the codice fiscale to open a bank account or sign a lease.</p>
              <div className="ex-result">✓ Multiple paths available depending on visa status.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🏖️</div>
              <p>Retirees on the Italy Retirement Visa (Elective Residency Visa) who need the codice fiscale as part of their application process.</p>
              <div className="ex-result">✓ Specific consular path. We know the requirements.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🏠</div>
              <p>Property buyers who need the codice fiscale before the notaio can proceed with the transaction.</p>
              <div className="ex-result">✓ Urgent timelines handled. Notaio coordination available.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🌍</div>
              <p>People applying from outside Italy through an Italian consulate who keep getting conflicting information about the requirements.</p>
              <div className="ex-result">✓ Consulate-specific processes mapped by location.</div>
            </div>

            <div className="example-card">
              <div className="ex-icon">🔄</div>
              <p>People who were told to go to the wrong office, showed up with the wrong documents, or had a previous application fall through.</p>
              <div className="ex-result">✓ We untangle the confusion. Fresh start with the right path.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBMIT FORM ── */}
      <section className="lp-section white" id="submit">
        <div className="container-narrow">
          <div className="eyebrow">Start Your Request</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '8px' }}>Tell us your situation</h2>
          <p style={{ color: 'var(--gray)', marginBottom: '36px', fontSize: '1rem', lineHeight: '1.65' }}>
            No payment now. We&apos;ll assess your situation and confirm the path and price before anything is charged.
          </p>
          <CodiceFiscaleForm />
        </div>
      </section>

      {/* ── UPSELL ── */}
      <section className="lp-section">
        <div className="container-narrow">
          <div className="upsell-block">
            <h3>The codice fiscale is just the beginning.</h3>
            <p>If you're actively moving to or living in Italy, DaFigaro membership covers the ongoing stream of bureaucracy that follows — letters, calls, forms, and admin, month after month.</p>
            <Link href="/#membership" className="btn-primary">
              Learn About Membership →
            </Link>
          </div>

          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--gray)' }}>Also available:</span>
            <Link href="/explain-this-letter" className="btn-ghost">📄 Explain a Letter — €29</Link>
            <Link href="/we-call-for-you" className="btn-ghost">📞 We Call for You — €49</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
