# Component guide

- `Navbar`: responsive desktop navigation and mobile drawer.
- `Footer`: company summary, navigation and contact links.
- `SectionHeading`: reusable editorial section heading.
- `PageIntro`: page-level title and intro copy.
- `ProjectCard`: project preview with image fallback.
- `ProjectGrid`: data-driven responsive project layout.
- `ProjectLightbox`: accessible keyboard-close/arrow lightbox primitive, ready for gallery integration.
- `SiteLayout`: shared shell for all routes.

Pages should compose these components rather than duplicating their internal presentation. Keep project metadata in `src/data/projects.js`.
