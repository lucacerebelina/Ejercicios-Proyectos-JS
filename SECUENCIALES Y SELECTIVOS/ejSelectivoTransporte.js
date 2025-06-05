const leer = require("prompt-sync")();

const ESTADO_NORMAL = "Servicio normal";



function main() {
    let medioTransporte = "subte";
    let estadoTransporte = "Servcio normal";
    let tenemosPrisa = false;

    console.log("###Resumen de viaje###");

    console.log("Ingresa el estado [paro/interrupcion/demora/Servicio normal] del transporte actual: " + medioTransporte);
    estadoTransporte = leer();

    console.log("-Iniciando viaje en "+ medioTransporte);
    console.log("estado de Subte: "+estadoTransporte);

    if (estadoTransporte !== ESTADO_NORMAL) {
        console.log("Tenes prisa? 1-Si | 0-No");
        tenemosPrisa = Boolean(Number(leer()));

        if (tenemosPrisa) {
            medioTransporte = "Colectivo";
            console.log("Ingresa el estado [paro/interrupcion/demora/Servicio normal] del transporte actual: " + medioTransporte);
            estadoTransporte = leer();
            console.log("estado de "+medioTransporte+": "+estadoTransporte);
            
            if (estadoTransporte !== ESTADO_NORMAL) {
                medioTransporte = "Bicicleta";
                console.log("Medio de viaje usado: "+medioTransporte);
            }
        }
    }
    
}

main();