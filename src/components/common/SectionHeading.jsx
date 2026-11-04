export default function SectionHeading({ label, title, children, light = false }) {
  return <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
    <span className="eyebrow">{label}</span><h2>{title}</h2>{children && <p>{children}</p>}
  </div>
}