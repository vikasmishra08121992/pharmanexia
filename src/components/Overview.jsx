const HIGHLIGHTS = [
  { label: 'Pan India Operations',           desc: 'Nationwide pharmaceutical distribution network.' },
  { label: 'Regulatory Compliance',          desc: 'Full adherence to all pharmaceutical regulations.' },
  { label: 'Generic Medicine Distribution',  desc: 'Wholesale supply of quality generic products.' },
  { label: 'Controlled Medicine Distribution', desc: 'Compliant distribution of controlled pharmaceuticals.' },
  { label: 'Supply Chain Excellence',        desc: 'End-to-end logistics coordination and management.' },
  { label: 'Long-term Partnerships',         desc: 'Trusted relationships with healthcare stakeholders.' },
]

const META = [
  { label: 'GSTIN',              value: '24AAPCP9151P1ZL'      },
  { label: 'Constitution',       value: 'Limited'               },
  { label: 'Registered Office',  value: 'Ahmedabad, Gujarat'   },
]

export default function Overview() {
  return (
    <section id="overview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[2.5px] uppercase text-brand-sky bg-brand-sky-light px-4 py-1.5 rounded-full mb-6">
              About Pharmanexia
            </span>

            <h2
              className="font-display font-bold text-brand-navy leading-[1.18] mb-5"
              style={{ fontSize: 'clamp(30px, 3.8vw, 48px)' }}
            >
              A Trusted Name in<br />Pharmaceutical Distribution
            </h2>

            <div className="w-12 h-1 bg-brand-sky rounded mb-7" />

            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              Pharmanexia Limited is a professionally managed pharmaceutical
              sales and distribution organization committed to delivering
              reliable, efficient, and compliant healthcare supply solutions
              across India.
            </p>

            <p className="text-[15px] text-gray-500 leading-relaxed mb-10">
              With a strong focus on wholesale pharmaceutical distribution, we
              serve a wide network of distributors,
              pharmacies, and business partners nationwide. Our
              specialization in Generic and Controlled pharmaceutical products
              ensures essential medicines reach patients through a dependable,
              organized supply chain.
            </p>

            {/* Company meta chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {META.map(m => (
                <div key={m.label} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-sky/30 hover:bg-brand-sky-light/50 transition-colors duration-200">
                  <div className="text-[10px] uppercase tracking-[2px] text-gray-400 font-bold mb-1.5">{m.label}</div>
                  <div className="text-[13px] font-bold text-brand-navy leading-tight">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Feature card ── */}
          <div className="bg-gradient-to-br from-[#F0F6FF] to-[#F2FBF0] rounded-3xl p-8 border border-gray-100/80 shadow-sm">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8 pb-7 border-b border-gray-200/70">
              <img src="/logo.png" alt="Pharmanexia Limited" className="h-14 w-auto" />
            </div>

            {/* Highlights list */}
            <div className="space-y-3">
              {HIGHLIGHTS.map(h => (
                <div
                  key={h.label}
                  className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-white/80 transition-colors duration-150 group cursor-default"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/15 flex items-center justify-center mt-0.5 group-hover:bg-brand-green/25 transition-colors">
                    <svg className="w-3.5 h-3.5 text-brand-green" fill="none" viewBox="0 0 14 14">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-navy leading-tight">{h.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
