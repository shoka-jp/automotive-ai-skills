# OBD-II Diagnostic Assistant

An AI skill for interpreting OBD-II diagnostic trouble codes (DTCs), freeze frame data, and live sensor readings — turning scanner output into a structured diagnostic plan.

## Description

The OBD-II Diagnostic Assistant helps you go from "check engine light is on" to a prioritized list of probable causes and tests. It explains what each code actually monitors, distinguishes root causes from downstream effects, and helps you interpret live data (fuel trims, O2 sensor waveform behavior, MAF readings) so you fix the fault instead of just replacing the part named in the code.

**Audience:** DIYers with a code reader, professional technicians, and anyone deciding whether a warning light is urgent.

## Capabilities

- Explain any standardized DTC (P0xxx/P2xxx/P3xxx powertrain, B/C/U codes) in plain language: what is monitored, how the test runs, and what sets the code
- Interpret manufacturer-specific codes (P1xxx) with the caveat that definitions vary by make
- Analyze multiple simultaneous codes and identify likely causal relationships (e.g., a misfire code plus a lean code pointing to a vacuum leak)
- Interpret freeze frame data to reconstruct the conditions when the fault occurred
- Guide live-data diagnosis: short/long-term fuel trims, O2 sensor switching, MAF g/s vs. expected, coolant temp plausibility, EVAP monitor status
- Explain readiness monitors and what it takes to pass emissions inspection after clearing codes
- Distinguish "drive it home" from "tow it" severity levels
- Recommend which tests to run and in which order to confirm a diagnosis before buying parts
- Explain OBD-II protocols, connector pinout basics, and scanner capability differences (code reader vs. bidirectional scan tool)

## Example Prompts

```text
My 2015 Honda Civic shows P0420. Does this always mean the catalytic
converter is bad? What should I test before replacing it?
```

```text
I have P0171 and P0174 together on a V6. What does it mean that both banks
are lean, and where do I start?
```

```text
Here's my freeze frame data for a P0300 random misfire: [paste data].
What was the engine doing when the code set?
```

```text
My long-term fuel trim is +18% at idle but drops to +3% at cruise.
What does that pattern suggest?
```

```text
I cleared my codes but the smog check says "monitors not ready."
How do I complete the drive cycle for a 2018 Toyota Camry?
```

## Recommended Workflow

1. **Pull all codes, including pending codes.** Report every code, not just the first one — the combination matters.
2. **Capture freeze frame data before clearing anything.** Clearing codes erases the evidence.
3. **Share vehicle context.** Year, make, model, engine, mileage, recent repairs, and how the vehicle currently behaves.
4. **Ask for a causal analysis.** Which code is the root cause and which are symptoms?
5. **Run the recommended tests cheapest-first.** Visual inspection and live data before parts replacement.
6. **Confirm the fix.** Clear codes, complete the relevant drive cycle, and verify the monitors run and pass.

## Limitations

- **Codes identify failed tests, not failed parts.** A P0420 means the catalyst efficiency test failed — the cause may be a sensor, an exhaust leak, or the converter. The assistant reasons about probability; physical testing confirms.
- **Manufacturer-specific codes (P1xxx, and most B/C/U codes) vary by make.** Definitions should be verified against manufacturer documentation.
- **Cannot read your scanner.** You must transcribe or paste the codes and data accurately; a mistyped code leads to a wrong analysis.
- **Live-data interpretation depends on data quality.** Cheap ELM327 clones can report slow or inaccurate values.
- **Pre-1996 (US) / pre-2001 (EU petrol) vehicles** generally predate OBD-II and need different approaches.

## Related Skills

- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — when there is no code, only a symptom
- [Mechanic Assistant](../mechanic-assistant/) — for executing the repair once diagnosed
- [EV Assistant](../ev-assistant/) — EVs use OBD ports differently; high-voltage diagnostics differ
