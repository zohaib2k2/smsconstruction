export default function PageIntro({ label, title, text }) {
  return <section className="page-intro container"><span className="eyebrow">{label}</span><h1>{title}</h1>{text && <p>{text}</p>}</section>
}