import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import ProjectGrid from '../components/projects/ProjectGrid'
import { company, principles } from '../data/company'
import { services } from '../data/services'
import { visibleProjects } from '../data/projects'

export default function Home() {
  const featured = visibleProjects.filter(p => p.featured).concat(visibleProjects.filter(p => !p.featured)).slice(0, 4)
  return <>
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><i /> ENGINEERING & CONSTRUCTION · KARACHI</span>
          <h1>We build spaces<br />that <em>inspire.</em></h1>
          <p>Thoughtful design. Precise engineering. Complete construction solutions for commercial spaces.</p>
          <div className="hero-actions"><Link className="button button-primary" to="/projects">View our projects <ArrowUpRight size={16} /></Link><Link className="text-link" to="/services">Our services <ArrowDownRight size={16} /></Link></div>
          <div className="hero-note"><span>01 / 04</span><span>FROM CONCEPT TO COMPLETION</span></div>
        </div>
        <div className="hero-art" aria-label="Architectural composition placeholder">
          <div className="hero-art-shape shape-one"></div><div className="hero-art-shape shape-two"></div><div className="hero-art-shape shape-three"></div>
          <div className="art-label"><span>BUILT ENVIRONMENTS</span><b>DESIGN / ENGINEERING / BUILD</b></div>
          <div className="art-coordinate">24°51' N<br />67°00' E</div>
        </div>
      </div>
      <div className="hero-bottom container"><span>SMS ENGINEERING & CONSTRUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="intro-section section-pad">
      <div className="container intro-layout">
        <div className="intro-side"><span className="eyebrow">01 — ABOUT SMS</span><div className="vertical-note">KARACHI · PAKISTAN</div></div>
        <div className="intro-main"><SectionHeading label="ENGINEERING PRECISION" title={<>Creating<br /><em>experiences.</em></>} /><p className="lead">{company.intro}</p><Link className="line-link" to="/about">Discover SMS <ArrowUpRight size={16} /></Link></div>
        <div className="intro-visual"><div className="visual-lines"></div><span>SPACE / FORM / FUNCTION</span></div>
      </div>
    </section>

    <section className="services-preview section-pad">
      <div className="container"><div className="section-top"><SectionHeading label="02 — WHAT WE DO" title={<>From concept<br /><em>to completion.</em></>} /><p>Integrated design, construction and engineering services for spaces made to work beautifully.</p></div>
        <div className="service-list">{services.map(s => <Link to="/services" className="service-row" key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.items.slice(0, 3).join(' · ')}</p><ArrowUpRight /></Link>)}</div>
      </div>
    </section>

    <section className="projects-preview section-pad">
      <div className="container"><div className="section-top"><SectionHeading label="03 — SELECTED WORK" title={<>Built with purpose.<br /><em>Designed to last.</em></>} /><p>Selected completed projects. Project photography will be added as approved images are supplied.</p></div>
        <ProjectGrid projects={featured} /><div className="center-link"><Link className="button button-outline" to="/projects">Explore all projects <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>

    <section className="philosophy section-pad"><div className="container philosophy-grid"><div><span className="eyebrow">04 — OUR PHILOSOPHY</span><h2>We don’t just construct buildings — we design experiences, build trust, and deliver spaces that <em>inspire growth.</em></h2></div><div className="philosophy-copy"><span className="eyebrow">OUR COMMITMENT</span><p>{company.mission}</p><Link className="line-link" to="/about">Our mission & vision <ArrowUpRight size={16} /></Link></div></div></section>

    <section className="approach section-pad"><div className="container"><SectionHeading label="05 — OUR APPROACH" title={<>The details make<br /><em>the difference.</em></>} /><div className="principle-grid">{principles.map((p,i)=><div key={p}><span>{String(i+1).padStart(2,'0')}</span><p>{p}</p></div>)}</div></div></section>
    <section className="closing-cta"><div className="container closing-inner"><span className="eyebrow">LET’S BUILD SOMETHING MEANINGFUL</span><h2>Have a space<br /><em>in mind?</em></h2><p>Let’s discuss your next commercial project and turn your vision into reality.</p><Link className="button button-primary" to="/contact">Start a project <ArrowUpRight size={16} /></Link></div></section>
  </>
}