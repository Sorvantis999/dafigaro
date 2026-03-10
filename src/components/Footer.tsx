import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <Image
                src="/assets/dafigaro-full.svg"
                alt="DaFigaro"
                width={130}
                height={38}
              />
            </div>
            <p>Real help for foreigners in Italy. Bureaucracy, paperwork, and everyday admin — handled in English.</p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/explain-this-letter">Explain This Letter</Link>
            <Link href="/we-call-for-you">We Call for You</Link>
            <Link href="/codice-fiscale-help">Codice Fiscale Help</Link>
            <Link href="/#pricing">View All Offers</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/#how-it-works">How It Works</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#membership">Membership</Link>
            <Link href="mailto:hello@dafigaro.com">Contact Us</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DaFigaro. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.8rem' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.8rem' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
