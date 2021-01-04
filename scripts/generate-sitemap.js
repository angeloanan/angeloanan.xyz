const fs = require('fs')
const globby = require('globby')

const generateSitemap = async () => {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/**/*{.ts,.tsx,.mdx}',
    '!src/pages/_*.js',
    '!src/pages/api'
  ])
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages
    .map(page => {
      const path = page
        .replace('src/', '')
        .replace('pages', '')
        .replace('.tsx', '')
        .replace('.jsx', '')
        .replace('.mdx', '')
      const route = path === '/index' ? '' : path

      if (route === '/_app' || route === '/_document') return ''

      return `\n  <url>\n    <loc>${`https://angeloanan.xyz${route}`}</loc>\n  </url>`
    })
    .join('')}\n</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

module.exports = generateSitemap
