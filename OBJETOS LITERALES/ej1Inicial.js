/*- Crear 1 objeto literal que contenga 7 propiedades
- Tiene que tener propiedades SOLO del mismo tipo de dato (String, Number, Boolean)
- Imprimir en consola el primer, cuarto y último elemento por separado usando el objeto literal creado
    - objeto literal con propiedades de tipo palabra "A","B","C","D","E","F","G"
    - Ejemplo de resultado final:

        A
        D
        G
*/
const leer = require("prompt-sync")();

function main() {
    const objetoLitearl = {
        prop1: "A",
        prop2: "B",
        prop3: "C",
        prop4: "D",
        prop5: "E",
        prop6: "F",
        prop7: "G",
    }

    console.log( objetoLitearl.prop1 );
    console.log( objetoLitearl.prop4 );
    console.log( objetoLitearl.prop7 );
    
}

main();