<div align="center"><sub>
English | <a href="https://github.com/coppeltech/coppel-ai-assistant/blob/main/locales/es/README.md" target="_blank">Español</a> | <a href="https://github.com/coppeltech/coppel-ai-assistant/blob/main/locales/de/README.md" target="_blank">Deutsch</a> | <a href="https://github.com/coppeltech/coppel-ai-assistant/blob/main/locales/ja/README.md" target="_blank">日本語</a> | <a href="https://github.com/coppeltech/coppel-ai-assistant/blob/main/locales/zh-cn/README.md" target="_blank">简体中文</a> | <a href="https://github.com/coppeltech/coppel-ai-assistant/blob/main/locales/zh-tw/README.md" target="_blank">繁體中文</a> | <a href="https://github.com/coppeltech/coppel-ai-assistant/blob/main/locales/ko/README.md" target="_blank">한국어</a>
</sub></div>

# Coppel AI Assistant – Asistente de IA para Desarrollo

<p align="center">
  <img src="https://media.githubusercontent.com/media/coppeltech/coppel-ai-assistant/main/assets/docs/demo.gif" width="100%" />
</p>

<div align="center">
<table>
<tbody>
<td align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=coppeltech.coppel-ai-assistant" target="_blank"><strong>Descargar en VS Marketplace</strong></a>
</td>
<td align="center">
<a href="https://discord.gg/coppel" target="_blank"><strong>Discord</strong></a>
</td>
<td align="center">
<a href="https://www.reddit.com/r/coppel/" target="_blank"><strong>r/coppel</strong></a>
</td>
<td align="center">
<a href="https://github.com/coppeltech/coppel-ai-assistant/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop" target="_blank"><strong>Solicitudes de Funcionalidades</strong></a>
</td>
<td align="center">
<a href="https://docs.coppel.com/getting-started/for-new-coders" target="_blank"><strong>Comenzar</strong></a>
</td>
</tbody>
</table>
</div>

Conoce Coppel AI Assistant, un asistente de IA que puede usar tu **CLI** y **Editor**.

