# OBD-II Diagnostic Assistant (Asistente de Diagnóstico OBD-II)

[English](./README.md) | [日本語](./README.ja.md) | **Español**

Una habilidad de IA para interpretar códigos de falla OBD-II (DTC), datos de freeze frame y lecturas de sensores en vivo — convirtiendo la salida del escáner en un plan de diagnóstico estructurado.

## Descripción

Este asistente te lleva de "se encendió el check engine" a una lista priorizada de causas probables y pruebas. Explica qué monitorea realmente cada código, distingue causas raíz de efectos secundarios y te ayuda a interpretar datos en vivo (ajustes de combustible, comportamiento de sondas lambda, caudalímetro) para que repares la falla en lugar de reemplazar la pieza que nombra el código.

**Audiencia:** Aficionados con escáner, técnicos profesionales y cualquiera que quiera saber si una luz de advertencia es urgente.

## Capacidades

- Explicar cualquier DTC estandarizado (P0xxx/P2xxx/P3xxx y códigos B/C/U) en lenguaje claro: qué se monitorea, cómo corre la prueba y qué activa el código
- Interpretar códigos específicos del fabricante (P1xxx) con la advertencia de que las definiciones varían por marca
- Analizar múltiples códigos simultáneos e identificar relaciones causales (p. ej., fallo de encendido + mezcla pobre → fuga de vacío)
- Interpretar el freeze frame para reconstruir las condiciones del fallo
- Guiar el diagnóstico con datos en vivo: ajustes de combustible a corto/largo plazo, conmutación de sondas lambda, g/s del caudalímetro vs. esperado, plausibilidad de temperatura, monitores EVAP
- Explicar los monitores de preparación (readiness) y qué hace falta para pasar la inspección de emisiones tras borrar códigos
- Distinguir entre "puedes conducir a casa" y "llama a la grúa"
- Recomendar qué pruebas hacer y en qué orden para confirmar el diagnóstico antes de comprar piezas
- Explicar protocolos OBD-II y diferencias entre escáneres (lector de códigos vs. herramienta bidireccional)

## Prompts de ejemplo

```text
Mi Honda Civic 2015 muestra P0420. ¿Significa siempre que el catalizador
está mal? ¿Qué debería probar antes de reemplazarlo?
```

```text
Tengo P0171 y P0174 a la vez en un V6. ¿Qué significa que ambos bancos
estén pobres y por dónde empiezo?
```

```text
Este es mi freeze frame de un P0300 (fallo de encendido aleatorio):
[pegar datos]. ¿Qué hacía el motor cuando se registró el código?
```

```text
Mi ajuste de combustible a largo plazo es +18% en ralentí pero baja a +3%
en crucero. ¿Qué sugiere ese patrón?
```

```text
Borré los códigos pero la inspección dice "monitores no listos". ¿Cómo
completo el ciclo de conducción en un Toyota Camry 2018?
```

## Flujo de trabajo recomendado

1. **Lee todos los códigos, incluidos los pendientes.** La combinación importa.
2. **Captura el freeze frame antes de borrar nada.** Borrar códigos destruye la evidencia.
3. **Comparte el contexto del vehículo:** año, marca, modelo, motor, kilometraje, reparaciones recientes y comportamiento actual.
4. **Pide un análisis causal:** qué código es raíz y cuáles son síntomas.
5. **Ejecuta las pruebas de lo barato a lo caro:** inspección visual y datos en vivo antes de reemplazar piezas.
6. **Confirma la reparación:** borra códigos, completa el ciclo de conducción y verifica que los monitores corran y pasen.

## Limitaciones

- **Los códigos identifican pruebas fallidas, no piezas fallidas.** Un P0420 significa que falló la prueba de eficiencia del catalizador — la causa puede ser un sensor, una fuga de escape o el catalizador. El razonamiento es probabilístico; la prueba física confirma.
- **Los códigos específicos del fabricante varían por marca** y deben verificarse contra documentación oficial.
- **No puede leer tu escáner:** transcribe los códigos y datos con precisión.
- **La interpretación depende de la calidad de los datos:** los clones ELM327 baratos pueden reportar valores lentos o imprecisos.
- **Los vehículos anteriores a OBD-II** (antes de 1996 en EE. UU., ~2001 en la UE para gasolina) requieren otros enfoques.

## Lee tu propio coche con obd2-mcp

Con [obd2-mcp](https://github.com/shoka-jp/obd2-mcp) (v0.7.0 o posterior) y un adaptador ELM327, Claude puede leer los códigos, el freeze frame y los datos en vivo directamente, sin que tengas que pegarlos. Su prompt `check_engine_light` sigue el flujo de trabajo anterior, `inspection_check` revisa la preparación antes de una inspección de emisiones y `watch_live_data` muestra cómo cambian valores como la temperatura del refrigerante con el coche estacionado. Desde v0.8.0, `after_repair_check` comprueba si una avería ha vuelto a aparecer tras una reparación, y `compare_diagnostic_reports` muestra qué cambió entre dos lecturas (por ejemplo, antes y después de la reparación). Sin coche, prueba el [vehículo simulado](../../docs/try-obd2-mcp.md) (guía en inglés y japonés).

## Habilidades relacionadas

- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — cuando no hay código, solo un síntoma (inglés/japonés)
- [Mechanic Assistant](../mechanic-assistant/README.es.md) — para ejecutar la reparación una vez diagnosticada
- [EV Assistant](../ev-assistant/) — los VE usan el puerto OBD de forma diferente (inglés/japonés)
