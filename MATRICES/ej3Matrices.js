/**
 - Crear un programa que permita Eliminar una tarea especifica de un **_Y_** día de la semana
    - Tareas disponibles:
        - Lunes:
            1. Lavar ropa
            1. Jugar con mascota
        - Miercoles:
            1. Ordenar cuarto
            1. Cocinar
            1. Ejercicio
        - Viernes:
            1. Practicar programacion
    - Ejemplo de resultado:
        ```
        Seleccione dia a modificar:  L-M-Mi-J-V-S-D
        L
                ***Mostrando tareas del día Lunes**
            1- Lavar ropa
            2- Jugar con mascota
        
        Que tarea desea eliminar?
        1

        ### Eliminando tarea Nº1 del día Lunes ###

        [["Jugar con mascota"],[],["Ordenar cuarto", "Cocinar", "Ejercicio"],[],["Practicar programacion"],[],[]]

        ``` 
    - Ejemplo de resultado:
        ```
        Seleccione dia a modificar:  L-M-Mi-J-V-S-D
        Mi
                ***Mostrando tareas del día Miercoles**
            1- Ordenar cuarto
            2- Cocinar
            3- Ejercicio

        
        Que tarea desea eliminar?
        2

        ### Eliminando tarea Nº2 del día Miercoles ###

        [["Lavar ropa", "Jugar con mascota"],[],["Ordenar cuarto", "Ejercicio"],[],["Practicar programacion"],[],[]]
        ``` 
 */
const leer = require("prompt-sync")();

const nombresDiaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function main() {
    const tareasSemana = [
        ["Lavar ropa", "Jugar con mascota"],
        [],
        ["Ordenar cuarto", "Cocinar", "Ejercicio"],
        [],
        ["Practicar programacion"],
        [],
        [],
    ]
    let posDiaIngresado = -1;
    let posTareaEliminar = -1;

    //muestra el menu
    console.log("Ingrese opcion del día a eliminar una tarea");
    for (let i = 0; i < nombresDiaSemana.length; i++) {
        console.log("\t" + (i + 1) + " - " + nombresDiaSemana[i]);
    }
    posDiaIngresado = Number(leer()) - 1;
    console.log("### Mostrando " + tareasSemana[posDiaIngresado].length + " tarea/s del día " + nombresDiaSemana[posDiaIngresado] + " ###");

    //muestra tareas del dia solicitado
    for (let columna = 0; columna < tareasSemana[posDiaIngresado].length; columna++) {
        console.log("\tTarea Nº " + (columna + 1) + ": " + tareasSemana[posDiaIngresado][columna]);
    }
    console.log("Ingresa el numero de tarea a eliminar");
    posTareaEliminar = Number(leer());
    console.log("### Eliminando tarea Nº" + posTareaEliminar + " del día " + nombresDiaSemana[posDiaIngresado] + " ###");
    //posTareaEliminar = posTareaEliminar - 1;
    //posTareaEliminar-=1;
    posTareaEliminar--;

    //elimina una tarea segun la posicion del dia seleccionado
    tareasSemana[posDiaIngresado].splice(posTareaEliminar, 1);

    console.log(tareasSemana);
}

main();