/**
 * Build a static export for GitHub Pages.
 * API routes are removed because `output: "export"` does not support them.
 */
import { execSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";
import { join } from "node:path";

const apiDir = join(process.cwd(), "src", "app", "api");
const apiBackup = join(process.cwd(), "src", "app", "_api_backup");

let apiMoved = false;

try {
  if (existsSync(apiDir)) {
    if (existsSync(apiBackup)) {
      throw new Error("Stale src/app/_api_backup exists. Remove it and retry.");
    }
    renameSync(apiDir, apiBackup);
    apiMoved = true;
  }

  execSync("node ./node_modules/next/dist/bin/next build", {
    stdio: "inherit",
    env: { ...process.env, GITHUB_PAGES: "true" },
  });
} finally {
  if (apiMoved && existsSync(apiBackup)) {
    renameSync(apiBackup, apiDir);
  }
}
