---
title: "Example: Updating an Intake Note for an Intermittent Concern"
description: "Illustrative intake conversation: preserve customer corrections, observation limits, diagnostic authorization, and the next handoff."
lang: en
locale: en_US
---
# Example: Updating an Intake Note for an Intermittent Concern

**English** | [日本語](./service-intake-intermittent.ja.md)

> **Illustrative conversation:** All people, records, observations, prices, and outcomes are fictional teaching inputs. This is not a recorded diagnosis or a promise of service pricing.

**Skill:** [Service Intake Assistant](../skills/service-intake-assistant/)
**Scenario:** Keep a changing customer account, a limited workshop observation, and diagnostic authorization separate.

## Initial request

**User:**

> Japan-market Toyota Vitz, first registered in 2017, 1.3 gasoline, CVT, 88,400 km. Production year and exact model code are not available yet. The customer says “the A/C never cools,” but also mentions three episodes this week while stopped on hot afternoons. The fan still blows. They report no warning light. No scan or inspection has been done. On day 1 they authorized diagnosis up to ¥6,600 including tax, with a call before any extra work. Prepare the intake and three questions.

**Assistant:**

The wording “never cools” and the reported episodes need clarification. Neither account identifies a failed component. We can prepare the intake now; model-specific conclusions would need the exact vehicle specification and appropriate evidence.

| Field | Intake draft, day 1 |
|---|---|
| Vehicle | Vitz; first registration 2017; Japan; 1.3 gasoline/CVT; reported 88,400 km. Production year and model code unknown. |
| Customer's words | “The A/C never cools.” |
| Reported conditions | Three episodes this week, stopped on hot afternoons; airflow continues. Whether cooling is always absent remains unclear. |
| Evidence | Customer account, day 1. No workshop observation, scan result, or service records supplied. |
| Safety status | No warning light reported; other safety concerns not yet checked. Roadworthiness has not been assessed. |
| Authorization | Diagnosis only, maximum ¥6,600 including tax, per customer instruction on day 1. Repairs and additional charges are not authorized; contact the customer first. |
| Next assessment | Receiving technician to choose appropriate checks within the approved scope. No component replacement requested. |

Three useful questions:

1. Does “never” mean every journey, or only the three episodes? Describe conditions already observed; do not reproduce them for this note.
2. What recent A/C work or other changes are documented, and on what dates?
3. Were there any already-observed warning messages, smoke, fuel smell, or overheating? If present, pause experiments and seek qualified assessment or roadside assistance.

> 💡 The intake can be useful before every vehicle detail is known. Missing details remain visible, and the absence of a reported warning is not a passed inspection.

## Follow-up and revised handoff

**User:**

> On day 2 the customer clarifies that cooling usually works; those three episodes were the only failures. No recent work is known, but they have not checked the records. They report none of the listed urgent symptoms. The technician's day-2 note says “cooling present during today's stationary observation; reported loss of cooling not reproduced.” No scan was performed. We have no repair findings yet. Update the handoff.

**Assistant:**

| Evidence/status | Updated handoff, day 2 |
|---|---|
| Customer correction | Day 2: cooling normally works; three intermittent episodes. Keep the day-1 wording in the history and mark it clarified, rather than silently replacing it. |
| Documented observation | Technician's day-2 note: cooling present during that stationary observation; concern not reproduced under those conditions. |
| Not checked | Scan results; detailed service history; cause of the intermittent concern. “No recent work known” does not establish that no work occurred. |
| Safety report | Customer reports none of the listed urgent symptoms. This is not a technician's roadworthiness clearance. |
| Hypotheses | None established. Do not label a compressor, refrigerant charge, sensor, or other component faulty from this account. |
| Authorization | Unchanged: diagnosis up to ¥6,600 including tax. Actual charges/remaining allowance must be confirmed before further work; no repair authorization. |
| Next owner/action | Receiving technician: decide whether another assessment is needed within the remaining allowance. Service advisor: obtain customer approval before extra charges or repairs. |

Customer confirmation draft:

> We have updated the concern to intermittent loss of cooling, occurring three times this week. Cooling was present during today's observation, so the cause remains unconfirmed. Your authorization is for diagnosis only, up to ¥6,600 including tax. We will ask before additional work or repairs. Please correct any part of this summary.

**Outcome:** A usable handoff, with diagnosis and any repair still pending. No message has been sent and no work has been approved by the assistant.

> 💡 “Not reproduced” describes a particular observation. It does not erase the complaint or mean “no fault found everywhere.”

## Safety-changing follow-up

If the next message instead says “steering became very heavy and I want to drive around until it happens again,” interrupt the ordinary intake. Do not suggest a reproduction drive. Advise qualified assessment/roadside assistance and record the new concern, source, and time. Do not expand the authorization or declare the vehicle safe to drive.

## Review checkpoints

- Preserve the original complaint and the dated correction.
- Separate customer report, technician observation, not reproduced, and not checked.
- Carry diagnostic authorization, tax basis, and contact-before-extra-work condition into the handoff.
- Leave the cause and roadworthiness unresolved; do not invent a successful repair.

[All examples](./README.md) · [Answer review cases](../evals/answer-cases.yaml)
