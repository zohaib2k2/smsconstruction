import ProjectCard from './ProjectCard'
export default function ProjectGrid({ projects }) {
  return <div className="project-grid">{projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
}