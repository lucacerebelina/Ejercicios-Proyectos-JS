/**
 ### Ejercicio 1 
#### Registro de asistencia en Hogwarts

- En Hogwarts se lleva un registro de asistencia a clases de tres estudiantes (Harry, Draco y Luna) por tener varias faltas durante una semana (lunes a viernes).

- Crea una matriz donde las filas representen a los estudiantes y las columnas a los días de la semana.
- Los valores serán 1 si el estudiante asistió ese día y 0 si no.
- Luego, mediante un programa en consola, permite al usuario ingresar el nombre de un estudiante para saber cuántos días asistió.
    - En caso de un nombre no encontrado se debera informar



* Posible resultado _**positivo**_ del programa
    -   ```
        *** Iniciando revision de asistencia ***

            Consulta asistencia en Hogwarts
            Ingresa el nombre del alumno (Harry, Draco, Luna): Harry
            Harry asistió 4 días.

        *** Fin de revision ***
        ```
* Posible resultado _**negativo**_ del programa
    -   ```
        *** Iniciando revision de asistencia ***

            Consulta asistencia en Hogwarts
            Ingresa el nombre del alumno (Harry, Draco, Luna): Neville
            Alumno Neville no encontrado.

        *** Fin de revision ***
        ```

* Extra
    1. #### Consulta de asistencia por día

        - El programa debe permitir al usuario ingresar un día de la semana (lunes a viernes) y mostrar cuántos alumnos asistieron a clases ese día.
        - Posible resultado _**positivo**_ del programa
            -   ```
                === Registro de asistencia en Hogwarts ===
                1. Consultar asistencia de un alumno
                2. Consultar asistencia en un día específico
                
                2
                
                Ingresa el día de la semana (lunes a viernes):

                miércoles

                Resultado: El miércoles asistieron 2 alumnos.
                ```
        - Posible resultado _**negativo**_ del programa
            -   ```
                === Registro de asistencia en Hogwarts ===
                1. Consultar asistencia de un alumno
                2. Consultar asistencia en un día específico

                2

                Ingresa el día de la semana (lunes a viernes): 

                domingo


                Resultado: Día no válido. Por favor ingresa un día entre lunes y viernes.

                ```
    1. #### Consulta de mayor asistencia en la semana

        - Consultar el alumno con mayor asistencia:
            - El programa muestra el nombre del alumno que tuvo la mayor cantidad de días asistidos en la semana.
            - Posible resultado del programa
            -   ```
                === Registro de asistencia en Hogwarts ===
                1. Consultar asistencia de un alumno
                2. Consultar asistencia en un día específico
                3. Consultar alumno con mayor asistencia

                3

                Resultado: El alumno con más asistencia es Harry con 4 días.
                ```
 */

const leer = require("prompt-sync")();

// CONSTANTES
const nombres = ["Harry", "Draco", "Luna"];
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const asistencia = [
    //Lunes, Martes, Miercoles, Jueves, Viernes
    [1, 1, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
];
function main() {
    let nombreAlumno = "";
    let cantidadAsistencia = 0;
    let encontrado = false;
    let asistenciasDelAlumno = "def vector estudiante"  
    console.log("### Iniciando revision de asistencia ###");

    console.log("*** Registro de asistencia de Hogwarts ***");
    console.log("Ingrese el nombre del estudiante");
    nombreAlumno = leer();
    console.log("Asistencia de " + nombreAlumno);
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === nombreAlumno) {
            encontrado = true;

            asistenciasDelAlumno = asistencia[i];

            for (let j = 0; j < asistenciasDelAlumno.length; j++) {
                if (asistenciasDelAlumno[j] === 1) {
                    cantidadAsistencia++;
                }
            }
            console.log(nombreAlumno + " asistio " + cantidadAsistencia + " dias.");
            i = nombres.length

        }

    }
    if (!encontrado) {
        console.log("Alumno " + nombreAlumno + " no encontrado");
    }
}
main();
