import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const SERVICES = {
  'explain-letter': {
    amount: 2900,
    currency: 'eur',
    label: 'Explain This Letter — DaFigaro',
  },
  'call-for-you': {
    amount: 4900,
    currency: 'eur',
    label: 'We Call for You — DaFigaro',
  },
} as const

type ServiceKey = keyof typeof SERVICES

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET) {
    return NextResponse.json({ error: 'Payment not configured.' }, { status: 503 })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET, { apiVersion: '2024-06-20' })

  try {
    const body = await req.json()
    const { serviceType, customerName, customerEmail, description, phone, situation } = body

    const service = SERVICES[serviceType as ServiceKey]
    if (!service) {
      return NextResponse.json({ error: 'Invalid service type.' }, { status: 400 })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount:   service.amount,
      currency: service.currency,
      automatic_payment_methods: { enabled: true },
      receipt_email: customerEmail || undefined,
      description: service.label,
      metadata: {
        serviceType,
        customerName:  customerName  || '',
        customerEmail: customerEmail || '',
        description:   description   || '',
        phone:         phone         || '',
        situation:     situation     || '',
      },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })

  } catch (err) {
    console.error('[payment-intent] error:', err)
    const msg = err instanceof Stripe.errors.StripeError ? err.message : 'Payment setup failed.'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
