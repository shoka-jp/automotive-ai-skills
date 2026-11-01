import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, cp, readFile, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const skills = ["used-car-inspector","vehicle-troubleshooting","vehicle-recall-checker","repair-estimate-reviewer","vehicle-maintenance-planner","used-car-listing-assistant"];
test('standalone copies provide a safe fallback without repository routing data', async () => {
  const root = await mkdtemp(join(tmpdir(), 'standalone-skills-'));
  try {
    for (const name of skills) {
      const dest = join(root, '.agents', 'skills', name);
      await cp(resolve('skills', name), dest, { recursive: true });
      await assert.rejects(access(resolve(dest, '../../docs/model-reference-routing.md')));
      for (const file of ['SKILL.md', 'README.md']) {
        const text = await readFile(join(dest, file), 'utf8');
        assert.match(text, /Standalone installation/);
        assert.ok(text.includes('https://shoka-jp.github.io/automotive-ai-skills/docs/model-reference-routing.html'));
        assert.match(text, /model-specific evidence is unavailable/);
      }
      const japanese = await readFile(join(dest, 'README.ja.md'), 'utf8');
      assert.match(japanese, /スキル単体で導入した場合/);
      assert.match(japanese, /車種別根拠が得られない/);
    }
  } finally { await rm(root, { recursive: true, force: true }); }
});
