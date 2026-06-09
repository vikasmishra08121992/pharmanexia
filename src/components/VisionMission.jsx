import './VisionMission.css'

const values = [
  'Integrity & Transparency',
  'Professional Excellence',
  'Regulatory Compliance',
  'Customer Commitment',
  'Reliability & Trust',
  'Continuous Improvement',
]

const VisionIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="8" stroke="rgba(255,255,255,0.9)" strokeWidth="2.2"/>
    <path d="M6 24c4-9 10-14 18-14s14 5 18 14c-4 9-10 14-18 14S10 33 6 24z" stroke="rgba(255,255,255,0.9)" strokeWidth="2.2" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="3" fill="rgba(255,255,255,0.9)"/>
  </svg>
)

const MissionIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" stroke="rgba(255,255,255,0.9)" strokeWidth="2.2"/>
    <circle cx="24" cy="24" r="10" stroke="rgba(255,255,255,0.9)" strokeWidth="2.2"/>
    <circle cx="24" cy="24" r="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.2"/>
    <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

export default function VisionMission() {
  return (
    <section id="vision" className="vm-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Foundation</span>
          <h2 className="section-title">Vision &amp; Mission</h2>
          <p className="section-sub">
            Guided by strong values and a clear purpose, Pharmanexia is committed to
            building a more reliable and accessible pharmaceutical supply network across India.
          </p>
        </div>

        <div className="vm-grid">
          <div className="vm-card vm-card--blue">
            <div className="vm-card-header">
              <div className="vm-icon"><VisionIcon /></div>
              <span className="vm-label">Our Vision</span>
            </div>
            <blockquote className="vm-text">
              To be recognized as a leading pharmaceutical sales and distribution
              organization in India — known for reliability, regulatory compliance,
              operational excellence, and the trust of our partners and customers.
            </blockquote>
            <div className="vm-card-deco" aria-hidden="true" />
          </div>

          <div className="vm-card vm-card--green">
            <div className="vm-card-header">
              <div className="vm-icon"><MissionIcon /></div>
              <span className="vm-label">Our Mission</span>
            </div>
            <blockquote className="vm-text">
              To provide efficient, dependable, and compliant pharmaceutical distribution
              services across India — ensuring essential medicines reach healthcare
              providers and patients through an organized, transparent supply network.
            </blockquote>
            <div className="vm-card-deco" aria-hidden="true" />
          </div>
        </div>

        <div className="vm-values">
          <p className="vm-values-title">Our Core Values</p>
          <div className="vm-values-list">
            {values.map(v => (
              <div key={v} className="vm-value-chip">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3 6-6" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
