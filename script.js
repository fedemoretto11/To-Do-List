const tareas = document.querySelector(".toDo");
const porHacer = document.querySelector(".tareas");
const icono = document.querySelector(".icono");
const ul = document.querySelector("ul");

let tareasPorHacer = [];

icono.addEventListener("click", (e) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(tareas.value));
    ul.appendChild(li);
    tareasPorHacer.push(tareas.value);
    tareas.value = " ";
    
})