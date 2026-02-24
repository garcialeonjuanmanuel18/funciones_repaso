let edad = prompt("dime tu edad");
let edadNum = parseInt(edad);

let parrafo = document.getElementById("parrafo");

function chequeoEdad(){
    if(edadNum < 18){
        parrafo.innerText = "Acceso denegado";
        parrafo.style.color = "red";
    }

    else if(edadNum >= 18 && edadNum < 120){
        parrafo.innerText = "Acceso permitido";
        parrafo.style.color = "green";
    }

    else{
        alert("edad iválida");
    }
}

chequeoEdad();