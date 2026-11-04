import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
export default function ProjectCard({ project, index = 0 }) {
  const hasImage = Boolean(project.coverImage)
  return <Link to={`/projects/${project.slug}`} className={`project-card ${index % 3 === 1 ? 'project-card-offset' : ''}`}>
    <div className={`project-visual ${hasImage ? '' : 'project-placeholder'}`}>
      {hasImage ? <img src={project.coverImage} alt={`${project.name} project`} loading="lazy" /> :
        <div className="placeholder-mark"><span>SMS</span><small>PROJECT IMAGE<br />AWAITING CLIENT SUPPLY</small></div>}
      <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      <span className="project-arrow"><ArrowUpRight size={18} /></span>
    </div>
    <div className="project-caption"><div><h3>{project.name}</h3><span>{project.category}</span></div><span className="caption-view">VIEW PROJECT</span></div>
  </Link>
}