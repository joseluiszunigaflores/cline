# Contribuyendo a Cline

Estamos emocionados de que estés interesado en contribuir a Cline. Ya sea que estés corrigiendo un error, agregando una funcionalidad o mejorando nuestra documentación, ¡cada contribución hace que Cline sea más inteligente! Para mantener nuestra comunidad vibrante y acogedora, todos los miembros deben adherirse a nuestro [Código de Conducta](CODE_OF_CONDUCT.md).

## Reportando Errores o Problemas

¡Los reportes de errores ayudan a hacer que Cline sea mejor para todos! Antes de crear un nuevo problema, por favor [busca en los existentes](https://github.com/cline/cline/issues) para evitar duplicados. Cuando estés listo para reportar un error, dirígete a nuestra [página de problemas](https://github.com/cline/cline/issues/new/choose) donde encontrarás una plantilla para ayudarte a completar la información relevante.

<blockquote class='warning-note'>
     🔐 <b>Importante:</b> Si descubres una vulnerabilidad de seguridad, por favor usa la <a href="https://github.com/cline/cline/security/advisories/new">herramienta de seguridad de Github para reportarla de forma privada</a>.
</blockquote>

## Antes de Contribuir

Todas las contribuciones deben comenzar con un Issue de GitHub, a menos que el cambio sea para correcciones de errores pequeños, correcciones de errores tipográficos, mejoras menores de redacción, o correcciones simples de tipos que no cambien la funcionalidad.

**Para funcionalidades y contribuciones**:
- Primero revisa el [tablero de discusiones de Solicitudes de Funcionalidades](https://github.com/cline/cline/discussions/categories/feature-requests) para ideas similares
- Si tu idea es nueva, crea una nueva solicitud de funcionalidad
- Espera la aprobación de los mantenedores principales antes de comenzar la implementación
- Una vez aprobada, ¡siéntete libre de comenzar a trabajar en un PR con la ayuda de nuestra comunidad!

**Los PRs sin issues aprobados pueden ser cerrados.**

## Decidiendo en Qué Trabajar

¿Buscas una buena primera contribución? Revisa los issues etiquetados como ["good first issue"](https://github.com/cline/cline/labels/good%20first%20issue) o ["help wanted"](https://github.com/cline/cline/labels/help%20wanted). ¡Estos están específicamente curados para nuevos contribuidores y áreas donde nos encantaría recibir ayuda!

También damos la bienvenida a contribuciones a nuestra [documentación](https://github.com/cline/cline/tree/main/docs)! Ya sea corrigiendo errores tipográficos, mejorando guías existentes, o creando nuevo contenido educativo - nos encantaría construir un repositorio de recursos impulsado por la comunidad que ayude a todos a sacar el máximo provecho de Cline. Puedes comenzar explorando `/docs` y buscando áreas que necesiten mejoras.

## Configuración de Desarrollo

### Instrucciones de Desarrollo Local

1. Clona el repositorio _(Requiere [git-lfs](https://git-lfs.com/))_:
    ```bash
    git clone https://github.com/cline/cline.git
    ```
2. Abre el proyecto en VSCode:
    ```bash
    code cline
    ```
3. Instala las dependencias necesarias para la extensión y webview-gui:
    ```bash
    npm run install:all
    ```
4. Ejecuta presionando `F5` (o `Run`->`Start Debugging`) para abrir una nueva ventana de VSCode con la extensión cargada. (Es posible que necesites instalar la [extensión de esbuild problem matchers](https://marketplace.visualstudio.com/items?itemName=connor4312.esbuild-problem-matchers) si tienes problemas construyendo el proyecto.)

### Creando un Pull Request

1. Antes de crear un PR, genera una entrada de changeset:
    ```bash
    npm run changeset
    ```
   Esto te pedirá:
   - Tipo de cambio (major, minor, patch)
     - `major` → cambios que rompen compatibilidad (1.0.0 → 2.0.0)
     - `minor` → nuevas funcionalidades (1.0.0 → 1.1.0)
     - `patch` → correcciones de errores (1.0.0 → 1.0.1)
   - Descripción de tus cambios

2. Haz commit de tus cambios y el archivo `.changeset` generado

3. Sube tu rama y crea un PR en GitHub. Nuestro CI:
   - Ejecutará pruebas y verificaciones
   - Changesetbot creará un comentario mostrando el impacto de la versión
   - Cuando se fusione a main, changesetbot creará un PR de Version Packages
   - Cuando el PR de Version Packages se fusione, se publicará una nueva versión

4. Pruebas
    - Ejecuta `npm run test` para ejecutar pruebas localmente
    - Antes de enviar el PR, ejecuta `npm run format:fix` para formatear tu código

### Extensión

1. **Extensiones de VS Code**

    - Al abrir el proyecto, VS Code te pedirá que instales las extensiones recomendadas
    - Estas extensiones son requeridas para el desarrollo - por favor acepta todas las solicitudes de instalación
    - Si descartaste las solicitudes, puedes instalarlas manualmente desde el panel de Extensiones

2. **Desarrollo Local**
    - Ejecuta `npm run install:all` para instalar dependencias
    - Ejecuta `npm run test` para ejecutar pruebas localmente
    - Run → Start Debugging o `>Debug: Select and Start Debugging` y espera a que se abra una nueva instancia de VS Code
    - Antes de enviar el PR, ejecuta `npm run format:fix` para formatear tu código

3. **Configuración Específica para Linux**
    Las pruebas de extensión de VS Code en Linux requieren las siguientes librerías del sistema:

    - `dbus`
    - `libasound2`
    - `libatk-bridge2.0-0`
    - `libatk1.0-0`
    - `libdrm2`
    - `libgbm1`
    - `libgtk-3-0`
    - `libnss3`
    - `libx11-xcb1`
    - `libxcomposite1`
    - `libxdamage1`
    - `libxfixes3`
    - `libxkbfile1`
    - `libxrandr2`
    - `xvfb`

    Estas librerías proporcionan componentes GUI necesarios y servicios del sistema para el entorno de pruebas.

    Por ejemplo, en distribuciones basadas en Debian (ej., Ubuntu), puedes instalar estas librerías usando apt:
    ```bash
    sudo apt update
    sudo apt install -y \
      dbus \
      libasound2 \
      libatk-bridge2.0-0 \
      libatk1.0-0 \
      libdrm2 \
      libgbm1 \
      libgtk-3-0 \
      libnss3 \
      libx11-xcb1 \
      libxcomposite1 \
      libxdamage1 \
      libxfixes3 \
      libxkbfile1 \
      libxrandr2 \
      xvfb
    ```

## Escribiendo y Enviando Código

Cualquiera puede contribuir código a Cline, pero pedimos que sigas estas pautas para asegurar que tus contribuciones puedan ser integradas sin problemas:

1. **Mantén los Pull Requests Enfocados**

    - Limita los PRs a una sola funcionalidad o corrección de error
    - Divide cambios grandes en PRs más pequeños y relacionados
    - Separa los cambios en commits lógicos que puedan ser revisados independientemente

2. **Calidad del Código**

    - Ejecuta `npm run lint` para verificar el estilo del código
    - Ejecuta `npm run format` para formatear automáticamente el código
    - Todos los PRs deben pasar las verificaciones de CI que incluyen tanto linting como formateo
    - Aborda cualquier advertencia o error del linter antes de enviar
    - Sigue las mejores prácticas de TypeScript y mantén la seguridad de tipos

3. **Pruebas**

    - Agrega pruebas para nuevas funcionalidades
    - Ejecuta `npm test` para asegurar que todas las pruebas pasen
    - Actualiza las pruebas existentes si tus cambios las afectan
    - Incluye tanto pruebas unitarias como de integración donde sea apropiado

    **Pruebas de Extremo a Extremo (E2E)**
    
    Cline incluye pruebas E2E comprensivas usando Playwright que simulan interacciones reales del usuario con la extensión en VS Code:
    
    - **Ejecutando pruebas E2E:**
      ```bash
      npm run test:e2e        # Construir y ejecutar todas las pruebas E2E
      npm run e2e             # Ejecutar pruebas sin reconstruir
      npm run test:e2e -- --debug  # Ejecutar con depurador interactivo
      ```
    
    - **Escribiendo pruebas E2E:**
      - Las pruebas están ubicadas en `src/test/e2e/`
      - Usa el fixture `e2e` para pruebas de workspace de raíz única
      - Usa el fixture `e2eMultiRoot` para pruebas de workspace multi-raíz
      - Sigue los patrones existentes en `auth.test.ts`, `chat.test.ts`, `diff.test.ts`, y `editor.test.ts`
      - Ve `src/test/e2e/README.md` para documentación detallada
    
    - **Características del modo debug:**
      - Inspector interactivo de Playwright para depuración paso a paso
      - Graba nuevas interacciones y genera código de prueba automáticamente
      - Instancia visual de VS Code para pruebas manuales
      - Inspección de elementos y validación de selectores
    
    - **Entorno de pruebas:**
      - Configuración automatizada de VS Code con extensión Cline cargada
      - Servidor API simulado para pruebas de backend
      - Workspaces temporales con fixtures de prueba
      - Grabación de video para pruebas fallidas

4. **Gestión de Versiones con Changesets**

    - Crea un changeset para cualquier cambio visible al usuario usando `npm run changeset`
    - Elige el incremento de versión apropiado:
        - `major` para cambios que rompen compatibilidad (1.0.0 → 2.0.0)
        - `minor` para nuevas funcionalidades (1.0.0 → 1.1.0)
        - `patch` para correcciones de errores (1.0.0 → 1.0.1)
    - Escribe mensajes de changeset claros y descriptivos que expliquen el impacto
    - Los cambios solo de documentación no requieren changesets

5. **Pautas de Commit**

    - Escribe mensajes de commit claros y descriptivos
    - Usa formato de commit convencional (ej., "feat:", "fix:", "docs:")
    - Referencia issues relevantes en commits usando #numero-issue

6. **Antes de Enviar**

    - Rebase tu rama en el main más reciente
    - Asegúrate de que tu rama se construya exitosamente
    - Verifica que todas las pruebas estén pasando
    - Revisa tus cambios para cualquier código de depuración o console logs

7. **Descripción del Pull Request**
    - Describe claramente qué hacen tus cambios
    - Incluye pasos para probar los cambios
    - Lista cualquier cambio que rompa compatibilidad
    - Agrega capturas de pantalla para cambios de UI

## Acuerdo de Contribución

Al enviar un pull request, aceptas que tus contribuciones serán licenciadas bajo la misma licencia que el proyecto ([Apache 2.0](LICENSE)).

Recuerda: Contribuir a Cline no se trata solo de escribir código - se trata de ser parte de una comunidad que está dando forma al futuro del desarrollo asistido por IA. ¡Construyamos algo increíble juntos! 🚀
