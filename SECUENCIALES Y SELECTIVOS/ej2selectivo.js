const leer = require("prompt-sync")();

const PALABRA_SECRETA = "manzana";

function main(){
    let palabraIngresada = "def palabra";

    console.log("Intenta adivinar la palabra secreta");
    palabraIngresada = leer ();

    if(palabraIngresada.toLowerCase == PALABRA_SECRETA){
        console.log("Adivinaste! Ganaste un viaje en la sube :D");
    } else {
        console.log("Intenta otro dia! :(");
        
    }

    
}