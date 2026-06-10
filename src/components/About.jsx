import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">
        <div className="about-visual">
          <div className="about-logo-card">
            <img src="/logo.png" alt="Pharmanexia Limited" />
          </div>
          <div className="about-info-cards">
            <div className="about-info-card">
              <span className="info-label">GSTIN</span>
              <span className="info-value">24AAPCP9151P1ZL</span>
            </div>
            <div className="about-info-card">
              <span className="info-label">Constitution</span>
              <span className="info-value">Limited Company</span>
            </div>
            <div className="about-info-card">
              <span className="info-label">Registered in</span>
              <span className="info-value">Gujarat, India</span>
            </div>
          </div>
        </div>
        <div className="about-text">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">Trusted Pharmaceutical Distribution Partner</h2>
          <p className="section-sub">
            Pharmanexia is a professionally managed pharmaceutical sales and distribution
            organization committed to delivering reliable, efficient, and compliant healthcare
            supply solutions across India.
          </p>
          <p className="about-detail">
            With a strong focus on wholesale pharmaceutical distribution, we serve a wide network
            of distributors, healthcare institutions, pharmacies, hospitals, and business partners
            nationwide. Our expertise, industry knowledge, and customer-focused approach allow us
            to meet the diverse requirements of our clients while maintaining the highest standards
            of professionalism and integrity.
          </p>
          <div className="about-address">
            <div className="address-icon">📍</div>
            <div>
              <strong>Registered Office</strong>
              <p>171, Bileswar Estate, Odhav Kathwada Road,<br />Near Octroi Naka, Ahmedabad – 382415, Gujarat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
