import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../../data/company'
import { mapsUrl } from '../../utils/links'
export default function Footer() {
  return <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div><span className="eyebrow">SMS ENGINEERING & CONSTRUCTION</span><h2>WE BUILD<br /><em>INNOVATIONS.</em></h2></div>
        <Link className="footer-cta" to="/contact">Have a project in mind? <ArrowUpRight /></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand"><img src="/images/brand/sms-logo.png" alt="" /><p>{company.intro}</p></div>
        <div><span className="eyebrow">EXPLORE</span><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link></div>
        <div><span className="eyebrow">CONTACT</span>{company.contacts.map(c => <a key={c.tel} href={`tel:${c.tel}`}>{c.phone}</a>)}<a href={`mailto:${company.email}`}>{company.email}</a><a href={mapsUrl(company.address)} target="_blank" rel="noreferrer">{company.address}</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} SMS Engineering & Construction</span><span>Karachi, Pakistan</span></div>
    </div>
  </footer>
}