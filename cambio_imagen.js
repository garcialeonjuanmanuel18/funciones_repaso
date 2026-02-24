let imagen = document.getElementById("imagen");

let urlFoto = prompt("dime la URL de la foto");

function cambiarFoto(){
    imagen.src = urlFoto;
}

cambiarFoto();