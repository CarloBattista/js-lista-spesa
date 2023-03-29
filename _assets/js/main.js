/*

Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
basta che si vedano) gli elementi della lista individualmente con un ciclo while.

*/

// Lista della spesa
let listaSpesa = [
    "Pane",
    "Patate",
    "Olio",
    "Pasta",
    "Burro",
];

let spesa = 0
let shoppingList = document.querySelector(".shoppingList");
let li = '';

while (spesa < listaSpesa.length) {
    spesa++
    li += `
    <li class="listItem">
        <h1 class="nameObject">Pane</h1>
        <div class="container_right_icon">
            <button class="btnFunction" onclick="removeItem()">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
    `;
}

shoppingList.innerHTML = li;