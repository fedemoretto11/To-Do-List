const tareas = document.querySelector(".toDo");
const porHacer = document.querySelector(".tareas");
const icono = document.querySelector(".icono");
const ul = document.querySelector("ul");
const li = document.createElement("li");


icono.addEventListener("click", (e) => {
    li.appendChild(document.createTextNode(tareas.value));
    ul.appendChild(li);
    tareas = " ";
})