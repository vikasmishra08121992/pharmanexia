const SERVICES = [
  {
    num: '01',
    title: 'Pharmaceutical Sales & Distribution',
    desc: 'Comprehensive pharmaceutical sales and distribution operations covering all major markets and territories across India with a focus on efficiency and reliability.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <rect x="8" y="16" width="24" height="18" rx="3"/>
        <path d="M14 16V12a6 6 0 0112 0v4" strokeLinecap="round"/>
        <circle cx="20" cy="25" r="3"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Generic Medicine Distribution',
    desc: 'Wholesale distribution of high-quality generic pharmaceutical products ensuring availability of affordable and effective medicines through an organized supply network.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="20" cy="20" r="12"/>
        <path d="M20 10v20M10 20h20" strokeLinecap="round"/>
        <path d="M26 14l-12 12M14 14l12 12" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Controlled Medicine Distribution',
    desc: 'Fully compliant wholesale distribution of controlled pharmaceutical products with strict adherence to regulatory guidelines and prescribed distribution protocols.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20 6l12 4.5v9c0 7.5-5.5 13.5-12 16-6.5-2.5-12-8.5-12-16v-9L20 6z" strokeLinejoin="round"/>
        <path d="M14.5 20.5l3.5 3.5 7.5-7.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Supply Chain Management',
    desc: 'End-to-end supply chain management and logistics coordination ensuring seamless pharmaceutical distribution from source to destination across India.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="10" cy="20" r="4"/>
        <circle cx="30" cy="20" r="4"/>
        <path d="M14 20h12" strokeLinecap="round"/>
        <path d="M10 12v-4M30 12v-4M20 28v4" strokeLinecap="round"/>
        <circle cx="20" cy="8" r="3"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'B2B Distribution Solutions',
    desc: 'Business-to-business pharmaceutical distribution services tailored for distributors, stockists, wholesale partners, and trade organizations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <rect x="6" y="10" width="12" height="12" rx="2"/>
        <rect x="22" y="10" width="12" height="12" rx="2"/>
        <rect x="14" y="26" width="12" height="8" rx="2"/>
        <path d="M12 22v4M28 22v4M20 22v4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50/80 light-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[2.5px] uppercase text-brand-sky bg-brand-sky-light px-4 py-1.5 rounded-full mb-5">
              What We Do
            </span>
            <h2
              className="font-display font-bold text-brand-navy leading-[1.2]"
              style={{ fontSize: 'clamp(28px, 3.8vw, 46px)' }}
            >
              Our Core Services
            </h2>
            <div className="w-12 h-1 bg-brand-sky rounded mt-5" />
          </div>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-md lg:text-right">
            Comprehensive pharmaceutical distribution services to hospitals,
            pharmacies, distributors, and healthcare institutions across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(s => (
            <div
              key={s.num}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 card-hover overflow-hidden cursor-default"
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-sky to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <div className="text-[11px] font-bold text-gray-200 tracking-[3px] mb-5">{s.num}</div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-brand-sky-light flex items-center justify-center mb-5 text-brand-sky group-hover:bg-brand-sky group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>

              {/* Content */}
              <h3 className="text-[15px] font-bold text-brand-navy mb-3 leading-tight">{s.title}</h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">{s.desc}</p>

              {/* Arrow on hover */}
              <div className="mt-5 flex items-center gap-1.5 text-brand-sky text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1 group-hover:translate-x-0">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
