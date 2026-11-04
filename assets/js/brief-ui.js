// Keep the module and data on the same deployment as the containing page.
// Otherwise a returning visitor can combine new HTML with cached old assets.
const version = new URL(import.meta.url).searchParams.get('v');
const assetURL = path => {
  const url = new URL(path, import.meta.url);
  if (version) url.searchParams.set('v', version);
  return url.href;
};
const { makeBrief, messages, readPreset, shareURL } = await import(assetURL('./brief-core.js'));

const lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';
const ja = lang === 'ja';
const $ = id => document.getElementById(id);
const form = $('brief-form');
const status = $('status');
let data;
let current;
const t = (en, jp) => ja ? jp : en;
const element = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
};
const link = (label, href) => {
  const node = element('a', label);
  node.href = href;
  node.rel = 'noreferrer';
  return node;
};

function input() { return { ...Object.fromEntries(new FormData(form)), lang }; }

function variants() {
  const profile = data.profiles.find(p => p.id === $('vehicle').value);
  $('code').replaceChildren(new Option(t('Unknown / check the record', '不明・記録で確認'), ''));
  for (const v of profile?.variants ?? []) $('code').add(new Option(v.code, v.code));
  $('custom-vehicle').hidden = $('vehicle').value !== 'other';
  $('code').disabled = !profile;
}

function stale() {
  if (!current) return;
  current = null;
  $('result').hidden = true;
  $('empty').hidden = false;
  status.textContent = t('Inputs changed. Build a new brief to use the latest details.', '入力が変わりました。確認メモを作り直してください。');
}

function referenceCards(result) {
  $('references').replaceChildren();
  for (const entry of result.references) {
    const local = entry.localized[lang];
    const article = element('article', undefined, 'reference-card');
    article.append(element('p', messages[lang][entry.evidence_type], 'reference-kind'));
    article.append(element('h3', local.title));
    article.append(element('p', t('Sources checked: ', '出典確認日：') + entry.last_verified, 'muted small'));
    const list = element('ul', undefined, 'check-list');
    for (const check of local.checks) list.append(element('li', check));
    article.append(list);
    const details = element('details');
    details.append(element('summary', t('Scope and official sources', '対象範囲と公式出典')));
    details.append(element('p', local.scope.replace(/\*\*/g, ''), 'scope-text'));
    details.append(element('p', local.issue));
    const sources = element('ul', undefined, 'source-list');
    for (const url of entry.source_urls) {
      const item = element('li');
      item.append(link(new URL(url).hostname, url));
      sources.append(item);
    }
    details.append(sources);
    details.append(link(t('Read the full reference →', '資料の全文を読む →'), '../' + local.path));
    article.append(details);
    $('references').append(article);
  }
}

function generate() {
  if (!form.reportValidity()) return;
  try {
    current = makeBrief(data, input());
    $('output').value = current.text;
    $('checklist-output').value = current.worksheetText;
    $('print-output').textContent = current.worksheetText;
    $('workflow-checks').replaceChildren(...current.workflow.checks[lang].map(check => element('li', check)));
    $('workflow-link').href = `../skills/${current.workflow.skill}/${ja ? 'README.ja.html' : ''}`;
    $('result-title').textContent = current.profile?.label[lang] ?? t('Your vehicle brief', '車両確認メモ');
    $('result-task').textContent = current.workflow.label[lang];
    $('selection-status').textContent = messages[lang][current.status];
    $('reference-count').textContent = t(`${current.references.length} reviewed reference(s)`, `確認済み資料 ${current.references.length}件`);
    referenceCards(current);
    $('result').hidden = false;
    $('empty').hidden = true;
    $('share-value').hidden = true;
    status.textContent = t('Checklist ready. Use it at your visit or print it. An AI prompt is also available.', '確認メモを作成しました。そのまま相談や印刷に使えます。AIへの質問文もコピーできます。');
  } catch (error) {
    status.textContent = error.message;
  }
}

