let contrasena = document.getElementById("contrasena");
let boton = document.getElementById("boton");

let contrasenaFija = "alejandria";
let clave = prompt("dime la contraseña");

function comprobarContrasena(){
    if(clave!==contrasenaFija){
        boton.disabled = true;
    }
}

comprobarContrasena();