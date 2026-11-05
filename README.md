# cv-website

Personal CV site for Lennart Krauch. Next.js 16 (App Router), React 19, Tailwind CSS 4. Exported as a static site to GitHub Pages.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export check
```

## Content

All content lives in typed data files. Edit these, not the components:

| File | Holds |
|---|---|
| `src/data/personal-info.ts` | Name, title, summary line (also used for page metadata and link previews), contact handles |
| `src/data/experience.ts` | Roles, newest first. Consecutive roles at one employer render as one block; the first role is shown open. |
| `src/data/education.ts` | Degrees and the thesis |
| `src/data/certificates.ts` | Certificates |
| `src/data/skills.ts` | Skills, grouped by `category` |
| `public/lennart-krauch-cv.pdf` | Downloadable CV (separate document; keep it in sync by hand) |

Date ranges use an en dash: `"Mar. 2025 – Present"`.

## Design

Visual rules are in [`DESIGN.md`](DESIGN.md); product context is in [`PRODUCT.md`](PRODUCT.md).

## Deploy

`.github/workflows/nextjs.yml` builds and publishes to GitHub Pages on push. The workflow passes the Pages base path to the build as `NEXT_PUBLIC_BASE_PATH`; links to files in `public/` must prefix it (see `cvUrl` in `src/app/page.tsx`).
