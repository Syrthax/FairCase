/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io")
const basePath =
  isGithubActions && repositoryName && !isUserOrOrgPagesRepo
    ? `/${repositoryName}`
    : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
