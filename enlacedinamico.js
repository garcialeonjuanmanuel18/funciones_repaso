let nombreWeb = prompt("dime el nombre de una web");
let enlaceWeb = prompt("dime la URL de una web");

let a = document.getElementById("a");

a.href = enlaceWeb;
a.innerText = nombreWeb;