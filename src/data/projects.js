// Add confirmed client photography to /public/images/projects/<project-folder>/.
// Keep published:false until the project content and image association are approved.
export const projects = [
  {
    id: 'project-02',
    slug: 'crumble-pakistan',
    name: 'Crumble Pakistan',
    category: 'Commercial',
    description: '',
    location: 'Karachi',
    year: null,
    featured: true,
    coverImage: '/images/projects/crumble/project-slug-1.jpeg',
    gallery: ['/images/projects/crumble/project-slug-2.jpeg'],
    published: true
  },
  {
    id: 'project-03',
    slug: 'costa-coffee-airport-domestic-departure',
    name: 'Costa Coffee Airport Domestic Departure',
    category: 'Commercial',
    description: '',
    location: 'Karachi',
    year: null,
    featured: false,
    coverImage: '/images/projects/costca/costa-coffe-domestic-airport.jpeg',
    gallery: ['/images/projects/costca/costa-coffee-internation-airport.jpeg'],
    published: true
  },
  {
    id: 'project-04',
    slug: 'costa-coffee-bahria-lahore',
    name: 'Costa Coffee Bahria Lahore',
    category: 'Hospitality',
    description: '',
    location: 'Lahore',
    year: null,
    featured: false,
    coverImage: '/images/projects/costca/costa-coffee-bharia-lahore.jpeg',
    gallery: [],
    published: true
  },
  {
    id: 'project-05',
    slug: 'i-hop-gulberg-lahore',
    name: 'IHOP Gulberg Lahore',
    category: 'Hospitality',
    description: '',
    location: 'Lahore',
    year: null,
    featured: false,
    coverImage: '/images/projects/IHOP-lahore/Ihop-gulberg.jpeg',
    gallery: [],
    published: true
  },
  {
    id: 'project-06',
    slug: 'costa-coffee-dha-lahore',
    name: 'Costa Coffee DHA Lahore',
    category: 'Commercial',
    description: '',
    location: 'Lahore',
    year: null,
    featured: false,
    coverImage: '/images/projects/costca/costa-coffee-DHA-lahore.jpeg',
    gallery: [],
    published: true
  },
  {
    id: 'project-07',
    slug: 'matco-foods-limited',
    name: 'Matco Foods Limited',
    category: 'Industrial',
    description: '',
    location: '',
    year: null,
    featured: false,
    coverImage: '',
    gallery: [],
    published: true
  },
  {
    id: 'project-08',
    slug: 'amros-pharmaceuticals',
    name: 'Amros Pharmaceuticals',
    category: 'Industrial',
    description: '',
    location: '',
    year: null,
    featured: false,
    coverImage: '',
    gallery: [],
    published: true
  },
  {
    id: 'project-09',
    slug: 'avari-towers',
    name: 'Avari Towers',
    category: 'Hospitality',
    description: '',
    location: '',
    year: null,
    featured: false,
    coverImage: '',
    gallery: [],
    published: true
  },
  {
    id: 'project-10',
    slug: 'sajjad-restaurant',
    name: 'Sajjad Restaurant',
    category: 'Hospitality',
    description: '',
    location: '',
    year: null,
    featured: false,
    coverImage: '',
    gallery: [],
    published: true
  }
]

export const visibleProjects = projects.filter(project => project.published)