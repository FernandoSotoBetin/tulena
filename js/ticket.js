(function() {

    var btnGenerar = $("[data-generar]");
    var btnLimpiar = $("[data-limpiar]");
    var maxRandon;
    var cont;
    var intervalo;
    var aleatorio;
    var al;
    var contC = 0;

    btnGenerar.on("click", tiempo);

    btnLimpiar.on("click", function() {
        $("#message").text("eureka!!!");
        $("#random").text("Bienvenidos!");
        contC = 0;
    });

    // DB De Clientes
    var dbCliente = [
            { id : "01", name : "Juan Fernando Soto" },
            { id : "02", name : "Jhon Soto" },
            { id : "03", name : "Cristian Fisher" },
            { id : "04", name : "Oscar Velandia" },
            { id : "05", name : "Arnaldo Soto" },
            { id : "06", name : "Ruben Charris" },
            { id : "07", name : "Victor Guerra" },
            { id : "08", name : "Jhon Núñes" },
            { id : "09", name : "Daniela De La Hoz" },
            { id : "10", name : "Esildays De La Hoz" },
            { id : "11", name : "Andro Betin" },
            { id : "12", name : "Fausto Alvarado" },
            { id : "13", name : "Guillermo Arango" },
            { id : "14", name : "Ricardo Tulena" },
            { id : "15", name : "Carlos Tulena" },
            { id : "16", name : "Abel Lobo" },
            { id : "17", name : "Carlos Cruz" },
            { id : "18", name : "Janeis Soto" },
            { id : "19", name : "Carmen Betin" },
            { id : "20", name : "Roberto De La Hoz" }
        ];

    function tiempo(event) {
        event.preventDefault();
        maxRandon = $("[data-input='maxRandom']");
        $("#message").text('Generando Ticket Ganador....!');
        cont = 0;
        intervalo = setInterval(generarRandom, 300);
    }

    function generarRandom() {
        if (cont<20) {
            aleatorio = Math.floor( Math.random() * Number(maxRandon.val()));
            
            if($("#rTexto").is(':checked')) {
                $.getJSON("./js/dbClientes.json", function(data) {
                    $("#random").text(data.clientes[aleatorio].name);
                });
                //$("#random").text(dbCliente[aleatorio].name);
            } else {
                $("#random").text(aleatorio);
            }
        } else {
            stopRandom();
        }
        
        cont ++;
    }   

    function stopRandom() {
        clearInterval(intervalo);
        contC += 1;

        // if(contC == 1){
        //     $("#random").text("Rodolfo Peñuela");
        // }
        // else if(contC == 2){
        //     $("#random").text("Juan Carlos Medrano");
        // }
        // else if(contC == 3){
        //     $("#random").text("Roque Ayala");
        // }
        // else if(contC == 4){
        //     $("#random").text("Otros1");
        // }
        // else if(contC == 5){
        //     $("#random").text("Otros2");
        // }
        // else if(contC == 6){
        //     $("#random").text("Otros3");
        // }
        // else {
        //      $("#random").text("Varios4");
        // }

        $("#message").text("Ticket Ganador!");
    }
})();