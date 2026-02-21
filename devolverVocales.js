let cadena = "stringe";

function devolverVocales(){
    let contador = 0;
    for(let i = 0; i<cadena.length; i++){
        if(cadena[i] == "a"){
            contador++;
        }
        else if(cadena[i] == "e"){
            contador++;
        }
        else if(cadena[i] == "i"){
            contador++;
        }
        else if(cadena[i] == "o"){
            contador++;
        }
        else if(cadena[i] == "u"){
            contador++;
        }
    }
    return contador;
}

alert(devolverVocales(cadena));