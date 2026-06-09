import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV = [
  { label: 'About', href: '#overview' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo">
          <img src="/logo.png" alt="Pharmanexia Limited" />
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} className="nav-link" onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="mailto:info@pharmanexia.com" className="btn btn-blue nav-btn">
            Contact Sales
          </a>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>
    </header>
  )
}
