# Architecture

## Runtime
Vite serves the React application. `src/main.jsx` mounts `App` inside `BrowserRouter`. `App.jsx` owns route definitions and scroll restoration. `SiteLayout` composes the shared navigation, route outlet and footer.

## Routes
Home, About, Services, Projects, ProjectDetails, Contact and NotFound are page-level components in `src/pages`.

## Data flow
- `src/data/company.js`: authoritative company copy and contact information.
- `src/data/services.js`: four service groups.
- `src/data/projects.js`: project metadata and image paths.
- Pages consume data; project cards and detail pages do not hardcode project records.

## Project photography
All project image paths are defined in `projects.js`. Project components render those paths and gracefully show neutral placeholders when no image is configured. Do not associate a photograph with a named project until the client confirms it.

## Design system
CSS custom properties in `src/index.css` define the palette. Tailwind aliases map to those variables. Playfair Display is used for display type; DM Sans is used for body and interface text.
