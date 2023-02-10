const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("item")) || [];
const clear = document.getElementById("clear")



function agregarItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false,
    };
    
    items.push(item);
    agregarLista(items,itemsList);
    localStorage.setItem("item", JSON.stringify(items))
    this.reset();
}

function agregarLista(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate,i) => {
        return `
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}>
                <label for="item${i}">${plate.text}</label>
            </li>
        `
    }).join("");
}


function toggleDone(e) {
    if (!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done
    localStorage.setItem("item", JSON.stringify(items))
    agregarLista(items,itemsList);
    
    
}

function borrarTerminados() {
    items.map((item) => {
        if(item.done) {
        console.log(items.indexOf(item));
        let index = items.indexOf(item);
        items.splice(index,1)
        agregarLista(items,itemsList);
        localStorage.setItem("item", JSON.stringify(items))
        }
    })   
}





addItems.addEventListener("submit", agregarItem);
agregarLista(items,itemsList);
itemsList.addEventListener("click", toggleDone);
clear.addEventListener("click", borrarTerminados)