---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

Scope: the single-page CV at `src/app/page.tsx`. Mode: Persuade (a recruiter decides whether to interview; an engineer checks depth).
Audience/job: recruiters skim role, employer, stack in seconds; engineers read the current role's bullets. Proof: real facts from `src/data/` only. Constraint: user chose the category standard, dark, over concept worlds.

## Direction contract

THESIS: The standard minimal dark personal CV, executed so precisely it reads as engineering care. Refuses the dark dev-template arrangement: no badge clouds, no cards (boxes are hairline grids only), no indigo glow accents, no SaaS button stack beside the hero.

OWN-WORLD: Monochrome. Near-black neutral ground, off-white primary text, one mid-grey for secondary text, hairlines only where they separate. No hue. Geist for everything; Geist Mono only for dates. Technologies are plain text joined by middots, never pills. No shadows, no cards, no gradients. Structure that needs a box is a hairline grid (1px #34343a seams, 6px corners, no fill); today only the hero contact block.

STORY: Name, role, and a factual line about the DBaaS work at inovex land first; the visitor can email or take the PDF right there; below, one inovex progression, then skills, then education.

FIRST VIEWPORT: Left-aligned 720px column (widened from 680 so every date fits one line in the 176px label column). Name at ~56px semibold, role line at 20px, summary at 17px, then a hairline grid box: a full-width Currently cell, Email/GitHub/LinkedIn cells, and a bottom cell with the two buttons (Email me, Download CV). Experience starts inside the first viewport at 1440×900.

FORM: Category standard (canon), chosen by the user over the rolled Departure Timetable; seed:b2a36e32e34ea484

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
