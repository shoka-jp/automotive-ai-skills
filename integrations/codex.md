# Using with OpenAI Codex

Codex supports [Agent Skills](https://learn.chatgpt.com/docs/build-skills): it lists each skill's name and description and reads the full `SKILL.md` when a question matches. These skills use that format, so they load natively. Three ways, from recommended to oldest:

## 1. Native skills (recommended)

Install with the [skills CLI](https://github.com/vercel-labs/skills) (Node.js required):

```bash
# all 20 skills, for your user (every project)
npx skills add shoka-jp/automotive-ai-skills -a codex -g

# or a single skill
npx skills add shoka-jp/automotive-ai-skills -a codex -g --skill obd2-diagnostic-assistant
```

Or copy the skill folders yourself. Codex reads user skills from `~/.agents/skills/` and repository skills from `.agents/skills/` between the current folder and the repository root:

```bash
git clone https://github.com/shoka-jp/automotive-ai-skills.git
mkdir -p ~/.agents/skills
cp -R automotive-ai-skills/skills/obd2-diagnostic-assistant ~/.agents/skills/   # one skill
# or every skill:
for d in automotive-ai-skills/skills/*/; do cp -R "$d" ~/.agents/skills/; done
```

Codex can also follow symlinks, so `ln -s` to a clone keeps the skills updated with `git pull`. Restart Codex if a new skill does not appear. Mention a skill directly with `$obd2-diagnostic-assistant`, or just ask; Codex picks the skill whose description matches. Each folder carries its `SKILL.md` and the English, Japanese and Spanish READMEs it reads, so a single skill works on its own.

## 2. Zero setup — run Codex inside this repo

Codex automatically reads [`AGENTS.md`](../AGENTS.md) from the working directory:

```bash
git clone https://github.com/shoka-jp/automotive-ai-skills.git
cd automotive-ai-skills
codex
```

Ask any automotive question — the agent instructions route it to the right skill and enforce the safety rules. This is the quickest way to try things out.

## 3. Custom prompts — one slash command per skill

Older Codex versions without skills support can load Markdown files in `~/.codex/prompts/` as custom prompts (`/name`). Install any skill as a command by copying its README:

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
