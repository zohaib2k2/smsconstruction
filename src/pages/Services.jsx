import PageIntro from '../components/common/PageIntro'
import { services } from '../data/services'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Services() {
  return <><PageIntro label="OUR CAPABILITIES" title={<>From concept<br /><em>to completion.</em></>} text="A coordinated range of design, construction, engineering and project services for restaurants, cafés, bakeries and commercial environments." />
    <section className="section-pad"><div className="container service-detail-list">{services.map(s=><article className="service-detail" key={s.number}><div className="service-detail-number">{s.number} / 04</div><div><h2>{s.title}</h2><p>{s.intro}</p><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul></div><div className="service-detail-aside">SMS<br />{s.number}</div></article>)}</div></section>
    <section className="closing-cta"><div className="container closing-inner"><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let’s make it<br /><em>work beautifully.</em></h2><Link className="button button-primary" to="/contact">Discuss your project <ArrowUpRight size={16} /></Link></div></section>
  </>
}