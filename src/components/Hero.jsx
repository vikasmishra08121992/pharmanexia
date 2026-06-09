import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />

      {/* Decorative pharmaceutical cross — desktop only */}
      <div className="hero-deco" aria-hidden="true">
        <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer ring */}
          <circle cx="260" cy="260" r="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          {/* Mid ring */}
          <circle cx="260" cy="260" r="170" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          {/* Inner ring */}
          <circle cx="260" cy="260" r="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          {/* Large pharmaceutical cross */}
          <path
            d="M200 100 h120 v100 h100 v120 H320 v100 H200 V320 H100 V200 h100 z"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="1.5"
            fill="rgba(255,255,255,0.025)"
          />
          {/* Cross axis lines */}
          <path d="M260 20 v480 M20 260 h480" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          {/* Diagonal lines */}
          <path d="M80 80 l360 360 M440 80 L80 440" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="container hero-body">
        <div className="hero-brand">
          <img src="/logo.png" alt="Pharmanexia Limited" className="hero-logo" />
        </div>
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          Pharmaceutical Sales &amp; Distribution &nbsp;·&nbsp; Pan India
        </div>

        <h1 className="hero-headline">
          Reliable Pharmaceutical<br />
          Distribution Across India
        </h1>

        <p className="hero-sub">
          Delivering trusted pharmaceutical sales, distribution, and healthcare supply
          chain solutions with regulatory compliance, operational excellence, and
          nationwide reach.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-blue">Partner With Us</a>
          <a href="mailto:info@pharmanexia.com" className="btn btn-outline-white">Contact Sales</a>
        </div>

        <div className="hero-bar">
          <div className="hero-bar-item">
            <strong>Pan India</strong>
            <span>Distribution Network</span>
          </div>
          <div className="hero-bar-sep" />
          <div className="hero-bar-item">
            <strong>Generic &amp; Narcotic</strong>
            <span>Pharmaceutical Products</span>
          </div>
          <div className="hero-bar-sep" />
          <div className="hero-bar-item">
            <strong>B2B Wholesale</strong>
            <span>Distribution Solutions</span>
          </div>
          <div className="hero-bar-sep" />
          <div className="hero-bar-item">
            <strong>Fully Compliant</strong>
            <span>Regulatory Standards</span>
          </div>
        </div>
      </div>
    </section>
  )
}
