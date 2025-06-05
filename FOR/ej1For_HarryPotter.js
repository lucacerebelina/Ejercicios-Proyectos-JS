//### Ejercicio 1 
//#### Practica de hechizos

//- Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. 
//- En la clase de Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos correctamente.
//- Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y le dé un número limitado de intentos para ingresarlo correctamente. 
//- Si el usuario ingresa el nombre del hechizo correctamente, el programa lo felicitará y finalizará. 
//- Si el usuario no logra ingresar el hechizo correctamente después de los intentos permitidos, el programa lo informará y finalizará.

//* Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 2
/* -   ```
        *** Iniciar simulacion ***

        wingardim levisa
        error - intentos restantes 1
        Wingardium leviosa
        Correcto!

        *** Fin simulacion ***
        ```
 */


//* Extra: permitir que el programa acepte 2 o más hechizos diferentes

// CONSTANTES
const leer = require("prompt-sync")();
const HECHIZO_CORRECTO = "Wingardium leviosa";
const INTENTOS_MAX = 2;

function main() {

    //VARIABLES

    let hechizoIngresado = "Definir";
    let intentosRestantes = 0;

    //ENTRADA
    console.log("*** Iniciar simulacion ***");

    //CODIGO
    for (let intento = 0; intento < INTENTOS_MAX; intento++) {
        console.log("Deci el hechizo");
        hechizoIngresado = leer()
        intentosRestantes = INTENTOS_MAX - intento - 1
        if (hechizoIngresado === HECHIZO_CORRECTO) {
            console.log("Correcto!");
            intento = INTENTOS_MAX;
        } else if (intentosRestantes > 0) {
            console.log("Volve a intentarlo!");
        } else {
            console.log("error - intentos restantes " + intentosRestantes);
        }
    }
}
main();