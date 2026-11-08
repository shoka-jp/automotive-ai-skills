#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { makeBrief } from '../assets/js/brief-core.js';

const data = JSON.parse(readFileSync(new URL('../assets/data/vehicle-brief.json', import.meta.url), 'utf8'));
const args = process.argv.slice(2);
const allowed = new Set(['vehicle', 'code', 'year', 'market', 'task', 'lang', 'context', 'concern', 'format']);
const input = { market: 'unknown', lang: 'en', task: 'buy' };
let format = 'prompt';
let omitNotes = false;
if (!args.length || args.includes('--help')) {
  console.log('Usage: node scripts/vehicle_brief.mjs --vehicle JF3 --market Japan --year 2019 --task buy --lang ja');
  console.log('Optional: --code, --context, --concern. No API key or network call. Market must be explicit.');
  console.log('Output: --format prompt|checklist (default: prompt). Redirect stdout to save a file.');
  console.log('Privacy: --omit-notes replaces history and concern in either output with omission markers. Vehicle details remain; review before sharing.');
  console.log('Vehicles: ' + data.profiles.map(p => p.id).join(', '));
  console.log('Tasks: ' + data.workflows.map(w => w.id).join(', '));
  process.exit(0);
}
const seen = new Set();
for (let i = 0; i < args.length;) {
  const key = args[i].replace(/^--/, '');
  if (seen.has(key)) {
    console.error(`Duplicate option: --${key}`); process.exit(2);
  }
  seen.add(key);
  if (args[i] === '--omit-notes') {
    omitNotes = true; i++; continue;
  }
  if (!args[i].startsWith('--') || !allowed.has(key) || !args[i + 1] || args[i + 1].startsWith('--')) {
    console.error(`Invalid option/value: ${args[i]}`); process.exit(2);
  }
  if (key === 'format') format = args[i + 1];
  else input[key] = args[i + 1];
  i += 2;
}
if (!['prompt', 'checklist'].includes(format) || !['en', 'ja'].includes(input.lang) || !['Japan', 'other', 'unknown'].includes(input.market) || !data.workflows.some(w => w.id === input.task)) {
  console.error('Invalid format, language, market, or task. See --help.'); process.exit(2);
}
try {
  const omitted = input.lang === 'ja' ? '【共有用に省略】' : '[Omitted for sharing]';
  const values = omitNotes ? { ...input, context: omitted, concern: omitted } : input;
  const brief = makeBrief(data, values);
  process.stdout.write(format === 'checklist' ? brief.worksheetText : brief.text);
}
catch (error) { console.error(error.message); process.exit(2); }
