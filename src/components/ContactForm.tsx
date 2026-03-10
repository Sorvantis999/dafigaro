'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const REGARDING_OPTIONS = [
  { value: 'bank-account',      label: 'Bank Account Help' },
  { value: 'forms-admin',       label: 'Forms & Admin' },
  { value: 'find-professional', label: 'Find a Professional' },
  { value: 'other',             label: 'Something else' },
]

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [regarding, setRegarding] = useState('other')

  useEffect(() => {
    const re = searchParams.get('re')
    if (re && REGARDING_OPTIONS.find(o => o.value === re)) {
      setRegarding(re)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('serviceType', 'contact')
    formData.set('regarding', regarding)

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
        <h3>Got it.</h3>
        <p>We&apos;ll be in touch within 24–48 business hours. Check your inbox for a confirmation.</p>
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
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" placeholder="jane@example.com" required />
        </div>
      </div>

      <div className="form-field">
        <label>What can we help with?</label>
        <div className="regarding-grid">
          {REGARDING_OPTIONS.map(opt => (
            <button
              key={opt.value}
              type="button"
              className={`regarding-btn ${regarding === opt.value ? 'active' : ''}`}
              onClick={() => setRegarding(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Tell us what you&apos;re dealing with <span className="field-note">as much detail as you can</span></label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe your situation. Where are you? What's the problem? What have you already tried? The more context, the faster we can help."
        />
      </div>

      {state === 'error' && (
        <div className="form-error">{errorMsg}</div>
      )}

      <button type="submit" className="btn-primary form-submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
      <p className="form-note">We respond within 24–48 business hours. No commitment required.</p>
    </form>
  )
}
