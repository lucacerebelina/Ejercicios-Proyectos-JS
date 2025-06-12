/*- Crear un procedimiento con un parametro llamado nombreSaludar y este reciba un nombre a saludar desde la funcion main
    - Usarlo 3 veces con nombres distintos

- Documentacion:
    
    -   ```
        /**
        * Saluda con un mensaje y un nombre
        * @param {String} nombreSaludar con un mensaje
        
        function saludarA(nombreSaludar) {
            
        }
*/
const leer = require("prompt-sync")();

function main() {
    /* console.log("\tHola Hermione Granger!");
    console.log("\tHola Draco Malfoy!");
    console.log("\tHola Dobby!"); */
    saludarA("Hermione Granger");
    saludarA("Draco Malfoy");
    saludarA("Dobby");
}
main();

/**
 * Saluda a una persona con su nombre y un mensaje
 * @param {String} nombrePersona a saludar con un mensaje
 */
function saludarA(nombrePersona) {
    console.log("\t- Hola " + nombrePersona + "!\n");
}