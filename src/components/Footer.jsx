import './Footer.css'

const quickLinks = [
  { label: 'About Us', href: '#overview' },
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Industries We Serve', href: '#industries' },
  { label: 'Vision & Mission', href: '#vision' },
  { label: 'Contact Us', href: '#contact' },
]

const services = [
  'Pharmaceutical Sales & Distribution',
  'Generic Medicine Distribution',
  'Narcotic Medicine Distribution',
  'Institutional Supply Services',
  'Supply Chain Management',
  'B2B Distribution Solutions',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img src="/logo.png" alt="Pharmanexia Limited" />
          </a>
          <p className="footer-tagline">
            Trusted pharmaceutical sales and distribution across India — delivering
            compliance, reliability, and excellence at every step of the supply chain.
          </p>
          <div className="footer-meta">
            <div className="footer-meta-row">
              <span className="footer-meta-label">GSTIN</span>
              <span className="footer-meta-val">24AAPCP9151P1ZL</span>
            </div>
            <div className="footer-meta-row">
              <span className="footer-meta-label">CIN</span>
              <span className="footer-meta-val">Private Limited Company</span>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links">
            {quickLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="footer-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            {services.map(s => (
              <li key={s}>
                <span className="footer-link footer-link--static">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Get In Touch</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              <a href="mailto:info@pharmanexia.com">info@pharmanexia.com</a>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
              <a href="https://pharmanexia.com" target="_blank" rel="noreferrer">pharmanexia.com</a>
            </div>
            <div className="footer-contact-item footer-contact-item--address">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <address>
                171, Bileswar Estate,<br />
                Odhav Kathwada Road,<br />
                Ahmedabad – 382415, Gujarat
              </address>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Pharmanexia Limited. All rights reserved.
          </p>
          <p className="footer-legal">
            GSTIN: 24AAPCP9151P1ZL &nbsp;·&nbsp; Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  )
}
