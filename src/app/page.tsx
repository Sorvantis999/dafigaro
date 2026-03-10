import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO — Z-SCAN: visual top-left, headline top-right, CTA terminal bottom-right ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">

            {/* Z position 1 + 3: visual proof — left column */}
            <div className="hero-visual">
              <div className="hero-photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-letter.jpg"
                  alt="Italian government letter on a desk"
                  className="hero-photo"
                />
                <div className="hero-photo-overlay" />
              </div>
              <div className="hero-panel">
                <div className="hero-panel-label">Recent tasks handled</div>

                <div className="task-row">
                  <div className="task-dot orange">📄</div>
                  <div className="task-info">
                    <div className="task-name">Letter from Agenzia delle Entrate</div>
                    <div className="task-detail">Explained + action steps provided</div>
                  </div>
                  <span className="task-badge done">Done</span>
                </div>

                <div className="task-row">
                  <div className="task-dot green">📞</div>
                  <div className="task-info">
                    <div className="task-name">Called Enel re: billing dispute</div>
                    <div className="task-detail">Issue resolved in 1 call</div>
                  </div>
                  <span className="task-badge done">Done</span>
                </div>

                <div className="task-row">
                  <div className="task-dot blue">🪪</div>
                  <div className="task-info">
                    <div className="task-name">Codice fiscale for student arrival</div>
                    <div className="task-detail">Process coordinated</div>
                  </div>
                  <span className="task-badge done">Done</span>
                </div>

                <div className="task-row">
                  <div className="task-dot orange">📋</div>
                  <div className="task-info">
                    <div className="task-name">Apartment contract review</div>
                    <div className="task-detail">In progress</div>
                  </div>
                  <span className="task-badge active">Active</span>
                </div>
              </div>
            </div>

            {/* Z position 2 + 4: headline top-right, CTA terminal bottom-right */}
            <div className="hero-right">
              <div className="hero-eyebrow">
                <span>🇮🇹</span> For Americans in Italy
              </div>

              <h1>
                Italian bureaucracy,<br />
                <em>handled in English.</em>
              </h1>

              <p className="hero-sub">
                Letters you can&rsquo;t read. Calls you can&rsquo;t make. Forms that make no sense.
                Tell us what you&rsquo;re dealing with — we handle it.
              </p>

              {/* CTA at Z terminal: bottom-right of fold */}
              <div className="hero-actions">
                <Link href="#get-help" className="btn-primary">
                  Tell Us Your Problem →
                </Link>
                <Link href="#how-it-works" className="btn-secondary">
                  How it works
                </Link>
              </div>

              <p className="hero-micro">
                <strong>No subscription required.</strong> Fixed prices. Real people. 24–48h response.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <strong>Real people</strong>, not bots
          </div>
          <div className="trust-dot" />
          <div className="trust-item">
            Responses in <strong>24–48 hours</strong>
          </div>
          <div className="trust-dot" />
          <div className="trust-item">
            Help in <strong>English</strong>, always
          </div>
          <div className="trust-dot" />
          <div className="trust-item">
            <strong>Fixed pricing</strong>, no surprises
          </div>
          <div className="trust-dot" />
          <div className="trust-item">
            No subscription required <strong>to start</strong>
          </div>
        </div>
      </div>

      {/* ── PROBLEMS ── */}
      <section className="problems" id="services">
        <div className="container">
          <div className="eyebrow">Common Problems We Solve</div>
          <h2 className="section-title">Whatever Italy threw at you today</h2>
          <p className="section-sub">
            From bureaucratic letters to phone calls you dread making — if it's an Italian admin problem, we've handled it before.
          </p>

          <div className="problems-grid">
            <Link href="/explain-this-letter" className="problem-card">
              <div className="problem-icon">📄</div>
              <h3>Explain This Letter</h3>
              <p>Got a confusing official letter from an Italian authority, landlord, utility, or comune? We translate and explain exactly what it means and what you need to do.</p>
              <span className="card-arrow">Get letter explained →</span>
            </Link>

            <Link href="/we-call-for-you" className="problem-card">
              <div className="problem-icon">📞</div>
              <h3>We Call for You</h3>
              <p>Need to call an Italian office, utility, courier, or company but can't navigate the language or phone system? We make the call and report back.</p>
              <span className="card-arrow">Start call request →</span>
            </Link>

            <Link href="/codice-fiscale-help" className="problem-card">
              <div className="problem-icon">🪪</div>
              <h3>Codice Fiscale Help</h3>
              <p>Blocked or confused on getting your codice fiscale? We walk you through the process or coordinate the request on your behalf.</p>
              <span className="card-arrow">Start codice fiscale →</span>
            </Link>

            <div className="problem-card" style={{ cursor: 'default' }}>
              <div className="problem-icon">🏦</div>
              <h3>Bank Account Help</h3>
              <p>Italian banks are notoriously difficult for foreigners. We help you understand the requirements and navigate the process.</p>
              <span className="card-arrow" style={{ color: 'var(--gray)' }}>Coming soon</span>
            </div>

            <div className="problem-card" style={{ cursor: 'default' }}>
              <div className="problem-icon">📋</div>
              <h3>Forms & Admin</h3>
              <p>Forms from INPS, your comune, tax authorities, or landlords — we explain what's being asked and help you fill them correctly.</p>
              <span className="card-arrow" style={{ color: 'var(--gray)' }}>Coming soon</span>
            </div>

            <div className="problem-card" style={{ cursor: 'default' }}>
              <div className="problem-icon">🔍</div>
              <h3>Find the Right Professional</h3>
              <p>Need a lawyer, commercialista, notaio, or translator? We know the network and can connect you to the right English-speaking expert.</p>
              <span className="card-arrow" style={{ color: 'var(--gray)' }}>Coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ITALY PHOTO BREAK ── */}
      <div className="photo-break">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/italy-building.jpg" alt="Italian town hall" className="photo-break-img" />
        <div className="photo-break-overlay" />
        <div className="photo-break-text">
          <p>Italian bureaucracy doesn&apos;t care that you don&apos;t speak the language.</p>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="how" id="how-it-works">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="eyebrow">The Process</div>
            <h2 className="section-title">Simple. Fast. Clear.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              No confusing onboarding. No subscriptions before you know if we're useful. Just tell us the problem.
            </p>
          </div>

          <div className="how-grid">
            <div className="how-step">
              <div className="how-number">1</div>
              <h3>Tell us your problem</h3>
              <p>Describe what you're dealing with. Upload a letter, give us a phone number, or explain the situation in plain English.</p>
            </div>

            <div className="how-step">
              <div className="how-number">2</div>
              <h3>We review and respond</h3>
              <p>A real person on our team reviews your request and gets back to you within 24–48 hours with a clear explanation or action plan.</p>
            </div>

            <div className="how-step">
              <div className="how-number">3</div>
              <h3>Problem resolved</h3>
              <p>We handle the hard part — the call, the translation, the paperwork — and you get a clear outcome in English.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section className="offers" id="pricing">
        <div className="container">
          <div className="eyebrow">Fixed-Price Offers</div>
          <h2 className="section-title">Know exactly what you're getting</h2>
          <p className="section-sub">
            No hidden fees. No ambiguous hourly rates. Pick the task, pay a fixed price, get a clear result.
          </p>

          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-icon">📄</div>
              <h3>Explain This Letter</h3>
              <div className="offer-problem">For confusing Italian mail</div>
              <p className="offer-desc">Upload any letter from an Italian authority, utility, landlord, or company. We explain what it means and what action you need to take.</p>
              <div className="offer-outcome">
                <div className="outcome-label">You get</div>
                <p>Full explanation in English + recommended next steps, delivered in 24–48h</p>
              </div>
              <div className="offer-price">€29</div>
              <div className="offer-price-note">One-time, per letter</div>
              <Link href="/explain-this-letter" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Upload Your Letter →
              </Link>
              <ul className="offer-includes">
                <li>Full translation & explanation</li>
                <li>Urgency assessment</li>
                <li>Recommended actions</li>
                <li>English summary you can share</li>
              </ul>
            </div>

            <div className="offer-card featured">
              <div className="offer-badge">Most Requested</div>
              <div className="offer-icon">📞</div>
              <h3>We Call for You</h3>
              <div className="offer-problem">For calls you can't make</div>
              <p className="offer-desc">Give us the number and what you need. We call the office, utility, or company in Italian, get the answer, and report back.</p>
              <div className="offer-outcome">
                <div className="outcome-label">You get</div>
                <p>Call completed + written summary of what was said and what happens next</p>
              </div>
              <div className="offer-price">€49</div>
              <div className="offer-price-note">One-time, per call</div>
              <Link href="/we-call-for-you" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Start Call Request →
              </Link>
              <ul className="offer-includes">
                <li>One call made on your behalf</li>
                <li>Full call summary in English</li>
                <li>Next steps clearly laid out</li>
                <li>Follow-up call if needed</li>
              </ul>
            </div>

            <div className="offer-card">
              <div className="offer-icon">🪪</div>
              <h3>Codice Fiscale Help</h3>
              <div className="offer-problem">For registration and setup</div>
              <p className="offer-desc">We help you understand what's needed for your situation and coordinate the process — whether you're in Italy or applying from abroad.</p>
              <div className="offer-outcome">
                <div className="outcome-label">You get</div>
                <p>Step-by-step plan + coordination support until your codice fiscale is issued</p>
              </div>
              <div className="offer-price">from €149</div>
              <div className="offer-price-note">Final price based on situation</div>
              <Link href="/codice-fiscale-help" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Start Your Request →
              </Link>
              <ul className="offer-includes">
                <li>Situation assessment</li>
                <li>Full process coordination</li>
                <li>Document checklist</li>
                <li>Status updates until done</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="why">
        <div className="container">
          <div className="eyebrow">Why People Use DaFigaro</div>
          <h2 className="section-title">Not because Italy is impossible.<br />Because it shouldn't be your full-time job.</h2>

          <div className="why-grid" style={{ marginTop: '48px' }}>
            <div className="why-item">
              <div className="why-icon">⏱️</div>
              <div>
                <h4>Save hours of frustration</h4>
                <p>What takes you an entire day — finding the right office, decoding the process, waiting on hold — takes us 30 minutes. We know how Italy works.</p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">🇬🇧</div>
              <div>
                <h4>Everything in English</h4>
                <p>You shouldn't have to learn bureaucratic Italian to live in Italy. We handle the Italian side and give you clear, plain-English answers.</p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">✅</div>
              <div>
                <h4>Stop guessing. Know exactly what to do.</h4>
                <p>Italian admin is full of unstated rules and hidden steps. We've seen it all. You get clear next steps, not vague summaries.</p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">🤝</div>
              <div>
                <h4>Real people, not software</h4>
                <p>There's no AI here pretending to understand your situation. A real person reads your problem, researches it, and responds. Every time.</p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">💶</div>
              <div>
                <h4>Fixed prices, no surprises</h4>
                <p>You know what you're paying before you commit. No hourly billing, no retainers, no invoices that look different from the quote.</p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">⚡</div>
              <div>
                <h4>Fast turnaround</h4>
                <p>Most requests are handled within 24–48 hours. When something is urgent, tell us — we'll do what we can to prioritize.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP ── */}
      <section className="membership" id="membership">
        <div className="container">
          <div className="membership-box">
            <div className="membership-left">
              <div className="eyebrow membership-eyebrow">DaFigaro Membership</div>
              <h2>If Italy keeps throwing problems at you, we can be on retainer.</h2>
              <p>
                One-off tasks work well for a single problem. If you're navigating a move, a visa, a property deal, or just living in Italy and encountering friction regularly — membership gives you ongoing support without paying per task every time.
              </p>
              <Link href="#get-help" className="btn-primary">
                Learn About Membership →
              </Link>
            </div>

            <div className="membership-features">
              <div className="mem-feature">
                <div className="mem-icon">📬</div>
                <div>
                  <h4>Unlimited letter explanations</h4>
                  <p>Every piece of Italian mail, explained. No per-letter fees.</p>
                </div>
              </div>

              <div className="mem-feature">
                <div className="mem-icon">📞</div>
                <div>
                  <h4>Monthly call credits</h4>
                  <p>Use them for offices, utilities, landlords, or anything that needs a call in Italian.</p>
                </div>
              </div>

              <div className="mem-feature">
                <div className="mem-icon">⚡</div>
                <div>
                  <h4>Priority response</h4>
                  <p>Members get faster turnaround and direct access to our team.</p>
                </div>
              </div>

              <div className="mem-feature">
                <div className="mem-icon">🗺️</div>
                <div>
                  <h4>Ongoing navigation support</h4>
                  <p>Working through a move, a visa process, or a property deal? We're with you for the whole journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq" id="faq">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="eyebrow">Questions</div>
            <h2 className="section-title">Before you ask</h2>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Who is actually helping me? Is this AI?</summary>
              <p className="faq-answer">
                Real people. Our team is made up of bilingual professionals with direct experience navigating Italian bureaucracy. We use tools to help us work faster, but every request is reviewed and handled by a human. No automated responses, no bots.
              </p>
            </details>

            <details className="faq-item">
              <summary>How fast will I get a response?</summary>
              <p className="faq-answer">
                Most requests are handled within 24–48 business hours. If your situation is urgent — a deadline, an eviction notice, something that needs same-day attention — note that when you submit and we'll do our best to prioritize. Members get faster response times.
              </p>
            </details>

            <details className="faq-item">
              <summary>Do I need to speak Italian at all?</summary>
              <p className="faq-answer">
                No. That's why we exist. You communicate with us entirely in English. We handle all Italian communication on your behalf — the calls, the letters, the offices. You get everything back in plain English.
              </p>
            </details>

            <details className="faq-item">
              <summary>What kinds of tasks can you actually handle?</summary>
              <p className="faq-answer">
                Letters and official mail, phone calls to any Italian company or public office, codice fiscale coordination, help with forms and admin instructions, utility issues, landlord communications, and finding the right local professional. If you're not sure whether your situation fits, just describe it — we'll tell you honestly whether we can help.
              </p>
            </details>

            <details className="faq-item">
              <summary>When do you bring in third parties like lawyers or notaries?</summary>
              <p className="faq-answer">
                Some situations require licensed professionals — a notaio for property transactions, a commercialista for complex tax matters, a lawyer for legal disputes. When that's the case, we tell you directly and can connect you to the right English-speaking professional rather than trying to handle something outside our scope.
              </p>
            </details>

            <details className="faq-item">
              <summary>What happens after I submit my request?</summary>
              <p className="faq-answer">
                You'll receive a confirmation immediately. Within 24–48 hours, a team member will review your request and either send you a complete response or follow up if they need clarification. You won't be left wondering what's happening.
              </p>
            </details>

            <details className="faq-item">
              <summary>Can you help with situations outside Rome or Milan?</summary>
              <p className="faq-answer">
                Yes. We help foreigners across Italy — whether you're in a major city, a small comune, or somewhere in between. Italian bureaucracy follows the same general rules nationwide, even if local offices interpret them creatively.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bottom-cta" id="get-help">
        <div className="container">
          <div className="eyebrow">Ready?</div>
          <h2>Start with one problem.</h2>
          <p>No subscription. No commitment. Just tell us what you're dealing with and we'll tell you exactly how we can help.</p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/explain-this-letter" className="btn-primary">
              📄 Explain a Letter — €29
            </Link>
            <Link href="/we-call-for-you" className="btn-primary">
              📞 Make a Call — €49
            </Link>
            <Link href="/codice-fiscale-help" className="btn-primary">
              🪪 Codice Fiscale — from €149
            </Link>
          </div>

          <p className="micro-trust" style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--gray-light)' }}>
            Real people. Fixed prices. Clear outcomes.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
