---
name: Lennart Krauch CV
description: Single-page personal CV for a Cloud Platform / Kubernetes engineer; monochrome dark, Geist throughout.
colors:
  ground: "#0e0e10"
  raised: "#19191c"
  ink: "#ededef"
  ink-2: "#a0a0a8"
  ink-3: "#6e6e76"
  rule: "#26262a"
  line: "#34343a"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  display-sm:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  heading:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: "1.75rem"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "1.75rem"
    fontFeature: "\"ss01\", \"cv11\""
  small:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  meta:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: "1.75rem"
    fontFeature: "\"tnum\""
rounded:
  control: "8px"
spacing:
  gutter: "24px"
  column: "768px"
  label-column: "176px"
  label-gap: "32px"
  role-gap: "32px"
  employer-gap: "64px"
  section-gap-mobile: "96px"
  section-gap: "128px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.small}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.ground}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
    padding: "10px 0"
  text-link-hover:
    textColor: "{colors.ink}"
  row-label:
    textColor: "{colors.ink-2}"
    typography: "{typography.meta}"
    width: "{spacing.label-column}"
  tech-list:
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
  section-heading:
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
---

# Design System: Lennart Krauch CV

## Overview

**Creative North Star: "The Standard Engineer CV, Done Precisely"**

This is the category standard for a personal engineer CV: a dark page, one left-aligned column, name and role first, contact actions right below, then experience, skills, and education. No concept, no costume. The quality is in the type, the spacing, and what is left out.

The page is monochrome. One near-black ground, three greys of ink, one hairline colour. There is no hue anywhere. Hierarchy comes from ink level and weight, not from colour or containers. Every dated item sits on the same grid: a 176px date column on the left and the content on the right, from 768px up.

Density is calm and readable: 17px body text on a 28px line, generous section gaps (128px on desktop), and technologies written as plain text. The one entrance motion is the header settling in on load.

**Key Characteristics:**
- Monochrome dark: no hue, no gradients, no glow.
- Geist for all text; Geist Mono only for dates.
- One date-column grid shared by experience, education, certificates, and skills.
- Flat: no shadows and no cards. One hairline grid box, the hero contact block, is the only bordered structure.
- Technologies as middot-separated text, never pills or badges.

## Colors

A neutral, very slightly cool grey scale on a near-black ground; nothing carries hue.

