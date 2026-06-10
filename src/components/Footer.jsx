const QUICK_LINKS = [
  { label: 'About Us',           href: '#overview'   },
  { label: 'Our Services',       href: '#services'   },
  { label: 'Why Choose Us',      href: '#why-us'     },
  { label: 'Industries We Serve',href: '#industries' },
  { label: 'Vision & Mission',   href: '#vision'     },
  { label: 'Contact Us',         href: '#contact'    },
]

const SERVICES = [
  'Pharmaceutical Sales & Distribution',
  'Generic Medicine Distribution',
  'Controlled Medicine Distribution',
  'Institutional Supply Services',
  'Supply Chain Management',
  'B2B Distribution Solutions',
]

const MailIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
)
const GlobeIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
)
const PinIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">

      {/* ── CTA Strip ── */}
      <div className="border-b border-white/[0.08] py-14 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-32 bg-brand-sky/8 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
            Ready to Build a Reliable Supply Partnership?
          </h2>
          <p className="text-white/55 text-[16px] mb-8 max-w-xl mx-auto leading-relaxed">
            Partner with Pharmanexia for dependable pharmaceutical distribution across India —
            backed by compliance, expertise, and a commitment to excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-[14px] bg-brand-sky hover:bg-brand-sky-hover text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-sky/30 hover:-translate-y-0.5"
            >
              Partner With Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:info@pharmanexia.com"
              className="inline-flex items-center px-7 py-[14px] border border-white/25 hover:border-white/50 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-white/8"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="py-16 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <a href="#home" className="inline-block mb-6">
                <img src="/logo.png" alt="Pharmanexia Limited" className="h-10 w-auto brightness-0 invert opacity-90" />
              </a>
              <p className="text-[13.5px] text-white/45 leading-relaxed mb-6">
                Trusted pharmaceutical sales and distribution across India — delivering
                compliance, reliability, and excellence at every step of the supply chain.
              </p>
              <div className="space-y-2">
                {[
                  { label: 'GSTIN', val: '24AAPCP9151P1ZL' },
                  { label: 'Type', val: 'Limited Company' },
                ].map(m => (
                  <div key={m.label} className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[1.5px] font-bold text-white/25">{m.label}</span>
                    <span className="text-[12px] text-white/50">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/35 mb-5">Company</h4>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13.5px] text-white/55 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-sky transition-all duration-200" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/35 mb-5">Services</h4>
              <ul className="space-y-2.5">
                {SERVICES.map(s => (
                  <li key={s}>
                    <span className="text-[13px] text-white/45 leading-snug flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-sky/50 flex-shrink-0 mt-2" />
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/35 mb-5">Get In Touch</h4>
              <div className="space-y-4">
                <a href="mailto:info@pharmanexia.com" className="flex items-start gap-3 text-[13px] text-white/55 hover:text-white transition-colors group">
                  <span className="text-brand-sky/70 group-hover:text-brand-sky transition-colors"><MailIcon /></span>
                  info@pharmanexia.com
                </a>
                <a href="mailto:contact@pharmanexia.com" className="flex items-start gap-3 text-[13px] text-white/55 hover:text-white transition-colors group">
                  <span className="text-brand-sky/70 group-hover:text-brand-sky transition-colors"><MailIcon /></span>
                  contact@pharmanexia.com
                </a>
                <a href="https://pharmanexia.com" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-[13px] text-white/55 hover:text-white transition-colors group">
                  <span className="text-brand-sky/70 group-hover:text-brand-sky transition-colors"><GlobeIcon /></span>
                  pharmanexia.com
                </a>
                <address className="flex items-start gap-3 text-[13px] text-white/45 not-italic leading-relaxed">
                  <span className="text-brand-sky/70"><PinIcon /></span>
                  171, Bileswar Estate,<br />Odhav Kathwada Road,<br />Ahmedabad – 382415, Gujarat
                </address>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © {new Date().getFullYear()} Pharmanexia Limited. All rights reserved.
          </p>
          <p className="text-[12px] text-white/25">
            GSTIN: 24AAPCP9151P1ZL &nbsp;·&nbsp; Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  )
}
