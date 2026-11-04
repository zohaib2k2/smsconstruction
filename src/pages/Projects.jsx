import { useMemo, useState } from 'react'
import PageIntro from '../components/common/PageIntro'
import ProjectGrid from '../components/projects/ProjectGrid'
import { visibleProjects } from '../data/projects'
export default function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(visibleProjects.map(p => p.category))]
  const shown = useMemo(() => filter === 'All' ? visibleProjects : visibleProjects.filter(p => p.category === filter), [filter])
  return <><PageIntro label="OUR PORTFOLIO" title={<>A record of<br /><em>making things real.</em></>} text="A selection of completed projects listed in the company proposal. Individual project imagery and additional details will be published as the client confirms and supplies them." />
    <section className="section-pad"><div className="container"><div className="filter-bar" aria-label="Filter projects">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div><ProjectGrid projects={shown} /><p className="content-note">Project photographs, descriptions, locations and completion dates are pending client confirmation. No unrelated stock imagery is used as project evidence.</p></div></section>
  </>
}