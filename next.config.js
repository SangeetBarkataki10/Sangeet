/** @type {import('next').NextConfig} */
const repoName = "Sangeet";
const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
