import { useState } from 'react'

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
)
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
)
const PinIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const CONTACT_ITEMS = [
  { icon: <GlobeIcon />, label: 'Website',            value: 'pharmanexia.com',        href: 'https://pharmanexia.com' },
  { icon: <MailIcon />,  label: 'General Inquiries',  value: 'info@pharmanexia.com',   href: 'mailto:info@pharmanexia.com' },
  { icon: <MailIcon />,  label: 'Business Development', value: 'contact@pharmanexia.com', href: 'mailto:contact@pharmanexia.com' },
  { icon: <PinIcon />,   label: 'Registered Office',  value: '171, Bileswar Estate, Odhav Kathwada Road, Near Octroi Naka, Ahmedabad – 382415, Gujarat', href: null },
]

const INITIAL = { name: '', company: '', email: '', phone: '', inquiryType: '', message: '' }

export default function Contact() {
  const [form,      setForm]      = useState(INITIAL)
  const [status,    setStatus]    = useState('idle') // idle | loading | success | error
  const [errorMsg,  setErrorMsg]  = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-sky/30 focus:border-brand-sky transition-all"

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* ── Left: Info ── */}
          <div>
            <img src="/logo.png" alt="Pharmanexia Limited" className="h-12 w-auto mb-8" />

            <span className="inline-block text-[11px] font-bold tracking-[2.5px] uppercase text-brand-sky bg-brand-sky-light px-4 py-1.5 rounded-full mb-5">
              Get In Touch
            </span>

            <h2 className="font-display font-bold text-brand-navy leading-[1.18] mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              Connect With Us
            </h2>
            <div className="w-12 h-1 bg-brand-sky rounded mb-6" />

            <p className="text-gray-500 text-[16px] leading-relaxed mb-10">
              For business inquiries, distribution partnerships, or supply requirements,
              our team is ready to assist you. We respond within 24 business hours.
            </p>

            <div className="space-y-4">
              {CONTACT_ITEMS.map(item => (
                <div key={item.label}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-brand-sky/25 hover:bg-brand-sky-light/40 transition-all duration-200 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-sky-light text-brand-sky flex items-center justify-center group-hover:bg-brand-sky group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-gray-400 mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        className="text-[14px] font-medium text-brand-navy hover:text-brand-sky transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <address className="text-[14px] text-gray-600 not-italic leading-relaxed">{item.value}</address>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="bg-gray-50/80 border border-gray-100 rounded-3xl p-8 lg:p-10">

            {/* Success state */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-brand-green-light flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Inquiry Sent!</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. Our team will review your inquiry and respond
                  within 24 hours. A confirmation has been sent to your email.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-brand-sky hover:text-brand-sky-hover font-medium transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-brand-navy mb-1">Send a Business Inquiry</h3>
                <p className="text-sm text-gray-500 mb-8">Fill in the form and we'll respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[12px] font-semibold text-gray-600 mb-1.5 tracking-wide">
                        Full Name <span className="text-brand-sky">*</span>
                      </label>
                      <input id="name" type="text" required placeholder="Your full name"
                        value={form.name} onChange={set('name')} className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[12px] font-semibold text-gray-600 mb-1.5 tracking-wide">
                        Company Name
                      </label>
                      <input id="company" type="text" placeholder="Your company"
                        value={form.company} onChange={set('company')} className={inputCls} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[12px] font-semibold text-gray-600 mb-1.5 tracking-wide">
                        Email Address <span className="text-brand-sky">*</span>
                      </label>
                      <input id="email" type="email" required placeholder="your@email.com"
                        value={form.email} onChange={set('email')} className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[12px] font-semibold text-gray-600 mb-1.5 tracking-wide">
                        Phone Number
                      </label>
                      <input id="phone" type="tel" placeholder="+91 00000 00000"
                        value={form.phone} onChange={set('phone')} className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-[12px] font-semibold text-gray-600 mb-1.5 tracking-wide">
                      Inquiry Type
                    </label>
                    <select id="inquiryType" value={form.inquiryType} onChange={set('inquiryType')}
                      className={`${inputCls} appearance-none cursor-pointer`}>
                      <option value="">Select inquiry type...</option>
                      <option>Distribution Partnership</option>
                      <option>Wholesale Inquiry</option>
                      <option>B2B Distribution</option>
                      <option>General Information</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[12px] font-semibold text-gray-600 mb-1.5 tracking-wide">
                      Message <span className="text-brand-sky">*</span>
                    </label>
                    <textarea id="message" rows={4} required
                      placeholder="Describe your pharmaceutical supply requirements..."
                      value={form.message} onChange={set('message')}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      {errorMsg}
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-sky hover:bg-brand-sky-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[14px] rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-sky/25 hover:-translate-y-0.5">
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
