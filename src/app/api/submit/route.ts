import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.NOTIFY_EMAIL || 'hello@dafigaro.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'submissions@dafigaro.com'

// Max file size: 10MB
const MAX_FILE_BYTES = 10 * 1024 * 1024

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const formData = await req.formData()
    const serviceType = formData.get('serviceType') as string

    // --- Common fields ---
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    if (!name || !email || !serviceType) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    let subject = ''
    let htmlBody = ''
    const attachments: Array<{ filename: string; content: Buffer }> = []

    // ── EXPLAIN THIS LETTER ──────────────────────────────────
    if (serviceType === 'explain-letter') {
      const context = formData.get('context') as string
      const urgent = formData.get('urgent') as string
      const file = formData.get('file') as File | null

      if (!file || file.size === 0) {
        return NextResponse.json({ error: 'Please attach your letter.' }, { status: 400 })
      }

      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 })
      }

      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/heic', 'image/webp']
      if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|jpg|jpeg|png|heic|webp)$/i)) {
        return NextResponse.json({ error: 'Please upload a PDF or image file (JPG, PNG, HEIC, WebP).' }, { status: 400 })
      }

      const fileBuffer = Buffer.from(await file.arrayBuffer())
      attachments.push({ filename: file.name, content: fileBuffer })

      subject = `[Letter Explanation] New request from ${name}`
      htmlBody = `
        <h2 style="color:#D87A4A;font-family:Georgia,serif;">New Letter Explanation Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;width:160px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${name}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Urgent</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${urgent === 'yes' ? '⚠️ YES — needs fast response' : 'No'}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Context</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${context ? context.replace(/\n/g, '<br>') : '<em>None provided</em>'}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">File</td><td style="padding:8px 12px;">${file.name} (${(file.size / 1024).toFixed(0)} KB) — attached below</td></tr>
        </table>
        <p style="margin-top:24px;font-family:Arial,sans-serif;font-size:12px;color:#7A7A7A;">Submitted via DaFigaro.com · Service: Explain This Letter · €29</p>
      `
    }

    // ── WE CALL FOR YOU ──────────────────────────────────────
    else if (serviceType === 'call-for-you') {
      const phoneNumber = formData.get('phoneNumber') as string
      const officeName = formData.get('officeName') as string
      const goal = formData.get('goal') as string
      const referenceNumber = formData.get('referenceNumber') as string
      const callbackEmail = formData.get('callbackEmail') as string

      if (!phoneNumber || !goal) {
        return NextResponse.json({ error: 'Please provide the phone number and what you need.' }, { status: 400 })
      }

      subject = `[Call Request] ${officeName || phoneNumber} — from ${name}`
      htmlBody = `
        <h2 style="color:#D87A4A;font-family:Georgia,serif;">New Call Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;width:180px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${name}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Phone to Call</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;"><strong>${phoneNumber}</strong></td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Office / Company</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${officeName || '<em>Not specified</em>'}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Reference / Account #</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${referenceNumber || '<em>None</em>'}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">What to accomplish</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${goal.replace(/\n/g, '<br>')}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Preferred callback email</td><td style="padding:8px 12px;">${callbackEmail || email}</td></tr>
        </table>
        <p style="margin-top:24px;font-family:Arial,sans-serif;font-size:12px;color:#7A7A7A;">Submitted via DaFigaro.com · Service: We Call for You · €49</p>
      `
    }

    // ── CODICE FISCALE ───────────────────────────────────────
    else if (serviceType === 'codice-fiscale') {
      const location = formData.get('location') as string
      const nationality = formData.get('nationality') as string
      const visaStatus = formData.get('visaStatus') as string
      const situation = formData.get('situation') as string
      const file = formData.get('file') as File | null

      if (!situation) {
        return NextResponse.json({ error: 'Please describe your situation.' }, { status: 400 })
      }

      if (file && file.size > 0) {
        if (file.size > MAX_FILE_BYTES) {
          return NextResponse.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 })
        }
        const fileBuffer = Buffer.from(await file.arrayBuffer())
        attachments.push({ filename: file.name, content: fileBuffer })
      }

      subject = `[Codice Fiscale] New request from ${name} (${location})`
      htmlBody = `
        <h2 style="color:#D87A4A;font-family:Georgia,serif;">New Codice Fiscale Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;width:180px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${name}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Currently in Italy?</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${location === 'italy' ? '✅ Yes, in Italy' : '🌍 Outside Italy'}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Nationality</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${nationality || '<em>Not specified</em>'}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Visa / Status</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${visaStatus || '<em>Not specified</em>'}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Situation</td><td style="padding:8px 12px;border-bottom:1px solid #e8e0d8;">${situation.replace(/\n/g, '<br>')}</td></tr>
          ${file && file.size > 0 ? `<tr><td style="padding:8px 12px;background:#f5f0eb;font-weight:bold;">Document</td><td style="padding:8px 12px;">${file.name} — attached</td></tr>` : ''}
        </table>
        <p style="margin-top:24px;font-family:Arial,sans-serif;font-size:12px;color:#7A7A7A;">Submitted via DaFigaro.com · Service: Codice Fiscale Help · from €149</p>
      `
    } else {
      return NextResponse.json({ error: 'Unknown service type.' }, { status: 400 })
    }

    // --- Send email via Resend ---
    const { error } = await resend.emails.send({
      from: `DaFigaro Submissions <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html: htmlBody,
      attachments: attachments.map(a => ({
        filename: a.filename,
        content: a.content,
      })),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send. Please try again or email us directly.' }, { status: 500 })
    }

    // Send confirmation to the user
    await resend.emails.send({
      from: `DaFigaro <${FROM_EMAIL}>`,
      to: [email],
      subject: 'We received your request — DaFigaro',
      html: `
        <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#1b1b1b;">
          <h2 style="color:#D87A4A;margin-bottom:8px;">Got it, ${name.split(' ')[0]}.</h2>
          <p style="font-size:16px;line-height:1.7;color:#444;">We received your request and a real person on our team will review it within <strong>24–48 business hours</strong>.</p>
          <p style="font-size:16px;line-height:1.7;color:#444;">We'll reply to this email address with either a complete response or any follow-up questions we need answered.</p>
          <p style="font-size:14px;color:#7A7A7A;margin-top:24px;">If you have anything to add, just reply to this email.</p>
          <hr style="border:none;border-top:1px solid #e8e0d8;margin:28px 0;">
          <p style="font-size:13px;color:#9a9a9a;">DaFigaro · Real help for foreigners in Italy · <a href="https://dafigaro.com" style="color:#D87A4A;">dafigaro.com</a></p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Submit error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
