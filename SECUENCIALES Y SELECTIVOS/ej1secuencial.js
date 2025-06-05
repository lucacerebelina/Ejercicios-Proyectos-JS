const leer = require("prompt-sync")();

// CONSTANTES

/**
 * Funcion principal del programa
 */
function main() {
    //codigo

    let SubeIdentificador = 0
    let SaldoIinicial = 0
    let MedioPago = "P"
    let SaldoRecarga = 0
    let SaldoActual = 0
    console.log("Ingresa tu nombre o numero de tarjeta");
    SubeIdentificador = leer();
    console.log("Ingresa saldo inicial");
    SaldoIinicial = Number (leer());
    console.log("Ingresa medio de pago" + " Mercado pago o efectivo ");
    MedioPago = leer();
    console.log("Monto a cargar");
    SaldoRecarga = Number(leer());

    SaldoActual = SaldoIinicial + SaldoRecarga

    console.log("opcion de pago usado ", MedioPago);
    

    console.log("Saldo de tarjeta actual: $", SaldoActual);
    console.log ("Tarjeta de:", SubeIdentificador, ", con saldo inicial: $", SaldoIinicial, "monto a cargar: $", SaldoRecarga);
}
main();





