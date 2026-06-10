import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, company, email, phone, inquiryType, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  const transporter = nodemailer.createTransport({
    host:   'smtp.hostinger.com',
    port:   465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { rejectUnauthorized: false },
  })

  const inboundHtml = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;
                border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#0D3B8E,#061540);padding:28px 32px;">
        <h2 style="margin:0;color:#fff;font-size:20px;">New Business Inquiry</h2>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">
          From pharmanexia.com contact form
        </p>
      </div>
      <div style="padding:28px 32px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${[
            ['Full Name',    name],
            ['Company',      company      || '—'],
            ['Email',        `<a href="mailto:${email}" style="color:#29ABE2;">${email}</a>`],
            ['Phone',        phone        || '—'],
            ['Inquiry Type', inquiryType  || '—'],
          ].map(([k, v]) => `
            <tr style="border-bottom:1px solid #f0f0f0;">
              <td style="padding:10px 0;color:#6b7280;width:140px;font-weight:600;">${k}</td>
              <td style="padding:10px 0;color:#111827;">${v}</td>
            </tr>`).join('')}
          <tr>
            <td style="padding:10px 0;color:#6b7280;font-weight:600;vertical-align:top;">Message</td>
            <td style="padding:10px 0;color:#111827;line-height:1.6;">
              ${message.replace(/\n/g, '<br/>')}
            </td>
          </tr>
        </table>
      </div>
      <div style="padding:14px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#9ca3af;">
          Reply directly to <a href="mailto:${email}" style="color:#29ABE2;">${email}</a>
        </p>
      </div>
    </div>`

  const autoReplyHtml = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;
                border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#0D3B8E,#061540);padding:28px 32px;">
        <h2 style="margin:0;color:#fff;font-size:20px;">Thank you, ${name}!</h2>
      </div>
      <div style="padding:28px 32px;background:#fff;">
        <p style="color:#374151;line-height:1.7;margin:0 0 16px;">
          We have received your inquiry and will get back to you within
          <strong>24 business hours</strong>.
        </p>
        <p style="color:#374151;line-height:1.7;margin:0 0 24px;">
          In the meantime feel free to reach us at
          <a href="mailto:info@pharmanexia.com" style="color:#29ABE2;">info@pharmanexia.com</a>.
        </p>
        <p style="color:#6b7280;font-size:13px;margin:0;">— The Pharmanexia Team</p>
      </div>
    </div>`

  try {
    await transporter.sendMail({
      from:    `"Pharmanexia Website" <${process.env.SMTP_USER}>`,
      to:      process.env.SMTP_USER,          // receives at contact@pharmanexia.com
      replyTo: email,
      subject: `New Inquiry: ${inquiryType || 'General'} — ${name}`,
      html:    inboundHtml,
    })

    await transporter.sendMail({
      from:    `"Pharmanexia Limited" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: 'We received your inquiry — Pharmanexia Limited',
      html:    autoReplyHtml,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    return res.status(500).json({ error: 'Failed to send. Please try again.' })
  }
}
