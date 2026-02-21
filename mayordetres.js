
let num1 = 4;
let num2 = 2;
let num3 = 3;

function devolverMayor(){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else if(num3>num1 && num3>num2){
        return num3;
    }
    else{
        return console.log("Números iguales");
    }
}

console.log("El numero mayor es "+devolverMayor(num1,num2, num3));