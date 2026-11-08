# Vehicle brief CLI

[日本語](./vehicle-brief-cli.ja.md) | [README](../README.md)

Use Node.js 22 or later from a copy of this repository. The CLI reads the bundled references without network calls, an AI service or an API key. It does not refresh source information, perform an inspection or check an individual vehicle's recall eligibility.

## Create a workshop checklist

```sh
node scripts/vehicle_brief.mjs --vehicle JF3 --market Japan --year 2019 --task buy --format checklist > checklist.txt
```

This writes the vehicle context, questions for the visit, applicable reference candidates and their limits to a text file. It omits the instructions intended for an AI assistant. Questions are not completed inspections or safety findings. Review the saved text before sharing it.

For Japanese output, add `--lang ja`. These are sample vehicle details; replace them with information you have confirmed. Production year is not registration year.

## Choose what to include

| Option | Behavior |
|---|---|
| `--format prompt` | Default. Generate the existing AI prompt. |
| `--format checklist` | Generate a human-readable checklist. |
| `--omit-notes` | Replace the engine/mileage/history field and concern with `[Omitted for sharing]` in the selected output format. Takes no value. |
| `--context "..."` | Supply known engine, mileage and history details. Optional. |
| `--concern "..."` | Supply the question or concern. Optional; treated as quoted data. |
| `--lang en` / `--lang ja` | Choose the output language; English is the default. |
| `--help` | List vehicle presets, goals and options. |

The vehicle, model code, production year and market remain when `--omit-notes` is used. It is not an anonymizer. Do not enter VINs, names or contact details in command arguments; your shell may retain them. The flag applies to either CLI format. The browser's omission checkbox applies only to its checklist.

```sh
node scripts/vehicle_brief.mjs --vehicle JF3 --market Japan --year 2019 --lang ja --format checklist --omit-notes > checklist-ja.txt
```

Existing calls without `--format` still produce an AI prompt. Invalid formats, missing values, repeated options and invalid years fail with exit code 2 and no generated output. A shell's `>` redirection can create or truncate the destination file before a command fails, so use a new filename and check the exit code.

## Keep uncertainty visible

Use `--market Japan` only for a confirmed Japan-market vehicle. `other` and `unknown` retain the general questions without attaching Japan-only references. Model codes and production-year boundaries use the same selector as the browser. A matching reference does not establish a defect, recall eligibility, repair completion or safety; an unmatched vehicle is not cleared of problems. See [reference routing](./model-reference-routing.md) and [quality and limits](./quality.md).
