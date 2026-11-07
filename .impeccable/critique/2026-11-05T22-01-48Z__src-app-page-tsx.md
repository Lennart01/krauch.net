---
target: src/app/page.tsx
total_score: 15
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/lkrauch/privat/bewerbung/cv-website/src/app/page.tsx"
target_fingerprint: "sha256:85cbec18520477e7ac4ae24024375906166a31b06ffe75ee233b284761b761fd"
target_path: /Users/lkrauch/privat/bewerbung/cv-website/src/app/page.tsx
timestamp: 2026-11-05T22-01-48Z
slug: src-app-page-tsx
closed: true
---
Method: dual-agent (A: AssessA · B: AssessB)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Non-clickable cards lift on hover; "Download CV" has no format hint |
| 2 | Match System / Real World | 3 | Bachelor Thesis listed as a job; "Webservers & LB", "DBAAS" shorthand |
| 3 | User Control and Freedom | 3 | No section jumps on 6276px mobile page; header/footer link target mismatch |
| 4 | Consistency and Standards | 2 | Card swallows layout classes; "&" vs "/" title; hardcoded education drifts from data |
| 5 | Error Prevention | n/a | No inputs |
| 6 | Recognition Rather Than Recall | 2 | Email never visible; tenure must be summed from 5 cards |
| 7 | Flexibility and Efficiency | n/a | Experience/Persuade surface |
| 8 | Aesthetic and Minimalist Design | 2 | 60 badges, equal-weight cards, thesis shown twice |
| 9 | Error Recovery | n/a | No error states |
| 10 | Help and Documentation | n/a | Experience/Persuade surface |
| **Total** | | **15/24** | **Acceptable** |

## Design Specificity Verdict
LLM: category-interchangeable dark Tailwind dev portfolio; timeline is the only signature and its date column wraps (4/5 dates on two lines at 1440px). Hero copy generic, "distributed systems observability" unsupported by data.
Detector: exit 2, 2 warnings in src/app/page.tsx: gradient-text (L19), ai-color-palette (L22). Overlay added straggler on intro paragraph (desktop only). No overflow at 1365px or 390px.

## Priority Issues
1. [P1] Hero fails recruiter skim: no employer/stack above fold; unsupported claim; title not from data. → clarify
2. [P1] Card wrapper swallows layout classes: Education card broken (grad-cap tile stretches 676px), mt-auto/h-full dead in Skills and Timeline. → layout
3. [P1] Credentials missing, data bypassed: certificates.ts unused (LFS458 absent); name/title/education hardcoded. → clarify
4. [P2] Experience/Skills flat: inovex x5, wrapping dates, thesis twice, padded skills (Dev Tools, concept tags). → distill, layout
5. [P2] A11y: no reduced-motion (content starts opacity 0), footer zinc-500 ~4.1:1, 20px icon targets, default focus ring, skewed heading levels, gradient name. → harden

## Persona Red Flags
Recruiter Miriam: no employer in first mobile viewport; sums 5 inovex ranges; no visible email; LFS458 missing.
Interviewer Jonas: thesis has least depth; unused-cloud skills invite probing; broken Education card.
Casey (mobile): no section jumps; 20px icons; footer lacks email/CV.

## Minor Observations
bg-blue-900/10 glow breaks One Signal Rule; hover lift on inert cards; decorative calendar icons; build-time copyright year; PDF href may ignore Pages basePath [INFERENCE]; no OG tags; copy nits (SQLServer, Bachelors of Science); dead Geist fonts, Button.tsx, SkillCard.tsx.

## Questions to Consider
- What if the hero were a ledger: role, employer, stack, degree, certification rows?
- Is Experience five jobs or one progression at inovex?
- Does the skills grid earn its place when every real skill appears on a role?
