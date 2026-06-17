# Robot Framework — UI Tests

Browser-based UI automation for the CV portfolio using [Robot Framework](https://robotframework.org/) and the [Browser library](https://marketsquare.github.io/robotframework-browser/Browser.html) (Playwright).

## Prerequisites

- Python 3.10+
- Node.js 18+ with the app running locally

```bash
pip install -r tests/robot/requirements.txt
rfbrowser init
```

## Start the application

In a separate terminal:

```bash
npm run dev
```

Default URL: `http://localhost:3000`  
If port 3000 is busy, start on another port and override `BASE_URL` when running tests.

## Run tests

From the project root:

```bash
robot tests/robot
```

With custom URL or browser:

```bash
robot --variable BASE_URL:http://localhost:3001 --variable BROWSER:firefox tests/robot
```

Run headed (see the browser):

```bash
robot --variable HEADLESS:False tests/robot
```

Save reports to `tests/robot/results/`:

```bash
robot --outputdir tests/robot/results tests/robot
```

## Structure

| File / folder | Purpose |
|---------------|---------|
| `portfolio.robot` | Main UI test suite (16 test cases) |
| `resources/common.robot` | Shared variables, keywords, browser setup |
| `results/` | Optional output (log, report, output.xml) — gitignored |

## Test coverage

1. Home page loads successfully  
2. Main navigation links are visible  
3. Projects section is visible  
4. QA Testing Project section is visible  
5. Contact form — empty submit validation  
6. Contact form — invalid email rejection  
7. Contact form — valid submit success message  
8. CV download / LinkedIn link visible  
9. Language switcher — English selected by default  
10. English content visible by default  
11. Page title and main heading correct  
12. Mobile menu opens at narrow viewport (375px)  
13. Theme toggle switches color mode  
14. Finnish content after selecting FI  
15. Finnish contact validation messages  
16. Switching back to EN restores English  

## Selector strategy

| Priority | Example |
|----------|---------|
| `data-testid` | `css=[data-testid="contact-form"]` |
| HTML `id` | `css=#projects-heading` |
| Role + name | `role=link[name="Contact"]` |
| Page title / heading text | `Get Title`, hero `h1` |

Traceability: see `docs/traceability-matrix.md` and TC IDs in `portfolio.robot`.

Fragile CSS class selectors are avoided.

## Variables

Defined in `resources/common.robot`:

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `http://localhost:3000` | Application base URL |
| `BROWSER` | `chromium` | Playwright browser (`chromium`, `firefox`, `webkit`) |
| `HEADLESS` | `True` | Run browser headless when `True` |

## Troubleshooting

- **Connection refused** — ensure `npm run dev` is running on `BASE_URL`.
- **Contact success test fails** — API must respond; run Newman against `/api/contact` if needed.
- **Slow first test** — Browser library downloads browsers on first `rfbrowser init`.

## CI (manual)

Robot UI tests are **not** run on every push (Chromium setup is slow on GitHub-hosted runners). Run them manually:

**Actions → Robot UI Tests → Run workflow**

Workflow: [`.github/workflows/robot-tests.yml`](../../.github/workflows/robot-tests.yml) — uploads HTML reports as artifacts.
