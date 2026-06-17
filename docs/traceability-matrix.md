# Requirements Traceability Matrix — CV Portfolio

Links features to manual test cases, automation, and defects. Use this for release reviews and interview walkthroughs.

| Feature / requirement | Manual TC | Robot | Postman | Bug(s) | Status |
|----------------------|-----------|-------|---------|--------|--------|
| Home page loads | TC-001 | ✅ | — | — | Covered |
| Main navigation visible | TC-002 | ✅ | — | — | Covered |
| About section | TC-003 | — | — | — | Manual only |
| Skills section | TC-004 | — | — | — | Manual only |
| Projects section | TC-005 | ✅ | — | — | Covered |
| QA portfolio section | TC-006 | ✅ | — | — | Covered |
| CV download & LinkedIn | TC-007 | ✅ | — | BUG-003 | Placeholder PDF |
| Contact form — valid submit | TC-008 | ✅ | ✅ #1 | — | Covered |
| Contact form — empty fields | TC-009 | ✅ | ✅ #2–5 | BUG-001 (fixed) | Covered |
| Contact form — invalid email | TC-010 | ✅ | ✅ #4 | BUG-001 (fixed) | Covered |
| Contact form — short message | TC-011 | — | ✅ #6 | — | API covered |
| Language toggle (EN / FI) | TC-012 | ✅ | — | — | Covered |
| Mobile layout / menu | TC-013 | ✅ (menu) | — | BUG-002 (fixed) | Partial |
| Keyboard / theme / a11y | TC-014 | ✅ (theme) | — | BUG-004/005 (fixed) | Partial |
| External project links | TC-015 | — | — | — | Manual only |
| API — malformed JSON | — | — | ✅ #7 | — | Covered |
| Accessibility (WCAG 2.1 AA) | TC-014 | — | — | A11Y-001–005 | Fixed in code |
| Load / performance baseline | — | — | — | — | JMeter plan only |

**Legend:** ✅ = automated smoke coverage · — = not automated · Partial = manual + limited automation

**CI pipeline:** `.github/workflows/qa-tests.yml` runs lint, build, Postman (7 requests), Robot (16 tests).

**Related:** `docs/test-cases.md` · `docs/bug-reports.md` · `tests/robot/portfolio.robot`
