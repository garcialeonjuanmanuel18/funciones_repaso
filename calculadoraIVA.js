let precio = prompt("dime el precio");
let precioNum = parseInt(precio);

let span = document.getElementById("span");
let spanIVA = document.getElementById("spanIVA");

function precioOriginal(){
    span.innerText = precioNum + ", ";
 
}


function precioIVA(){
spanIVA.innerText = precioNum+(precioNum*0.21);
}

precioOriginal();
precioIVA();