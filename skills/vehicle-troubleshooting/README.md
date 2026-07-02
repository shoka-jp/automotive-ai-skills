# Vehicle Troubleshooting

An AI skill for symptom-first diagnosis — noises, vibrations, smells, leaks, warning lights, and drivability problems — using structured differential diagnosis to narrow causes before any parts are bought.

## Description

Vehicle Troubleshooting starts where the OBD-II scanner cannot help: "it makes a clunk over bumps," "it smells like syrup," "it pulls left when braking." The skill applies a differential-diagnosis approach — gather the symptom's full signature (when, where, under what conditions), rank probable causes, and propose discriminating tests that split the possibilities fastest and cheapest.

**Audience:** Any driver experiencing a problem, and technicians who want a structured second opinion.

## Capabilities

- Diagnose by symptom category:
  - **Noises** — squeal, grind, clunk, knock, hum, whine, tick, hiss; correlated with speed, RPM, steering, braking, or bumps
  - **Vibrations** — by speed range, under acceleration/braking/coasting, through wheel/seat/pedal
  - **Smells** — burning oil, coolant (sweet), fuel, sulfur, burnt clutch/brakes, mildew
  - **Leaks** — identify fluid by color, texture, and location under the vehicle
  - **Warning lights** — meaning, severity, and safe-to-drive assessment
  - **Drivability** — hard start, no start, stalling, rough idle, hesitation, poor fuel economy, overheating
  - **Electrical** — battery drain, dim lights, intermittent accessories, no-crank vs. no-start
- Ask targeted follow-up questions that discriminate between causes
- Rank causes by probability for the specific vehicle and mileage
- Propose the cheapest/fastest test that eliminates the most possibilities
- Give an urgency verdict: stop driving now / drive gently to a shop / monitor / cosmetic
- Explain how to safely reproduce and characterize a symptom for diagnosis

## Example Prompts

```text
My 2016 Ford Escape makes a rhythmic humming noise above 40 mph that gets
louder in right-hand curves. What is it likely to be?
```

```text
Car cranks strongly but won't start after sitting overnight. Starts fine
when warm. 2010 VW Golf 2.5. Where do I start?
```

```text
There's a puddle of orange-pink fluid under the front of my car near the
passenger side. What is it and how urgent is this?
```

```text
Steering wheel shakes between 60-70 mph only, smooth above and below.
What does that speed-specific pattern tell you?
```

```text
Battery dies if the car sits for 3 days. Battery and alternator both test
good. How do I find a parasitic drain?
```

## Recommended Workflow

1. **Describe the symptom's full signature.** What you sense, when it started, whether it is constant or intermittent, and what conditions trigger it (speed, RPM, temperature, steering, braking, weather).
2. **Answer the follow-up questions.** The discriminating details ("does it change when you press the clutch?") are what narrow the diagnosis.
3. **Get the ranked differential.** Ask for causes ordered by probability, with an urgency verdict.
4. **Run the discriminating tests.** Do the suggested checks and report results — each answer prunes the list.
5. **Confirm before buying parts.** Ask "what test confirms this is the cause?" before spending money.
6. **Hand off to repair.** Once confirmed, use the [Mechanic Assistant](../mechanic-assistant/) for the fix, or take the confirmed diagnosis to a shop.

## Limitations

- **Diagnosis by description is probabilistic.** Sounds and sensations are hard to describe precisely; the assistant gives likelihoods, not certainties.
- **Safety overrides diagnosis.** Brake failure symptoms, steering problems, fuel smells, and overheating warrant stopping the vehicle first and diagnosing second.
- **Intermittent faults may need data logging** or professional equipment (oscilloscope, chassis ears, smoke machine) to pin down.
- **Cannot hear audio or view video** in most clients — describe the symptom, or use character of the sound (frequency, rhythm, correlation).
- **Some symptom patterns are vehicle-specific** in ways general reasoning misses; model-specific forums and TSBs remain valuable cross-checks.

## Related Skills

- [OBD-II Diagnostic Assistant](../obd2-diagnostic-assistant/) — when a warning light or stored code accompanies the symptom
- [Mechanic Assistant](../mechanic-assistant/) — executing the repair after diagnosis
- [Motorcycle Mechanic](../motorcycle-mechanic/) — two-wheeled troubleshooting
