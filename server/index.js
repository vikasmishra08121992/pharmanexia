import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import 'dotenv/config'

const app  = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// ── SMTP transporter ──────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT),
  secure: true,           // SSL on port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
})

// ── POST /api/contact ─────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, company, email, phone, inquiryType, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#0D3B8E,#061540);padding:28px 32px;">
        <img src="https://pharmanexia.com/logo.png" alt="Pharmanexia" style="height:44px;margin-bottom:12px;" />
        <h2 style="margin:0;color:#fff;font-size:20px;">New Business Inquiry</h2>
      </div>
      <div style="padding:28px 32px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:10px 0;color:#6b7280;width:140px;font-weight:600;">Full Name</td>
            <td style="padding:10px 0;color:#111827;font-weight:600;">${name}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:10px 0;color:#6b7280;font-weight:600;">Company</td>
            <td style="padding:10px 0;color:#111827;">${company || '—'}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:10px 0;color:#6b7280;font-weight:600;">Email</td>
            <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#29ABE2;">${email}</a></td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:10px 0;color:#6b7280;font-weight:600;">Phone</td>
            <td style="padding:10px 0;color:#111827;">${phone || '—'}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:10px 0;color:#6b7280;font-weight:600;">Inquiry Type</td>
            <td style="padding:10px 0;color:#111827;">${inquiryType || '—'}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6b7280;font-weight:600;vertical-align:top;">Message</td>
            <td style="padding:10px 0;color:#111827;line-height:1.6;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>
      </div>
      <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#9ca3af;">
          Sent from pharmanexia.com contact form &nbsp;·&nbsp; Reply directly to <a href="mailto:${email}" style="color:#29ABE2;">${email}</a>
        </p>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from:    `"Pharmanexia Website" <${process.env.SMTP_USER}>`,
      to:      process.env.MAIL_TO,
      replyTo: email,
      subject: `New Inquiry: ${inquiryType || 'General'} — ${name}`,
      html,
    })

    // Auto-reply to the sender
    await transporter.sendMail({
      from:    `"Pharmanexia Limited" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: 'We received your inquiry — Pharmanexia Limited',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#0D3B8E,#061540);padding:28px 32px;">
            <h2 style="margin:0;color:#fff;font-size:20px;">Thank you, ${name}!</h2>
          </div>
          <div style="padding:28px 32px;background:#fff;">
            <p style="color:#374151;line-height:1.7;margin:0 0 16px;">
              We have received your inquiry and will get back to you within <strong>24 business hours</strong>.
            </p>
            <p style="color:#374151;line-height:1.7;margin:0 0 24px;">
              In the meantime, feel free to reach us directly at
              <a href="mailto:info@pharmanexia.com" style="color:#29ABE2;">info@pharmanexia.com</a>.
            </p>
            <p style="color:#6b7280;font-size:13px;margin:0;">— The Pharmanexia Team</p>
          </div>
        </div>
      `,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    res.status(500).json({ error: 'Failed to send. Please try again.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`✓ API server listening on http://localhost:${PORT}`)
})
