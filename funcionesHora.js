
let hora = 11;

function CalcularHora(){
    if(hora<12){
       return console.log("Buenos dias");
    }
    else if(hora>=12){
        return console.log("Buenas tardes");
    }
    else{
        return console.log("hora inválida, acuestate");
    }
}

console.log(CalcularHora(hora));