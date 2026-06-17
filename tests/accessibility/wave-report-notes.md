# WAVE Report — Notes

| Field | Value |
|-------|-------|
| **URL tested** | `http://localhost:3000` |
| **Date** | _YYYY-MM-DD_ |
| **Tester** | _Your name_ |
| **Tool** | [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/extension/) (browser extension) |
| **Standard** | WCAG-oriented visual feedback |

## How to run

1. Install the WAVE extension for Chrome or Firefox.
2. Navigate to `http://localhost:3000`.
3. Click the WAVE icon to activate evaluation.
4. Review the page overlay:
   - **Errors** (red) — likely accessibility failures
   - **Alerts** (yellow) — manual review needed
   - **Features** (green) — accessibility features detected
   - **Structural elements** — headings, landmarks, forms
5. Open the **Details** panel for issue descriptions and WCAG references.
6. Copy summary into this file or `reports/wave-report.txt`.

**Repeat for**
- Contact section (`#contact`)
- Dark mode (toggle theme, re-run WAVE)
- Mobile viewport (375px width)

## WAVE categories explained

| Category | QA action |
|----------|-----------|
| **Errors** | Log as findings; prioritise by user impact |
| **Alerts** | Investigate — may be false positive or real issue |
| **Features** | Verify they are correct (e.g. `alt` present, labels associated) |
| **Contrast** | Cross-check with Lighthouse / axe |

## Results summary (fill after scan)

| Category | Count |
|----------|-------|
| Errors | _e.g. 2_ |
| Alerts | _e.g. 4_ |
| Features | _e.g. 12_ |
| Contrast errors | _e.g. 1_ |

## Issues log

| WAVE message | Type | Location | Finding ID | Status |
|--------------|------|----------|------------|--------|
| _Contrast error_ | Error | Secondary button | A11Y-002 | Open |
| _Suspicious link text_ | Alert | _example link_ | A11Y-005 | Open |
| _Missing form label_ | Error | _example field_ | A11Y-003 | Open |

## What WAVE adds beyond Lighthouse / axe

- **Visual overlay** on the page — useful for demos and stakeholder reports
- **Structural view** — quick heading and landmark map
- **Alert vs error distinction** — encourages manual judgement
- Good for **portfolio screenshots** in QA job applications

## Export results

1. WAVE **Details** tab → note errors and alerts manually, or  
2. Copy summary to `reports/wave-report.txt`:

```text
WAVE Summary — CV Portfolio
Date: YYYY-MM-DD
URL: http://localhost:3000

Errors:   2
Alerts:   4
Features: 12

[List each error/alert with element and WAVE description]
```

3. Reference finding IDs in `accessibility-findings-template.md`.

## Related files

- Raw summary: `reports/wave-report.txt`
- Findings: `accessibility-findings-template.md`
- Test plan: `accessibility-test-plan.md`

---

_Placeholder — WAVE is manual-export friendly; paste your real summary after scanning._
