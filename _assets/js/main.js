/*

Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
basta che si vedano) gli elementi della lista individualmente con un ciclo while.

*/

// Lista della spesa
let listaSpesa = [];

let spesa = 0;
let shoppingList = document.querySelector(".shoppingList");
let li = '';

while (spesa < listaSpesa.length) {
    spesa++
    li += `
    <li class="listItem">
        <h1 class="nameObject">${listaSpesa[spesa]}</h1>
        <div class="container_right_icon">
            <button class="btnFunction" onclick="removeItem()">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
    `;
}

function generateListItem(item) {
  return `
    <li class="listItem">
        <h1 class="nameObject">${item}</h1>
        <div class="container_right_icon">
            <button class="btnFunction" onclick="removeItem()">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
  `;
}

function renderShoppingList() {
  let li = '';
  for (let i = 0; i < listaSpesa.length; i++) {
    li += generateListItem(listaSpesa[i]);
  }
  shoppingList.innerHTML = li;
}

renderShoppingList();

let input = document.querySelector("#inputList");
let addButton = document.querySelector("#btnSub");

addButton.addEventListener("click", function() {
  let newItem = input.value;
  if (newItem.trim() !== '') {
    listaSpesa.push(newItem);
    input.value = "";
    renderShoppingList();
  }
});

function removeItem(index) {
    listaSpesa.splice(index, 1);
    updateList();
}

function updateList() {
    let li = "";
    for (let i = 0; i < listaSpesa.length; i++) {
        li += `
        <li class="listItem">
          <h1 class="nameObject">${listaSpesa[i]}</h1>
          <div class="container_right_icon">
            <button class="btnFunction" onclick="removeItem(${i})">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </li>
      `;
    }
    shoppingList.innerHTML = li;
}

updateList();