import './Services.css'

const services = [
  {
    num: '01',
    title: 'Pharmaceutical Sales & Distribution',
    desc: 'Comprehensive pharmaceutical sales and distribution operations covering all major markets and territories across India with a focus on efficiency and reliability.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 16V12a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="25" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Generic Medicine Distribution',
    desc: 'Wholesale distribution of high-quality generic pharmaceutical products ensuring availability of affordable and effective medicines through an organized supply network.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20h20M20 10v20M26 14l-12 12M14 14l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Narcotic Medicine Distribution',
    desc: 'Fully compliant wholesale distribution of narcotic pharmaceutical products with strict adherence to regulatory guidelines and controlled substance protocols.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 14a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 13l2.8 2.8M24.2 24.2L27 27M13 27l2.8-2.8M24.2 15.8L27 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Institutional Supply Services',
    desc: 'Dedicated pharmaceutical supply services for hospitals, healthcare institutions, government facilities, and pharmacies with consistent and timely delivery.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 34V26a2 2 0 012-2h8a2 2 0 012 2v8" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 14l12-8 12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 19h6M20 16v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Supply Chain Management',
    desc: 'End-to-end supply chain management and logistics coordination ensuring seamless pharmaceutical distribution from source to destination across India.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="30" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 20h12" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 12v-4M30 12v-4M20 28v4M20 20v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'B2B Distribution Solutions',
    desc: 'Business-to-business pharmaceutical distribution services tailored for distributors, stockists, wholesale partners, and trade organizations.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="22" y="10" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="26" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 22v4M28 22v4M20 22v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="overline">What We Do</span>
            <h2 className="heading-lg">Our Core Services</h2>
            <div className="rule" />
          </div>
          <p className="body-lg services-sub">
            We provide comprehensive pharmaceutical distribution services to hospitals,
            pharmacies, distributors, and healthcare institutions across India.
          </p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.num} className="svc-card">
              <div className="svc-num">{s.num}</div>
              <div className="svc-icon">{s.icon}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
