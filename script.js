var jugador1 = prompt("Jugador 1, escoja piedra, papel o tijera").toLowerCase()
var jugador2 = prompt("Jugador 2, escoja piedra, papel o tijera").toLowerCase()

if(jugador1 == "piedra"){
    if(jugador2 == "tijera"){
        document.write("El jugador 1 gana")
    }else if(jugador2 == "papel"){
        document.write("El jugador 2 gana")
    }else{
        document.write("Es un empate")
    }
};

if(jugador1 == "papel"){
    if(jugador2 == "piedra"){
        document.write("El jugador 1 gana")
    }else if(jugador2 == "tijera"){
        document.write("El jugador 2 gana")
    }else{
        document.write("Es un empate")
    }
};

if(jugador1 == "tijera"){
    if(jugador2 == "papel"){
        document.write("El jugador 1 gana")
    }else if(jugador2 == "piedra"){
        document.write("El jugador 2 gana")
    }else{
        document.write("Es un empate")
    }
};



