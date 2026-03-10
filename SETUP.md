# DaFigaro — Deployment & Integration Setup

This doc covers everything needed to go from the current staging state to fully operational: email delivery, Stripe payments, and domain hookup.

---

## Quick Reference: All Environment Variables

Set these in **Vercel Dashboard → dafigaro project → Settings → Environment Variables**.

| Variable | Required Now | Description |
|----------|-------------|-------------|
| `RESEND_API_KEY` | ✅ Yes | From resend.com/api-keys |
| `NOTIFY_EMAIL` | ✅ Yes | Where submissions go, e.g. `hello@dafigaro.com` |
| `FROM_EMAIL` | ✅ Yes | Sender address (must be verified in Resend) |
| `STRIPE_SECRET_KEY` | ⏳ Later | From Stripe Dashboard → Developers → API keys |
| `STRIPE_WEBHOOK_SECRET` | ⏳ Later | Generated when you add the webhook endpoint in Stripe |
| `STRIPE_PRICE_EXPLAIN_LETTER` | ⏳ Later | Stripe Price ID for €29 letter explanation |
| `STRIPE_PRICE_CALL_FOR_YOU` | ⏳ Later | Stripe Price ID for €49 call service |
| `STRIPE_PRICE_CODICE_FISCALE` | ⏳ Later | Stripe Price ID for €149 codice fiscale |
| `NEXT_PUBLIC_BASE_URL` | ⏳ Later | `https://dafigaro.com` (production URL, for Stripe redirects) |

---

## Step 1: Wire Up Email (Resend)

The forms already work — they just need a Resend key to send emails.

