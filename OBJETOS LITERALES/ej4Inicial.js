/*- Crear 1 objeto literal que contenga 3 propiedades
- Tiene que tener propiedades SOLO del mismo tipo de dato (String, Number, Boolean)
- Eliminar el segundo elemento usando `delete`
- Imprimir el objeto literal resultante
    - objeto literal con propiedades de tipo palabra "A", "B", "C"
    - Ejemplo de resultado final:
        
        {prop1: "A", prop3: "C"}
*/

const leer = require("prompt-sync")();

function main() {
    const objCaracteres = {
        caracteres1: "A",
        caracteres2: "B",
        caracteres3: "C",
    }

    delete objCaracteres.caracteres2;

    console.log(objCaracteres);
}

main();