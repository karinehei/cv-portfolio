#!/usr/bin/env bash
# Fast Robot Browser setup for CI (Playwright Docker image).
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

if [[ "${PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD:-}" == "1" ]]; then
  log "Skipping Chromium download (using PLAYWRIGHT_BROWSERS_PATH=${PLAYWRIGHT_BROWSERS_PATH:-unset})."
  if [[ -n "${PLAYWRIGHT_BROWSERS_PATH:-}" && -d "$PLAYWRIGHT_BROWSERS_PATH" ]]; then
    ls -la "$PLAYWRIGHT_BROWSERS_PATH" | head -8
  else
    log "WARNING: PLAYWRIGHT_BROWSERS_PATH not found — tests may fail."
  fi
else
  log "Downloading Chromium (local / non-container CI)..."
  npx --yes playwright install chromium
fi

log "Robot Browser setup complete."
