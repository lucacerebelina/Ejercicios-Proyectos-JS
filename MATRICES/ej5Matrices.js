/**
 - Crear un programa que permita Mostrar de forma detallada tareas de cada día en la semana ignorando los días sin tarea
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
            ***Mostrando todos los días de la semana***
            - Lunes:
                1. Lavar ropa
                2. Jugar con mascota
            - Miercoles:
                1. Ordenar cuarto
                2. Cocinar
                3. Ejercicio
            - Viernes:
                1. Practicar programacion
                        ``` 
 */
const leer = require("prompt-sync")();

const nombresDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function main() {
    const tareasSemana = [
        ["Lavar ropa", "Jugar con mascota"],
        [],
        ["Ordenar cuarto", "Cocinar", "Ejercicio"],
        [],
        ["Practicar programacion"],
        [],
        [],
    ];

    console.log("***Mostrando todos los días de la semana***");

    for (let fila = 0; fila < tareasSemana.length; fila++) {
        if (tareasSemana[fila].length > 0) {
            console.log("- " + nombresDias[fila] + ":");
        }
        /* 
        console.log("- " + nombresDias[fila] + ":");
        if (tareasSemana[fila].length <= 0) {
            console.log("No hay tareas");
        }
        */
        for (let col = 0; col < tareasSemana[fila].length; col++) {
            console.log("\t" + (col + 1) + ". " + tareasSemana[fila][col]);
        }
    }

}

main();