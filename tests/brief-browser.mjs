/** Run against a real Jekyll build: node tests/brief-browser.mjs _site */
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = resolve(process.argv[2] || '_site');
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://local').pathname);
    const path = resolve(root, pathname.replace(/^\/automotive-ai-skills\//, '') || 'index.html');
    if (!path.startsWith(root + '/')) { res.writeHead(403).end(); return; }
    const mime = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.svg': 'image/svg+xml' }[extname(path)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime + '; charset=utf-8' }).end(await readFile(path));
  } catch { res.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}/automotive-ai-skills/`;
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1365, height: 1000 }, permissions: ['clipboard-read', 'clipboard-write'] });
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
try {
  for (const lang of ['en', 'ja']) {
    await page.goto(base + `tools/vehicle-brief${lang === 'ja' ? '.ja' : ''}.html`);
    await page.locator('[data-demo=nbox]').waitFor({ state: 'visible' });
    await page.waitForFunction(() => !document.querySelector('[data-demo=nbox]').disabled);
    await page.click('[data-demo=nbox]');
    assert.ok((await page.locator('#output').inputValue()).includes('5423'));
    assert.equal(await page.locator('.reference-card').count(), 1);
    await page.click('#copy');
    assert.ok((await page.evaluate(() => navigator.clipboard.readText())).includes('5423'));
    const download = page.waitForEvent('download');
    await page.click('#download');
    const file = await download;
    assert.match(file.suggestedFilename(), /vehicle-brief-nbox-/);
    assert.ok((await readFile(await file.path(), 'utf8')).includes('5423'));
    await page.fill('#context', 'PRIVATE CUSTOMER NOTE');
    await page.fill('#concern', '<img src=x onerror="window.injected=true">');
    assert.equal(await page.locator('#result').isVisible(), false);
    const requested = [];
    page.on('request', request => requested.push(request.url()));
    await page.click('#generate');
    await page.click('#share');
    const shared = await page.locator('#share-value').inputValue();
    assert.ok(!shared.includes('PRIVATE') && !shared.includes('2019') && !shared.includes('img'));
    assert.equal(await page.evaluate(() => window.injected), undefined);
    assert.equal(requested.filter(x => x.includes('PRIVATE') || x.includes('img')).length, 0);
    assert.equal(await page.evaluate(() => localStorage.length + sessionStorage.length), 0);
    await page.selectOption('#market', 'other');
    await page.click('#generate');
    assert.equal(await page.locator('.reference-card').count(), 0);
    assert.ok(!(await page.locator('#output').inputValue()).includes('5423'));
    await page.selectOption('#vehicle', 'other');
    await page.fill('#vehicleName', 'Custom car');
    await page.click('#generate');
    assert.ok((await page.locator('#output').inputValue()).includes('Custom car'));
    await page.click('[data-demo=serena]');
    assert.ok((await page.locator('#output').inputValue()).includes('5268'));
    await page.fill('#year', '2014');
    await page.click('#generate');
    assert.equal(await page.locator('.reference-card').count(), 0);
    await page.click('[data-demo=cx5]');
    assert.ok((await page.locator('#output').inputValue()).includes('3997'));
    await mkdir('browser-artifacts', { recursive: true });
    await page.screenshot({ path: `browser-artifacts/builder-${lang}-desktop.png`, fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: `browser-artifacts/builder-${lang}-mobile.png`, fullPage: true });
    await page.setViewportSize({ width: 1365, height: 1000 });
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true }));
    await page.click('#copy');
    assert.equal(await page.locator('#prompt-details').getAttribute('open'), '');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'output');
    await page.click('#reset');
    assert.equal(await page.locator('#output').inputValue(), '');
    assert.equal(await page.locator('#result').isVisible(), false);
  }
  assert.deepEqual(errors, []);
  console.log('OK: both languages, three demos, copy/fallback, download, privacy, scope exclusions, reset, and mobile overflow.');
} finally { await browser.close(); server.close(); }
