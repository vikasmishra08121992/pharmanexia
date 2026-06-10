import { useState, useEffect, useRef } from 'react'

function useCountUp(end, duration = 1800, active = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const run = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(eased * end))
      if (t < 1) requestAnimationFrame(run)
    }
    requestAnimationFrame(run)
  }, [end, duration, active])
  return val
}

function StatCard({ end, suffix, prefix = '', label, description, active, icon }) {
  const count = useCountUp(end, 1800, active)
  return (
    <div className="group flex flex-col items-center text-center px-8 py-10 hover:bg-white/[0.04] transition-colors duration-200 rounded-xl">
      <div className="w-12 h-12 rounded-2xl bg-brand-sky/15 flex items-center justify-center mb-5 text-brand-sky group-hover:bg-brand-sky/25 transition-colors">
        {icon}
      </div>
      <div className="text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-semibold text-white/70 mb-1">{label}</div>
      <div className="text-xs text-white/35 leading-relaxed max-w-[160px]">{description}</div>
    </div>
  )
}

const STATS = [
  {
    end: 28, suffix: '+', label: 'States Covered',
    description: 'Pan India distribution network',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    end: 500, suffix: '+', label: 'Healthcare Partners',
    description: 'Hospitals, pharmacies & distributors',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    end: 10000, suffix: '+', label: 'SKUs Available',
    description: 'Generic & controlled product range',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    end: 99, suffix: '%', label: 'On-Time Delivery',
    description: 'Consistent supply chain performance',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Stats() {
  // const ref = useRef(null)
  // const [active, setActive] = useState(false)

  // useEffect(() => {
  //   const obs = new IntersectionObserver(
  //     ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
  //     { threshold: 0.2 }
  //   )
  //   if (ref.current) obs.observe(ref.current)
  //   return () => obs.disconnect()
  // }, [])

  return null

  // return (
  //   <section ref={ref} className="bg-brand-navy-mid border-y border-white/[0.07]">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.07]">
  //         {STATS.map(s => (
  //           <StatCard key={s.label} {...s} active={active} />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // )
}
