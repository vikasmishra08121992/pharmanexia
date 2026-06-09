import './WhyUs.css'

const reasons = [
  {
    title: 'Pan India Reach',
    desc: 'Strong distribution capabilities spanning every state and union territory across India.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 20h26M20 7v26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13 10.5c1.5 2.8 2.5 5.8 2.5 9.5S14.5 26.7 13 29.5M27 10.5c-1.5 2.8-2.5 5.8-2.5 9.5s1 7.2 2.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Proven Expertise',
    desc: 'Specialized industry knowledge in both Generic and Narcotic pharmaceutical distribution.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="15" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 21.5l-4 10.5 10-3.5 10 3.5-4-10.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M17 15l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Professional Team',
    desc: 'Experienced and qualified professionals ensuring the highest service standards.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="13" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 33c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="17" r="3.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 30c0-4 2.5-6.5 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="31" cy="17" r="3.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M37 30c0-4-2.5-6.5-6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Efficient Supply Chain',
    desc: 'Streamlined logistics and supply chain processes for reliable, on-time deliveries.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="18" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M25 22h5l6 6v4H25V22z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="10" cy="34" r="2.5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="29" cy="34" r="2.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 18V13a4 4 0 014-4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 9h6l3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Compliance First',
    desc: 'Full adherence to regulatory guidelines and pharmaceutical quality standards at every step.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6l12 4.5v9c0 7.5-5.5 13.5-12 16-6.5-2.5-12-8.5-12-16v-9L20 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14.5 20.5l3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Customer Commitment',
    desc: 'Customer-centric approach with dedicated support and long-term after-service care.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 33S7 24.5 7 15.5a7.5 7.5 0 0113-5.1A7.5 7.5 0 0133 15.5C33 24.5 20 33 20 33z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 15a5 5 0 014-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Reliability & Trust',
    desc: 'Long-term relationships built on transparency, integrity, and consistent dependability.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 25.5l5 5 5.5-3 4.5 2 5.5-3L35 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 25.5l2.5-5.5 4.5-.5 3-6h4l5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 27.5l-4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Timely Delivery',
    desc: 'Consistent on-time distribution ensuring uninterrupted pharmaceutical supply across India.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="21" r="13" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 12v9l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="whyus-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">The Pharmanexia Advantage</h2>
          <p className="section-sub">
            We combine industry expertise, regulatory compliance, and a customer-first
            mindset to deliver pharmaceutical distribution you can depend on.
          </p>
        </div>
        <div className="whyus-grid">
          {reasons.map(r => (
            <div key={r.title} className="whyus-card">
              <div className="whyus-icon-wrap">{r.icon}</div>
              <h3 className="whyus-card-title">{r.title}</h3>
              <p className="whyus-card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
