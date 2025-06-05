const leer = require("prompt-sync")();

function main() {
    // VARIABLES
    let nivel = "L";
    let codigo = "L";

    // ENTRADA
    console.log("*** Lanzamiento de Hechizos ***");
    console.log("Seleccioná el nivel del hechizo (1 o 2):");
    nivel = leer();

    // PROCESO Y SALIDA

    switch (nivel) {
        case "1":
            console.log("Ingresá el código de 4 dígitos del hechizo:");
            codigo = leer();
            console.log("\n*** Resultado del hechizo ***");
            switch (codigo) {
                case "3245":
                    console.log("Wingardium Leviosa");
                    break;
                case "2312":
                    console.log("Expelliarmus");
                    break;
                default:
                    console.log("Código incorrecto para el nivel 1.");
                    break;
            }
            break;

        case "2":
            console.log("Ingresá el código de 4 dígitos del hechizo:");
            codigo = leer();
            console.log("\n*** Resultado del hechizo ***");
            switch (codigo) { 
                case "5231":
                    console.log("Expecto Patronum");
                    break;
                case "0124":
                    console.log("Avada Kedavra");
                    break;
                default:
                    console.log("Código incorrecto para el nivel 2.");
                    break;
            }
            break;

        default:
            console.log("Nivel no válido. Debe ser 1 o 2.");
            break;
    }

    console.log("\n*** Fin del hechizo ***");
}
main();



