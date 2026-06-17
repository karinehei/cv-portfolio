# Accessibility Test Plan — CV Portfolio

| Field | Value |
|-------|-------|
| **Project** | CV Portfolio (QA-focused) |
| **Standard** | WCAG 2.1 Level AA (target) |
| **Author** | _Your name_ |
| **Date** | _YYYY-MM-DD_ |
| **Status** | Draft / example for QA portfolio |

## 1. Purpose

Define how accessibility (a11y) is tested for the CV portfolio website. This plan supports job applications for software tester / QA roles by showing structured manual checks, automated tooling, and documented findings.

## 2. Scope

**In scope**
- Home page and all single-page sections (About, Skills, QA Portfolio, Projects, CV, Contact)
- Navigation, theme toggle, language toggle placeholder
- Contact form (labels, errors, keyboard, focus)
- Responsive layout (mobile, tablet, desktop)
- Automated scans: Lighthouse, Axe, WAVE

**Out of scope (initial cycle)**
- Full screen reader certification (informal checks only)
- Third-party embeds (e.g. LinkedIn) beyond link text review
- PDF accessibility of `public/cv.pdf`

## 3. Test environment

| Item | Value |
|------|-------|
| URL | `http://localhost:3000` (or deployed URL) |
| Browsers | Chrome (latest), Firefox (latest), Edge (latest) |
| Viewports | 375×667 (mobile), 768×1024 (tablet), 1280×800 (desktop) |
| Tools | Lighthouse, Axe DevTools / CLI, WAVE extension |

## 4. What to test and how

### 4.1 Page structure and headings

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Single `h1` on page | DOM / axe | One main page title |
| Logical heading order | Manual + axe | No skipped levels (e.g. h1 → h3) |
| Landmark regions | axe / WAVE | `main`, `header`, `nav`, `footer` present |
| Section headings match content | Manual | Each section has visible heading |

**How:** Inspect DOM or use axe “Structure” rules; tab through page and verify screen reader order.

### 4.2 Keyboard navigation

| Check | Method | Pass criteria |
|-------|--------|---------------|
| All interactive elements reachable | Manual (Tab / Shift+Tab) | No keyboard traps |
| Skip to main content | Manual | Focus moves logically from header to content |
| Form submittable via keyboard | Manual | Enter on submit; fields focusable |
| Theme / language toggles | Manual | Activatable with Enter/Space |

**How:** Unplug mouse; navigate entire page with keyboard only.

### 4.3 Focus indicators

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Visible focus on links/buttons | Manual | Clear outline or ring on `:focus-visible` |
| Focus not removed | CSS review | No `outline: none` without replacement |
| Focus order matches visual order | Manual | Logical tab sequence |

**How:** Tab through nav, CTAs, form, toggles; verify focus is always visible.

### 4.4 Form labels

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Every input has associated label | Manual + axe | `label[for]` matches `id` or `aria-labelledby` |
| Required fields announced | Manual / SR | `aria-required` or visible “required” |
| Hint text associated | Manual | `aria-describedby` for hints/errors |

**How:** Review contact form; run axe on `#contact`.

### 4.5 Error messages

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Errors linked to fields | Manual + axe | `aria-invalid`, `aria-describedby` on errors |
| Errors announced | Manual | `role="alert"` or `role="status"` where appropriate |
| Clear, specific text | Manual | User understands how to fix input |

**How:** Submit empty form and invalid email; verify error association.

### 4.6 Color contrast

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Text vs background | Lighthouse / axe / WAVE | WCAG AA: 4.5:1 normal text, 3:1 large text |
| UI components | axe | Buttons, links, tags meet contrast |
| Dark mode | Repeat scans | Contrast holds in both themes |

**How:** Run Lighthouse accessibility audit; spot-check secondary buttons and muted text.

### 4.7 ARIA labels

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Icon-only controls | Manual + axe | `aria-label` on theme toggle, language toggle |
| Navigation | Manual | `nav` has accessible name |
| No redundant ARIA | axe | Prefer native HTML where possible |

**How:** Inspect toggles and nav; fix missing or duplicate labels.

### 4.8 Link text clarity

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Descriptive link purpose | Manual + WAVE | Avoid “click here”, “read more” without context |
| External links | Manual | `rel="noopener noreferrer"` where applicable |
| CV / LinkedIn links | Manual | Purpose clear from link text |

**How:** Review all links on page; read link text out of context.

### 4.9 Mobile responsiveness

| Check | Method | Pass criteria |
|-------|--------|---------------|
| No horizontal scroll | Manual | Content fits viewport at 375px |
| Touch targets | Manual | Adequate size and spacing (min ~44×44px target) |
| Nav usable on small screens | Manual | All sections reachable |
| Text readable without zoom | Manual | No truncation of critical content |

**How:** Chrome DevTools device mode; test portrait mobile.

### 4.10 Lighthouse accessibility score

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Overall score | Lighthouse CLI / DevTools | Target ≥ 90 (example); document actual |
| Failed audits | Review report | Each item triaged or logged |

**How:** See `lighthouse-report-notes.md`.

### 4.11 Axe DevTools findings

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Critical / serious issues | Axe extension or CLI | Zero unresolved critical |
| Moderate / minor | Triage | Logged with severity and status |

**How:** See `axe-report-notes.md`.

### 4.12 WAVE findings

| Check | Method | Pass criteria |
|-------|--------|---------------|
| Errors | WAVE extension | Document and prioritise |
| Alerts / features | Review | Alerts investigated; features correct |

**How:** See `wave-report-notes.md`.

## 5. Test execution workflow

1. Start app: `npm run dev`
2. Run automated scans (Lighthouse, Axe CLI, WAVE)
3. Save raw outputs to `tests/accessibility/reports/` (gitignored)
4. Summarise in `*-report-notes.md` files
5. Perform manual keyboard, focus, and responsive checks
6. Log defects in `accessibility-findings-template.md` (or copy to `docs/bug-reports/`)
7. Update `docs/test-summary-report.md` with a11y results

## 6. Entry / exit criteria

**Entry**
- Application reachable at test URL
- Contact form functional
- Tools installed (browser extensions or CLI)

**Exit**
- All planned manual checks executed
- Lighthouse, Axe, WAVE runs completed
- Findings documented with severity and status
- Critical/High issues resolved or accepted with rationale

## 7. Deliverables

| Deliverable | Location |
|-------------|----------|
| Test plan | `accessibility-test-plan.md` (this file) |
| Lighthouse notes | `lighthouse-report-notes.md` |
| Axe notes | `axe-report-notes.md` |
| WAVE notes | `wave-report-notes.md` |
| Findings log | `accessibility-findings-template.md` |
| Raw reports | `reports/` |

## 8. Traceability

| Manual area | Example automated rule |
|-------------|------------------------|
| Form labels | axe: `label`, `aria-input-field-name` |
| Color contrast | Lighthouse: `color-contrast` |
| Heading order | axe: `heading-order` |
| Link text | WAVE: redundant link / suspicious link text |

## 9. QA portfolio talking points

- *“I test accessibility at multiple layers: automated scans plus manual keyboard and screen reader checks.”*
- *“Findings are logged with severity, WCAG impact, reproduction steps, and fix status — same as functional bugs.”*
- *“This portfolio includes Lighthouse, Axe, and WAVE artefacts alongside UI and API tests.”*

---

_Customise dates, scores, and findings after running real scans on your build._
