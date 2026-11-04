# Content guide

## Source of truth
Company description, mission, vision, services, completed project names and contact details were transcribed from the supplied SMS Engineering & Construction proposal. Verify final copy with the client before public launch.

## Official logo
The supplied separate logo is installed at `public/images/brand/sms-logo.png`. Preserve its proportions; use `object-fit: contain`. The logo printed on the proposal cover is not used.

## Current company details
- SMS Engineering & Construction
- Muhammad Sauban: +92 332 3345013
- Muhammad Talal Hussain: +92 332 3229561
- smsengineering.construction@gmail.com
- 318, Sabir Manzil, Opp. Gul Plaza, Karachi, Pakistan.

## Services
Design: Interior Design, Space Planning, Concept Development, Brand Integration, 3D Visualization.
Construction: Renovation & Fit-Out, Civil Works, Structural Work, False Ceiling & Flooring.
Engineering: HVAC Services, MEP Services, Electrical Services, Plumbing Solutions.
Project: Project Management, BOQ Development, Site Supervision, Procurement Support.

## Add project photography
1. Create `public/images/projects/<project-slug>/`.
2. Add optimized images, preferably WebP (`cover.webp`, `image-01.webp`, `image-02.webp`).
3. Confirm with the client which project each image represents.
4. Edit the matching object in `src/data/projects.js`:
   - `coverImage: '/images/projects/<project-slug>/cover.webp'`
   - `gallery: ['/images/projects/<project-slug>/image-01.webp']`
5. Add verified optional fields such as description, location and year only after client approval.
6. Run `npm run build` and inspect the project page at desktop and mobile widths.

Adding a project should require only its image directory and one data object. Do not add project image paths inside page or card components.

## Replace hero artwork
The current hero is a CSS architectural composition, not a client project photograph. When an approved hero image arrives, add it under `public/images/hero/` and update the hero visual in `src/pages/Home.jsx` to render that image with meaningful alt text and responsive `object-fit: cover`.

## Image conventions
- Use WebP for photographs where possible.
- Use lowercase kebab-case directories and filenames.
- Keep a descriptive alt text for informative images.
- Avoid enormous source files; optimize dimensions and compression before committing.
- Never use unrelated stock photography as evidence of an SMS completed project.

## Pending client confirmation
- Which proposal highlight photographs correspond to which named projects.
- Project descriptions, locations, completion years and categories where not stated.
- Approved hero photograph.
- Any company statistics, certifications, awards or founding date.
- Whether the exact spelling/capitalization of client project names should be adjusted.
- Form delivery provider/backend and recipient workflow.
