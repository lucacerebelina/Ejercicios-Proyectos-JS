/*- Crear 3 objetos literales que contengan 3 propiedades
- Tiene que tener propiedades SOLO del mismo tipo de dato (String, Number, Boolean)
- Imprimir en consola la segundo propiedad de cada objeto literal creado
    - objeto literal con propiedades de tipo palabra "A", "B", "C"
    - objeto literal con propiedades de tipo numero 1, 2, 3
    - objeto literal con propiedades de tipo booleano false, true, false
    - Ejemplo de resultado final:
        B
        2
        true
*/
const leer = require("prompt-sync")();

function main() {
    const objCaracteres = {
        caracteres1: "A",
        caracteres2: "B",
        caracteres3: "C",
    }
    const objNumeros = {
        numero1: 1,
        numero2: 2,
        numero3: 3,
    }
    const objBooleanos = {
        booleano1: false,
        booleano2: true,
        booleano3: false,
    }

    console.log(objCaracteres.caracteres2);
    console.log(objNumeros.numero2);
    console.log(objBooleanos.booleano2);
    
}

main();