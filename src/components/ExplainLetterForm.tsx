'use client'

import { useState, useRef, DragEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'redirecting' | 'error'

export default function ExplainLetterForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [dragging, setDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) setFile(dropped)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const name    = (form.elements.namedItem('name')    as HTMLInputElement).value
    const email   = (form.elements.namedItem('email')   as HTMLInputElement).value
    const context = (form.elements.namedItem('context') as HTMLTextAreaElement).value

    // Step 1: Send form data + file to team via email (fire and forget — don't block on this)
    const formData = new FormData(form)
    formData.set('serviceType', 'explain-letter')
    if (file) formData.set('file', file)
    fetch('/api/submit', { method: 'POST', body: formData }).catch(console.error)

    // Step 2: Create PaymentIntent and redirect to branded /pay page
    try {
      setState('redirecting')
      const res = await fetch('/api/payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType:   'explain-letter',
          customerName:  name,
          customerEmail: email,
          description:   context,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Payment setup failed')
      if (data.clientSecret) {
        sessionStorage.setItem('pi_secret_explain-letter', data.clientSecret)
        window.location.href = '/pay?service=explain-letter'
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
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" placeholder="jane@example.com" required />
        </div>
      </div>

      <div className="form-field">
        <label>Upload your letter <span className="field-note">PDF, JPG, PNG or HEIC · max 10MB</span></label>
        <div
          className={`drop-zone ${dragging ? 'dragging' : ''} ${file ? 'has-file' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.heic,.webp"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          {file ? (
            <div className="file-selected">
              <span className="file-icon">📄</span>
              <div>
                <div className="file-name">{file.name}</div>
                <div className="file-size">{(file.size / 1024).toFixed(0)} KB · <button type="button" onClick={(e) => { e.stopPropagation(); setFile(null) }} className="remove-file">Remove</button></div>
              </div>
            </div>
          ) : (
            <div className="drop-prompt">
              <div className="drop-icon">⬆</div>
              <div className="drop-text">Drop your letter here, or <span className="drop-link">browse</span></div>
              <div className="drop-sub">Photos of letters are fine</div>
            </div>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="context">Context <span className="field-note">optional but helpful</span></label>
        <textarea
          id="context"
          name="context"
          rows={3}
          placeholder="Who sent this? When did it arrive? Have you received similar letters before? Anything else we should know?"
        />
      </div>

      <div className="form-field form-field-check">
        <label className="checkbox-label">
          <input type="checkbox" name="urgent" value="yes" />
          <span>This is urgent — I have a deadline or this needs fast attention</span>
        </label>
      </div>

      {state === 'error' && (
        <div className="form-error">{errorMsg}</div>
      )}

      <button type="submit" className="btn-primary form-submit" disabled={busy}>
        {state === 'submitting'  ? 'Preparing…'          :
         state === 'redirecting' ? 'Redirecting to payment…' :
         'Continue to Payment → €29'}
      </button>
      <p className="form-note">Secure payment via Stripe. Work begins as soon as payment is confirmed.</p>
    </form>
  )
}
