import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'],
  ['Projects', '/projects'], ['Contact', '/contact']
]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="nav-wrap">
      <Link to="/" className="brand" aria-label="SMS Engineering & Construction home" onClick={() => setOpen(false)}>
        <img src="/images/brand/sms-logo-v2.png" alt="SMS logo" />
        <span><strong>SMS</strong><small>ENGINEERING & CONSTRUCTION</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}
      </nav>
      <Link className="nav-cta" to="/contact">Start a project <ArrowUpRight size={16} /></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">
      {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
      <Link to="/contact" onClick={() => setOpen(false)}>Start a project ↗</Link>
    </nav>}
  </header>
}