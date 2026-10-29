# 🚗 Automotive AI Skills (Habilidades de IA para Automoción)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/shoka-jp/automotive-ai-skills/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)

Una colección de código abierto de **habilidades de IA para diagnóstico, mantenimiento, reparación, personalización y propiedad de vehículos** — tanto para principiantes como para mecánicos experimentados.

[English](./README.md) | [日本語](./README.ja.md) | **Español**

---

## Descripción general

Los modelos de lenguaje son genuinamente útiles en el taller — pero solo cuando se les consulta con estructura, contexto y conciencia de sus límites. Este repositorio empaqueta esa estructura como **habilidades**: marcos de prompts, flujos de trabajo y salvaguardas que convierten un asistente de IA de propósito general en un ayudante automotriz especializado.

Cada habilidad define:

- **Qué puede hacer** (capacidades, con limitaciones honestas)
- **Cómo usarla** (flujo de trabajo recomendado y contexto a proporcionar)
- **Prompts de ejemplo listos para usar**, que puedes copiar y adaptar

Las habilidades son **independientes de la plataforma**: funcionan con Claude, ChatGPT, modelos locales o cualquier asistente de IA capaz. No requieren instalación ni código.

## Habilidades (20)

Las cuatro primeras están **disponibles en español** — sigue el enlace de la columna derecha.

| Habilidad | Qué hace | ES |
|---|---|---|
| 🔧 [Mechanic Assistant](./skills/mechanic-assistant/) | Procedimientos de reparación, pares de apriete, herramientas | [✔](./skills/mechanic-assistant/README.es.md) |
| 🔌 [OBD-II Diagnostic Assistant](./skills/obd2-diagnostic-assistant/) | Interpretación de códigos de falla, freeze frame y datos en vivo | [✔](./skills/obd2-diagnostic-assistant/README.es.md) |
| 📅 [Vehicle Maintenance Planner](./skills/vehicle-maintenance-planner/) | Planes de mantenimiento preventivo personalizados | [✔](./skills/vehicle-maintenance-planner/README.es.md) |
| 🔍 [Used Car Inspector](./skills/used-car-inspector/) | Listas de inspección precompra y apoyo en la negociación | [✔](./skills/used-car-inspector/README.es.md) |
| 🩺 [Vehicle Troubleshooting](./skills/vehicle-troubleshooting/) | Diagnóstico por síntomas: ruidos, fugas, vibraciones | — |
| 🏁 [Vehicle Customization Advisor](./skills/vehicle-customization-advisor/) | Planificación de modificaciones, cálculos de compatibilidad | — |
| ⚡ [EV Assistant](./skills/ev-assistant/) | Carga, salud de la batería, autonomía, mantenimiento de VE | — |
| 🏍️ [Motorcycle Mechanic](./skills/motorcycle-mechanic/) | Mantenimiento de motocicletas, carburadores, válvulas | — |
| 🛢️ [Diesel Specialist](./skills/diesel-specialist/) | Common rail, DPF/EGR/SCR (AdBlue), calentadores | — |
| 🕰️ [Classic Car Restorer](./skills/classic-car-restorer/) | Encendido por platinos, carburadores, óxido, piezas descatalogadas | — |
| 🚛 [Fleet Manager](./skills/fleet-manager/) | Gestión de flotas: calendarios, costes, tiempo de inactividad | — |
| 🛞 [Tire & Wheel Advisor](./skills/tire-wheel-advisor/) | Cálculo de medidas, estrategia estacional, desgaste, TPMS | — |
| 🚚 [Commercial Vehicle & Truck Assistant](./skills/commercial-vehicle-assistant/) | Frenos neumáticos, inspección previa al viaje, sujeción de carga | — |
| 🎨 [Body & Paint Assistant](./skills/body-paint-assistant/) | Evaluación de golpes y arañazos, pintura, límites del bricolaje | — |
| 🪝 [Towing & Trailer Advisor](./skills/towing-trailer-advisor/) | Enganches, peso en punta, cableado y frenos de remolque | — |
| 🔊 [Car Audio & Electronics Assistant](./skills/car-audio-electronics/) | Radios, amplificadores, dash cams, disciplina de cableado 12V | — |
| 📝 [Service Intake Assistant](./skills/service-intake-assistant/) | Recepción de síntomas, registro de evidencias y comunicación con el taller | — |
| 🧾 [Repair Estimate Reviewer](./skills/repair-estimate-reviewer/) | Comparación del alcance, las evidencias y los cálculos de presupuestos de reparación | — |
| 🏷️ [Used Car Listing Assistant](./skills/used-car-listing-assistant/) | Anuncios de vehículos usados con datos documentados, estado y desglose de precio | — |
| 📣 [Vehicle Recall Checker](./skills/vehicle-recall-checker/) | Consultas oficiales de campañas, aplicabilidad al vehículo y pruebas de reparación | — |

## Uso

1. **Elige la habilidad** que corresponda a tu situación.
2. **Lee su flujo de trabajo recomendado** — cada habilidad indica qué contexto reunir (datos del vehículo, síntomas, mediciones).
3. **Copia un prompt de ejemplo** y adáptalo con los datos de tu vehículo. Puedes escribir en español: las habilidades definen la *estructura* de la conversación, no el idioma.
4. **Trabaja de forma iterativa.** Informa los resultados; los flujos están diseñados como conversaciones, no como preguntas únicas.
5. **Respeta la sección de limitaciones.** Verifica las especificaciones críticas de seguridad contra la documentación de fábrica y deriva los trabajos de alto riesgo a profesionales.

Para un asistente dedicado, pega el README de una habilidad en las instrucciones de un Proyecto de Claude o un GPT personalizado — ver [`integrations/`](./integrations/).

## Aviso de seguridad

Estas habilidades ofrecen información general, **no asesoramiento profesional**. Verifica siempre pares de apriete, capacidades y holguras contra el manual de fábrica. Frenos, dirección, airbags (SRS), sistemas de combustible y sistemas de alto voltaje de VE son territorio profesional en caso de duda. Consulta el [aviso completo](./docs/safety-disclaimer.md) (en inglés).

## Estado de la traducción

Cuatro habilidades principales ya están traducidas al español (ver la tabla); las demás están en **inglés y japonés**. Las traducciones al español de las habilidades restantes son bienvenidas — consulta [CONTRIBUTING.md](./CONTRIBUTING.md) y abre un issue para coordinar.

## Licencia

[MIT](https://github.com/shoka-jp/automotive-ai-skills/blob/main/LICENSE) © 2026 Sho Kamakura

> **Nota:** Esta traducción se basa en el README en inglés, que prevalece en caso de discrepancia.
