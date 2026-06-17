/** @type {import('next').NextConfig} */

/** GitHub Pages project site: https://<user>.github.io/<repo-name>/ */
const GITHUB_PAGES_REPO =
  process.env.GITHUB_PAGES_REPO || "cv-portfolio";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${GITHUB_PAGES_REPO}` : "";

const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages ? { output: "export" } : {}),
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY:
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  },
};

export default nextConfig;
