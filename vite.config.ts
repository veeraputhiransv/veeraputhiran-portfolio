import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

function normalizeBase(value: string): string {
  if (value === '/') return '/'
  const withLeading = value.startsWith('/') ? value : `/${value}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

function resolveBase(): string {
  const explicit = process.env.GITHUB_PAGES_BASE ?? process.env.BASE_PATH
  if (explicit) return normalizeBase(explicit)

  const repository = process.env.GITHUB_REPOSITORY
  if (repository) {
    const repoName = repository.split('/')[1] ?? ''
    if (!repoName || repoName.endsWith('.github.io')) return '/'
    return `/${repoName}/`
  }

  return '/'
}

function resolveSiteUrl(): string | undefined {
  const explicit = process.env.SITE_URL ?? process.env.VITE_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')

  const repository = process.env.GITHUB_REPOSITORY
  if (!repository) return undefined

  const [owner, name] = repository.split('/')
  if (!owner || !name) return undefined
  if (name.endsWith('.github.io')) return `https://${name}`
  return `https://${owner}.github.io/${name}`
}

function githubPagesSeoPlugin(): Plugin {
  return {
    name: 'github-pages-seo',
    transformIndexHtml(html) {
      const siteUrl = resolveSiteUrl()
      const canonical = siteUrl ? `${siteUrl}/` : './'
      return html.replaceAll('%CANONICAL_URL%', canonical)
    },
    writeBundle() {
      const outDir = resolve(process.cwd(), 'dist')
      const siteUrl = resolveSiteUrl()
      const loc = siteUrl ? `${siteUrl}/` : '/'

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

      const robots = siteUrl
        ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
        : `User-agent: *\nAllow: /\n`

      writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap)
      writeFileSync(resolve(outDir, 'robots.txt'), robots)
      writeFileSync(resolve(outDir, '.nojekyll'), '')
    },
  }
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react(), tailwindcss(), githubPagesSeoPlugin()],
  build: {
    sourcemap: false,
    cssMinify: true,
    assetsInlineLimit: 4096,
  },
})
