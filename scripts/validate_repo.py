#!/usr/bin/env python3
"""Repository consistency checks for automotive-ai-skills.

Run from the repository root (CI runs it on every push/PR):

    python scripts/validate_repo.py

Checks:
  1. data/known-issues/index.yaml <-> entry files are in sync (both directions)
  2. index.yaml rows carry the required fields with a valid severity
  3. every skill folder has README.md / README.ja.md / SKILL.md / skill.yaml,
     and skill.yaml `name` matches the folder name
  4. skill.yaml `languages.es` is declared iff README.es.md exists
  5. .claude-plugin/plugin.json and marketplace.json versions match and are
     not older than the latest CHANGELOG release
  6. the skills tables in skills/README.md and README.md list exactly the
     skill folders that exist
  7. every skill card on the landing page (index.html) shows ES in its
     language label iff the skill has README.es.md
  8. every skill can be packaged for Claude.ai (scripts/package_skills.py):
     a valid name and a description of at most 200 characters, from
     SKILL.md or skill.yaml `claude_ai_description`

Exit code 0 = all checks pass; 1 = at least one failure (each printed).
"""

import json
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
ERRORS: list[str] = []

REQUIRED_INDEX_FIELDS = [
    "id", "title", "make", "platform", "models", "years", "severity",
    "tags", "files",
]
VALID_SEVERITIES = {"critical", "major", "annoyance"}
REQUIRED_SKILL_FILES = ["README.md", "README.ja.md", "SKILL.md", "skill.yaml"]


def fail(message: str) -> None:
    ERRORS.append(message)


def check_known_issues_index() -> None:
    ki_dir = ROOT / "data" / "known-issues"
    index_path = ki_dir / "index.yaml"
    index = yaml.safe_load(index_path.read_text(encoding="utf-8"))
    entries = index.get("entries", index) if isinstance(index, dict) else index
    if not isinstance(entries, list):
        fail(f"{index_path}: expected a list of entries")
        return

    listed_files: set[str] = set()
    for row in entries:
        row_id = row.get("id", "<missing id>")
        for field in REQUIRED_INDEX_FIELDS:
            if field not in row:
                fail(f"index.yaml [{row_id}]: missing field '{field}'")
        severity = row.get("severity")
        if severity not in VALID_SEVERITIES:
            fail(f"index.yaml [{row_id}]: invalid severity '{severity}' "
                 f"(expected one of {sorted(VALID_SEVERITIES)})")
        files = row.get("files") or {}
        for lang in ("en", "ja"):
            rel = files.get(lang)
            if not rel:
                fail(f"index.yaml [{row_id}]: missing files.{lang}")
                continue
            listed_files.add(rel)
            if not (ki_dir / rel).is_file():
                fail(f"index.yaml [{row_id}]: files.{lang} -> '{rel}' does not exist")

    on_disk = {
        p.name for p in ki_dir.glob("*.md")
        if not p.name.startswith(("README", "TEMPLATE"))
    }
    for name in sorted(on_disk - listed_files):
        fail(f"data/known-issues/{name}: entry file not registered in index.yaml")
    for name in sorted(listed_files - on_disk):
        fail(f"index.yaml lists '{name}' but the file is not on disk")


def skill_dirs() -> list[Path]:
    skills_root = ROOT / "skills"
    return sorted(p for p in skills_root.iterdir() if p.is_dir())


def check_skill_folders() -> None:
    for skill in skill_dirs():
        for required in REQUIRED_SKILL_FILES:
            if not (skill / required).is_file():
                fail(f"skills/{skill.name}: missing {required}")
        yaml_path = skill / "skill.yaml"
        if not yaml_path.is_file():
            continue
        meta = yaml.safe_load(yaml_path.read_text(encoding="utf-8"))
        if meta.get("name") != skill.name:
            fail(f"skills/{skill.name}/skill.yaml: name '{meta.get('name')}' "
                 f"!= folder name '{skill.name}'")
        declares_es = bool((meta.get("languages") or {}).get("es"))
        has_es = (skill / "README.es.md").is_file()
        if declares_es and not has_es:
            fail(f"skills/{skill.name}: skill.yaml declares languages.es "
                 f"but README.es.md is missing")
        if has_es and not declares_es:
            fail(f"skills/{skill.name}: README.es.md exists but skill.yaml "
                 f"does not declare languages.es")


def parse_version(text: str) -> tuple[int, ...]:
    return tuple(int(part) for part in text.split("."))


