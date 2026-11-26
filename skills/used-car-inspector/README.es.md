# Used Car Inspector (Inspector de Coches Usados)

[English](./README.md) | [日本語](./README.ja.md) | **Español**

Una habilidad de IA que te guía en la evaluación de un vehículo usado antes de comprarlo — listas de inspección, detección de señales de alarma, problemas conocidos por modelo y apoyo en la negociación.

## Descripción

El Inspector de Coches Usados te ayuda a no comprar el problema de otro. Genera listas de inspección específicas por modelo, te enseña a reconocer daños por accidente y fraude de kilometraje, interpreta el lenguaje de los anuncios y el comportamiento del vendedor, y convierte los hallazgos de la inspección en una posición de negociación o en la decisión de retirarte.

**Audiencia:** Compradores de usados de cualquier nivel, y vendedores que quieran representar su vehículo con honestidad.

## Capacidades

- Generar listas de inspección precompra específicas por modelo (puntos débiles conocidos de esa generación y motor)
- Guiar una inspección estructurada: exterior, holguras de paneles y pintura, cristales, neumáticos, bajos, vano motor, fluidos, interior, electrónica, arranque en frío y prueba de conducción
- Explicar cómo detectar reparaciones de accidente, daños por inundación y kilometraje manipulado
- Interpretar un escaneo OBD-II de solo lectura hecho en la visita con permiso del vendedor: códigos almacenados y pendientes, estado del testigo de avería y monitores de preparación (readiness). Varios monitores incompletos, o poca distancia recorrida desde el borrado de códigos (si el coche la informa), pueden indicar que se borraron los códigos o se desconectó la batería hace poco. Tómalo como una pregunta para el vendedor, no como prueba de ocultación: algunos coches dejan normalmente un monitor, a menudo el EVAP, incompleto.
- Decodificar la estructura del VIN y explicar qué revela (y qué no) un informe de historial
- Interpretar síntomas en la prueba de conducción (tirones, vibraciones, ruidos, calidad del cambio, color del humo)
- Evaluar si el precio es razonable según estado, kilometraje y mercado
- Convertir hallazgos en argumentos de negociación con costes de reparación realistas
- Proporcionar listas de preguntas para particulares y concesionarios, y señales de respuestas evasivas
- Explicar los estados del título/documentación y sus implicaciones
- Aconsejar cuándo es imprescindible una inspección profesional precompra (PPI) y qué pedirle al taller

## Prompts de ejemplo

```text
Estoy mirando un BMW 328i 2014 con 150.000 km. ¿Cuáles son los problemas
conocidos de esta generación y qué debo revisar específicamente?
```

```text
Dame una lista de inspección de 30 minutos para ver un coche usado,
ordenada para revisar primero lo que descartaría la compra.
```

```text
El vendedor dice "golpe leve, reparado profesionalmente". ¿Cómo verifico
la calidad de la reparación y qué debo buscar?
```

```text
En la prueba, la transmisión dudó al pasar de 2ª a 3ª en frío y luego se
suavizó. ¿Cuánto debería preocuparme en un Nissan 2013 con CVT?
```

```text
Mi lector OBD-II no muestra códigos de avería, pero hay cuatro monitores de
preparación incompletos en un coche que voy a comprar. ¿Qué puede significar
y qué debo preguntar al vendedor?
```

```text
El coche está bien pero necesita neumáticos, frenos delanteros y tiene
una fuga leve de aceite. Piden 9.500 €. Ayúdame a armar la negociación.
```

## Flujo de trabajo recomendado

1. **Antes de contactar:** comparte el anuncio y pide problemas conocidos, rango de precio justo y preguntas para hacer a distancia.
2. **Antes de la visita:** pide la lista de inspección específica del modelo y llévala impresa o en el móvil.
3. **Durante la inspección:** sigue la lista y anota todo; fotografía lo dudoso. Si puedes conectar un lector OBD-II (con permiso del vendedor), lee solo códigos y monitores; no borres nada.
4. **Después de la visita:** informa los hallazgos y pide una evaluación: comprar, negociar, PPI primero o retirarse.
5. **Antes de pagar:** verifica documentación y VIN; haz una PPI profesional en todo lo caro o complejo.
6. **Después de comprar:** pasa al [Planificador de Mantenimiento](../vehicle-maintenance-planner/README.es.md) para el plan de puesta al día.

## Limitaciones

- **No puede ver el vehículo.** Trabaja con tus observaciones; no detecta lo que no revisas.
- **Sin acceso a bases de datos de historial.** Puede interpretar un informe que le resumas, pero no obtenerlo.
- **Los precios de mercado cambian:** contrasta con anuncios locales actuales.
- **Un escaneo OBD-II sin códigos no garantiza que el coche esté bien:** muchas averías mecánicas nunca registran un código.
- **La PPI profesional es insustituible** en vehículos caros, exóticos o muy modificados.
- **Los requisitos legales varían por país** (obligaciones de divulgación, transferencias, garantías) — verifica localmente.

## Habilidades relacionadas

- [Vehicle Maintenance Planner](../vehicle-maintenance-planner/README.es.md) — planificación posterior a la compra
- [OBD-II Diagnostic Assistant](../obd2-diagnostic-assistant/README.es.md) — interpretar códigos, freeze frame y monitores de un escaneo
- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — investigar síntomas de la prueba de conducción (inglés/japonés)
- [EV Assistant](../ev-assistant/) — la compra de un VE usado depende de la salud de la batería (inglés/japonés)
