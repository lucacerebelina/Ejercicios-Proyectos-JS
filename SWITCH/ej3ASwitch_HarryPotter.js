const leer = require("prompt-sync")();

/* 
Ejercicio 3 - Lanzando hechizos

- El estudiante elige el nivel de complejidad.
- Luego ingresa un código de 4 dígitos.
- El programa muestra el hechizo correspondiente o un error si no es válido.
*/

function main() {
    //VARIABLES
   let nivel = "L";
   let codigo = "L";
    // ENTRADA
    console.log("*** Lanzamiento de Hechizos ***");
    console.log("Seleccioná el nivel del hechizo (1 o 2):");
    nivel = leer(); 

    // PROCESO Y SALIDA
    console.log("\n*** Resultado del hechizo ***");

    if (nivel === "1") {
        console.log("Ingresá el código de 4 dígitos del hechizo:");
        codigo = leer(); 
        if (codigo === "3245") {
            console.log("Wingardium Leviosa");
        } else if (codigo === "2312") {
            console.log("Expelliarmus");
        } else {
            console.log("Código incorrecto para el nivel 1.");
        }
    } else if (nivel === "2") {
        console.log("Ingresá el código de 4 dígitos del hechizo:");
        codigo = leer(); 
        if (codigo === "5231") {
            console.log("Expecto Patronum");
        } else if (codigo === "0124") {
            console.log("Avada Kedavra");
        } else {
            console.log("Código incorrecto para el nivel 2.");
        }
    } else {
        console.log("Nivel no válido. Debe ser 1 o 2.");
    }

    console.log("\n*** Fin del hechizo ***");
}
main();
