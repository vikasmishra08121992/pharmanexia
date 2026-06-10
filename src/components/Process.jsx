const STEPS = [
  {
    num: '01',
    title: 'Partnership Inquiry',
    desc: 'Initial contact and comprehensive requirements assessment for a tailored distribution partnership.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.6}>
        <path d="M36 20c0 8.8-7.2 16-16 16a15.9 15.9 0 01-11-4.4L4 34l2.4-5A15.9 15.9 0 014 20C4 11.2 11.2 4 20 4s16 7.2 16 16z" strokeLinejoin="round"/>
        <path d="M13 20h14M20 13v14" strokeLinecap="round" strokeOpacity="0.6"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Network Assessment',
    desc: 'Territory analysis, distribution channel mapping, and infrastructure planning across your target markets.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="20" cy="20" r="13"/>
        <path d="M7 20h26M20 7v26" strokeLinecap="round"/>
        <path d="M13 10.5c1.5 2.8 2.5 5.8 2.5 9.5s-1 7.2-2.5 10M27 10.5c-1.5 2.8-2.5 5.8-2.5 9.5s1 7.2 2.5 10" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Supply Coordination',
    desc: 'End-to-end procurement, quality verification, inventory management, and logistics coordination.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.6}>
        <rect x="8" y="10" width="24" height="24" rx="3"/>
        <path d="M14 10V7M26 10V7M8 18h24" strokeLinecap="round"/>
        <path d="M13 24l3 3 7-7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Reliable Delivery',
    desc: 'On-time, compliant delivery to healthcare endpoints with complete documentation and traceability.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.6}>
        <rect x="3" y="18" width="22" height="14" rx="2"/>
        <path d="M25 22h5l6 6v4H25V22z" strokeLinejoin="round"/>
        <circle cx="10" cy="34" r="2.5"/>
        <circle cx="29" cy="34" r="2.5"/>
        <path d="M7 18l5-9h8l4 9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-brand-navy-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-sky/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[2.5px] uppercase text-brand-green border border-brand-green/25 bg-brand-green/10 px-4 py-1.5 rounded-full mb-5">
            Our Process
          </span>
          <h2
            className="font-display font-bold text-white leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(28px, 3.8vw, 46px)' }}
          >
            How We Work
          </h2>
          <p className="text-white/55 text-[17px] leading-relaxed">
            A streamlined process designed to ensure reliable pharmaceutical
            distribution from first inquiry to final delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-14 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent hidden md:block pointer-events-none" />

          {STEPS.map((step, i) => (
            <div key={step.num} className="group relative flex flex-col">
              {/* Card */}
              <div className="flex-1 bg-white/[0.04] border border-white/[0.09] rounded-2xl p-7 hover:bg-white/[0.07] hover:border-white/[0.18] transition-all duration-300 hover:-translate-y-1">

                {/* Number badge */}
                <div className="w-11 h-11 rounded-full border border-brand-sky/30 bg-brand-sky/10 flex items-center justify-center mb-7 text-brand-sky font-bold text-sm group-hover:bg-brand-sky group-hover:border-brand-sky group-hover:text-white transition-all duration-300">
                  {step.num}
                </div>

                {/* Icon */}
                <div className="text-white/50 mb-5 group-hover:text-brand-sky transition-colors duration-300">
                  {step.icon}
                </div>

                <h3 className="text-[15px] font-bold text-white mb-2.5">{step.title}</h3>
                <p className="text-[13px] text-white/45 leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow connector (mobile only) */}
              {i < STEPS.length - 1 && (
                <div className="flex justify-center py-3 md:hidden">
                  <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
