const VALUES = [
  'Integrity & Transparency',
  'Professional Excellence',
  'Regulatory Compliance',
  'Customer Commitment',
  'Reliability & Trust',
  'Continuous Improvement',
]

const VisionIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 48 48" stroke="rgba(255,255,255,0.9)" strokeWidth={1.8}>
    <circle cx="24" cy="24" r="8"/>
    <path d="M6 24c4-9 10-14 18-14s14 5 18 14c-4 9-10 14-18 14S10 33 6 24z" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="3" fill="rgba(255,255,255,0.9)" stroke="none"/>
  </svg>
)

const MissionIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 48 48" stroke="rgba(255,255,255,0.9)" strokeWidth={1.8}>
    <circle cx="24" cy="24" r="16"/>
    <circle cx="24" cy="24" r="10"/>
    <circle cx="24" cy="24" r="4"/>
    <path d="M24 8v4M24 36v4M8 24h4M36 24h4" strokeLinecap="round"/>
  </svg>
)

export default function VisionMission() {
  return (
    <section id="vision" className="py-24 bg-brand-navy-mid relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-sky/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[2.5px] uppercase text-brand-sky border border-brand-sky/25 bg-brand-sky/10 px-4 py-1.5 rounded-full mb-5">
            Our Foundation
          </span>
          <h2
            className="font-display font-bold text-white leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(28px, 3.8vw, 46px)' }}
          >
            Vision &amp; Mission
          </h2>
          <p className="text-white/55 text-[17px] leading-relaxed">
            Guided by strong values and a clear purpose, Pharmanexia is committed to
            building a more reliable and accessible pharmaceutical supply network across India.
          </p>
        </div>

        {/* Vision + Mission cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Vision */}
          <div className="relative overflow-hidden rounded-3xl p-8 lg:p-10 border border-brand-sky/20 bg-gradient-to-br from-brand-sky/20 via-brand-sky/10 to-transparent backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-sky/8 rounded-full blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-brand-sky/20 border border-brand-sky/30 flex items-center justify-center">
                  <VisionIcon />
                </div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-brand-sky">Our Vision</span>
              </div>
              <blockquote className="text-[17px] text-white/85 leading-[1.8] font-light italic">
                "To be recognized as a leading pharmaceutical sales and distribution organization
                in India — known for reliability, regulatory compliance, operational excellence,
                and the trust of our partners and customers."
              </blockquote>
            </div>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden rounded-3xl p-8 lg:p-10 border border-brand-green/20 bg-gradient-to-br from-brand-green/20 via-brand-green/10 to-transparent backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-green/8 rounded-full blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center">
                  <MissionIcon />
                </div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-brand-green">Our Mission</span>
              </div>
              <blockquote className="text-[17px] text-white/85 leading-[1.8] font-light italic">
                "To provide efficient, dependable, and compliant pharmaceutical distribution
                services across India — ensuring essential medicines reach healthcare providers
                and patients through an organized, transparent supply network."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="bg-white/[0.04] border border-white/[0.09] rounded-2xl px-8 py-7">
          <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/40 text-center mb-6">
            Our Core Values
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {VALUES.map(v => (
              <div
                key={v}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/[0.05] hover:border-brand-sky/40 hover:bg-brand-sky/10 transition-all duration-200 cursor-default"
              >
                <svg className="w-3.5 h-3.5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 14 14">
                  <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[13px] text-white/75 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
