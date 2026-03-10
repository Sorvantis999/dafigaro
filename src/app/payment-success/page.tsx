import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Payment Received — DaFigaro',
  description: 'Your payment was received. We\'ll be in touch within 24–48 hours.',
}

export default function PaymentSuccess() {
  return (
    <>
      <Nav />
      <section style={{ padding: '136px 0 96px', textAlign: 'center', minHeight: '60vh' }}>
        <div className="container-narrow">
          <div style={{
            width: 72,
            height: 72,
            background: 'var(--green-light)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 28px',
            color: 'var(--green)',
          }}>
            ✓
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}>
            Payment received.
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--gray)', lineHeight: 1.75, marginBottom: 12, maxWidth: 480, margin: '0 auto 12px' }}>
            A real person on our team will begin working on your request and respond within <strong>24–48 business hours</strong>.
          </p>

          <p style={{ fontSize: '0.9rem', color: 'var(--gray-light)', marginBottom: 40 }}>
            Check your inbox — we&apos;ve sent a confirmation to your email address.
          </p>

          <Link href="/" className="btn-secondary">
            ← Back to DaFigaro
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
