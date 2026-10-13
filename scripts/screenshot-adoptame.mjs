// Captures screenshots of Adoptame for the projects section.
// Usage: npm i -D puppeteer && node scripts/screenshot-adoptame.mjs [baseUrl]
// baseUrl defaults to https://adoptame.app (use http://localhost:3000 for a local run).
import puppeteer from 'puppeteer'
import { mkdir } from 'node:fs/promises'

const BASE = process.argv[2] ?? 'https://adoptame.app'
const OUT = 'public/screenshots/adoptame'
const PAGES = [
  { path: '/',            file: '01-home.png' },
  { path: '/fundaciones', file: '02-fundaciones.png' },
  { path: '/register',    file: '03-register.png' },
  { path: '/login',       file: '04-login.png' },
]

await mkdir(OUT, { recursive: true })
const browser = await puppeteer.launch()
const page = await browser.newPage()
// 16:9 to match the project carousel's aspect ratio
await page.setViewport({ width: 1440, height: 810 })

for (const { path, file } of PAGES) {
  await page.goto(BASE + path, { waitUntil: 'networkidle2', timeout: 60000 })
  await new Promise(r => setTimeout(r, 1500)) // let animations/images settle
  await page.screenshot({ path: `${OUT}/${file}` })
  console.log(`✓ ${OUT}/${file}`)
}

await browser.close()
