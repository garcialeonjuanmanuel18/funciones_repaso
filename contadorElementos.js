
let array = [1,2,3,4,4,5];
let contador = 0;

function contarElementos(){

    for(let i = 0; i<array.length; i++){
        contador++;
    }

    return contador;
}

console.log("El numero de elementos del array es "+contarElementos(array));