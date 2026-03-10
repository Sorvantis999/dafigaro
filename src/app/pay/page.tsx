'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'

// ── Stripe appearance: DaFigaro brand ────────────────────────────
const STRIPE_APPEARANCE = {
  theme: 'stripe' as const,
  variables: {
    colorPrimary:          '#D87A4A',
    colorBackground:       '#FFFFFF',
    colorText:             '#1b1b1b',
    colorDanger:           '#c0392b',
    colorTextSecondary:    '#7A7A7A',
    colorTextPlaceholder:  '#AAAAAA',
    colorIconTab:          '#7A7A7A',
    colorIconTabSelected:  '#D87A4A',
    fontFamily:            '"Jost", system-ui, sans-serif',
    fontSizeBase:          '15px',
    fontWeightNormal:      '400',
    fontWeightMedium:      '500',
    spacingUnit:           '5px',
    borderRadius:          '8px',
    focusBoxShadow:        '0 0 0 3px rgba(216,122,74,0.18)',
    focusOutline:          '1px solid #D87A4A',
  },
  rules: {
    '.Input': {
      border:          '1.5px solid #e8e0d8',
      boxShadow:       'none',
      padding:         '12px 14px',
      fontSize:        '0.95rem',
      backgroundColor: '#FFFFFF',
      transition:      'border-color 0.15s',
    },
    '.Input:focus': {
      border:    '1.5px solid #D87A4A',
      boxShadow: '0 0 0 3px rgba(216,122,74,0.12)',
    },
    '.Input--invalid': {
      border: '1.5px solid #c0392b',
    },
    '.Label': {
      fontSize:    '0.82rem',
      fontWeight:  '600',
      color:       '#1b1b1b',
      marginBottom:'6px',
      letterSpacing: '0.01em',
    },
    '.Tab': {
      border:       '1.5px solid #e8e0d8',
      boxShadow:    'none',
      borderRadius: '8px',
    },
    '.Tab:hover': {
      border:       '1.5px solid #D87A4A',
      boxShadow:    'none',
    },
    '.Tab--selected': {
      border:          '1.5px solid #D87A4A',
      backgroundColor: '#fdf6f1',
      boxShadow:       'none',
    },
    '.Block': {
      border:       '1.5px solid #e8e0d8',
      borderRadius: '8px',
      boxShadow:    'none',
    },
    '.Error': {
      fontSize: '0.82rem',
      color:    '#c0392b',
    },
  },
}

const SERVICE_META: Record<string, { label: string; price: string; cancelPath: string }> = {
  'explain-letter': { label: 'Explain This Letter', price: '€29',     cancelPath: '/explain-this-letter' },
  'call-for-you':   { label: 'We Call for You',     price: '€49',     cancelPath: '/we-call-for-you'   },
}

// ── Inner form (must be inside <Elements>) ───────────────────────
function PayForm({ service, onSuccess }: { service: string; onSuccess: () => void }) {
  const stripe   = useStripe()
  const elements = useElements()
  const [state, setState] = useState<'idle' | 'processing' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setState('processing')
    setErrorMsg('')

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${baseUrl}/payment-success?service=${service}`,
      },
    })

    if (error) {
      setState('error')
      setErrorMsg(error.message || 'Payment failed. Please try again.')
    } else {
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pay-form">
      <PaymentElement
        options={{
          layout: 'tabs',
          fields: { billingDetails: { name: 'auto', email: 'never' } },
        }}
      />
      {state === 'error' && (
        <div className="pay-error">{errorMsg}</div>
      )}
      <button
        type="submit"
        className="btn-primary pay-submit"
        disabled={!stripe || state === 'processing'}
      >
        {state === 'processing' ? 'Processing…' : `Pay ${SERVICE_META[service]?.price || ''} →`}
      </button>
      <p className="pay-secure-note">
        <span>🔒</span> Payments are processed securely by Stripe. DaFigaro never stores your card details.
      </p>
    </form>
  )
}

// ── Main page ────────────────────────────────────────────────────
function PayPageInner() {
  const searchParams = useSearchParams()
  const router       = useRouter()
  const service      = searchParams.get('service') || ''
  const meta         = SERVICE_META[service]

  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [stripePromise] = useState(() => {
    const pk = process.env.NEXT_PUBLIC_STRIPE_PK
    return pk ? loadStripe(pk) : null
  })
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    if (!service || !meta) { router.replace('/'); return }
    const stored = sessionStorage.getItem(`pi_secret_${service}`)
    if (stored) {
      setClientSecret(stored)
    } else {
      setLoadError('Session expired. Please go back and resubmit your request.')
    }
  }, [service, meta, router])

  if (!meta) return null

  if (loadError) {
    return (
      <div className="pay-page-wrap">
        <PayNav />
        <div className="pay-card">
          <div className="pay-error" style={{ marginBottom: 20 }}>{loadError}</div>
          <Link href={meta?.cancelPath || '/'} className="btn-secondary">← Go back</Link>
        </div>
      </div>
    )
  }

  if (!clientSecret || !stripePromise) {
    return (
      <div className="pay-page-wrap">
        <PayNav />
        <div className="pay-card">
          <div className="pay-loading">
            <div className="pay-spinner" />
            <p>Setting up secure payment…</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pay-page-wrap">
      <PayNav />
      <div className="pay-layout">

        {/* Left: Order summary */}
        <div className="pay-summary">
          <div className="pay-summary-label">You&apos;re paying for</div>
          <h2 className="pay-summary-service">{meta.label}</h2>
          <div className="pay-summary-price">{meta.price}</div>
          <div className="pay-summary-divider" />
          <ul className="pay-summary-items">
            <li>✓ Handled by a real bilingual team member</li>
            <li>✓ Written response in plain English</li>
            <li>✓ Within 24–48 business hours</li>
            <li>✓ Follow-up included if needed</li>
          </ul>
          <div className="pay-summary-divider" />
          <div className="pay-summary-brand">
            <Image src="/assets/dafigaro-full.svg" alt="DaFigaro" width={120} height={34} />
          </div>
          <Link href={meta.cancelPath} className="pay-back-link">← Back</Link>
        </div>

        {/* Right: Payment form */}
        <div className="pay-card">
          <div className="pay-card-header">
            <h3>Payment details</h3>
            <p>Your card is charged only once. No subscription.</p>
          </div>
          <Elements
            stripe={stripePromise}
            options={{ clientSecret, appearance: STRIPE_APPEARANCE, locale: 'en' }}
          >
            <PayForm service={service} onSuccess={() => {}} />
          </Elements>
        </div>

      </div>
    </div>
  )
}

function PayNav() {
  return (
    <nav className="pay-nav">
      <Link href="/" className="nav-logo">
        <Image src="/assets/dafigaro-full.svg" alt="DaFigaro" width={140} height={40} priority />
      </Link>
      <div className="pay-nav-secure">🔒 Secure checkout</div>
    </nav>
  )
}

export default function PayPage() {
  return (
    <Suspense fallback={null}>
      <PayPageInner />
    </Suspense>
  )
}
