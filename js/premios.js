// DECLARACIÓN DE VARIABLES GLOBALES
var canvas, contexto, btnGenerar;
var intervalo = null;
var cont, aleatorio;
var msg = [];
var imagenes = new Array();
var ruta = new Array();
var cantidad;

var galeria = {
    imgPortada: "imagen de portada",
    imgPortadaOk: false
};

function inicio() {   
    canvas = document.getElementById("canvashtml");
    contexto = canvas.getContext("2d");
    btnGenerar = document.getElementById("btnGenerar");
    chBonus = document.getElementById("chBonus");
    // CARGA LA IMAGEN DE LA PORTADA ASIGNADA A UN OBJETO JSON
    galeria.imgPortada = new Image();
    galeria.imgPortada.src = "images/Sala-Fondo.png";
    galeria.imgPortadaOk = true;
    
    galeria.imgPortada.onload = function()
    {
        contexto.drawImage(galeria.imgPortada, 2, 2);
    }
        
    btnGenerar.addEventListener("click", tiempo);
}

// FUNCIÓN INICIAR INTERVALO DE TIEMPO
function tiempo() {
    cantidad = 0;
    if($("#ckBonus").is(':checked'))
    {
        ruta[cantidad] = "images/CasinoBonus.png";
        msg[cantidad] = "Bonus Casino";
        cantidad += 1;
    }
    if($("#ckWhisky").is(':checked'))
    {
        ruta[cantidad] = "images/Whisky.png";
        msg[cantidad] = "Whisky";
        cantidad += 1;
    }
    if($("#ckAncheta").is(':checked'))
    {
        msg[cantidad] = "Ancheta";
        ruta[cantidad] = "images/Ancheta.png";
        cantidad += 1;
    }
    if($("#ckElectro").is(':checked'))
    {
        msg[cantidad] = "Electrodoméstico";
        ruta[cantidad] = "images/Electrodomesticos.png";
        cantidad += 1;
    }

    cont = 0;
    intervalo = setInterval(cambiarImagen,300);
}

// FUNCIÓN CAMBIAR IMAGEN CADA 300 MILISEGUNDO
function cambiarImagen() {
    if (cont<20) {
        aleatorio = Math.floor( Math.random() * cantidad);
        imagenes[aleatorio] = new Image();
        switch(aleatorio) {
            case 0:
                    imagenes[aleatorio].src=ruta[0];
                    //msg[aleatorio] = msg[0];
                    break;
            case 1:
                    imagenes[aleatorio].src=ruta[1];
                    //msg[aleatorio] = msg[1];
                    break;
            case 2:
                    imagenes[aleatorio].src=ruta[2];
                    //msg[aleatorio] = msg[2];
                    break;
            case 3:
                    imagenes[aleatorio].src=ruta[3];
                    //msg[aleatorio] = msg[2];
                    break;
            default:
                    alert("Opción Invalida");
        }

        imagenes[aleatorio].onload = function() {
            contexto.drawImage(imagenes[aleatorio], 2, 2);
        }
    }
    else
    {
        stopImagen();
    }
    
    cont ++;
}

// FUNCIÓN DETENER INTERVALO DE TIEMPO
function stopImagen() {
    clearInterval(intervalo);
    $("#message").text('Usted Participara En El Sorteo De: ' + msg[aleatorio]);
    //alert("Usted Participara En El Sorteo De: " + msg[aleatorio]);
}
