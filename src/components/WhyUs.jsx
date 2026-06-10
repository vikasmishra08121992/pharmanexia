const REASONS = [
  {
    title: 'Pan India Reach',
    desc: 'Strong distribution capabilities spanning every state and union territory across India.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="20" cy="20" r="13"/>
        <path d="M7 20h26M20 7v26" strokeLinecap="round"/>
        <path d="M13 10.5c1.5 2.8 2.5 5.8 2.5 9.5s-1 7.2-2.5 10M27 10.5c-1.5 2.8-2.5 5.8-2.5 9.5s1 7.2 2.5 10" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Proven Expertise',
    desc: 'Specialized industry knowledge in both Generic and Controlled pharmaceutical distribution.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="20" cy="15" r="8"/>
        <path d="M14 21.5l-4 10.5 10-3.5 10 3.5-4-10.5" strokeLinejoin="round"/>
        <path d="M17 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Professional Team',
    desc: 'Experienced and qualified professionals ensuring the highest service standards.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="20" cy="13" r="5"/>
        <path d="M10 33c0-5.5 4.5-9 10-9s10 3.5 10 9" strokeLinecap="round"/>
        <circle cx="9" cy="17" r="3.5"/>
        <path d="M3 30c0-4 2.5-6.5 6-6.5" strokeLinecap="round"/>
        <circle cx="31" cy="17" r="3.5"/>
        <path d="M37 30c0-4-2.5-6.5-6-6.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Efficient Supply Chain',
    desc: 'Streamlined logistics and supply chain processes for reliable, on-time deliveries.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="18" width="22" height="14" rx="2"/>
        <path d="M25 22h5l6 6v4H25V22z" strokeLinejoin="round"/>
        <circle cx="10" cy="34" r="2.5"/>
        <circle cx="29" cy="34" r="2.5"/>
        <path d="M9 18V13a4 4 0 014-4h8l3 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Compliance First',
    desc: 'Full adherence to regulatory guidelines and pharmaceutical quality standards at every step.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20 6l12 4.5v9c0 7.5-5.5 13.5-12 16-6.5-2.5-12-8.5-12-16v-9L20 6z" strokeLinejoin="round"/>
        <path d="M14.5 20.5l3.5 3.5 7.5-7.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Customer Commitment',
    desc: 'Customer-centric approach with dedicated support and long-term after-service care.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20 33S7 24.5 7 15.5a7.5 7.5 0 0113-5.1A7.5 7.5 0 0133 15.5C33 24.5 20 33 20 33z" strokeLinejoin="round"/>
        <path d="M12 15a5 5 0 014-5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Reliability & Trust',
    desc: 'Long-term relationships built on transparency, integrity, and consistent dependability.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <path d="M8 25.5l5 5 5.5-3 4.5 2 5.5-3L35 19" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 25.5l2.5-5.5 4.5-.5 3-6h4l5 6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 27.5l-4.5-4.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Timely Delivery',
    desc: 'Consistent on-time distribution ensuring uninterrupted pharmaceutical supply across India.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="20" cy="21" r="13"/>
        <path d="M20 12v9l6 4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 7h14" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[2.5px] uppercase text-brand-sky bg-brand-sky-light px-4 py-1.5 rounded-full mb-5">
            Why Choose Us
          </span>
          <h2
            className="font-display font-bold text-brand-navy leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(28px, 3.8vw, 46px)' }}
          >
            The Pharmanexia Advantage
          </h2>
          <p className="text-gray-500 text-[17px] leading-relaxed">
            We combine industry expertise, regulatory compliance, and a customer-first
            mindset to deliver pharmaceutical distribution you can depend on.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map(r => (
            <div
              key={r.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-sky/25 hover:shadow-lg hover:shadow-brand-sky/8 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-sky-light flex items-center justify-center mb-5 text-brand-sky group-hover:bg-brand-sky group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-sky/30">
                {r.icon}
              </div>
              <h3 className="text-[14px] font-bold text-brand-navy mb-2 leading-tight">{r.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
