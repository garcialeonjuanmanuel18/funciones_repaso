let nombre = prompt("dime tu nombre");
let apellido = prompt("dime tu apellido");
let edad = prompt("dime tu edad");

let arrayDatos = [nombre, apellido, edad];



function crearTabla(){
let tabla = "<table border = '1'><tr>";
for(let i = 0; i<arrayDatos.length; i++){
    tabla+="<td>"+arrayDatos[i]+"</td>"
}
tabla+="</tr>"+"</table>"; 
document.body.innerHTML += tabla;
}

crearTabla();