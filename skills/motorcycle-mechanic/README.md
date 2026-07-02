# Motorcycle Mechanic

An AI skill for motorcycle maintenance, diagnosis, and repair — covering chain and sprocket service, carburetor and EFI systems, valve adjustments, tire and suspension setup, and seasonal storage.

## Description

The Motorcycle Mechanic skill brings the Mechanic Assistant's approach to two wheels, where the maintenance culture is more hands-on and the margins for error are smaller. It covers the jobs most riders do themselves (chain service, oil changes, brake pads), the intermediate work that intimidates (valve clearances, carb synchronization, fork oil), and the diagnostic reasoning for common motorcycle problems. It spans sportbikes, cruisers, dual-sports, dirt bikes, and scooters.

**Audience:** Riders who wrench on their own bikes, from first-chain-adjustment beginners to riders doing full engine service.

## Capabilities

- **Routine service** — oil and filter, chain cleaning/lubrication/tension adjustment, sprocket wear assessment, coolant, brake fluid, air filter, spark plugs
- **Carburetion & fuel** — carb cleaning and rebuilds, jetting concepts, synchronization on multi-cylinder bikes, ethanol-related problems, EFI basics and throttle body sync
- **Valve adjustments** — screw-type vs. shim-under-bucket procedures, why intervals matter, interpreting clearance measurements
- **Electrical** — battery maintenance (lead-acid vs. lithium), charging system testing (stator, regulator/rectifier), common wiring failure points
- **Chassis** — tire selection and wear reading, suspension setup (sag, preload, damping basics), steering head and wheel bearing checks, brake service
- **Diagnosis** — hard start/no start, bogging and flat spots, overheating, oil consumption, clutch drag/slip, gearbox issues, wobbles and weaves
- **Seasonal** — winterization/storage (fuel stabilization, battery tending), spring recommissioning checklists
- **Fitment & safety gear context** — chain/sprocket sizing, tire size changes, and why some "upgrades" hurt handling

## Example Prompts

```text
How do I check and adjust chain slack on a 2019 Kawasaki Ninja 650, and how
do I know when the chain and sprockets need replacement instead?
```

```text
My 1998 Honda Shadow sat for 3 years. Build me a recommissioning checklist
before I try to start it.
```

```text
The bike bogs when I open the throttle quickly from idle but runs fine at
speed. Carbureted single. What's the likely cause?
```

```text
Walk me through checking valve clearances on a shim-under-bucket engine.
What do I do if a clearance is out of spec?
```

```text
How do I set static and rider sag on my suspension, and what do the numbers
tell me about spring rate?
```

## Recommended Workflow

1. **Identify the bike.** Year, make, model, engine (and carbureted vs. fuel injected), mileage, and any modifications.
2. **State your experience level.** The right procedure explanation differs for a first-timer vs. an experienced wrench.
3. **Ask for the tool list and parts first.** Motorcycle jobs often need specific tools (chain breaker, carb sync gauges, feeler gauges in motorcycle ranges).
4. **Work with the service manual open.** Use the assistant to explain and sequence; use the factory manual for exact specs.
5. **Report measurements, don't just describe.** Chain slack in mm, clearances in mm/inches, sag in mm — numbers make the advice precise.
6. **Get a safety check before riding.** Ask for a post-work verification list — on a motorcycle, a loose axle nut or soft brake lever is not a warning light, it's a crash.

## Limitations

- **Safety-critical margins are smaller on motorcycles.** Brakes, tires, axles, steering, and chain/sprocket work directly affect crash risk; verify all torque specs against the factory manual and have safety-critical work checked if you are unsure.
- **Model variation is extreme.** Procedures differ significantly even within one manufacturer's lineup; always confirm against the model-specific manual.
- **Cannot assess ride feel remotely.** Handling complaints (wobble, weave, vagueness) may need professional chassis inspection.
- **Vintage and small-market bikes** may have sparse documentation; owner communities and marque specialists remain essential.
- **Tire and brake decisions interact with rider skill and use** — the assistant advises conservatively for street use.

## Related Skills

- [Mechanic Assistant](../mechanic-assistant/) — four-wheeled counterpart with shared fundamentals
- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — general symptom-first diagnostic method
- [Vehicle Customization Advisor](../vehicle-customization-advisor/) — modification planning principles that also apply to bikes
