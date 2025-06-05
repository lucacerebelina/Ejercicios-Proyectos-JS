const leer = require("prompt-sync")();

// CONSTANTES

const DESCUENTO = 0.75;
const DIA_1_DESCUENTO = "Jueves";
const DIA_2_DESCUENTO = "Viernes";

/**
 * Funcion principal del programa
 */
function main() {
    let diaCompra = "def dia compra";
    let totalCompra = -1;

    console.log("Ingresa el dia de la compra\n\tL-M-Mi-J-V");

    diaCompra = leer().toUpperCase();

    diaCompra = leer();
    console.log("Ingresa total de compra");
    totalCompra = Number(leer());

    if (diaCompra === DIA_1_DESCUENTO || diaCompra === DIA_2_DESCUENTO) {
        console.log("Descuento aplicado\n\tValor final de compra: " + (totalCompra * DESCUENTO));
    } else {
        console.log("Total a pagar es;", totalCompra);
    }



    //codigo
}

main();