def check_versions() -> None:
    plugin = json.loads((ROOT / ".claude-plugin" / "plugin.json").read_text(encoding="utf-8"))
    marketplace = json.loads((ROOT / ".claude-plugin" / "marketplace.json").read_text(encoding="utf-8"))
    plugin_ver = plugin.get("version")
    market_ver = (marketplace.get("metadata") or {}).get("version")
    if plugin_ver != market_ver:
        fail(f"version mismatch: plugin.json={plugin_ver} "
             f"marketplace.json metadata.version={market_ver}")

    changelog = (ROOT / "CHANGELOG.md").read_text(encoding="utf-8")
    released = re.findall(r"^## \[(\d+\.\d+\.\d+)\]", changelog, flags=re.MULTILINE)
    if not released:
        fail("CHANGELOG.md: no release headings found")
        return
    latest = released[0]
    if plugin_ver and parse_version(plugin_ver) < parse_version(latest):
        fail(f"plugin.json version {plugin_ver} is older than the latest "
             f"CHANGELOG release {latest}")


def check_skill_tables() -> None:
    folders = {p.name for p in skill_dirs()}

    skills_index = (ROOT / "skills" / "README.md").read_text(encoding="utf-8")
    index_links = set(re.findall(r"\]\(\./([a-z0-9-]+)/\)", skills_index))
    if index_links != folders:
        fail(f"skills/README.md table out of sync: missing={sorted(folders - index_links)} "
             f"extra={sorted(index_links - folders)}")

    root_readme = (ROOT / "README.md").read_text(encoding="utf-8")
    readme_links = set(re.findall(r"\]\(\./skills/([a-z0-9-]+)/\)", root_readme))
    if readme_links != folders:
        fail(f"README.md skills table out of sync: missing={sorted(folders - readme_links)} "
             f"extra={sorted(readme_links - folders)}")


LANDING_CARD = re.compile(
    r"href=\"\{\{ '/skills/([a-z0-9-]+)/' \| relative_url \}\}\"[\s\S]*?"
    r"<span class=\"langs\">([^<]*)</span>"
)


def check_landing_languages() -> None:
    folders = {p.name for p in skill_dirs()}
    landing = (ROOT / "index.html").read_text(encoding="utf-8")
    seen: set[str] = set()
    for name, langs in LANDING_CARD.findall(landing):
        seen.add(name)
        if name not in folders:
            continue
        shows_es = "ES" in {part.strip() for part in langs.split("·")}
        has_es = (ROOT / "skills" / name / "README.es.md").is_file()
        if has_es and not shows_es:
            fail(f"index.html: skill card '{name}' has README.es.md but its "
                 f"language label is '{langs.strip()}' (add ES)")
        if shows_es and not has_es:
            fail(f"index.html: skill card '{name}' shows ES but "
                 f"skills/{name}/README.es.md does not exist")
    missing = folders - seen
    if missing:
        fail(f"index.html: no skill card with a language label for {sorted(missing)}")


def check_claude_ai_packaging() -> None:
    sys.path.insert(0, str(ROOT / "scripts"))
    import package_skills  # noqa: E402  (a sibling script, not an installed module)

    problems = package_skills.check()
    for problem in problems:
        fail(f"Claude.ai packaging: {problem}")
    if problems:
        return
    # Build every ZIP into a temporary folder and read it back as Claude would.
    import tempfile
    import zipfile

    with tempfile.TemporaryDirectory() as tmp:
        for folder in package_skills.skill_dirs():
            archive = zipfile.ZipFile(package_skills.build(folder, Path(tmp)))
            names = archive.namelist()
            if not names or any(not n.startswith(f"{folder.name}/") or n.count("/") != 1 for n in names):
                fail(f"Claude.ai packaging: {folder.name}.zip must hold only the folder {folder.name}/ and its files")
                continue
            text = archive.read(f"{folder.name}/SKILL.md").decode("utf-8")
            meta = yaml.safe_load(text.split("---\n")[1])
            if meta.get("name") != folder.name or len(meta.get("description", "")) > package_skills.MAX_DESCRIPTION:
                fail(f"Claude.ai packaging: {folder.name}.zip has a SKILL.md Claude.ai would refuse")
            if f"{folder.name}/README.md" not in names:
                fail(f"Claude.ai packaging: {folder.name}.zip lacks README.md, which SKILL.md asks Claude to read")


def main() -> int:
    check_known_issues_index()
    check_skill_folders()
    check_versions()
    check_skill_tables()
    check_landing_languages()
    check_claude_ai_packaging()
    if ERRORS:
        print(f"FAIL: {len(ERRORS)} problem(s) found\n")
        for err in ERRORS:
            print(f"  - {err}")
        return 1
    print("OK: all repository consistency checks passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
