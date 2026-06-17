/**
 * Prefix root-relative paths with Next.js basePath (GitHub Pages subpath).
 * Hash-only links (e.g. #contact) are returned unchanged.
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath) {
    return path;
  }

  return `${basePath}${path}`;
}
