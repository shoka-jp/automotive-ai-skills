#!/usr/bin/env python3
"""Build the browser/CLI knowledge bundle from reviewed repository sources."""
import argparse
import datetime
import json
import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'assets/data/vehicle-brief.json'


def section(text, heading):
    match = re.search(r'^## ' + re.escape(heading) + r'\n(.*?)(?=^## |\Z)', text, re.M | re.S)
    if not match:
        raise ValueError(f'Missing section: {heading}')
    return match.group(1).strip()


def build():
    rows = yaml.safe_load((ROOT / 'data/known-issues/index.yaml').read_text())['entries']
    index = {r['id']: r for r in rows}
    profiles = yaml.safe_load((ROOT / 'data/vehicle-profiles.yaml').read_text())['profiles']
    workflows = yaml.safe_load((ROOT / 'data/brief-workflows.yaml').read_text())['workflows']
    entries = {}
    for profile in profiles:
        assert profile['market'] == 'Japan'
        for variant in profile['variants']:
            assert len(variant['years']) == 2 and variant['years'][0] <= variant['years'][1]
        for key in profile['entry_ids']:
            row = index[key]
            assert row.get('source_urls') and row.get('last_verified'), f'{key}: needs reviewed sources'
            assert all(url.startswith('https://') for url in row['source_urls']), key
            datetime.date.fromisoformat(row['last_verified'])
            assert row.get('evidence_type') in ('recall', 'warranty_extension', 'manufacturer_specification')
            assert row.get('markets') == ['Japan']
            item = {k: row[k] for k in ('id', 'evidence_type', 'campaign_ids', 'source_urls', 'last_verified')}
            item['localized'] = {}
            for lang, scope, issue, buyer in [('en', 'Scope', 'The issue', 'Buyer checklist'),
                                            ('ja', '対象範囲', '問題の内容', '購入検討者向けチェックリスト')]:
                path = ROOT / 'data/known-issues' / row['files'][lang]
                content = path.read_text()
                for url in row['source_urls']:
                    assert '](' + url + ')' in content, f'{path}: missing source {url}'
                # Only the checklist bullets, not the embedded example prompt.
                checks = [line[2:] for line in section(content, buyer).splitlines() if line.startswith('- ')]
                assert checks, path
                item['localized'][lang] = {
                    'title': content.splitlines()[0].removeprefix('# '),
                    'path': 'data/known-issues/' + row['files'][lang].removesuffix('.md') + '.html',
                    'scope': section(content, scope), 'issue': section(content, issue), 'checks': checks,
                }
            entries[key] = item
    for workflow in workflows:
        for lang in ('en', 'ja'):
            name = 'README.ja.md' if lang == 'ja' else 'README.md'
            assert (ROOT / 'skills' / workflow['skill'] / name).is_file()
    return {'schema_version': 1, 'library_entry_count': len(rows), 'profiles': profiles,
            'workflows': workflows, 'entries': entries}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail when the committed bundle is stale')
    args = parser.parse_args()
    data = build()
    output = json.dumps(data, ensure_ascii=False, indent=2) + '\n'
    if args.check:
        if not OUTPUT.is_file() or OUTPUT.read_text() != output:
            raise SystemExit('Stale brief data: run python scripts/build_brief_data.py')
    else:
        OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        OUTPUT.write_text(output)
    print(f"OK: {len(data['profiles'])} vehicle profiles, {len(data['entries'])} reviewed references, "
          f"{len(data['workflows'])} workflows; bundle {'checked' if args.check else 'written'}.")


if __name__ == '__main__':
    main()
