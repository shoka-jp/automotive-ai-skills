# Integrations

Ready-to-use templates for wiring these skills into AI platforms.

| File | Use with | What it gives you |
|---|---|---|
| [Claude Code plugin](https://github.com/shoka-jp/automotive-ai-skills/tree/main/.claude-plugin) | Claude Code | `/plugin marketplace add shoka-jp/automotive-ai-skills` → all 20 skills install natively (`SKILL.md` per skill) and auto-trigger |
| [codex.md](./codex.md) | OpenAI Codex | `AGENTS.md` auto-load in-repo, global setup, or one slash command per skill |
| [claude-project-template.md](./claude-project-template.md) | Claude Projects, Custom GPTs, or any system-prompt slot | A single-skill dedicated assistant, step by step |
| [garage-assistant-system-prompt.md](./garage-assistant-system-prompt.md) | Any assistant with a system prompt | One combined "garage assistant" that routes between all skills |
| [`skill.yaml` files](../skills/) (one per skill folder) | Agent frameworks, RAG pipelines, skill registries | Machine-readable skill metadata: name, summary, tags, languages, related skills |

## Which approach to pick

- **Just chatting?** You don't need any of this — copy an example prompt from a skill's README and go.
- **Repeated use of one skill** (e.g., you're mid-restoration and consult the Classic Car Restorer weekly): use the [Claude Project template](./claude-project-template.md) with that one skill.
- **General-purpose garage helper** for a household or shop: use the [combined system prompt](./garage-assistant-system-prompt.md).
- **Building software** (an agent, a RAG bot, a fleet tool): load the `skill.yaml` metadata for routing, and the README content as the knowledge payload. All files are MIT-licensed.

## Notes for developers

- `skill.yaml` schema is documented in the [Skill Authoring Guide](../docs/skill-authoring-guide.md#machine-readable-definitions-skillyaml).
- Each skill's `Limitations` section is the safety-relevant part — if you compress skill content to fit a context budget, **keep Limitations intact**.
- Japanese content (`README.ja.md`, `docs/ja/`) lets you build a Japanese-first assistant with the same structure.
