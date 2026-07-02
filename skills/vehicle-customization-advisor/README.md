# Vehicle Customization Advisor

**English** | [日本語](./README.ja.md)

An AI skill for planning vehicle modifications — performance, suspension, wheels and tires, audio, lighting, and aesthetics — with attention to compatibility, build order, budget, and legality.

## Description

The Vehicle Customization Advisor helps you modify a vehicle deliberately instead of accumulating parts. It defines build goals (daily, track, off-road, show, tow rig), sequences modifications so earlier ones are not wasted, checks compatibility (fitment, offset, drivetrain stress, ECU behavior), flags warranty and legal implications, and keeps the budget honest by including supporting mods and installation costs.

**Audience:** Enthusiasts from first-mod beginners to experienced builders planning a full project car.

## Capabilities

- Define a coherent build plan from goals and budget: street, track day, drag, drift, overlanding, show, or towing
- Explain modification categories and their real-world effects:
  - **Power** — intake, exhaust, tune, forced induction, supporting fuel system mods
  - **Suspension** — springs, coilovers, sway bars, bushings, alignment implications
  - **Wheels/tires** — sizing math, offset and clearance, load ratings, tire compound selection
  - **Braking** — pads, rotors, lines, big brake kits, and when each is actually needed
  - **Drivetrain** — clutch, limited-slip differential, gearing
  - **Exterior/interior** — aero (functional vs. cosmetic), lighting, wraps, seats, audio
- Order the build correctly (e.g., brakes and tires before power; tune after intake/exhaust)
- Identify supporting modifications a headline mod requires, and hidden costs (installation, alignment, calibration, insurance)
- Explain warranty impact (e.g., Magnuson-Moss basics in the US) and flag commonly regulated areas: emissions equipment, exhaust noise, lighting color/placement, tint, ride height
- Assess used/secondhand parts risk and reputable-brand tradeoffs vs. no-name parts
- Reality-check horsepower claims and dyno figures

## Example Prompts

```text
I have a stock 2019 Mazda MX-5 and a $4,000 budget. My goal is autocross
on weekends, daily driving the rest. Build me a plan in the right order.
```

```text
Will 18x9.5 +38 wheels with 255/40 tires fit a 2018 Honda Civic Si without
rolling fenders? Show me the offset math.
```

```text
What supporting mods does a turbo kit on a naturally aspirated engine
actually require, and what's the realistic total cost beyond the kit?
```

```text
I want my truck to sit 3 inches higher for overlanding. Lift kit vs.
leveling kit vs. bigger tires — walk me through the tradeoffs.
```

```text
Cat-back vs. axle-back exhaust: what's the actual power difference on a
mostly stock car, and which is legal where emissions inspections apply?
```

## Recommended Workflow

1. **State the goal first, not the part.** "I want faster autocross times" leads to better plans than "should I buy coilovers?"
2. **Give the full picture.** Vehicle, current mods, budget, whether it must remain a daily driver, and local inspection/emissions requirements.
3. **Get a sequenced plan.** Ask for phases with costs, including installation and supporting mods.
4. **Verify legality locally before buying.** Emissions, noise, lighting, and height rules vary by country, state, and municipality.
5. **Ask about each part's downstream effects** (warranty, insurance, wear, resale) before ordering.
6. **After each phase, reassess.** Driving the car after each change often changes what you want next.

## Limitations

- **Regulations are jurisdiction-specific and change.** The advisor flags commonly regulated areas but cannot guarantee legality; verify with local authorities and inspection stations.
- **Emissions equipment removal or defeat is illegal in many jurisdictions** for road-driven vehicles; this skill does not advise on defeating emissions controls or safety systems.
- **Fitment edge cases are real.** Wheel/tire math indicates probable fitment; suspension travel, brake clearance, and body variance mean test fitting still matters.
- **Insurance implications are policy-specific.** Undeclared modifications can void coverage — check with your insurer.
- **Power figures are estimates.** Actual gains vary with fuel, climate, tune quality, and drivetrain loss assumptions.

## Related Skills

- [Mechanic Assistant](../mechanic-assistant/) — installing the modifications
- [Vehicle Maintenance Planner](../vehicle-maintenance-planner/) — modified vehicles often need tightened service intervals
- [Motorcycle Mechanic](../motorcycle-mechanic/) — motorcycle customization guidance
