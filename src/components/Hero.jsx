const HeroDeco = () => (
  <svg viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Outer rings */}
    <circle cx="280" cy="280" r="260" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
    <circle cx="280" cy="280" r="200" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
    <circle cx="280" cy="280" r="140" stroke="rgba(255,255,255,0.11)" strokeWidth="1"/>
    {/* Cross axis lines */}
    <line x1="280" y1="20"  x2="280" y2="540" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
    <line x1="20"  y1="280" x2="540" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
    {/* Diagonal lines */}
    <line x1="96"  y1="96"  x2="464" y2="464" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
    <line x1="464" y1="96"  x2="96"  y2="464" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
    {/* Large pharmaceutical cross */}
    <path
      d="M220 120 h120 v100 h100 v120 H340 v100 H220 V340 H120 V220 h100 z"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="1.5"
      fill="rgba(255,255,255,0.04)"
    />
    {/* Smaller floating cross top-right */}
    <path
      d="M420 60 h40 v34 h34 v40 H460 v34 H420 V134 H386 V94 h34 z"
      stroke="rgba(76,184,71,0.25)"
      strokeWidth="1.2"
      fill="rgba(76,184,71,0.06)"
    />
    {/* Pill shapes */}
    <rect x="60" y="380" width="90" height="40" rx="20"
      stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
    <rect x="380" y="430" width="70" height="30" rx="15"
      stroke="rgba(76,184,71,0.20)" strokeWidth="1" fill="rgba(76,184,71,0.05)"/>
    {/* Glowing dots */}
    <circle cx="460" cy="180" r="6" fill="rgba(76,184,71,0.40)"/>
    <circle cx="480" cy="210" r="3.5" fill="rgba(255,255,255,0.25)"/>
    <circle cx="100" cy="140" r="5" fill="rgba(255,255,255,0.20)"/>
    <circle cx="130" cy="420" r="3"  fill="rgba(76,184,71,0.30)"/>
    {/* Dashed arc */}
    <path d="M380 460 Q440 440 460 380" stroke="rgba(76,184,71,0.20)" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
  </svg>
)

const BAR_ITEMS = [
  { strong: 'Pan India',            sub: 'Distribution Network'    },
  { strong: 'Generic & Controlled', sub: 'Pharmaceutical Products' },
  { strong: 'B2B Wholesale',        sub: 'Distribution Solutions'  },
  { strong: 'Fully Compliant',      sub: 'Regulatory Standards'    },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background: rich royal-blue → deep navy gradient ── */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0D3B8E 0%, #0A2D6E 30%, #082050 60%, #061540 100%)'
      }} />
      <div className="absolute inset-0 grid-pattern" />

      {/* Soft radial glow — sky blue top-right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(41,171,226,0.18) 0%, transparent 65%)' }}
      />
      {/* Green glow — bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(76,184,71,0.12) 0%, transparent 60%)' }}
      />

      {/* Decorative right SVG */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:flex items-center justify-end pr-8 pointer-events-none">
        <HeroDeco />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-20">
        <div className="max-w-[700px]">

          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-[7px] rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm">
            <span className="w-[7px] h-[7px] rounded-full bg-brand-green flex-shrink-0"
              style={{ boxShadow: '0 0 10px rgba(76,184,71,0.85)' }}
            />
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/70">
              Pharmaceutical Sales &amp; Distribution &nbsp;·&nbsp; Pan India
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-[1.07] mb-6 tracking-tight"
            style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}
          >
            Reliable Pharmaceutical<br />
            <span className="text-gradient-sky">Distribution</span><br />
            Across India
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] text-white/70 leading-[1.82] max-w-xl mb-12">
            Delivering trusted pharmaceutical sales, distribution, and healthcare
            supply chain solutions with regulatory compliance, operational
            excellence, and nationwide reach.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-[15px] bg-brand-sky hover:bg-brand-sky-hover text-white font-semibold text-[14px] rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-sky/40 hover:-translate-y-0.5"
            >
              Partner With Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:info@pharmanexia.com"
              className="inline-flex items-center px-8 py-[15px] border border-white/35 hover:border-white/70 text-white font-semibold text-[14px] rounded-xl transition-all duration-200 hover:bg-white/[0.10]"
            >
              Contact Sales
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-white/[0.14] bg-white/[0.07] backdrop-blur-sm overflow-hidden">
            {BAR_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`px-5 py-5 ${i > 0 ? 'border-l border-white/[0.12]' : ''} ${i > 1 ? 'border-t sm:border-t-0 border-white/[0.12]' : ''}`}
              >
                <div className="text-[13px] font-bold text-white mb-1 leading-tight">{item.strong}</div>
                <div className="text-[10px] uppercase tracking-[0.8px] text-white/45 font-medium">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
