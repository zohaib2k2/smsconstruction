// Add confirmed client photography to /public/images/projects/<project-folder>/.
// Keep published:false until the project content and image association are approved.
export const projects = [
  { id: 'project-01', slug: 'gerrys-dnata', name: 'Gerry’s Dnata', category: 'Commercial', description: '', location: '', year: null, featured: true, coverImage: '', gallery: [], published: true },
  { id: 'project-02', slug: 'crumble-pakistan', name: 'Crumble Pakistan', category: 'Commercial', description: '', location: '', year: null, featured: true, coverImage: '', gallery: [], published: true },
  { id: 'project-03', slug: 'areca-cafe-restaurant', name: 'Areca Cafe & Restaurant', category: 'Hospitality', description: '', location: '', year: null, featured: false, coverImage: '', gallery: [], published: true },
  { id: 'project-04', slug: 'costa-coffee', name: 'Costa Coffee', category: 'Hospitality', description: '', location: '', year: null, featured: false, coverImage: '', gallery: [], published: true },
  { id: 'project-05', slug: 'i-hop', name: 'I Hop', category: 'Hospitality', description: '', location: '', year: null, featured: false, coverImage: '', gallery: [], published: true },
  { id: 'project-06', slug: 'tip-top', name: 'Tip-Top', category: 'Commercial', description: '', location: '', year: null, featured: false, coverImage: '', gallery: [], published: true },
  { id: 'project-07', slug: 'matco-foods-limited', name: 'Matco Foods Limited', category: 'Industrial', description: '', location: '', year: null, featured: false, coverImage: '', gallery: [], published: true },
  { id: 'project-08', slug: 'amros-pharmaceuticals', name: 'Amros Pharmaceuticals', category: 'Industrial', description: '', location: '', year: null, featured: false, coverImage: '', gallery: [], published: true },
  { id: 'project-09', slug: 'avari-towers', name: 'Avari Towers', category: 'Hospitality', description: '', location: '', year: null, featured: false, coverImage: '', gallery: [], published: true },
  { id: 'project-10', slug: 'sajjad-restaurant', name: 'Sajjad Restaurant', category: 'Hospitality', description: '', location: '', year: null, featured: false, coverImage: '', gallery: [], published: true }
]

export const visibleProjects = projects.filter(project => project.published)