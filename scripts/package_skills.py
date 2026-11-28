#!/usr/bin/env python3
"""Package each skill as a ZIP that Claude (claude.ai and the desktop app) can upload.

    python scripts/package_skills.py [output directory]   # default: dist/claude-ai

Each <name>.zip contains the folder <name>/ with SKILL.md and the skill's
READMEs (README.md, README.ja.md and README.es.md when present), which
SKILL.md tells Claude to read. skill.yaml is left out.

Claude.ai accepts descriptions of at most 200 characters, shorter than the
1024 that Claude Code and the Agent Skills specification allow. When a
SKILL.md description is longer, the packaged copy uses `claude_ai_description`
from the skill's skill.yaml instead; the repository's SKILL.md is unchanged.

The archives are reproducible: same files, same order, fixed timestamps.
`--check` validates every skill without writing anything (used by
validate_repo.py and the tests).
"""

import re
import sys
import zipfile
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
SKILLS = ROOT / "skills"
MAX_DESCRIPTION = 200
MAX_NAME = 64
MAX_SKILL_LINES = 500
FILES = ["SKILL.md", "README.md", "README.ja.md", "README.es.md"]
FIXED_TIME = (2020, 1, 1, 0, 0, 0)
NAME = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
FRONTMATTER = re.compile(r"\A---\n(.*?)\n---\n", re.S)


def skill_dirs() -> list[Path]:
    return sorted(p for p in SKILLS.iterdir() if p.is_dir() and (p / "SKILL.md").is_file())


def packaged_skill_md(folder: Path) -> tuple[str, list[str]]:
    """The SKILL.md text to package, and any problems that stop packaging."""
    problems: list[str] = []
    text = (folder / "SKILL.md").read_text(encoding="utf-8")
    match = FRONTMATTER.match(text)
    if not match:
        return text, [f"{folder.name}/SKILL.md: no YAML frontmatter"]
    meta = yaml.safe_load(match.group(1)) or {}
    name = meta.get("name")
    if name != folder.name:
        problems.append(f"{folder.name}/SKILL.md: name '{name}' must match the folder name")
    if not isinstance(name, str) or not NAME.match(name) or len(name) > MAX_NAME:
        problems.append(f"{folder.name}/SKILL.md: name must be lowercase words joined by hyphens, at most {MAX_NAME} characters")
    if text.count("\n") + 1 > MAX_SKILL_LINES:
        problems.append(f"{folder.name}/SKILL.md: keep it under {MAX_SKILL_LINES} lines")
    description = meta.get("description")
    if not isinstance(description, str) or not description.strip():
        problems.append(f"{folder.name}/SKILL.md: missing description")
        return text, problems
    if len(description) <= MAX_DESCRIPTION:
        return text, problems
    info = yaml.safe_load((folder / "skill.yaml").read_text(encoding="utf-8")) or {}
    short = info.get("claude_ai_description")
    if not isinstance(short, str) or not short.strip():
        problems.append(f"{folder.name}: SKILL.md description has {len(description)} characters; add claude_ai_description (at most {MAX_DESCRIPTION}) to skill.yaml")
        return text, problems
    if len(short) > MAX_DESCRIPTION:
        problems.append(f"{folder.name}/skill.yaml: claude_ai_description has {len(short)} characters (at most {MAX_DESCRIPTION})")
        return text, problems
    meta["description"] = short
    header = yaml.safe_dump(meta, sort_keys=False, allow_unicode=True, width=10_000).strip()
    return f"---\n{header}\n---\n" + text[match.end():], problems


def build(folder: Path, out: Path) -> Path:
    skill_md, problems = packaged_skill_md(folder)
    if problems:
        raise ValueError("; ".join(problems))
    target = out / f"{folder.name}.zip"
    with zipfile.ZipFile(target, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for name in FILES:
            path = folder / name
            if not path.is_file():
                continue
            data = skill_md.encode("utf-8") if name == "SKILL.md" else path.read_bytes()
            entry = zipfile.ZipInfo(f"{folder.name}/{name}", date_time=FIXED_TIME)
            entry.compress_type = zipfile.ZIP_DEFLATED
            entry.external_attr = 0o644 << 16
            archive.writestr(entry, data)
    return target


def check() -> list[str]:
    problems: list[str] = []
    for folder in skill_dirs():
        problems += packaged_skill_md(folder)[1]
    return problems


def main(argv: list[str]) -> int:
    if argv[1:2] == ["--check"]:
        problems = check()
        for problem in problems:
            print(f"FAIL: {problem}")
        if not problems:
            print(f"OK: {len(skill_dirs())} skills can be packaged for Claude.ai")
        return 1 if problems else 0
    out = Path(argv[1]) if len(argv) > 1 else ROOT / "dist" / "claude-ai"
    out.mkdir(parents=True, exist_ok=True)
    problems = check()
    if problems:
        for problem in problems:
            print(f"FAIL: {problem}")
        return 1
    for folder in skill_dirs():
        print(build(folder, out))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
