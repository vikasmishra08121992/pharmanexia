import { useState, useEffect } from 'react'

const NAV = [
  { label: 'About',      href: '#overview'   },
  { label: 'Services',   href: '#services'   },
  { label: 'Why Us',     href: '#why-us'     },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    // Trigger once on mount so SSR/initial state is correct
    setScrolled(window.scrollY > 80)
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-transition ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gray-100'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo
              — white/inverted when over dark hero (not scrolled)
              — full colour when over white sections (scrolled) */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Pharmanexia Limited"
              className={`h-14 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(n => (
              <a
                key={n.label}
                href={n.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-brand-navy hover:bg-gray-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:info@pharmanexia.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-sky hover:bg-brand-sky-hover text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-sky/30 hover:-translate-y-px"
            >
              Contact Sales
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100`}
      >
        <div className="px-4 pt-3 pb-5 flex flex-col gap-1">
          {NAV.map(n => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-navy hover:bg-gray-50 rounded-xl transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="mailto:info@pharmanexia.com"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3.5 bg-brand-sky text-white text-sm font-semibold rounded-xl hover:bg-brand-sky-hover transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </header>
  )
}
