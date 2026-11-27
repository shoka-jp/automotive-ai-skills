# Vehicle Troubleshooting (Diagnóstico de Vehículos)

[English](./README.md) | [日本語](./README.ja.md) | **Español**

Una habilidad de IA para el diagnóstico orientado por síntomas — ruidos, vibraciones, olores, fugas, luces de advertencia y problemas de conducción — mediante un enfoque estructurado de diagnóstico diferencial para acotar las causas antes de comprar repuestos.

## Descripción

Vehicle Troubleshooting empieza donde el escáner OBD-II no llega: «hace un golpe seco al pasar por baches», «huele a jarabe dulce», «tira hacia la izquierda al frenar». Esta habilidad aplica un método de diagnóstico diferencial: recoger la firma completa del síntoma (cuándo, dónde y en qué condiciones ocurre), ordenar las causas probables y proponer pruebas discriminatorias que descarten posibilidades de la forma más rápida y económica.

**Destinatarios:** cualquier conductor que experimente un problema y técnicos que busquen una segunda opinión estructurada.

## Capacidades

- Diagnosticar por categoría de síntoma:
  - **Ruidos** — chirrido, rozamiento, golpe seco, golpeteo, zumbido, silbido, tictac, siseo; correlacionados con la velocidad, las RPM, la dirección, el frenado o los baches
  - **Vibraciones** — según el rango de velocidad, al acelerar, frenar o soltar el acelerador, percibidas en el volante, el asiento o los pedales
  - **Olores** — aceite quemado, refrigerante (dulce), combustible, azufre, embrague o frenos quemados, humedad o moho
  - **Fugas** — identificar el fluido por su color, textura y ubicación debajo del vehículo
  - **Luces de advertencia** — significado, gravedad y valoración de si es seguro continuar conduciendo
  - **Conducción y arranque** — arranque difícil, no arranca, calado, ralentí inestable, tirones o vacilación, consumo excesivo, sobrecalentamiento
  - **Sistema eléctrico** — descarga de la batería, luces tenues, accesorios intermitentes, diferenciación entre «no gira el motor de arranque» y «gira pero no arranca»
- Formular preguntas de seguimiento específicas que distingan entre causas posibles
- Ordenar las causas por probabilidad según el vehículo y el kilometraje concretos
- Proponer la prueba más económica y rápida que elimine el mayor número de hipótesis
- Dar un veredicto de urgencia: detener la conducción de inmediato / conducir con suavidad hasta un taller / vigilar / estético
- Explicar cómo caracterizar y reproducir un síntoma con seguridad para su diagnóstico, evitando cualquier condición peligrosa

## Prompts de ejemplo

```text
Mi Ford Escape 2016 hace un zumbido rítmico por encima de 65 km/h (40 mph) que suena
más fuerte en las curvas hacia la derecha. ¿Cuál es la causa más probable?
```

```text
El motor gira con fuerza pero no arranca después de pasar toda la noche estacionado.
En caliente arranca sin problema. Es un VW Golf 2.5 de 2010. ¿Por dónde empiezo?
```

```text
Hay un charco de líquido color naranja rosado debajo de la parte delantera del coche,
cerca del lado del pasajero. ¿Qué es y qué urgencia tiene?
```

```text
El volante vibra únicamente entre 95 y 115 km/h (60-70 mph), y por encima o por debajo
va suave. ¿Qué indica ese patrón ligado a la velocidad?
```

```text
La batería se descarga si el coche pasa 3 días parado. Tanto la batería como el alternador
dan bien en las pruebas. ¿Cómo busco una descarga parásita?
```

## Flujo de trabajo recomendado

Para comprobaciones específicas de un modelo, sigue la [guía de enrutamiento de referencias](../../docs/model-reference-routing.md) utilizando la variante exacta, el año de fabricación y el mercado original. El [generador en navegador](../../tools/vehicle-brief.html) permite preparar el prompt. Una coincidencia de referencia no demuestra por sí sola una avería, elegibilidad ni reparación completada.

**Instalación independiente:** Si faltan la guía de enrutamiento relativa del repositorio o los archivos de datos, utiliza la [guía de enrutamiento en línea](https://shoka-jp.github.io/automotive-ai-skills/docs/model-reference-routing.html) o el [generador en navegador](https://shoka-jp.github.io/automotive-ai-skills/tools/vehicle-brief.html). Pide la variante exacta, el año de fabricación y el mercado original; revisa la referencia completa y las fuentes oficiales vigentes. Si no es posible acceder a los recursos o ningún perfil coincide, indica que no hay evidencia específica del modelo disponible y continúa solo con orientación general. Una coincidencia no constituye un diagnóstico, elegibilidad de campaña ni prueba de reparación completada.

1. **Describe la firma completa del síntoma.** Qué percibes, cuándo empezó, si es constante o intermitente y qué condiciones lo desencadenan (velocidad, RPM, temperatura, dirección, frenado, clima).
2. **Responde las preguntas de seguimiento.** Los detalles discriminatorios («¿cambia al pisar el embrague?») son los que acotan el diagnóstico.
3. **Obtén el diagnóstico diferencial ordenado.** Pide las causas ordenadas por probabilidad junto con un veredicto de urgencia.
4. **Realiza las pruebas discriminatorias.** Haz las comprobaciones seguras sugeridas e informa de los resultados; cada respuesta recorta la lista.
5. **Confirma antes de comprar piezas.** Pregunta «¿qué prueba confirma que esta es la causa?» antes de gastar dinero.
6. **Deriva a la reparación.** Una vez confirmada la causa, utiliza [Mechanic Assistant](../mechanic-assistant/) para ejecutar el arreglo o lleva el diagnóstico confirmado a un taller.

## Limitaciones

- **El diagnóstico por descripción es probabilístico.** Los sonidos y las sensaciones son difíciles de describir con precisión; el asistente ofrece probabilidades, no certezas.
- **La seguridad prevalece sobre el diagnóstico.** Los síntomas de fallo de frenos, problemas de dirección, olor a combustible y sobrecalentamiento exigen detener el vehículo primero y diagnosticar después; nunca intentes reproducir una condición peligrosa.
- **Los fallos intermitentes pueden requerir registro de datos** o equipo profesional (osciloscopio, estetoscopio de chasis, máquina de humo) para localizarlos.
- **La mayoría de los clientes no pueden oír audio ni ver vídeo** — describe el síntoma o detalla el carácter del sonido (frecuencia, ritmo, correlación).
- **Algunos patrones de síntomas son específicos del modelo** de formas que el razonamiento general no cubre; los foros específicos del modelo y los boletines técnicos (TSB) siguen siendo contrastes valiosos.

## Habilidades relacionadas

- [OBD-II Diagnostic Assistant](../obd2-diagnostic-assistant/) — cuando una luz de advertencia o un código almacenado acompaña al síntoma
- [Mechanic Assistant](../mechanic-assistant/) — para ejecutar la reparación una vez diagnosticada
- [Motorcycle Mechanic](../motorcycle-mechanic/) — diagnóstico de síntomas en vehículos de dos ruedas
- [Service Intake Assistant](../service-intake-assistant/) — preparar un traspaso factual para el taller
