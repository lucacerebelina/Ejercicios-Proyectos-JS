/*- Crear un programa que permita Eliminar una propiedad de una tarea especifica en un **_Y_** día de la semana

    - Cada tarea tiene propiedades de:
        1. Titulo
        1. Fecha creacion
            - Por defecto la actual
        1. Terminada

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
        
        Seleccione una tarea?
        1

        Propiedades en Lavar ropa:
            1- titulo: Lavar ropa
            2- fechaInicio: 10/10/2010
            3- terminada: false
        Que propiedad necesitas eliminar ?
        2   
        ### Eliminando propiedad 'fechaInicio' del día Lunes ###

        [
            [
                { titulo: 'Lavar ropa', terminada: false },
                { titulo: 'Jugar con mascota', fechaInicio: '10/10/2010', terminada: false }
            ],
            [],
            [
                { titulo: 'Ordenar cuarto', fechaInicio: '10/10/2010', terminada: false },
                { titulo: 'Ejercicio', fechaInicio: '10/10/2010', terminada: true }
            ],
            [],
            [],
            [],
            []
        ]

        ``` 
    - Ejemplo de resultado:
        ```
        Seleccione dia a modificar:  L-M-Mi-J-V-S-D
        Mi
                ***Mostrando tareas del día Miercoles**
            1. Ordenar cuarto
            2. Ejercicio
        
        Seleccione una tarea?
        2

        Propiedades en Lavar ropa:
            1- titulo: Lavar ropa
            2- fechaInicio: 10/10/2010
            3- terminada: false
        Que propiedad necesitas eliminar ?
        3   
        ### Eliminando propiedad 'terminada' del día Miercoles ###

        [
            [
                { titulo: 'Lavar ropa', terminada: false },
                { titulo: 'Jugar con mascota', fechaInicio: '10/10/2010', terminada: false }
            ],
            [],
            [
                { titulo: 'Ordenar cuarto', fechaInicio: '10/10/2010', terminada: false },
                { titulo: 'Ejercicio', fechaInicio: '10/10/2010'}
            ],
            [],
            [],
            [],
            []
        ]

        ``` 
---

- Extras
    1. Investigar como evitar que un objeto literal sea alterado una vez creado en todas sus propiedades
    1. Investigar como evitar que _**solo**_ algunas de las propiedades de un objeto literal sean eliminadas
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
        let posTareaSeleccionada = -1;
        let posPropEliminar = -1;
        let tareaTemp = "def tarea temp";
        let propiedadesTemp = "def propiedades";
        //muestra el menu
        console.log("Ingrese opcion del día a eliminar una tarea");
        for (let i = 0; i < nombresDiaSemana.length; i++) {
            console.log("\t" + (i + 1) + " - " + nombresDiaSemana[i]);
        }
        posDiaIngresado = Number(leer()) - 1;
        console.log("### Mostrando "+tareasSemana[posDiaIngresado].length  +" tarea/s del día "+nombresDiaSemana[posDiaIngresado]+" ###");
    
        //muestra tareas del dia solicitado
        for (let columna = 0; columna < tareasSemana[posDiaIngresado].length; columna++) {
            console.log("\t"+(columna+1)+"- "+tareasSemana[posDiaIngresado][columna].titulo);
        }
        console.log("Seleccione una tarea a eliminar una propiedad");
        posTareaSeleccionada = Number(leer());
        posTareaSeleccionada--;
        tareaTemp = tareasSemana[posDiaIngresado][posTareaSeleccionada];
        console.log("### Propiedades en tarea: "+ tareaTemp.titulo +" ###");
    
        propiedadesTemp = Object.keys(tareaTemp);
        for (let i = 0; i < propiedadesTemp.length; i++) {
            if (tareaTemp[propiedadesTemp[i]] instanceof Date) {
                console.log("\t"+(i+1)+"- "+ propiedadesTemp[i] +": "+ tareaTemp[propiedadesTemp[i]].toLocaleDateString());
            }else{
                console.log("\t"+(i+1)+"- "+ propiedadesTemp[i] +": "+ tareaTemp[propiedadesTemp[i]]);
            }
        }
        console.log("Ingrese la propiedad a eliminar");
        posPropEliminar = Number(leer()) - 1;
        
        console.log("### Eliminando propiedad '"+ propiedadesTemp[posPropEliminar] +"' del día "+nombresDiaSemana[posDiaIngresado]+" ###");
        
        delete tareaTemp[propiedadesTemp[posPropEliminar]];
        console.log(tareasSemana);
    }
    
    main();