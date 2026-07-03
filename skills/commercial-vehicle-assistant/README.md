# Commercial Vehicle & Truck Assistant

**English** | [日本語](./README.ja.md)

An AI skill for trucks, vans, and commercial vehicles — air brake systems, pre-trip inspections, load securing, weight compliance awareness, and the maintenance realities of vehicles that earn their keep.

## Description

Commercial vehicles fail differently and cost differently: downtime is lost revenue, inspections are legally mandated, and systems like air brakes and tachographs have no passenger-car equivalent. This skill covers the daily disciplines (pre-trip inspection, load securing, weight distribution), the commercial-specific systems (air brakes, PTOs, lift gates, trailer connections), and the maintenance planning that keeps a working vehicle working. It spans light commercial vans through heavy trucks, with the caveat that heavy-vehicle work is deeply regulated and jurisdiction-specific.

**Audience:** Owner-operators, small transport businesses, tradespeople with work vehicles, and drivers who want to understand the machine they operate.

## Capabilities

- **Air brakes** — system layout (compressor, tanks, treadle, chambers, slack adjusters), why air brakes fail differently from hydraulic, daily drain-down and moisture control, low-pressure warnings and spring brake behavior, the concepts behind adjustment checks (measurement and repair belong to certified technicians in most jurisdictions)
- **Pre-trip inspection** — build systematic walk-around routines by vehicle type, what inspectors look for, documenting defects properly, out-of-service conditions awareness
- **Load securing** — working load limits and lashing math concepts, chains vs. straps vs. bars, friction and blocking, weight distribution over axles, load shift symptoms while driving
- **Weight & dimensions awareness** — GVM/GCM concepts, axle load distribution, overhang basics, why overweight matters mechanically (brakes, tires, frames) as well as legally
- **Commercial systems** — PTO operation and maintenance, lift gates (hydraulic care, battery drain), refrigeration unit basics (pre-cool checks, fuel), trailer couplings and electrical connections, fifth wheels and kingpin wear
- **Maintenance economics** — inspection-driven maintenance schedules, tire programs (steer/drive/trailer positions, regrooving and retreading concepts), oil analysis as a fleet tool, brake and clutch life on working vehicles
- **Diesel drivetrains** — links with the [Diesel Specialist](../diesel-specialist/) for DPF/AdBlue in commercial duty cycles, idle-time consequences
- **Compliance awareness** — driver hours and tachograph/logging concepts, mandated inspection regimes, licensing categories — flagged generically, with the explicit caveat that specifics are jurisdiction-dependent

## Example Prompts

```text
Build me a 10-minute pre-trip inspection routine for a 7.5-tonne box
truck with a tail lift, ordered so legal/out-of-service items come first.
```

```text
Explain how spring (parking) brakes work in an air brake system and why
a low air pressure warning means stop NOW, not at the next exit.
```

```text
I'm loading 1,200 kg of machinery on a flatbed. Walk me through the
securing math: how many straps of what rating, and where do they go?
```

```text
My delivery van's rear tires wear out in 25,000 km but the fronts last
60,000. Same axle loads every day. What should I look at?
```

```text
The truck regens its DPF constantly since we moved to inner-city
delivery routes. Why, and what are my options?
```

## Recommended Workflow

1. **Describe the vehicle and its work.** Type, GVM class, body/equipment (tail lift, PTO, fridge), typical loads, duty cycle (urban delivery, long haul, site work), and your jurisdiction.
2. **State who does the work.** Driver-level daily checks vs. workshop maintenance are different scopes — the skill adjusts depth accordingly.
3. **For inspections and routines:** ask for checklists ordered by legal severity, then adapt them to your vehicle and print them.
4. **For load questions:** provide actual weights and dimensions — securing and distribution advice is only as good as the numbers.
5. **For failures:** commercial downtime justifies faster escalation — ask explicitly "repair now vs. schedule vs. park it."
6. **Verify compliance locally.** Treat all regulatory guidance as orientation; confirm current rules with your transport authority.

## Limitations

- **Regulations dominate this domain and vary enormously** (weights, hours, inspection regimes, licensing, securing standards). The skill teaches concepts and flags categories — your jurisdiction's current rules are authoritative.
- **Air brake measurement and repair is certified-technician territory** in most places, and rightly so — the skill explains the system so you can inspect and communicate, not so you can adjust brakes yourself.
- **Heavy-vehicle specifics thin out at the top end.** Light and medium commercial guidance is strong; for heavy combinations (B-doubles, road trains) treat the skill as conceptual support alongside professional training.
- **Load securing advice is conceptual** — certified load restraint guides and standards (with their tables and diagrams) are the working documents.
- **No downtime liability.** Repair-vs-park decisions on revenue vehicles carry business risk the assistant can inform but not own.

## Related Skills

- [Diesel Specialist](../diesel-specialist/) — the engine side of most commercial vehicles
- [Fleet Manager](../fleet-manager/) — scheduling and cost management across multiple work vehicles
- [Tire & Wheel Advisor](../tire-wheel-advisor/) — commercial tire programs build on its fundamentals
