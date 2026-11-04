import PageIntro from '../components/common/PageIntro'
import SectionHeading from '../components/common/SectionHeading'
import { company, principles } from '../data/company'
export default function About() {
  return <><PageIntro label="THE COMPANY" title={<>Engineering precision.<br /><em>Creating experiences.</em></>} text={company.intro} />
    <section className="section-pad"><div className="container about-statement"><span className="eyebrow">OUR POINT OF VIEW</span><h2>We don’t just construct buildings — we design experiences, build trust, and deliver spaces that inspire growth and success.</h2></div></section>
    <section className="section-pad mission-vision"><div className="container mv-grid"><article><span className="eyebrow">01 / MISSION</span><SectionHeading title="Ideas into reality." /><p>{company.mission}</p></article><article><span className="eyebrow">02 / VISION</span><SectionHeading title="A standard of excellence." /><p>{company.vision}</p></article></div></section>
    <section className="section-pad"><div className="container"><SectionHeading label="OUR APPROACH" title={<>Built on purpose.<br /><em>Delivered with care.</em></>} /><div className="principle-grid">{principles.map((p,i)=><div key={p}><span>{String(i+1).padStart(2,'0')}</span><p>{p}</p></div>)}</div></div></section>
  </>
}