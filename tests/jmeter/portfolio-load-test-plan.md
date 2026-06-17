# Load Test Plan — CV Portfolio

| Field | Value |
|-------|-------|
| **Project** | CV Portfolio (QA-focused) |
| **Document** | Non-functional / performance test plan |
| **JMeter plan** | `portfolio-load-test.jmx` |
| **Author** | _Your name_ |
| **Date** | _YYYY-MM-DD_ |
| **Status** | Placeholder / draft |

## 1. Objective

Establish a baseline load profile for the CV portfolio website under light concurrent usage. This plan covers:

- **Scenario 1** — browsing the home page (read-heavy)
- **Scenario 2** — submitting the contact form API (write-heavy)

Results support non-functional testing evidence for QA portfolio and release discussions.

## 2. Scope

**In scope**
- `GET /` (home page)
- `POST /api/contact` (valid JSON payload)

**Out of scope**
- Authentication / sessions
- Static asset CDN performance
- Production hosting (local baseline only unless environment updated)
- Stress / soak testing beyond 2 minutes per scenario

## 3. Test environment

| Item | Value |
|------|-------|
| Application | Next.js portfolio (`npm run dev` or `npm run build && npm start`) |
| Default URL | `http://localhost:3000` |
| Tool | Apache JMeter 5.6+ |
| Plan file | `tests/jmeter/portfolio-load-test.jmx` |

Update `HOST` and `PORT` variables in the JMeter plan if the app runs elsewhere.

## 4. Scenarios

### Scenario 1 — Home page browsing

| Parameter | Value |
|-----------|-------|
| Virtual users | 50 |
| Ramp-up | 30 seconds |
| Duration | 2 minutes (120 s) |
| Request | `GET /` |

**Purpose:** Simulate concurrent visitors opening the portfolio home page.

### Scenario 2 — Contact API submissions

| Parameter | Value |
|-----------|-------|
| Virtual users | 20 |
| Ramp-up | 30 seconds |
| Duration | 2 minutes (120 s) |
| Request | `POST /api/contact` with valid JSON body |

**Purpose:** Simulate concurrent contact form submissions hitting the API.

> Scenarios run sequentially (Scenario 1 completes, then Scenario 2). Adjust in JMeter if parallel execution is required.

## 5. Metrics to observe

| Metric | Description | Where to find |
|--------|-------------|---------------|
| **Average response time** | Mean latency across samples | Aggregate Report, HTML dashboard |
| **p95 response time** | 95th percentile latency | Aggregate Report → 90% / 95% line, or HTML report |
| **Error rate** | % of failed samples | Summary Report, dashboard Errors % |
| **Throughput** | Requests per second | Aggregate Report |
| **Failed requests** | Count of non-success responses | View Results Tree (debug), JTL file |

## 6. Acceptance criteria (example)

These are **baseline targets for local testing** — tune for your environment:

| Scenario | Metric | Target |
|----------|--------|--------|
| Home page (`GET /`) | Error rate | < 1% |
| Home page (`GET /`) | p95 response time | < 1000 ms |
| Contact API (`POST /api/contact`) | Error rate | < 1% |
| Contact API (`POST /api/contact`) | p95 response time | < 1500 ms |

**Pass example:** All criteria met for the test duration with no server crashes or sustained 5xx responses.

**Fail example:** Error rate ≥ 1%, or p95 exceeds threshold, or application becomes unresponsive.

## 7. Execution steps

1. Start the application (`npm run dev` or production build).
2. Open `portfolio-load-test.jmx` in JMeter GUI **or** run via CLI (see `README.md`).
3. Run Scenario 1, export results, record metrics.
4. Run Scenario 2 (or run full plan), export results, record metrics.
5. Compare results against acceptance criteria.
6. Log findings in `docs/test-summary-report.md` if running a formal test cycle.

## 8. Risks and notes

- Local dev mode (`next dev`) is slower than production — use `npm run build && npm start` for more realistic numbers.
- Contact API does not send email; load test validates API handling only.
- WSL + Windows filesystem may affect local performance — document environment in results.
- This is a **placeholder baseline**, not a capacity test.

## 9. Deliverables

- JMeter plan: `portfolio-load-test.jmx`
- Raw results: `tests/jmeter/results/*.jtl` (gitignored)
- HTML report: `tests/jmeter/results/html-report/` (gitignored)
- Summary notes in test summary report (`docs/test-summary-report.md`)

---

_Template — customise users, duration, and thresholds before sharing with stakeholders._
