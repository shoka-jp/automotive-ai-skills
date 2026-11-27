# EV Assistant (Asistente de Vehículos Eléctricos)

[English](./README.md) | [日本語](./README.ja.md) | **Español**

Una habilidad de IA para propietarios y compradores de vehículos eléctricos: estrategia de carga, salud de la batería, gestión de la autonomía, mantenimiento específico para VE, instalación de carga doméstica y guía de compra de VE nuevos y usados.

## Descripción

EV Assistant responde a las dudas para las que la experiencia con motores de combustión interna no prepara: cómo cargar para prolongar la vida útil de la batería, por qué varía tanto la autonomía, qué mantenimiento necesita realmente un vehículo eléctrico (y cuál desaparece), cómo evaluar la batería de un VE usado y cómo planificar viajes largos según las redes de carga. Cubre vehículos eléctricos de batería (BEV) y, cuando procede, híbridos enchufables (PHEV).

**Destinatarios:** compradores de VE, propietarios nuevos, conductores con experiencia que buscan cuidar la batería y técnicos en transición desde vehículos de combustión.

## Capacidades

- **Carga** — explicar la carga en CA Nivel 1/2 frente a la carga rápida en CC, estándares de conectores (CCS, NACS, CHAdeMO, Tipo 2), curvas de carga y por qué el último 20 % es más lento, además de aspectos prácticos de las redes públicas
- **Carga doméstica** — ayudar a planificar una instalación de Nivel 2: dimensionamiento del circuito, cálculos de carga para revisar con un electricista, cargadores cableados frente a enchufables, funciones inteligentes y estrategias con tarifas nocturnas o valle
- **Salud de la batería** — explicar los mecanismos de degradación (envejecimiento por calendario, ciclos, temperatura, estado de carga elevado), estrategia de límite diario de carga (p. ej., 80 % para uso diario en NMC y diferencias con LFP) y cómo interpretar una lectura de estado de salud (SoH)
- **Autonomía** — explicar los factores reales que afectan al alcance (temperatura, velocidad, climatización HVAC, pendiente, carga transportada), pérdida de autonomía en invierno y técnicas de conducción eficiente
- **Planificación de viajes** — estrategia de paradas de carga, márgenes de reserva y criterios de ruta según la curva de potencia de carga del vehículo
- **Mantenimiento** — programas específicos de VE: neumáticos (se desgastan antes por peso y par), líquido de frenos, filtro de habitáculo, circuitos de refrigeración de batería y motor, y qué desaparece (cambios de aceite, escape, servicio de transmisión convencional)
- **Compra de VE usado** — evaluación de la salud de la batería, transferencia de garantía, historial de campañas de llamada a revisión y equilibrio entre precio y degradación
- **Conciencia de seguridad** — explicar los límites del sistema de alto voltaje y por qué todo componente con cableado naranja es territorio exclusivo de técnicos cualificados
- **Particularidades de los PHEV** — doble necesidad de mantenimiento, recordatorio de que el motor térmico sigue requiriendo servicio y patrones de uso óptimos

## Prompts de ejemplo

```text
Acabo de comprar mi primer VE, un Hyundai Ioniq 5 de 2023. ¿Qué hábitos diarios
de carga ayudan a maximizar la vida útil de la batería?
```

```text
¿Por qué mi VE pierde un 30 % de autonomía en invierno y qué puedo hacer para
reducir esa pérdida?
```

```text
Estoy valorando un Nissan Leaf usado de 2019 con 95.000 km (60.000 millas).
¿Cómo evalúo la salud de la batería antes de comprar y qué degradación es normal?
```

```text
Ayúdame a planificar la carga en casa: recorro unos 80 km diarios, mi cuadro
eléctrico principal es de 100 A y mi compañía ofrece tarifa nocturna económica.
¿Qué debo preguntar a mi electricista?
```

```text
¿Qué mantenimiento necesita realmente mi VE en los primeros 160.000 km
(100.000 millas) en comparación con un coche de gasolina?
```

## Flujo de trabajo recomendado

1. **Identifica el vehículo y la química de su batería** si la conoces (NMC frente a LFP cambia de forma importante la recomendación de carga diaria).
2. **Describe tu uso.** Kilometraje diario, disponibilidad de carga en casa, clima habitual y frecuencia de viajes largos.
3. **Para decisiones de compra:** pide una lista de comprobación específica del modelo sobre batería, degradación y garantía antes de ir a ver el vehículo.
4. **Para instalar un punto de carga:** reúne los datos de tu cuadro eléctrico y tarifa contratada, y pide un resumen técnico para tratarlo con un electricista autorizado.
5. **Para problemas de autonomía o consumo:** informa las condiciones (temperatura exterior, velocidad, uso de climatización) para que el asistente separe la variación normal de una posible avería.
6. **Para cualquier cuestión que implique el sistema de alto voltaje:** usa esta habilidad para entender los síntomas y conceptos, y lleva el vehículo a un técnico cualificado en VE.

## Limitaciones

- **La reparación de alto voltaje queda fuera del alcance.** Los trabajos en el paquete de baterías, inversor y cableado naranja requieren formación y equipamiento específicos; el asistente explica conceptos pero nunca guiará procedimientos de reparación en alto voltaje ni declarará seguro un vehículo o una batería.
- **Las redes de carga cambian rápido.** La disponibilidad de estaciones, tarifas y compatibilidad de conectores (por ejemplo, adopción de NACS) evolucionan; verifica siempre con las aplicaciones oficiales de cada red.
- **El consejo sobre batería depende de la química y del modelo.** Sigue siempre las instrucciones de carga del fabricante cuando difieran de las reglas generales.
- **La instalación eléctrica requiere un electricista autorizado.** El asistente ayuda a preparar preguntas informadas, nunca a sustituir una instalación profesional certificada.
- **El comportamiento gestionado por software varía según la versión de firmware** — las funciones y curvas de carga pueden cambiar con actualizaciones OTA.

## Habilidades relacionadas

- [Used Car Inspector](../used-car-inspector/) — inspección general de vehículos usados para combinar con la evaluación de batería de un VE
- [Vehicle Maintenance Planner](../vehicle-maintenance-planner/) — planificar el mantenimiento específico que sí conserva un VE
- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — síntomas del sistema de 12 V y del chasis compartidos con vehículos de combustión
