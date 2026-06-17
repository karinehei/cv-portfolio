# Accessibility Findings Log — CV Portfolio

| Field | Value |
|-------|-------|
| **Project** | CV Portfolio |
| **Standard** | WCAG 2.1 Level AA (target) |
| **Last updated** | 2025-06-17 |
| **Tester** | _Your name_ |

Use this template to log accessibility defects the same way as functional bugs — suitable for QA portfolio and interview discussion.

## Severity guide

| Severity | Description |
|----------|-------------|
| **Critical** | Blocks task completion for assistive technology users |
| **High** | Major barrier; WCAG AA failure on core flow |
| **Medium** | Noticeable issue; workaround may exist |
| **Low** | Minor; best practice or enhancement |

## Status values

`Open` · `In Progress` · `Fixed` · `Won't Fix` · `Deferred`

---

## Finding template (copy for new issues)

| Field | Value |
|-------|-------|
| **ID** | A11Y-XXX |
| **Title** | _Short description_ |
| **Severity** | Critical / High / Medium / Low |
| **Tool** | Lighthouse / Axe / WAVE / Manual |
| **WCAG** | _e.g. 2.4.4 Link Purpose (In Context)_ |
| **Steps to reproduce** | 1. … 2. … |
| **Actual result** | _What happens_ |
| **Expected result** | _What should happen_ |
| **Suggested fix** | _Developer guidance_ |
| **Status** | Open |

---

## Example findings (portfolio samples)

The following are **example findings** for documentation and interview practice. Some illustrate common issues to test for; verify against your current build and replace with real scan results.

---

### A11Y-001 — Missing `aria-label` for mobile menu button

| Field | Value |
|-------|-------|
| **ID** | A11Y-001 |
| **Title** | Mobile navigation menu button has no accessible name |
| **Severity** | High |
| **Tool** | Manual / Axe (`button-name`) |
| **WCAG** | 4.1.2 Name, Role, Value (Level A) |

**Steps to reproduce**
1. Open the site at viewport width 375px.
2. Locate the mobile menu toggle (hamburger icon) in the header.
3. Inspect with axe or a screen reader (NVDA / VoiceOver).

**Actual result**  
The menu control is exposed as a button with no text or `aria-label`. Screen reader announces “button” only.

**Expected result**  
The control has a descriptive accessible name, e.g. `aria-label="Open main menu"` (and `aria-expanded` state when implemented).

**Suggested fix**  
Add `aria-label="Open main menu"` and `aria-expanded="false"` to the toggle; update label when menu opens/closes. Consider `aria-controls` pointing to the nav panel id.

**Status** | **Fixed** — `Header.tsx` implements menu toggle with `aria-label`, `aria-expanded`, and `aria-controls="main-navigation-menu"`. See `accessibility-improvements.md`.

---

### A11Y-002 — Low contrast on secondary button

| Field | Value |
|-------|-------|
| **ID** | A11Y-002 |
| **Title** | Secondary button text fails color contrast ratio |
| **Severity** | High |
| **Tool** | Lighthouse (`color-contrast`) / WAVE (Contrast Error) |
| **WCAG** | 1.4.3 Contrast (Minimum) (Level AA) |

**Steps to reproduce**
1. Open `http://localhost:3000`.
2. Locate secondary buttons (e.g. “Contact me” in hero, “LinkedIn” in CV section).
3. Run Lighthouse accessibility audit or WAVE contrast check.
4. Repeat in dark mode.

**Actual result**  
Text on `.btn-secondary` against background measures below 4.5:1 in one or both themes (example: ~3.8:1).

**Expected result**  
Normal text meets at least **4.5:1** contrast against adjacent background in light and dark mode.

**Suggested fix**  
Darken link/text color or lighten button background in `globals.css`; verify with contrast checker after theme variables update.

**Status** | **Fixed** — secondary button colors and borders updated in `globals.css` for ≥ 4.5:1 in light and dark themes. Re-scan to confirm.

---

### A11Y-003 — Form input missing associated label

| Field | Value |
|-------|-------|
| **ID** | A11Y-003 |
| **Title** | Contact field not programmatically associated with its label |
| **Severity** | High |
| **Tool** | Axe (`label`) / WAVE (Missing form label) |
| **WCAG** | 1.3.1 Info and Relationships (Level A); 3.3.2 Labels or Instructions |

