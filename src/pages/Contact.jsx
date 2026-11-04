import { useState } from 'react'
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react'
import PageIntro from '../components/common/PageIntro'
import { company } from '../data/company'
import { mapsUrl, whatsappUrl } from '../utils/links'
export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', description:'' })
  const [submitted, setSubmitted] = useState(false)
  const update = e => setForm({...form, [e.target.name]: e.target.value})
  const submit = e => { e.preventDefault(); setSubmitted(true) }
  return <div className="contact-page"><PageIntro label="CONTACT" title={<>Let’s talk about<br /><em>what’s next.</em></>} text="Tell us about your space, your plans and what you would like to build. The SMS team can be reached directly using the details below." />
    <section className="section-pad"><div className="container contact-grid"><div className="contact-details glass-panel"><span className="eyebrow">GET IN TOUCH</span><h2>Start a<br /><em>conversation.</em></h2>
      <div className="contact-block"><Phone/><div><small>PHONE / WHATSAPP</small>{company.contacts.map(c=><p key={c.tel}><a href={`tel:${c.tel}`}>{c.name}</a><br/><a href={whatsappUrl(c.tel)} target="_blank" rel="noreferrer">{c.phone} · WhatsApp ↗</a></p>)}</div></div>
      <div className="contact-block"><Mail/><div><small>EMAIL</small><a href={`mailto:${company.email}`}>{company.email}</a></div></div>
      <div className="contact-block"><MapPin/><div><small>ADDRESS</small><a href={mapsUrl(company.address)} target="_blank" rel="noreferrer">{company.address}<br/>Get directions ↗</a></div></div>
    </div>
    <form className="inquiry-form glass-panel" onSubmit={submit}><span className="eyebrow">PROJECT INQUIRY</span><h3>Tell us a little<br/><em>about your project.</em></h3>
      <label>Name<input name="name" value={form.name} onChange={update} required /></label>
      <div className="form-row"><label>Email<input name="email" type="email" value={form.email} onChange={update} required /></label><label>Phone<input name="phone" type="tel" value={form.phone} onChange={update} /></label></div>
      <label>Service of interest<select name="service" value={form.service} onChange={update} required><option value="">Select a service</option>{['Design Services','Construction Services','Engineering Services','Project Services','Other / Not sure'].map(x=><option key={x}>{x}</option>)}</select></label>
      <label>Project description<textarea name="description" rows="4" value={form.description} onChange={update} required /></label>
      <button className="button button-primary" type="submit">Review inquiry <ArrowUpRight size={16}/></button>
      {submitted && <p className="form-notice" role="status">Your details have been validated in this page. No message has been sent: connect a backend or form service to enable delivery.</p>}
    </form></div></section>
  </div>
}