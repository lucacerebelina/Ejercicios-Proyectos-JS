/*- Crear una funcion que devuelva una porcion del texto recibido segun la posicion de los caracteres
- Documentacion:
    
    -   ```
        /**
        * Recorta el texto en un rango definido
        * @param {String} texto a recortar
        * @param {Number} posInicial del recorte en el texto (inclusive)
        * @param {Number} posFinal del recorte en el texto (inclusive)
        * @returns el texto recortado segun las posiciones de inicio y fin indicadas
        
        function recortar(texto, posInicial, posFinal) {
        }
        ```
        */

const leer = require("prompt-sync")();

function main() {
    let palabra = "Hello world!";
    let palabraRecortada = "def palabra recortada";

    palabraRecortada = recortar(palabra, 2, 7);

    console.log(palabraRecortada); // -> "llo wo"
}

main();

/**
* Recorta el texto en un rango definido
* @param {String} texto a recortar
* @param {Number} posInicial del recorte en el texto (inclusive)
* @param {Number} posFinal del recorte en el texto (inclusive)
* @returns el texto recortado segun las posiciones de inicio y fin indicadas
*/
function recortar(texto, posInicial, posFinal) {
    return texto.slice(posInicial, posFinal + 1);
}