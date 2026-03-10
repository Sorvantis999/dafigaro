import type { Metadata } from 'next'
import { Suspense } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — DaFigaro',
  description: 'Tell us what Italian bureaucracy problem you\'re dealing with. We\'ll get back to you within 24–48 hours.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section style={{ padding: '136px 0 96px' }}>
        <div className="container-narrow">

          <div style={{ marginBottom: '48px' }}>
            <div className="eyebrow">Get in Touch</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: 16,
            }}>
              Tell us what you&apos;re dealing with.
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--gray)', lineHeight: 1.75, maxWidth: 520 }}>
              Not every problem fits a fixed-price service. If you&apos;re dealing with something we don&apos;t have a page for — a bank account, a form you can&apos;t decode, or something else entirely — describe it here and we&apos;ll tell you honestly what we can do.
            </p>
          </div>

          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>

        </div>
      </section>

      <Footer />
    </>
  )
}
