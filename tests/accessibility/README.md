# Accessibility Testing

Structured accessibility (a11y) testing for the CV portfolio — manual checks, automated tools, and documented findings for QA portfolio evidence.

**Target standard:** WCAG 2.1 Level AA

## Documentation

| File | Purpose |
|------|---------|
| [`accessibility-test-plan.md`](accessibility-test-plan.md) | Full test plan — what to test and how |
| [`lighthouse-report-notes.md`](lighthouse-report-notes.md) | Lighthouse setup, metrics, failed audits |
| [`axe-report-notes.md`](axe-report-notes.md) | Axe DevTools / CLI workflow and triage |
| [`wave-report-notes.md`](wave-report-notes.md) | WAVE extension workflow and export |
| [`accessibility-findings-template.md`](accessibility-findings-template.md) | Findings log with example defects |
| [`accessibility-improvements.md`](accessibility-improvements.md) | Implemented a11y enhancements on the site |

## What we test

- Page structure and headings  
- Keyboard navigation and focus indicators  
- Form labels and error messages  
- Color contrast and ARIA labels  
- Link text clarity and mobile responsiveness  
- Automated scores: **Lighthouse**, **Axe**, **WAVE**

## Quick start

```bash
npm run dev

# Lighthouse
npx lighthouse http://localhost:3000 --only-categories=accessibility \
  --output=json --output-path=tests/accessibility/reports/lighthouse-report.json

# Axe CLI
npx @axe-core/cli http://localhost:3000 \
  --save tests/accessibility/reports/axe-report.json

# WAVE — use browser extension; save summary to reports/wave-report.txt
```

Then summarise results in the `*-report-notes.md` files and log issues in `accessibility-findings-template.md`.

## Reports folder

Raw tool output: `reports/` (gitignored JSON/HTML; commit documentation and notes only).

## QA portfolio angle

This folder shows **non-functional accessibility testing** alongside functional UI (Robot), API (Postman), and load (JMeter) tests — the portfolio is validated as a complete product.

## Related

- Test summary: `docs/test-summary-report.md`
- Bug reports: `docs/bug-reports/`
- Main test plan: `docs/test-plan.md`
