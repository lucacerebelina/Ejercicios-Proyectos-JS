/**
 - Crear un programa que permita Actualizar una tarea especifica a **Completada** de un determinado **_Y_** día de la semana
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
        
        Que tarea desea marcar como Completada?
        1

        ### Completando tarea Nº1 del día Lunes ###

        [["Lavar ropa - Completada", "Jugar con mascota"],[],["Ordenar cuarto", "Cocinar", "Ejercicio"],[],["Practicar programacion"],[],[]]

        ``` 
    - Ejemplo de resultado:
        ```
        Seleccione dia a modificar:  L-M-Mi-J-V-S-D
        Mi
                ***Mostrando tareas del día Miercoles**
            1- Ordenar cuarto
            2- Cocinar
            3- Ejercicio

        
        Que tarea desea marcar como Completada?
        2

        ### Completando tarea Nº1 del día Miercoles ###

        [["Lavar ropa", "Jugar con mascota"],[],["Ordenar cuarto", "Cocinar - Completada", "Ejercicio"],[],["Practicar programacion"],[],[]]
       ``` 
 */
       const leer = require("prompt-sync")();

       const nombresDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
       const TXT_TAREA_COMPLETADA = " - Completada";
       
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
           let posTareaModificar = -1;
       
           //muestra el menu
           console.log("Ingrese opcion del día a marcar como completada una tarea");
           for (let i = 0; i < nombresDias.length; i++) {
               console.log("\t" + (i + 1) + " - " + nombresDias[i]);
           }
           posDiaIngresado = Number(leer()) - 1;
           console.log("### Mostrando "+tareasSemana[posDiaIngresado].length  +" tarea/s del día "+nombresDias[posDiaIngresado]+" ###");
       
           //muestra tareas del dia solicitado
           for (let columna = 0; columna < tareasSemana[posDiaIngresado].length; columna++) {
               console.log("\tTarea Nº "+(columna+1)+": "+ tareasSemana[posDiaIngresado][columna]);
           }
       
           console.log("Ingresa el numero de tarea a marcar como completado");
           posTareaModificar = Number(leer());
           console.log("### Marcando como completada la tarea Nº"+ posTareaModificar +" del día "+nombresDias[posDiaIngresado]+" ###");
           posTareaModificar--;
           //tareasSemana[posDiaIngresado][posTareaModificar] = tareasSemana[posDiaIngresado][posTareaModificar] + TXT_TAREA_COMPLETADA;
           tareasSemana[posDiaIngresado][posTareaModificar] += TXT_TAREA_COMPLETADA;
       
           console.log(tareasSemana);
           
       }
       
       main();