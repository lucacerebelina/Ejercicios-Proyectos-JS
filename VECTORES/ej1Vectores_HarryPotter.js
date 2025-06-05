const leer = require("prompt-sync")();

const RECOLECCION_MAX = 3;

function main() {
    
const ingredientes = [" Raiz de Valeriana", " Mandragora Negra", " Pluma de Hipografo", " Ojo de Escarabajo", " Sangre de Dragon"];
    const ingredientesAcertados = [];
    let ingredienteEncontrado = "";
    for (let intento = 0; intento < RECOLECCION_MAX; intento++) {
        console.log("*** Iniciando recoleccion ***");
        console.log("Que ingrediente encontraste?");
        console.log(ingredientes);
        ingredienteEncontrado = Number(leer());

        if (ingredienteEncontrado === 1 || ingredienteEncontrado === 4) {
            console.log("Ingrediente NO aceptado, cuidado!");
        } else {
            console.log("Ingrediente aceptado");
            ingredientesAcertados.push(ingredientes[ingredienteEncontrado]);
        }
        console.log("Planta encontrada: " + ingredientes[ingredienteEncontrado]);
    }
    ingredientesAcertados.sort();
    console.log("*** Fin de Recoleccion ***");
    console.log("Informe ingredientes encontrados: " + ingredientesAcertados);
    if (ingredientesAcertados.length >= 2) {
        console.log("Aprobado");
    } else {
        console.log("Desaprobaste!");
    }
}
main();