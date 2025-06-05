const leer = require ("prompt-sync")();

/*Ejercicio2
************************************Clase de Encantamientos************************************
-Para saber el total de materiales necesarios en la clase de hoy tenemos que saber el numero de estudiantes y libros a usar.
-Los estudiantes tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos.
    -Donde podemos saber el total triplicando la cantidad de varitas por cada estudiante que la trajo y duplicando la cantidad de libros.
    -Por ejemplo si hay 7 varitas y 4 libros a usar los materiales necesarios son 29
-Posible resultado en consola:
*** Resumen de materiales ***

Estudiantes: 10
Estudianes con varita:  7
Cantidad de libros: 4

Total de materiales: 29
*/


// CONSTANTES
const MULTIP_VARITAS = 3
const MULTIP_LIBROS = 2
/**
 * Funcion principal del programa
 */
function main () {
//VARIABLES
    let totalEstudiantes = 0;
    let estudiantesConVarita = 0;
    let cantidadLibros = 0;
    let materialesVaritas = 0;
    let materialesLibros = 0;
    let totalMateriales = 0;

 //DATOS
    console.log("ingrese la cantidad de estudiantes: ");
    totalEstudiantes = Number(leer());
    console.log("Ingrese la cantidad de estudiantes con varita: ");
    estudiantesConVarita = Number(leer());
    console.log("ingrese la cantidad de libros: ");
    cantidadLibros = Number(leer());
    
 //CALCULO
    materialesVaritas = estudiantesConVarita * MULTIP_VARITAS;
    materialesLibros = cantidadLibros * MULTIP_LIBROS;
    totalMateriales = materialesVaritas + materialesLibros;

 //RESULTADOS
    console.log("### Resumen Materiales ###");
    console.log("Estudiantes: " + totalEstudiantes);
    console.log("Estudiantes con varita: " + estudiantesConVarita);
    console.log("Cantidad de libros: " + cantidadLibros);
    console.log("Total de Materiales: " + totalMateriales);

}
    
main();