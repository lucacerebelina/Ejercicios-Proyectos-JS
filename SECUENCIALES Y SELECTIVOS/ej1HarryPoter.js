const leer = require ("prompt-sync")();

// CONSTANTES

/**
 * Funcion principal del programa
 */
function main () {
    //codigo

let cantEscarabajos = 0;
let cantMandragora = 0;
let cantIngredientes = 0;
console.log("Ingresa la cantidad de escarabajos");
cantEscarabajos = Number (leer());
console.log("Ingresa la cantidad mandragora");
cantMandragora = Number (leer());

cantIngredientes = cantEscarabajos + cantMandragora;

console.log("Cantidad de escarabajos: ", cantEscarabajos, "Cantidad de Mangragora: ", cantMandragora, "Ingredientes totales: ", cantIngredientes);


}
main()
