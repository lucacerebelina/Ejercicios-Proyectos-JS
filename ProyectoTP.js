const leer = require("prompt-sync")();

const TURNOS_TOTALES = 50;
const FILA_JUGADOR = 5;
const COLUMNA_JUGADOR = 0;
const FILA_COMPUERTA = 5;
const COLUMNA_COMPUERTA = 9;
const FILA_SALIDA = 0;
const COLUMNA_SALIDA = 0;
const FILA_ALIEN = 9
const COLUMNA_ALIEN = 3;

const tablero = [];

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
    terminado: false,
};

function main() {
    let direccion = "";
    crearTablero();
    for (let turno = 0; turno < TURNOS_TOTALES; turno++) {
        console.log("Turno:", turno + 1);
        posicionarElementos();
        mostrarTablero();
        tablero[alien.posY][alien.posX] = " . ";
        console.log("PRESIONA 'WASD' PARA MOVERTE");
        direccion = leer();
        moverJugador(direccion);
        console.clear();
        verificaciones();
        movimientosAlien();
        turno = verificacionesFinalesJuego(turno);
        console.log(jugador);
    }
}
main();

/**
 * Estas son las verificaciones finales del juego
 * @param {number} turno valor actual
 * @returns turnos actual o totales 
 */
function verificacionesFinalesJuego(turno) {
    if (juego.terminado === false) {
        verificarVictoria();
    }

    if (juego.terminado === false) {
        verificarDerrota();
    }

    if (juego.terminado === true) {
        turno = TURNOS_TOTALES;
    }
    return turno;
}

/**
 * Estos son los movimientos del alien
 */
function movimientosAlien() {
    if (juego.salida.alarma) {
        moverAlienPersecucion();
    } else {
        moverAlienPatrullajeVertical();
    }
}
/**
 * Estas son verificaciones del juego
 */
function verificaciones() {
    verificarActivacionCompuerta();
    verificacionActivacionSalida();
    verificarModoPersecucion();
}

/**
 * Esto verfica si fuiste atrapado por el alien
 */
function verificarDerrota() {
    if (jugador.posX === alien.posX && jugador.posY === alien.posY) {
        console.log("¡Fuiste alcanzado por el alien! Fin del juego.");
        juego.terminado = true;
    }
}

/**
 * Esto verifica que ganaste
 */
function verificarVictoria() {
    if (juego.salida.activa &&
        jugador.posX === juego.salida.posX &&
        jugador.posY === juego.salida.posY) {
        console.log("¡Ganaste!");
        juego.terminado = true;
    }
}

/**
 * Esto hace que el alien se mueva en modo persecusion 
 */
function moverAlienPersecucion() {
    let distanciaX = Math.abs(alien.posX - jugador.posX);
    let distanciaY = Math.abs(alien.posY - jugador.posY);

    let cantidadDePasos = 1;
    if (distanciaX > 1 || distanciaY > 1) {
        cantidadDePasos = 2;
    }

    for (let i = 0; i < cantidadDePasos; i++) {
        if (distanciaX > distanciaY) {
            if (alien.posX < jugador.posX) {
                alien.posX++;
            } else if (alien.posX > jugador.posX) {
                alien.posX--;
            }
        } else {
            if (alien.posY < jugador.posY) {
                alien.posY++;
            } else if (alien.posY > jugador.posY) {
                alien.posY--;
            }
        }

        distanciaX = Math.abs(alien.posX - jugador.posX);
        distanciaY = Math.abs(alien.posY - jugador.posY);
    }
}

    /**
     * Activa el modo persecucion
    */
    function verificarModoPersecucion() {
        if (juego.compuerta.activa &&
            jugador.posX === juego.salida.posX &&
            jugador.posY === juego.salida.posY) {
            juego.salida.alarma = true;
        }
    }

    /**
     * Esto verifica si el jugador activa la salida
    */
    function verificacionActivacionSalida() {
        if (juego.compuerta.activa &&
            jugador.posX === juego.salida.posX &&
            jugador.posY === juego.salida.posY) {
            juego.salida.turnos++;
            if (juego.salida.turnos >= 5 && !juego.salida.activa) {
                juego.salida.activa = true;
                console.log("¡La salida fue activada! Ahora podes escapar.");
            }
        } else {
            juego.salida.turnos = 0;
        }
    }

    /**
     * Esto verifica si el jugador activa la compuerta 
    */
    function verificarActivacionCompuerta() {
        if (jugador.posX === juego.compuerta.posX &&
            jugador.posY === juego.compuerta.posY) {
            juego.compuerta.turnos++;
            if (juego.compuerta.turnos >= 3 && !juego.compuerta.activa) {
                juego.compuerta.activa = true;
                console.log("¡La compuerta fue activada!");
            }
        } else {
            juego.compuerta.turnos = 0;
        }
    }

    /**
    * Esto mueve al alien en modo patrullaje inicial
    */
    function moverAlienPatrullajeVertical() {
        if (juego.compuerta.activa) {
            alien.posX = 6;
        } else {
            alien.posX = 3;
        }
        if (alien.posY === 0 || alien.posY === 9) {
            alien.direccionY *= -1;
        }
        alien.posY += alien.direccionY;
    }

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
    function posicionarElementos() {
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
     * Esto crea la matriz del tablero vacio
     */
    function crearTablero() {
        for (let i = 0; i < 10; i++) {
            tablero.push([]);
            for (let j = 0; j < 10; j++) {
                tablero[i].push(" . ");
            }
        }
    }