form.addEventListener('submit', event => { event.preventDefault(); generate(); });
form.addEventListener('input', stale);
$('vehicle').addEventListener('change', () => { variants(); stale(); });
$('copy-checklist').addEventListener('click', async () => {
  if (!current) return;
  try {
    await navigator.clipboard.writeText(current.worksheetText);
    status.textContent = t('Checklist copied. Review personal details before sharing.', '確認事項をコピーしました。共有前に個人情報が含まれていないか確認してください。');
  } catch {
    $('checklist-details').open = true;
    $('checklist-output').focus(); $('checklist-output').select();
    status.textContent = t('Clipboard unavailable. The checklist is selected; copy it manually.', '自動コピーが使えないため確認事項を選択しました。手動でコピーしてください。');
  }
});
$('copy').addEventListener('click', async () => {
  if (!current) return;
  try {
    await navigator.clipboard.writeText(current.text);
    status.textContent = t('Copied. Review personal details before pasting into an AI.', 'コピーしました。AIへ渡す前に個人情報が含まれていないか確認してください。');
  } catch {
    $('prompt-details').open = true;
    $('output').focus(); $('output').select();
    status.textContent = t('Clipboard unavailable. The text is selected; copy it manually.', '自動コピーが使えないため本文を選択しました。手動でコピーしてください。');
  }
});
function downloadText(content, name, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = link('', url);
  a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$('download-checklist').addEventListener('click', () => {
  if (!current) return;
  downloadText(current.worksheetText, `vehicle-checklist-${current.profile?.id ?? 'custom'}-${lang}.txt`, 'text/plain;charset=utf-8');
  status.textContent = t('Checklist download started. Review the saved file before sharing.', '確認メモの保存を開始しました。共有前に保存した内容を確認してください。');
});
$('download').addEventListener('click', () => {
  if (!current) return;
  downloadText(current.text, `vehicle-brief-${current.profile?.id ?? 'custom'}-${lang}.md`, 'text/markdown;charset=utf-8');
  status.textContent = t('AI prompt download started. Review the saved file before sharing.', 'AI質問文の保存を開始しました。共有前に保存した内容を確認してください。');
});
$('share').addEventListener('click', async () => {
  const url = shareURL(data, input());
  $('share-value').value = url;
  $('share-value').hidden = false;
  try { await navigator.clipboard.writeText(url); }
  catch { $('share-value').focus(); $('share-value').select(); }
  status.textContent = t('Preset link ready. Your year, model code, history and concern are not included.', '車種・目的だけの共有リンクです。製造年・型式・履歴・相談内容は含みません。');
});
$('print').addEventListener('click', () => window.print());
$('clear-inputs').addEventListener('click', () => {
  form.reset(); variants(); current = null;
  $('result').hidden = true; $('empty').hidden = false;
  $('output').value = ''; $('print-output').textContent = ''; $('references').replaceChildren();
  $('checklist-output').value = ''; $('workflow-checks').replaceChildren();
  $('share-value').value = ''; $('share-value').hidden = true;
  status.textContent = t('Cleared. Nothing was saved to browser storage.', '入力を消去しました。ブラウザーの保存領域には記録していません。');
});
for (const button of document.querySelectorAll('[data-demo]')) {
  button.addEventListener('click', () => {
    form.reset();
    const demo = button.dataset.demo;
    $('vehicle').value = demo;
    variants();
    $('market').value = 'Japan';
    $('year').value = demo === 'nbox' ? '2019' : demo === 'serena' ? '2011' : '2014';
    $('code').value = demo === 'nbox' ? 'JF3' : demo === 'serena' ? 'FC26' : 'KE2FW';
    $('task').value = demo === 'nbox' ? 'buy' : 'recall';
    $('concern').value = demo === 'nbox' ? t('Sample: seller says the fuel pump does not need replacement; the identification check record is missing.', 'サンプル：売主は燃料ポンプ交換不要と説明していますが、識別確認の記録はありません。') :
      demo === 'serena' ? t('Sample: there is a heat-shield installation record but no ECO motor replacement record.', 'サンプル：遮熱カバーの装着記録はありますが、ECOモーター交換の記録はありません。') :
      t('Sample: the invoice lists a software update for recall 3997; item (1) completion is unknown.', 'サンプル：3997のソフト更新という記録がありますが、不具合(1)の対応は不明です。');
    generate();
  });
}

try {
  const response = await fetch(assetURL('../data/vehicle-brief.json'));
  if (!response.ok) throw new Error('Data unavailable');
  data = await response.json();
  for (const p of data.profiles) $('vehicle').add(new Option(p.label[lang], p.id));
  $('vehicle').add(new Option(t('Another vehicle / unsure', '他の車種・まだ不明'), 'other'));
  for (const w of data.workflows) $('task').add(new Option(w.label[lang], w.id));
  const preset = readPreset(data, window.location.search);
  $('vehicle').value = preset.vehicle;
  $('task').value = preset.task;
  variants();
  $('generate').disabled = false;
  for (const button of document.querySelectorAll('[data-demo]')) button.disabled = false;
  status.textContent = t('Ready. Choose a vehicle or try a sample.', '準備できました。車種を選ぶか、サンプルを試してください。');
} catch {
  status.textContent = t('Could not load the reference data. Reload or use the linked skill library below.', '資料を読み込めませんでした。再読み込みするか、下のスキル一覧を利用してください。');
}
