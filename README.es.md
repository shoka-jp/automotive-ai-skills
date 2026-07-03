# 🚗 Automotive AI Skills (Habilidades de IA para Automoción)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
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

## Habilidades (14)

| Habilidad | Qué hace |
|---|---|
| 🔧 [Mechanic Assistant](./skills/mechanic-assistant/) | Procedimientos de reparación, pares de apriete, herramientas |
| 🔌 [OBD-II Diagnostic Assistant](./skills/obd2-diagnostic-assistant/) | Interpretación de códigos de falla, freeze frame y datos en vivo |
| 📅 [Vehicle Maintenance Planner](./skills/vehicle-maintenance-planner/) | Planes de mantenimiento preventivo personalizados |
| 🔍 [Used Car Inspector](./skills/used-car-inspector/) | Listas de inspección precompra y apoyo en la negociación |
| 🩺 [Vehicle Troubleshooting](./skills/vehicle-troubleshooting/) | Diagnóstico por síntomas: ruidos, fugas, vibraciones |
| 🏁 [Vehicle Customization Advisor](./skills/vehicle-customization-advisor/) | Planificación de modificaciones, cálculos de compatibilidad |
| ⚡ [EV Assistant](./skills/ev-assistant/) | Carga, salud de la batería, autonomía, mantenimiento de VE |
| 🏍️ [Motorcycle Mechanic](./skills/motorcycle-mechanic/) | Mantenimiento de motocicletas, carburadores, válvulas |
| 🛢️ [Diesel Specialist](./skills/diesel-specialist/) | Common rail, DPF/EGR/SCR (AdBlue), calentadores |
| 🕰️ [Classic Car Restorer](./skills/classic-car-restorer/) | Encendido por platinos, carburadores, óxido, piezas descatalogadas |
| 🚛 [Fleet Manager](./skills/fleet-manager/) | Gestión de flotas: calendarios, costes, tiempo de inactividad |
| 🛞 [Tire & Wheel Advisor](./skills/tire-wheel-advisor/) | Cálculo de medidas, estrategia estacional, desgaste, TPMS |
| 🚚 [Commercial Vehicle & Truck Assistant](./skills/commercial-vehicle-assistant/) | Frenos neumáticos, inspección previa al viaje, sujeción de carga |
| 🎨 [Body & Paint Assistant](./skills/body-paint-assistant/) | Evaluación de golpes y arañazos, pintura, límites del bricolaje |

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

Por ahora, solo este README está disponible en español; el contenido de las habilidades está en **inglés y japonés**. Las traducciones al español del contenido de las habilidades son bienvenidas — consulta [CONTRIBUTING.md](./CONTRIBUTING.md) y abre un issue para coordinar.

## Licencia

[MIT](./LICENSE) © 2026 Sho Kamakura

> **Nota:** Esta traducción se basa en el README en inglés, que prevalece en caso de discrepancia.