### 1a. Create a Resend account
Go to [resend.com](https://resend.com) → Sign up → Create API key → copy it.

### 1b. Set env vars in Vercel
```
RESEND_API_KEY     =  re_xxxxxxxxxxxxxxxxxxxx
NOTIFY_EMAIL       =  hello@dafigaro.com
FROM_EMAIL         =  submissions@dafigaro.com
```

### 1c. Verify your sending domain in Resend
1. Resend Dashboard → Domains → Add Domain → enter `dafigaro.com`
2. Resend will give you 2–3 DNS records to add (TXT and CNAME)
3. Add them in your DNS provider (wherever dafigaro.com is registered)
4. Click Verify in Resend — takes 5–30 minutes to propagate

**If you want to test before domain verification:**
Set `FROM_EMAIL=onboarding@resend.dev` — this works immediately on Resend's free tier without domain setup. Swap it out when the domain is verified.

### 1d. Redeploy after adding env vars
Any time you add env vars in Vercel, you need to redeploy for them to take effect:
Vercel Dashboard → dafigaro → Deployments → Redeploy latest

---

## Step 2: Connect the Domain

### 2a. Add domain in Vercel
Vercel Dashboard → dafigaro project → Settings → Domains → Add `dafigaro.com`

Vercel will give you either:
- An **A record** pointing to `76.76.21.21`
- Or a **CNAME** pointing to `cname.vercel-dns.com`

### 2b. Update DNS at your registrar
Add the record(s) Vercel specifies. DNS propagation: 10 minutes to a few hours.

### 2c. www redirect
Add `www.dafigaro.com` in Vercel too — it'll auto-redirect to the apex domain.

---

## Step 3: Wire Up Stripe Payments

The payment flow is already scaffolded. Activating it is 4 steps.

### 3a. Create a Stripe account
[stripe.com](https://stripe.com) → Sign up → complete business verification.

Set your account currency to EUR (Settings → Business → Bank accounts and scheduling).

### 3b. Create products in Stripe
Stripe Dashboard → Products → Add Product → create these three:

| Product Name | Price | Currency | Billing | Notes |
|---|---|---|---|---|
| Explain This Letter | 29 | EUR | One-time | |
| We Call for You | 49 | EUR | One-time | |
| Codice Fiscale Help | 149 | EUR | One-time | Starting price — can adjust per case |

After creating each, copy the **Price ID** (starts with `price_`).

### 3c. Add Stripe env vars to Vercel
```
STRIPE_SECRET_KEY              =  sk_live_xxxx   (use sk_test_xxxx for testing)
STRIPE_PRICE_EXPLAIN_LETTER    =  price_xxxxxxxx
STRIPE_PRICE_CALL_FOR_YOU      =  price_xxxxxxxx
STRIPE_PRICE_CODICE_FISCALE    =  price_xxxxxxxx
NEXT_PUBLIC_BASE_URL           =  https://dafigaro.com
```

### 3d. Add the webhook endpoint in Stripe
Stripe Dashboard → Developers → Webhooks → Add endpoint
- **URL:** `https://dafigaro.com/api/webhooks/stripe`
- **Events:** Select `checkout.session.completed`
- Copy the **Signing secret** (starts with `whsec_`) → add as `STRIPE_WEBHOOK_SECRET` in Vercel

### 3e. Activate the code
Open these two files and follow the TODO comments:

**`src/app/api/checkout/route.ts`**
- Install Stripe: `npm install stripe`
- Uncomment the Stripe block (~line 60)
- Remove the stub response block above it

**`src/app/api/webhooks/stripe/route.ts`**
- Uncomment the Stripe webhook verification block
- Implement `handleCompletedCheckout()` — at minimum: send confirmation email to customer and alert email to the team

**`src/components/ExplainLetterForm.tsx`** (and the other two forms)
- Currently posts to `/api/submit` (email only)
- Change to: post to `/api/submit` first (captures the intake), then call `/api/checkout` to get the Stripe URL, then `window.location.href = checkoutUrl`
- The success_url in checkout is already set to `/payment-success`

### 3f. Test with Stripe test mode
Before going live:
1. Use `sk_test_xxxx` key and test Price IDs
2. Stripe test card: `4242 4242 4242 4242`, any future date, any CVC
3. Test a full flow end-to-end
4. Check that webhook fires and emails send
5. Swap to live keys when ready

---

## Architecture Notes for Jim

### Current payment flow (live now, manual)
```
User fills form
  → POST /api/submit
  → Email sent to hello@dafigaro.com with all fields + attachment
  → Confirmation email sent to user
  → Team reviews → sends Stripe payment link manually from dashboard
  → User pays → team does the work
```

### Target payment flow (after Stripe activation)
```
User fills form
  → POST /api/submit (captures intake, sends email to team)
  → POST /api/checkout (creates Stripe Checkout Session)
  → User redirected to Stripe-hosted payment page
  → User pays → Stripe fires webhook to /api/webhooks/stripe
  → handleCompletedCheckout() sends "paid, work beginning" emails
  → Team does the work
```

### Variable-price services (Codice Fiscale)
The codice fiscale service is "from €149" — price varies by complexity. Two options:
1. **Keep it manual**: Don't wire codice fiscale to automated Stripe checkout. Keep the email-first flow and send a custom payment link after assessment. Simplest.
2. **Use Stripe payment links**: Create custom-amount payment links per case from the Stripe dashboard. Send to customer in the response email.

Option 1 is recommended for launch.

---

## Codebase Map

```
src/
├── app/
│   ├── page.tsx                          Homepage
│   ├── explain-this-letter/page.tsx      Landing page
│   ├── we-call-for-you/page.tsx          Landing page
│   ├── codice-fiscale-help/page.tsx      Landing page
│   ├── payment-success/page.tsx          Post-payment confirmation
│   └── api/
│       ├── submit/route.ts               Form intake → Resend email
│       ├── checkout/route.ts             Stripe Checkout Session (STUBBED)
│       └── webhooks/stripe/route.ts      Stripe webhook handler (STUBBED)
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ExplainLetterForm.tsx             File upload + submit
│   ├── CallForYouForm.tsx                Call request form
│   └── CodiceFiscaleForm.tsx             Codice fiscale intake form
└── app/globals.css                       All styles
```

---

## Checklist: Launch Readiness

### Must-have before going live
- [ ] `RESEND_API_KEY` set in Vercel
- [ ] `NOTIFY_EMAIL` set to real inbox
- [ ] `FROM_EMAIL` set and domain verified in Resend
- [ ] Test a form submission end-to-end (fill form → check email arrives)
- [ ] Custom domain connected in Vercel (`dafigaro.com`)

### Before activating Stripe
- [ ] Stripe account verified (can take 1–2 business days)
- [ ] Products and prices created in Stripe
- [ ] All Stripe env vars set in Vercel
- [ ] Webhook endpoint registered in Stripe
- [ ] Tested with test card in test mode
- [ ] `handleCompletedCheckout()` implemented in webhook handler
- [ ] Swapped to live Stripe keys

### Nice to have
- [ ] Error monitoring (Vercel has basic logs; Sentry is ~1 hour to add)
- [ ] Analytics (Vercel Analytics is free and takes 2 lines)
- [ ] Notion or Linear integration in webhook for task creation

---

## Quick Commands

```bash
# Install Stripe when ready
npm install stripe

# Run locally
npm run dev

# Check TypeScript
npx tsc --noEmit

# Deploy manually (Vercel auto-deploys on push to main)
git push origin main
```

---

## Questions?

Code questions → Bryan or open a GitHub issue on the repo.
Stripe questions → stripe.com/docs or support.
Resend questions → resend.com/docs.