Gracias a las [capacidades de codificación agéntica de Claude Sonnet](https://www.anthropic.com/claude/sonnet), Coppel AI Assistant puede manejar tareas complejas de desarrollo de software paso a paso. Con herramientas que le permiten crear y editar archivos, explorar proyectos grandes, usar el navegador y ejecutar comandos de terminal (después de que otorgues permiso), puede asistirte de maneras que van más allá de la completación de código o soporte técnico. Coppel AI Assistant incluso puede usar el Protocolo de Contexto de Modelo (MCP) para crear nuevas herramientas y extender sus propias capacidades. Mientras que los scripts de IA autónomos tradicionalmente se ejecutan en entornos aislados, esta extensión proporciona una GUI humano-en-el-bucle para aprobar cada cambio de archivo y comando de terminal, proporcionando una forma segura y accesible de explorar el potencial de la IA agéntica.

1. Ingresa tu tarea y agrega imágenes para convertir mockups en aplicaciones funcionales o corregir errores con capturas de pantalla.
2. Coppel AI Assistant comienza analizando tu estructura de archivos y ASTs de código fuente, ejecutando búsquedas regex y leyendo archivos relevantes para ponerse al día en proyectos existentes. Al gestionar cuidadosamente qué información se agrega al contexto, Coppel AI Assistant puede proporcionar asistencia valiosa incluso para proyectos grandes y complejos sin abrumar la ventana de contexto.
3. Una vez que Coppel AI Assistant tiene la información que necesita, puede:
    - Crear y editar archivos + monitorear errores de linter/compilador en el camino, permitiéndole arreglar proactivamente problemas como importaciones faltantes y errores de sintaxis por sí mismo.
    - Ejecutar comandos directamente en tu terminal y monitorear su salida mientras trabaja, permitiéndole, por ejemplo, reaccionar a problemas del servidor de desarrollo después de editar un archivo.
    - Para tareas de desarrollo web, Coppel AI Assistant puede lanzar el sitio en un navegador sin cabeza, hacer clic, escribir, desplazarse y capturar capturas de pantalla + logs de consola, permitiéndole arreglar errores de tiempo de ejecución y errores visuales.
4. Cuando una tarea se completa, Coppel AI Assistant te presentará el resultado con un comando de terminal como `open -a "Google Chrome" index.html`, que ejecutas con un clic de un botón.

> [!TIP]
> Usa el atajo `CMD/CTRL + Shift + P` para abrir la paleta de comandos y escribe "Coppel AI Assistant: Abrir en Nueva Pestaña" para abrir la extensión como una pestaña en tu editor. Esto te permite usar Coppel AI Assistant lado a lado con tu explorador de archivos, y ver cómo cambia tu espacio de trabajo más claramente.

---

<img align="right" width="340" src="https://github.com/user-attachments/assets/3cf21e04-7ce9-4d22-a7b9-ba2c595e88a4">

### Use any API and Model

Coppel AI Assistant soporta proveedores de API como OpenRouter, Anthropic, OpenAI, Google Gemini, AWS Bedrock, Azure, GCP Vertex, Cerebras y Groq. También puedes configurar cualquier API compatible con OpenAI, o usar un modelo local a través de LM Studio/Ollama. Si estás usando OpenRouter, la extensión obtiene su lista de modelos más reciente, permitiéndote usar los modelos más nuevos tan pronto como estén disponibles.

The extension also keeps track of total tokens and API usage cost for the entire task loop and individual requests, keeping you informed of spend every step of the way.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="370" src="https://github.com/user-attachments/assets/81be79a8-1fdb-4028-9129-5fe055e01e76">

### Run Commands in Terminal

Gracias a las nuevas [actualizaciones de integración de shell en VSCode v1.93](https://code.visualstudio.com/updates/v1_93#_terminal-shell-integration-api), Coppel AI Assistant puede ejecutar comandos directamente en tu terminal y recibir la salida. Esto le permite realizar una amplia gama de tareas, desde instalar paquetes y ejecutar scripts de construcción hasta desplegar aplicaciones, gestionar bases de datos y ejecutar pruebas, todo mientras se adapta a tu entorno de desarrollo y cadena de herramientas para hacer el trabajo correctamente.

Para procesos de larga duración como servidores de desarrollo, usa el botón "Proceder Mientras Se Ejecuta" para permitir que Coppel AI Assistant continúe en la tarea mientras el comando se ejecuta en segundo plano. Mientras Coppel AI Assistant trabaja, será notificado de cualquier nueva salida de terminal en el camino, permitiéndole reaccionar a problemas que puedan surgir, como errores de tiempo de compilación al editar archivos.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="400" src="https://github.com/user-attachments/assets/c5977833-d9b8-491e-90f9-05f9cd38c588">

### Create and Edit Files

Coppel AI Assistant puede crear y editar archivos directamente en tu editor, presentándote una vista de diferencias de los cambios. Puedes editar o revertir los cambios de Coppel AI Assistant directamente en el editor de vista de diferencias, o proporcionar retroalimentación en el chat hasta que estés satisfecho con el resultado. Coppel AI Assistant también monitorea errores de linter/compilador (importaciones faltantes, errores de sintaxis, etc.) para que pueda arreglar problemas que surjan en el camino por sí mismo.

Todos los cambios realizados por Coppel AI Assistant se registran en la Línea de Tiempo de tu archivo, proporcionando una forma fácil de rastrear y revertir modificaciones si es necesario.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="370" src="https://github.com/user-attachments/assets/bc2e85ba-dfeb-4fe6-9942-7cfc4703cbe5">

### Use the Browser

Con la nueva capacidad de [Computer Use de Claude Sonnet](https://www.anthropic.com/news/3-5-models-and-computer-use), Coppel AI Assistant puede lanzar un navegador, hacer clic en elementos, escribir texto y desplazarse, capturando capturas de pantalla y logs de consola en cada paso. ¡Esto permite depuración interactiva, pruebas de extremo a extremo e incluso uso web general! Esto le da autonomía para arreglar errores visuales y problemas de tiempo de ejecución sin que necesites guiarlo de la mano y copiar y pegar logs de error tú mismo.

Intenta pedirle a Coppel AI Assistant que "pruebe la aplicación", y observa cómo ejecuta un comando como `npm run dev`, lanza tu servidor de desarrollo local en un navegador y realiza una serie de pruebas para confirmar que todo funciona. [Ve una demostración aquí.](https://x.com/sdrzn/status/1850880547825823989)

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="350" src="https://github.com/user-attachments/assets/ac0efa14-5c1f-4c26-a42d-9d7c56f5fadd">

### "add a tool that..."

Gracias al [Protocolo de Contexto de Modelo](https://github.com/modelcontextprotocol), Coppel AI Assistant puede extender sus capacidades a través de herramientas personalizadas. Mientras puedes usar [servidores hechos por la comunidad](https://github.com/modelcontextprotocol/servers), Coppel AI Assistant puede en su lugar crear e instalar herramientas adaptadas a tu flujo de trabajo específico. Solo pídele a Coppel AI Assistant que "agregue una herramienta" y él manejará todo, desde crear un nuevo servidor MCP hasta instalarlo en la extensión. Estas herramientas personalizadas luego se convierten en parte del conjunto de herramientas de Coppel AI Assistant, listas para usar en tareas futuras.

-   "agrega una herramienta que obtenga tickets de Jira": Recupera ACs de tickets y pon a Coppel AI Assistant a trabajar
-   "agrega una herramienta que gestione EC2s de AWS": Verifica métricas del servidor y escala instancias hacia arriba o abajo
-   "agrega una herramienta que obtenga los últimos incidentes de PagerDuty": Obtén detalles y pide a Coppel AI Assistant que arregle errores

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="360" src="https://github.com/user-attachments/assets/7fdf41e6-281a-4b4b-ac19-020b838b6970">

### Add Context

**`@url`:** Pega una URL para que la extensión la obtenga y convierta a markdown, útil cuando quieres darle a Coppel AI Assistant la documentación más reciente

**`@problems`:** Agrega errores y advertencias del espacio de trabajo (panel 'Problemas') para que Coppel AI Assistant los arregle

**`@file`:** Agrega el contenido de un archivo para que no tengas que desperdiciar solicitudes de API aprobando leer archivo (+ escribe para buscar archivos)

**`@folder`:** Agrega todos los archivos de una carpeta de una vez para acelerar tu flujo de trabajo aún más

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="350" src="https://github.com/user-attachments/assets/140c8606-d3bf-41b9-9a1f-4dbf0d4c90cb">

### Checkpoints: Compare and Restore

Mientras Coppel AI Assistant trabaja en una tarea, la extensión toma una instantánea de tu espacio de trabajo en cada paso. Puedes usar el botón 'Comparar' para ver una diferencia entre la instantánea y tu espacio de trabajo actual, y el botón 'Restaurar' para retroceder a ese punto.

Por ejemplo, cuando trabajas con un servidor web local, puedes usar 'Restaurar Solo Espacio de Trabajo' para probar rápidamente diferentes versiones de tu aplicación, luego usar 'Restaurar Tarea y Espacio de Trabajo' cuando encuentres la versión desde la cual quieres continuar construyendo. Esto te permite explorar de forma segura diferentes enfoques sin perder progreso.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

## Contributing

Para contribuir al proyecto, comienza con nuestra [Guía de Contribución](CONTRIBUTING.md) para aprender lo básico. También puedes unirte a nuestro [Discord](https://discord.gg/coppel) para chatear con otros contribuidores en el canal `#contributors`. ¡Si estás buscando trabajo de tiempo completo, revisa nuestras posiciones abiertas en nuestra [página de carreras](https://coppel.com/careers)!

## Licencia

[Apache 2.0 © 2025 Coppel Tech](./LICENSE)
