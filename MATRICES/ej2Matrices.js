/** 
- Crear un programa que permita Agregar X cantidad de tareas en Y dia de la semana
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

        [["Lavar ropa", "Ordenar cuarto", "Practicar programacion"],[],[],[],[],[],[]]
      ``` 
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
    let posDiaIngresado = -1;
    let cantTareasAgregar = 0;
    let tareaIngresaTemp = "def tarea temp";

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
        console.log("Ingresa tarea Nº " + (i + 1) + ":");
        tareaIngresaTemp = leer();
        tareasDiasSemana[posDiaIngresado].push(tareaIngresaTemp);
    }
    console.log("### Tareas agregadas ###");
    console.log(tareasDiasSemana);
}

main();