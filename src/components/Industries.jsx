import './Industries.css'

const industries = [
  {
    title: 'Hospitals',
    desc: 'Supplying essential medicines and pharmaceuticals to multi-specialty and government hospitals across India.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M8 22h32" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M20 42V30h8v12" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M8 14L24 6l16 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 19h6M24 16v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Pharmacies',
    desc: 'Wholesale pharmaceutical supply to retail pharmacies and medical stores with consistent availability.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M16 18v-6a8 8 0 0116 0v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M19 29h10M24 24v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Healthcare Institutions',
    desc: 'Dedicated supply services for clinics, diagnostic centres, nursing homes, and healthcare facilities.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8c-7.7 0-14 5.8-14 13 0 9.2 14 22 14 22s14-12.8 14-22c0-7.2-6.3-13-14-13z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M19 21h10M24 16v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Medical Distributors',
    desc: 'B2B partnerships with sub-distributors and stockists ensuring seamless pharmaceutical supply chains.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="20" width="26" height="16" rx="2" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M30 24h5l7 7v5H30V24z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <circle cx="12" cy="38" r="3.5" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="34" cy="38" r="3.5" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M10 20V14a4 4 0 014-4h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Wholesale Partners',
    desc: 'Long-term distribution alliances with wholesale trade partners enabling wider pharmaceutical access.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 28l5 5 6-3 5 2 6-2.5L38 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 28l3-6 5-.5 3-6h5l5 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 30l-5-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who We Serve</span>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-sub">
            We partner with organizations across the entire healthcare ecosystem — from
            frontline hospitals to wholesale trade networks — delivering reliable
            pharmaceutical supply at every level.
          </p>
        </div>
        <div className="industries-grid">
          {industries.map(ind => (
            <div key={ind.title} className="industry-card">
              <div className="industry-icon">{ind.icon}</div>
              <h3 className="industry-title">{ind.title}</h3>
              <p className="industry-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
