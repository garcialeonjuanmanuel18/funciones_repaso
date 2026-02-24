let producto1 = prompt("dime un producto");
let producto2 = prompt("dime un producto");
let producto3 = prompt("dime un producto");

let array = [producto1, producto2, producto3];

function listaCompra(){
    let lista = "<ul>"
    for(let i = 0; i < array.length; i++){
        lista += "<li>";
        lista += array[i];
        lista += "</li>"
    }
    lista += "</ul>";
    document.body.innerHTML += lista; 
}

listaCompra();


