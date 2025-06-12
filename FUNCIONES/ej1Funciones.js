/*- Crear un programa que permita simular la busqueda de un impostor
    - Personajes disponibles:
        1. Harry Potter
        1. Hermione Granger
        1. Ron Weasley
        1. Albus Dumbledore
        1. Severus Snape
        1. Lord Voldemort
        1. Draco Malfoy
        1. Sirius Black
        1. Rubeus Hagrid
        1. Luna Lovegood
    - Este juego genera el impostor de forma aleatoria
        - En caso de encontrar al impostor informara un mensaje positivo
        - Caso contrario mencionara el nombre del personaje con quien hay que tener cuidado
    - Ejemplo de posible resultado:
        -   ```
            Selecciona un número de personaje para encontrar al impostor:
                1 - Harry Potter
                2 - Hermione Granger
                3 - Ron Weasley
                4 - Albus Dumbledore
                5 - Severus Snape
                6 - Lord Voldemort
                7 - Draco Malfoy
                8 - Sirius Black
                9 - Rubeus Hagrid
                10 - Luna Lovegood
                5

            ¡Adivinaste! El impostor es: Severus Snape

            ```
    - Ejemplo de posible resultado:
        -   ```
            Selecciona un número de personaje para encontrar al impostor:
                1 - Harry Potter
                2 - Hermione Granger
                3 - Ron Weasley
                4 - Albus Dumbledore
                5 - Severus Snape
                6 - Lord Voldemort
                7 - Draco Malfoy
                8 - Sirius Black
                9 - Rubeus Hagrid
                10 - Luna Lovegood
                2

            ¡Oh no! No has adivinado el impostor. Algo misterioso está ocurriendo...
            Cuidado con Severus Snape!
            ```
            */
const leer = require("prompt-sync")();

const personajes = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbledore",
    "Severus Snape",
    "Lord Voldemort",
    "Draco Malfoy",
    "Sirius Black",
    "Rubeus Hagrid",
    "Luna Lovegood",
];

function main() {
    let posImpostor = -1;
    let opcIngresada = -1;

    posImpostor = azar(personajes.length);
    mostrarInformacion();
    mostrarPersonajes();
    opcIngresada = leerNumero() - 1;
    evaluarFinal(opcIngresada, posImpostor);
}
main();

/**
 * Evalua el final del juego dependiendo del numero ingresado por el usuario
 * @param {Number} opcIngresada para adivinar al impostor
 * @param {Number} posImpostor generado aleatoriamente
 */
function evaluarFinal(opcIngresada, posImpostor) {
    if (opcIngresada === posImpostor) {
        console.log("¡Adivinaste! El impostor es: " + personajes[posImpostor]);
    } else {
        console.log("¡Oh no! No has adivinado el impostor. Algo misterioso está ocurriendo...");
        console.log("Cuidado con " + personajes[posImpostor] + "!");
    }
}

/**
 * Recibe un numero desde consola
 * @returns un numero ingresado por consola
 */
function leerNumero() {
    return Number(leer());
}

/**
 * Muestra informacion al usuario
 */
function mostrarInformacion() {
    console.log("Selecciona un número de personaje para encontrar al impostor:");
}

/**
 * Muestra los personajes disponibles
 */
function mostrarPersonajes() {
    for (let i = 0; i < personajes.length; i++) {
        console.log("\t" + (i + 1) + " - " + personajes[i]);
    }
}

/**
 * Genera un numero aleatorio entre 0 y el maximo (no inclusive)
 * @param {Number} max el rango maximo, del numero aleatorio
 * @returns un numero aleatorio
 */
function azar(max) {
    return Math.floor(Math.random() * (max));
}