# Security Policy

## Scope

This is a documentation-first repository — it contains no executable code, no
dependencies, and no services. The security surface is therefore small, but
not zero. We consider the following in scope:

- **Harmful technical content** — instructions that could enable defeating
  vehicle safety systems, emissions controls, immobilizers/anti-theft systems,
  or odometer tampering, whether introduced accidentally or maliciously
- **Dangerous procedural advice** — content that, if followed, creates a
  safety hazard (e.g., omitting a critical step in brake or fuel system work)
- **Prompt-injection hazards** — skill text crafted to manipulate AI
  assistants into unsafe or unintended behavior when the documents are used
  as system prompts
- **Malicious links** — links to malware, phishing, or scam sites
- **Repository integrity** — compromised maintainer accounts, malicious
  workflow files if CI is ever added

## Reporting a Vulnerability

**For dangerous or harmful content:** open a regular
[GitHub issue](../../issues) — this content is already public, so public
reporting is appropriate and fastest. Label it `safety` if possible.

**For sensitive matters** (account compromise, coordinated abuse, anything
you believe should not be public): use
[GitHub's private vulnerability reporting](../../security/advisories/new)
on this repository.

Please include:

- The file and section concerned
- Why the content is dangerous or exploitable
- A suggested correction, if you have one

## Response Expectations

| Stage | Target |
|---|---|
| Acknowledgement | within 7 days |
| Assessment | within 14 days |
| Fix for confirmed safety-critical content | as fast as possible, prioritized above all other work |

## Supported Versions

Only the latest state of the `main` branch is maintained. Tagged releases are
snapshots and are not retroactively patched.

## Disclosure

We are happy to credit reporters in the changelog unless you prefer to remain
anonymous.
