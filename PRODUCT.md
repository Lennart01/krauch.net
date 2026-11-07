# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: recruiters and hiring managers who arrive from an application or a LinkedIn link and skim to decide whether to interview Lennart. Secondary: technical interviewers who want depth on the actual engineering work (Kubernetes operators, DBaaS platform, infrastructure, the CO2 thesis).

## Product Purpose
Personal CV website for Lennart Krauch, Cloud Platform / Kubernetes Engineer. It accompanies job applications. Success is a strong, credible impression; there is no single conversion action. Contact (email, LinkedIn, GitHub) and the PDF CV stay available but none is the goal.

## Positioning
A real engineer's record, not a template: Cloud Platform Engineer at inovex GmbH building a Kubernetes-based DBaaS (Postgres, SQL Server, MongoDB) with in-house Go operators, preceded by working-student infra work for scrumlr.io and a B.Sc. thesis on measuring and optimizing CO2 emissions of a Kubernetes application.

## Operating Context
Opened from applications, emails, and LinkedIn, often on a laptop during screening and on phones. A recruiter reads in seconds; an engineer may read every bullet.

## Capabilities and Constraints
- Next.js 16 (App Router), React 19, Tailwind CSS 4, lucide-react; statically exported and deployed to GitHub Pages via `.github/workflows/nextjs.yml`.
- Content lives in typed data files in `src/data/` (personal info, experience, education, certificates, skills); edit data there, not in components.
- English only.

## Brand Commitments
Name: Lennart Krauch. Title: Cloud Platform / Kubernetes Engineer. Contacts: GitHub `Lennart01`, email `Lennart@krauch.net`, LinkedIn `lennart-krauch`.

Standing visual preference (chosen 2026-11-05 over novel concept worlds): the category standard for a personal engineer CV site, executed at full craft. Clean, minimal, dark. No novelty concept, no costume; quality comes from type, spacing, and restraint.

## Evidence on Hand
- Experience, education, certificates (LFS458 Kubernetes Administration, Scrum Foundations), skills: `src/data/`.
- PDF CV: `public/lennart-krauch-cv.pdf`.
- No testimonials, metrics, project screenshots, or portrait exist; do not fabricate any.

## Product Principles
1. Recruiter skim first: role, current employer, and core stack readable in seconds.
2. Depth on demand for engineers without slowing the skim.
3. Factual only: every claim traces to `src/data/` or the PDF.
4. The site itself is a quiet proof of engineering care: fast, static, accessible, correct on mobile.
