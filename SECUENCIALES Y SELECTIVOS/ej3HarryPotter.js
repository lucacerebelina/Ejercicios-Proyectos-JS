const leer = require("prompt-sync")();

/*Ejercicio 3
Pocion de Fuerza
- Una de las pociones más complejas es la "Poción de la Fuerza", que requiere una mezcla precisa de ingredientes y una correcta activación de la magia para que sea exitosa.
    -Para preparar la poción, el estudiante debe asegurarse de que:
La cantidad de ingredientes mágicos esté dentro del rango adecuado.
      -El ingrediente principal tiene que ser mezclado en una cantidad entre 5 y 10 gramos (inclusive).
    -El tiempo de preparación debe ser exacto.
      -El tiempo de preparación debe ser exactamente 3 horas (sin minutos adicionales).
 -Posibles resultados en consola:
 *** Resultado de preparacion ***

cantidad dentro del rango: true
tiempo de preparacion exacto:  true

Apto para consumo: true

*** Resultado de preparacion ***

cantidad dentro del rango: true
tiempo de preparacion exacto:  false

Apto para consumo: false
*/
// CONSTANTES
const GRAMOS_MIN = 5;
const GRAMOS_MAX = 10;
const TIEMPO_EXACTO = 3;
/**
 * Funcion principal del programa
 */
function main() {
    //VARIABLES
    let gramosUsados = 0;
    let tiempoPreparacion = 0;

    //DATOS
    console.log("Gramos usados: ");
    gramosUsados = Number(leer())
    console.log("Tiempo de preparacion (en horas): ");
    tiempoPreparacion = Number(leer())

    //CALCULOS
    let gramosCorrectos = gramosUsados >= GRAMOS_MIN && gramosUsados <= GRAMOS_MAX;
    let tiempoCorrecto = tiempoPreparacion === TIEMPO_EXACTO;
    let pocionLista = gramosCorrectos && tiempoCorrecto;

    //RESULTADOS
    console.log("Resultado de preparacion");
    console.log("Cantidad dentro del rango: ", gramosCorrectos);
    console.log("Tiempo de preparacionm exacto:", tiempoCorrecto);
    console.log("Apto para conosumo:", pocionLista);

}

main();