#!/usr/bin/env python3
"""Check the built Pages site, including issues invisible in Markdown source.

Run after actions/jekyll-build-pages: python3 scripts/validate_site.py _site
Uses only the standard library; does not depend on external network responses.
"""

import json
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from xml.etree import ElementTree

ORIGIN = 'https://shoka-jp.github.io'
BASE = '/automotive-ai-skills/'


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.lang = ''
        self.title = ''
        self.meta = {}
        self.canonicals = []
        self.alternates = {}
        self.hrefs = []
        self.ids = set()
        self.structured = []
        self.in_title = False
        self.in_json = False
        self.json_text = ''
        self.source = source
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            self.ids.add(a['id'])
        if tag == 'a' and a.get('name'):
            self.ids.add(a['name'])
        if tag == 'html':
            self.lang = a.get('lang', '')
        if tag == 'title':
            self.in_title = True
        if tag == 'meta':
            self.meta[a.get('name', a.get('property'))] = a.get('content', '')
        if tag in ('a', 'link') and a.get('href'):
            self.hrefs.append(a['href'])
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonicals.append(a.get('href', ''))
        if tag == 'link' and a.get('rel') == 'alternate' and a.get('hreflang'):
            self.alternates[a['hreflang']] = a.get('href', '')
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.in_json = True
            self.json_text = ''

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_json:
            self.json_text += data

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script' and self.in_json:
            self.structured.append(json.loads(self.json_text))
            self.in_json = False


def check_site(root):
    errors = []
    pages = {}

    def fail(path, message):
        errors.append(f'{path}: {message}')

    def local_path(url):
        parsed = urlsplit(url)
        if parsed.netloc != urlsplit(ORIGIN).netloc or not parsed.path.startswith(BASE):
            return None
        relative = unquote(parsed.path[len(BASE):])
        if not relative or relative.endswith('/'):
            relative += 'index.html'
        return relative

    for path in sorted(root.rglob('*.html')):
        relative = path.relative_to(root).as_posix()
        try:
            pages[relative] = Page(path.read_text(encoding='utf-8'))
        except (ValueError, UnicodeError) as exc:
            fail(relative, f'HTML or JSON-LD parse error: {exc}')
    if not pages or 'index.html' not in pages:
        return ['No built home page found; run Jekyll first.']

    for path, page in pages.items():
        public = ORIGIN + BASE + (path[:-10] if path.endswith('index.html') else path)
        expected = 'ja' if '.ja.html' in path or '/ja/' in path else 'es' if '.es.html' in path else 'en'
        if page.lang != expected:
            fail(path, f'expected html lang={expected}, got {page.lang}')
        if not page.meta.get('og:locale', '').startswith(expected):
            fail(path, f'og:locale does not match {expected}')
        if not page.title.strip() or not page.meta.get('description', '').strip():
            fail(path, 'missing title or description')
        if len(page.canonicals) != 1 or not page.canonicals[0].startswith(ORIGIN + BASE):
            fail(path, 'expected one absolute project canonical URL')
        else:
            target = local_path(page.canonicals[0])
            if target not in pages:
                fail(path, f'canonical target is missing: {target}')
        for href in page.hrefs:
            url = urljoin(public, href)
            target = local_path(url)
            if target is None:
                continue
            if not (root / target).is_file():
                fail(path, f'broken built link: {href}')
            elif target in pages:
                fragment = unquote(urlsplit(url).fragment)
                if fragment and fragment not in pages[target].ids:
                    fail(path, f'missing anchor: {href}')
        for lang, url in page.alternates.items():
            target = pages.get(local_path(url))
            if not target:
                fail(path, f'missing alternate: {url}')
            elif lang != 'x-default':
                if target.lang != lang:
                    fail(path, f'alternate {lang} points to a {target.lang} page')
                if page.canonicals and target.alternates.get(page.lang) != page.canonicals[0]:
                    fail(path, f'alternate is not reciprocal: {url}')

    skill_snippets = [p.meta.get('description') for path, p in pages.items()
                      if path.startswith('skills/') and path != 'skills/index.html'
                      and 'noindex' not in p.meta.get('robots', '')]
    for description, count in Counter(skill_snippets).items():
        if count > 1:
            fail('skills', f'{count} pages share one description: {description}')
    for required in ('docs/try-obd2-mcp.html', 'docs/try-obd2-mcp.ja.html'):
        if required not in pages:
            fail(required, 'demo guide was not built')
    home = pages['index.html']
    if 'location.replace' in home.source or 'navigator.language' in home.source:
        fail('index.html', 'forced language routing has returned')
    if not any(x.get('@type') == 'SoftwareSourceCode' for x in home.structured):
        fail('index.html', 'missing source-code metadata')
    try:
        sitemap = ElementTree.parse(root / 'sitemap.xml')
        locations = [e.text for e in sitemap.findall('.//{*}loc')]
        for url in locations:
            target = pages.get(local_path(url))
            if target is None:
                fail('sitemap.xml', f'URL is not a built HTML page: {url}')
            elif target.canonicals != [url] or 'noindex' in target.meta.get('robots', ''):
                fail('sitemap.xml', f'noncanonical or noindex page listed: {url}')
    except (OSError, ElementTree.ParseError) as exc:
        fail('sitemap.xml', str(exc))
    print(f'Checked {len(pages)} HTML pages and {len(skill_snippets)} skill descriptions.')
    return errors


if __name__ == '__main__':
    errors = check_site(Path(sys.argv[1] if len(sys.argv) > 1 else '_site'))
    if errors:
        print('\n'.join(errors))
        sys.exit(1)
    print('OK: built-site metadata, language alternates, sitemap and internal links.')
