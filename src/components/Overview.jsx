import './Overview.css'

const highlights = [
  { label: 'Pan India Operations', desc: 'Nationwide pharmaceutical distribution network.' },
  { label: 'Regulatory Compliance', desc: 'Full adherence to all pharmaceutical regulations.' },
  { label: 'Generic Medicine Distribution', desc: 'Wholesale supply of quality generic products.' },
  { label: 'Narcotic Medicine Distribution', desc: 'Compliant distribution of narcotic pharmaceuticals.' },
  { label: 'Supply Chain Excellence', desc: 'End-to-end logistics coordination and management.' },
  { label: 'Long-term Partnerships', desc: 'Trusted relationships with healthcare stakeholders.' },
]

export default function Overview() {
  return (
    <section id="overview" className="overview-section">
      <div className="container overview-inner">
        <div className="overview-left">
          <span className="overline">About Pharmanexia</span>
          <h2 className="heading-lg">A Trusted Name in Pharmaceutical Distribution</h2>
          <div className="rule" />
          <p className="body-lg" style={{ marginBottom: '20px' }}>
            Pharmanexia Limited is a professionally managed pharmaceutical sales and
            distribution organization committed to delivering reliable, efficient, and
            compliant healthcare supply solutions across India.
          </p>
          <p className="body-md" style={{ marginBottom: '36px' }}>
            With a strong focus on wholesale pharmaceutical distribution, we serve a
            wide network of distributors, healthcare institutions, pharmacies, hospitals,
            and business partners nationwide. Our organization specializes in the
            distribution of both Generic and Narcotic pharmaceutical products, ensuring
            essential medicines are supplied through an organized and dependable network.
          </p>
          <div className="overview-meta">
            <div className="meta-item">
              <span className="meta-label">GSTIN</span>
              <span className="meta-val">24AAPCP9151P1ZL</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Constitution</span>
              <span className="meta-val">Private Limited Company</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Registered Office</span>
              <span className="meta-val">Ahmedabad, Gujarat</span>
            </div>
          </div>
        </div>
        <div className="overview-right">
          <div className="overview-card">
            <div className="overview-logo-wrap">
              <img src="/logo.png" alt="Pharmanexia Limited" />
            </div>
            <div className="overview-highlights">
              {highlights.map(h => (
                <div key={h.label} className="highlight-row">
                  <div className="highlight-check">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>{h.label}</strong>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