**Steps to reproduce**
1. Navigate to `#contact`.
2. Inspect the email input in DevTools.
3. Run axe on the contact form.

**Actual result**  
_(Example scenario)_ Input is rendered without a matching `id`/`for` pair or `aria-labelledby`, so the accessible name is missing.

**Expected result**  
Each field has a visible `<label for="...">` matching the input `id`, or equivalent `aria-label` / `aria-labelledby`.

**Suggested fix**  
Ensure `label htmlFor` matches input `id` (current implementation uses `contact-name`, `contact-email`, `contact-message` — re-scan to confirm pass).

**Status** | Fixed _(example — current ContactForm uses proper labels; keep as before/after story)_

---

### A11Y-004 — Heading order issue

| Field | Value |
|-------|-------|
| **ID** | A11Y-004 |
| **Title** | Heading levels skip (h1 followed by h3) |
| **Severity** | Medium |
| **Tool** | Axe (`heading-order`) / WAVE (Structural Elements) |
| **WCAG** | 1.3.1 Info and Relationships (Level A); 2.4.6 Headings and Labels |

**Steps to reproduce**
1. Open the home page.
2. Run axe or view heading outline in WAVE / HeadingsMap extension.
3. Review order from hero through Skills and Projects sections.

**Actual result**  
_(Example)_ Page has `h1` in hero, then section titles use `h2`, but card titles use `h3` without an `h2` parent in the same section — or a section jumps from `h2` to `h4`.

**Expected result**  
Headings descend logically: one `h1`, section titles as `h2`, subsections as `h3` without skipping levels.

**Suggested fix**  
Audit `section-title` (h2) and card headings (h3) in section components; align hierarchy in `Skills.tsx`, `Projects.tsx`, etc.

**Status** | **Fixed** — outline is `h1` → `h2` (sections) → `h3` (cards). QA artefact cards now use label as `h3` instead of file path. Verify with axe `heading-order`.

---

### A11Y-005 — Link text not descriptive enough

| Field | Value |
|-------|-------|
| **ID** | A11Y-005 |
| **Title** | Generic link text does not describe destination |
| **Severity** | Medium |
| **Tool** | Manual / WAVE (Suspicious link text) |
| **WCAG** | 2.4.4 Link Purpose (In Context) (Level A) |

**Steps to reproduce**
1. Open the portfolio home page.
2. Review links out of context (e.g. in a link list or screen reader links rotor).
3. Check CV section and footer links.

**Actual result**  
_(Example)_ A link displays only “LinkedIn” or “Download” without indicating whose CV or profile — ambiguous when read alone.

**Expected result**  
Link text describes purpose, e.g. “Download CV (PDF)” or “LinkedIn profile — [Your name]”. Current CV section uses “Download CV (PDF)” which is acceptable; improve if shortened elsewhere.

**Suggested fix**  
Use descriptive visible text or `aria-label` that includes context; avoid duplicate “read more” without section context.

**Status** | **Fixed** — CV uses “Download CV (PDF)” and “LinkedIn profile” with `aria-label` for new-tab context. Logo uses `aria-label="QA Portfolio — return to home"`.

---

## Summary table

| ID | Title | Severity | Tool | Status |
|----|-------|----------|------|--------|
| A11Y-001 | Missing aria-label for mobile menu | High | Axe / Manual | Fixed |
| A11Y-002 | Low contrast on secondary button | High | Lighthouse / WAVE | Fixed |
| A11Y-003 | Form input missing associated label | High | Axe / WAVE | Fixed |
| A11Y-004 | Heading order issue | Medium | Axe / WAVE | Fixed |
| A11Y-005 | Link text not descriptive enough | Medium | Manual / WAVE | Fixed |

## Next steps

1. Run real Lighthouse, Axe, and WAVE scans.
2. Replace example results with actual pass/fail data.
3. Copy open findings to `docs/bug-reports/` if using separate bug tracking.
4. Update `docs/test-summary-report.md` with accessibility section and sign-off.

---

_This log demonstrates structured a11y defect reporting for QA job applications._
