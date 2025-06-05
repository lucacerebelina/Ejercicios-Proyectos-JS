
// CONSTANTES
const leer = require("prompt-sync")();
const VIDA_MAX_ESTUDIANTE = 350;
const VIDA_MAX_DEMENTOR = 1000;
const DAÑO_DE_ESTUDIANTE = 267;
const DAÑO_DE_DEMENTOR = 75;
const TURNOS_TOTALES = 5;
const HECHIZO_CORRECTO = "patronus";

function main() {

    //VARIABLES 
    let hechizo = "def";
    let vidaEstuadiante = VIDA_MAX_ESTUDIANTE;
    let vidaDementor = VIDA_MAX_DEMENTOR;

    //codigo
    console.log("*** Iniciar simulacion ***");

    
    console.log("Vida estuadiante: " + vidaEstuadiante);
    console.log("Vida dementor: " + vidaDementor);

    for (let turno = 0; turno < TURNOS_TOTALES; turno++) {
        console.log("Turnos restantes:", TURNOS_TOTALES - turno);

        console.log("Ingresa el hechizo");
        hechizo = leer();

        if (hechizo === HECHIZO_CORRECTO) {
            console.log("Hechizo correcto!");
            vidaDementor = vidaDementor - DAÑO_DE_ESTUDIANTE;
        } else {
            console.log("Hechizo incorrecto!");
            vidaEstuadiante = vidaEstuadiante - DAÑO_DE_DEMENTOR;
        }
        if (vidaDementor <= 0) {
            console.log("Fin del juego");
            turno = TURNOS_TOTALES;
        } else if (vidaEstuadiante <=0) {
            console.log("Fin del juego, murio el estudiante );");
        }
        console.log("Vida estuadiante: " + vidaEstuadiante);
        console.log("Vida dementor: " + vidaDementor);
    }
}

main();

