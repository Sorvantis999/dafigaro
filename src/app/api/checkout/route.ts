/**
 * POST /api/checkout
 *
 * Creates a Stripe Checkout Session for a DaFigaro service.
 *
 * ─────────────────────────────────────────────────────────────
 * CURRENT STATUS: STUBBED
 * The form submit flow currently emails the team and awaits
 * manual payment link. This route scaffolds the automated path.
 *
 * TO ACTIVATE (Jim):
 *   1. npm install stripe  (already in package.json as optional dep)
 *   2. Add STRIPE_SECRET_KEY to Vercel env vars
 *   3. Add STRIPE_WEBHOOK_SECRET to Vercel env vars  (from Step 2 below)
 *   4. Create products in Stripe dashboard (see SETUP.md)
 *   5. Replace PRICE_IDS below with your real Stripe Price IDs
 *   6. Uncomment the Stripe code and remove the stub response
 *   7. In each form component, call /api/checkout instead of /api/submit
 *      (or chain: submit → checkout → redirect)
 * ─────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from 'next/server'

// ── Stripe Price IDs ─────────────────────────────────────────
// Create these in Stripe Dashboard → Products → Add Product
// Then paste the price_xxx ID here for each service.
const PRICE_IDS = {
  'explain-letter':   process.env.STRIPE_PRICE_EXPLAIN_LETTER   || 'price_TODO_explain_letter',   // €29
  'call-for-you':     process.env.STRIPE_PRICE_CALL_FOR_YOU     || 'price_TODO_call_for_you',     // €49
  'codice-fiscale':   process.env.STRIPE_PRICE_CODICE_FISCALE   || 'price_TODO_codice_fiscale',   // €149
} as const

type ServiceType = keyof typeof PRICE_IDS

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { serviceType, customerEmail, customerName, metadata } = body

    if (!serviceType || !PRICE_IDS[serviceType as ServiceType]) {
      return NextResponse.json({ error: 'Invalid service type.' }, { status: 400 })
    }

    // ── STUB: Remove this block when activating Stripe ──────
    // While Stripe isn't wired up, we return a mock response
    // so the frontend doesn't break during development.
    if (!process.env.STRIPE_SECRET_KEY) {
      console.warn('[checkout] STRIPE_SECRET_KEY not set — returning stub response')
      return NextResponse.json({
        stub: true,
        message: 'Stripe not yet configured. Payment will be handled manually.',
        serviceType,
        priceId: PRICE_IDS[serviceType as ServiceType],
      })
    }
    // ── END STUB ─────────────────────────────────────────────

    // ── ACTIVATE: Uncomment when STRIPE_SECRET_KEY is set ───
    /*
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2024-06-20',
    })

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: PRICE_IDS[serviceType as ServiceType],
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      metadata: {
        customerName,
        serviceType,
        // Pass through any fields from the form submission
        // so the webhook can trigger the right workflow
        ...metadata,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${process.env.NEXT_PUBLIC_BASE_URL}/${serviceType}?payment=cancelled`,
      // For codice fiscale where price varies, use a custom amount:
      // See: https://stripe.com/docs/payments/checkout/custom-prices
    })

    return NextResponse.json({ url: session.url })
    */
    // ── END ACTIVATE ─────────────────────────────────────────

    return NextResponse.json({ error: 'Stripe not configured.' }, { status: 503 })

  } catch (err) {
    console.error('[checkout] error:', err)
    return NextResponse.json({ error: 'Checkout error. Please try again.' }, { status: 500 })
  }
}
