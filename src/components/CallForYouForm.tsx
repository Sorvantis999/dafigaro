'use client'

import { useState } from 'react'

type FormState = 'idle' | 'uploading' | 'success' | 'error'

export default function CallForYouForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('uploading')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('serviceType', 'call-for-you')

    try {
      const res = await fetch('/api/submit', { method: 'POST', body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Unknown error')
      setState('success')
    } catch (err: unknown) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (state === 'success') {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h3>Call request received.</h3>
        <p>We&apos;ll review your request and make the call within 24–48 business hours. Check your inbox for a confirmation.</p>
      </div>
    )
  }

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
        <label htmlFor="referenceNumber">Your account or reference number <span className="field-note">if you have one</span></label>
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

      <button type="submit" className="btn-primary form-submit" disabled={state === 'uploading'}>
        {state === 'uploading' ? 'Sending…' : 'Submit Call Request → €49'}
      </button>
      <p className="form-note">You won&apos;t be charged until we confirm we can make the call. We&apos;ll send a payment link with our first response.</p>
    </form>
  )
}