### Primary
- **Off-White Ink** (#ededef): Names, headings, role titles, employer names, the primary button fill, and the focus ring. The highest-emphasis colour on the page.

### Neutral
- **Near-Black Ground** (#0e0e10): The page background and the text colour on the primary button.
- **Raised Charcoal** (#19191c): The only fill besides the ground; used for the secondary button hover. Not a surface for cards.
- **Grid Line** (#34343a): Edges of the hairline grid box (outer border and the 1px seams between cells). Slightly stronger than Rule so the structure reads at a glance.
- **Mid-Grey Ink** (#a0a0a8): Default body text, dates, technology lists, and text links at rest.
- **Dim Grey Ink** (#6e6e76): Quiet marks only: middot and dash separators, the chevron on collapsed roles, link underlines, and the secondary button border.
- **Hairline Rule** (#26262a): The one divider, the border above the footer.

### Named Rules
**The No Hue Rule.** Every colour is a neutral grey. Do not add an accent colour, a tinted link, or a coloured status mark. Emphasis is ink level (ink, ink-2, ink-3) and weight.

**The Three Inks Rule.** Text uses only ink (#ededef) for primary content, ink-2 (#a0a0a8) for secondary content, and ink-3 (#6e6e76) for separators and marks. Do not use ink-3 for readable text.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist (with ui-sans-serif, system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (with ui-monospace, monospace)

**Character:** One neutral grotesque used for everything, with stylistic sets ss01 and cv11 on the body. The monospace appears only where figures must align.

### Hierarchy
- **Display** (600, 3.5rem / 56px, line-height 1.05, tracking -0.035em): The name in the header from 640px up. 2.75rem (44px) below 640px.
- **Heading** (600, 1.375rem / 22px, line-height 1.3, tracking -0.02em): Section titles (Experience, Skills, Education & Certification).
- **Title** (600, 1.25rem / 20px, line-height 28px, tracking -0.01em): Employer names. The role line under the name uses the same 20px at regular weight.
- **Body** (400, 1.0625rem / 17px, line-height 28px): Summary, role bullets, education text. Summary is capped at 60ch. Role titles use body at weight 500 in ink.
- **Small** (400, 0.9375rem / 15px, line-height 28px): Technology lists, skill category labels, buttons (weight 500), text links, footer.
- **Meta** (400, 0.8125rem / 13px, line-height 28px, Geist Mono, tabular figures): Dates in the label column.

### Named Rules
**The Mono Is For Dates Rule.** Geist Mono is used only for dates and periods in the label column. Do not use it for labels, tags, headings, or decoration. Non-date labels in the column (skill categories) switch back to Geist at the small size.

**The Weight Not Size Rule.** Within a section, separate levels with weight (400, 500, 600) and ink level, not with extra sizes. Do not add sizes outside the scale.

## Layout

One centred column, max 768px wide (48rem) with 24px side padding, so content is 720px wide. Content is left-aligned. The header starts 80px from the top (128px from 640px up).

From 768px (md) up, every dated item uses one grid: a 176px label column (11rem), a 32px gap, then the content column. Below 768px the label stacks above the content with a 4px gap. Dates do not wrap in the column at md and up.

Vertical rhythm: 96px between sections on mobile, 128px from md up; 40px under a section heading; 64px between employers; 32px between roles and between education entries; 20px between skill rows; 12px between certificates. The footer is 112px below the last section.

### Named Rules
**The One Date Column Rule.** Experience, education, certificates, and skills all use the same Row grid (176px label, 32px gap). Do not make a second grid or move dates to the right.

## Elevation & Depth

The system is flat. There are no shadows, no gradients, and no layered surfaces. Depth and grouping come from spacing and ink level. The only lines are the footer hairline (#26262a), the secondary button border (#6e6e76), and the hairline grid box in the header (#34343a).

### Named Rules
**The Hairline Grid Rule.** Boxes are hairline grids, never cards: one 1px Grid Line border, 6px outer corners, no fill, no shadow, and cells that share 1px seams (a `gap-px` grid on a Grid Line background, each cell on the ground). Today only the hero contact block is boxed; other sections group with whitespace and the date column.

## Shapes

Shapes are almost absent. The two buttons have a gentle 8px radius and the hero contact box a tighter 6px; everything else is unboxed text. Separators are typographic: a middot (·) between technologies and an en dash (–) before each role bullet, both in ink-3. Collapsed roles show a 16px chevron that rotates 90° when open.

## Components

### Buttons
Quiet and solid; only two, in the bottom cell of the hero contact box.
- **Shape:** Gently curved (8px radius), 44px tall, 20px horizontal padding, 16px icon with an 8px gap, 15px weight 500 text.
- **Primary:** Off-white fill (#ededef) with near-black text (#0e0e10). Hover: pure white (#ffffff).
- **Secondary:** Transparent with a 1px dim-grey border (#6e6e76) and off-white text. Hover: border to #a0a0a8 and fill to Raised Charcoal (#19191c).
- **Active:** Both move down 1px.
- **Focus:** The global focus ring: 2px solid #ededef, 3px offset.

### Hero Contact Box
A hairline grid under the summary. Top cell (full width): "Currently" with the current role, employer, and start date, derived from the first entry in `experience.ts`. Middle row: Email, GitHub, LinkedIn cells, three across from 768px; on phones Email takes a full row and GitHub/LinkedIn pair up. Each cell is a `dt` label (15px, ink-2) over a `dd` value (17px, ink) that is a text link. Bottom cell: the two buttons. Cell padding 16px × 20px.

### Text Links
- **Style:** 15px, ink-2, underlined in ink-3 with a 4px offset, 10px vertical padding for touch targets.
- **Hover:** Text to ink, underline to ink-2.

### Row (date label + content)
The signature layout unit. A mono 13px date in ink-2 with tabular figures in the 176px column, content beside it. See Layout.

### Tech List
- **Style:** Technologies as an inline list of plain text at 15px, separated by an ink-3 middot. A separator that would start a line is clipped into the left gutter, so lines never begin with a dot. Ink is set by the caller: ink in Skills, ink-2 under roles and the thesis.

### Collapsible Role
- **Current role:** Always open; title in ink, weight 500.
- **Earlier roles:** A native `details` element. The summary is the role title plus a trailing ink-3 chevron that turns ink-2 on hover and rotates 90° when open. Details: dash bullets in body text, then the tech list.

### Section Heading
- 22px weight 600 in ink, -0.02em tracking, 40px above the content. No eyebrow, no number, no rule.

### Motion
- The header settles in once: opacity 0 and 8px down to rest over 0.6s with cubic-bezier(0.25, 1, 0.5, 1). It is removed under prefers-reduced-motion. Other motion is short colour transitions and the chevron rotation.

## Do's and Don'ts

### Do:
- **Do** keep every colour in the seven-token grey scale (#0e0e10, #19191c, #ededef, #a0a0a8, #6e6e76, #26262a, #34343a).
- **Do** put every dated item in the Row grid with a 176px label column from 768px up.
- **Do** write technologies as plain text separated by middots.
- **Do** use Geist Mono only for dates.
- **Do** use the global focus ring (2px solid #ededef, 3px offset) for every interactive element.
- **Do** keep content to real facts from `src/data/`.

### Don't:
- **Don't** add an accent hue, gradient, or glow.
- **Don't** show technologies or skills as pills, badges, or chips.
- **Don't** use cards, tinted panels, or box-shadow. Structure that needs a box uses the hairline grid.
- **Don't** add more than the two header buttons; other actions are text links.
- **Don't** add entrance animation beyond the header settle.
