# EV Assistant

**English** | [日本語](./README.ja.md)

An AI skill for electric vehicle ownership — charging strategy, battery health, range management, EV-specific maintenance, home charging setup, and buying guidance for new and used EVs.

## Description

The EV Assistant addresses the questions internal-combustion experience does not prepare you for: how to charge for battery longevity, why range varies so much, what maintenance an EV actually needs (and no longer needs), how to evaluate a used EV's battery, and how to plan road trips around charging networks. It covers battery electric vehicles (BEVs) and, where noted, plug-in hybrids (PHEVs).

**Audience:** EV shoppers, new EV owners, long-time owners optimizing battery life, and technicians transitioning from ICE work.

## Capabilities

- **Charging** — explain AC Level 1/2 vs. DC fast charging, connector standards (CCS, NACS, CHAdeMO, Type 2), charging curves and why the last 20% is slow, and public network practicalities
- **Home charging** — help plan a Level 2 installation: circuit sizing, load calculations to discuss with an electrician, hardwired vs. plug-in units, smart charger features, and off-peak tariff strategies
- **Battery health** — explain degradation mechanisms (calendar aging, cycling, heat, high state of charge), daily charge-limit strategy (e.g., 80% for NMC daily use, LFP differences), and how to interpret a battery state-of-health reading
- **Range** — explain real-world range factors (temperature, speed, HVAC, terrain, payload), winter range loss, and efficiency driving techniques
- **Trip planning** — charging-stop strategy, buffer planning, and charging-speed-aware routing principles
- **Maintenance** — EV-specific schedules: tires (wear faster), brake fluid, cabin filter, coolant loops for battery/motor, and what disappears (oil changes, exhaust, transmission service)
- **Used EV buying** — battery health assessment, warranty transfer, recall history, and price/degradation tradeoffs
- **Safety awareness** — explain high-voltage system boundaries and why orange-cable systems are professional-only territory
- **PHEV specifics** — dual maintenance needs, engine-maintenance-still-required caveats, and optimal usage patterns

## Example Prompts

```text
I just bought my first EV, a 2023 Hyundai Ioniq 5. What daily charging
habits will maximize battery life?
```

```text
Why does my EV lose 30% of its range in winter, and what can I do about it?
```

```text
I'm looking at a used 2019 Nissan Leaf with 60,000 miles. How do I assess
battery health before buying, and what degradation is normal?
```

```text
Help me plan home charging: I drive 50 miles a day, my panel is 100A, and
my utility has a cheap overnight rate. What should I ask my electrician?
```

```text
What maintenance does my EV actually need in the first 100,000 miles,
compared to a gas car?
```

## Recommended Workflow

1. **Identify the vehicle and battery chemistry** if known (NMC vs. LFP changes charging advice significantly).
2. **Describe your usage.** Daily mileage, home charging availability, climate, and trip frequency.
3. **For buying decisions:** ask for a model-specific battery and warranty checklist before viewing.
4. **For charging setup:** gather your electrical panel details and utility rate plan, then ask for an electrician-briefing summary.
5. **For range or efficiency issues:** report conditions (temperature, speed, HVAC use) so the assistant can separate normal variance from a fault.
6. **For anything involving the high-voltage system:** use this skill to understand the issue, then take it to an EV-qualified technician.

## Limitations

- **High-voltage repair is out of scope.** Battery pack, inverter, and orange-cable work requires training and equipment; the assistant explains concepts but will not walk through HV repair procedures.
- **Charging networks change fast.** Station availability, pricing, and connector rollouts (e.g., NACS adoption) evolve; verify with live network apps.
- **Battery advice is chemistry- and model-specific.** Follow your manufacturer's charging guidance where it conflicts with general rules.
- **Electrical installation requires a licensed electrician.** The assistant helps you prepare informed questions, not bypass professional installation.
- **Software-defined behavior varies by firmware version** — features and charging behavior can change with OTA updates.

## Related Skills

- [Used Car Inspector](../used-car-inspector/) — general used-vehicle inspection to combine with EV battery assessment
- [Vehicle Maintenance Planner](../vehicle-maintenance-planner/) — schedule the EV maintenance that does remain
- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — 12V-system and chassis symptoms shared with ICE vehicles
