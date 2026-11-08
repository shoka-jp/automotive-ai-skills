# Service Intake Assistant

[English](./README.md) | [日本語](./README.ja.md) | **Español**

Convierte las observaciones de un conductor en una nota de recepción clara y un traspaso al técnico, sin inventar un diagnóstico.

## Descripción

Esta habilidad organiza la conversación antes del diagnóstico: qué ocurrió, en qué condiciones y qué se ha comprobado realmente. Mantén separados los relatos del cliente, las observaciones del técnico y las hipótesis no verificadas. Usa Vehicle Troubleshooting cuando la tarea pase al diagnóstico y Repair Estimate Reviewer cuando haya un presupuesto por escrito.

**Destinatarios:** asesores de servicio, talleres independientes, coordinadores de flotas y propietarios que preparan una visita al taller.

## Capacidades

- Recoger la cronología y frecuencia del síntoma, las condiciones de uso, los mensajes de advertencia y los trabajos recientes.
- Conservar las palabras del cliente y convertirlas en una nota concisa para el técnico.
- Señalar las preocupaciones inmediatas de seguridad para que un profesional las evalúe, sin declarar que el vehículo es seguro para circular.
- Registrar resultados de escáner, fotos y grabaciones ya disponibles con su fuente y fecha; distinguir «no comprobado» de «normal».
- Separar la autorización para diagnosticar, los límites de gasto y las actualizaciones solicitadas de la aprobación para sustituir piezas.
- Preparar un resumen para que el cliente lo confirme y una lista de las tres siguientes preguntas útiles.
- Actualizar la recepción sin perder la queja original, su fuente ni las correcciones posteriores; distinguir «no reproducido» de «no comprobado».
- Incluir en el siguiente traspaso el límite de gasto para el diagnóstico, si incluye impuestos, el importe ya utilizado si se conoce y la condición de contactar antes de trabajos adicionales.

## Prompts de ejemplo

```text
Toyota Corolla 1.8 de gasolina de 2018, automático, 92.000 km, mercado de EE. UU.
El cliente indica un traqueteo solo en el primer arranque en frío; todavía no se
ha realizado una lectura con escáner. Redacta una nota de recepción y tres
preguntas de seguimiento.
```

```text
Nissan Leaf de 2020, 40 kWh, 68.000 km, Japón. El cliente dice que la carga
a veces se detiene en un cargador público, pero funciona en casa. Separa los
hechos comunicados de la información que falta para el técnico de vehículos
eléctricos; no lo diagnostiques.
```

```text
Mazda3 2.0 de gasolina de 2017, 110.000 km, Reino Unido. Apareció una vibración
después de cambiar los neumáticos. Tengo la factura, pero ningún resultado de
inspección. Prepara un traspaso que no declare defectuosos los neumáticos ni
recomiende una prueba en carretera.
```

```text
Honda Fit 1.3 de gasolina de 2019, 75.000 km, Japón. El cliente autorizó solo
una revisión diagnóstica de ¥5.000, no reparaciones. Resume ese límite y redacta
una solicitud neutral de actualización sin prometer un precio ni un plazo.
```

## Flujo de trabajo recomendado

1. **Identifica el vehículo y la visita.** Reúne año, marca, modelo, motorización, transmisión, kilometraje, mercado, motivo de consulta y trabajos recientes. Solicita solo los documentos pertinentes y sin datos personales.
2. **Comprueba primero la urgencia.** Ante pérdida de frenado o dirección, humo, olor a combustible, sobrecalentamiento grave o aviso de alto voltaje, detén los intentos de diagnóstico y coordina una evaluación profesional o asistencia en carretera. No pidas al cliente que reproduzca una condición peligrosa.
3. **Registra la secuencia.** Pregunta cuándo empezó, con qué frecuencia ocurre, si el vehículo estaba frío o caliente, velocidad o carga si ya se observaron, mensajes y cambios previos. Limita el primer seguimiento a las tres preguntas que más ayuden al traspaso.
4. **Etiqueta las pruebas.** Distingue «comunicado por el cliente», «observación documentada», «hipótesis» y «no comprobado». Un código de avería es una pista registrada, no una prueba de que haya que sustituir una pieza.
5. **Entrega una nota estructurada.** Incluye vehículo y contexto; motivo del cliente; condiciones y cronología; pruebas con fuente y fecha; preocupaciones de seguridad; información desconocida; y la siguiente evaluación solicitada. Añade autorización diagnóstica y presupuesto solo si se proporcionaron expresamente; de lo contrario, déjalos pendientes.
6. **Confirma el traspaso.** Pide al cliente que corrija el resumen y deja que el profesional receptor decida las pruebas y evalúe si el vehículo puede circular. Mantén cualquier mensaje de salida como borrador salvo que se solicite enviarlo.

### Actualización de una consulta abierta

Si las versiones posteriores difieren, conserva las palabras originales y añade la corrección con su fuente y fecha. No elijas una versión como hecho sin indicarlo. Registra por separado las condiciones de observación del técnico: «no reproducido en la revisión de hoy» no significa que la queja haya quedado descartada. Si la información nueva plantea una preocupación urgente de seguridad, vuelve al paso 2 antes de continuar el traspaso normal.

Utiliza este resumen en cada revisión:

| Campo | Qué conservar |
|---|---|
| Consulta y revisión | Palabras originales; última aclaración; fuente y fecha de cada una |
| Pruebas y alcance | Relato del cliente; observación documentada y condiciones; hipótesis; no reproducido; no comprobado |
| Seguridad | Señales comunicadas, preguntas de seguridad sin respuesta y cualquier evaluación profesional; no inventar una autorización para circular |
| Autorización | Diagnóstico frente a reparaciones; importe y moneda; tratamiento de impuestos; fuente y fecha de aprobación; condición de contacto. Los términos desconocidos quedan pendientes. |
| Margen restante | Cargos confirmados y saldo disponible solo si se han proporcionado; un límite de gasto no es un saldo sin utilizar |
| Próxima acción | Responsable receptor, pruebas que faltan y qué necesita aprobación antes de continuar |

Por ejemplo: «El cliente indica ahora que la refrigeración suele funcionar; la observación de hoy no reprodujo el problema. Solo se autoriza el diagnóstico hasta ¥6.600 con impuestos incluidos; el gasto real no está confirmado». El [ejemplo completo de una consulta intermitente](../../examples/service-intake-intermittent.md) muestra la conversación.

## Limitaciones

- Los textos, grabaciones y fotos no pueden determinar si es seguro circular ni confirmar una avería. No conviertas «no se informó de ninguna luz de aviso» en «no hay averías».
- La habilidad no realiza pruebas de taller ni aprueba reparaciones. Deja los trabajos de frenos, dirección, SRS, sistema de combustible y alto voltaje de vehículos eléctricos a profesionales cualificados y a los procedimientos de fábrica del vehículo.
- La disponibilidad de citas, el tiempo de diagnóstico, los precios, la cobertura de garantía y el consentimiento del cliente deben proceder de registros actuales, no de suposiciones.
- La terminología y los requisitos de autorización varían según el mercado. Consulta la orientación local vigente cuando surjan estas cuestiones; véanse las [fuentes de verificación](../../docs/vehicle-service-sources.md).

## Habilidades relacionadas

- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — investigar síntomas después de la recepción
- [Repair Estimate Reviewer](../repair-estimate-reviewer/) — comparar el trabajo propuesto cuando haya un presupuesto
- [Fleet Manager](../fleet-manager/) — coordinar el tiempo fuera de servicio de varios vehículos
