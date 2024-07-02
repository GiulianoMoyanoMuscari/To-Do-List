## To-Do List

Esta es una aplicación de lista de tareas desarrollada con HTML, CSS y JavaScript.

### Funcionalidades

- **Agregar tareas:** Los usuarios pueden agregar nuevas tareas a la lista.
- **Eliminar tareas:** Los usuarios pueden eliminar tareas individuales de la lista.
- **Eliminar todas las tareas:** Los usuarios pueden eliminar todas las tareas de la lista de una vez.
- **Persistencia:** Las tareas se almacenan en `localStorage`, por lo que permanecen al recargar la página.

## Conceptos de JavaScript Implementados

### Manipulación del DOM
- `document.querySelector()`: Selecciona elementos del DOM para manipularlos.
- `innerHTML`: Se utiliza para renderizar la lista de tareas.
- `addEventListener()`: Manejar eventos.

### Local Storage
- `localStorage.setItem()` y `localStorage.getItem()`: Guarda y recupera datos del `localStorage` del navegador.
- `JSON.stringify()` y `JSON.parse()`: Convierte objetos a y desde cadenas JSON para almacenarlos en `localStorage`.


### Métodos de Array
- `map()`: Crea una nueva lista de tareas en HTML.
- `some()`: Verifica si una tarea ya existe en la lista.
- `filter()`: Filtra las tareas para eliminar una tarea específica o todas las tareas.

### Validación de Formularios
- Verifica si la entrada del usuario no está vacía y si la tarea ya existe antes de agregarla.

### Eventos
- `submit`: Gestiona el evento de envío del formulario para agregar una nueva tarea.
- `click`: Gestiona los eventos de clic para eliminar tareas individuales o todas las tareas.
- `DOMContentLoaded`: Asegura que la lista de tareas se renderice cuando el contenido del DOM se haya cargado completamente.
