# JMeter — Load / Performance Testing

Non-functional test artefacts for the CV portfolio website.

| File | Purpose |
|------|---------|
| `portfolio-load-test-plan.md` | Written test plan — scenarios, metrics, acceptance criteria |
| `portfolio-load-test.jmx` | Executable JMeter plan (import or CLI) |
| `results/` | Output folder for `.jtl` and HTML reports (gitignored) |

## Prerequisites

- [Apache JMeter](https://jmeter.apache.org/) 5.6+
- Application running locally (`npm run dev` or `npm run build && npm start`)

Default target: `http://localhost:3000` (`HOST` / `PORT` variables in the `.jmx` file).

## Scenarios (placeholder)

| Scenario | Users | Ramp-up | Duration | Request |
|----------|-------|---------|----------|---------|
| 1 — Home page | 50 | 30 s | 2 min | `GET /` |
| 2 — Contact API | 20 | 30 s | 2 min | `POST /api/contact` |

See `portfolio-load-test-plan.md` for metrics and acceptance criteria.

## Open the `.jmx` file in JMeter (GUI)

1. Install JMeter and launch the GUI (`jmeter` or `jmeter.bat`).
2. **File → Open** → select `tests/jmeter/portfolio-load-test.jmx`.
3. Review **User Defined Variables** (`HOST`, `PORT`) under the Test Plan.
4. Start the portfolio app: `npm run dev`.
5. Click the green **Start** button (or **Run → Start**).
6. Watch **Summary Report** and **Aggregate Report** listeners at the bottom.

> Disable **View Results Tree** during heavy runs — it is not included in this plan to reduce memory use.

## Run from command line (non-GUI)

```bash
mkdir -p tests/jmeter/results

jmeter -n \
  -t tests/jmeter/portfolio-load-test.jmx \
  -l tests/jmeter/results/results.jtl \
  -e -o tests/jmeter/results/html-report
```

Open `tests/jmeter/results/html-report/index.html` in a browser.

Custom host/port:

```bash
jmeter -n -t tests/jmeter/portfolio-load-test.jmx \
  -JHOST=localhost -JPORT=3001 \
  -l tests/jmeter/results/results.jtl \
  -e -o tests/jmeter/results/html-report
```

## Export results

| Method | Output |
|--------|--------|
| **GUI → Save Table Data** | CSV from Summary / Aggregate Report |
| **CLI `-l results.jtl`** | Raw sample log (import into JMeter or analyse) |
| **CLI `-e -o html-report/`** | HTML dashboard with charts and percentiles |
| **Test summary** | Copy key metrics into `docs/test-summary-report.md` |

### Metrics to record

- Average response time
- p95 response time (Aggregate Report / HTML dashboard)
- Error rate (%)
- Throughput (requests/sec)
- Failed request count

### Example acceptance criteria

| Scenario | Target |
|----------|--------|
| Home page error rate | < 1% |
| Home page p95 | < 1000 ms |
| Contact API error rate | < 1% |
| Contact API p95 | < 1500 ms |

## How this fits non-functional testing

This JMeter plan demonstrates **performance / load testing** skills for a QA portfolio:

| NFR area | What you show |
|----------|----------------|
| **Load testing** | Concurrent users on home page and API |
| **Baseline metrics** | Response time, throughput, errors under known load |
| **Test planning** | Documented scenarios in `portfolio-load-test-plan.md` |
| **Tooling** | Industry-standard JMeter with GUI and CLI execution |
| **Release input** | Acceptance criteria support go/no-go discussions |

It complements other test levels in this repo:

- **Functional UI** — Robot Framework (`tests/robot/`)
- **Functional API** — Postman/Newman (`tests/postman/`)
- **Accessibility** — Lighthouse / Axe / WAVE (`tests/accessibility/`)
- **Performance** — JMeter (this folder)

Together they show full-stack QA coverage: the portfolio is tested as a product, not only as a frontend demo.

## Notes

- Use `npm run build && npm start` for more realistic timings than `next dev`.
- This is a **baseline placeholder** — tune user counts and thresholds for your hardware.
- Commit the `.jmx` and plan; keep `results/` local (gitignored).
