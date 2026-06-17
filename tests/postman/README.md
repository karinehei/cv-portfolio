# Postman / Newman — Contact API Tests

API test collection for the portfolio contact form endpoint: `POST {{baseUrl}}/api/contact`.

This collection demonstrates **API testing skills** relevant to software tester / QA roles: verifying HTTP status codes, JSON response contracts, positive flows, and negative validation scenarios.

## What this demonstrates for QA

| QA skill | How this collection shows it |
|----------|------------------------------|
| **API testing** | Tests a REST endpoint independent of the UI |
| **Positive testing** | Valid payload returns `200` with `success: true` |
| **Negative testing** | Missing fields, invalid email, boundary (short message) |
| **Contract testing** | Every response must include `success` and `message` |
| **Automation** | Newman runs the same checks in CI without manual clicks |
| **Traceability** | Maps to manual cases in `docs/test-cases.md` (TC-005, TC-006, TC-012) |

The contact form is tested at two levels in this project:

1. **UI** — Robot Framework (`tests/robot/`) validates client-side behaviour
2. **API** — Postman/Newman validates server-side validation and responses

Together they show full-stack QA coverage of the same feature.

## Collection

| File | Description |
|------|-------------|
| `contact-api.postman_collection.json` | Main API test collection (7 requests) |

### Requests

| # | Request | Expected status | Expected `success` |
|---|---------|-----------------|-------------------|
| 1 | Valid contact request | 200 | `true` |
| 2 | Missing name | 400 | `false` |
| 3 | Missing email | 400 | `false` |
| 4 | Invalid email | 400 | `false` |
| 5 | Missing message | 400 | `false` |
| 6 | Too short message | 400 | `false` |
| 7 | Invalid JSON body | 400 | `false` |

Each request includes Postman test scripts for:

- Status code
- JSON shape (`success` + `message`)
- `success` boolean value
- `message` field content

### Variable

| Variable | Default | Description |
|----------|---------|-------------|
| `baseUrl` | `http://localhost:3000` | Application base URL |

Change in Postman: Collection → Variables → `baseUrl`.

## Run in Postman

1. Import `contact-api.postman_collection.json`
2. Start the app: `npm run dev`
3. Confirm `baseUrl` is correct (use `http://localhost:3001` if port 3000 is busy)
4. Run the collection with the Collection Runner

## Run with Newman (CLI)

```bash
npm run dev   # terminal 1

# terminal 2
npx newman run tests/postman/contact-api.postman_collection.json
```

Custom base URL:

```bash
npx newman run tests/postman/contact-api.postman_collection.json \
  --env-var baseUrl=http://localhost:3001
```

## CI integration

Newman runs automatically in `.github/workflows/qa-tests.yml` after the production build and server start.

## Related documentation

- Test plan: `docs/test-plan.md`
- Manual test cases: `docs/test-cases.md`
- API implementation: `src/app/api/contact/route.ts`
