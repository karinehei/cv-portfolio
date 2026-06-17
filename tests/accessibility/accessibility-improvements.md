# Accessibility Improvements — CV Portfolio

This document records accessibility enhancements applied to the live site. Use it alongside `accessibility-findings-template.md` for before/after QA evidence.

**Target:** WCAG 2.1 Level AA  
**Last updated:** 2025-06-17

---

## Summary

| Area | Improvement |
|------|-------------|
| Bypass blocks | Skip link to `#main-content` |
| Document language | `lang="en"` on `<html>` |
| Landmarks | `<header>`, `<main id="main-content">`, `<footer>`, `<nav aria-label>` |
| Heading hierarchy | One `h1` (hero), section titles `h2`, card titles `h3` |
| Mobile navigation | Hamburger menu with `aria-expanded`, `aria-controls`, keyboard Escape |
| Form labels | Visible labels with `htmlFor` / `id` on all contact fields |
| Form validation | `aria-invalid`, `aria-describedby`, `role="alert"` on errors |
| Error announcement | `aria-live="polite"` region + focus moves to first invalid field |
| Buttons | Descriptive `aria-label` on theme, language, and menu toggles |
| Links | Descriptive CV and LinkedIn link text |
| Color contrast | Darker text, stronger borders on secondary buttons |
| Focus visible | `:focus-visible` outline on links, buttons, and form controls |
| Motion | `prefers-reduced-motion` disables smooth scroll |

---

## Implementation notes

### Skip link (`src/components/SkipLink.tsx`)

- First focusable element in the tab order.
- Hidden off-screen until focused, then jumps to main content.
- `main` has `tabIndex={-1}` so programmatic focus works after activation.

### Mobile menu (`src/components/Header.tsx`)

- Menu button visible below 900px viewport width.
- `aria-label` toggles between “Open main menu” and “Close main menu”.
- `aria-expanded` reflects open/closed state.
- `aria-controls="main-navigation-menu"` links button to nav panel.
- Escape key and link click close the menu; resize to desktop closes automatically.

### Contact form (`src/components/ContactForm.tsx`)

- Required fields marked with visible `*` and screen-reader “(required)”.
- Invalid fields set `aria-invalid="true"` and reference error elements via `aria-describedby`.
- Message field always references hint text via `aria-describedby`.
- Screen reader announcer (`#contact-form-announcer`) reports error count and submit status.
- Focus moves to the first invalid field after client-side validation.

### Color and focus (`src/app/globals.css`)

- Muted text and button borders adjusted for ≥ 4.5:1 contrast in light and dark themes.
- Secondary buttons use solid surface background and 2px border.
- Global `:focus-visible` ring (3px accent outline, 2px offset).
- Invalid inputs get a red border matching error text color.

### Headings (`src/components/sections/QaTesting.tsx`)

- QA artefact cards use human-readable titles (`h3`) with file paths in `<code>` below — avoids code paths as headings.

### CV section (`src/components/sections/CvDownload.tsx`)

- LinkedIn link text changed to “LinkedIn profile” with `aria-label` noting new tab.

---

## Verification

Re-run after changes:

```bash
npm run dev

# Lighthouse (accessibility score + audits)
npx lighthouse http://localhost:3000 --only-categories=accessibility \
  --output=json --output-path=tests/accessibility/reports/lighthouse-report.json

# Axe CLI
npx @axe-core/cli http://localhost:3000 \
  --save tests/accessibility/reports/axe-report.json

# WAVE — browser extension at http://localhost:3000
```

Manual checks: keyboard-only navigation, screen reader (NVDA / VoiceOver), 375px mobile viewport.

---

## Related files

- Findings log: `accessibility-findings-template.md`
- Test plan: `accessibility-test-plan.md`
- Tool notes: `lighthouse-report-notes.md`, `axe-report-notes.md`, `wave-report-notes.md`
