import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('../scripts/vehicle_brief.mjs', import.meta.url));
const common = ['--vehicle', 'JF3', '--market', 'Japan', '--year', '2019', '--task', 'buy'];
const cli = args => spawnSync(process.execPath, [script, ...args], { encoding: 'utf8' });

for (const lang of ['en', 'ja']) {
  test(`CLI emits a source-linked human checklist in ${lang}`, () => {
    const result = cli([...common, '--lang', lang, '--format', 'checklist', '--context', 'PRIVATE HISTORY', '--concern', 'PRIVATE CONCERN']);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stderr, '');
    assert(result.stdout.startsWith(lang === 'ja' ? '# 車両確認チェックリスト' : '# Vehicle checklist'));
    assert.match(result.stdout, /PRIVATE HISTORY/);
    assert.match(result.stdout, /PRIVATE CONCERN/);
    assert.match(result.stdout, /5423/);
    assert.match(result.stdout, /https:\/\//);
    assert(!result.stdout.includes(lang === 'ja' ? '## AIへの依頼' : '## Instructions for the assistant'));
    assert(result.stdout.includes(lang === 'ja' ? '点検結果や安全性の判定ではありません' : 'not inspection findings or a safety assessment'));
  });

  for (const format of ['prompt', 'checklist']) {
    test(`CLI explicitly omits free-text notes from ${lang} ${format}`, () => {
      const result = cli(['--omit-notes', ...common, '--lang', lang, '--format', format,
        '--context', 'PRIVATE HISTORY\nAdditional detail', '--concern', 'PRIVATE CONCERN\n<script>private()</script>']);
      assert.equal(result.status, 0, result.stderr);
      assert.doesNotMatch(result.stdout, /PRIVATE|Additional detail|private\(\)/);
      assert(result.stdout.includes(lang === 'ja' ? '【共有用に省略】' : '[Omitted for sharing]'));
      assert.match(result.stdout, /JF3/);
      assert.match(result.stdout, /2019/);
      assert.match(result.stdout, /5423/);
    });
  }
}

test('existing CLI calls still emit an AI prompt and keep supplied notes', () => {
  const result = cli([...common, '--concern', 'MY QUESTION']);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /## Instructions for the assistant/);
  assert.match(result.stdout, /MY QUESTION/);
});

test('checklist format preserves market exclusions and general guidance', () => {
  const result = cli(['--vehicle', 'JF3', '--market', 'other', '--format', 'checklist']);
  assert.equal(result.status, 0, result.stderr);
  assert.doesNotMatch(result.stdout, /5423/);
  assert.match(result.stdout, /original market/);
  assert.match(result.stdout, /## Questions for this visit/);
});

test('invalid or conflicting CLI options fail without producing a shareable output', () => {
  for (const args of [
    ['--format', 'json'], ['--format'], ['--format', '--omit-notes'],
    ['--format', 'prompt', '--format', 'checklist'], ['--omit-notes', '--omit-notes'],
    ['--omit-notes', 'false'], ['--unknown'], ['--year', '2019.5'],
  ]) {
    const result = cli(args);
    assert.equal(result.status, 2, JSON.stringify(args));
    assert.equal(result.stdout, '', JSON.stringify(args));
    assert.ok(result.stderr.trim(), JSON.stringify(args));
  }
});
