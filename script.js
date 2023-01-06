const tareas = document.querySelector(".toDo");
const porHacer = document.querySelector(".tareas");
const icono = document.querySelector(".icono");
const ul = document.querySelector("ul");


icono.addEventListener("click", (e) => {
    
    porHacer.innerHTML.push(tareas.innerHTML);
})