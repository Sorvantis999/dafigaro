import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Resend is lazy-initialized to avoid build-time crash if env var is missing
let resend: import('resend').Resend | null = null
function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    const { Resend } = require('resend')
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

const NOTIFY_EMAIL  = process.env.NOTIFY_EMAIL  || 'hello@dafigaro.com'
const FROM_EMAIL    = process.env.FROM_EMAIL     || 'submissions@dafigaro.com'

const SERVICE_LABELS: Record<string, string> = {
  'explain-letter': 'Explain This Letter — €29',
  'call-for-you':   'We Call for You — €49',
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('[webhook] Stripe env vars missing')
    return NextResponse.json({ error: 'Webhook not configured.' }, { status: 503 })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET, { apiVersion: '2024-06-20' })

  const rawBody  = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header.' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('[webhook] signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      await handleCompletedCheckout(stripe, session)
      break
    }
    case 'payment_intent.payment_failed': {
      const intent = event.data.object as Stripe.PaymentIntent
      console.warn('[webhook] payment failed:', intent.id, intent.last_payment_error?.message)
      break
    }
    default:
      // Ignore other event types
  }

  return NextResponse.json({ received: true })
}

async function handleCompletedCheckout(stripe: Stripe, session: Stripe.Checkout.Session) {
  const {
    serviceType  = '',
    customerName = '',
    customerEmail: metaEmail = '',
    description  = '',
    phone        = '',
    situation    = '',
  } = session.metadata || {}

  const customerEmail = metaEmail || session.customer_email || session.customer_details?.email || ''
  const serviceLabel  = SERVICE_LABELS[serviceType] || serviceType
  const amountEur     = session.amount_total ? `€${(session.amount_total / 100).toFixed(2)}` : '—'

  console.log('[webhook] checkout completed:', { id: session.id, serviceType, customerEmail, amountEur })

  const r = getResend()
  if (!r) {
    console.warn('[webhook] Resend not configured — skipping emails')
    return
  }

  // 1. Alert team: payment confirmed, begin work
  const detailRows = [
    description && `<tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;width:160px;">Description</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${description}</td></tr>`,
    phone       && `<tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Phone / Number</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${phone}</td></tr>`,
    situation   && `<tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Situation</td><td style="padding:8px 12px;">${situation.replace(/\n/g, '<br>')}</td></tr>`,
  ].filter(Boolean).join('')

  await r.emails.send({
    from:    `DaFigaro <${FROM_EMAIL}>`,
    to:      NOTIFY_EMAIL,
    subject: `[PAID ✓] ${serviceLabel} — ${customerName}`,
    html: `
      <h2 style="color:#D87A4A;font-family:Georgia,serif;">Payment Confirmed — Begin Work</h2>
      <p style="font-family:Arial,sans-serif;font-size:14px;color:#333;">
        Payment received via Stripe. This client is ready to go.
      </p>
      <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
        <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;width:160px;">Service</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${serviceLabel}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Amount Paid</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${amountEur}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${customerName}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;"><a href="mailto:${customerEmail}">${customerEmail}</a></td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Stripe Session</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${session.id}</td></tr>
        ${detailRows}
      </table>
      <p style="margin-top:24px;font-family:Arial,sans-serif;font-size:12px;color:#7A7A7A;">DaFigaro · Stripe webhook · checkout.session.completed</p>
    `,
  })

  // 2. Confirmation to customer
  if (customerEmail) {
    await r.emails.send({
      from:    `DaFigaro <${FROM_EMAIL}>`,
      to:      customerEmail,
      subject: `Payment confirmed — we're on it`,
      html: `
        <p style="font-family:Georgia,serif;font-size:1.1rem;color:#1b1b1b;">Hi ${customerName || 'there'},</p>
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#333;line-height:1.7;">
          Your payment for <strong>${serviceLabel}</strong> has been confirmed. We're on it.
        </p>
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#333;line-height:1.7;">
          You'll hear from us within 24–48 business hours with your full response.
          If you have anything to add in the meantime, reply directly to this email.
        </p>
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#333;line-height:1.7;">
          — The DaFigaro team
        </p>
        <hr style="border:none;border-top:1px solid #e8e0d8;margin:24px 0;" />
        <p style="font-family:Arial,sans-serif;font-size:11px;color:#7A7A7A;">
          DaFigaro · hello@dafigaro.com · Reference: ${session.id}
        </p>
      `,
    })
  }
}
