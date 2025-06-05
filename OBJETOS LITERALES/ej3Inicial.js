/*- Crear 1 objeto literal que contenga 7 propiedades
- Usar diferentes tipos de dato (String, Number, Boolean)
- Modificar en consola el primer, cuarto y última propiedad por separado usando el objeto literal creado
- Imprimir todo el objeto literal
    - objeto literal: 1,"B",false,"D31","Enter",true,3.4
    - Ejemplo de resultado final:
    
        {prop1: true, prop2: "B", prop3: false, prop4: 9.3, prop5: "Enter", prop6: true, prop7: "Hello world"}
*/

const leer = require("prompt-sync")();

function main() {
    const objLiteral = {
        prop1:1,
        prop2:"B",
        prop3:false,
        prop4:"D31",
        prop5:"Enter",
        prop6:true,
        prop7:3.4
    }

    objLiteral.prop1 = true;
    objLiteral.prop4 =  9.3;
    objLiteral.prop7 = "Hello world";

    console.log(objLiteral );
    
}

main();