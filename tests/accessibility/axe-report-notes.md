# Axe DevTools Report — Notes

| Field | Value |
|-------|-------|
| **URL tested** | `http://localhost:3000` |
| **Date** | _YYYY-MM-DD_ |
| **Tester** | _Your name_ |
| **Tool** | axe DevTools (browser extension) or `@axe-core/cli` |
| **Standard** | WCAG 2.1 AA (axe default tags) |

## How to run

### Browser extension (Deque axe DevTools)

1. Install [axe DevTools](https://www.deque.com/axe/devtools/) for Chrome or Firefox.
2. Open `http://localhost:3000`.
3. Open axe DevTools panel → **Scan ALL of my page**.
4. Review **Issues** by impact: Critical, Serious, Moderate, Minor.
5. Export results (if available) or screenshot the issues list.

**Recommended extra scans**
- Scroll to `#contact` and scan contact form in context.
- Toggle dark mode and scan again.
- Resize to mobile width (375px) and scan.

### CLI

```bash
npm run dev

npx @axe-core/cli http://localhost:3000 \
  --save tests/accessibility/reports/axe-report.json

# Single section (if supported by your CLI version)
npx @axe-core/cli http://localhost:3000/#contact \
  --save tests/accessibility/reports/axe-contact.json
```

### CLI troubleshooting — `cannot find Chrome binary` (WSL / Linux)

`@axe-core/cli` uses Selenium with **Chrome or Chromium**. The error means no browser binary is on your PATH.

**Option A — Reuse Playwright Chromium (if Robot Framework is set up)**

```bash
# One-time: install Browser library Chromium
~/robot-venv/bin/rfbrowser init

# Point axe at Playwright's Chromium
export CHROME_PATH="$(find ~/.cache/ms-playwright -path '*/chrome-linux*/chrome' 2>/dev/null | head -1)"
echo "$CHROME_PATH"   # should print a path, not empty

npm run dev   # separate terminal

npx @axe-core/cli http://localhost:3000 \
  --save tests/accessibility/reports/axe-report.json
```

**Option B — Install Chromium in WSL (requires sudo)**

```bash
sudo apt update
sudo apt install -y chromium-browser || sudo apt install -y chromium
export CHROME_PATH=/usr/bin/chromium-browser   # or /usr/bin/chromium
npx @axe-core/cli http://localhost:3000 \
  --save tests/accessibility/reports/axe-report.json
```

**Option C — Browser extension (no CLI, works on Windows)**

Install [axe DevTools](https://www.deque.com/axe/devtools/) in Chrome/Edge on Windows, open `http://localhost:3000`, and run **Scan ALL of my page**. Best option if WSL package installs are awkward.

**Checklist**

- Dev server running: `npm run dev` → `http://localhost:3000`
- `CHROME_PATH` points to an existing file: `test -x "$CHROME_PATH" && echo OK`
- In WSL, avoid scanning a URL that only runs on Windows localhost unless the app is started inside WSL

## What axe is strong at for this project

| Rule category | Example checks |
|---------------|----------------|
| **Forms** | Labels, `aria-invalid`, required fields |
| **Structure** | Heading order, landmark uniqueness |
| **Color** | Contrast ratios on text and UI components |
| **ARIA** | Valid roles, accessible names for buttons |
| **Links** | Discernible link text |

## Results summary (fill after scan)

| Impact | Count | Examples |
|--------|-------|----------|
| Critical | _0_ | — |
| Serious | _1_ | _e.g. contrast on secondary button_ |
| Moderate | _2_ | _e.g. heading order_ |
| Minor | _1_ | _e.g. redundant alt text_ |

## Issues log

| axe rule ID | Impact | Element | Finding ID | Status |
|-------------|--------|---------|------------|--------|
| `color-contrast` | Serious | `.btn-secondary` | A11Y-002 | Open |
| `heading-order` | Moderate | `h3` in Projects | A11Y-004 | Open |
| `label` | Serious | _example input_ | A11Y-003 | Open |

## Manual follow-up (axe cannot fully automate)

- Keyboard-only navigation through entire page
- Focus visibility on custom buttons
- Whether error messages are announced in screen readers
- Mobile nav pattern (if hamburger menu added later)
- Link text clarity in context vs out of context

## QA workflow

1. Run axe scan → export/save JSON to `reports/`
2. Triage each issue by severity and user impact
3. Log in `accessibility-findings-template.md`
4. Link to functional bug report in `docs/bug-reports/` if tracked separately
5. Re-scan after fix; mark finding **Fixed** with date

## Related files

- Raw output: `reports/axe-report.json`
- Findings: `accessibility-findings-template.md`
- Test plan: `accessibility-test-plan.md`

---

_Placeholder — update counts and rule IDs after your first real axe scan._
