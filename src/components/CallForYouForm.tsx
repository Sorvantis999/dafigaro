'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'redirecting' | 'error'

export default function CallForYouForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const name   = (form.elements.namedItem('name')  as HTMLInputElement).value
    const email  = (form.elements.namedItem('email') as HTMLInputElement).value
    const phone  = (form.elements.namedItem('phoneNumber') as HTMLInputElement).value
    const office = (form.elements.namedItem('officeName')  as HTMLInputElement).value
    const ref    = (form.elements.namedItem('referenceNumber') as HTMLInputElement).value
    const goal   = (form.elements.namedItem('goal') as HTMLTextAreaElement).value

    // Step 1: Email team with full details (fire and forget)
    const formData = new FormData(form)
    formData.set('serviceType', 'call-for-you')
    fetch('/api/submit', { method: 'POST', body: formData }).catch(console.error)

    // Step 2: Create PaymentIntent and redirect to branded /pay page
    try {
      setState('redirecting')
      const res = await fetch('/api/payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType:   'call-for-you',
          customerName:  name,
          customerEmail: email,
          phone:         `${phone}${office ? ` · ${office}` : ''}${ref ? ` · Ref: ${ref}` : ''}`,
          description:   goal,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Payment setup failed')
      if (data.clientSecret) {
        sessionStorage.setItem('pi_secret_call-for-you', data.clientSecret)
        window.location.href = '/pay?service=call-for-you'
      } else {
        throw new Error('Payment setup failed')
      }
    } catch (err: unknown) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const busy = state === 'submitting' || state === 'redirecting'

  return (
    <form className="submit-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" placeholder="Jane Smith" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" placeholder="jane@example.com" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phoneNumber">Phone number to call <span className="field-required">*</span></label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+39 06 1234 5678"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="officeName">Office or company name</label>
          <input
            type="text"
            id="officeName"
            name="officeName"
            placeholder="Enel, Questura Roma, etc."
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="referenceNumber">Account or reference number <span className="field-note">if you have one</span></label>
        <input
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          placeholder="e.g. POD number, contract ID, ticket number"
        />
      </div>

      <div className="form-field">
        <label htmlFor="goal">What do you need from this call? <span className="field-required">*</span></label>
        <textarea
          id="goal"
          name="goal"
          rows={4}
          required
          placeholder="Describe what you need them to do, confirm, fix, or tell you. The more detail, the better we can prepare."
        />
      </div>

      {state === 'error' && (
        <div className="form-error">{errorMsg}</div>
      )}

      <button type="submit" className="btn-primary form-submit" disabled={busy}>
        {state === 'submitting'  ? 'Preparing…'              :
         state === 'redirecting' ? 'Redirecting to payment…'  :
         'Continue to Payment → €49'}
      </button>
      <p className="form-note">Secure payment via Stripe. Work begins as soon as payment is confirmed.</p>
    </form>
  )
}
