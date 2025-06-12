const leer = require("prompt-sync")();

const FILA_JUGADOR = 5;
const COLUMNA_JUGADOR = 0;
const FILA_COMPUERTA = 5;
const COLUMNA_COMPUERTA = 9;
const FILA_SALIDA = 0;
const COLUMNA_SALIDA = 0;
const FILA_ALIEN = 9
const COLUMNA_ALIEN = 3;

const tablero = [];
for (let i = 0; i < 10; i++) {
    tablero.push([]);
    for (let j = 0; j < 10; j++) {
        tablero[i].push(" . ");
    }
}

const jugador = {
    posX: COLUMNA_JUGADOR,
    posY: FILA_JUGADOR
};

const alien = {
    posX: COLUMNA_ALIEN,
    posY: FILA_ALIEN,
    direccionY: 1
};

const juego = {
    salida: {
        posX: COLUMNA_SALIDA,
        posY: FILA_SALIDA,
        turnos: 0,
        activa: false,
        alarma: false,
    },
    compuerta: {
        posX: COLUMNA_COMPUERTA,
        posY: FILA_COMPUERTA,
        turnos: 0,
        activa: false,
    },
};

function main() {

    let direccion = "";

    for (let turno = 0; turno < 50; turno++) {
        console.clear();
        console.log("Turno:", turno + 1);

        
        PosicionarElementos();
        mostrarTablero();
        tablero[alien.posY][alien.posX] = " . ";
        console.log("PRESIONA 'WASD' PARA MOVERTE");
        direccion = leer();
        
        moverJugador(direccion);
        moverAlien();
        
        console.log(jugador);
    }
}

main();
/**
 * Esto mueva al alien
 */
function moverAlien() {
    if (alien.posY === 0 || alien.posY === 9) {
        alien.direccionY *= -1;
    }
    alien.posY += alien.direccionY;
}
/**
 * Esto mueve el jugador
 * @param {String} direccion para actualizar la posicion al personaje
 */
function moverJugador(direccion) {
    tablero[jugador.posY][jugador.posX] = " . "
    if (direccion === "w") jugador.posY--;
    if (direccion === "s") jugador.posY++;
    if (direccion === "a") jugador.posX--;
    if (direccion === "d") jugador.posX++;
}
/**
 * Esto posiciona los elementos
 */
function PosicionarElementos() {
    tablero[jugador.posY][jugador.posX] = " J ";
    tablero[alien.posY][alien.posX] = " A ";
    tablero[juego.salida.posY][juego.salida.posX] = " S ";
    tablero[juego.compuerta.posY][juego.compuerta.posX] = " C ";
}

/**
 * Esto muestra el tablero
*/
function mostrarTablero() {
    for (let fila = 0; fila < tablero.length; fila++) {
        let linea = "";
        for (let columna = 0; columna < tablero[fila].length; columna++) {
            linea += "[" + tablero[fila][columna] + "]";
        }
        console.log(linea);
    }
}

/**
 * Esto limpia el tablero
 */
/*function LimpiarTablero() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            tablero[i][j] = " . ";
        }
    }
}*/
