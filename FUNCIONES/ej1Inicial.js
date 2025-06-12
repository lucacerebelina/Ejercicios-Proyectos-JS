/* - Crear un procedimiento que imprima un mensaje en consola

- Documentacion:
    
    -   ```
        /**
        * Saluda con un mensaje
        
        function saludar() {
            
        }
        ``` */

const leer = require("prompt-sync")();

function main() {

    saludar();//llamado a una funcionalidad
    saludar();
    saludar();
    saludar();
    saludar();
    saludar();

}
main();

// Declaracion de subalgoritmos
/**
 * Saluda con un mensaje
 */
function saludar() {
    console.log("Hola!!!");
    //process.stdout.write("Hola!!!\n");
}