/*- Crear un programa que permita Mostrar de forma detallada tareas, con sus propiedades, de cada día en la semana ignorando los días sin tarea

    - Cada tarea tiene propiedades de:
        1. Titulo
        1. Fecha creacion
        1. Terminada

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
            ***Mostrando tareas de todos los días de la semana***
            - Lunes:
                1. Lavar ropa
                    - fechaInicio: 10/10/2010
                    - Sin terminar
                2. Jugar con mascota
                    - fechaInicio: 22/2/2012
                    - Terminada
            - Miercoles:
                1. Ordenar cuarto
                    - fechaInicio: 3/5/2025
                    - Terminada
*/
const leer = require("prompt-sync")();

const nombresDiaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const DEF_TAREA_TERMINADA = false;

function main() {
    const tareasSemana = [
        [
            {
                titulo: "Lavar ropa",
                fechaCreacion: new Date("2024/"),
                terminada: DEF_TAREA_TERMINADA
            },
            {
                titulo:"Jugar con mascota",
                fechaCreacion: new Date("2024/3"),
                terminada: true
            }
        ],
        [],
        [
            {
                titulo: "Ordenar cuarto",
                fechaCreacion: new Date("2023/4"),
                terminada: DEF_TAREA_TERMINADA
            },
            {
                titulo:"Cocinar",
                fechaCreacion: new Date("2027/7/22"),
                terminada: true
            },
            {
                titulo:"Ejercicio",
                fechaCreacion: new Date("2024/7/22"),
                terminada: true
            }
        ],
        [],
        [
            {
                titulo:"Practicar programacion",
                fechaCreacion: new Date("2025/7/2"),
                terminada: DEF_TAREA_TERMINADA
            }
        ],
        [],
        [],
    ]
    
    console.log("***Mostrando tareas de todos los días de la semana***");
    for (let dia = 0; dia < tareasSemana.length; dia++) {
        if ( tareasSemana[dia].length) {
            console.log("- "+ nombresDiaSemana[dia]);
            for (let tarea = 0; tarea < tareasSemana[dia].length; tarea++) {
                console.log("\t"+(tarea+1)+". "+ tareasSemana[dia][tarea].titulo);
                console.log("\t\t- Fecha de inicio: "+ tareasSemana[dia][tarea].fechaCreacion.toLocaleDateString());
                console.log("\t\t- "+ (tareasSemana[dia][tarea].terminada ? "Terminada":"Sin terminar"));
            }
        }
    }
}

main();