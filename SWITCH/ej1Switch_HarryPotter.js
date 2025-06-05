const leer = require("prompt-sync")();

const POCION_1 = "Felix Felicis";
const POCION_2 = "Polvo de Flu";
const POCION_3 = "Pocion Multijugos";
/* 
Ejercicio 1 - Clasificación de Pociones

- Solicita el nombre de una poción y muestra su nivel de dificultad.
- Si no se reconoce la poción, se informa que no hay datos.
*/

function main() {
    // ENTRADA
    let pocion = "L";
   
    console.log("*** Clasificación de Pociones ***");
    console.log("Ingresá el nombre de una poción:");

    pocion = leer();

    // SALIDA
    console.log("\n*** Info de pocion " + pocion + " ***");

    switch (pocion) {
        case POCION_1:
            console.log("es extremadamente compleja y peligrosa.");
            break;
        case POCION_2:
            console.log("es compleja pero útil en la red de transportación.");
            break;
        case POCION_3:
            console.log("es complicada pero muy útil para transformaciones temporales.");
            break;
        default:
            console.log("No tenemos información sobre esa poción en nuestros registros.");
            break;
    }

    console.log("\n*** Fin del informe ***");
}

main();
