# SMS Engineering & Construction

Premium dark architectural editorial website built with React, Vite, Tailwind CSS and React Router.

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Install and run
```bash
npm install
npm run dev
```
Open http://localhost:5173.

## Production
```bash
npm run build
npm run preview
```

## Routes
- `/` Home
- `/about` About
- `/services` Services
- `/projects` Project portfolio
- `/projects/:slug` Project detail
- `/contact` Contact

## Project content
Project records live in `src/data/projects.js`. Images are served from `public/images`. See `Documentation/CONTENT_GUIDE.md` before adding client assets.

## Important production note
The inquiry form currently validates locally only. It does not send or store messages. Connect a backend or approved form provider before launch. The current hero and project image areas are intentionally designed placeholders, not representations of completed SMS work.

## Design
CSS variables are centralized in `src/index.css`; Tailwind theme aliases are in `tailwind.config.js`. Typography uses Playfair Display and DM Sans.
