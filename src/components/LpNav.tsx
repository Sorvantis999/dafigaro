import Link from 'next/link'
import Image from 'next/image'

export default function LpNav({ price, priceNote }: { price: string; priceNote: string }) {
  return (
    <nav className="lp-ad-nav">
      <Link href="/" className="nav-logo">
        <Image src="/assets/dafigaro-full.svg" alt="DaFigaro" width={140} height={40} priority />
      </Link>
      <div className="lp-ad-nav-price">
        <span className="lp-ad-price">{price}</span>
        <span className="lp-ad-price-note">{priceNote}</span>
      </div>
    </nav>
  )
}
