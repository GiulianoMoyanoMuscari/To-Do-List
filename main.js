// Defino las variables de los elementos
const taskInput = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const tasksContainer = document.querySelector('.tasks-list');
const deleteAllBtn = document.querySelector('.deleteAll-btn');
const deleteBtn = document.querySelector('.delete-btn')

// Definir la lista de tareas
let taskList = JSON.parse(localStorage.getItem('Tasks')) || [];

// Funcion LocalStorage
const saveLocalStorage = () => {
  localStorage.setItem('Tasks', JSON.stringify(taskList))
}

// Crear la funcion para crear el html y para renderizar
const createTask = (task) => {
  return `
    <li>
      ${task.name}
      <img class="delete-btn" src="./img/delete.svg" alt="boton de borrar" data-id="${task.id}">
    </li>`
}

const renderTaskList = () => {
  tasksContainer.innerHTML = taskList.map((task) => createTask(task));
}


// Funcion toggle boton
const toggleDeleteAllBtn = () => {
  if (!taskList.length) { // Si taskList está vacío, taskList.length es 0. 0 es un valor falsy. !0 es true. Por lo tanto, el bloque de código dentro del if se ejecutará.
    deleteAllBtn.classList.add('hidden');
    return;
  }

  deleteAllBtn.classList.remove('hidden');
}
// <------------------------- Add Task -------------------------------------->
// Funcion de validacion
const isValidTask = (taskName) => {
  let isValid = true

  if (taskName === '') {
    alert('Por favor, ingrese una tarea')
    isValid = false
  } else if (taskList.some(task => task.name.toLowerCase() === taskName.toLowerCase())) {
    alert('Esta tarea ya existe');
    isValid = false
  } 

  return isValid;
}

const addTask = (e) => {
  e.preventDefault();

  const taskName = taskInput.value.trim(); // capturamos el valor del input cuando se envia el form

  if (isValidTask(taskName)) {
    taskList = [...taskList, {name:taskName, id:Date.now()}] // spread operator : copiamos lo que tenga el array y agregamos al array un objeto con el nombre y id de la tarea, formando asi un array de objetos

    renderTaskList()
    toggleDeleteAllBtn()

    addForm.reset() // limpiamos el input una vez agregado la tarea

    saveLocalStorage();
  }
}
// <------------------------- Fin Add Task -------------------------------------->

// <------------------------- Remove Task -------------------------------------->
const removeTask = (e) => {
  // e.target me devuelve el elemento sobre el que hago click dentro del taskContainer
  if (!e.target.classList.contains('delete-btn')) return //para que solo ejecute las acciones cuando hago click en el icono

  const filterId = Number( e.target.dataset.id ) // obtengo el ID y lo transformo a numero

  taskList = taskList.filter((task) => task.id !== filterId) //filter devuleve un array con todas las coincidencias

  renderTaskList()
  toggleDeleteAllBtn()

  saveLocalStorage()
}
// <------------------------- Fin Remove Task -------------------------------------->

// <------------------------- Remove All -------------------------------------->
const removeAll = () => {
  taskList = []
  renderTaskList();
  toggleDeleteAllBtn();

  saveLocalStorage()
}
// <------------------------- Fin Remove All -------------------------------------->

// Funcion inicializadora
const init = () =>{
  document.addEventListener('DOMContentLoaded', renderTaskList)
  addForm.addEventListener('submit', addTask);
  tasksContainer.addEventListener('click', removeTask)
  deleteAllBtn.addEventListener('click', removeAll)
  document.addEventListener('DOMContentLoaded', toggleDeleteAllBtn)
};

init();

