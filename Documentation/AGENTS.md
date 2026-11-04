# Instructions for future coding agents

Before making changes, read `README.md`, `ARCHITECTURE.md`, and this file.

## Design constraints
- Preserve the dark architectural editorial direction.
- Use the centralized CSS variables and existing typography.
- Keep motion restrained and honor `prefers-reduced-motion`.
- Do not introduce generic construction-template styling, bright blue palettes, excessive rounded cards or decorative icon grids.

## Content integrity
- `src/data/company.js`, `services.js` and `projects.js` are the content sources.
- Do not invent statistics, awards, certifications, project details or project-image associations.
- Never present stock imagery as a completed SMS project.
- Keep the official supplied logo; do not substitute the proposal-cover mark.

## Ownership and implementation
- Project content belongs in `src/data/projects.js`.
- Project image rendering belongs in reusable project components.
- Keep page components focused on composition.
- Avoid unnecessary dependency additions and broad rewrites.
- Preserve accessibility, responsive behavior and reduced-motion support.

## Before handoff
- Run `npm run build`.
- Test routes, forms, links, image fallbacks and responsive widths.
- Update documentation when architecture or content workflows change.
- Clearly disclose any backend, integration or client-content dependency that remains.
