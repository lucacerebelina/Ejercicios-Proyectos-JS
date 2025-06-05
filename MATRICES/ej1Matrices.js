/**
- Crear un programa que permita mostrar **_X_** cantidad de tareas dependiendo de **_Y_** día de la semana
- Lista de tareas inicial: 
- Lunes: Lavar ropa
- Miercoles: Ordenar cuarto
- Sabado: Practicar programacion
- Resto de días sin tareas inicialmente
- Ejemplo de resultado:
```
Ingrese inicial del día a revisar tareas L-M-Mi-J-V-S-D?
L
### Mostrando 1 tarea/s del día Lunes ###

    Tarea Nº 1: Lavar ropa

### Fin de tareas ###
``` 
- Ejemplo de resultado:
```
Ingrese inicial del día a revisar tareas L-M-Mi-J-V-S-D?
S
### Mostrando 1 tarea/s del día Sabado ###

    Tarea Nº 1: Practicar programacion

### Fin de tareas ###
``` 
*/

const leer = require("prompt-sync")();

const diasNombresSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function main() {
    const diasSemanaTareas = [
        ["Lavar ropa"],
        ["tarea n"],
        ["Ordenar cuarto", "Jugar con mascotas"],
        [],
        [],
        ["Practicar programacion"],
        []
    ];
    let posDiaIngresado = -1;

    console.log("Ingrese opcion del día a mostrar");
    for (let i = 0; i < diasNombresSemana.length; i++) {
        console.log("\t" + (i + 1) + " - " + diasNombresSemana[i]);
    }
    posDiaIngresado = Number(leer()) - 1;
    console.log("### Mostrando " + diasSemanaTareas[posDiaIngresado].length + " tarea/s del día " + diasNombresSemana[posDiaIngresado] + " ###");

    for (let columna = 0; columna < diasSemanaTareas[posDiaIngresado].length; columna++) {
        console.log("Tarea Nº " + (columna + 1) + ": " + diasSemanaTareas[posDiaIngresado][columna]);
    }
    console.log("### Fin de tareas ###");
}

main();