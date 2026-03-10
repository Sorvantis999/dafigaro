'use client'

import { useState, useRef, DragEvent } from 'react'

type FormState = 'idle' | 'uploading' | 'success' | 'error'

export default function CodiceFiscaleForm() {
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
    setState('uploading')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('serviceType', 'codice-fiscale')
    if (file) formData.set('file', file)

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
        <h3>Request received.</h3>
        <p>We&apos;ll assess your situation and get back to you within 24–48 business hours with the right path forward and a confirmed price. Check your inbox for a confirmation.</p>
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
          <label htmlFor="nationality">Your nationality</label>
          <input type="text" id="nationality" name="nationality" placeholder="American, Canadian, etc." />
        </div>
        <div className="form-field">
          <label htmlFor="visaStatus">Visa or residency status <span className="field-note">if applicable</span></label>
          <input type="text" id="visaStatus" name="visaStatus" placeholder="Student visa, ERV, tourist, etc." />
        </div>
      </div>

      <div className="form-field">
        <label>Are you currently in Italy?</label>
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" name="location" value="italy" defaultChecked />
            <span>Yes — I&apos;m in Italy now</span>
          </label>
          <label className="radio-label">
            <input type="radio" name="location" value="outside" />
            <span>No — I&apos;m outside Italy</span>
          </label>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="situation">Describe your situation <span className="field-required">*</span></label>
        <textarea
          id="situation"
          name="situation"
          rows={4}
          required
          placeholder="What are you trying to do? What's blocking you? Have you already tried to get a codice fiscale and run into problems?"
        />
      </div>

      <div className="form-field">
        <label>Upload a document <span className="field-note">optional — passport page, visa, or any relevant doc</span></label>
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
              <span className="file-icon">📎</span>
              <div>
                <div className="file-name">{file.name}</div>
                <div className="file-size">{(file.size / 1024).toFixed(0)} KB · <button type="button" onClick={(e) => { e.stopPropagation(); setFile(null) }} className="remove-file">Remove</button></div>
              </div>
            </div>
          ) : (
            <div className="drop-prompt">
              <div className="drop-icon">⬆</div>
              <div className="drop-text">Drop a file here, or <span className="drop-link">browse</span></div>
              <div className="drop-sub">PDF or image · max 10MB · entirely optional</div>
            </div>
          )}
        </div>
      </div>

      {state === 'error' && (
        <div className="form-error">{errorMsg}</div>
      )}

      <button type="submit" className="btn-primary form-submit" disabled={state === 'uploading'}>
        {state === 'uploading' ? 'Sending…' : 'Submit Request → from €149'}
      </button>
      <p className="form-note">No payment now. We&apos;ll assess your situation and confirm the exact price before anything is charged.</p>
    </form>
  )
}
