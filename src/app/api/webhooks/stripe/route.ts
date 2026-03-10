/**
 * POST /api/webhooks/stripe
 *
 * Receives Stripe webhook events and triggers fulfillment.
 *
 * ─────────────────────────────────────────────────────────────
 * CURRENT STATUS: STUBBED
 *
 * TO ACTIVATE (Jim):
 *   1. In Stripe Dashboard → Developers → Webhooks → Add endpoint
 *      URL: https://dafigaro.com/api/webhooks/stripe
 *      Events to listen for:
 *        - checkout.session.completed
 *        - payment_intent.payment_failed  (optional, for failed payment emails)
 *   2. Copy the Webhook Signing Secret → add as STRIPE_WEBHOOK_SECRET in Vercel
 *   3. Uncomment the Stripe code below
 *   4. Implement the fulfillment logic in handleCompletedCheckout()
 * ─────────────────────────────────────────────────────────────
 *
 * FULFILLMENT FLOW (when activated):
 *   checkout.session.completed
 *     → read session.metadata (serviceType, customerName, submissionId, etc.)
 *     → send "payment received, work beginning" email to customer
 *     → send "PAID — begin work" alert to hello@dafigaro.com
 *     → optionally: create task in project management tool (Notion, Linear, etc.)
 */

import { NextRequest, NextResponse } from 'next/server'

// Stripe requires the raw body for webhook signature verification.
// Next.js App Router: disable body parsing by reading as text.
export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const signature = req.headers.get('stripe-signature')

  // ── STUB: Remove when activating ────────────────────────────
  if (!process.env.STRIPE_WEBHOOK_SECRET || !process.env.STRIPE_SECRET_KEY) {
    console.warn('[webhook] Stripe env vars not set — ignoring event')
    return NextResponse.json({ received: true, stub: true })
  }
  // ── END STUB ─────────────────────────────────────────────────

  // ── ACTIVATE: Uncomment when Stripe is configured ────────────
  /*
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
  })

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('[webhook] signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      await handleCompletedCheckout(session)
      break
    }
    case 'payment_intent.payment_failed': {
      const intent = event.data.object as Stripe.PaymentIntent
      console.error('[webhook] payment failed:', intent.id, intent.last_payment_error?.message)
      // TODO: optional — send failed payment email to customer
      break
    }
    default:
      console.log('[webhook] unhandled event type:', event.type)
  }

  return NextResponse.json({ received: true })
  */
  // ── END ACTIVATE ──────────────────────────────────────────────

  return NextResponse.json({ received: true })
}

/**
 * Called when a Stripe Checkout Session completes successfully.
 * This is where you trigger actual work to begin.
 *
 * session.metadata contains everything passed from /api/checkout:
 *   - serviceType: 'explain-letter' | 'call-for-you' | 'codice-fiscale'
 *   - customerName
 *   - submissionId (if you store submissions before payment)
 *   - any other form fields
 */
// async function handleCompletedCheckout(session: Stripe.Checkout.Session) {
//   const { serviceType, customerName } = session.metadata || {}
//   const customerEmail = session.customer_email || session.customer_details?.email || ''
//
//   console.log('[webhook] payment completed:', {
//     id: session.id,
//     serviceType,
//     customerEmail,
//     amount: session.amount_total,
//   })
//
//   // 1. Send confirmation to customer
//   // await resend.emails.send({ ... })
//
//   // 2. Alert the team that payment is confirmed and work should begin
//   // await resend.emails.send({ ... })
//
//   // 3. Optional: create a task in your project management tool
//   // await createNotionTask({ serviceType, customerName, customerEmail, session })
// }
