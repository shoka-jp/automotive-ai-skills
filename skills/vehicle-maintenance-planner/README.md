# Vehicle Maintenance Planner

**English** | [日本語](./README.ja.md)

An AI skill that builds and manages preventive maintenance schedules tailored to your specific vehicle, mileage, climate, and driving pattern.

## Description

The Vehicle Maintenance Planner turns the generic "every 5,000 miles" advice into a personalized plan. It accounts for severe-service conditions (short trips, towing, extreme heat or cold, dusty roads), tracks what is due now versus soon, helps you budget for upcoming service, and explains *why* each service matters so you can make informed decisions about what to prioritize.

**Audience:** Every vehicle owner — from first-car owners to fleet managers planning across multiple vehicles.

## Capabilities

- Generate a full maintenance schedule from your vehicle's year, make, model, engine, and current mileage
- Adjust intervals for severe-service conditions: short trips, stop-and-go traffic, towing, track use, extreme climates, dusty environments
- Explain what each service involves and the consequence of skipping it
- Prioritize overdue items by risk (safety first, then engine longevity, then comfort/cosmetic)
- Estimate cost ranges for each service (DIY parts cost vs. typical shop cost)
- Distinguish DIY-friendly services from those requiring a shop (equipment, disposal, calibration)
- Plan seasonal maintenance: winterization, summer cooling system prep, tire changeovers
- Build catch-up plans for vehicles with unknown or neglected service history
- Track fluids and consumables: engine oil, coolant, brake fluid, transmission fluid, differential/transfer case, filters, belts, spark plugs, tires, wipers, battery
- Advise on record-keeping and what documentation preserves resale value

## Example Prompts

```text
I just bought a 2017 Mazda CX-5 with 82,000 miles and no service records.
Build me a catch-up maintenance plan, ordered by priority.
```

```text
I drive 4 miles to work each way in a cold climate. How should that change
my oil change interval, and why?
```

```text
What maintenance is due between 90,000 and 120,000 miles on a 2016 Toyota
Tacoma V6, and roughly what will it cost at a shop vs. DIY?
```

```text
Create a 12-month maintenance calendar for my two cars: a 2020 Honda CR-V
(25k miles) and a 2011 Ford F-150 (140k miles).
```

```text
Is "lifetime" transmission fluid really lifetime? When should I actually
service it?
```

## Recommended Workflow

1. **Provide vehicle details.** Year, make, model, engine, transmission type, and current mileage.
2. **Describe your driving.** Annual mileage, trip length, climate, towing, terrain — this determines normal vs. severe schedule.
3. **Share known history.** Recent services and anything you know was skipped.
4. **Request a prioritized plan.** Ask for now / next 3 months / next 12 months buckets.
5. **Decide DIY vs. shop per item.** Ask for difficulty ratings and required tools for anything you might do yourself.
6. **Revisit at each service.** Update mileage and completed items to keep the plan current.

## Limitations

- **Factory schedules take precedence.** The owner's manual and manufacturer maintenance minder system are authoritative; the assistant's intervals are informed estimates.
- **Cost estimates are ranges, not quotes.** Labor rates vary widely by region and shop type.
- **No persistent memory between sessions** unless your client supports it — keep your own maintenance log and paste it in.
- **Warranty requirements are strict.** If your vehicle is under warranty, follow the documented factory schedule exactly and keep receipts.
- **Cannot inspect the vehicle.** Wear items like brakes and tires need physical measurement; the planner can only tell you when to check.

## Related Skills

- [Used Car Inspector](../used-car-inspector/) — assess condition before building a plan for a newly purchased vehicle
- [Mechanic Assistant](../mechanic-assistant/) — perform the DIY services in your plan
- [EV Assistant](../ev-assistant/) — EV-specific maintenance schedules differ substantially
