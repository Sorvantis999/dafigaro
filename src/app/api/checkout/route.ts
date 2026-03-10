import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// ── Service config ─────────────────────────────────────────────
// Using inline price_data — no Stripe product catalog setup required.
// Jim: to use catalog prices later, replace price_data with price: 'price_xxxx'

const SERVICES = {
  'explain-letter': {
    name: 'Explain This Letter — DaFigaro',
    description: 'Document review, translation, and action summary in English within 24–48h.',
    amount: 2900,   // €29.00 in cents
    currency: 'eur',
    cancelPath: '/explain-this-letter',
  },
  'call-for-you': {
    name: 'We Call for You — DaFigaro',
    description: 'We make the call in Italian and send you a full written summary in English within 24–48h.',
    amount: 4900,   // €49.00 in cents
    currency: 'eur',
    cancelPath: '/we-call-for-you',
  },
} as const

type ServiceKey = keyof typeof SERVICES

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET) {
    console.error('[checkout] STRIPE_SECRET not set')
    return NextResponse.json({ error: 'Payment system not configured.' }, { status: 503 })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: '2024-06-20',
  })

  try {
    const body = await req.json()
    const { serviceType, customerEmail, customerName, description, phone, situation } = body

    const service = SERVICES[serviceType as ServiceKey]
    if (!service) {
      return NextResponse.json({ error: 'Invalid service type.' }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dafigaro.vercel.app'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{
        quantity: 1,
        price_data: {
          currency: service.currency,
          unit_amount: service.amount,
          product_data: {
            name: service.name,
            description: service.description,
          },
        },
      }],
      customer_email: customerEmail || undefined,
      metadata: {
        serviceType,
        customerName:  customerName  || '',
        customerEmail: customerEmail || '',
        description:   description   || '',
        phone:         phone         || '',
        situation:     situation     || '',
      },
      success_url: `${baseUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${baseUrl}${service.cancelPath}?payment=cancelled`,
      expires_at:  Math.floor(Date.now() / 1000) + 1800,
    })

    return NextResponse.json({ url: session.url })

  } catch (err) {
    console.error('[checkout] stripe error:', err)
    const msg = err instanceof Stripe.errors.StripeError ? err.message : 'Checkout error. Please try again.'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
