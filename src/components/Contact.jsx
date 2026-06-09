import './Contact.css'

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">

        <div className="contact-info">
          <img src="/logo.png" alt="Pharmanexia Limited" className="contact-logo" />
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Connect With Us</h2>
          <p className="section-sub">
            For business inquiries, distribution partnerships, or supply requirements,
            our team is ready to assist you.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon"><GlobeIcon /></div>
              <div>
                <strong>Website</strong>
                <a href="https://pharmanexia.com" target="_blank" rel="noreferrer">
                  pharmanexia.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><MailIcon /></div>
              <div>
                <strong>General Inquiries</strong>
                <a href="mailto:info@pharmanexia.com">info@pharmanexia.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><MailIcon /></div>
              <div>
                <strong>Business Development</strong>
                <a href="mailto:contact@pharmanexia.com">contact@pharmanexia.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><PinIcon /></div>
              <div>
                <strong>Registered Office</strong>
                <span>
                  171, Bileswar Estate, Odhav Kathwada Road,<br />
                  Near Octroi Naka, Ahmedabad – 382415, Gujarat
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send a Business Inquiry</h3>
          <form onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Company name" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="+91 00000 00000" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Inquiry Type</label>
              <input id="subject" type="text" placeholder="e.g. Distribution Partnership, Bulk Order" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Describe your pharmaceutical supply requirements..." />
            </div>
            <button type="submit" className="btn-primary contact-submit">
              Submit Inquiry →
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
