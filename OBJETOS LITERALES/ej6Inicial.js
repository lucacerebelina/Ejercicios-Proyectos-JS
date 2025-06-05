/*- Crear 1 objeto literal que contenga 1 propiedad de tipo Numerico
- Incrementar 3 propiedades de tipo Numerico al objeto literal, el valor Numerico puede ser cualquiera
    - Este algoritmo tiene que funcionar con cualquier tipo de combinacion de propiedades
- Imprimir el objeto literal resultante
    - objeto literal inicial con propiedad y valor 1
    - Ejemplo de resultado final:
        
        {prop1: 1, prop2: 7, prop3: -9, prop4: 11}
*/
const leer = require("prompt-sync")();

function main() {
    const objLiteral = {
        prop1: 1
    }

    objLiteral.propNueva2 = 7; // se crea una nueva propiedad
    objLiteral.propNueva3 = -9; // se crea una nueva propiedad
    objLiteral.propNueva4 = 11; // se crea una nueva propiedad

    console.log(objLiteral);
}

main();