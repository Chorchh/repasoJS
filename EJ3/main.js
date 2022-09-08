// 3. Hacer un input y un boton de enviar. Crear una funcion para pintar en el html lo que escribamos en el input cuando aprentemos el boton de enviar. Y que los datos persistan en el local storage

// EJ 3
const form = document.getElementById("toDo");
const input = document.getElementById("task");
const lista = document.querySelector(".lista");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveLocalStorage = taskList => {
  localStorage.setItem("tasks", JSON.stringify(taskList))
};

const creatTask = task => `<li>${task.name}</li>`;


const renderTask = todo => {
  lista.innerHTML = todo.map(task => creatTask(task)).join("")
}


const addTask = e => {
  e.preventDefault();

  const taskName = input.value.trim();

  if(!taskName.length) {
    alert("Ingresa una tarea");
    return;
  } else if (tasks.some(task => task.name === taskName)) {
    alert("Ya existe esa tarea");
    return;
  } else {
    tasks = [... tasks, {name: taskName}];
    input.value = "";
  }


  renderTask(tasks);
  saveLocalStorage(tasks);
}

const init = () => {
  renderTask(tasks);
  form.addEventListener("submit", addTask);
}


init ();