
let valor = 2;
let array = [1,2,3]

function devolverValor(){
    let array2 = [];
    for(let i = 0; i<array.length; i++){
        if(array[i]!==valor){
            array2 = array2.concat(array[i]);
        }
    }
    return array2;
}

function eliminarValor(){
    for(let i = 0; i<array.length; i++){
        if(array[i]==valor){
            array.splice(i, 1);
        }
    }
    return array;
}

console.log(devolverValor());

console.log(eliminarValor());
