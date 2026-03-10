import type { Metadata } from 'next'
import Link from 'next/link'
import LpNav from '@/components/LpNav'
import CodiceFiscaleForm from '@/components/CodiceFiscaleForm'

export const metadata: Metadata = {
  title: 'Codice Fiscale Help — DaFigaro',
  description: 'Stuck getting your codice fiscale? We assess your situation and coordinate the process — whether you\'re in Italy or applying from abroad. From €149.',
  robots: 'noindex',
}

export default function LpCodiceFiscale() {
  return (
    <>
      <LpNav price="from €149" priceNote="price confirmed before you pay" />

      {/* ── HERO + FORM ── */}
      <section className="lp-ad-hero">
        <div className="lp-ad-grid">

          {/* Left: copy */}
          <div className="lp-ad-copy">
            <div className="lp-ad-eyebrow">For foreigners in Italy</div>
            <h1>Everything in Italy starts with a codice fiscale. Without one, you&apos;re stuck at zero.</h1>
            <p className="lp-ad-sub">Can&apos;t open the bank account. Can&apos;t sign the lease. Can&apos;t register for anything. Tell us your situation — we find the right path and coordinate everything until it&apos;s done.</p>

            <div className="lp-ad-proof">
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>US student arriving for semester — <em>obtained in 4 days, applied from abroad</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Non-EU freelancer needing tax registration — <em>right path identified, process coordinated</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Remote worker blocked by consulate — <em>alternative route found, resolved</em></span>
              </div>
              <div className="lp-proof-item">
                <span className="lp-proof-icon">✓</span>
                <span>Property buyer needing urgent registration — <em>handled before closing date</em></span>
              </div>
            </div>

            <div className="lp-ad-trust">
              <div className="lp-trust-item"><strong>from €149</strong></div>
              <div className="lp-trust-dot" />
              <div className="lp-trust-item"><strong>Price confirmed</strong> before you pay</div>
              <div className="lp-trust-dot" />
              <div className="lp-trust-item"><strong>Works</strong> from outside Italy</div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lp-ad-form-wrap" id="submit">
            <div className="lp-ad-form-header">
              <h2>Describe your situation</h2>
              <p>We&apos;ll assess it and tell you the exact path and price before you commit.</p>
            </div>
            <CodiceFiscaleForm />
          </div>

        </div>
      </section>

      {/* ── SITUATIONS ── */}
      <section className="lp-ad-section lp-ad-section-alt">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">Common situations we handle</h2>
          <div className="lp-situations-grid">
            <div className="lp-situation">
              <h4>🎓 Students arriving in Italy</h4>
              <p>Need a codice fiscale before you can open a bank account, sign a lease, or register with a university? We handle applications before you land.</p>
            </div>
            <div className="lp-situation">
              <h4>💼 Remote workers and freelancers</h4>
              <p>Setting up as a freelancer or self-employed in Italy requires a codice fiscale as the first step. We sort it out so you can focus on the rest.</p>
            </div>
            <div className="lp-situation">
              <h4>🏠 Property buyers</h4>
              <p>Required before any property transaction in Italy. If you&apos;re on a closing timeline, tell us — we&apos;ll prioritize.</p>
            </div>
            <div className="lp-situation">
              <h4>🌍 Applying from abroad</h4>
              <p>You don&apos;t need to be in Italy to get a codice fiscale. We know the right channels for non-residents applying from outside the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-ad-section">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">How it works</h2>
          <div className="lp-ad-steps">
            <div className="lp-ad-step">
              <div className="lp-ad-step-num">1</div>
              <div>
                <h4>Tell us your situation</h4>
                <p>Where you are, your nationality, your visa or residency status, and why you need the codice fiscale. The details matter — different situations require different paths.</p>
              </div>
            </div>
            <div className="lp-ad-step">
              <div className="lp-ad-step-num">2</div>
              <div>
                <h4>We assess and confirm</h4>
                <p>We identify the right process for your specific situation, confirm the exact price, and outline the document checklist. Nothing is assumed. No surprises.</p>
              </div>
            </div>
            <div className="lp-ad-step">
              <div className="lp-ad-step-num">3</div>
              <div>
                <h4>We coordinate until it&apos;s done</h4>
                <p>We handle communication with the relevant office, track status, and follow up until your codice fiscale is issued and in your hands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AGITATION ── */}
      <section className="lp-ad-section">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">Why getting a codice fiscale is harder than it should be.</h2>
          <div className="lp-body-copy">
            <p>In theory, it&apos;s just a tax identification number. In practice, the path to getting one varies significantly depending on your nationality, your residency status, where you&apos;re applying from, and which office you approach. The official guidance is spread across multiple government websites, often contradictory, and rarely updated.</p>
            <p>Apply at the wrong consulate, submit the wrong documents, or misunderstand the process and you can lose weeks — or be told to start over. Students miss enrollment windows. Buyers miss property closings. Workers can&apos;t start. Everything in Italy that requires official registration is blocked until this one number exists.</p>
            <p>We do this constantly. We know which route applies to your situation, what documents are actually required, and how to get it done without the trial and error.</p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="lp-ad-section lp-ad-section-alt">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">What &quot;we coordinate the process&quot; actually means.</h2>
          <div className="lp-deliverables-grid">
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">🗺️</div>
              <h4>We assess your specific situation</h4>
              <p>Nationality, current location, residency status, and purpose all determine the right path. We assess yours and tell you exactly which route applies — before you pay anything.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">📄</div>
              <h4>We build your document checklist</h4>
              <p>We tell you exactly which documents you need, in which format, and what each office will actually accept — not what the website says in theory.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">📞</div>
              <h4>We handle the office communication</h4>
              <p>Calls, emails, appointment booking, status follow-up — everything that requires navigating Italian bureaucracy in Italian, we do. You stay informed in English throughout.</p>
            </div>
            <div className="lp-deliverable">
              <div className="lp-deliverable-icon">✅</div>
              <h4>We follow through to completion</h4>
              <p>We stay on it until the codice fiscale is issued and confirmed in your hands. Not until we&apos;ve submitted paperwork and called it done — until it&apos;s actually done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS ── */}
      <section className="lp-ad-section">
        <div className="container-narrow">
          <h2 className="lp-ad-section-title">Before you submit.</h2>
          <div className="lp-faq">
            <div className="lp-faq-item">
              <h4>Why does it cost from €149? What determines the final price?</h4>
              <p>The main variable is complexity — applying as a resident in Italy is simpler than coordinating remotely from abroad through a consulate. We assess your situation first and give you an exact price before you commit. No surprises mid-process.</p>
            </div>
            <div className="lp-faq-item">
              <h4>Can I really get a codice fiscale without being in Italy?</h4>
              <p>Yes. Non-residents can apply through Italian consulates abroad or, in some cases, through designated authorized intermediaries. We know which approach works for your country and situation. We&apos;ve done this for clients across the US, UK, Canada, Australia, and the EU.</p>
            </div>
            <div className="lp-faq-item">
              <h4>How long does it actually take?</h4>
              <p>For straightforward cases, typically 3–7 business days once documents are in order. Urgent situations (upcoming property closings, enrollment deadlines) — tell us, and we prioritize. We&apos;ve turned cases around in 48 hours when it mattered.</p>
            </div>
            <div className="lp-faq-item">
              <h4>What if my situation is complicated?</h4>
              <p>That&apos;s exactly what the assessment is for. If your case requires something beyond our scope — certain legal situations, contested identity documents — we&apos;ll tell you that directly and point you to the right professional. You won&apos;t pay us for something we can&apos;t deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="lp-ad-section lp-ad-bottom-cta">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>You can&apos;t start anything in Italy without it.</h2>
          <p>Tell us your situation. We confirm the right path and exact price before you pay.</p>
          <Link href="#submit" className="btn-primary" style={{ fontSize: '1.05rem', padding: '18px 36px' }}>
            Start Codice Fiscale Request →
          </Link>
          <p className="lp-ad-micro">No payment now. Price confirmed before we start.</p>
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
