/*- Crear un programa que permita Agregar X cantidad de tareas en Y dia de la semana
    
    - Cada tarea tiene propiedades de:
        1. Titulo
        1. Fecha creacion
        1. Terminada

    - Ejemplo de resultado:
        ```
        Seleccione dia a modificar:  L-M-Mi-J-V-S-D
        L
        Cuantas tareas deseas agregar?
        3

        ### Agregando 3 tareas al dia Lunes ###
            Lavar ropa
            Ordenar cuarto
            Practicar programacion
        ### Tareas agregadas ###

        [
            [
                { titulo: 'Lavar ropa', fechaInicio: '11/3/2023', terminada: false },
                { titulo: 'Ordenar cuarto', fechaInicio: '7/2/2025', terminada: true },
                { titulo: 'Practicar programacion', fechaInicio: '23/5/2024', terminada: false }
            ],
            [],
            [],
            [],
            [],
            [],
            []
        ]
*/
const leer = require("prompt-sync")();
const nombresDiaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function main() {
    const tareasDiasSemana = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    let tareaTemp = "def tarea obj literal";
    let posDiaIngresado = -1;
    let cantTareasAgregar = 0;

    //muestra el menu
    console.log("Ingrese opcion del día a agregar tareas");
    for (let i = 0; i < nombresDiaSemana.length; i++) {
        console.log("\t" + (i + 1) + " - " + nombresDiaSemana[i]);
    }
    posDiaIngresado = Number(leer()) - 1;
    console.log("Ingresa cantidad de tareas a agregar");
    cantTareasAgregar = Number(leer());

    console.log("### Agregando " + cantTareasAgregar + " tareas al dia " + nombresDiaSemana[posDiaIngresado] + " ###");

    for (let i = 0; i < cantTareasAgregar; i++) {
        console.log("Ingresa tarea Nº "+(i+1));
        tareaTemp = {
            titulo:"def titulo",
            fechaCreacion: "def fecha creacion",
            terminada: false
        };//va a crear un nuevo y unico objeto literal de tarea
        console.log("Titulo:");
        tareaTemp.titulo = leer();
        console.log("Fecha de creacion (AAA/MM/DD) :");
        //tareaTemp.fechaCreacion = (new Date( leer() )).toLocaleDateString();
        tareaTemp.fechaCreacion = new Date( leer() );
        tareaTemp.fechaCreacion = tareaTemp.fechaCreacion.toLocaleDateString();
        console.log("Esta terminada ? 1-Si / 0-No");
        tareaTemp.terminada = Boolean(Number(leer()));
        tareasDiasSemana[posDiaIngresado].push(tareaTemp);
    }
    console.log("### Tareas agregadas ###");
    console.log(tareasDiasSemana);
}

main();