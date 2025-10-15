## Brief overview
Reglas específicas para el manejo de versiones del plugin durante el desarrollo. Estas reglas establecen que por cada tarea completada se debe generar una nueva versión del plugin VSIX con un número de versión incrementado.

## Versionado automático
- Incrementar automáticamente el número de versión en package.json al completar cada tarea
- Usar versionado semántico (MAJOR.MINOR.PATCH)
- Para cambios menores o features: incrementar MINOR (ej: 3.32.7 → 3.33.0)
- Para fixes o correcciones: incrementar PATCH (ej: 3.32.7 → 3.32.8)
- Para cambios mayores o breaking changes: incrementar MAJOR (ej: 3.32.7 → 4.0.0)

## Generación de VSIX
- Generar automáticamente un nuevo archivo VSIX al finalizar cada tarea
- Usar el comando `npm version patch/minor/major` para actualizar la versión
- Seguir con `npm run package` y `npx vsce package` para generar el VSIX
- Nombrar el archivo VSIX con el nuevo número de versión

## Workflow de finalización de tareas
- Al completar una tarea, preguntar qué tipo de cambio fue (patch, minor, major)
- Actualizar la versión en package.json según el tipo de cambio
- Compilar y generar el nuevo VSIX
- Hacer commit de los cambios incluyendo la nueva versión
- Informar al usuario sobre la nueva versión generada

## Comunicación sobre versiones
- Informar claramente cuando se incrementa la versión
- Especificar el tipo de cambio realizado (patch/minor/major)
- Confirmar la generación exitosa del nuevo VSIX
- Mantener un registro claro de las versiones generadas por tarea
