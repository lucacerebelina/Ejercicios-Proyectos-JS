/*- Crear un programa que permita Actualizar una tarea especifica como **terminada** de un determinado **_Y_** día de la semana

    - Cada tarea tiene propiedades de:
        1. Titulo
        1. Fecha creacion
        1. Terminada
            - `false` por defecto

    - Tareas disponibles:
        - Lunes:
            1. Lavar ropa
            1. Jugar con mascota
        - Miercoles:
            1. Ordenar cuarto
            1. Ejercicio
            
    - Ejemplo de resultado:
        ```
        Seleccione dia a modificar:  L-M-Mi-J-V-S-D
        L
                ***Mostrando tareas del día Lunes**
            1- Lavar ropa
            2- Jugar con mascota
        
        Seleccione una tarea a actualizar como Terminada?
        1

        ### Actualizando la tarea 'Lavar ropa' del día Lunes como Terminada ###

        [
            [
                { titulo: 'Lavar ropa', fechaInicio: '10/10/2010', terminada: true },
                { titulo: 'Jugar con mascota', fechaInicio: '10/10/2010', terminada: false }
            ],
            [],
            [
                { titulo: 'Ordenar cuarto', fechaInicio: '10/10/2010', terminada: false },
                { titulo: 'Ejercicio', fechaInicio: '10/10/2010', terminada: false }
            ],
            [],
            [],
            [],
            []
        ]
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
                terminada: DEF_TAREA_TERMINADA
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
                titulo:"Ejercicio",
                fechaCreacion: new Date("2024/7/22"),
                terminada: DEF_TAREA_TERMINADA
            }
        ],
        [],
        [],
        [],
        [],
    ]
    let posDiaIngresado = -1;
    let posTareaActualizar = -1;
    let tareaTemp = "def tarea temp";
    //muestra el menu
    console.log("Seleccione dia a modificar");
    for (let i = 0; i < nombresDiaSemana.length; i++) {
        console.log("\t" + (i + 1) + " - " + nombresDiaSemana[i]);
    }
    posDiaIngresado = Number(leer()) - 1;
    console.log("### Mostrando "+tareasSemana[posDiaIngresado].length  +" tarea/s del día "+nombresDiaSemana[posDiaIngresado]+" ###");

    //muestra tareas del dia solicitado
    for (let columna = 0; columna < tareasSemana[posDiaIngresado].length; columna++) {
        console.log("\t"+(columna+1)+"- "+tareasSemana[posDiaIngresado][columna].titulo);
    }
    console.log("Seleccione una tarea a actualizar como Terminada");
    posTareaActualizar = Number(leer());
    posTareaActualizar--;
    tareaTemp = tareasSemana[posDiaIngresado][posTareaActualizar];

    console.log("### Actualizando la tarea '"+ tareaTemp.titulo +"' del día "+ nombresDiaSemana[posDiaIngresado]+" como Terminada ###");
    
    tareaTemp.terminada = true;

    console.log(tareasSemana);
}

main();