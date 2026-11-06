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
const versionedAssets = new Set(['brief-ui.js', 'brief-core.js', 'vehicle-brief.json', 'brief.css']);
const loadedVersions = new Map();
// Simulate old unversioned responses still being cached after a deployment.
await page.route('**/assets/**', async route => {
  const url = new URL(route.request().url());
  const name = url.pathname.split('/').pop();
  if (versionedAssets.has(name)) {
    const version = url.searchParams.get('v');
    if (!version) {
      await route.fulfill({ status: 410, contentType: 'text/plain', body: 'Stale unversioned asset' });
      return;
    }
    loadedVersions.set(name, version);
  }
  await route.continue();
});
try {
  for (const lang of ['en', 'ja']) {
    loadedVersions.clear();
    await page.goto(base + `tools/vehicle-brief${lang === 'ja' ? '.ja' : ''}.html`);
    await page.locator('[data-demo=nbox]').waitFor({ state: 'visible' });
    await page.waitForFunction(() => !document.querySelector('[data-demo=nbox]').disabled);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.click('[data-demo=nbox]');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'result-title');
    // site.css uses smooth scrolling, so focus can move before scrolling finishes.
    await page.waitForFunction(() => {
      const rect = document.querySelector('#result-title').getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }, null, { timeout: 5000 });
    await page.setViewportSize({ width: 1365, height: 1000 });
    assert.deepEqual(errors, [], 'The sample should render without a browser exception');
    assert.deepEqual(new Set(loadedVersions.keys()), versionedAssets);
    assert.equal(new Set(loadedVersions.values()).size, 1, 'UI, core, data and styles must share the deployment version');
    assert.ok((await page.locator('#output').inputValue()).includes('5423'));
    assert.equal(await page.locator('.reference-card').count(), 1);
    assert.equal(await page.locator('#workflow-checks li').count(), 4);
    await page.click('#copy-checklist');
    const checklist = await page.locator('#checklist-output').inputValue();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), checklist);
    assert.ok(checklist.includes('5423'));
    assert.ok(!checklist.includes(lang === 'ja' ? '## AIへの依頼' : '## Instructions for the assistant'));
    const checklistDownload = page.waitForEvent('download');
    await page.click('#download-checklist');
    const checklistFile = await checklistDownload;
    assert.equal(checklistFile.suggestedFilename(), `vehicle-checklist-nbox-${lang}.txt`);
    assert.equal(await readFile(await checklistFile.path(), 'utf8'), checklist);
    await page.emulateMedia({ media: 'print' });
    assert.equal(await page.locator('#print-output').isVisible(), true);
    assert.equal(await page.locator('#print-output').textContent(), checklist);
    assert.equal(await page.locator('.workflow-checklist').isVisible(), false, 'Print should not duplicate the checklist');
    await page.emulateMedia({ media: 'screen' });
    await page.click('#copy');
    assert.ok((await page.evaluate(() => navigator.clipboard.readText())).includes('5423'));
    const download = page.waitForEvent('download');
    await page.click('#download');
    const file = await download;
    assert.match(file.suggestedFilename(), /vehicle-brief-nbox-/);
    const aiFile = await readFile(await file.path(), 'utf8');
    assert.ok(aiFile.includes('5423'));
    assert.ok(aiFile.includes(lang === 'ja' ? '## AIへの依頼' : '## Instructions for the assistant'));
    await page.fill('#context', 'PRIVATE CUSTOMER NOTE');
    await page.fill('#concern', '<img src=x onerror="window.injected=true">');
    assert.equal(await page.locator('#result').isVisible(), false);
    const requested = [];
    page.on('request', request => requested.push(request.url()));
    await page.click('#generate');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'result-title', 'Building a brief should focus the result');
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
    // A missing model profile must still give visible, goal-specific questions.
    const questionSets = new Set();
    for (const task of ['buy', 'symptom', 'recall', 'maintenance', 'estimate', 'sell']) {
      await page.selectOption('#task', task);
      assert.equal(await page.locator('#result').isVisible(), false);
      await page.click('#generate');
      assert.equal(await page.locator('.reference-card').count(), 0);
      assert.equal(await page.locator('#workflow-checks').isVisible(), true);
      assert.equal(await page.locator('#workflow-checks li').count(), 4);
      questionSets.add(await page.locator('#workflow-checks').textContent());
      await page.click('#copy-checklist');
      const plain = await page.evaluate(() => navigator.clipboard.readText());
      assert.ok(plain.includes('Custom car'));
      assert.ok(plain.includes(lang === 'ja' ? '確認済みの車種別資料は一致しませんでした' : 'No reviewed model profile matched'));
      assert.ok(!(await page.locator('#workflow-link').getAttribute('href')).includes('undefined'));
    }
    assert.equal(questionSets.size, 6);
    await page.click('[data-demo=serena]');
    assert.ok((await page.locator('#output').inputValue()).includes('5268'));
    await page.fill('#year', '2014');
    await page.click('#generate');
    assert.equal(await page.locator('.reference-card').count(), 0);
    await page.click('[data-demo=cx5]');
    assert.ok((await page.locator('#output').inputValue()).includes('3997'));
    for (const [vehicle, code, year, marker] of [
      ['aqua', 'NHP10H', '2020', lang === 'ja' ? 'サービスキャンペーン（リコールではありません）' : 'Service campaign — not a recall'],
      ['prius-50', 'ZVW51', '2016', '3905'],
      ['fit-gk-gp', 'GP5', '2018', '5423'],
    ]) {
      await page.selectOption('#vehicle', vehicle);
      await page.selectOption('#code', code);
      await page.fill('#year', year);
      await page.click('#generate');
      assert.equal(await page.locator('.reference-card').count(), 1);
      assert.ok((await page.locator('#output').inputValue()).includes(marker));
      if (vehicle === 'aqua') {
        assert.equal(await page.locator('.reference-kind').textContent(), marker);
        await page.click('#copy');
        assert.ok((await page.evaluate(() => navigator.clipboard.readText())).includes(marker));
      }
      await page.fill('#year', '2025');
      await page.click('#generate');
      assert.equal(await page.locator('.reference-card').count(), 0);
    }
    await page.fill('#year', '2018');
    await page.click('#generate');
    await mkdir('browser-artifacts', { recursive: true });
    await page.screenshot({ path: `browser-artifacts/builder-${lang}-desktop.png`, fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: `browser-artifacts/builder-${lang}-mobile.png`, fullPage: true });
    await page.setViewportSize({ width: 1365, height: 1000 });
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true }));
    await page.click('#copy-checklist');
    assert.equal(await page.locator('#checklist-details').getAttribute('open'), '');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'checklist-output');
    const copiedLength = (await page.locator('#checklist-output').inputValue()).length;
    assert.deepEqual(await page.locator('#checklist-output').evaluate(el => [el.selectionStart, el.selectionEnd]), [0, copiedLength]);
    await page.click('#copy');
    assert.equal(await page.locator('#prompt-details').getAttribute('open'), '');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'output');
    await page.click('#clear-inputs');
    assert.equal(await page.locator('#output').inputValue(), '');
    assert.equal(await page.locator('#checklist-output').inputValue(), '');
    assert.equal(await page.locator('#print-output').textContent(), '');
    assert.equal(await page.locator('#result').isVisible(), false);
  }
  for (const lang of ['en', 'ja']) {
    const preview = `tools/obd2-preview${lang === 'ja' ? '.ja' : ''}.html`;
    for (const width of [390, 1365]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(base + preview);
      assert.equal(await page.locator('html').getAttribute('lang'), lang);
      assert.equal(await page.locator('details').count(), 3);
      for (const card of await page.locator('details').all()) {
        await card.locator('summary').click();
        assert.equal(await card.evaluate(element => element.open), true);
        assert.equal(await card.locator('.body').isVisible(), true);
      }
      const prompt = await page.locator('#sample-prompt').inputValue();
      for (const value of ['P0420', '98 km', '2,210 rpm', '740 rpm']) assert.ok(prompt.includes(value));
      assert.ok(await page.locator('#sample-prompt').getAttribute('readonly') !== null);
      const requests = [];
      const captureRequest = request => requests.push(request.url());
      page.on('request', captureRequest);
      const storageBefore = await page.evaluate(() => [JSON.stringify(localStorage), JSON.stringify(sessionStorage)]);
      const note = await page.locator('#sample-handover').inputValue();
      for (const value of ['P0420', '98 km', '2,210 rpm', '740 rpm']) assert.ok(note.includes(value));
      assert.ok(note.includes(lang === 'ja' ? '模擬サンプル' : 'SIMULATED EXAMPLE'));
      const editedNote = note + '\nTest observation';
      await page.locator('#sample-handover').fill(editedNote);
      await page.click('#copy-handover');
      await page.waitForFunction(() => !document.querySelector('#copy-handover').disabled);
      assert.equal(await page.evaluate(() => navigator.clipboard.readText()), editedNote);
      assert.equal(await page.locator('#handover-status').textContent(), await page.locator('#copy-handover').getAttribute('data-success'));
      await page.click('#copy-prompt');
      await page.waitForFunction(() => !document.querySelector('#copy-prompt').disabled);
      assert.equal(await page.evaluate(() => navigator.clipboard.readText()), prompt);
      assert.equal(await page.locator('#copy-status').textContent(), await page.locator('#copy-prompt').getAttribute('data-success'));
      // Cover both unsupported clipboard APIs and permission rejection.
      await page.evaluate(mode => Object.defineProperty(navigator, 'clipboard', {
        value: mode === 390 ? undefined : { writeText: async () => { throw new Error('Permission denied'); } },
        configurable: true
      }), width);
      await page.click('#copy-prompt');
      await page.waitForFunction(() => !document.querySelector('#copy-prompt').disabled);
      assert.equal(await page.locator('#copy-status').textContent(), await page.locator('#copy-prompt').getAttribute('data-fallback'));
      assert.equal(await page.evaluate(() => document.activeElement.id), 'sample-prompt');
      assert.deepEqual(await page.locator('#sample-prompt').evaluate(el => [el.selectionStart, el.selectionEnd]), [0, prompt.length]);
      await page.click('#copy-handover');
      await page.waitForFunction(() => !document.querySelector('#copy-handover').disabled);
      assert.equal(await page.locator('#handover-status').textContent(), await page.locator('#copy-handover').getAttribute('data-fallback'));
      assert.equal(await page.evaluate(() => document.activeElement.id), 'sample-handover');
      assert.deepEqual(await page.locator('#sample-handover').evaluate(el => [el.selectionStart, el.selectionEnd]), [0, editedNote.length]);
      assert.deepEqual(await page.evaluate(() => [JSON.stringify(localStorage), JSON.stringify(sessionStorage)]), storageBefore);
      assert.deepEqual(requests, [], 'Copying must not submit the sample to any service');
      page.off('request', captureRequest);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'OBD preview must fit the viewport');
      await page.screenshot({ path: `browser-artifacts/obd-preview-${lang}-${width}.png`, fullPage: true });
      const alternateLang = lang === 'en' ? 'ja' : 'en';
      await page.locator(`header a[hreflang="${alternateLang}"]`).click();
      assert.equal(await page.locator('html').getAttribute('lang'), alternateLang);
    }
    // The page remains useful when JavaScript is disabled.
    const noScript = await browser.newContext({ javaScriptEnabled: false });
    try {
      const staticPage = await noScript.newPage();
      await staticPage.goto(base + preview);
      await staticPage.locator('summary').first().click();
      assert.equal(await staticPage.locator('details .body').first().isVisible(), true);
      assert.ok((await staticPage.locator('#sample-prompt').inputValue()).includes('P0420'));
      assert.equal(await staticPage.locator('#copy-prompt').isVisible(), false);
      assert.ok((await staticPage.locator('#sample-handover').inputValue()).includes('P0420'));
      await staticPage.locator('#sample-handover').fill('Editable without JavaScript');
      assert.equal(await staticPage.locator('#sample-handover').inputValue(), 'Editable without JavaScript');
      assert.equal(await staticPage.locator('#copy-handover').isVisible(), false);
    } finally { await noScript.close(); }
  }
  assert.deepEqual(errors, []);
  console.log('OK: bilingual builders and OBD previews; copy/fallback, downloads, privacy, language switching, no-JS use, and mobile layout.');
} finally { await browser.close(); server.close(); }
