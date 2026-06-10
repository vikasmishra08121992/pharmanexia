const INDUSTRIES = [
  {
    title: 'Hospitals',
    desc: 'Supplying essential medicines and pharmaceuticals to multi-specialty and government hospitals across India.',
    tag: 'Primary Care',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <rect x="8" y="14" width="32" height="28" rx="2"/>
        <path d="M8 22h32"/>
        <path d="M20 42V30h8v12" strokeLinejoin="round"/>
        <path d="M8 14L24 6l16 8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 19h6M24 16v6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Pharmacies',
    desc: 'Wholesale pharmaceutical supply to retail pharmacies and medical stores with consistent and reliable availability.',
    tag: 'Retail Distribution',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <rect x="10" y="18" width="28" height="22" rx="2"/>
        <path d="M16 18v-6a8 8 0 0116 0v6" strokeLinecap="round"/>
        <path d="M19 29h10M24 24v10" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Healthcare Institutions',
    desc: 'Dedicated supply services for clinics, diagnostic centres, nursing homes, and specialized healthcare facilities.',
    tag: 'Institutional',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <path d="M24 8c-7.7 0-14 5.8-14 13 0 9.2 14 22 14 22s14-12.8 14-22c0-7.2-6.3-13-14-13z" strokeLinejoin="round"/>
        <path d="M19 21h10M24 16v10" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Medical Distributors',
    desc: 'B2B partnerships with sub-distributors and stockists ensuring seamless pharmaceutical supply chains.',
    tag: 'B2B Partners',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <rect x="4" y="20" width="26" height="16" rx="2"/>
        <path d="M30 24h5l7 7v5H30V24z" strokeLinejoin="round"/>
        <circle cx="12" cy="38" r="3.5"/>
        <circle cx="34" cy="38" r="3.5"/>
        <path d="M10 20V14a4 4 0 014-4h8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Wholesale Partners',
    desc: 'Long-term distribution alliances with wholesale trade partners enabling wider pharmaceutical access.',
    tag: 'Trade Network',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <path d="M8 28l5 5 6-3 5 2 6-2.5L38 22" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 28l3-6 5-.5 3-6h5l5 6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 30l-5-4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Government & Tenders',
    desc: 'Pharmaceutical supply for government healthcare programs, public health schemes, and institutional tenders.',
    tag: 'Public Sector',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <rect x="6" y="22" width="36" height="18" rx="2"/>
        <path d="M6 22l18-14 18 14" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="30" width="12" height="10" rx="1"/>
        <path d="M14 28h4M30 28h4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[2.5px] uppercase text-brand-sky bg-brand-sky-light px-4 py-1.5 rounded-full mb-5">
            Who We Serve
          </span>
          <h2
            className="font-display font-bold text-brand-navy leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(28px, 3.8vw, 46px)' }}
          >
            Industries We Serve
          </h2>
          <p className="text-gray-500 text-[17px] leading-relaxed">
            We partner with organizations across the entire healthcare ecosystem — from
            frontline hospitals to wholesale trade networks — delivering reliable
            pharmaceutical supply at every level.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map(ind => (
            <div
              key={ind.title}
              className="group bg-white rounded-2xl p-7 border border-gray-100 card-hover cursor-default"
            >
              {/* Tag */}
              <div className="inline-block text-[10px] font-bold tracking-[1.5px] uppercase text-brand-sky bg-brand-sky-light px-2.5 py-1 rounded-full mb-5">
                {ind.tag}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-sky-light to-brand-green-light flex items-center justify-center mb-5 text-brand-navy group-hover:from-brand-sky group-hover:to-brand-green group-hover:text-white transition-all duration-300">
                {ind.icon}
              </div>

              <h3 className="text-base font-bold text-brand-navy mb-2.5">{ind.title}</h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
