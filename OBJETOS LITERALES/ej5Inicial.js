/*- Crear 1 objeto literal que contenga 3 propiedades
- Tiene que tener propiedades SOLO del mismo tipo de dato (String, Number, Boolean)
- Intercambiar los propiedades del primer y ultimo lugar
    - Este algoritmo tiene que funcionar con cualquier tipo de combinacion de propiedades
- Imprimir el objeto literal resultante
    - objeto literal con propiedades de tipo palabra "A", "B", "C"
    - Ejemplo de resultado final:
        
        {prop1: "C", prop2: "B", prop3: "A"}
*/
const leer = require("prompt-sync")();

function main() {
    const objLiteral = {
        prop1: false,
        prop2: true,
        prop3: true,
    }
    let auxProp = "def prop";

    auxProp = objLiteral.prop1;//guardo el valor de la primer propiedad
    objLiteral.prop1 = objLiteral.prop3; 
    objLiteral.prop3 = auxProp;
    console.log(objLiteral);
}

main();