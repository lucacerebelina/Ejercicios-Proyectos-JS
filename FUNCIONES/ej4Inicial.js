/*- Crear una funcion que convierta pesos a dolar y devuelva el resultado correspondiente al final
- Documentacion:
    
    -   ```
        /**
        * Convierte pesos a dolar
        * @param {Number} pesosAConvertir a dolar
        * @returns valor en dolar
       
        function convertirADolar(pesosAConvertir) {
            
        }
        ```
        */
const leer = require("prompt-sync")();

const DOLAR_A_PESO = 1300;

function main() {
    /* let pesos = -1;
    let dolares = -1;
    pesos = pedirPesos();
    dolares = convertirADolar(pesos);
    mostrarInformeConversion(dolares); */
    mostrarInformeConversion(convertirADolar(pedirPesos()));
}
main();

/**
 * Muestra un informe de conversion en consola
 * @param {Number} dolares positivo a mostrar en el informe
 */
function mostrarInformeConversion(dolares) {
    console.log("Dolares: " + dolares);
}

/**
 * Solicita ingresar pesos en consola
 * @returns pesos ingresados en consola
 */
function pedirPesos() {
    console.log("Ingresa pesos a convertir");
    return Number(leer());
}

/**
 * Convierte pesos a dolar
 * @param {Number} pesosAConvertir positivos a dolar 
 * @returns valor de pesos en dolar
 */
function convertirADolar(pesosAConvertir) {
    return pesosAConvertir / DOLAR_A_PESO;
}