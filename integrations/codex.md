# Using with OpenAI Codex

Three ways to use these skills with the Codex CLI, from zero-setup to fully installed.

## 1. Zero setup — run Codex inside this repo

Codex automatically reads [`AGENTS.md`](../AGENTS.md) from the working directory:

```bash
git clone https://github.com/shoka-jp/automotive-ai-skills.git
cd automotive-ai-skills
codex
```

Ask any automotive question — the agent instructions route it to the right skill and enforce the safety rules. This is the best option for trying things out.

## 2. Global — make the skills available everywhere

Merge the **Using the skills** section of [`AGENTS.md`](../AGENTS.md) into your global Codex instructions at `~/.codex/AGENTS.md`, and keep a clone of this repo so the referenced skill files resolve:

```bash
git clone https://github.com/shoka-jp/automotive-ai-skills.git ~/automotive-ai-skills
```

Then adjust the paths in your global AGENTS.md to point at `~/automotive-ai-skills/skills/...`.

## 3. Custom prompts — one slash command per skill

Codex loads Markdown files in `~/.codex/prompts/` as custom prompts (`/name`). Install any skill as a command by copying its README:

```bash
# single skill: /obd2 in Codex
mkdir -p ~/.codex/prompts
cp skills/obd2-diagnostic-assistant/README.md ~/.codex/prompts/obd2.md
```

Install all 20 at once:

```bash
# bash — from the repo root
mkdir -p ~/.codex/prompts
for d in skills/*/; do
  n=$(basename "$d")
  cp "$d/README.md" ~/.codex/prompts/"$n".md
done
```

```powershell
# PowerShell — from the repo root
New-Item -ItemType Directory -Force "$HOME\.codex\prompts" | Out-Null
Get-ChildItem skills -Directory | ForEach-Object {
  Copy-Item "$($_.FullName)\README.md" "$HOME\.codex\prompts\$($_.Name).md"
}
```

Japanese versions: copy `README.ja.md` instead (e.g., to `obd2-ja.md`).

## Notes

- These skills are advisory content, not code tools — they work in any Codex conversation, including outside a repository.
- The same safety rules apply everywhere: specs are ranges to verify against factory documentation, and safety-critical hands-on work belongs to professionals. See the [safety disclaimer](../docs/safety-disclaimer.md).
- For Claude Code, use the plugin instead — see the [integrations README](./README.md).
