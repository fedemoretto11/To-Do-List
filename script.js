const tareas = document.querySelector(".toDo");
const porHacer = document.querySelector(".tareas");
const icono = document.querySelector(".icono");
const ul = document.querySelector("ul");

let tareasPorHacer = [];



// Ambos Event Listener cumplen la misma funcion (uno clickea y el otro enter)
icono.addEventListener("click", (e) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(tareas.value));
    ul.appendChild(li);
    tareasPorHacer.push(tareas.value);
    tareas.value = " ";   
})

document.querySelector("input").addEventListener("keypress", (e) => {
    if(e.key === 'Enter') {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(tareas.value));
    ul.appendChild(li);
    tareasPorHacer.push(tareas.value);
    tareas.value = " ";
} 
})