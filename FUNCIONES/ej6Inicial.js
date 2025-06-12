/*- Crear una funcion que devuelva un reintegro aplicado a una compra segun corresponda, este reintegro puede ser:
    -  del 25% y tiene como tope $10000 
    -  del 15% y tiene como tope $3000 
- Documentacion:
    
    -   ```
        /**
        * Calcula un reintegro
        * @param {Number} precio a aplicar el reintegro
        * @param {Numbere} porcentaje del reintegro
        * @param {Number} tope del reintegro
        * @returns El reintegro calculado sin superar el tope
        
        function calcularReintegro(precio, porcentaje, tope) {
            
        }
        ```
        */
const leer = require("prompt-sync")();

const PORCENTAJE_A = 0.25;
const PORCENTAJE_B = 0.15;
const TOPE_A = 10000;
const TOPE_B = 3000;

function main() {
    let precio = 100000;
    let reintegro = -1;

    reintegro = calcularReintegro(precio, PORCENTAJE_B, TOPE_B);

    console.log("Valor de compra: " + precio);
    console.log("El reintegro es de: " + reintegro);

}
main();

/**
* Calcula un reintegro
* @param {Number} precio a aplicar el reintegro
* @param {Number} porcentaje del reintegro
* @param {Number} tope del reintegro
* @returns El reintegro calculado sin superar el tope
*/
function calcularReintegro(precio, porcentaje, tope) {
    let reintegro = precio * porcentaje;
    if (reintegro > tope) {
        reintegro = tope;
    }
    return reintegro;
}