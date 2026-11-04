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
    gallery: [
      '/images/projects/crumble/project-slug-2.jpeg',
      '/images/projects/crumble/project-slug-1.jpeg'
    ],
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
    gallery: [
      '/images/projects/costca/costa-coffee-internation-airport.jpeg',
      '/images/projects/costca/costa-coffee-bharia-lahore.jpeg',
      '/images/projects/costca/costa-coffee-DHA-lahore.jpeg'
    ],
    published: true
  },
  {
    id: 'project-04',
    slug: 'costa-coffee-bahria-lahore',
    name: 'Costa Coffee Bahria Lahore',
    category: 'Commercial',
    description: '',
    location: 'Lahore',
    year: null,
    featured: false,
    coverImage: '/images/projects/costca/costa-coffee-bharia-lahore.jpeg',
    gallery: [
      '/images/projects/costca/costa-coffee-DHA-lahore.jpeg',
      '/images/projects/costca/costa-coffe-domestic-airport.jpeg',
      '/images/projects/costca/costa-coffee-internation-airport.jpeg'
    ],
    published: true
  },
  {
    id: 'project-05',
    slug: 'i-hop-gulberg-lahore',
    name: 'IHOP Gulberg Lahore',
    category: 'Commercial',
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
    slug: 'i-hop-shabaz-karachi',
    name: 'IHOP Shabaz Karachi',
    category: 'Commercial',
    description: '',
    location: 'Karachi',
    year: null,
    featured: false,
    coverImage: '/images/projects/IHOP-karachi/IHOP-shabaz-karachi.jpeg',
    gallery: [
      '/images/projects/IHOP-karachi/IHOP-shabaz-karachi-dining.jpeg',
      '/images/projects/IHOP-karachi/IDOP-2.jpeg'
    ],
    published: true
  },
  {
    id: 'project-07',
    slug: 'costa-coffee-dha-lahore',
    name: 'Costa Coffee DHA Lahore',
    category: 'Commercial',
    description: '',
    location: 'Lahore',
    year: null,
    featured: false,
    coverImage: '/images/projects/costca/costa-coffee-DHA-lahore.jpeg',
    gallery: [
      '/images/projects/costca/costa-coffee-bharia-lahore.jpeg',
      '/images/projects/costca/costa-coffee-internation-airport.jpeg'
    ],
    published: true
  },
  // {
  //   id: 'project-08',
  //   slug: 'matco-foods-limited',
  //   name: 'Matco Foods Limited',
  //   category: 'Commercial',
  //   description: '',
  //   location: '',
  //   year: null,
  //   featured: false,
  //   coverImage: '',
  //   gallery: [],
  //   published: true
  // },
  // {
  //   id: 'project-09',
  //   slug: 'amros-pharmaceuticals',
  //   name: 'Amros Pharmaceuticals',
  //   category: 'Commercial',
  //   description: '',
  //   location: '',
  //   year: null,
  //   featured: false,
  //   coverImage: '',
  //   gallery: [],
  //   published: true
  // },
  // {
  //   id: 'project-10',
  //   slug: 'avari-towers',
  //   name: 'Avari Towers',
  //   category: 'Commercial',
  //   description: '',
  //   location: '',
  //   year: null,
  //   featured: false,
  //   coverImage: '',
  //   gallery: [],
  //   published: true
  // },
  // {
  //   id: 'project-11',
  //   slug: 'sajjad-restaurant',
  //   name: 'Sajjad Restaurant',
  //   category: 'Commercial',
  //   description: '',
  //   location: '',
  //   year: null,
  //   featured: false,
  //   coverImage: '',
  //   gallery: [],
  //   published: true
  // }
]

export const visibleProjects = projects.filter(project => project.published)