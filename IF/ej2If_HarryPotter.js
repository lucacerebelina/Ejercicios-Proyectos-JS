const leer = require("prompt-sync")();

/**
 * Funcion principal del programa
 */
function main() {

    //VARIABLES
    let puntuacion = 0

    //INFORMACION
    console.log("Ingresa tu puntuacion");
    puntuacion = Number(leer())

    //ESTRUCTURA
    if (puntuacion >= 90) {
        console.log("Bienvenido a Gryffindor");
    } else if (puntuacion >= 70) {
        console.log("Bienmvenido a Hufflepuff");
    } else if (puntuacion >= 50) {
        console.log("Bienvenido a Ravenclaw");
    }else {
        console.log("Bienvenido a Slytherin");
    }
    

}

main();
