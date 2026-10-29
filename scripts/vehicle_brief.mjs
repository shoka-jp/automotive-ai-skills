#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { makeBrief } from '../assets/js/brief-core.js';

const data = JSON.parse(readFileSync(new URL('../assets/data/vehicle-brief.json', import.meta.url), 'utf8'));
const args = process.argv.slice(2);
const allowed = new Set(['vehicle', 'code', 'year', 'market', 'task', 'lang', 'context', 'concern']);
const input = { market: 'unknown', lang: 'en', task: 'buy' };
if (!args.length || args.includes('--help')) {
  console.log('Usage: node scripts/vehicle_brief.mjs --vehicle JF3 --market Japan --year 2019 --task buy --lang ja');
  console.log('Optional: --code, --context, --concern. No API key or network call. Market must be explicit.');
  console.log('Vehicles: ' + data.profiles.map(p => p.id).join(', '));
  console.log('Tasks: ' + data.workflows.map(w => w.id).join(', '));
  process.exit(0);
}
for (let i = 0; i < args.length; i += 2) {
  const key = args[i].replace(/^--/, '');
  if (!args[i].startsWith('--') || !allowed.has(key) || !args[i + 1] || args[i + 1].startsWith('--')) {
    console.error(`Invalid option/value: ${args[i]}`); process.exit(2);
  }
  input[key] = args[i + 1];
}
if (!['en', 'ja'].includes(input.lang) || !['Japan', 'other', 'unknown'].includes(input.market) || !data.workflows.some(w => w.id === input.task)) {
  console.error('Invalid language, market, or task. See --help.'); process.exit(2);
}
try { process.stdout.write(makeBrief(data, input).text); }
catch (error) { console.error(error.message); process.exit(2); }
