const leer = require("prompt-sync")();

/* 
Ejercicio 2 - Elección de Varita Mágica

- Solicita el ID del núcleo y muestra información según el tipo de nucleo.
*/

function main() {
    //VARIABLE
    let nucleo = "L";
    // ENTRADA
    console.log("*** Elección de Varita Mágica ***");
    console.log("Ingresá el número del núcleo (0: Fénix, 1: Unicornio, 2: Dragón):");
    nucleo = Number(leer());

    // SALIDA
    switch (nucleo) {
        case 0:
            console.log("\n*** Detalles de nucleo [0] Fenix ***");
            console.log("¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.");
            break;
        case 1:
            console.log("\n*** Detalles de nucleo [1] Unicornio ***");
            console.log("Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.");
            break;
        case 2:
            console.log("\n*** Detalles de nucleo [2] Dragón ***");
            console.log("¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.");
            break;
        default:
            console.log("\nNo reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.");
            break;
    }

    console.log("\n*** Fin del mensaje ***");
}

main();
