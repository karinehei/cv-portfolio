# Lighthouse Accessibility Report — Notes

| Field | Value |
|-------|-------|
| **URL tested** | `http://localhost:3000` |
| **Date** | _YYYY-MM-DD_ |
| **Tester** | _Your name_ |
| **Tool** | Google Lighthouse (Chrome DevTools or CLI) |
| **Mode** | Accessibility category only |

## How to run

### Chrome DevTools

1. Open the portfolio in Chrome.
2. F12 → **Lighthouse** tab.
3. Select **Accessibility** only; choose device (Mobile / Desktop).
4. Click **Analyze page load**.
5. Export JSON or save screenshot of results.

### CLI

```bash
npm run dev

npx lighthouse http://localhost:3000 \
  --only-categories=accessibility \
  --output=json \
  --output-path=tests/accessibility/reports/lighthouse-report.json

# HTML report (optional)
npx lighthouse http://localhost:3000 \
  --only-categories=accessibility \
  --output=html \
  --output-path=tests/accessibility/reports/lighthouse-report.html
```

## What Lighthouse checks (relevant to this project)

| Audit area | Portfolio relevance |
|------------|---------------------|
| **Color contrast** | Body text, nav links, secondary buttons, tags, form hints |
| **Names and labels** | Contact inputs, theme toggle, language toggle |
| **Navigation** | Heading structure, landmark elements |
| **Tables / lists** | Skills lists, project cards (semantic structure) |
| **ARIA** | Valid roles, prohibited attributes |
| **Language** | `html lang="en"` in layout |

## Results summary (fill after scan)

| Metric | Result | Target (example) |
|--------|--------|------------------|
| **Accessibility score** | _e.g. 92_ | ≥ 90 |
| **Passed audits** | _e.g. 18/20_ | — |
| **Failed audits** | _e.g. 2_ | 0 critical |

## Failed audits log

| Audit ID | Description | Element / area | Action |
|----------|-------------|----------------|--------|
| _color-contrast_ | _Example: secondary button text_ | _`.btn-secondary`_ | _See A11Y-002_ |
| _heading-order_ | _Example: skipped level_ | _Projects section_ | _See A11Y-004_ |

## What to record for QA evidence

1. **Score** — single number for test summary report  
2. **Screenshot** or JSON path — proof of execution  
3. **Each failure** — map to finding ID in `accessibility-findings-template.md`  
4. **Environment** — browser version, viewport, light/dark theme tested  
5. **Regression** — re-run after fixes and note score change  

## Interpretation tips

- Lighthouse runs on **initial load** — interact with theme toggle and form, then re-run if needed.
- Test **both light and dark mode**; contrast issues often appear in one theme only.
- A score of 100 is not required; document **known issues and remediation** instead.
- Lighthouse complements but does not replace manual keyboard and screen reader testing.

## Related files

- Raw output: `reports/lighthouse-report.json`
- Findings: `accessibility-findings-template.md`
- Test plan: `accessibility-test-plan.md`

---

_Placeholder — replace with real scan results before interviews or release sign-off._
