# Development

## Commands
- `npm install`: install dependencies.
- `npm run dev`: local development server.
- `npm run build`: production bundle.
- `npm run preview`: preview production build locally.

## Adding a page
1. Create a component in `src/pages`.
2. Add its route in `src/App.jsx`.
3. Reuse `PageIntro`, `SectionHeading`, shared layout and existing design tokens.
4. Check keyboard access and mobile layout.

## Updating content
Edit the data modules in `src/data`. Avoid hardcoding repeated content inside page components.

## QA checklist
- Test at 1440px, 1024px, 768px, 375px and 320px.
- Check all routes and navigation states.
- Check empty project-image fallbacks.
- Check phone, email, WhatsApp and Maps links.
- Verify inquiry form required fields and validation notice.
- Run `npm run build`.
