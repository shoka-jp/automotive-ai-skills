---
title: Try an OBD-II MCP server without a car
description: Run obd2-mcp's demo without Git, or build it from source, and read simulated P0420, freeze-frame and live sensor data. Reproducible commands, observed output and troubleshooting.
lang: en
locale: en_US
---
# Try an OBD-II MCP server without a car

**Prefer to start without installing anything?** [Explore the browser preview](../tools/obd2-preview.html), then return here when you want to run the MCP tools yourself.

[日本語](./try-obd2-mcp.ja.md)

**Run a real MCP client against a simulated vehicle.** The companion [obd2-mcp](https://github.com/shoka-jp/obd2-mcp) server includes a demo that prints tool responses. You need Node.js and npm (Git only for the source build); no car, ELM327 adapter or AI subscription is required.

Automotive AI Skills supplies prompt frameworks. obd2-mcp supplies data-reading tools. This demo exercises the tools; it does not generate an AI diagnosis.

## Run the demo

Use Node.js 22 or 24. Run the released package directly, without Git or a build:

```bash
npm exec --yes --package=https://github.com/shoka-jp/obd2-mcp/releases/download/v0.8.0/obd2-mcp-0.8.0.tgz -- obd2-mcp --demo
```

Add `--summary` for a short summary, or `--summary --lang ja` for Japanese. Add `--scenario cleared` to see a car whose codes were cleared recently, as in a used-car check. To build from source instead:

```bash
git clone https://github.com/shoka-jp/obd2-mcp.git
cd obd2-mcp
npm ci
npm run build
node examples/mock-demo.mjs
```

The script explicitly selects mock mode, reads four tools and closes the connection. It does not clear trouble codes. If you already have a checkout, update it before running the commands.

## What output should I see?

The following fields were captured on **2026-10-29**, using Node.js 24.22.1 on Linux. They are actual program output from **simulated data**, not measurements from a real vehicle. The script prints the full responses; this table selects the relevant fields.

| MCP tool | Selected response |
| --- | --- |
| `connection_status` | `connected: true`, `simulated: true`, mock ELM327 adapter |
| `read_dtcs` | Stored code `P0420`, no pending codes, malfunction indicator on |
| `read_freeze_frame` | `98 km/h`, `2210 rpm`, coolant `88 °C` |
| `read_live_data` | `0 km/h`, `740 rpm`, coolant `89 °C` |

Freeze frame records conditions when a fault was stored. Live data describes the current state. The difference is useful evidence to investigate; neither a code nor these readings alone proves which part failed.

## Evidence and limits

- [Demo source](https://github.com/shoka-jp/obd2-mcp/blob/1dfdca13edf17c38b14a45a65fe44e173a55b7fc/examples/mock-demo.mjs) and [recorded results](https://github.com/shoka-jp/obd2-mcp/blob/1dfdca13edf17c38b14a45a65fe44e173a55b7fc/docs/demo-results.md) identify the implementation used for this guide.
- [Successful Node.js 22 and 24 CI run](https://github.com/shoka-jp/obd2-mcp/actions/runs/40875682970) covers mock smoke tests and installation of the generated npm tarball.
- The run does not establish real adapter compatibility, real-car diagnosis accuracy or behavior inside a particular AI application's UI.
- The [worked conversations](../examples/) are separate teaching scenarios, not results produced by this program.

## If the demo fails

1. Run `node --version` and `npm --version` and confirm Node.js 22 or 24. For the source build, also confirm you are in the cloned `obd2-mcp` folder.
2. For the source build, if `dist/index.js` is missing, complete `npm ci` and `npm run build` first.
3. If an install or build fails, keep the first error and your OS and Node.js version. [Report a reproducible issue](https://github.com/shoka-jp/obd2-mcp/issues/new?template=bug_report.md), removing credentials and vehicle identifiers.

## Use the data with an assistant

Install the Claude Desktop extension from the [latest release](https://github.com/shoka-jp/obd2-mcp/releases/latest), or read the [MCP client setup guide](https://github.com/shoka-jp/obd2-mcp/blob/main/docs/try-mock.md). Once a client is connected in mock mode, combine it with the [OBD-II Diagnostic Assistant](../skills/obd2-diagnostic-assistant/):

> Read the mock vehicle's codes, freeze frame and live data. Separate observations from hypotheses and list what still needs verification. Do not clear codes.

For real work, follow the [safety and verification limits](./safety-disclaimer.md). To read a real car, plug in the adapter, turn the ignition on and ask Claude to connect; check [which adapter kind works on a computer](https://github.com/shoka-jp/obd2-mcp/blob/main/docs/adapters.md) before buying one.

## Help improve the projects

[Follow Sho on GitHub](https://github.com/shoka-jp) for project updates, [contribute a correction](../CONTRIBUTING.md), or [sponsor the open-source work](https://github.com/sponsors/shoka-jp).
