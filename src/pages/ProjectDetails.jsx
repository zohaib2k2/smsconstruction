import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { visibleProjects } from '../data/projects'
export default function ProjectDetails() {
  const { slug } = useParams()
  const project = visibleProjects.find(p => p.slug === slug)
  if (!project) return <section className="page-intro container"><span className="eyebrow">PROJECT NOT FOUND</span><h1>This page is<br /><em>not available.</em></h1><Link className="line-link" to="/projects">Back to projects <ArrowUpRight size={16}/></Link></section>
  const images = [project.coverImage, ...project.gallery].filter(Boolean)
  return <section className="project-detail-page section-pad"><div className="container"><Link className="back-link" to="/projects"><ArrowLeft size={15}/> All projects</Link><span className="eyebrow">{project.category} / COMPLETED PROJECT</span><h1>{project.name}</h1>{project.description && <p className="lead">{project.description}</p>}
    {images.length ? <div className="detail-gallery">{images.map((src,i)=><img key={src} src={src} alt={`${project.name} — image ${i+1}`} loading="lazy" />)}</div> : <div className="detail-placeholder"><span>PROJECT PHOTOGRAPHY</span><strong>Awaiting approved<br/>client imagery</strong><small>Images will appear here once supplied and associated with this project.</small></div>}
    <div className="project-meta">{project.location && <span>LOCATION / {project.location}</span>}{project.year && <span>COMPLETED / {project.year}</span>}<span>PHOTOGRAPHY / {images.length ? 'CLIENT SUPPLIED' : 'PENDING'}</span></div>
  </div></section>
}