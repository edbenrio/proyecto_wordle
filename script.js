let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
console.log(palabra);
window.addEventListener('load', init)

function init(){
    const button = document.getElementById("guess-button");
    const INPUT = document.getElementById("guess-input");
    button.addEventListener("click", intentar);

    function intentar(){
        const INTENTO = leerIntento();
        if( INTENTO == palabra){
            terminar("<h1>GANASTE!😀</h1>")
            return;
        }

        const GRID = document.getElementById("grid");
        const ROW = document.createElement("div");
        ROW.className = 'row';

        for ( i in palabra){
            const SPAN = document.createElement('span')
            SPAN.className = 'letter';
            SPAN.innerHTML = INTENTO[i];
            if( INTENTO[i] == palabra[i] ){
                SPAN.style.background = '#79b851'
            }else{
                palabra.includes( INTENTO[i] ) ? SPAN.style.background = '#f3c237' : SPAN.style.background = '#a4aec4';
            }
            ROW.appendChild(SPAN);
        }
        GRID.appendChild(ROW);

        intentos--;
        if( intentos == 0) terminar("<h1>PERDISTE!😖</h1>");
    }

    function leerIntento(){
        intento = INPUT.value;
        intento = intento.toUpperCase(); 
        return intento;
    }

    function terminar(mensaje){
        INPUT.disabled = true;
        button.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }
}