## Brief overview
Reglas específicas para el flujo de trabajo con Git en este proyecto. Estas reglas establecen que cada tarea debe realizarse en su propia rama y se debe consultar sobre el merge al finalizar.

## Flujo de trabajo con ramas
- Crear una nueva rama para cada tarea nueva que se solicite
- Usar nombres descriptivos para las ramas con formato kebab-case (palabras separadas por guiones)
- Ejemplos de nombres de ramas: `feature-nueva-funcionalidad`, `fix-correccion-bug`, `task-nombre-descriptivo`

## Gestión de tareas
- Al inicio de cada nueva tarea, crear automáticamente una rama específica para esa tarea
- Trabajar exclusivamente en la rama de la tarea hasta completarla
- No cambiar a otras ramas durante el desarrollo de una tarea específica

## Finalización de tareas
- Al completar una tarea, preguntar al usuario si desea hacer merge de la rama a main
- Opciones a ofrecer:
  - Hacer merge inmediatamente
  - Mantener la rama separada para revisión posterior
  - Eliminar la rama si no se necesita más
- No hacer merge automáticamente sin confirmación del usuario

## Comunicación sobre Git
- Informar claramente cuando se crea una nueva rama
- Confirmar el nombre de la rama antes de crearla si hay ambigüedad
- Notificar sobre el estado actual de la rama al finalizar tareas
- Preguntar explícitamente sobre las acciones de Git al completar el trabajo

## Manejo de conflictos
- Si hay conflictos potenciales, informar al usuario antes de proceder
- Sugerir estrategias de resolución cuando sea necesario
- Mantener el historial de commits limpio y descriptivo
