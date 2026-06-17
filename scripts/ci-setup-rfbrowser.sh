#!/usr/bin/env bash
# Robot Browser setup for CI (ubuntu-latest + optional browser cache).
# Skips Chromium download when PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1.
# Local dev: pip install -r tests/robot/requirements.txt && rfbrowser init chromium
set -euo pipefail

log() { echo "[$(date -u +%H:%M:%S)] $*"; }

log "Installing Robot Python packages..."
uv pip install --system -r tests/robot/requirements.txt

WRAPPER="$(python -c 'import Browser, os; print(os.path.join(os.path.dirname(Browser.__file__), "wrapper"))')"
log "Browser wrapper: $WRAPPER"

cd "$WRAPPER"
log "Installing rfbrowser node dependencies..."
if [[ -f package-lock.json ]]; then
  npm ci --omit=dev
else
  npm install --omit=dev
fi

export PLAYWRIGHT_BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-$GITHUB_WORKSPACE/.playwright-browsers}"

if [[ "${PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD:-}" == "1" ]]; then
  log "Cache hit — skipping Chromium download."
  ls -la "$PLAYWRIGHT_BROWSERS_PATH" | head -8
else
  log "Cache miss — downloading Chromium to $PLAYWRIGHT_BROWSERS_PATH (one-time, ~5 min)..."
  mkdir -p "$PLAYWRIGHT_BROWSERS_PATH"
  npx --yes playwright install chromium
  log "Chromium download and extract complete."
fi

log "Robot Browser setup complete."
