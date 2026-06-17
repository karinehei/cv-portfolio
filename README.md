# CV Portfolio QA Automation Project

[![QA Tests](https://github.com/karinehei/cv-portfolio/actions/workflows/qa-tests.yml/badge.svg)](https://github.com/karinehei/cv-portfolio/actions/workflows/qa-tests.yml)
[![Licence: MIT](https://img.shields.io/badge/Licence-MIT-blue.svg)](LICENSE)

A personal CV portfolio website built and maintained as a **tested product**. This repository demonstrates end-to-end quality assurance — from test planning and manual test cases to UI and API automation, accessibility evaluation, load testing, and continuous integration.

Designed for **software tester / QA engineer** job applications in Finland and internationally.

### Reviewer quick path (5 minutes)

1. Read [`docs/test-summary-report.md`](docs/test-summary-report.md) — cycle results and release recommendation  
2. Open [GitHub Actions](https://github.com/karinehei/cv-portfolio/actions) — CI: lint, build, Newman (7 API tests); Robot UI tests run manually via **Robot UI Tests** workflow  
3. Skim [`docs/traceability-matrix.md`](docs/traceability-matrix.md) — feature → test case → automation  
4. Browse [`docs/test-cases.md`](docs/test-cases.md) and [`docs/bug-reports.md`](docs/bug-reports.md) — Jira/Xray-style artefacts  
5. Run locally: `npm run dev` → open `http://localhost:3000` → try **EN / FI** language switcher

### UI languages (EN / FI)

The **live website UI** is available in **English (default)** and **Finnish**, switched via the EN/FI buttons in the header. Translations live in `src/lib/i18n/translations.ts` — no external i18n library.

**QA and technical documentation** (`docs/`, `tests/`, this README) stays in **English** so tooling names, CI logs, and international reviewers share one language. A Finnish project summary for recruiters is in [`docs/project-summary-fi.md`](docs/project-summary-fi.md).

This split is intentional for the Finnish job market: recruiters can use the site in Finnish while the repository demonstrates standard English QA deliverables used in many IT teams.

---

## 1. Project overview

This project combines two goals in one repository:

1. **A live CV portfolio** — a single-page Next.js website with sections for About, Skills, Projects, QA work samples, CV download, and a contact form.
2. **A complete QA artefact set** — documentation, automation, and CI that prove how the site is planned, tested, and released.

The website is the **system under test (SUT)**. Every feature — navigation, theme toggle, contact form, and API — is covered by test cases, automated checks, or documented non-functional evaluation. Recruiters can review both the running application and the evidence behind it.

**Live sections:** Home · About · Skills · QA Portfolio · Projects · CV · Contact  
**API endpoint:** `POST /api/contact` (JSON validation, structured responses)

---

## 2. Why this project exists

Traditional portfolios show what a candidate has built. This project shows **how they assure quality**.

It demonstrates practical skills across the full testing spectrum:

| Testing discipline | How it is shown |
|--------------------|-----------------|
| **Manual testing** | Structured test cases, exploratory notes, bug reports |
| **Test automation** | Robot Framework UI smoke suite (12 tests) |
| **API testing** | Postman collection with Newman in CI (7 requests, 28 assertions) |
| **Accessibility testing** | WCAG 2.1 AA target; Lighthouse, Axe, and WAVE workflows |
| **Non-functional testing** | JMeter load plan for home page and contact API |
| **CI/CD & quality gates** | GitHub Actions pipeline on every push and pull request |
| **Test documentation** | Jira/Xray-style test plan, cases, summary report, and defect log |

The portfolio answers a common interview question: *"How do you approach quality on a real product?"* — with a concrete, reviewable example.

---

## 3. Tech stack

| Layer | Technology |
|-------|------------|
| **Application** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling** | CSS Modules, CSS custom properties, responsive layout |
| **API** | Next.js Route Handlers (`POST /api/contact`) |
| **Validation** | Shared client/server logic (`src/lib/contactValidation.ts`) |
| **Static assets** | `public/` (e.g. `cv.pdf`) |
| **Runtime** | Node.js 18.17+ (20 recommended) |

The application is intentionally lean — no external database or auth — so the focus stays on testability, clear requirements, and reproducible automation.

---

## 4. QA tools used

| Tool | Role in this project |
|------|---------------------|
| **[Robot Framework](https://robotframework.org/)** | UI smoke automation via Browser library (Chromium); stable `data-testid` selectors |
| **[Postman](https://www.postman.com/)** | API test collection for contact endpoint; executed headlessly with Newman in CI |
| **[Apache JMeter](https://jmeter.apache.org/)** | Baseline load test plan for page views and API submissions |
| **[Lighthouse](https://developer.chrome.com/docs/lighthouse/)** | Automated accessibility audits (contrast, ARIA, labels, heading order) |
| **[Axe](https://www.deque.com/axe/)** | Rule-based accessibility scanning (CLI and DevTools) |
| **[WAVE](https://wave.webaim.org/)** | Manual accessibility evaluation with visual structure and contrast feedback |
| **[GitHub Actions](https://github.com/features/actions)** | CI pipeline: lint, typecheck, build, Newman, Robot Framework |
| **Jenkins (concept)** | Same pipeline stages documented for enterprise CI/CD environments |
| **Jira / Xray-style docs** | Test plan, test cases, bug reports, and test summary in `docs/` |

**CI workflows:** [`.github/workflows/qa-tests.yml`](.github/workflows/qa-tests.yml) (every push/PR) · [`.github/workflows/robot-tests.yml`](.github/workflows/robot-tests.yml) (manual UI tests)

---

## 5. Test scope

### In scope

| Area | Coverage |
|------|----------|
| **Functional — UI** | Page load, navigation, section visibility, theme toggle, EN/FI language switch, CV links |
| **Functional — form** | Required fields, email format, message length, client-side errors, success feedback |
| **Functional — API** | Valid payloads, missing fields, invalid email, short message, malformed JSON |
| **Regression** | Newman collection on each CI run; Robot smoke suite (manual workflow or local) |
| **Accessibility** | Semantic HTML, keyboard navigation, focus states, form ARIA, color contrast (WCAG 2.1 AA target) |
| **Performance (baseline)** | JMeter scenarios for `GET /` and `POST /api/contact` |
| **Static quality** | ESLint, TypeScript compile check, production build |

### Out of scope (by design)

- Production hosting and CDN performance
- Email delivery from the contact form (API acknowledges receipt only)
- Penetration testing and authentication flows

### Test levels

1. **Unit / shared logic** — contact validation module  
2. **Integration** — browser form ↔ API route  
3. **System / E2E** — Robot Framework against running application  
4. **Acceptance** — manual execution per test plan before portfolio updates  

---

## 6. Repository structure

```
cv-portfolio/
├── src/
│   ├── app/                    # Next.js layout, pages, API routes
│   ├── components/             # UI components and page sections
│   └── lib/                    # Shared validation logic
├── public/                     # Static files (cv.pdf)
├── docs/                       # QA documentation (test plan, cases, bugs, summary)
├── tests/
│   ├── robot/                  # Robot Framework UI tests
│   ├── postman/                # Postman / Newman API tests
│   ├── jmeter/                 # JMeter load test plan (.jmx)
│   └── accessibility/          # A11y plans, findings, tool notes
├── .github/workflows/          # GitHub Actions CI
└── README.md
```

| Path | Purpose |
|------|---------|
| `docs/traceability-matrix.md` | Feature → test case → automation mapping |
| `docs/test-plan.md` | Master test plan — scope, strategy, environments, exit criteria |
| `docs/test-cases.md` | 15 manual test cases (TC-001–TC-015) in Jira/Xray format |
| `docs/bug-reports.md` | Example defect reports (BUG-001–BUG-005) |
| `docs/test-summary-report.md` | Test cycle summary and release recommendation |
| `tests/robot/portfolio.robot` | 16 automated UI smoke tests |
| `tests/postman/contact-api.postman_collection.json` | 7 API test requests |
| `tests/jmeter/portfolio-load-test.jmx` | Load test scenarios |
| `tests/accessibility/` | Accessibility test plan, findings log, improvement notes |

---

## 7. How to run the application

### Prerequisites

- **Node.js 18.17+** (Node 20 LTS recommended)
- npm (included with Node.js)

```bash
node --version   # should be >= 18.17
```

### Install and start

```bash
# Clone the repository, then:
npm install

# Development server → http://localhost:3000
npm run dev

# Production build and serve
npm run build
npm run start

# Static checks (also run in CI)
npm run lint
npm run typecheck
```

---

## 8. How to run Robot Framework tests

Robot Framework executes **16 UI smoke tests** against the running site. Tests use the Browser library (Playwright/Chromium) and `data-testid` attributes for stable selectors.

### Setup (one time)

```bash
pip install -r tests/robot/requirements.txt
rfbrowser init
```

### Run tests

```bash
# Terminal 1 — start the application
npm run dev
# or: npm run build && npm run start

# Terminal 2 — run the suite
robot --variable BASE_URL:http://localhost:3000 \
      --outputdir tests/robot/results \
      tests/robot
```

### Reports

After execution, open `tests/robot/results/report.html` for the HTML report.

**Mapped test cases:** TC-001, TC-002, TC-005–TC-010, TC-012–TC-014 (partial). See [`docs/traceability-matrix.md`](docs/traceability-matrix.md).

Further details: [`tests/robot/README.md`](tests/robot/README.md)

---

## 9. How to run Postman tests

The Postman collection covers **`POST /api/contact`** with seven scenarios: valid request, missing fields, invalid email, message length validation, and malformed JSON body.

### Option A — Newman (CLI, used in CI)

```bash
# Terminal 1
npm run dev

# Terminal 2
npx newman run tests/postman/contact-api.postman_collection.json
```

### Option B — Postman GUI

1. Import `tests/postman/contact-api.postman_collection.json` into Postman.
2. Set the collection variable `baseUrl` to `http://localhost:3000`.
3. Run the **Contact API** folder.

Further details: [`tests/postman/README.md`](tests/postman/README.md)

---

## 10. How to run JMeter tests

JMeter provides **baseline non-functional testing** for two scenarios:

1. **Home page browsing** — `GET /`
2. **Contact API submissions** — `POST /api/contact`

### Steps

1. Install [Apache JMeter](https://jmeter.apache.org/download_jmeter.cgi) 5.6+.
2. Start the application: `npm run dev` or `npm run build && npm run start`.
3. Open `tests/jmeter/portfolio-load-test.jmx` in JMeter.
4. Verify `HOST` (`localhost`) and `PORT` (`3000`) variables match your environment.
5. Run the test plan and review aggregate reports.

Test design and acceptance criteria: [`tests/jmeter/portfolio-load-test-plan.md`](tests/jmeter/portfolio-load-test-plan.md)

Further details: [`tests/jmeter/README.md`](tests/jmeter/README.md)

---

## 11. Accessibility testing

The site targets **WCAG 2.1 Level AA**. Implemented improvements (skip link, mobile menu ARIA, form labels, focus states, contrast) are documented in [`tests/accessibility/accessibility-improvements.md`](tests/accessibility/accessibility-improvements.md).

### Automated tools

```bash
npm run dev
```

**Lighthouse** — accessibility score and audit details:

```bash
npx lighthouse http://localhost:3000 --only-categories=accessibility \
  --output=json --output-path=tests/accessibility/reports/lighthouse-report.json
```

**Axe** — rule-by-rule violations:

```bash
npx @axe-core/cli http://localhost:3000 \
  --save tests/accessibility/reports/axe-report.json
```

**WAVE** — browser extension:

1. Install the [WAVE extension](https://wave.webaim.org/extension/).
2. Scan `http://localhost:3000` at desktop and mobile (375px) widths.
3. Document results in [`tests/accessibility/wave-report-notes.md`](tests/accessibility/wave-report-notes.md).

### Manual checks

- Keyboard-only navigation (skip link → header → sections → contact form)
- Mobile menu: `aria-expanded`, Escape to close, visible focus ring
- Contact form: errors announced, `aria-invalid`, focus on first invalid field
- Light and dark theme contrast

Log findings in [`tests/accessibility/accessibility-findings-template.md`](tests/accessibility/accessibility-findings-template.md).

Full plan: [`tests/accessibility/accessibility-test-plan.md`](tests/accessibility/accessibility-test-plan.md) · Overview: [`tests/accessibility/README.md`](tests/accessibility/README.md)

---

## 12. Test documentation

All QA documentation lives under `docs/` and `tests/` and follows structures commonly used with **Jira** and **Xray**:

| Document | Description |
|----------|-------------|
| [`docs/test-plan.md`](docs/test-plan.md) | Test strategy, scope, environments, entry/exit criteria, risks |
| [`docs/test-cases.md`](docs/test-cases.md) | 15 manual test cases with steps, expected results, and automation links |
| [`docs/bug-reports.md`](docs/bug-reports.md) | Defect reports with severity, steps to reproduce, and status |
| [`docs/test-summary-report.md`](docs/test-summary-report.md) | Execution summary, coverage, and release recommendation |
| [`tests/accessibility/accessibility-test-plan.md`](tests/accessibility/accessibility-test-plan.md) | Accessibility-specific test plan |
| [`tests/jmeter/portfolio-load-test-plan.md`](tests/jmeter/portfolio-load-test-plan.md) | Load test objectives and scenarios |

Manual test cases trace to automated tests where applicable (e.g. TC-005 ↔ Robot contact validation tests).

---

## 13. Example QA deliverables

This repository includes ready-to-review samples suitable for interviews and portfolio walkthroughs:

| Deliverable | Example content |
|-------------|-----------------|
| **Test plan** | Scope table, test levels, environments, CI integration |
| **Test cases** | TC-001–TC-015 with priority, type, and automation status |
| **Bug reports** | BUG-001–BUG-005 (validation, accessibility, contrast, screen reader) |
| **Test summary** | Pass/fail counts, automation coverage, known issues, sign-off |
| **UI automation** | `portfolio.robot` — 16 smoke tests with HTML report |
| **API automation** | Postman collection — 7 requests, Newman-ready |
| **Load test plan** | JMeter `.jmx` + written plan with virtual users and thresholds |
| **Accessibility log** | Findings template (A11Y-001–A11Y-005) with WCAG references |
| **CI pipeline** | GitHub Actions workflow with artefact upload |

These artefacts mirror what a QA engineer produces on an agile team: planned coverage, executed tests, logged defects, and a summary for stakeholders.

---

## 14. Future improvements

| Area | Planned enhancement |
|------|---------------------|
| **i18n** | Full Finnish/English content (toggle UI exists) |
| **Contact form** | Integration with email service (Resend, SendGrid) |
| **Accessibility** | Automated a11y gate in CI (axe-core or pa11y) |
| **Load testing** | CI-hosted JMeter runs against staging environment |
| **Test coverage** | Expand Robot tests for mobile viewport and theme toggle |
| **API** | Rate limiting and additional negative test cases |
| **Reporting** | Newman HTML reports as CI artefacts |
| **Content** | Personalise About, Skills, Projects, and `public/cv.pdf` |

---

## 15. Relevance for QA tester role

This project is built specifically to support applications for **software tester**, **QA engineer**, and **test automation** roles. It shows that the candidate can:

- **Plan testing** — define scope, risks, and exit criteria before execution  
- **Design test cases** — structured, traceable, prioritised (Jira/Xray style)  
- **Report defects** — clear reproduction steps, severity, and expected vs actual  
- **Automate at the right level** — UI smoke tests where they add value; API tests for business logic  
- **Test beyond functional** — accessibility (WCAG), baseline performance (JMeter)  
- **Work in CI/CD** — integrate tests into a pipeline with quality gates  
- **Communicate results** — test summary report for stakeholders  

For hiring managers and recruiters: clone the repository, run `npm run dev`, open `docs/test-summary-report.md`, and review the [GitHub Actions](https://github.com/karinehei/cv-portfolio/actions) workflow for evidence of continuous quality assurance.

---

## GitHub Pages deployment

This project uses **Next.js 14** (not Vite). The live portfolio can be published as a **static export** to GitHub Pages.

**Published URL (project site):** `https://<your-username>.github.io/<repository-name>/`

For this repo (`karinehei/cv-portfolio`): `https://karinehei.github.io/cv-portfolio/`

The `basePath` matches the **GitHub repository name** automatically in CI (`GITHUB_PAGES_REPO`). Locally, set it when building:

```bash
GITHUB_PAGES_REPO=cv-portfolio npm run build:pages
```

### One-time setup on GitHub

1. Push this repository to GitHub.
2. Open **Settings → Pages** ([direct link for this repo](https://github.com/karinehei/cv-portfolio/settings/pages)).
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
4. Click **Save** if shown, then push to `main`/`master` or re-run **Deploy to GitHub Pages**.

If deploy fails with **`Failed to create deployment (status: 404)`**, Pages is almost always still set to “Deploy from a branch” or Pages has never been enabled — repeat step 3.

### Site shows README text instead of the portfolio?

If `https://karinehei.github.io/cv-portfolio/` looks like this README (markdown headings, “Improve this page” footer, no styled hero section), **GitHub Pages is publishing the repository branch with Jekyll**, not the Next.js build from Actions.

| What you see | Cause |
|--------------|--------|
| README content as a plain documentation page | **Source: Deploy from a branch** (Jekyll renders `README.md`) |
| Styled portfolio (hero, nav, EN/FI toggle) | **Source: GitHub Actions** (deploy workflow uploads `out/`) |

**Fix:**

1. Open [Settings → Pages](https://github.com/karinehei/cv-portfolio/settings/pages).
2. **Build and deployment → Source → GitHub Actions** (not “Deploy from a branch”).
3. **Actions → Deploy to GitHub Pages → Run workflow** (re-run all jobs).
4. Wait 1–2 minutes, then hard-refresh the site (Ctrl+Shift+R).

The deploy workflow only updates the live URL when Pages source is **GitHub Actions**. A successful workflow run does nothing visible if the source is still set to a branch.

### How deployment works

| Step | What happens |
|------|----------------|
| Workflow | [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) |
| Lint / typecheck | `npm run lint`, `npm run typecheck` |
| Static build | `npm run build:pages` → `scripts/build-github-pages.mjs` |
| Output folder | `out/` (Next.js static export) |
| Publish | `actions/deploy-pages` uploads `out/` to GitHub Pages |

Local preview of the Pages build:

```bash
npm run build:pages
npx serve out
# Open http://localhost:<port>/cv-portfolio/  (match GITHUB_PAGES_REPO / repo name)
```

### Contact form on GitHub Pages (Web3Forms)

GitHub Pages cannot run Next.js API routes. The live site uses **[Web3Forms](https://web3forms.com)** to deliver contact messages to your inbox.

**One-time setup:**

1. Create a form at [app.web3forms.com](https://app.web3forms.com) (you already have `karine.heinonen@hotmail.com`).
2. **Form name:** e.g. `CV Portfolio Contact`
3. **Domain:** `karinehei.github.io` (for local testing, add `localhost` in Web3Forms settings or use `localhost` during onboarding)
4. Copy the **Access Key** from your email or dashboard.
5. In GitHub: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `WEB3FORMS_ACCESS_KEY`
   - Value: your access key
6. Re-run **Deploy to GitHub Pages**.

**Local development:**

```bash
cp .env.example .env.local
# Add your access key to NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
npm run dev
```

When `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set, the form posts to Web3Forms. Without it, `npm run dev` / `npm run start` use the built-in `POST /api/contact` route (used by Newman in CI).

### Static hosting limitations

GitHub Pages serves **static files only**:

| Feature | On GitHub Pages | Full Node deployment (`npm run start`) |
|---------|-----------------|----------------------------------------|
| Portfolio UI (all sections) | Works | Works |
| EN / FI language toggle | Works | Works |
| Theme toggle | Works | Works |
| CV PDF download | Works | Works |
| **Contact form submit** | **Web3Forms** (with `WEB3FORMS_ACCESS_KEY`) | Built-in API or Web3Forms |
| **`POST /api/contact`** | Not available | Works (CI / local without Web3Forms key) |

Newman API tests run in [`.github/workflows/qa-tests.yml`](.github/workflows/qa-tests.yml) on every push. Robot UI tests run via [`.github/workflows/robot-tests.yml`](.github/workflows/robot-tests.yml) (manual) or locally — see `tests/robot/`.

### Troubleshooting broken CSS or assets

If the page loads but styles or scripts are missing:

1. **Check the URL** — project sites must include the repo path: `/cv-portfolio/`, not only `github.io`.
2. **Verify `basePath`** — must match the repository name (e.g. `cv-portfolio` for `karinehei/cv-portfolio`).
3. **Rebuild** — re-run the Deploy workflow after config changes.
4. **Browser cache** — hard refresh (Ctrl+Shift+R) or try a private window.
5. **`.nojekyll`** — `public/.nojekyll` is copied to `out/` so GitHub Pages does not ignore paths starting with `_` (Next.js assets).

### Custom domain (optional)

1. Add a `CNAME` file to `public/` with your domain (e.g. `portfolio.example.com`) — it is included in the static export.
2. In **Settings → Pages → Custom domain**, enter the domain and follow GitHub DNS instructions.
3. If using a **custom domain at the root** (not a subpath), set `basePath` and `assetPrefix` to `""` in `next.config.mjs` and use a user/org Pages site (`username.github.io`) instead of a project site.

---

## Licence

Copyright © 2026 [Karine Heinonen](https://github.com/karinehei). Released under the [MIT Licence](LICENSE).
