const leer = require("prompt-sync")();

// Función principal
function main() {
    // Entrada de datos
    let planta = "L";
    
    console.log("*** Revisión de planta adquirida ***");
    console.log("¿Qué planta presentás?");
    planta = leer();

    // Mostrar planta
    console.log("\nPlanta presentada:", planta);

    // Verificar la planta
    if (planta === "Mandragora") {
        console.log("Buen ejemplar, toma asiento para iniciar el examen!");
    } else if (planta === "Valeriana") {
        console.log("Buen ejemplar, toma asiento para iniciar el examen!");
    } else if (planta === "Bubotuber") {
        console.log("No es posible iniciar el examen con esta planta peligrosa!");
    } else if (planta === "Whomping Willow") {
        console.log("No es posible iniciar el examen con esta planta peligrosa!");
    } else {
        console.log("Planta no aceptada para el examen.");
    }
}

main();
