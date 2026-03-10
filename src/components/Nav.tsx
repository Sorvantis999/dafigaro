import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image
            src="/assets/dafigaro-full.svg"
            alt="DaFigaro"
            width={168}
            height={48}
            priority
          />
        </Link>

        <div className="nav-links">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact" className="nav-cta">
            Get Help Now →
          </Link>
        </div>
      </div>
    </nav>
  )
}
