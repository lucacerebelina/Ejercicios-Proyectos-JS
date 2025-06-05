const leer = require("prompt-sync")();

/**
 * Ejercicio 1
 * Compra de Varitas Mágicas
 * 
 * - Solicita al cliente su edad y determina si es lo suficientemente mayor como para comprar una varita mágica.
 * - Edad mínima para comprar una varita: 11 años.
 * - Si tiene 11 o más, puede comprar. Si tiene menos, no puede.
 * 
 * Ejemplo:
 * Edad: 14 -> Puede comprar
 * Edad: 9 -> No puede comprar
 */

// CONSTANTE
const EDAD_MINIMA = 16;

// Función principal
function main() {
    // Variables
    let edad = 0;

    // Entrada de datos
    console.log("*** Verificación de compra ***");
    console.log("¿Qué edad tenés?");
    edad = Number(leer());

    // Mostrar edad
    console.log("\nEdad:", edad);

    // ETRUCTURA
    if (edad >= EDAD_MINIMA) {
        console.log("¡Busquemos una varita! ¡Alguna te puede estar esperando desde hace tiempo!");
    } else {
        console.log("¡Volvé en unos años!");
        console.log("Solo a partir de los "+EDAD_MINIMA+" años se puede comprar en esta tienda.");
    }
}

// Ejecutar programa
main();
